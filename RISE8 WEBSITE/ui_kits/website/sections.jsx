/* global React, Button, COMPANIES */
const { useState: useStateS } = React;

/* ---------- Platform split ---------- */
const CO_LINKS = ['Visit', 'Capabilities', 'Investors', 'Capabilities'];
function CoCard({ row, idx }) {
  const [hover, setHover] = useStateS(false);
  const [num, name, kind, desc] = row;
  return (
    <a onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
       style={{ display: 'grid', gridTemplateColumns: '40px 1fr auto', gap: 20, padding: '24px 0', paddingLeft: hover ? 8 : 0, borderBottom: idx < 3 ? '.5px solid var(--rule)' : 'none', alignItems: 'start', cursor: 'pointer', transition: '.2s' }}>
      <div style={{ fontFamily: 'var(--serif)', fontWeight: 500, fontSize: 30, color: 'var(--accent)', letterSpacing: '-.02em', lineHeight: .95 }}>{num}</div>
      <div>
        <div style={{ font: '500 10px var(--sans)', letterSpacing: '.24em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 6 }}>{kind}</div>
        <h3 style={{ margin: '0 0 8px', fontFamily: 'var(--serif)', fontWeight: 500, fontSize: 25, color: 'var(--ink)', letterSpacing: '-.005em', lineHeight: 1.08 }}>{name}</h3>
        <p style={{ margin: 0, fontFamily: 'var(--serif)', fontSize: 15, lineHeight: 1.55, color: 'var(--muted)', maxWidth: '52ch' }}>{desc}</p>
      </div>
      <div style={{ font: '500 10px var(--sans)', letterSpacing: '.24em', textTransform: 'uppercase', color: hover ? 'var(--accent)' : 'var(--ink)', whiteSpace: 'nowrap', paddingTop: 14, transition: '.2s' }}>{CO_LINKS[idx]} →</div>
    </a>
  );
}
function Platform() {
  return (
    <div>
      <div className="wrap-tight" style={{ paddingBottom: 40 }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'auto 1fr', gap: 60, borderTop: '1px solid var(--ink)', paddingTop: 24, alignItems: 'baseline' }}>
          <div style={{ font: '500 11px var(--sans)', letterSpacing: '.28em', textTransform: 'uppercase', color: 'var(--muted)', whiteSpace: 'nowrap' }}>02 · Our platform</div>
          <h2 style={{ margin: 0, fontFamily: 'var(--serif)', fontWeight: 500, fontSize: 'clamp(36px,4.5vw,60px)', lineHeight: 1.02, letterSpacing: '-.01em', color: 'var(--ink)', maxWidth: '22ch' }}>Four operating companies under <em style={{ fontStyle: 'italic', color: 'var(--accent)' }}>one parent.</em></h2>
        </div>
      </div>
      <div className="k-platform">
        <div className="k-platform-photo">
          <div className="img"></div><div className="win"></div>
          <div className="caption">
            <div className="k">Stayable</div>
            <h3>One brand. Every property.</h3>
            <p>By internalizing what the industry fragments, every incentive points the same direction.</p>
          </div>
        </div>
        <div className="k-rail">
          <div className="k-rail-head"><div className="k">The four companies</div><h2>A vertically integrated platform.</h2></div>
          {COMPANIES.map((r, i) => <CoCard key={r[0]} row={r} idx={i} />)}
        </div>
      </div>
    </div>
  );
}

/* ---------- Portfolio atlas ---------- */
const PROPS = [
  ['p4', '01', 'Stayable Lakeland', '4645 N. Socrum Loop Road, Lakeland, FL', '—', { left: '42%', top: '52%' }],
  ['p8', '02', 'Stayable Jacksonville North', 'Jacksonville, FL · I-95 corridor', '128', { left: '34%', top: '16%' }],
  ['p2', '03', 'Stayable Kissimmee East', '2295 E. Irlo Bronson Mem. Hwy, Kissimmee', '196', { left: '55%', top: '60%' }],
  ['p5', '04', 'Stayable Orlando', '8700 S. Orange Blossom Trail, Orlando, FL', '—', { left: '50%', top: '55%' }],
  ['p1', '05', 'Stayable Jacksonville West', '910 Suemac Road, Jacksonville, FL', '64', { left: '38%', top: '24%' }],
  ['p3', '06', 'Stayable Kissimmee West', '5399 W. Irlo Bronson Mem. Hwy, Kissimmee', '—', { left: '44%', top: '62%' }],
  ['p6', '07', 'Stayable St. Augustine', '2535 State Road 16, St. Augustine, FL', '—', { left: '48%', top: '32%' }],
  ['p7', '08', 'Stayable Davenport', '44199 Hwy 27, Davenport, FL', '—', { left: '40%', top: '70%' }],
];
function Portfolio() {
  const [hot, setHot] = useStateS(null);
  return (
    <div>
      <div className="wrap-tight" style={{ paddingBottom: 32 }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'auto 1fr', gap: 60, borderTop: '1px solid var(--ink)', paddingTop: 24, alignItems: 'baseline' }}>
          <div style={{ font: '500 11px var(--sans)', letterSpacing: '.28em', textTransform: 'uppercase', color: 'var(--muted)', whiteSpace: 'nowrap' }}>04 · Portfolio</div>
          <h2 style={{ margin: 0, fontFamily: 'var(--serif)', fontWeight: 500, fontSize: 'clamp(36px,4.5vw,60px)', lineHeight: 1.02, letterSpacing: '-.01em', color: 'var(--ink)', maxWidth: '22ch' }}>Eight Florida addresses, <em style={{ fontStyle: 'italic', color: 'var(--accent)' }}>one brand.</em></h2>
        </div>
      </div>
      <div className="k-atlas">
        <div className="k-map">
          <div className="k-compass">N</div>
          <div className="fl"><div className="fl-label">Florida</div></div>
          {PROPS.map(p => (
            <div key={p[0]} className={'k-pin' + (hot === p[0] ? ' active' : '')} style={p[5]} onMouseEnter={() => setHot(p[0])} onMouseLeave={() => setHot(null)}></div>
          ))}
        </div>
        <div className="k-register">
          <div className="k-register-head"><div className="k">The register</div><h3>Eight Florida properties.</h3></div>
          {PROPS.map(p => (
            <div key={p[0]} className={'k-prop' + (hot === p[0] ? ' active' : '')} onMouseEnter={() => setHot(p[0])} onMouseLeave={() => setHot(null)}>
              <div className="num">{p[1]}</div>
              <div><h4 className="name">{p[2]}</h4><p className="addr">{p[3]}</p></div>
              <div className="keys">{p[4]}<sub>keys</sub></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ---------- Footer ---------- */
function Footer() {
  const cols = [
    ['Platform', ['Stayable Suites', 'RISE8 Management', 'RISE8 Real Estate Finance', 'RISE8 Development']],
    ['Company', ['About us', 'Portfolio', "Everybody's Home Inc.", 'Careers']],
    ['Investors', ['Thesis', 'Criteria', 'Quarterly letters', 'Investor Login']],
  ];
  return (
    <footer className="k-footer">
      <div className="k-foot-inner">
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 20 }}>
            <div className="mark">R8</div>
            <div style={{ fontFamily: 'var(--serif)', fontWeight: 500, fontSize: 17, letterSpacing: '.06em', color: 'var(--paper)' }}>RISE8 COMPANIES</div>
          </div>
          <p style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: 14, color: 'rgba(227,227,227,.5)', margin: 0, maxWidth: '34ch', lineHeight: 1.6 }}>A vertically integrated extended-stay hospitality company. Florida. Est. 2014.</p>
        </div>
        {cols.map(([h, items]) => (
          <div key={h}><h4>{h}</h4><ul>{items.map(i => <li key={i}><a>{i}</a></li>)}</ul></div>
        ))}
      </div>
      <div className="k-foot-bottom">
        <div>© 2026 RISE8 Companies · Florida</div>
        <div className="pv">七転び八起き — nana korobi yaoki.</div>
      </div>
    </footer>
  );
}

Object.assign(window, { Platform, Portfolio, Footer });
