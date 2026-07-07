# rise8companies.com Revamp — TODO

Task tracking lives here (repo `.md` files), never Smartsheet. See `PLAN.md` for full detail and `CLAUDE.md` for guardrails.

## Current Sprint
- [ ] **Send snapshot + approach message to Rob** for go-ahead (message text in `PLAN.md`); include the preview URL https://rise8companies-seo.vercel.app.
- [ ] **[Cross-repo / SEO] Rotate the exposed WordPress app password** — `SEO/CLAUDE.md` line 26 has a live-looking `WP_APP_PASSWORD` committed in plaintext (also in git history). Rotate in WP Admin, move to `.env` only.
- [ ] **Get Rob's design files** (Claude Design) → integrate components into the scaffold.
- [ ] **Content rewrite** — real copy per page → Rob approves before it ships. Verify every figure (unit/property/employee counts, bio claims) before use.
- [ ] **Clean up current site (independent of rebuild):** unpublish/redirect the 11 public HR-doc posts (exposure flag — snapshot §4c); unify header vs footer "Investors" link.

## Backlog
- [ ] Wire the contact form to a submission endpoint.
- [ ] (Optional) Move the Vercel project from `stayable-admins-projects` to Rob's scope if preferred.
- [ ] Verify the 301 map covers every old inbound URL before cutover.
- [ ] DNS cutover — change only the web A/CNAME at SiteGround DNS; preserve MX + SPF (Microsoft 365). Deliberate, approved step only. Never touch the live SiteGround site before then.

## Completed (this session)
- [x] **Site snapshot** → `snapshot/site-state.md` (all pages, nav, copy, assets, 301 draft).
- [x] **Migration preflight** — CMS = WordPress/SiteGround; DNS = SiteGround NS; email = Microsoft 365 (preserve MX + SPF at cutover); web A `34.174.186.164`.
- [x] **Content-editing decision = MDX / in-repo** (Kyle sole editor; no CMS). The SEO repo's WordPress-app-password model doesn't port since we're leaving WordPress.
- [x] **Scaffold Next.js app** — Next 16 (App Router) + React 19 + TS + Tailwind v4 + MDX. All 8 routes build static; 301 redirect map wired and verified at runtime. Neutral placeholder design pending Rob's Claude Design files.
- [x] **Pushed to `origin/main`** and **deployed to Vercel** (team `stayable-admins-projects`): https://rise8companies-seo.vercel.app — real domain untouched (DNS still on SiteGround).

## Completed (earlier)
- [x] Scaffold repo: `CLAUDE.md`, `PLAN.md`, `start.bat` one-click launcher.
