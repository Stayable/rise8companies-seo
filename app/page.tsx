import Link from 'next/link'
import HomeChrome from '@/components/site/HomeChrome'
import HeroCanvas from '@/components/site/HeroCanvas'
import Atlas from '@/components/site/Atlas'
import Footer from '@/components/site/Footer'
import {
  COMPANIES,
  DIRECTORS,
  EVERYBODYS_HOME,
  FEATURED_PROPERTY_IDS,
  HERO,
  INDEX_ROWS,
  LETTER,
  PRINCIPALS,
  PRINCIPLES,
  PROPERTIES,
  SHOW_DIRECTORS,
  SITE,
  STATS,
  TIMELINE,
} from '@/content/site'

const featured = FEATURED_PROPERTY_IDS.map(
  (id) => PROPERTIES.find((p) => p.id === id)!
).filter((p) => p.image)

export default function HomePage() {
  return (
    <>
      <HomeChrome />

      <main id="main">
        {/* ============ HOME ============ */}
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
                  <Link href="#platform" className="btn-primary">
                    Explore the platform
                  </Link>
                  <Link href="#invest" className="btn-ghost">
                    Invest with us →
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
              {INDEX_ROWS.map((row) => (
                <Link key={row.num} href={row.href} className="index-row">
                  <div className="ix-num">{row.num}</div>
                  <div className="ix-name">{row.name}</div>
                  <div className="ix-disc">{row.discipline}</div>
                  <div className="ix-desc">{row.brief}</div>
                  <div className="ix-link">View →</div>
                </Link>
              ))}
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

          <div className="wrap">
            <div className="sec-head">
              <div className="kicker">Who we are</div>
              <h2>
                One platform. <em>Every incentive</em> aligned.
              </h2>
            </div>
            <div className="sec-body">
              <div className="col">
                <p className="lede">
                  RISE8 controls the full value chain of extended-stay hospitality — from acquiring
                  the land and underwriting the capital to pouring the slab, running the front desk,
                  and setting the rate.
                </p>
              </div>
              <div className="col">
                <p>
                  Four operating companies, one ownership, one thesis. By consolidating what the
                  industry typically fragments across franchisors, operators, and lenders, we remove
                  the misaligned incentives that erode returns in third-party hospitality.
                </p>
                <p>
                  <Link href="#about" className="inline-link">
                    Read our story →
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ============ PLATFORM ============ */}
        <section id="platform">
          <div className="wrap-tight">
            <div className="sec-head">
              <div className="kicker">Our platform</div>
              <h2>
                Four operating companies under <em>one parent.</em>
              </h2>
            </div>
          </div>

          <div className="platform-split">
            <div className="platform-photo">
              <div className="img" />
              <div className="win" />
              <div className="caption">
                <div className="k">Stayable</div>
                <h3>One brand. Every property.</h3>
                <p>
                  By internalizing what the industry fragments, every incentive points the same
                  direction.
                </p>
              </div>
            </div>

            <div className="platform-rail">
              <div className="rail-head">
                <div className="k">The four companies</div>
                <h2>A vertically integrated platform.</h2>
              </div>

              {COMPANIES.map((co) =>
                co.external ? (
                  <a
                    key={co.num}
                    href={co.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="co-card"
                  >
                    <CompanyCardBody co={co} />
                  </a>
                ) : (
                  <Link key={co.num} href={co.href} className="co-card">
                    <CompanyCardBody co={co} />
                  </Link>
                )
              )}
            </div>
          </div>
        </section>

        {/* ============ ABOUT ============ */}
        <section id="about" style={{ background: 'var(--paper-3)' }}>
          <div className="wrap">
            <div className="sec-head">
              <div className="kicker">About</div>
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
                  <strong>Robert Beyer</strong>, Founder
                </div>
              </div>
            </div>

            <div className="chron">
              <div className="chron-head">
                <div className="k">A brief chronology</div>
                <h3>From a thesis to eight addresses.</h3>
              </div>
              <div className="timeline">
                {TIMELINE.map((t) => (
                  <div className="t-item" key={t.year}>
                    <div className={`t-dot${t.active ? ' active' : ''}`} />
                    <div className="t-year">{t.year}</div>
                    <div className="t-head">{t.head}</div>
                    <div className="t-desc">{t.desc}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="principles">
              <div className="principles-head">
                <div className="k">Principles · in practice</div>
                <h3>Five, against which we are measured.</h3>
              </div>
              <div className="principles-grid">
                {PRINCIPLES.map((p) => (
                  <div className="p-item" key={p.num}>
                    <div className="p-num">{p.num}</div>
                    <h4 className="p-name">{p.name}</h4>
                    <p className="p-desc">{p.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ============ PORTFOLIO ============ */}
        <section id="portfolio">
          <div className="wrap-tight">
            <div className="sec-head">
              <div className="kicker">Portfolio</div>
              <h2>
                Eight Florida addresses, <em>one brand.</em>
              </h2>
            </div>
            <p className="portfolio-lede">
              Central and Northeast Florida corridors — I-4, I-95, I-295. Every property owned by
              RISE8 and operated under Stayable.
            </p>

            <div className="prop-cards">
              {featured.map((p) => (
                <div className="prop-card" key={p.id}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={p.image!} alt={p.name} loading="lazy" />
                  <div className="body">
                    <div className="region">{p.region}</div>
                    <div className="title">{p.name}</div>
                    <div className="addr">{p.address.split(',')[0]}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <Atlas />
        </section>

        {/* ============ LEADERSHIP ============ */}
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
              <div className="kicker">Leadership</div>
              <h2>
                The people <em>accountable.</em>
              </h2>
            </div>

            <div className="lead-tier1" style={SHOW_DIRECTORS ? undefined : { marginBottom: 0 }}>
              {PRINCIPALS.map((p) => (
                <div className="lead-principal" key={p.name}>
                  <div
                    className="portrait portrait-dark"
                    style={{ width: 120, height: 120, fontSize: 30 }}
                    aria-hidden="true"
                  >
                    {p.initials}
                  </div>
                  <div>
                    <div className="lead-role">{p.role}</div>
                    <div className="lead-name">{p.name}</div>
                    <p className="lead-bio">{p.bio}</p>
                  </div>
                </div>
              ))}
            </div>

            {SHOW_DIRECTORS ? (
              <div className="lead-tier2">
                {DIRECTORS.map((d) => (
                  <div className="lead-director" key={d.name}>
                    <div
                      className="portrait"
                      style={{ width: 88, height: 88, fontSize: 22 }}
                      aria-hidden="true"
                    >
                      {d.initials}
                    </div>
                    <div>
                      <div className="lead-role">{d.role}</div>
                      <div className="lead-name">{d.name}</div>
                    </div>
                  </div>
                ))}
              </div>
            ) : null}
          </div>
        </section>

        {/* ============ COMMUNITY ============ */}
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
              <div className="kicker">Community</div>
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
                <a href={`mailto:${SITE.email.investors}`} className="btn-ghost">
                  Contact IR →
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ============ CONTACT ============ */}
        <section id="contact" style={{ background: 'var(--paper)', borderTop: '1px solid var(--ink)' }}>
          <div className="wrap">
            <div className="sec-head">
              <div className="kicker">Contact</div>
              <h2>
                Let’s talk about <em>what you need.</em>
              </h2>
            </div>

            <div className="contact-split">
              <div>
                <p className="contact-intro">
                  Whether you are an investor looking at the thesis, an owner exploring a financing
                  structure, or a guest looking to stay — reach the right person directly.
                </p>
                <div className="contact-rows">
                  <div className="contact-row">
                    <div className="k">Investors</div>
                    <div className="v">
                      <a href={`mailto:${SITE.email.investors}`}>{SITE.email.investors}</a>
                    </div>
                  </div>
                  <div className="contact-row">
                    <div className="k">Press</div>
                    <div className="v">
                      <a href={`mailto:${SITE.email.press}`}>{SITE.email.press}</a>
                    </div>
                  </div>
                  <div className="contact-row">
                    <div className="k">Careers</div>
                    <div className="v">
                      <a href={`mailto:${SITE.email.careers}`}>{SITE.email.careers}</a>
                    </div>
                  </div>
                  <div className="contact-row">
                    <div className="k">General</div>
                    <div className="v">
                      {SITE.locale} · Est. {SITE.founded}
                    </div>
                  </div>
                </div>
              </div>

              <div className="portal-panel">
                <div className="k">Investor portal</div>
                <h3>Partners get full access.</h3>
                <p>
                  Quarterly letters, underwriting files, property-level operating data, and capital
                  account reporting — all in one place.
                </p>
                <div className="portal-actions">
                  <a
                    href={SITE.investorPortal}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                  >
                    Log in to investor portal →
                  </a>
                  <a href={`mailto:${SITE.email.investors}`} className="btn-ghost">
                    Request access →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}

function CompanyCardBody({ co }: { co: (typeof COMPANIES)[number] }) {
  return (
    <>
      <div className="co-num">{co.num}</div>
      <div>
        <div className="co-k">{co.kicker}</div>
        <h3 className="co-name">{co.name}</h3>
        <p className="co-desc">{co.desc}</p>
      </div>
      <div className="co-link">{co.link}</div>
    </>
  )
}
