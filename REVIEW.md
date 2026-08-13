# Review before cutover — unverified content & missing links

Everything below came out of Rob's Claude Design export (`RISE8 WEBSITE/`). It is
carried into the build as written, because inventing a replacement would be worse.
None of it has been verified against a source. **Each item needs a yes/no from Rob
before `rise8companies.com` points at this site.**

Edit answers directly into `content/site.ts` — all copy and data live there.

---

## Factual conflicts (resolve these first)

**1. Headquarters city.** The design's home footer and Management page say
*"Jacksonville, Florida · Est. 2014."* The design's Real Estate Finance page says
*"Headquarters: Boca Raton, Florida,"* and so do `CLAUDE.md` and the RISE8 org
profile. The build currently ships **Jacksonville** (`SITE.locale`). One of these is
wrong on a live corporate site — confirm which.

**2. "Est. 2014" / the chronology.** 2014 founding, 2017 first property, 2020
Stayable launch, 2023 finance brought in-house. Unverified — all four dates.

**3. Portfolio scale.** The home page says **1,150 keys**; the Real Estate Finance
design page said *"we own and operate 1,300+ units."* I removed the 1,300+ figure
rather than publish two numbers that contradict each other. Confirm the real key
count and whether it is stated anywhere else.

**4. Other unverified figures.** "6 Florida markets", "100% Stayable branded",
"100+ team", and per-property key counts (128 Jacksonville North, 196 Kissimmee
East, 64 Jacksonville West). Five of eight properties show "—" because the design
had no number for them.

**5. Leadership.** Robert Beyer (Founder & Principal), Crystal Johnson (Principal),
and directors Shay Harper, Gerardo Sandoval, Shayla Shane — names, titles, and both
bios need confirmation. The design used empty image slots, so the build shows
initials in place of portraits. **Real headshots needed.**

**6. Property photography.** All eight photos are now pulled from
**rentstayable.com** — each property uses the same hero image its own Stayable page
uses, so the two sites match. One exception: Davenport's page image is a 1980×366
banner that cannot crop into a card, so it uses
`davenport_exterior_building_01_crop` from the same media library instead. The
three cards above the map are Orlando, Kissimmee East, and Davenport.

**7. Everybody's Home details.** Miami office address, phone `(305) 782-9225`, and
`eh-info@everybodyshome.org` are carried from the design. Confirm they are current.

**8. Contact addresses.** `investors@`, `press@`, and `careers@` are on the
`rise8mgmt.com` domain; lending uses `finance@rise8companies.com`. Confirm all four
route somewhere a human reads.

---

## Copy changed from the design (flagging so it is not a surprise)

- **RISE8 Management description.** The design read *"A global team of dedicated
  assassins."* Replaced with a plain description of the function. If that line was
  deliberate, say so and I will put it back.
- Typo fixes carried silently: "ousekeeping" → "housekeeping", "mainteanance" →
  "maintenance", "Multi-disciplinary licensed" → "Multi-disciplinary and licensed".
- Hero subhead had a comma splice — *"One firm. Every function, No seams."* — now
  *"One firm. Every function. No seams. That is the moat."*
- Founder's letter was signed *"The founder, Chairman"*; now signed **Robert Beyer,
  Founder**. Confirm the correct title (Chairman? Founder & CEO? Principal?).
- The design shipped two different Real Estate Finance pages. The build uses the
  **CRE Lending** version (bridge / mezzanine / preferred equity, no hard numbers).
  The other version carries a full term sheet — $10M–$100M bridge, 75% max LTV,
  13–15% mezzanine pricing, non-recourse, SOFR spreads. **I did not publish those
  numbers.** If Rob wants that page live, he needs to confirm every figure first.

---

## Links — all resolved, nothing is a placeholder

- Investor Portal → `https://invest.rise8companies.com/`
- Stayable → `https://rentstayable.com/`
- Everybody's Home → `https://everybodyshome.org/`
- Portfolio register "Book →" → each property's own Stayable page
  (`rentstayable.com/lakeland/`, `/jacksonville-north/`, `/kissimmee-east/`,
  `/orlando/`, `/jacksonville-west/`, `/kissimmee-west/`, `/st-augustine/`,
  `/davenport/`). Confirm this is the right destination rather than a booking
  engine deep link.

## Pages that are still placeholders

- `/privacy-policy` and `/terms-of-use` — both are stubs marked `noindex`. Real
  terms must be ported from the current WordPress site and reviewed by counsel
  (jurisdiction: Palm Beach County) before go-live.
- The design footer linked a **News** section that does not exist. It is not in the
  build. Decide whether to add one or drop it permanently.
- There is no **careers page**. `/careers` currently 301s to the contact section.

---

## Not in scope of this build

The four company pages in the design export exist as layout explorations with
multiple unreconciled variants. The build implements one variant each for
Management, Real Estate Finance, and Development. Stayable has no page of its own —
it links out to `rentstayable.com`.
