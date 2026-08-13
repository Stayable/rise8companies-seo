'use client'

import { useState } from 'react'
import { PROPERTIES } from '@/content/site'

type Property = (typeof PROPERTIES)[number]

/**
 * Full-width Florida map. Hovering, focusing, or tapping a pin opens a card with
 * the property's photo, description, and booking links.
 *
 * Each pin and its card share a wrapper so the pointer can travel from one to the
 * other without the card closing — otherwise the buttons would be unclickable.
 */
export default function Atlas() {
  const [active, setActive] = useState<string | null>(null)

  return (
    <div className="atlas">
      <div className="atlas-map">
        <div className="compass" aria-hidden="true" />
        <div className="fl" aria-hidden="true">
          <div className="fl-label">Florida</div>
        </div>

        {PROPERTIES.map((p) => {
          const left = parseFloat(p.pin.left)
          const top = parseFloat(p.pin.top)
          // Open away from whichever edge the pin sits nearest.
          const side = left > 52 ? 'left' : 'right'
          const vert = top > 55 ? 'up' : 'down'
          const isOpen = active === p.id

          return (
            <div
              key={p.id}
              className="pin-anchor"
              style={{ left: p.pin.left, top: p.pin.top }}
              onMouseEnter={() => setActive(p.id)}
              onMouseLeave={() => setActive(null)}
            >
              <button
                type="button"
                className={`pin${isOpen ? ' active' : ''}`}
                aria-expanded={isOpen}
                aria-label={p.name}
                onFocus={() => setActive(p.id)}
                onClick={() => setActive(isOpen ? null : p.id)}
              />
              <span className={`pin-label${isOpen ? ' dim' : ''}`} aria-hidden="true">
                {p.pinLabel}
              </span>

              {isOpen ? <PinCard p={p} side={side} vert={vert} /> : null}
            </div>
          )
        })}

        <div className="legend">
          <b>Legend</b>
          Eight pins · six markets · I-4, I-95, I-295 corridors.
        </div>
      </div>
    </div>
  )
}

function PinCard({
  p,
  side,
  vert,
}: {
  p: Property
  side: 'left' | 'right'
  vert: 'up' | 'down'
}) {
  return (
    <div className={`pin-card ${side} ${vert}`}>
      {p.image ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={p.image} alt={p.name} loading="lazy" />
      ) : null}
      <div className="pin-card-body">
        <div className="region">{p.region}</div>
        <h4>{p.name}</h4>
        <p className="addr">{p.address}</p>
        <p className="desc">{p.desc}</p>

        <div className="pin-card-meta">
          {p.tags.map((t) => (
            <span className="prop-tag" key={t}>
              {t}
            </span>
          ))}
          {p.keys ? (
            <span className="keys">
              {p.keys}
              <sub>keys</sub>
            </span>
          ) : null}
        </div>

        <div className="pin-card-cta">
          <a href={p.booking} target="_blank" rel="noopener noreferrer" className="btn-primary btn-ink">
            Book now →
          </a>
          <a href={p.booking} target="_blank" rel="noopener noreferrer" className="pin-card-lease">
            Start a lease →
          </a>
        </div>
      </div>
    </div>
  )
}
