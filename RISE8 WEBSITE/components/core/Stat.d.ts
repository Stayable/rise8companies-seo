import React from 'react';

export interface StatProps {
  /** The figure, e.g. "1,300" or "8". */
  value: React.ReactNode;
  /** Superscript accent unit, e.g. "+" or "%". */
  sup?: string;
  /** Uppercase label beneath the figure. */
  label: React.ReactNode;
  /** Optional italic serif footnote. */
  note?: string;
  /** Render light for navy surfaces. */
  onDark?: boolean;
  style?: React.CSSProperties;
}

/**
 * Large serif statistic with a teal superscript unit over an uppercase
 * label. Lay several in a 4-up grid for the stats band.
 */
export function Stat(props: StatProps): JSX.Element;
