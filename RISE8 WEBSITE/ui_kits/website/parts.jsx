/* global React */
const { useState, useEffect } = React;

/* ---------- Primitives ---------- */
function Eyebrow({ children, onDark }) {
  return <div style={{ font: '500 11px var(--sans)', letterSpacing: '.28em', textTransform: 'uppercase', color: onDark ? 'rgba(227,227,227,.55)' : 'var(--muted)' }}>{children}</div>;
}
function Button({ children, variant = 'primary', onDark, arrow, onClick }) {
  const base = { display: 'inline-flex', alignItems: 'center', gap: 10, font: '500 11px var(--sans)', letterSpacing: '.22em', textTransform: 'uppercase', cursor: 'pointer', transition: '.2s' };
  const v = variant === 'ghost'
    ? { padding: '14px 0', background: 'transparent', border: 'none', borderBottom: onDark ? '.5px solid rgba(227,227,227,.5)' : '.5px solid var(--ink)', color: onDark ? 'rgba(227,227,227,.85)' : 'var(--ink)' }
    : onDark
      ? { padding: '14px 24px', background: 'var(--paper)', color: 'var(--ink)', border: '.5px solid var(--paper)' }
      : { padding: '14px 24px', background: 'var(--ink)', color: 'var(--paper)', border: '.5px solid var(--ink)' };
  return <span style={{ ...base, ...v }} onClick={onClick}>{children}{arrow && <span>→</span>}</span>;
}

/* ---------- Nav ---------- */
const NAV = [['platform','Platform'],['about','About'],['portfolio','Portfolio'],['community','Community'],['invest','Investors']];
function Nav({ active, onNav }) {
  return (
    <nav className="k-nav">
      <div className="k-nav-inner">
        <a onClick={() => onNav('top')} style={{ cursor: 'pointer' }}><img src="../../assets/logos/rise8-logo-light.png" alt="RISE8 Companies" /></a>
        <div className="k-nav-links">
          {NAV.map(([id, label]) => (
            <a key={id} className={active === id ? 'active' : ''} onClick={() => onNav(id)}>{label}</a>
          ))}
        </div>
        <span className="k-login" onClick={() => onNav('invest')}>Investor Login</span>
      </div>
    </nav>
  );
}

/* ---------- Hero ---------- */
function Hero({ onNav }) {
  return (
    <div className="k-hero">
      <div className="k-hero-bg"></div>
      <div className="k-hero-arch"></div>
      <div className="k-hero-inner">
        <div className="k-hero-top">
          <Eyebrow onDark>RISE8 Companies <span style={{ color: 'var(--accent)', margin: '0 8px' }}>·</span> Est. 2014</Eyebrow>
          <div className="k-proverb"><b>七転び八起き</b><span>Nana korobi yaoki.</span></div>
        </div>
        <div className="k-hero-mid">
          <h1 className="k-hero-title">Extended-stay hospitality, <em>end to end.</em></h1>
          <p className="k-hero-sub">One parent. Four operating companies. Eight Florida properties. A single integrated platform.</p>
        </div>
        <div className="k-hero-bottom">
          <div className="k-hero-cta">
            <Button onClick={() => onNav('platform')}>Explore the platform</Button>
            <Button variant="ghost" arrow onClick={() => onNav('invest')}>Invest with us</Button>
          </div>
          <div className="k-scroll"><span className="line"></span>Scroll</div>
        </div>
      </div>
    </div>
  );
}

/* ---------- Company index strip ---------- */
const COMPANIES = [
  ['01', 'Stayable', 'Brand', 'The proprietary brand our entire portfolio operates under. Franchise-free, direct-booking.'],
  ['02', 'RISE8 Management', 'Operations', 'In-house operator for every property. Built for our own assets, not sold as a service.'],
  ['03', 'RISE8 Real Estate Finance', 'Capital', 'Capital structured in-house, beside underwriting and operations.'],
  ['04', 'RISE8 Development', 'Construction', 'Ground-up and value-add construction, delivered to our own brand standard.'],
];
function IndexRow({ row, onNav }) {
  const [hover, setHover] = useState(false);
  const [num, name, disc, desc] = row;
  return (
    <a onClick={() => onNav('platform')} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
       style={{ display: 'grid', gridTemplateColumns: '28px 1.4fr 1.2fr 1.6fr 90px', gap: 24, padding: '22px 0', paddingLeft: hover ? 8 : 0, borderBottom: '.5px solid rgba(227,227,227,.12)', alignItems: 'baseline', cursor: 'pointer', transition: '.2s' }}>
      <div style={{ fontFamily: 'var(--serif)', color: 'var(--accent)', fontSize: 22, fontWeight: 500 }}>{num}</div>
      <div style={{ fontFamily: 'var(--serif)', fontSize: 26, color: 'var(--navy-text)', fontWeight: 500, letterSpacing: '-.005em' }}>{name}</div>
      <div style={{ font: '500 10px var(--sans)', letterSpacing: '.24em', textTransform: 'uppercase', color: 'rgba(227,227,227,.6)' }}>{disc}</div>
      <div style={{ fontFamily: 'var(--serif)', fontSize: 14, color: 'rgba(227,227,227,.75)', lineHeight: 1.5 }}>{desc}</div>
      <div style={{ font: '500 10px var(--sans)', letterSpacing: '.24em', textTransform: 'uppercase', color: hover ? 'var(--accent)' : 'var(--paper)', justifySelf: 'end', borderBottom: '.5px solid rgba(227,227,227,.5)', paddingBottom: 2, transition: '.2s' }}>View →</div>
    </a>
  );
}
function IndexStrip({ onNav }) {
  return (
    <div className="k-index">
      <div className="k-index-inner">
        <div className="k-index-head">
          <div className="h">№</div><div className="h">Company</div><div className="h">Discipline</div><div className="h">Brief</div><div className="h"></div>
        </div>
        {COMPANIES.map(r => <IndexRow key={r[0]} row={r} onNav={onNav} />)}
      </div>
    </div>
  );
}

/* ---------- Stats ---------- */
const STATS = [['1,300', '+', 'Keys managed'], ['8', '', 'Properties'], ['5', '', 'Florida markets'], ['100', '%', 'Stayable branded']];
function StatsBand() {
  return (
    <div className="k-stats">
      <div className="k-stats-inner">
        {STATS.map(([v, sup, l]) => (
          <div key={l} style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            <div style={{ fontFamily: 'var(--serif)', fontWeight: 500, fontSize: 60, lineHeight: .95, letterSpacing: '-.02em', color: 'var(--ink)' }}>{v}{sup && <sup style={{ color: 'var(--accent)', fontSize: '.5em', verticalAlign: '.6em', marginLeft: 2 }}>{sup}</sup>}</div>
            <div style={{ font: '500 11px var(--sans)', letterSpacing: '.26em', textTransform: 'uppercase', color: 'var(--muted)' }}>{l}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

Object.assign(window, { Eyebrow, Button, Nav, Hero, IndexStrip, StatsBand, COMPANIES });
