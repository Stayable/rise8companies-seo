import React from 'react';

export interface SectionHeadProps {
  /** Left-column kicker, e.g. "02 · Our platform". */
  kicker: React.ReactNode;
  /** The serif headline. Wrap the accented phrase in <em> for teal italic. */
  children: React.ReactNode;
  /** Render light over navy. */
  onDark?: boolean;
  style?: React.CSSProperties;
}

/**
 * The standard section opener — kicker + serif headline over a 1px ink rule,
 * in a two-column baseline-aligned grid. The accent <em> is the brand's
 * single permitted flourish per headline.
 *
 * @startingPoint section="Layout" subtitle="Section opener with kicker" viewport="900x220"
 */
export function SectionHead(props: SectionHeadProps): JSX.Element;
