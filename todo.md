# rise8companies.com Revamp — TODO

Task tracking lives here (repo `.md` files), never Smartsheet. See `PLAN.md` for full detail and `CLAUDE.md` for guardrails.

## Current Sprint
- [ ] **Send snapshot + approach message to Rob** for go-ahead (message text in `PLAN.md`).
- [ ] **Resolve content-editing decision**: Kyle sole editor (MDX/code) vs. Rob/staff self-serve (headless CMS). Shapes architecture — decide before scaffolding.
- [ ] **Clean up current site (independent of rebuild):** unpublish/redirect the 11 public HR-doc posts (exposure flag — see snapshot §4c); unify header vs footer "Investors" link.

## Completed (this session)
- [x] **Site snapshot** → `snapshot/site-state.md` (all pages, nav, copy, assets, 301 draft).
- [x] **Migration preflight** — CMS = WordPress/SiteGround; DNS = SiteGround NS; email = Microsoft 365 (preserve MX + SPF at cutover); web A `34.174.186.164`.

## Backlog
- [ ] Content improvement — rewrite/tighten current copy → Rob approves before it ships.
- [ ] Receive Rob's design files (Claude Design) → scaffold Next.js app (App Router + TS + Tailwind).
- [ ] Build from design files; deploy to Vercel preview URL for Rob.
- [ ] Build 301 redirect map (old URLs → new) before cutover.
- [ ] Confirm DNS + email/MX location before any DNS change; Vercel serves web front-end only.
- [ ] DNS cutover — deliberate, approved step only. Never touch the live SiteGround site before then.

## Completed
- [x] Scaffold repo: `CLAUDE.md`, `PLAN.md`, `start.bat` one-click launcher.
