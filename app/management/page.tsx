import type { Metadata } from 'next'
import { SubNav, SubFooter } from '@/components/site/SubPageChrome'
import { MANAGEMENT } from '@/content/site'

export const metadata: Metadata = {
  title: 'RISE8 Management',
  description:
    'RISE8 Management is the in-house operator for every property RISE8 owns — revenue management, guest experience, housekeeping, maintenance, people, and technology.',
}

export default function ManagementPage() {
  const m = MANAGEMENT
  return (
    <>
      <SubNav dept={m.dept} links={[{ href: '#capabilities', label: 'Capabilities' }]} />

      <main id="main">
        <header className="sub-hero">
          <div className="sub-hero-l">
            <div>
              <p className="sub-eye">
                RISE8 Companies <span>·</span> {m.eye}
              </p>
              <h1 className="sub-h1">
                {m.h1Lead}
                <br />
                {m.h1Rest}
              </h1>
              <p className="sub-lede">{m.lede}</p>
            </div>
            <p className="sub-hnote">{m.note}</p>
          </div>

          <div className="sub-hero-r">
            <span className="sub-hero-rk">Functions</span>
            {m.functions.map((f) => (
              <div className="irow" key={f.n}>
                <div className="in">{f.n}</div>
                <div>
                  <div className="iname">{f.name}</div>
                  <div className="idisc">{f.disc}</div>
                </div>
              </div>
            ))}
          </div>
        </header>

        <div className="stats">
          <div className="stats-inner">
            {m.stats.map((s) => (
              <div className="stat" key={s.label}>
                <div className="v">{s.value}</div>
                <div className="l">{s.label}</div>
                {'note' in s && s.note ? <div className="n">{s.note}</div> : null}
              </div>
            ))}
          </div>
        </div>

        <section className="sub-section" id="capabilities">
          <div className="sub-sec-head">
            <span className="k">Capabilities</span>
            <h2>
              Built for ownership.
              <br />
              <em>Run by ownership.</em>
            </h2>
          </div>
          <div className="cap-grid">
            {m.capabilities.map((c) => (
              <div className="cap" key={c.n}>
                <div className="n">{c.n}</div>
                <div className="name">{c.name}</div>
                <p>{c.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="quote-band">
          <div className="inner">
            <span className="k">Philosophy</span>
            <blockquote>
              “When the operator is also the owner, there is no principal-agent problem. The
              incentives are <em>identical.</em> Operations is the competitive advantage.”
            </blockquote>
          </div>
        </div>
      </main>

      <SubFooter dept={m.dept} note={m.footNote} />
    </>
  )
}
