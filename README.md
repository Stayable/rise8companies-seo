# rise8companies.com

Next.js rebuild of the RISE8 Companies corporate site — a content refresh + redesign migrating off SiteGround/WordPress. See `PLAN.md` for the full plan, `CLAUDE.md` for working guardrails, and `snapshot/site-state.md` for the current-site baseline.

## Stack

- **Next.js 16** (App Router) + **React 19** + **TypeScript**
- **Tailwind CSS v4** (styling)
- **MDX** (`@next/mdx`) for page content — content model is **MDX/in-repo** (Kyle is sole editor; no CMS)
- **Vercel** hosting (parallel build; DNS cutover only after Rob approves)

## Dev

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npx vercel       # deploy to a Vercel preview URL
```

## Structure

```
app/                     App Router routes (paths preserved from the current site)
  page.tsx               /               (renders content/home.mdx)
  about-us/              /about-us
  culture-and-values/    /culture-and-values
  careers/               /careers
  investors/             /investors
  contact-us/            /contact-us
  terms-of-use/          /terms-of-use
  privacy-policy/        /privacy-policy
components/              SiteHeader, SiteFooter, Page shell
content/                 MDX content (home.mdx; add more as copy is approved)
next.config.mjs          MDX wiring + 301 redirect map (old WP URLs → /)
snapshot/site-state.md   Baseline map of the current live site
```

## Status

Skeleton only. Copy is placeholder/draft pending Rob's rewrite approval, and **all visual design is pending Rob's Claude Design files** — the current neutral styling is throwaway. No unverified figures are shipped (see `CLAUDE.md` accuracy rules).

## Migration notes (do not skip at cutover)

- **URL paths preserved** for the 8 real pages → minimal redirects. Junk WP pages and the 11 formerly-public internal HR docs 301 to `/` (see `next.config.mjs`).
- **DNS is at SiteGround; email is Microsoft 365.** At cutover, change only the web A/CNAME record at SiteGround DNS — **leave MX + SPF TXT untouched** or RISE8 email breaks. Vercel serves the web front-end only.
