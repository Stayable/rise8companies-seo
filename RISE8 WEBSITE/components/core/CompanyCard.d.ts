import React from 'react';

export interface CompanyCardProps {
  /** Serif accent number, e.g. "01". */
  number: React.ReactNode;
  /** Uppercase category label, e.g. "Brand" or "Operations". */
  kind: React.ReactNode;
  /** Serif company / entity name. */
  name: React.ReactNode;
  /** Serif description. */
  description: React.ReactNode;
  /** Link label (without arrow). Defaults to "Visit". */
  link?: string;
  href?: string;
  style?: React.CSSProperties;
}

/**
 * Platform-rail entry: accent number · kind label · serif name · description ·
 * right-aligned link, divided by a 0.5px hairline. Nudges inward on hover.
 * Stack inside a panel to build the four-company rail.
 *
 * @startingPoint section="Layout" subtitle="Platform-rail company card" viewport="700x180"
 */
export function CompanyCard(props: CompanyCardProps): JSX.Element;
