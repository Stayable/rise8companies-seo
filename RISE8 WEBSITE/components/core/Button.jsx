import React from 'react';

/**
 * RISE8 Button — square, hairline-bordered, uppercase tracked label.
 * Filled inverts to outline on hover. Ghost is an underlined text link.
 */
export function Button({
  children,
  variant = 'primary', // 'primary' | 'ghost'
  onDark = false,
  href,
  arrow = false,
  onClick,
  style = {},
  ...rest
}) {
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '10px',
    font: "500 11px var(--sans)",
    letterSpacing: '0.22em',
    textTransform: 'uppercase',
    cursor: 'pointer',
    transition: 'all 0.2s cubic-bezier(.4,0,.2,1)',
    border: '0.5px solid transparent',
  };

  const variants = {
    primary: onDark
      ? { padding: '14px 24px', background: 'var(--paper)', color: 'var(--ink)', borderColor: 'var(--paper)' }
      : { padding: '14px 24px', background: 'var(--ink)', color: 'var(--paper)', borderColor: 'var(--ink)' },
    ghost: {
      padding: '14px 0',
      background: 'transparent',
      border: 'none',
      borderBottom: onDark ? '0.5px solid rgba(227,227,227,.5)' : '0.5px solid var(--ink)',
      color: onDark ? 'rgba(227,227,227,.85)' : 'var(--ink)',
    },
  };

  const cls = `rise-c-btn rise-c-btn--${variant}${onDark ? ' is-on-dark' : ''}`;
  const props = { className: cls, style: { ...base, ...variants[variant], ...style }, onClick, ...rest };
  const content = (
    <>
      {children}
      {arrow && <span aria-hidden="true">→</span>}
    </>
  );

  return href ? <a href={href} {...props}>{content}</a> : <button {...props}>{content}</button>;
}
