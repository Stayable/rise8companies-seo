import Link from 'next/link'

type NavLink = { href: string; label: string }

/** Sticky nav used on the three company pages. */
export function SubNav({ dept, links = [] }: { dept: string; links?: NavLink[] }) {
  return (
    <nav className="sub-nav" aria-label="Primary">
      <div className="sub-nav-in">
        <Link href="/" className="sub-nav-logo" aria-label="RISE8 Companies — home">
          <div className="mark" style={{ width: 40, height: 40 }}>
            R8
          </div>
          <span className="name">RISE8</span>
          <span className="sub-nav-dept">{dept}</span>
        </Link>
        <div className="sub-nav-links">
          <Link href="/" className="sub-nav-back">
            ← RISE8.com
          </Link>
          {links.map((l) => (
            <a key={l.href} href={l.href}>
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}

export function SubFooter({ dept, note }: { dept: string; note: string }) {
  return (
    <footer className="sub-foot">
      <div className="inner">
        <Link href="/" className="brand">
          <div className="mark" style={{ width: 36, height: 36 }}>
            R8
          </div>
          RISE8 Companies · {dept}
        </Link>
        <p className="note">{note}</p>
      </div>
    </footer>
  )
}
