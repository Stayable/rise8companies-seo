# rise8companies.com — TODO

Task tracking lives here (repo `.md` files), never Smartsheet. See `PLAN.md` for detail and `CLAUDE.md` for guardrails.

## 🟢 LIVE — cut over 2026-08-14

`rise8companies.com` and `www` now serve the Next.js app from Vercel
(`76.76.21.21`). Mail confirmed working end to end — inbound test delivered to
`rb@rise8companies.com` after the flip. `invest.rise8companies.com` unaffected.

> **StatusCake alerted "down" during cutover and has since recovered by itself.**
> Cause was the certificate gap: Vercel only requests a cert once it sees DNS
> pointing at it, so HTTPS fails the handshake for a few minutes in between. Not a
> misconfiguration, and nothing to change — but expect the same on any future
> domain move, and it is worth knowing before reading today's uptime figures.

## Watch for the next 48 hours
- [ ] **Google's resolver (`8.8.8.8`) is still serving the old apex** from the 24-hour TTL. Harmless — SiteGround is still up and serving — but until it ages out, some visitors and monitoring nodes still see the WordPress site. Do not judge traffic or uptime numbers until it clears.
- [ ] **Raise TTLs back to `3600`** on the apex and `www` once things look settled.
- [ ] Set the canonical hostname in Vercel → Settings → Domains (`www` → apex, or the reverse). Not urgent; both currently serve.
- [ ] Submit the sitemap in Google Search Console / Bing and confirm the property URL.

> **Contact addresses consolidated to `ir@rise8companies.com`** on the home page —
> footer Contact column and the "Contact IR" button. `press@` and `careers@` were
> removed entirely. All four addresses now on the site (`ir@`, `finance@`, `info@`,
> and `eh-info@` for Everybody's Home) are confirmed live and monitored.

## Content punch list (shipped as-is by decision — see `REVIEW.md`)
- [ ] **Rob's biography** — 20+ years, $750M firm, VP at RELATED, three degrees, Nevada Bar, Florida broker's licence. None verified; bar admission and licence are public record. Highest-priority item.
- [ ] **Rob's title is inconsistent** — "Founder & Principal" on the card, "CEO" on the letter, "managing principal" in the bio.
- [ ] **HQ city** — set to Boca Raton; the design PDF's footer still says Jacksonville. Get the design changed so they stop drifting.
- [ ] **Management page** now reads "In-house since founding · Boca Raton · Est. 2014" — wrong if the firm was founded elsewhere.
- [ ] Verify key counts, market count, and the chronology dates.
- [ ] Real leadership headshots — the current ones were extracted from the PDF at 196×195 and 240×216.
- [ ] Crystal's bio says "resident experience"; confirm that over "guest" for extended-stay.

## DNS follow-ups (`snapshot/dns-zone.md`)
- [ ] **Forward `investors@` / `press@` / `careers@` on rise8mgmt.com** — removed from the site but still in Google's index and in address books from the old pages.
- [ ] **Fix the staging-host bug on the old WordPress site** — its privacy policy still gives `corporate@kylee23.sg-host.com`, a mailbox that does not exist. Fixed on the new site (now `info@rise8companies.com`), but the old page stays in Google's index until corrected or retired.
- [ ] **Identify `1522905413783._domainkey`** — an unaccounted-for DKIM selector.
- [ ] **`mail.rise8companies.com` points at SiteGround** while mail runs on Microsoft 365. Check nothing uses it.
- [ ] **When SiteGround is cancelled, delete `mail`, `autoconfig`, `ftp`, `ssh`** — all still `A` → `34.174.186.164`. Once that IP is reassigned they become a subdomain-takeover risk. **Do not delete before then** — rollback depends on SiteGround serving.

## Reverted this session — do not redo without asking
- **`/careers` page.** Rebuilt from the WordPress original (intro, EEO statement, JazzHR link) then reverted on request. `/careers` 301s to `/#contact` again. To restore: `git revert e90bd8e`. The JazzHR link, if ever needed, is `https://stayablesuites.applytojob.com/apply/jobs/`.
- **Property card popup on the map.** Built with photo, description and Book / Start-a-lease links, then removed. Map is pins and labels only. The per-property `desc` strings stay in `content/site.ts`; no leasing URL exists on rentstayable.com.

## Backlog
- [ ] Wire a contact form to a submission endpoint (mailto-only today).
- [ ] Decide on a News page — the design's footer linked one; it does not exist.
- [ ] Jacksonville West has no exterior photo of its own.
- [ ] **[Cross-repo / SEO] Rotate the exposed WordPress app password** — `SEO/CLAUDE.md` line 26 has a live-looking `WP_APP_PASSWORD` in plaintext, also in git history.
- [ ] Unpublish/redirect the 11 public HR-doc posts on the old site (exposure flag — snapshot §4c).

## Done
- [x] Site snapshot, migration preflight, full DNS zone inventory (`snapshot/dns-zone.md`).
- [x] Built from Rob's Claude Design PDF — eight values, full biographies, portfolio atlas, three company pages.
- [x] Property photos from the supplied originals + rentstayable.com, optimised to WebP.
- [x] Privacy policy and terms ported verbatim from the live site.
- [x] Mobile menu; floating index gated to ≥1650px so it stops overlapping the register.
- [x] 301 map verified live; added `id="contact"` to the footer so `/contact-us` and `/careers` land on something real rather than a dead anchor.
- [x] **DNS cutover** — `CUTOVER.md`. Email, Teams, Intune, DKIM and the investor portal all verified intact.
- [x] Portfolio map reduced to a single full-width column, matching the design.
- [x] Contact addresses consolidated to `ir@`; legal-page address set to `info@`.
- [x] Post-cutover verification: 301 map, all routes, certificates on both hostnames, mail flow end to end.
