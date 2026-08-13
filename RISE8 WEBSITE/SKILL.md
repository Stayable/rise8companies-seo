---
name: rise8-design
description: Use this skill to generate well-branded interfaces and assets for RISE8 Companies (a vertically integrated extended-stay hospitality company), either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the `readme.md` file within this skill, and explore the other available files (`styles.css` + `tokens/`, `base.css`, `guidelines/`, `components/core/`, `ui_kits/website/`, `assets/logos/`).

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.

Core rules to honor (full detail in `readme.md`):
- **Type:** EB Garamond serif for ALL headlines, body, and italics; Inter ONLY for uppercase, letter-spaced labels. Never use Inter for paragraphs.
- **Color:** cool blue-grey "paper" surfaces, near-black ink text, dark navy for inverted sections, and a single rationed teal accent (`#4DC8D3`). No gradients in the system layer.
- **Structure:** hairline (0.5px) dividers and 1px section-top rules define everything. Square corners (radius 0). No shadows except the one floating panel.
- **Voice:** institutional, understated, declarative — like a prospectus, not an ad. Almanac-style numbering (01–08, I–V). One italic-accent phrase per headline. No emoji.
- **Iconography:** near-iconless — numerals, hairlines, and the `→` arrow do the work. Don't add an icon library unless genuinely required.

If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.
