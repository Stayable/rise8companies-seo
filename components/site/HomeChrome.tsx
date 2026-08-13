'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { NAV, TOC, SITE } from '@/content/site'

/**
 * Sticky nav + right-rail table of contents for the single-page home route.
 * One scroll listener drives the active state for both.
 */
export default function HomeChrome() {
  const [active, setActive] = useState<string>('top')

  useEffect(() => {
    const ids = TOC.map((t) => t.id)
    const onScroll = () => {
      const y = window.scrollY + window.innerHeight * 0.35
      let cur = 'top'
      for (const id of ids) {
        const el = document.getElementById(id)
        if (el && el.offsetTop <= y) cur = id
      }
      setActive(cur)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <nav className="nav" aria-label="Primary">
        <div className="nav-inner">
          <Link href="/#top" className="logo" aria-label={`${SITE.name} — home`}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/logos/rise8-logo-light.png"
              alt={SITE.name}
              style={{ height: 64, width: 'auto', display: 'block' }}
            />
          </Link>
          <div className="nav-links">
            {NAV.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                className={active === item.id ? 'active' : undefined}
              >
                {item.label}
              </Link>
            ))}
          </div>
          <a
            href={SITE.investorPortal}
            target="_blank"
            rel="noopener noreferrer"
            className="login"
          >
            Investor Login
          </a>
        </div>
      </nav>

      <nav className="toc" aria-label="Section index">
        {TOC.map((t) => (
          <Link key={t.id} href={`/#${t.id}`} className={active === t.id ? 'active' : undefined}>
            <span className="d" aria-hidden="true" />
            <span className="lbl">{t.label}</span>
          </Link>
        ))}
      </nav>
    </>
  )
}
