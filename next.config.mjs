import createMDX from '@next/mdx'

// Old WordPress URLs that should not survive migration → 301 to home.
// (WordPress junk pages + internal HR/ops docs that were public by mistake — see snapshot/site-state.md §4b/§4c.)
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
  // The 8 real marketing pages keep their exact current paths (zero redirect / equity loss).
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
  async redirects() {
    return goneToHome.map((source) => ({ source, destination: '/', permanent: true }))
  },
}

const withMDX = createMDX({})

export default withMDX(nextConfig)
