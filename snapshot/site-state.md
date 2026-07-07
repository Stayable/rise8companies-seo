# rise8companies.com — Site-State Snapshot (Baseline)

**Generated:** 2026-07-08 · **Method:** read-only crawl (public pages + WordPress REST API + sitemaps + DNS lookup). The live site was not modified.
**Purpose:** baseline map of the current site — the reference Rob reviews and the content rewrite works from.

> Accuracy note: all figures, names, and claims below are captured **as they appear on the current site**. Several are unverified marketing copy (unit/employee counts, prior-role AUM, years of experience). Verify before reusing any of them in new copy. Do not treat this snapshot as fact-checked.

---

## 1. Stack / CMS

- **CMS:** WordPress (confirmed: public `/wp-json/` REST API, `wp-sitemap-*.xml`, `/wp-content/uploads/` asset paths).
- **Host:** SiteGround (on Google Cloud; web A record `34.174.186.164`).
- **REST API is public/unauthenticated** — no Application Password needed to export content. (An app password would only be a convenience for structured export and would be used read-only; it is **not** the mechanism for editing the new site — that's the CMS-vs-MDX decision in `PLAN.md`.)

## 2. Migration preflight (DNS / email) — READ BEFORE ANY CUTOVER

| Record | Value | Implication |
|---|---|---|
| **Nameservers** | `ns1.siteground.net`, `ns2.siteground.net` | DNS is managed **at SiteGround**. Web records changed there. |
| **MX (email)** | `rise8companies-com.mail.protection.outlook.com` | Email is **Microsoft 365**. Must remain untouched at cutover. |
| **SPF (TXT)** | `v=spf1 include:spf.protection.outlook.com include:adobesign.com -all` | M365 + Adobe Sign senders. Preserve exactly. |
| **Web (A)** | `34.174.186.164` (SiteGround/GCP) | This is the only record that should change to point at Vercel. |

**Cutover rule:** Point web at Vercel by editing **only the A/CNAME record(s) at SiteGround DNS**. Leave MX + SPF TXT alone. Do **not** switch nameservers to Vercel unless MX/SPF are replicated there first — otherwise RISE8 email (Microsoft 365) breaks. Vercel serves the web front-end only.

## 3. Navigation architecture

**Header nav:** About Us · Culture and Values · Careers · Contact Us · **Investors** (→ external AppFolio login `global.appfolioim.com/session/new`)

**Footer:** About Us · Culture and Values · Careers · Investors (→ `/investors/`) · Contact Us · Terms of Use · Privacy Policy · email `info@rise8companies.com`

> Inconsistency: header "Investors" links straight to the AppFolio external login, while footer "Investors" links to the internal `/investors/` page. Unify in the rebuild.

## 4. Page inventory

### 4a. Real marketing pages — KEEP & rewrite

| URL | Title | Notes |
|---|---|---|
| `/` | Home | "Our Companies" overview + mission. Last modified 2025-11-12 (most recently touched). |
| `/about-us/` | About Us | Robert Beyer bio + credentials. |
| `/culture-and-values/` | Culture and Values | Eight core values. |
| `/careers/` | Careers | Intro + EEO statement; **no live job listings**, no ATS, no benefits detail. |
| `/investors/` | Investors | Thin — just a link to the AppFolio portal. |
| `/contact-us/` | Contact Us | Contact form only (First/Last/Email/Message); **no address or phone**. |
| `/terms-of-use/` | Terms of Use | Legal. Last modified 2024-11-21. |
| `/privacy-policy/` | Privacy Policy | Legal. Last modified 2024-11-21. |

### 4b. WordPress junk / staging — DO NOT MIGRATE (and clean up before cutover)

| URL | Why |
|---|---|
| `/home/` (id 12), `/home-page/` (id 161) | Duplicate/legacy home pages vs. the live `/`. |
| `/test/` (id 139) | Test page (stale 2023). |
| `/sample-page/` (id 2) | WordPress default (stale 2022). |
| `/login-customizer/` (id 15) | Plugin artifact. |

### 4c. ⚠️ Internal HR/ops documents published PUBLICLY as posts — REMOVE (content + exposure flag)

All 11 are employee-facing operations docs, publicly reachable, all stale (Apr–May 2023). They should not be on a public marketing site and likely should not be public at all. **Not migrating.** Consider unpublishing/redirecting on the current site now.

`/incident-reports/` · `/safety-manual/` · `/service-recovery/` · `/company-travel-and-expenses/` · `/talent-development-and-retention-alignment-meetings/` · `/talent-acquisition/` · `/personnel-action-form/` · `/disciplinary-action-form/` · `/property-level-organization/` · `/paid-time-off/` · `/time-attendance/`

## 5. Page content (verbatim claims preserved)

### Home (`/`)
- **OUR COMPANIES** overview. Positions RISE8 as a privately held real estate investment & management firm in **Boca Raton**, stated **"1,300+ units"** across central and north Florida, **"100+ employees."** *(unverified copy)*
- Four business lines:
  - **Stayable** — extended-stay brand; "low rates and superior family-like service"; **eight** Florida properties near universities, businesses, attractions.
  - **RISE8 Management** — hotel & apartment property management; operates all Stayable sites.
  - **RISE8 Real Estate Finance** — senior secured loans, mezzanine, preferred equity in lodging; targets "liquidity-limited" markets / special situations.
  - **RISE8 Development** — licensed general contractor for affiliated projects.
- **Mission / name origin:** Japanese proverb *"Nana korobi, yaoki"* — fall seven times, rise eight — framing persistence.

### About Us (`/about-us/`)
- **Robert Beyer — Founder & CEO.** *(claims verbatim, unverified)* "over 20 years of experience in nearly all aspects of commercial real estate"; attorney + financial advisor background; acquisitions, dispositions, management, debt/equity raising, JVs, loan restructuring.
- Prior: EVP & General Counsel at a firm managing **"$750 million in apartment, commercial, and lodging properties in the southwestern United States,"** motel-to-extended-stay conversions. Earlier: VP at **RELATED**.
- **Credentials:** B.B.A. Finance, University of Miami · J.D. magna cum laude, William S. Boyd School of Law (UNLV) · LL.M. Taxation, NYU School of Law · Nevada bar · Florida real estate broker's license.

### Culture and Values (`/culture-and-values/`)
Eight values with descriptions: **Integrity · Accountability** (Bill Parcells quote: "Blame no one. Expect nothing. Do something.") **· Innovation · Profitability · Communication · Teamwork · Living Fully · Doing Well by Doing Good.**

### Careers (`/careers/`)
- Headings: RISE8 Careers → Where Do You Fit? → A Place for Everyone → Open Positions.
- EEO statement present. "Location: Florida or Remote." **No live openings, no benefits list, no ATS integration.**

### Investors (`/investors/`)
- Single "Visit Investors Portal" link. Portal: `investors.appfolioim.com/stayable`; login: `global.appfolioim.com/session/new`.
- **No fund names, AUM, returns, or track-record figures** on the public page — all substantive material is behind AppFolio login.

### Contact Us (`/contact-us/`)
- Contact form: First Name, Last Name, Email, Message. Copy: "Our friendly team would love to hear from you."
- **No business address, no phone, no map, no social links.** Only `info@rise8companies.com`.

### Terms of Use / Privacy Policy
Standard legal pages (not re-read in depth here; carry over / refresh with counsel as needed).

## 6. Assets / brand

- **Logo:** `RISE8LogoSquareWhite-150x150.png` (`/wp-content/uploads/2024/02/`). White square mark. Alt text missing/weak site-wide (`Rise8_Companies_Logo_1`).
- Contact inbox: `info@rise8companies.com`.
- External systems referenced: **AppFolio Investment Management** (investor portal), **Adobe Sign** (per SPF).

## 7. 301 redirect map (draft — old → new)

Live marketing URLs are clean and should map 1:1 to the same paths in the new build:

| Old | New |
|---|---|
| `/` | `/` |
| `/about-us/` | `/about-us/` (or `/about/`) |
| `/culture-and-values/` | `/culture-and-values/` |
| `/careers/` | `/careers/` |
| `/investors/` | `/investors/` |
| `/contact-us/` | `/contact/` |
| `/terms-of-use/` | `/terms/` |
| `/privacy-policy/` | `/privacy/` |
| `/home/`, `/home-page/`, `/test/`, `/sample-page/`, `/login-customizer/` | → 301 to `/` |
| all 11 `/…/` HR-doc posts | → 301 to `/` (or 410 Gone) |

If any new path differs from the old (e.g. `/contact/` vs `/contact-us/`), add the 301 for the old path before cutover to preserve links/equity.

## 8. Gaps & recommendations for the rebuild

1. **Thin content.** Investors and Careers pages are near-empty; Contact lacks address/phone. Home is the only substantive page. The rewrite needs real content per audience (LPs, operating partners, hires, press).
2. **Remove internal HR docs from public web** (§4c) — content and exposure issue; act on the current site too.
3. **Unify the "Investors" nav** (header→external vs footer→internal).
4. **Fix accessibility basics** — real alt text, heading hierarchy (multiple H1s on footer sections currently).
5. **Decide content model before scaffolding** (MDX vs headless CMS — `PLAN.md` open decision).
6. **Verify every stat before reuse** — 1,300+ units, 100+ employees, 8 properties, $750M prior role, "20+ years." Do not ship unverified.
