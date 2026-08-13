import React from 'react';

/**
 * RISE8 Stat — a serif figure with an optional superscript accent unit
 * over an uppercase label. Used in the stats band.
 */
export function Stat({ value, sup, label, note, onDark = false, style = {} }) {
  return (
    <div className="rise-c-stat" style={{ display: 'flex', flexDirection: 'column', gap: '8px', ...style }}>
      <div
        style={{
          fontFamily: 'var(--serif)',
          fontWeight: 500,
          fontSize: '64px',
          lineHeight: 0.95,
          letterSpacing: '-0.02em',
          color: onDark ? 'var(--navy-text)' : 'var(--ink)',
        }}
      >
        {value}
        {sup && <sup style={{ color: 'var(--accent)', fontSize: '0.5em', verticalAlign: '0.6em', marginLeft: '2px' }}>{sup}</sup>}
      </div>
      <div style={{ font: '500 11px var(--sans)', letterSpacing: '0.26em', textTransform: 'uppercase', color: onDark ? 'rgba(227,227,227,.6)' : 'var(--muted)' }}>
        {label}
      </div>
      {note && <div style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: '14px', color: 'var(--muted)', marginTop: '2px' }}>{note}</div>}
    </div>
  );
}
