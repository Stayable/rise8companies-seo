/**
 * 301 map: every URL the current WordPress site serves must land somewhere on the
 * new site. Inventory source: `snapshot/site-state.md` §4.
 */

// The old marketing pages. The new site consolidates them into the single-page
// home, so each old path 301s to its section anchor.
const consolidated = [
  ['/about-us', '/#about'],
  ['/culture-and-values', '/#about'],
  ['/investors', '/#invest'],
  ['/contact-us', '/#contact'],
  ['/careers', '/#contact'],
  ['/leadership', '/#leadership'],
  ['/portfolio', '/#portfolio'],
]

// WordPress junk pages + internal HR/ops docs that were public by mistake
// (snapshot §4b/§4c). These must not survive migration.
const goneToHome = [
  '/home',
  '/home-page',
  '/test',
  '/sample-page',
  '/login-customizer',
  '/incident-reports',
  '/safety-manual',
  '/service-recovery',
  '/company-travel-and-expenses',
  '/talent-development-and-retention-alignment-meetings',
  '/talent-acquisition',
  '/personnel-action-form',
  '/disciplinary-action-form',
  '/property-level-organization',
  '/paid-time-off',
  '/time-attendance',
]

/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      // Explicit 301 rather than `permanent: true` (which emits 308). Both are
      // permanent to Google, but 301 is what older crawlers and link-audit tools
      // expect, and the migration plan specifies a 301 map.
      ...consolidated.map(([source, destination]) => ({
        source,
        destination,
        statusCode: 301,
      })),
      ...goneToHome.map((source) => ({ source, destination: '/', statusCode: 301 })),
    ]
  },
}

export default nextConfig
