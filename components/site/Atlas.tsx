'use client'

import { useState } from 'react'
import { PROPERTIES } from '@/content/site'

/** The Florida map + property register. Hovering either side highlights the other. */
export default function Atlas() {
  const [active, setActive] = useState<string | null>(null)

  return (
    <div className="atlas">
      <div className="atlas-map">
        <div className="compass" aria-hidden="true" />
        <div className="fl" aria-hidden="true">
          <div className="fl-label">Florida</div>
        </div>

        {PROPERTIES.map((p) => (
          <button
            key={p.id}
            type="button"
            className={`pin${active === p.id ? ' active' : ''}`}
            style={{ left: p.pin.left, top: p.pin.top }}
            onMouseEnter={() => setActive(p.id)}
            onMouseLeave={() => setActive(null)}
            onFocus={() => setActive(p.id)}
            onBlur={() => setActive(null)}
            aria-label={p.name}
          />
        ))}
        {PROPERTIES.map((p) => (
          <span
            key={`${p.id}-label`}
            className="pin-label"
            style={{ left: p.pin.left, top: p.pin.top }}
            aria-hidden="true"
          >
            {p.pinLabel}
          </span>
        ))}

        <div className="legend">
          <b>Legend</b>
          Eight pins · six markets · I-4, I-95, I-295 corridors.
        </div>
      </div>

      <div className="atlas-list">
        <div className="atlas-list-head">
          <div className="k">The register</div>
          <h3>Eight Florida properties.</h3>
        </div>

        {PROPERTIES.map((p) => (
          <a
            key={p.id}
            href={p.booking}
            target="_blank"
            rel="noopener noreferrer"
            className={`prop${active === p.id ? ' active' : ''}`}
            onMouseEnter={() => setActive(p.id)}
            onMouseLeave={() => setActive(null)}
          >
            <div className="prop-num">{p.num}</div>
            <div>
              <h4 className="prop-name">{p.name}</h4>
              <p className="prop-addr">{p.address}</p>
              <div className="prop-tags">
                {p.tags.map((t) => (
                  <span key={t} className="prop-tag">
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <div className="prop-keys">
                {p.keys ?? '—'}
                <sub>keys</sub>
              </div>
              <span className="prop-link">Book →</span>
            </div>
          </a>
        ))}
      </div>
    </div>
  )
}
