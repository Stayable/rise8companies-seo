import React from 'react';

/**
 * RISE8 CompanyCard — the platform-rail card: a large serif accent number,
 * an uppercase kind label, a serif company name, a serif description, and
 * a right-aligned uppercase link. Rows are divided by 0.5px hairlines and
 * nudge inward on hover.
 */
export function CompanyCard({ number, kind, name, description, link = 'Visit', href = '#', style = {} }) {
  const [hover, setHover] = React.useState(false);
  return (
    <a
      href={href}
      className="rise-c-cocard"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        display: 'grid',
        gridTemplateColumns: '40px 1fr auto',
        gap: '20px',
        padding: '26px 0',
        paddingLeft: hover ? '8px' : 0,
        borderBottom: '0.5px solid var(--rule)',
        alignItems: 'start',
        transition: 'all 0.2s cubic-bezier(.4,0,.2,1)',
        ...style,
      }}
    >
      <div style={{ fontFamily: 'var(--serif)', fontWeight: 500, fontSize: '30px', color: 'var(--accent)', lineHeight: 0.95, letterSpacing: '-0.02em' }}>{number}</div>
      <div>
        <div style={{ font: '500 10px var(--sans)', letterSpacing: '0.24em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: '6px' }}>{kind}</div>
        <h3 style={{ margin: '0 0 8px', fontFamily: 'var(--serif)', fontWeight: 500, fontSize: '26px', color: 'var(--ink)', letterSpacing: '-0.005em', lineHeight: 1.08 }}>{name}</h3>
        <p style={{ margin: 0, fontFamily: 'var(--serif)', fontSize: '15px', lineHeight: 1.55, color: 'var(--muted)', maxWidth: '52ch' }}>{description}</p>
      </div>
      <div style={{ font: '500 10px var(--sans)', letterSpacing: '0.24em', textTransform: 'uppercase', color: hover ? 'var(--accent)' : 'var(--ink)', whiteSpace: 'nowrap', paddingTop: '14px', transition: 'color 0.2s' }}>{link} →</div>
    </a>
  );
}
