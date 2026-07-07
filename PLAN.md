# rise8companies.com — Content Refresh + Redesign Plan

**Created:** 2026-07-08 · **Owner:** Kyle (bke@rise8companies.com) · **Approver:** Rob Beyer
**Site:** https://rise8companies.com · **Target stack:** Next.js on Vercel (rebuild from scratch)

---

## Goal

Refresh the content and redesign rise8companies.com — a modern, credible corporate site for RISE8 Companies. Rebuild as a fresh Next.js app on Vercel rather than reworking the current SiteGround/WordPress site.

## Workflow & ownership

| Step | What | Owner |
|------|------|-------|
| 1. Site snapshot | Claude Code generates a Markdown map of the current site — every page, structure, and content architecture. The baseline. | Kyle (Claude Code) |
| 2. Content improvement | Rewrite and tighten the current copy; send to Rob for approval before anything ships. | Kyle drafts → **Rob approves** |
| 3. Design | Rob drives look & feel and generates the new design in Claude Design, then shares the design files. | **Rob owns** |
| 4. Implementation | Build in Next.js, deploy to a Vercel preview URL for Rob to review, then cut over. | Kyle |

**Rob is the approval gate at steps 2 and 3. Nothing ships without his sign-off.**

## The message sent to Rob

> **Proposed approach for the rise8companies.com content refresh + redesign:**
> 1. **Site snapshot.** Claude Code generates a Markdown map of rise8companies.com — every page, its structure, and how content is organized today. This is our baseline.
> 2. **Content improvement.** I rewrite and tighten the current copy and send it to you for approval before anything goes live.
> 3. **Design.** I hand you the snapshot; you drive the look and feel and generate the new design in Claude Design, then share the design files with me.
> 4. **Implementation.** I build it out from your design files — as a fresh site you can preview at a live URL before we switch anything over.
>
> You own content approval (step 2) and the design (step 3); I handle the snapshot and the build.

---

## Architecture decision — why from-scratch on Vercel

For a corporate/brand site getting a full redesign where the design is generated as code and Kyle is the sole implementer, a fresh Next.js build on Vercel beats back-porting into WordPress:

- **Clean pipeline.** Claude Design outputs React/Tailwind → drops straight into Next.js → Vercel. Back-porting into a WP theme/LiveCanvas is friction (and LiveCanvas/SG-Optimizer fragility has repeatedly broken the rentstayable site).
- **Zero-risk parallel build.** New site built as a separate Vercel project with a preview URL. Rob reviews the real thing; the live site is untouched until DNS cutover.
- **Corporate site = mostly static.** Brand/portfolio/leadership/thought-leadership content — no need for WP's dynamic plugin ecosystem. Next.js on the edge = fast, great Core Web Vitals.
- **Fits the implementer.** Code-based site matches Kyle's Claude Code workflow.

## Open decision — content editing (resolve before scaffolding)

- **Kyle sole editor** → content in **MDX/code** (simplest, no CMS).
- **Rob/staff self-edit** → add a lightweight **headless CMS** (Sanity / Payload / Contentful).

This shapes the architecture — decide up front.

## Migration cautions

- **301 redirect map** old → new URLs at cutover (don't tank existing links/equity).
- **DNS + email/MX** — confirm where they live before any DNS change; Vercel serves the web only, must not break RISE8 email.
- **Cutover is deliberate and approved** — parallel build until then.

## Content direction (starting point — refine with Rob)

Audiences: investors/LPs, operating partners, prospective hires, press. Likely sections: who RISE8 is + the vertically-integrated model, leadership (Rob Beyer), the portfolio/track record (Stayable brand + fund), investment thesis / thought leadership, careers, contact. Cross-link appropriately to rentstayable.com without duplicate content.

## Next actions

1. Generate the site-state snapshot → `snapshot/site-state.md` (also captures CMS, DNS/email location, full URL inventory).
2. Send snapshot + the message above to Rob for go-ahead.
3. Resolve the content-editing decision.
4. On Rob's design files → scaffold Next.js, build, deploy to Vercel preview.
