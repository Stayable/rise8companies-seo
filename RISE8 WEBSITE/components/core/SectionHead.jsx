import React from 'react';

/**
 * RISE8 SectionHead — the two-column section opener: an Eyebrow kicker on
 * the left, a serif headline (with optional italic accent) on the right,
 * over a 1px ink top rule. Pass the headline as children; wrap the accented
 * phrase in <em> for the teal italic.
 */
export function SectionHead({ kicker, children, onDark = false, style = {} }) {
  return (
    <div
      className="rise-c-sechead"
      style={{
        display: 'grid',
        gridTemplateColumns: 'auto 1fr',
        gap: '60px',
        borderTop: onDark ? '1px solid rgba(227,227,227,.2)' : '1px solid var(--ink)',
        paddingTop: '24px',
        alignItems: 'baseline',
        ...style,
      }}
    >
      <div style={{ font: '500 11px var(--sans)', letterSpacing: '0.28em', textTransform: 'uppercase', color: onDark ? 'rgba(227,227,227,.55)' : 'var(--muted)', whiteSpace: 'nowrap' }}>
        {kicker}
      </div>
      <h2
        style={{
          margin: 0,
          fontFamily: 'var(--serif)',
          fontWeight: 500,
          fontSize: 'clamp(36px, 4.5vw, 64px)',
          lineHeight: 1.02,
          letterSpacing: '-0.01em',
          color: onDark ? 'var(--navy-text)' : 'var(--ink)',
          maxWidth: '22ch',
        }}
      >
        {children}
      </h2>
    </div>
  );
}
