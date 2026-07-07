# START HERE — rise8companies.com Revamp

**Read this first, then `CLAUDE.md`, then `PLAN.md`.**

## What this project is
A ground-up **content refresh + redesign** of **rise8companies.com** — RISE8 Companies' corporate site (vertically integrated real estate investment & operations firm, HQ Boca Raton FL; owner of the Stayable brand). Rebuilt from scratch as a **Next.js site deployed on Vercel**, replacing the current SiteGround/WordPress site. This is **not** an SEO repo — focus is content quality + design + build.

## Repo
- **Remote (already connected):** `https://github.com/Stayable/rise8companies-seo.git`
- This folder (`rise8companies-seo/`) is the local working copy. It was cloned empty — the first real commit will scaffold the docs + Next.js app.
- Confirm with: `git remote -v` (should show the URL above).

## Ownership & approval gates (from PLAN.md)
- **Kyle (bke@rise8companies.com):** implementer — snapshot, content drafting, build, deploy.
- **Rob Beyer:** approves **content** (step 2) and owns the **design** (step 3 — he generates it in Claude Design and shares the design files).

## First tasks (in order)
1. **Verify the remote** (`git remote -v`) and confirm you're in `rise8companies-seo/`.
2. **Generate the site-state snapshot** — crawl/read the *current* rise8companies.com and produce `snapshot/site-state.md`: every page, its URL, heading structure, current copy summary, nav/architecture, and assets. This is the baseline Kyle sends to Rob and the content rewrite works from. (Read-only fetch of the live site — no writes to the old site.)
3. **Preflight the migration facts** (record answers in `snapshot/site-state.md`):
   - Current CMS/stack of rise8companies.com (WordPress? something else?).
   - Where **DNS + email/MX** are hosted (must not break RISE8 email at cutover).
   - Full URL inventory → for the 301 redirect map at cutover.
4. **Scaffold the Next.js app** only after the snapshot exists and the content-editing decision is made (see CLAUDE.md → "Open decision: content editing").

## Guardrails
- Build the new site in **parallel** — never touch the live SiteGround site until Rob approves a Vercel preview and DNS is cut over.
- **Accuracy:** never fabricate financials, AUM, returns, track record, or executive claims. Brand is **"RISE8 Companies"** (not "Rise 8", not "Stayable Suites").
- Track all tasks/progress in repo `.md` files (`todo.md`), never Smartsheet.
- Use `py` (not `python`) for any Python; Node/npm for the app.

## Pointers
- `PLAN.md` — the full revamp plan, workflow, architecture decision, and the message sent to Rob.
- `CLAUDE.md` — project instructions, conventions, tech stack, dev commands.
