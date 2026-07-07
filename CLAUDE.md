# CLAUDE.md

Guidance for Claude Code working in this repository. **New session? Read `start.md` first.**

## Project

**rise8companies.com Revamp** — a from-scratch **content refresh + redesign** of RISE8 Companies' corporate website. Rebuild as a **Next.js app on Vercel**, migrating off the current SiteGround/WordPress site. Focus: content quality, design fidelity, and a clean build. (SEO is out of scope for this repo — it lives in the separate Stayable/SEO repo.)

## Business context

RISE8 Companies is a vertically integrated real estate investment & operations firm, HQ Boca Raton FL (Palm Beach County), owner of the **Stayable** extended-stay hotel brand (8 FL properties) and **Stayable Fund I (SFI)**. Principal: **Rob Beyer**. For deeper context, load the `rise8-business-context` skill. Audiences for this site: investors/LPs, operating partners, prospective hires, press.

## Ownership

- **Kyle** — implementer: site snapshot, content drafting, Next.js build, Vercel deploy, DNS/redirects.
- **Rob** — approves **content** and owns the **design** (generates in Claude Design, shares design files). Kyle implements from those files.

## Workflow (see PLAN.md for detail)

1. **Site snapshot** → `snapshot/site-state.md` (baseline map of the current site).
2. **Content improvement** — rewrite/tighten current copy → Rob approves before it ships.
3. **Design** — Rob drives look & feel + generates in Claude Design → shares design files.
4. **Implementation** — build in Next.js, deploy to a Vercel **preview** URL for Rob → approve → DNS cutover.

## Tech stack

- **Framework:** Next.js (App Router) + React + TypeScript.
- **Styling:** Tailwind CSS (maps cleanly to Claude Design output).
- **Hosting:** Vercel. Build in parallel; live preview URLs for review; cut DNS over only after approval.
- **Content:** see open decision below.
- **Design source:** Claude Design → React/Tailwind components dropped into the app.

## Open decision — content editing (resolve before scaffolding)

Who maintains content long-term?
- **Kyle is sole editor** → keep content in **MDX/code**. Simplest; no CMS.
- **Rob/staff need self-serve editing** → add a lightweight **headless CMS** (Sanity / Payload / Contentful). More setup; decide up front — it shapes the architecture.

## Migration guardrails

- **Never touch the live SiteGround site** during the build. Parallel build only; cutover is a deliberate, approved step.
- **301 redirect map** old URLs → new before cutover (preserve existing links/equity).
- **Confirm DNS + email/MX location** before any DNS change — do not break RISE8 email. Vercel serves the web front-end only.

## Conventions (ported from the Stayable/SEO repo)

- **Task tracking in repo `.md` files** (`todo.md`, keyword/plan docs) — never Smartsheet.
- **`lessons.md`** — append a rule after every correction (self-improvement loop).
- **Snapshot before destructive/live changes**; prefer `--dry-run` then `--apply` for any scripted mutation.
- **Test-channel-first** for any outward notification; nothing outward-facing without explicit go-live.
- Python: use `py` (Windows). Node: `npm`.

## Accuracy (non-negotiable)

Never fabricate figures, dates, names, signatures, financials (AUM, returns, fund performance), or track-record claims. If a fact isn't verified, say so — do not invent it for copy. Brand is **"RISE8 Companies"**.

## Dev commands (once the app is scaffolded)

```bash
npm install
npm run dev          # local dev server
npm run build        # production build
npx vercel           # deploy to a preview URL
npx vercel --prod    # promote to production (post-approval only)
```

## Code style

- Clear, minimal-comment code; small focused components.
- Follow Next.js/React conventions; match surrounding style.
- Descriptive commits focused on the "why"; small and single-purpose.
