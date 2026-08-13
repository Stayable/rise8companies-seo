import React from 'react';

/**
 * RISE8 Eyebrow / kicker — the uppercase, letter-spaced label that sits
 * above headlines and section heads. Optionally prefixed with a section
 * number and an accent middot.
 */
export function Eyebrow({ children, number, onDark = false, size = 'lg', style = {}, ...rest }) {
  const sizes = {
    lg: { font: '500 11px var(--sans)', letterSpacing: '0.28em' },
    md: { font: '500 10px var(--sans)', letterSpacing: '0.26em' },
    sm: { font: '500 9px var(--sans)', letterSpacing: '0.22em' },
  };
  return (
    <div
      className="rise-c-eyebrow"
      style={{
        ...sizes[size],
        textTransform: 'uppercase',
        color: onDark ? 'rgba(227,227,227,.55)' : 'var(--muted)',
        ...style,
      }}
      {...rest}
    >
      {number != null && (
        <>
          {number}<span aria-hidden="true" style={{ color: 'var(--accent)', margin: '0 8px' }}>·</span>
        </>
      )}
      {children}
    </div>
  );
}
