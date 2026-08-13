import Link from 'next/link'
import { FOOTER_COLUMNS, SITE } from '@/content/site'

const isExternal = (href: string) => /^(https?:|mailto:)/.test(href)

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="foot-inner">
        <div className="brand-col">
          <div className="logo">
            <div className="mark">R8</div>
            <div className="name" style={{ color: 'var(--paper)' }}>
              RISE8 COMPANIES
            </div>
          </div>
          <p>
            A vertically integrated extended-stay hospitality company. {SITE.locale}. Est.{' '}
            {SITE.founded}.
          </p>
        </div>

        {FOOTER_COLUMNS.map((col) => (
          <div key={col.title}>
            <h4>{col.title}</h4>
            <ul>
              {col.links.map((l) => (
                <li key={l.label}>
                  {isExternal(l.href) ? (
                    <a
                      href={l.href}
                      {...(l.href.startsWith('http')
                        ? { target: '_blank', rel: 'noopener noreferrer' }
                        : {})}
                    >
                      {l.label}
                    </a>
                  ) : (
                    <Link href={l.href}>{l.label}</Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="foot-bottom">
        <div>
          © {new Date().getFullYear()} {SITE.name} · {SITE.locale}
        </div>
        <div className="legal">
          <Link href="/privacy-policy">Privacy</Link>
          <Link href="/terms-of-use">Terms</Link>
        </div>
        <div className="proverb">
          {SITE.proverb.kanji} — nana korobi yaoki.
        </div>
      </div>
    </footer>
  )
}
