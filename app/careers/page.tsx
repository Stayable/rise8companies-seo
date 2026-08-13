import type { Metadata } from 'next'
import { SubNav, SubFooter } from '@/components/site/SubPageChrome'
import { CAREERS } from '@/content/site'

export const metadata: Metadata = {
  title: 'Careers',
  description:
    'Careers at RISE8 Companies — operations, property management, and corporate roles across the Florida portfolio. Florida or remote.',
}

export default function Careers() {
  const c = CAREERS
  return (
    <>
      <SubNav dept="Careers" links={[{ href: '#positions', label: 'Open positions' }]} />

      <main id="main">
        <header className="sub-hero-dark">
          <div className="inner">
            <p className="sub-eye">
              RISE8 Companies <span>/</span> {c.eye}
            </p>
            <h1 className="sub-h1">
              {c.h1Lead}
              <em>{c.h1Em}</em>
            </h1>
            <div className="sub-hero-rule" />
            <p className="sub-lede">{c.lede}</p>
          </div>
        </header>

        <section className="sub-section">
          <div className="sub-sec-head">
            <span className="k">{c.sectionKicker}</span>
            <h2>
              {c.sectionHeadLead}
              <em>{c.sectionHeadEm}</em>
            </h2>
          </div>
          <div className="thesis-body">
            {c.body.map((para) => (
              <p key={para.slice(0, 24)}>{para}</p>
            ))}
          </div>
        </section>

        <section className="sub-cta" id="positions">
          <div className="inner">
            <div className="k">{c.ctaKicker}</div>
            <h2>
              {c.ctaHeadLead}
              <em>{c.ctaHeadEm}</em>
            </h2>
            <p>{c.ctaBody}</p>
            <a
              className="btn-primary"
              href={c.jobsUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              View all jobs →
            </a>
          </div>
        </section>
      </main>

      <SubFooter dept={c.eye} note={c.footNote} />
    </>
  )
}
