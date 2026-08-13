import type { Metadata } from 'next'
import { SubNav, SubFooter } from '@/components/site/SubPageChrome'
import { DEVELOPMENT } from '@/content/site'

export const metadata: Metadata = {
  title: 'RISE8 Development',
  description:
    'RISE8 Development is the in-house construction and development affiliate of RISE8 Companies — ground-up and value-add delivery to our own brand standard.',
}

export default function DevelopmentPage() {
  const d = DEVELOPMENT
  return (
    <>
      <SubNav dept={d.dept} links={[{ href: '#thesis', label: 'Approach' }]} />

      <main id="main">
        <header className="sub-hero-dark">
          <div className="inner">
            <p className="sub-eye">
              RISE8 Development <span>/</span> {d.eye}
            </p>
            <h1 className="sub-h1">
              {d.h1Lead}
              <em>{d.h1Em}</em>
            </h1>
            <div className="sub-hero-rule" />
            <p className="sub-lede">{d.lede}</p>
          </div>
        </header>

        <section className="sub-section" id="thesis">
          <div className="sub-sec-head">
            <span className="k">{d.thesisKicker}</span>
            <h2>
              {d.thesisHeadLead}
              <em>{d.thesisHeadEm}</em>
            </h2>
          </div>
          <div className="thesis-body">
            {d.thesis.map(([before, emphasis, after]) => (
              <p key={before.slice(0, 24)}>
                {before}
                {emphasis ? <em>{emphasis}</em> : null}
                {after}
              </p>
            ))}
          </div>
        </section>
      </main>

      <SubFooter dept={d.dept} note={d.footNote} />
    </>
  )
}
