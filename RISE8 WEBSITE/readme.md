# RISE8 Design System

An editorial, almanac-style design system for **RISE8 Companies** — a vertically integrated extended-stay hospitality company headquartered in Florida. The system was extracted from the RISE8 Companies marketing website (`RISE8 Website.html` in this project).

---

## 1. Company & product context

**RISE8 Companies** owns and operates the full value chain of extended-stay hospitality. One parent, four operating companies, eight Florida properties — all run under a single consumer brand.

The four operating companies:
1. **Stayable** — the proprietary extended-stay *brand* every property operates under. Franchise-free, direct-booking (daily / weekly / monthly).
2. **RISE8 Management** — in-house *operations*: revenue management, guest experience, housekeeping, maintenance, staffing.
3. **RISE8 Real Estate Finance** — in-house *capital*: debt, mezzanine, and equity in the primary asset class.
4. **RISE8 Development** — in-house *construction*: ground-up and value-add, delivered to the brand standard.

There is also an affiliated 501(c)(3), **Everybody's Home Inc.**, focused on housing stability.

**Brand thesis:** by internalizing what the industry fragments across franchisors, operators, and lenders, every incentive points the same direction. The brand voice is institutional, calm, and confident — closer to an annual report or a private-capital letter than a typical hotel website.

**Cultural motif:** the Japanese proverb 七転び八起き — *nana korobi yaoki*, "Fall seven times, rise eight" — is the namesake of RISE8 and recurs as a quiet signature (hero, about section, footer).

### Sources
- `RISE8 Website.html` — the single-page marketing site this system is derived from (hero, four-company index, stats band, platform rail, about/chronology, portfolio atlas, community, investor CTA, footer).
- `assets/rise8-logo.png` / `rise8-logo-light.png` — wordmark lockups (navy on light / light on dark).
- A separate leasing video (`Stayable Jax North Video.html` + `jax-north-*.jsx`) exists in the project but is a distinct deliverable, not part of this system.

---

## 2. Content fundamentals (voice & copy)

- **Register:** institutional, understated, declarative. Reads like a prospectus, not an ad. *"One parent. Four operating companies. Eight Florida properties. A single integrated platform."*
- **Sentence shape:** short, periodic, often fragment-stacked for rhythm. Em dashes for asides. Numbers spelled as figures.
- **Person:** mostly third-person institutional ("RISE8 controls the full value chain…"). First-person plural ("we built RISE8 to change that") appears only in the founder's letter. Second person is rare.
- **Casing:** body and headlines are sentence case. **Labels, eyebrows, nav, buttons, and meta are UPPERCASE** with wide letter-spacing. Company name renders **RISE8** (all caps, no space) and **RISE8 COMPANIES** in the wordmark.
- **Emphasis:** italics (serif) carry emphasis and are almost always tinted with the teal accent — *"end to end."*, *"every incentive aligned."* Used sparingly, once per headline.
- **Numbering:** sections and lists are numbered like an almanac index — `01 · Platform`, `№`, and Roman numerals (`I–V`) for principles. Counting is itself a brand device.
- **No emoji. No exclamation. No hype words** ("revolutionary", "game-changing"). Confidence comes from restraint.
- **Signature line:** the proverb appears in kanji + romaji + translation as a recurring lockup. Treat it as brand furniture, not decoration to be paraphrased.

---

## 3. Visual foundations

### Palette
A **cool blue-grey "paper"** family (`#DCE3EB → #E8ECF2`) for light surfaces, **near-black ink** (`#25272C`) for text and structural rules, a **dark navy** (`#1F2126`) for inverted sections, and **one teal accent** (`#4DC8D3`, deepening to `#007882` on light). The palette is deliberately desaturated and architectural; the teal is the only chromatic note and is rationed — links, numerals, italic emphasis, pins, active states. (Historically the accent token was named `--rust`; the shipped value is teal. Tokens here use `--accent`.)

### Typography
Two families, strictly divided:
- **EB Garamond** (serif) — every headline (weight 500, tracking ≈ −0.012em), all running body copy, all italics. Hero scales `clamp(48px, 6.6vw, 96px)`.
- **Inter** (sans) — *only* uppercase, letter-spaced labels (eyebrows, kickers, nav, buttons, tags, meta). Tracking `.22em–.28em`. Never used for paragraphs.

This serif-for-content / sans-for-labels split is the single most recognizable rule in the system.

### Structure, borders & rules
- **Hairlines everywhere.** A `0.5px` rule (`--rule`, `#B4BBC4`) divides list rows, cards, tags. A heavier `1px` ink rule (`--ink`) tops every major section. Borders — not boxes or shadows — define structure.
- **Square corners.** Radius is `0` across the system. Pins are the only circles.
- **No shadows** except one: the floating utility/tweak panel (`--shadow-panel`). Surfaces are separated by paper tone (`paper` / `paper-2` / `paper-3`) and hairlines, never elevation.
- **Numbered registers.** Repeating grid pattern: index number (serif, accent) · name (serif) · discipline label (sans caps) · description (serif) · link (sans caps). Used for companies, properties, principles.

### Layout
- Centered container, `max-width: 1440px`, `40px` gutters (`20px` mobile).
- Generous vertical rhythm: `120px` default section padding (compact `72px`, spacious `176px`).
- Wide two-column splits (e.g. `44% / 1fr` photo + rail; `48% / 1fr` map + register). Section heads are a two-column grid: kicker (left) + headline (right).
- A fixed right-rail floating table-of-contents on desktop.

### Backgrounds & texture
Photographic / architectural surfaces are simulated with layered radial + linear gradients and a faint horizontal scanline (`repeating-linear-gradient` at ~1.5% opacity) plus a bottom protection gradient for legible captions. Maps use faint 45°/−45° cross-hatch. **There is no decorative blur except `backdrop-filter: blur(8px)` on the sticky nav.** Imagery skews cool, dim, and architectural.

### Motion & states
- Transitions are short and quiet: `0.15s–0.2s`, ease `cubic-bezier(.4,0,.2,1)`. No bounce, no large entrance animations.
- **Hover:** rows shift `padding-left: 8px` (a subtle nudge inward), links turn teal, nav items brighten to white with an accent underline. Buttons invert (filled → outline).
- **Press / active:** accent fill or accent dot; map pins scale `1.25×` and bloom a ring.
- Reduced-motion-friendly by default — nothing critical depends on animation.

---

## 4. Iconography

RISE8 is **near-iconless by design** — the brand leans on numerals, hairlines, and type instead of pictograms.

- **No icon font, no SVG icon set** in the source. Do not introduce Lucide/Heroicons/etc. unless a future surface genuinely needs them; if you must, pick a thin, single-weight line set and flag it.
- **Numerals as icons:** serif index numbers (`01–08`) and Roman numerals (`I–V`) carry the visual rhythm that icons usually would.
- **Unicode used sparingly:** the right-arrow `→` on links/buttons ("View →", "Invest with us →"), the middot `·` as a separator in labels, the numero sign `№` as a column head, superscript `+`/`%` on stats. The kanji 七転び八起き is set in the serif as brand furniture.
- **Geometric marks** (not icons): hairline-bordered squares hold initials — `R8` (footer mark), `EH` (Everybody's Home). A `52px` circular compass ("N") and circular map pins are the only round forms.
- **Logo:** `assets/logos/rise8-logo-navy.png` (navy wordmark on light) and `rise8-logo-light.png` (light wordmark on dark), each 150×150 with transparency and a rule beneath the wordmark.
- **Favicon:** `assets/favicon/` — the RISE8 wordmark in a heavy geometric grotesque, light letters with the teal accent on the **8**, on a navy (`#1F2126`) tile. Rendered crisp at 16/32/48/180/192/512px plus a multi-resolution `favicon.ico`. The site links it from `<head>`.

---

## 5. Index / manifest

| Path | What |
|---|---|
| `styles.css` | Global entry point — `@import`s only. Link this. |
| `tokens/colors.css` | Color custom properties + semantic aliases. |
| `tokens/typography.css` | Font families, display/body/label type tokens. |
| `tokens/spacing.css` | Spacing scale, layout, borders, motion. |
| `tokens/fonts.css` | Google Fonts import (EB Garamond + Inter). |
| `base.css` | Element resets + primitive utility classes (`.rise-label`, `.rise-btn`, `.rise-tag`, `.rise-stat-v`, rules). |
| `guidelines/` | Foundation specimen cards (Type, Colors, Spacing, Brand). |
| `components/core/` | React primitives — Button, Tag, Eyebrow, Stat, SectionHead, RegisterRow, CompanyCard. |
| `slides/` | Six 16:9 slide templates — title, section divider, statement/quote, stats, two-column, closing/CTA. |
| `ui_kits/website/` | High-fidelity React recreation of the RISE8 marketing site. |
| `RISE8 Website.html` (root) | The **live production** single-page site — registered as a Website card + starting point. |
| `RISE8 Wireframes.html` (root) | Low-fidelity layout exploration — Website card. |
| `Stayable Jax North Video.html` (root) | Animated property leasing spot — Website card. |
| `assets/logos/` | Wordmark lockups. |
| `assets/favicon/` | Favicon package — RISE8 mark on navy, teal 8 (16→512px PNG + multi-res `.ico`). |
| `SKILL.md` | Agent-Skills entry point. |

---

*To share this as a design system: open the **Share** menu and set the file type to **Design System** so others in your org can view it.*
