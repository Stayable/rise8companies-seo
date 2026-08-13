import React from 'react';

export interface TagProps {
  children: React.ReactNode;
  style?: React.CSSProperties;
}

/**
 * Small hairline-bordered metadata pill — corridors, markets, status.
 * Square corners, uppercase Inter at 9px. Group several with a flex gap.
 */
export function Tag(props: TagProps): JSX.Element;
