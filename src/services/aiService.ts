const OPENROUTER_API_URL = "https://openrouter.ai/api/v1/chat/completions";

interface AIRequestOptions {
    systemPrompt: string;
    userPrompt: string;
    maxTokens?: number;
    temperature?: number;
}

interface AIStructuredRequestOptions extends AIRequestOptions {
    schema: Record<string, unknown>;
    schemaName?: string;
    schemaDescription?: string;
}

function getApiConfig() {
    const apiKey = import.meta.env.VITE_OPENROUTER_API_KEY;
    const model = import.meta.env.VITE_OPENROUTER_MODEL || "anthropic/claude-opus-4-6";
    if (!apiKey || apiKey.includes('your_openrouter_api_key')) {
        console.error("AI Service: Missing valid OpenRouter API Key");
        throw new Error("Missing OpenRouter API Key. Please set VITE_OPENROUTER_API_KEY in .env");
    }
    return { apiKey, model };
}

async function postOpenRouter(body: Record<string, unknown>, timeoutMs = 300000): Promise<any> {
    const { apiKey } = getApiConfig();
    const controller = new AbortController();
    const timeoutId = setTimeout(() => {
        console.log("AI Service: Request timed out");
        controller.abort();
    }, timeoutMs);

    try {
        console.log("AI Service: Sending fetch request...");
        const response = await fetch(OPENROUTER_API_URL, {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${apiKey}`,
                "Content-Type": "application/json",
                "HTTP-Referer": window.location.origin,
                "X-Title": "MiCA Marketing Platform"
            },
            signal: controller.signal,
            body: JSON.stringify(body)
        });
        clearTimeout(timeoutId);

        if (!response.ok) {
            const errorData = await response.json().catch(() => ({}));
            throw new Error(`AI API Error: ${errorData?.error?.message || response.statusText}`);
        }

        return await response.json();
    } catch (error: unknown) {
        if (error instanceof Error && error.name === 'AbortError') {
            throw new Error("AI request timed out. The model is taking too long to respond. Please try again.");
        }
        console.error("AI Service Error:", error);
        throw error;
    }
}

export async function callAI({ systemPrompt, userPrompt, maxTokens = 8000, temperature = 0.7 }: AIRequestOptions): Promise<string> {
    const { model } = getApiConfig();
    console.log("AI Service: Initiating call...", { model, maxTokens });

    const data = await postOpenRouter({
        model,
        messages: [
            { role: "system", content: systemPrompt },
            { role: "user", content: userPrompt }
        ],
        max_tokens: maxTokens,
        temperature
    });
    return data.choices?.[0]?.message?.content || "";
}

// Forces the model to return structured JSON via OpenRouter tool-calling.
// The API guarantees valid JSON: string contents (e.g. HTML with double quotes)
// are properly escaped, eliminating the brittle parse-and-repair pattern.
export async function callAIStructured<T = unknown>({
    systemPrompt,
    userPrompt,
    schema,
    schemaName = "return_result",
    schemaDescription = "Return the structured result conforming to the schema.",
    maxTokens = 8000,
    temperature = 0.7
}: AIStructuredRequestOptions): Promise<T> {
    const { model } = getApiConfig();
    console.log("AI Service: Initiating structured call...", { model, maxTokens, schemaName });

    const data = await postOpenRouter({
        model,
        messages: [
            { role: "system", content: systemPrompt },
            { role: "user", content: userPrompt }
        ],
        max_tokens: maxTokens,
        temperature,
        tools: [{
            type: "function",
            function: {
                name: schemaName,
                description: schemaDescription,
                parameters: schema
            }
        }],
        tool_choice: { type: "function", function: { name: schemaName } }
    });

    const toolCall = data.choices?.[0]?.message?.tool_calls?.[0];
    const argsRaw = toolCall?.function?.arguments;
    if (argsRaw === undefined || argsRaw === null) {
        const fallback = data.choices?.[0]?.message?.content;
        throw new Error(
            `AI Service: No structured tool call returned. Fallback content: ${fallback ? String(fallback).slice(0, 200) : '(empty)'}`
        );
    }
    try {
        return (typeof argsRaw === 'string' ? JSON.parse(argsRaw) : argsRaw) as T;
    } catch (e) {
        throw new Error(`AI Service: Failed to parse tool arguments as JSON: ${(e as Error).message}`);
    }
}
