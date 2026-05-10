# MiCA — Open Source Release Working Notes

> **What this is:** working/scratch notes for releasing MiCA as open source. Captures the decisions, findings, and pending steps from a prep discussion on **2026-05-01**.
>
> **Delete this file before going public.** It's internal context only.

---

## Top of doc — current status

| | |
|---|---|
| **Owner** | you (Satbir) |
| **Date started** | 2026-05-01 |
| **Goal combo** | **B + D** — community self-host (B) + future paid hosted version (D) |
| **License (tentative)** | **MIT** — not yet locked in |
| **Repo strategy** | New public repo (not flipping the existing private one) |
| **Repo name** | TBD — candidates: `mica`, `mica-app`, `mica-ai` |
| **Current branch** | `notes/oss-prep` (based on `feature/v2-landing-page` after the AuthContext fix) |

### What's done
- ✅ Decided on goal (B + D, open-core / freemium pattern)
- ✅ Tentative license picked (MIT)
- ✅ Repo strategy picked (new public repo, not flip existing)
- ✅ Secrets-history scan complete — one rotated leak found
- ✅ Critical bug fix shipped: `AuthProvider` no longer blocks render when Supabase is unreachable (`22a1313`)
- ✅ Settings page UX sketched

### What's pending
1. **Confirm at OpenRouter dashboard that the leaked key is revoked** (action: you, ~1 minute)
2. **Pick the public repo name** (`mica` / `mica-app` / `mica-ai` / something else)
3. **List personal/internal references to clean** (Rajni Chowdhary, Art of Living, DisruptionInc, etc.)
4. **Build the Settings page + localStorage-with-env-fallback wiring** (~half a day, design done)
5. **Draft the public README** with self-host instructions
6. **Find/replace internal refs and demo data names**
7. **Push to new public repo, tag v0.1.0**

---

## Section 1 — The decisions, with the why

### Goal: B + D
- **B:** "I want strangers to use it and tell their friends."
- **D:** "I want to also sell a hosted version of it later."

This combo is called **open core / freemium open source**. Companies that work this way: Sentry, Cal.com, Plausible, Supabase, Mattermost.

### License: MIT (tentative)

Three license options were considered for B + D:

| Option | What it does | Pick if… |
|---|---|---|
| **MIT** | Permissive. Anyone can use, host, sell. | You picked B and want max adoption first. |
| **AGPL** | If someone hosts it as a paid service, they must publish their changes too. | Real protection but scares away some users. |
| **Open core** | MIT for the engine; the SaaS-only bits (multi-tenant, billing, admin) live in a private repo. | The model most B+D companies actually settle on. |

**Decision:** Start with MIT, plan for open-core later. Reasoning:
- No paid version exists yet. AGPL today protects against an attack that won't happen for years.
- MIT maximizes adoption. Adoption is what's needed first.
- MIT → AGPL switch later is annoying but possible.
- The "AWS forks you" scenario only happens after meaningful revenue.

### Repo strategy: new public repo (not flip existing)

The existing private repo (`github.com/DisruptionInc/MiCA-DemoDay`) has 200+ commits including one with a leaked API key. Two options for going public:

- **A.** Make existing repo public — easy, but exposes all history including the leaked key.
- **B.** Push clean code to a new public repo — loses history but sidesteps the leak.

**Decision: B (new public repo).** Faster, safer. Old private repo stays private for team history.

---

## Section 2 — Secrets-history scan results

Scanned every commit ever made for OpenAI, OpenRouter, Replicate, HeyGen, AWS, GitHub, Slack, and Stripe key patterns.

### Findings
**One real leak**, in the very first commit (`479ad0c "Initial commit for MiCA Marketing Platform"`):

| What leaked | Status |
|---|---|
| `VITE_OPENROUTER_API_KEY=sk-or-v1-1b2afd7f...f13de` | **Action needed:** confirm at openrouter.ai/keys that this key is deleted. Current `.env` already uses a different key, so it appears already rotated. |
| `VITE_SUPABASE_ANON_KEY` (a JWT) | Anon keys are *designed* to be public per Supabase. Not a real leak. |
| `VITE_SUPABASE_URL=zowtdicsjemienytdhjj.supabase.co` | The project is identified, but it's the dead/paused one anyway. |
| `VITE_OPENAI_API_KEY=` (empty) | Nothing leaked. |

**Nothing else leaked anywhere.** The Replicate (`r8_*`), HeyGen (`sk_V2*`), and current OpenRouter keys in `.env` today never appeared in any commit. Clean.

### Why this is fine for the new-repo strategy

Because we're pushing to a new public repo, the old `479ad0c` commit never becomes public. The leaked key sits in *private* history forever, which is fine — only people with private repo access can see it, and that's already happened.

No `git filter-repo` history-rewriting surgery needed.

### Action item for you

→ Log in to **openrouter.ai/keys**. Find the key starting with `sk-or-v1-1b2afd7f`. **If it's still listed and active, delete it.** Should take 30 seconds. Bots scrape public GitHub history within seconds, but this leak was in a *private* repo, so the risk is much lower.

---

## Section 3 — QA findings from this session

(Full report at `.gstack/qa-reports/qa-report-localhost-2026-05-01.md` — but that folder is gitignored, so the key bits are reproduced here.)

### Health score: 0 → 84

Before the fix below, the public landing page was **completely blank** for any user without a working Supabase connection. After the fix, full content renders.

### ISSUE-001 — Blank app when Supabase is unreachable [CRITICAL] [FIXED in `22a1313`]

**Symptom:** `/`, `/login`, `/signup` all rendered as a uniform dark blank page. `document.getElementById('root').children.length === 0`. Console showed Supabase DNS errors but no React error.

**Root cause:** `src/context/AuthContext.tsx` returned `{!loading && children}`. `loading` was only cleared inside `.then()` of `supabase.auth.getSession()`. With no `.catch()`, when Supabase's URL didn't resolve, the promise retried forever, `loading` stayed `true`, and the entire React tree never rendered — including public routes.

**Fix:** Render `children` unconditionally. Add `.catch()` for auth-backend failures. `ProtectedRoute` already gates auth-required pages on `loading`, so public pages are now resilient to auth-backend outages.

### ISSUE-002 — Demo Mode toggle overlaps footer text [LOW] [DEFERRED]

The fixed-position `DemoModeToggle` covers the leading "S" of "Social heroes…" in the footer on auth pages. Hidden in production via `VITE_HIDE_DEMO_CONTROLS`, so low priority. Three possible fixes documented in the QA report.

### ISSUE-003 — framer-motion `<path>` undefined `d` [LOW] [DEFERRED]

Console error on `/campaigns` and `/campaign/:id/dashboard`: some animated SVG path renders with `d={undefined}` for at least one frame. Doesn't break functionality. Likely candidates to investigate: `LaunchSection`, `DashboardComponents`, or `DoodleMap/*`.

### Configuration observation (not a code bug)

The configured `VITE_SUPABASE_URL` (`zowtdicsjemienytdhjj.supabase.co`) returns DNS failure. Likely the Supabase project is paused (free-tier auto-pause), deleted, or the URL is stale. Verify in the Supabase dashboard.

### Pages tested

| Page | Status |
|---|---|
| `/` (Landing) | ✅ renders after fix |
| `/login` | ✅ renders |
| `/signup` | ✅ renders |
| `/campaigns` | ✅ renders in demo mode |
| `/campaign/demo-happiness-001/dashboard` | ✅ renders in demo mode |
| `/create-campaign` | ✅ renders in demo mode |
| `/demo-prep` | ⚠️ renders in demo mode but visually noisy (peeking eyeballs scattered) |

### About `/demo-prep`

Added by **Josh Bot** (`josh@Joshs-Mac-mini.local`) on 2026-02-10 in commit `4b1f9be` ("feat: Implement Demo Mode with polished UI, video integration, and auth bypass"). It's an internal Demo Day readiness checklist, not user-facing. No nav link; only reachable by typing `/demo-prep`. **Should be removed or env-flagged before going public.**

---

## Section 4 — API-key UX (Settings page) sketch

### The thinking

Browser-side keys are fundamentally **as safe as `.env`** (both end up in the user's browser). So the question is purely UX: which entry method makes self-hosters happiest?

Three layers:
1. **Demo mode** (already exists) — tire-kickers, no keys needed.
2. **Settings page** (to build) — paste keys in UI, stored in localStorage. For users who want to actually use it without editing files.
3. **Supabase stays in `.env`** — it's structural. Each self-hoster sets up their own Supabase project (5 min, free) and puts URL + anon key in `.env`. Document with screenshots in the README.

### The Settings screen

- Route: `/settings`
- Three password-type inputs: OpenRouter / Replicate / HeyGen
- Each row has a **Test** button (tiny "whoami" call to that provider; shows ✓ or error)
- Each row shows: what the key does, where to get one, rough cost
- Save / Clear all keys buttons
- Footer note: "Keys are stored in your browser only. Never sent anywhere except the API providers."

### The wiring (one helper)

```ts
// src/lib/apiKeys.ts
export type ApiKeyName =
  | 'OPENROUTER_API_KEY'
  | 'REPLICATE_API_TOKEN'
  | 'HEYGEN_API_KEY';

const STORAGE_PREFIX = 'mica_api_';

export function getApiKey(name: ApiKeyName): string {
  // 1. Per-user value from localStorage (Settings page)
  const fromStorage = localStorage.getItem(STORAGE_PREFIX + name);
  if (fromStorage) return fromStorage;
  // 2. Fallback to .env (install-time config)
  const fromEnv = import.meta.env[`VITE_${name}`];
  if (fromEnv) return fromEnv;
  // 3. Nothing — call site must check this and prompt the user.
  return '';
}

export function setApiKey(name: ApiKeyName, value: string): void {
  if (value.trim()) localStorage.setItem(STORAGE_PREFIX + name, value.trim());
  else localStorage.removeItem(STORAGE_PREFIX + name);
}

export function hasApiKey(name: ApiKeyName): boolean {
  return getApiKey(name).length > 0;
}

export function clearAllKeys(): void {
  for (const k of Object.keys(localStorage)) {
    if (k.startsWith(STORAGE_PREFIX)) localStorage.removeItem(k);
  }
}
```

### Behavior properties

1. **localStorage wins over `.env`.** Per-user runtime always beats install-time default.
2. **`.env` still works.** Anyone who prefers the old flow gets identical behavior.
3. **Demo mode short-circuits everything.** If `mica_demo_mode === 'true'`, the code never reads keys.

### Files this touches when we build

| File | Change |
|---|---|
| `src/lib/apiKeys.ts` | **New.** The helper above. |
| `src/pages/Settings.tsx` | **New.** The screen above. |
| `src/App.tsx` | Add `/settings` route (public; keys are local). |
| All call sites currently using `import.meta.env.VITE_OPENROUTER_API_KEY` etc. | Replace with `getApiKey(...)`. ~5–10 sites. |
| README | Document both paths: `.env` *and* Settings UI. |

Roughly **150 lines of new code, 10 small edits**. Half a day.

---

## Section 5 — Pre-public cleanup checklist

When we eventually push to the new public repo:

### Must do (security / privacy)
- [ ] Confirm leaked OpenRouter key is revoked at openrouter.ai/keys
- [ ] Verify `.env` is gitignored (it is)
- [ ] Add `.env.example` with placeholder values
- [ ] Remove `HP_details/` (Demo Day skit docs — internal team materials)
- [ ] Decide on Rajni Chowdhary, Art of Living, Happiness Program — real names? Replace if so
- [ ] Remove or env-gate `/demo-prep` page
- [ ] Remove "DisruptionInc" company references
- [ ] Search for hardcoded email addresses, phone numbers, addresses

### Must do (legal)
- [ ] Add `LICENSE` file (MIT)
- [ ] Add license badge to README

### Must do (presentation)
- [ ] Write README with: one-sentence pitch, screenshot/GIF, install steps, API key setup, license
- [ ] Add `.env.example`
- [ ] Pick repo name
- [ ] Set repo description and topics on GitHub

### Nice to have (skip on day 1)
- [ ] Build the Settings page (huge UX win for B)
- [ ] Add demo video / hosted demo URL
- [ ] Project logo

### Skip until someone asks
- CONTRIBUTING.md
- CODE_OF_CONDUCT.md
- Issue templates
- GitHub Actions CI
- Discord/website

---

## Section 6 — How to resume this work later

### At home, on a fresh machine

```bash
cd path/to/MiCA-App
git fetch origin
git checkout notes/oss-prep
git pull
# Open OSS_NOTES.md and read this file again.
```

### To continue with Claude Code at home

Open a new Claude Code session in the project. Paste this short prompt to give it context:

> I'm continuing work on open-sourcing MiCA. Read `OSS_NOTES.md` at the repo root for full context on what we've decided, what's been scanned, and what's pending. We're at the point where we've sketched the Settings page UX (not yet built) and need to: (1) confirm the leaked OpenRouter key is revoked, (2) pick a public repo name, (3) build the Settings page, (4) draft the public README, (5) clean internal refs, (6) push to new public repo. What do you want to tackle first?

Claude will read the notes file and pick up from where we left off.

### To continue without Claude (DIY mode)

Work through the checklist in **Section 5** in order. The Settings page sketch in **Section 4** is detailed enough that any developer (or Claude) can implement it directly.

---

## Section 7 — Branches in this repo right now

| Branch | What's on it |
|---|---|
| `main` | The team's stable trunk. |
| `feature/v2-landing-page` | The current dev branch. **Includes the `AuthProvider` critical fix at commit `22a1313`.** |
| `notes/oss-prep` | **This branch.** Based on `feature/v2-landing-page`. Holds this notes file only. Personal working space — does not need to be merged. |

The AuthContext fix in `22a1313` is real production code and should land in `main` eventually via the team's normal PR process.

---

*Last updated: 2026-05-01 by Claude Code session*
