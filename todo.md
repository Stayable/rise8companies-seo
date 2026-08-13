# rise8companies.com Revamp — TODO

Task tracking lives here (repo `.md` files), never Smartsheet. See `PLAN.md` for full detail and `CLAUDE.md` for guardrails.

## Current Sprint
- [ ] **Rob to answer `REVIEW.md`** — HQ city (Jacksonville vs Boca Raton), founding/chronology dates, key counts, leadership titles + headshots, Everybody's Home contact details. Nothing ships until these are settled.
- [ ] **Get per-property booking URLs** for the portfolio register ("Book →" links are `#` today).
- [ ] **Port privacy policy + terms of use** from the WordPress site; counsel review (Palm Beach County) before go-live.
- [ ] **Decide on a News page** — the design footer linked one; it is not built.
- [ ] **[Cross-repo / SEO] Rotate the exposed WordPress app password** — `SEO/CLAUDE.md` line 26 has a live-looking `WP_APP_PASSWORD` committed in plaintext (also in git history). Rotate in WP Admin, move to `.env` only.
- [ ] **Clean up current site (independent of rebuild):** unpublish/redirect the 11 public HR-doc posts (exposure flag — snapshot §4c).

## Cutover (blocked on the above)
- [ ] Lower TTL on apex + `www` to 300 at SiteGround, two days ahead.
- [ ] Attach `rise8companies.com` + `www` to the `rise8companies-seo` Vercel project.
- [ ] `npx vercel --prod`, then flip the two A/CNAME records — **runbook in `CUTOVER.md`**.
- [ ] Verify MX / SPF / DMARC / autodiscover unchanged and send a test email both ways.

## Backlog
- [ ] Wire a contact form to a submission endpoint (site is mailto-only today).
- [ ] Real leadership portraits (build shows initials).
- [ ] Jacksonville West exterior photo (missing from the design export).
- [ ] (Optional) Move the Vercel project from `stayable-admins-projects` to Rob's scope.

## Completed
- [x] **Site snapshot** → `snapshot/site-state.md` (all pages, nav, copy, assets, 301 draft).
- [x] **Migration preflight** — CMS = WordPress/SiteGround; DNS = SiteGround NS; email = Microsoft 365; web A `34.174.186.164`. Re-verified 2026-08-14.
- [x] **Content-editing decision = in-repo TypeScript** (`content/site.ts`; Kyle sole editor, no CMS).
- [x] **Built the real site from Rob's Claude Design export** (`RISE8 WEBSITE/`) — design system ported to `app/globals.css`; home + Management + Real Estate Finance + Development; 301 map covers the old URL inventory. Build passes clean.
- [x] **Cutover runbook** → `CUTOVER.md`. **Content flags** → `REVIEW.md`.
