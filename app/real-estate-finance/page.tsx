import type { Metadata } from 'next'
import { SubNav, SubFooter } from '@/components/site/SubPageChrome'
import { FINANCE, SITE } from '@/content/site'

export const metadata: Metadata = {
  title: 'RISE8 Real Estate Finance',
  description:
    'RISE8 Real Estate Finance provides bridge loans, mezzanine debt, and preferred equity for acquisitions, recapitalizations, and transitional real estate.',
}

export default function FinancePage() {
  const f = FINANCE
  return (
    <>
      <SubNav
        dept={f.dept}
        links={[
          { href: '#programs', label: 'Programs' },
          { href: '#sectors', label: 'Sectors' },
          { href: '#connect', label: 'Connect' },
        ]}
      />

      <main id="main">
        <header className="sub-hero-dark">
          <div className="inner">
            <p className="sub-eye">
              RISE8 Real Estate Finance <span>/</span> {f.eye}
            </p>
            <h1 className="sub-h1">
              {f.h1Lead}
              <em>{f.h1Em}</em>
            </h1>
            <div className="sub-hero-rule" />
            <p className="sub-lede">{f.lede}</p>
          </div>
        </header>

        <section className="sub-section" id="programs">
          <div className="sub-sec-head">
            <span className="k">{f.programsKicker}</span>
            <div>
              <h2>
                {f.programsHeadLead}
                <em>{f.programsHeadEm}</em>
              </h2>
              <p className="sub-lede" style={{ marginTop: 20 }}>
                {f.programsIntro}
              </p>
            </div>
          </div>

          <div className="prog-grid">
            {f.programs.map((p) => (
              <div className="prog" key={p.n}>
                <div className="prog-n">{p.n}</div>
                <div className="prog-name">{p.name}</div>
                <div className="prog-tier">{p.tier}</div>
                <p className="prog-desc">{p.desc}</p>
                <div className="prog-specs">
                  {p.specs.map((s) => (
                    <div className="prog-spec" key={s.k}>
                      <span className="prog-spec-k">{s.k}</span>
                      <span className="prog-spec-v">
                        {'em' in s && s.em ? (
                          <>
                            <em>{s.em}</em>
                            {s.v.slice(s.em.length)}
                          </>
                        ) : (
                          s.v
                        )}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="sub-section" id="sectors">
          <div className="sub-sec-head">
            <span className="k">{f.sectorsKicker}</span>
            <div>
              <h2>
                {f.sectorsHeadLead}
                <em>{f.sectorsHeadEm}</em>
              </h2>
              <p className="sub-lede" style={{ marginTop: 20 }}>
                {f.sectorsIntro}
              </p>
            </div>
          </div>
          <div className="asset-grid">
            {f.sectors.map((s) => (
              <div className="asset" key={s.n}>
                <div className="n">{s.n}</div>
                <div className="name">{s.name}</div>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="sub-section">
          <div className="sub-sec-head">
            <span className="k">{f.whyKicker}</span>
            <h2>
              {f.whyHeadLead}
              <em>{f.whyHeadEm}</em>
            </h2>
          </div>
          <div className="cap-grid" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
            {f.why.map((w) => (
              <div className="cap" key={w.n} style={{ borderBottom: 'none' }}>
                <div className="n">{w.n}</div>
                <div className="name">{w.name}</div>
                <p>{w.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="sub-cta" id="connect">
          <div className="inner">
            <div className="k">{f.ctaKicker}</div>
            <h2>
              {f.ctaHeadLead}
              <em>{f.ctaHeadEm}</em>
            </h2>
            <p>{f.ctaBody}</p>
            <a
              className="btn-primary"
              href={`mailto:${SITE.email.finance}?subject=CRE%20Lending%20Inquiry`}
            >
              Connect with the REF team →
            </a>
            <div className="sub-cta-contact">
              {f.ctaContact.map((c) => (
                <div key={c.k}>
                  <div className="k">{c.k}</div>
                  <div className="v">{c.v}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <SubFooter dept={f.dept} note={f.footNote} />
    </>
  )
}
