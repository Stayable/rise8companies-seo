import type { Metadata } from 'next'
import { SubNav, SubFooter } from '@/components/site/SubPageChrome'

export const metadata: Metadata = {
  title: 'Terms of Use',
  robots: { index: false, follow: true },
}

export default function TermsOfUse() {
  return (
    <>
      <SubNav dept="Legal" />
      <main id="main" className="doc">
        <span className="kicker">Legal</span>
        <h1>Terms of Use</h1>
        <p>
          This page is a placeholder. The RISE8 Companies terms of use must be ported from the
          existing rise8companies.com page and reviewed by counsel before this site goes live.
        </p>
        <p>
          Governing jurisdiction for review: Palm Beach County, Florida. Do not publish substantive
          terms here without legal sign-off.
        </p>
        <div className="meta">Not for publication · pending legal review</div>
      </main>
      <SubFooter
        dept="Legal"
        note="Placeholder page. Final terms of use are pending review by counsel."
      />
    </>
  )
}
