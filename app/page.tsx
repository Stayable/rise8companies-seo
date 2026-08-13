import Link from 'next/link'
import HomeChrome from '@/components/site/HomeChrome'
import HeroCanvas from '@/components/site/HeroCanvas'
import Atlas from '@/components/site/Atlas'
import Footer from '@/components/site/Footer'
import {
  EVERYBODYS_HOME,
  FEATURED_PROPERTY_IDS,
  HERO,
  INDEX_ROWS,
  LETTER,
  PRINCIPALS,
  PROPERTIES,
  SITE,
  STATS,
  VALUES,
} from '@/content/site'

const cards = FEATURED_PROPERTY_IDS.map((id) => PROPERTIES.find((p) => p.id === id)!).filter(
  (p) => p.image
)

/** Street line only — the card shows the city in its region kicker. */
const streetOf = (address: string) => address.split(',')[0]

export default function HomePage() {
  return (
    <>
      <HomeChrome />

      <main id="main">
        {/* ============ HERO ============ */}
        <section id="top">
          <div className="hero">
            <div className="hero-bg">
              <HeroCanvas />
            </div>
            <div className="hero-inner">
              <div className="hero-top">
                <div className="eyebrow" />
                <div className="proverb">
                  <b>{SITE.proverb.kanji}</b>
                  <span>{SITE.proverb.romaji}</span>
                </div>
              </div>

              <div>
                <h1 className="hero-title">
                  {HERO.titleLead}
                  <em>{HERO.titleEm}</em>
                </h1>
                <p className="hero-sub">{HERO.sub}</p>
              </div>

              <div className="hero-bottom">
                <div className="hero-cta">
                  <Link href="#about" className="btn-primary">
                    {HERO.cta}
                  </Link>
                </div>
                <div className="scroll-hint">
                  <span className="line" />
                  Scroll
                </div>
              </div>
            </div>
          </div>

          {/* Company index */}
          <div className="index-strip">
            <div className="index-inner">
              <div className="index-head">
                <div className="h">№</div>
                <div className="h">Company</div>
                <div className="h">Discipline</div>
                <div className="h">Brief</div>
                <div className="h" />
              </div>
              {INDEX_ROWS.map((row) => {
                const body = (
                  <>
                    <div className="ix-num">{row.num}</div>
                    <div className="ix-name">{row.name}</div>
                    <div className="ix-disc">{row.discipline}</div>
                    <div className="ix-desc">{row.brief}</div>
                    <div className="ix-link">View →</div>
                  </>
                )
                return row.external ? (
                  <a
                    key={row.num}
                    href={row.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="index-row"
                  >
                    {body}
                  </a>
                ) : (
                  <Link key={row.num} href={row.href} className="index-row">
                    {body}
                  </Link>
                )
              })}
            </div>
          </div>

          <div className="stats">
            <div className="stats-inner">
              {STATS.map((s) => (
                <div className="stat" key={s.label}>
                  <div className="v">
                    {s.value}
                    {'sup' in s && s.sup ? <sup>{s.sup}</sup> : null}
                  </div>
                  <div className="l">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============ 02 · ABOUT ============ */}
        <section id="about" style={{ background: 'var(--paper-3)' }}>
          <div className="wrap">
            <div className="sec-head">
              <div className="kicker">02 · About</div>
              <h2>
                A decade of building an <em>extended-stay platform.</em>
              </h2>
            </div>

            <div className="about-head">
              <div className="proverb-block">
                <div className="kanji">{SITE.proverb.kanji}</div>
                <p className="romaji">{SITE.proverb.romaji}</p>
                <p className="transl">{SITE.proverb.translation}</p>
              </div>
              <div className="letter">
                <p>
                  <em>Dear reader,</em>
                </p>
                {LETTER.map((para) => (
                  <p key={para.slice(0, 24)}>{para}</p>
                ))}
                <div className="sig">
                  — With respect,
                  <br />
                  <strong>Rob Beyer</strong>, CEO
                </div>
              </div>
            </div>

            <div className="values">
              <div className="principles-head">
                <div className="k">Principles · in practice</div>
                <h3>Eight values, against which we’re measured.</h3>
              </div>
              <div className="values-grid">
                {VALUES.map((v) => (
                  <div className="v-item" key={v.num}>
                    <div className="p-num">{v.num}</div>
                    <h4 className="p-name">{v.name}</h4>
                    <p className="p-desc">{v.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ============ 03 · PORTFOLIO ============ */}
        <section id="portfolio">
          <div className="wrap-tight">
            <div className="sec-head">
              <div className="kicker">03 · Portfolio</div>
              <h2>
                Eight Florida addresses, <em>one brand.</em>
              </h2>
            </div>
            <p className="portfolio-lede">
              Central and Northeast Florida corridors — I-4, I-95, I-295. Every property owned by
              RISE8 and operated under Stayable Suites.
            </p>

            <div className="prop-cards">
              {cards.map((p) => (
                <a
                  className="prop-card"
                  key={p.id}
                  href={p.booking}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={p.image!} alt={p.name} loading="lazy" />
                  <div className="body">
                    <div className="region">{p.region}</div>
                    <div className="title">{p.name}</div>
                    <div className="addr">{streetOf(p.address)}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <Atlas />
        </section>

        {/* ============ 04 · LEADERSHIP ============ */}
        <section
          id="leadership"
          style={{
            background: 'var(--paper-2)',
            borderTop: '1px solid var(--ink)',
            borderBottom: '1px solid var(--ink)',
          }}
        >
          <div className="wrap">
            <div className="sec-head">
              <div className="kicker">04 · Leadership</div>
              <h2>
                The people <em>accountable.</em>
              </h2>
            </div>

            <div className="lead-tier1">
              {PRINCIPALS.map((p) => (
                <div className="lead-principal" key={p.name}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img className="portrait" src={p.photo} alt={p.name} width={120} height={120} />
                  <div>
                    <div className="lead-role">{p.role}</div>
                    <div className="lead-name">{p.name}</div>
                    <p className="lead-bio">{p.bio}</p>
                  </div>
                </div>
              ))}
            </div>

            {PRINCIPALS.some((p) => p.fullBio.length > 0) ? (
              <div className="bio-panel">
                {PRINCIPALS.map((p) => (
                  <div className="bio-col" key={p.name}>
                    {p.fullBio.length > 0 ? (
                      <>
                        <div className="k">Full biography</div>
                        {p.fullBio.map((para) => (
                          <p key={para.slice(0, 24)}>{para}</p>
                        ))}
                      </>
                    ) : null}
                  </div>
                ))}
              </div>
            ) : null}
          </div>
        </section>

        {/* ============ 05 · COMMUNITY ============ */}
        <section
          id="community"
          style={{
            background: 'var(--paper-3)',
            borderTop: '1px solid var(--ink)',
            borderBottom: '1px solid var(--ink)',
          }}
        >
          <div className="wrap">
            <div className="sec-head">
              <div className="kicker">05 · Community</div>
              <h2>
                An affiliated <em>nonprofit.</em>
              </h2>
            </div>

            <div className="eh-split">
              <div>
                <div className="eh-lockup">
                  <div className="eh-mark" aria-hidden="true">
                    EH
                  </div>
                  <div>
                    <div className="eh-k">{EVERYBODYS_HOME.meta}</div>
                    <div className="eh-name">{EVERYBODYS_HOME.name}</div>
                  </div>
                </div>
                <p className="eh-lede">{EVERYBODYS_HOME.lede}</p>
                <p className="eh-body">{EVERYBODYS_HOME.body}</p>
                <p className="eh-body muted">{EVERYBODYS_HOME.bodyMuted}</p>
                <a
                  href={EVERYBODYS_HOME.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary btn-ink"
                >
                  Visit everybodyshome.org →
                </a>
              </div>

              <div className="eh-pillars">
                {EVERYBODYS_HOME.pillars.map((p) => (
                  <div className="eh-pillar" key={p.n}>
                    <div className="n">{p.n}</div>
                    <div>
                      <h4>{p.title}</h4>
                      <p>{p.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="eh-meta">
              {EVERYBODYS_HOME.meta4.map((m) => (
                <div key={m.k}>
                  <div className="k">{m.k}</div>
                  <div className="v" style={{ whiteSpace: 'pre-line' }}>
                    {m.v}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============ INVESTORS ============ */}
        <section id="invest" className="cta-band">
          <div className="cta-inner">
            <div>
              <div className="k">Investors</div>
              <h2>
                Capital deployed into <em>operational control.</em>
              </h2>
            </div>
            <div className="right">
              <p>
                RISE8 partners with institutional and accredited investors who value transparent
                structure, in-house operations, and long-duration hold. We share underwriting and
                operating data with every partner, quarterly.
              </p>
              <div className="cta-row">
                <a
                  href={SITE.investorPortal}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  Investor relations
                </a>
                <a href={`mailto:${SITE.email.ir}`} className="btn-ghost">
                  Contact IR →
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
