# MiCA — project context for Claude

## Who's working on this

**Satbir** is the sole owner and developer. There is no team. Treat all branches as personal/AI-experiment branches, not teammate work.

Satbir is non-coding background — communicate in plain language, explain technical concepts when introducing them, don't assume CLI / git fluency.

## What MiCA is

A React + Vite + TypeScript app. Marketing campaign generator: user describes their business once, the app builds and launches a complete campaign across email, WhatsApp, and Instagram using AI.

- **AI providers:** OpenRouter (text), Replicate (images), HeyGen (avatar video), OpenAI (alt text path)
- **Backend:** Supabase (auth + Postgres) — note the configured project may be paused/dead; demo mode is the reliable path for now
- **Branding:** orange (`#FF7A00`), dark theme, the "MiCA eyeball" character is the brand mascot

## Active workstreams

### Open-sourcing the project
**Read `OSS_NOTES.md` at the repo root.** It captures the full state of the OSS prep work — license decision (MIT, tentative), secrets-history scan results, QA findings, the API-key Settings page sketch, and the pending checklist.

Resume from the "What's pending" section at the top of that file.

### Demo mode
Demo mode is the bypass path that lets the app work without a live Supabase backend or paid API keys. Toggle: bottom-left button, or `Ctrl+Shift+D`, or `localStorage.mica_demo_mode = 'true'`. Demo data lives in `src/data/demoData.ts`.

For OSS users, demo mode is the "try it without setup" path — keep it working.

## Conventions

- **Routing:** `react-router-dom` v7. Public: `/`, `/login`, `/signup`. Auth-gated under `<ProtectedRoute>`: `/campaigns`, `/create-campaign`, `/campaign/:id/...`, `/demo-prep`.
- **Styling:** Tailwind v4 (`@tailwindcss/vite`). Brand orange `#FF7A00`. Dark theme is the default.
- **Animation:** `framer-motion` heavily. Eyeball character has its own state machine (focused / idle / etc.) via `AnimationContext` and `EyeballMoodContext`.
- **State:** Mostly local component state. Auth state via `AuthContext`. Animation modes via `AnimationContext`. No Redux / Zustand.

## Don't do

- Don't reinstate the `<AuthContext>` "render-only-when-not-loading" gate — it caused the public landing page to be blank when Supabase was unreachable. Fixed in commit `22a1313`. Public routes must render regardless of auth backend health.
- Don't commit anything in `.env` — the `.gitignore` already covers it. (One past leak in commit `479ad0c` of an OpenRouter key, already rotated.)
- Don't add the gstack `.gstack/` folder or the playwright MCP `.playwright-mcp/` folder to commits — they're tooling artifacts, already gitignored.

## File map (big picture)

```
src/
  App.tsx                    routing + global providers
  context/
    AuthContext.tsx          Supabase session + demo-mode auth bypass
    AnimationContext.tsx     eyeball mood / vignette mode
  pages/
    LandingPage.tsx          public marketing page (v2 landing redesign)
    Auth/Login.tsx, Signup.tsx
    Campaign/
      CreateCampaign.tsx     DoodleMap entry — "Start" → branching prompts
      TonePreview.tsx
      GeneratingCampaign.tsx
      Dashboard.tsx          per-campaign hub: video, strategy, tabs
      DoodleMap/             the interactive prompt-builder canvas
    DemoPrep.tsx             internal Demo Day readiness checklist
                             (NOT user-facing — env-gate or remove before OSS)
  components/
    FloatingHeroEyeball.tsx  the global mascot
    PeekingVignette.tsx      idle-edge eyeballs
    DemoModeToggle.tsx       bottom-left toggle (hidden in prod via env flag)
  data/
    demoData.ts              seed data for demo mode (Happiness Program, etc.)
  lib/
    supabase.ts              Supabase client init
```
