/**
 * All site copy and data in one place.
 *
 * Source of truth: `RISE8 Companies.pdf` (Rob's current Claude Design render,
 * 2026-08-14). It supersedes the older `RISE8 WEBSITE/` HTML export: the values
 * section replaced the five principles, the chronology and the platform split
 * were dropped, and Rob's full biography was added. Copy is carried through as
 * written. Every unverified figure, date, and claim is listed in `REVIEW.md`.
 */

export const SITE = {
  name: 'RISE8 Companies',
  url: 'https://rise8companies.com',
  // FLAG: design footer says "Jacksonville, Florida · Est. 2014"; CLAUDE.md and the
  // REF design page say Boca Raton. Unresolved — see REVIEW.md #1.
  locale: 'Jacksonville, Florida',
  founded: '2014',
  proverb: {
    kanji: '七転び八起き',
    romaji: 'Nana korobi yaoki.',
    translation: 'Fall seven times. Rise eight.',
  },
  investorPortal: 'https://invest.rise8companies.com/',
  stayable: 'https://rentstayable.com/',
  email: {
    investors: 'investors@rise8mgmt.com',
    press: 'press@rise8mgmt.com',
    careers: 'careers@rise8mgmt.com',
    finance: 'finance@rise8companies.com',
  },
} as const

export const NAV = [
  { href: '/#about', label: 'About', id: 'about' },
  { href: '/#portfolio', label: 'Portfolio', id: 'portfolio' },
  { href: '/#leadership', label: 'Leadership', id: 'leadership' },
  { href: '/#community', label: 'Community', id: 'community' },
  { href: '/#invest', label: 'Investors', id: 'invest' },
] as const

export const TOC = [
  { id: 'top', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'portfolio', label: 'Portfolio' },
  { id: 'leadership', label: 'Leadership' },
  { id: 'community', label: 'Community' },
  { id: 'invest', label: 'Invest' },
] as const

export const HERO = {
  titleLead: 'Extended-stay hospitality, ',
  titleEm: 'end to end.',
  sub: 'One firm. Every function. No seams. That is the moat.',
  cta: 'Explore RISE8',
}

/** The five-row index strip under the hero. */
export const INDEX_ROWS = [
  {
    num: '01',
    name: 'Stayable',
    discipline: 'Brand',
    brief:
      'The proprietary brand our entire portfolio operates under. Franchise-free, direct-booking.',
    href: SITE.stayable,
    external: true,
  },
  {
    num: '02',
    name: 'RISE8 Management',
    discipline: 'Operations',
    brief: 'In-house operator for every property. Built for our own assets, not sold as a service.',
    href: '/management',
    external: false,
  },
  {
    num: '03',
    name: 'RISE8 Real Estate Finance',
    discipline: 'Capital',
    brief: 'Capital structured in-house, beside underwriting and operations.',
    href: '/real-estate-finance',
    external: false,
  },
  {
    num: '04',
    name: 'RISE8 Development',
    discipline: 'Construction',
    brief: 'Ground-up and value-add construction, delivered to our own brand standard.',
    href: '/development',
    external: false,
  },
  {
    num: '05',
    name: "Everybody's Home",
    discipline: 'Nonprofit · 501(c)(3)',
    brief: 'Stable housing and practical support for underhoused individuals and families.',
    href: '/#community',
    external: false,
  },
] as const

export const STATS = [
  { value: '1,150', label: 'Keys managed' },
  { value: '8', label: 'Properties' },
  { value: '6', label: 'Florida markets' },
  { value: '100', sup: '%', label: 'Stayable branded' },
] as const

export const COMPANIES = [
  {
    num: '01',
    kicker: 'Brand',
    name: 'Stayable',
    desc: 'The proprietary extended-stay brand our entire portfolio operates under. No franchise flag, no OTA dependency. Direct-booking first — daily, weekly, monthly.',
    link: 'Visit →',
    href: SITE.stayable,
    external: true,
  },
  {
    num: '02',
    kicker: 'Operations',
    name: 'RISE8 Management',
    // FLAG: original design copy read "A global team of dedicated assassins." — replaced.
    desc: 'Revenue management, guest experience, housekeeping, preventive maintenance, and staffing — built and run for our own assets.',
    link: 'Capabilities →',
    href: '/management',
    external: false,
  },
  {
    num: '03',
    kicker: 'Capital',
    name: 'RISE8 Real Estate Finance',
    desc: 'Real estate finance. Debt, mezzanine, and equity investments in our primary asset class.',
    link: 'Programs →',
    href: '/real-estate-finance',
    external: false,
  },
  {
    num: '04',
    kicker: 'Construction',
    name: 'RISE8 Development',
    desc: 'In-house renovation teams. Multi-disciplinary and licensed. General contracting on our own assets, executed to the brand standard we ourselves enforce as operator.',
    link: 'Capabilities →',
    href: '/development',
    external: false,
  },
] as const

export const LETTER = [
  'RISE8 was founded on a simple premise drawn from an old Japanese proverb: no matter how many times you fall, you always get back up — one more time.',
  'Extended-stay hospitality has been underserved by owners who fragment acquisition, development, financing, management, and brand across misaligned stakeholders.',
  'We built RISE8 to change that. A single platform controlling the full value chain, aligned around one thesis: excellent operations compound.',
] as const

/**
 * Eight values. Replaces the five principles and the chronology timeline that
 * were in the older HTML export — the current design drops both.
 */
export const VALUES = [
  {
    num: 'I',
    name: 'Integrity',
    desc: 'We treat everyone with respect and keep our word. We believe in "win-win."',
  },
  {
    num: 'II',
    name: 'Accountability',
    desc: 'We take responsibility for everything we do. We do not point fingers.',
  },
  {
    num: 'III',
    name: 'Innovation',
    desc: 'We encourage new ideas and take risks to do things differently.',
  },
  {
    num: 'IV',
    name: 'Profitability',
    desc: 'We continually seek ways to increase revenue, reduce costs, and eliminate waste.',
  },
  {
    num: 'V',
    name: 'Communication',
    desc: 'Open, clear, and timely communication without fear.',
  },
  {
    num: 'VI',
    name: 'Teamwork',
    desc: 'Different strengths make us valuable as a collective unit.',
  },
  {
    num: 'VII',
    name: 'Living Fully',
    desc: 'Dedicated to our loved ones as much as our work.',
  },
  {
    num: 'VIII',
    name: 'Doing Well by Doing Good',
    desc: 'Returns to our investors, employees, and communities.',
  },
] as const

/** Property IDs match the RISE8 canonical list. `keys: null` = not yet verified. */
export const PROPERTIES = [
  {
    id: 'lakeland',
    propertyId: '4645',
    num: '01',
    name: 'Stayable Lakeland',
    address: '4645 N. Socrum Loop Road, Lakeland, FL 33809',
    region: 'Lakeland · I-4',
    tags: ['I-4 corridor', 'Tampa / Orlando'],
    keys: null,
    image: '/properties/lakeland.webp',
    booking: 'https://rentstayable.com/lakeland/',
    pin: { left: '42%', top: '52%' },
    pinLabel: '01 · Lakeland',
  },
  {
    id: 'jacksonville-north',
    propertyId: '812',
    num: '02',
    name: 'Stayable Jacksonville North',
    address: 'Jacksonville, FL · Northeast Florida / I-95 corridor',
    region: 'Jacksonville · I-95',
    tags: ['8 floors', 'Available 2026'],
    keys: '128',
    image: '/properties/jacksonville-north.webp',
    booking: 'https://rentstayable.com/jacksonville-north/',
    pin: { left: '34%', top: '16%' },
    pinLabel: '02 · Jacksonville N.',
  },
  {
    id: 'kissimmee-east',
    propertyId: '2295',
    num: '03',
    name: 'Stayable Kissimmee East',
    address: '2295 E. Irlo Bronson Mem. Hwy, Kissimmee, FL',
    region: 'Kissimmee · Central FL',
    tags: ['Largest', 'Central FL'],
    keys: '196',
    image: '/properties/kissimmee-east.webp',
    booking: 'https://rentstayable.com/kissimmee-east/',
    pin: { left: '55%', top: '60%' },
    pinLabel: '03 · Kissimmee E.',
  },
  {
    id: 'orlando',
    propertyId: '8700',
    num: '04',
    name: 'Stayable Orlando',
    address: '8700 S. Orange Blossom Trail, Orlando, FL 32809',
    region: 'Orlando · I-4',
    tags: ['Florida Mall', 'OCCC · 15 min'],
    keys: null,
    image: '/properties/orlando.webp',
    booking: 'https://rentstayable.com/orlando/',
    pin: { left: '50%', top: '55%' },
    pinLabel: '04 · Orlando',
  },
  {
    id: 'jacksonville-west',
    propertyId: '6802',
    num: '05',
    name: 'Stayable Jacksonville West',
    address: '910 Suemac Road, Jacksonville, FL 32254',
    region: 'Jacksonville · I-295',
    tags: ['Renovated 2024', 'I-295'],
    keys: '64',
    // FLAG: no Jacksonville West exterior in the design export — see REVIEW.md #6.
    image: '/properties/jacksonville-west.webp',
    booking: 'https://rentstayable.com/jacksonville-west/',
    pin: { left: '38%', top: '24%' },
    pinLabel: '05 · Jacksonville W.',
  },
  {
    id: 'kissimmee-west',
    propertyId: '5399',
    num: '06',
    name: 'Stayable Kissimmee West',
    address: '5399 W. Irlo Bronson Mem. Hwy, Kissimmee, FL',
    region: 'Kissimmee · Central FL',
    tags: ['10 mi · Disney'],
    keys: null,
    image: '/properties/kissimmee-west.webp',
    booking: 'https://rentstayable.com/kissimmee-west/',
    pin: { left: '44%', top: '62%' },
    pinLabel: '06 · Kissimmee W.',
  },
  {
    id: 'st-augustine',
    propertyId: '2535',
    num: '07',
    name: 'Stayable St. Augustine',
    address: '2535 State Road 16, St. Augustine, FL 32092',
    region: 'St. Augustine · I-95',
    tags: ['Historic district', 'I-95'],
    keys: null,
    image: '/properties/st-augustine.webp',
    booking: 'https://rentstayable.com/st-augustine/',
    pin: { left: '48%', top: '32%' },
    pinLabel: '07 · St. Augustine',
  },
  {
    id: 'davenport',
    propertyId: '44199',
    num: '08',
    name: 'Stayable Davenport',
    address: '44199 Hwy 27, Davenport, FL 33897',
    region: 'Davenport · I-4',
    tags: ['I-4', 'Orlando / Tampa'],
    keys: null,
    image: '/properties/davenport.webp',
    booking: 'https://rentstayable.com/davenport/',
    pin: { left: '40%', top: '70%' },
    pinLabel: '08 · Davenport',
  },
] as const

/**
 * Photo cards above the atlas. The design mocked three; the register carries the
 * full portfolio, so all eight are shown.
 */
export const FEATURED_PROPERTY_IDS = [
  'orlando',
  'kissimmee-east',
  'davenport',
  'lakeland',
  'jacksonville-north',
  'jacksonville-west',
  'kissimmee-west',
  'st-augustine',
] as const

/**
 * The two principals. `fullBio` feeds the biography panel below the cards — each
 * principal's bio sits in the column under their own card, so adding Crystal's is
 * just filling in her `fullBio` array. An empty array leaves that column blank.
 */
export const PRINCIPALS = [
  {
    name: 'Robert Beyer',
    role: 'Founder & Principal',
    bio: 'Founder of RISE8 Companies. Leads strategy, capital deployment, and the integrated platform thesis.',
    photo: '/leadership/robert-beyer.png',
    // Every claim here is specific and checkable, and none of it is verified.
    // See REVIEW.md §1 before this ships.
    fullBio: [
      'Robert Beyer is the founder and managing principal of RISE8 Companies, with more than 20 years of commercial real estate experience. His background spans acquisitions, dispositions, property management, debt and equity raising, joint ventures, loan restructuring, law, and financial advisory work.',
      'Before founding RISE8, Beyer was Executive Vice President and General Counsel of a real estate investment and management firm holding $750 million in apartment, commercial, and lodging properties. He previously served as a Vice President at RELATED.',
      "Beyer earned a B.B.A. in Finance from the University of Miami, a J.D., magna cum laude, from UNLV's William S. Boyd School of Law, and an LL.M. in Taxation from New York University School of Law. He is a member of the Nevada State Bar and holds a Florida real estate broker's license.",
    ],
  },
  {
    name: 'Crystal Johnson',
    role: 'Principal',
    bio: 'Operations leadership across the RISE8 portfolio. Oversees property management, staffing, and performance.',
    photo: '/leadership/crystal-johnson.png',
    // TODO: awaiting Crystal's biography. Drop the paragraphs in here and the
    // second column fills itself — no layout change needed.
    fullBio: [] as string[],
  },
]

/**
 * Hidden for now — Kyle asked that only the two principals show. Kept here rather
 * than deleted so the tier can be switched back on by flipping SHOW_DIRECTORS.
 */
export const SHOW_DIRECTORS = false

export const DIRECTORS = [
  { name: 'Shay Harper', role: 'Director', initials: 'SH' },
  { name: 'Gerardo Sandoval', role: 'Director', initials: 'GS' },
  { name: 'Shayla Shane', role: 'Director', initials: 'SS' },
] as const

export const EVERYBODYS_HOME = {
  meta: '501(c)(3) · Miami, FL',
  name: "Everybody's Home Inc.",
  lede: 'Stable housing. Practical support. New beginnings.',
  body: 'A launch-stage nonprofit building practical pathways toward housing stability for underhoused individuals and families — founded alongside Stayable to extend the reach of extended-stay infrastructure beyond the paying guest.',
  bodyMuted:
    'RISE8 supports Everybody’s Home through facility access, operational expertise, and capital, in service of a single conviction: a stable address changes what a person can build next.',
  url: 'https://everybodyshome.org',
  pillars: [
    {
      n: 'I',
      title: 'Housing stability pathways',
      desc: 'Transitional stays, case management, and referral networks for guests moving toward long-term housing.',
    },
    {
      n: 'II',
      title: 'Practical support & navigation',
      desc: 'Employment, identification, healthcare, and benefits navigation — the practical work of stabilizing a life.',
    },
    {
      n: 'III',
      title: 'Community partnerships',
      desc: 'Local nonprofits, faith communities, and public agencies — partners against a problem no single organization can solve alone.',
    },
  ],
  meta4: [
    { k: 'Office', v: '390 NE 191st St, Ste. 8139\nMiami, FL 33179' },
    { k: 'Telephone', v: '(305) 782-9225' },
    { k: 'Correspondence', v: 'eh-info@everybodyshome.org' },
    { k: 'Status', v: '501(c)(3) · launch stage' },
  ],
} as const

/* ------------------------------------------------------------------ *
 * Company pages
 * ------------------------------------------------------------------ */

export const MANAGEMENT = {
  dept: 'Management',
  eye: 'Operations',
  h1Lead: 'We run',
  h1Rest: 'the rooms.',
  lede: 'RISE8 Management is the in-house operator for every property we own. No third-party manager. No franchise operator. The owner and the operator are the same entity — and that changes everything.',
  note: `In-house since founding · ${SITE.locale} · Est. ${SITE.founded}`,
  functions: [
    { n: 'I', name: 'Revenue Management', disc: 'Pricing · Channels · Forecasting' },
    { n: 'II', name: 'Guest Experience', disc: 'Check-In · Service · Satisfaction' },
    { n: 'III', name: 'Housekeeping & EVS', disc: 'Standards · Inspection · Turnover' },
    { n: 'IV', name: 'Preventive Maintenance', disc: 'Work Orders · Vendors · Life-Cycle' },
    { n: 'V', name: 'People & Training', disc: 'Hiring · SOPs · Culture' },
    { n: 'VI', name: 'Technology', disc: 'PMS · Channels · Reporting' },
  ],
  stats: [
    { value: '1,150', label: 'Keys managed' },
    { value: '8', label: 'Properties' },
    { value: '6', label: 'Florida markets' },
    { value: '100+', label: 'Team', note: 'US + offshore' },
  ],
  capabilities: [
    {
      n: 'I',
      name: 'Revenue Management',
      desc: 'Dynamic pricing, OTA channel mix, and RevPAR optimization managed in-house. Full access to asset-level data means decisions are faster and better than any third-party firm.',
    },
    {
      n: 'II',
      name: 'Guest Experience',
      desc: 'From first confirmation to checkout, the experience is ours to own. Service protocols, satisfaction scoring, and service recovery — built for extended-stay guests.',
    },
    {
      n: 'III',
      name: 'Housekeeping & EVS',
      desc: 'Turnover speed and room quality are the core of extended-stay operations. We set the standard, run the inspection, and control the supply chain.',
    },
    {
      n: 'IV',
      name: 'Preventive Maintenance',
      desc: 'Scheduled maintenance, work orders, and vendor coordination to protect asset value and minimize guest impact. The maintenance team reports to operations.',
    },
    {
      n: 'V',
      name: 'People & Training',
      desc: 'In-house hiring, structured onboarding, and SOPs built for our environment. US-based team supported by offshore staffing for revenue and administrative functions.',
    },
    {
      n: 'VI',
      name: 'Technology',
      desc: 'PMS integration, channel management, and reporting dashboards built around ownership needs. The data belongs to the asset — we control the platform.',
    },
  ],
  quote:
    'When the operator is also the owner, there is no principal-agent problem. The incentives are identical. Operations is the competitive advantage.',
  quoteEm: 'identical.',
  footNote:
    'RISE8 Management is the in-house operating affiliate of RISE8 Companies. Answerable to ownership — never to a third party.',
} as const

export const DEVELOPMENT = {
  dept: 'Development',
  eye: 'Construction & Development',
  h1Lead: 'We build ',
  h1Em: 'what we own.',
  lede: 'RISE8 Development is vertically integrated — our construction, development, and management teams sit under one roof. When the builder is also the owner, every decision is made by someone who has to live with the result.',
  thesisKicker: 'The vertically integrated approach',
  thesisHeadLead: 'One team, ',
  thesisHeadEm: 'rowing in the same direction.',
  /** Each paragraph is [before, emphasised, after] so no HTML lives in the data. */
  thesis: [
    [
      'Most operators outsource construction to third-party contractors whose incentives end at the final invoice. We took the harder path: we built the capability in-house, because ',
      'you will do a better job innately when you care more',
      ' — and no one cares more about an asset than its owner.',
    ],
    [
      'Construction is in the room from day one. Our builders work alongside development on design intent, budgeting, and entitlement, so the numbers are real before financing is ever secured, and everyone is prepared to execute the moment ground breaks.',
      '',
      '',
    ],
    [
      'The payoff is control. Fundamentally, our business is creating value and managing risk — and the most risk lives on the construction side. Owning that function outright gives us the maximum amount of control over both.',
      '',
      '',
    ],
  ],
  footNote:
    'RISE8 Development is the construction and development affiliate of RISE8 Companies. This page is informational and does not constitute an offer or commitment.',
} as const

export const FINANCE = {
  dept: 'Real Estate Finance',
  eye: 'Commercial real estate direct lending',
  h1Lead: 'Real estate capital, ',
  h1Em: 'reliably executed.',
  lede: 'RISE8 Real Estate Finance provides bridge loans, mezzanine debt, and preferred equity for acquisitions, recapitalizations, and transitional real estate — structured by owner-operators who underwrite from experience.',
  programsKicker: 'Direct lending solutions',
  programsHeadLead: 'Three ways to ',
  programsHeadEm: 'complete the stack.',
  programsIntro:
    'Senior to subordinate, RISE8 REF lends across the capital structure — sized to your business plan and your timeline.',
  programs: [
    {
      n: '01',
      name: 'Bridge Loans',
      tier: 'Senior secured · transitional',
      desc: 'Short-term senior financing for acquisitions, recapitalizations, renovations, and lease-up — capital that moves at the speed of your transaction.',
      specs: [
        { k: 'Position', v: 'Senior secured', em: 'Senior' },
        { k: 'Term', v: '12–36 months' },
        { k: 'Use', v: 'Acquisition · reposition' },
      ],
    },
    {
      n: '02',
      name: 'Mezzanine',
      tier: 'Subordinated debt',
      desc: 'Subordinated capital that complements senior debt and extends proceeds — flexible structuring that fills the gap without diluting control.',
      specs: [
        { k: 'Position', v: 'Subordinate to senior', em: 'Subordinate' },
        { k: 'Structure', v: 'Current + accrued' },
        { k: 'Use', v: 'Proceeds · gap fill' },
      ],
    },
    {
      n: '03',
      name: 'Preferred Equity',
      tier: 'Structured equity',
      desc: 'Structured equity for recapitalizations, partner buyouts, and complex capital-stack solutions — aligned capital that shares the upside on your terms.',
      specs: [
        { k: 'Position', v: 'Preferred equity', em: 'Preferred' },
        { k: 'Return', v: 'Pref + participation' },
        { k: 'Use', v: 'Recap · buyout' },
      ],
    },
  ],
  sectorsKicker: 'Asset classes',
  sectorsHeadLead: 'Lending across the ',
  sectorsHeadEm: 'property types we know.',
  sectorsIntro:
    "Structured for speed and execution — grounded in real operating experience across Florida's high-growth markets.",
  sectors: [
    { n: '01', name: 'Extended-Stay', desc: 'Our home category — hotels and furnished-suite assets.' },
    { n: '02', name: 'Multifamily', desc: 'Value-add and stabilized rental communities.' },
    { n: '03', name: 'Hospitality', desc: 'Select-service and limited-service hotels.' },
    { n: '04', name: 'Retail', desc: 'Neighborhood and net-lease retail assets.' },
  ],
  whyKicker: 'Why borrowers choose RISE8 REF',
  whyHeadLead: 'Execution-focused capital, backed by ',
  whyHeadEm: 'operating expertise.',
  why: [
    {
      n: 'I',
      name: 'Speed & certainty of execution',
      desc: "We lend from our own balance sheet with in-house underwriting and decision-making authority — no committees you'll never meet, no last-minute re-trades.",
    },
    {
      n: 'II',
      name: 'Flexible capital solutions',
      desc: 'Bridge, mezzanine, or preferred equity — structured around your business plan and capitalization strategy rather than a rigid box.',
    },
    {
      n: 'III',
      name: 'Deep operating expertise',
      // FLAG: design said "1,300+ units"; the main site says 1,150 keys. See REVIEW.md #3.
      desc: 'We own and operate our own portfolio. We underwrite your deal the way we underwrite our own — because we have been the borrower.',
    },
  ],
  ctaKicker: "Let's structure your next transaction",
  ctaHeadLead: 'Have a deal that needs ',
  ctaHeadEm: 'the right capital?',
  ctaBody:
    'Connect with the RISE8 Real Estate Finance team to discuss bridge, mezzanine, and preferred equity solutions for your next transaction.',
  ctaContact: [
    { k: 'Email', v: SITE.email.finance },
    { k: 'Headquarters', v: 'Boca Raton, Florida' },
    { k: 'Markets', v: 'Central & North Florida' },
  ],
  footNote:
    'RISE8 Real Estate Finance is a lending affiliate of RISE8 Companies. This page is informational and does not constitute a commitment to lend or an offer of financing.',
} as const

export const FOOTER_COLUMNS = [
  {
    title: 'Platform',
    links: [
      { label: 'Stayable Extended Stay Suites', href: SITE.stayable },
      { label: 'RISE8 Management', href: '/management' },
      { label: 'RISE8 Real Estate Finance', href: '/real-estate-finance' },
      { label: 'RISE8 Development', href: '/development' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About us', href: '/#about' },
      { label: 'Leadership', href: '/#leadership' },
      { label: 'Portfolio', href: '/#portfolio' },
      { label: "Everybody's Home Inc.", href: EVERYBODYS_HOME.url },
    ],
  },
  {
    title: 'Investors',
    links: [
      { label: 'Thesis', href: '/#invest' },
      { label: 'Investor portal', href: SITE.investorPortal },
      { label: 'Request access', href: `mailto:${SITE.email.investors}` },
    ],
  },
  {
    title: 'Contact',
    links: [
      { label: SITE.email.investors, href: `mailto:${SITE.email.investors}` },
      { label: SITE.email.press, href: `mailto:${SITE.email.press}` },
      { label: SITE.email.careers, href: `mailto:${SITE.email.careers}` },
    ],
  },
] as const
