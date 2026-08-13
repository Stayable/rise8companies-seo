# Review before cutover — unverified content & open questions

The build now follows **`RISE8 Companies.pdf`** (Rob's current Claude Design render,
read 2026-08-14), which supersedes the older `RISE8 WEBSITE/` HTML export. Copy is
carried through as written. Nothing below has been verified against a source.
**Each item needs a yes/no from Rob before `rise8companies.com` points here.**

Edit answers directly into `content/site.ts` — all copy and data live there.

---

> **Status:** Kyle has asked to ship as-is and correct these later. Nothing below
> blocks the cutover any more — it is a punch list to work through after go-live.
> The two worth doing soonest are Rob's biography (§1) and the privacy policy
> contact address (under *Legal pages*), because both are public-facing assertions.

## 1. Rob's biography — the highest-risk item on the page

The design adds a full biography. Every sentence makes a specific, checkable claim,
and this is the sort of copy that gets read closely by investors and counsel:

- "more than 20 years of commercial real estate experience"
- "Executive Vice President and General Counsel of a real estate investment and
  management firm holding **$750 million** in apartment, commercial, and lodging
  properties"
- "previously served as a **Vice President at RELATED**"
- "B.B.A. in Finance from the **University of Miami**"
- "**J.D., magna cum laude**, from UNLV's William S. Boyd School of Law"
- "**LL.M. in Taxation** from New York University School of Law"
- "member of the **Nevada State Bar**"
- "holds a **Florida real estate broker's license**"

Confirm all eight, individually. The bar admission and the broker's licence in
particular are matters of public record and should be stated exactly. **Kyle has
decided to publish as-is and edit later** — flagging it here so the decision is on
the record, not because it is unresolved.

**Rob's title is inconsistent on the same page.** The leadership card says "Founder
& Principal", the letter is signed "Rob Beyer, **CEO**", and the biography says
"founder and **managing principal**". Pick one.

## 1b. Crystal's biography — supplied, two small edits made

Kyle supplied it, so it takes precedence over the design. Two changes on the way in:

- **Her title.** The design card read "Principal"; the bio says **Vice President of
  Operations**. The card now says Vice President of Operations. Confirm.
- **"Rise8" → "RISE8"** throughout, per the brand rule in `CLAUDE.md`.

Dated claims worth a second look before publication: joined **April 2023** as
Property Manager at Stayable Lakeland, VP of Operations by **January 2025**, "more
than 20 years" of experience. Also note the bio says "resident experience" — RISE8
is extended-stay, so confirm "resident" is the intended word rather than "guest".

## 2. Headquarters city — RESOLVED

**Boca Raton, Florida**, confirmed by Rob on 2026-08-14. The site is correct. The
design PDF's footer still reads Jacksonville — that is the stale one now, so get it
changed in Claude Design before the next export overwrites anything.

One knock-on still open: the Management page's hero note composes `SITE.locale` and
now reads "In-house since founding · Boca Raton, Florida · Est. 2014". If RISE8 was
*founded* in Jacksonville and moved later, that sentence is wrong even though the
footer is right. Worth a look.

## 3. Numbers

- **"Six Florida markets"** in the stats band, but the map legend in the design
  reads *"Eight pins · five markets."* The two contradict each other. Counting the
  register — Lakeland, Jacksonville, Kissimmee, Orlando, St. Augustine, Davenport —
  gives six, so the build says six in both places. Confirm.
- **1,150 keys**, **8 properties**, **100% Stayable branded** — unverified.
- Per-property key counts: 128 Jacksonville North, 196 Kissimmee East, 64
  Jacksonville West. The other five show "—" because no figure was given.
- **Est. 2014** — unverified.

## 4. Leadership photos

Robert Beyer's and Crystal Johnson's headshots were extracted from the PDF, so they
are only **196 × 195** and **240 × 216**. They display at 120 px and hold up, but
they will soften on a retina screen. Send the originals.

## 5. Everybody's Home details

Miami office address, phone `(305) 782-9225`, and `eh-info@everybodyshome.org` are
carried from the design. Confirm they are current.

## 6. Contact addresses

`investors@`, `press@`, and `careers@` are on **rise8mgmt.com**; lending uses
`finance@rise8companies.com`. Confirm all four reach a human.

---

## Where the build deviates from the PDF, and why

**The company index shows five rows; the PDF shows one.** In the design, the index
table under the hero has its full №/Company/Discipline/Brief header but only a
single row — `01 · RISE8 Development`. That reads as a mid-edit state rather than an
intent, and a four-column table with one row looks like a bug. The build lists all
five (Stayable, Management, Real Estate Finance, Development, Everybody's Home). Say
the word and I will trim it to match.

**The map legend says six markets, not five.** See §3.

**Footer links that point nowhere.** The design's Company column includes **News**
and the Investors column lists **Criteria** and **Quarterly letters** — none of which
exist as pages. The build drops News and substitutes Investor portal / Request
access, which work today. Decide whether to build those pages or leave it.

**Two lines not carried over.** The Management description in the older export read
*"A global team of dedicated assassins."* And the alternate Real Estate Finance page
carried a full term sheet — $10M–$100M bridge, 75% max LTV, 13–15% mezzanine
pricing, SOFR spreads, non-recourse. Unverified financial terms do not go on a live
lending page. Both are available if Rob wants them.

**Legal pages — now ported, one thing to confirm.** `/privacy-policy` (15 sections)
and `/terms-of-use` (7 sections) carry the real copy from the live site, verbatim.
One correction was needed: the live Privacy Policy had a **SiteGround staging host
baked into it** — a link to `kylee23.sg-host.com` and, more seriously, a contact
address of **`corporate@kylee23.sg-host.com`**. That is a find-and-replace artefact
from the original build, and it means the current live policy points users at a
mailbox that does not exist. Both now read `rise8companies.com`.
**Confirm `corporate@rise8companies.com` is real and monitored** — it is the only
address the privacy policy gives. Worth fixing on the existing WordPress site too,
since that bug is live right now.

---

## Dropped from the older export — confirm these were intentional

The current design no longer has: the **chronology timeline** (2014 → today), the
**"Who we are"** section, the **platform split** (photo + four-company rail), the
**five principles** (replaced by eight values), and the **Contact section** (contact
addresses now live only in the footer).

---

## Portfolio map — "Start a lease" needs a real destination

The map cards carry two calls to action, **Book now** and **Start a lease**. There is
no separate leasing flow on rentstayable.com — I checked `/lease`, `/apply`,
`/leasing`, `/application`, and `/book`, all 404 — so both currently point at the
property's own Stayable page, which is where weekly and monthly stays are booked.
If RISE8 has a dedicated lease application URL, send it and I will repoint the second
link. Otherwise the two buttons should probably collapse into one.

Property descriptions on those cards are condensed from each property's own meta
description on rentstayable.com, so the wording is RISE8's rather than invented — but
it was written for search engines. Worth a read for tone.

## Links — all resolved, nothing is a placeholder

- Investor Portal → `https://invest.rise8companies.com/`
- Stayable → `https://rentstayable.com/`
- Everybody's Home → `https://everybodyshome.org/`
- Property cards and register rows → each property's own Stayable page
  (`rentstayable.com/lakeland/`, `/jacksonville-north/`, `/kissimmee-east/`,
  `/orlando/`, `/jacksonville-west/`, `/kissimmee-west/`, `/st-augustine/`,
  `/davenport/`). Confirm this is the right destination rather than a booking-engine
  deep link.

## Property photography

Six properties now use the originals Kyle supplied in `Image files/` — Lakeland,
Jacksonville North, Jacksonville West, Kissimmee East, Kissimmee West, and
Davenport. Orlando and St. Augustine keep the images pulled from rentstayable.com.
All eight are resized to 1400px wide and re-encoded as WebP (149–308 KB each, down
from up to 6.4 MB); the masters stay in `Image files/` for re-cropping.

---

## DNS

The full zone — 26 records — is inventoried in `snapshot/dns-zone.md`, classified
into what changes at cutover (two rows), what must never be touched (Microsoft 365
mail, Teams, Intune, DKIM, the `send.` subdomain, the investor portal), and four
stale `A` records still pointing at SiteGround that become a subdomain-takeover risk
once that account is cancelled.

## Not in scope of this build

The company pages (Management, Real Estate Finance, Development) still come from the
older HTML export — the PDF covers the home page only. If those were redesigned too,
send that render.
