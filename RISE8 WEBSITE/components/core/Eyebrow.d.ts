import React from 'react';

export interface EyebrowProps {
  children: React.ReactNode;
  /** Optional leading section number (e.g. "02"), followed by an accent middot. */
  number?: string | number;
  /** Lighten for navy surfaces. */
  onDark?: boolean;
  /** Label size. */
  size?: 'lg' | 'md' | 'sm';
  style?: React.CSSProperties;
}

/**
 * The small uppercase Inter label above headlines and section heads.
 * Carries the almanac numbering convention via the `number` prop.
 */
export function Eyebrow(props: EyebrowProps): JSX.Element;
