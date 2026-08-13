import React from 'react';

export interface RegisterRowProps {
  /** Serif accent index, e.g. "01". */
  number: React.ReactNode;
  /** Serif name / title. */
  name: React.ReactNode;
  /** Uppercase discipline or category label. */
  discipline: React.ReactNode;
  /** Serif description / brief. */
  description: React.ReactNode;
  /** Link label (without the arrow). Defaults to "View". */
  link?: string;
  href?: string;
  /** Render light over navy (e.g. the home index strip). */
  onDark?: boolean;
  style?: React.CSSProperties;
}

/**
 * One row of the almanac index/register: number · name · discipline ·
 * description · link, on a five-column grid over a 0.5px divider. Hover
 * nudges the row inward and turns the link teal. Stack several to build
 * the company or property register.
 *
 * @startingPoint section="Layout" subtitle="Almanac index / register row" viewport="1100x120"
 */
export function RegisterRow(props: RegisterRowProps): JSX.Element;
