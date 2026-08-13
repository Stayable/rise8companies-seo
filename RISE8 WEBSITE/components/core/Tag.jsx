import React from 'react';

/**
 * RISE8 Tag — a small hairline-bordered pill for metadata
 * (corridors, markets, status). Square, uppercase, tracked.
 */
export function Tag({ children, style = {}, ...rest }) {
  return (
    <span
      className="rise-c-tag"
      style={{
        display: 'inline-block',
        padding: '2px 8px',
        border: '0.5px solid var(--rule)',
        font: '500 9px var(--sans)',
        letterSpacing: '0.22em',
        textTransform: 'uppercase',
        color: 'var(--muted)',
        ...style,
      }}
      {...rest}
    >
      {children}
    </span>
  );
}
