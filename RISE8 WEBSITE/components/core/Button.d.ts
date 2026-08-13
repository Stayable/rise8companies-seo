import React from 'react';

export interface ButtonProps {
  children: React.ReactNode;
  /** Visual style. `primary` is a filled square that inverts to outline on hover; `ghost` is an underlined text link. */
  variant?: 'primary' | 'ghost';
  /** Invert colors for placement on a dark (navy) surface. */
  onDark?: boolean;
  /** Render as an anchor instead of a button. */
  href?: string;
  /** Append a trailing → arrow (a RISE8 convention on links/CTAs). */
  arrow?: boolean;
  onClick?: (e: React.MouseEvent) => void;
  style?: React.CSSProperties;
}

/**
 * The RISE8 call-to-action. Square corners, hairline border, uppercase
 * letter-spaced label in Inter. Never rounded; never shadowed.
 *
 * @startingPoint section="Core" subtitle="Primary & ghost buttons" viewport="700x160"
 */
export function Button(props: ButtonProps): JSX.Element;
