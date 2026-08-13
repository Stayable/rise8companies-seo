import React from 'react';

/**
 * RISE8 RegisterRow — one line of an almanac-style index/register:
 * serif accent number · serif name · uppercase discipline · serif
 * description · uppercase link. Hover nudges padding-left and turns the
 * link teal. Designed to be stacked with 0.5px dividers between rows.
 */
export function RegisterRow({ number, name, discipline, description, link = 'View', href = '#', onDark = false, style = {} }) {
  const [hover, setHover] = React.useState(false);
  const c = onDark
    ? { name: 'var(--navy-text)', disc: 'rgba(227,227,227,.6)', desc: 'rgba(227,227,227,.75)', link: 'var(--paper)', border: 'rgba(227,227,227,.12)' }
    : { name: 'var(--ink)', disc: 'var(--muted)', desc: 'var(--muted)', link: 'var(--ink)', border: 'var(--rule)' };

  return (
    <a
      href={href}
      className="rise-c-regrow"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        display: 'grid',
        gridTemplateColumns: '28px 1.4fr 1.2fr 1.6fr 90px',
        gap: '24px',
        padding: '22px 0',
        paddingLeft: hover ? '8px' : 0,
        borderBottom: `0.5px solid ${c.border}`,
        alignItems: 'baseline',
        transition: 'all 0.2s cubic-bezier(.4,0,.2,1)',
        ...style,
      }}
    >
      <div style={{ fontFamily: 'var(--serif)', fontWeight: 500, fontSize: '22px', color: 'var(--accent)', lineHeight: 1 }}>{number}</div>
      <div style={{ fontFamily: 'var(--serif)', fontWeight: 500, fontSize: '26px', color: c.name, letterSpacing: '-0.005em', lineHeight: 1.05 }}>{name}</div>
      <div style={{ font: '500 10px var(--sans)', letterSpacing: '0.24em', textTransform: 'uppercase', color: c.disc }}>{discipline}</div>
      <div style={{ fontFamily: 'var(--serif)', fontSize: '14px', color: c.desc, lineHeight: 1.5 }}>{description}</div>
      <div style={{ font: '500 10px var(--sans)', letterSpacing: '0.24em', textTransform: 'uppercase', color: hover ? 'var(--accent)' : c.link, justifySelf: 'end', borderBottom: `0.5px solid ${onDark ? 'rgba(227,227,227,.5)' : 'var(--rule)'}`, paddingBottom: '2px', transition: 'color 0.2s' }}>{link} →</div>
    </a>
  );
}
