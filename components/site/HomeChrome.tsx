'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { NAV, TOC, SITE } from '@/content/site'

/**
 * Sticky nav + right-rail table of contents for the single-page home route.
 * One scroll listener drives the active state for both.
 *
 * Below 1100px the inline nav links do not fit, so they move into a panel behind
 * a MENU button. Text rather than a hamburger icon — the brand is near-iconless.
 */
export default function HomeChrome() {
  const [active, setActive] = useState<string>('top')
  const [menuOpen, setMenuOpen] = useState(false)

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

  // Escape closes the panel; widening past the breakpoint makes it irrelevant.
  useEffect(() => {
    if (!menuOpen) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false)
    }
    const mq = window.matchMedia('(min-width: 1101px)')
    const onWide = () => mq.matches && setMenuOpen(false)
    document.addEventListener('keydown', onKey)
    mq.addEventListener('change', onWide)
    return () => {
      document.removeEventListener('keydown', onKey)
      mq.removeEventListener('change', onWide)
    }
  }, [menuOpen])

  return (
    <>
      <nav className="nav" aria-label="Primary">
        <div className="nav-inner">
          <Link href="/#top" className="logo" aria-label={`${SITE.name} — home`}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/assets/logos/rise8-logo-light.png" alt={SITE.name} />
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

          <button
            type="button"
            className="nav-toggle"
            aria-expanded={menuOpen}
            aria-controls="nav-panel"
            onClick={() => setMenuOpen((v) => !v)}
          >
            {menuOpen ? 'Close' : 'Menu'}
          </button>
        </div>

        <div className="nav-panel" id="nav-panel" hidden={!menuOpen}>
          {NAV.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              className={active === item.id ? 'active' : undefined}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <a
            href={SITE.investorPortal}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
          >
            Investor Login →
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
