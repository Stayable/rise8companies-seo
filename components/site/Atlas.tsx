import { PROPERTIES } from '@/content/site'

/**
 * Full-width Florida map with a pin and label per property, as in the design.
 *
 * No JavaScript: the pins' hover state is CSS, so this stays a server component.
 * Property navigation lives in the photo cards above the map.
 */
export default function Atlas() {
  return (
    <div className="atlas">
      <div className="atlas-map">
        <div className="compass" aria-hidden="true" />
        <div className="fl" aria-hidden="true">
          <div className="fl-label">Florida</div>
        </div>

        {PROPERTIES.map((p) => (
          <div
            key={p.id}
            className="pin-anchor"
            style={{ left: p.pin.left, top: p.pin.top }}
          >
            <span className="pin" aria-hidden="true" />
            <span className="pin-label">{p.pinLabel}</span>
          </div>
        ))}

        <div className="legend">
          <b>Legend</b>
          Eight pins · six markets · I-4, I-95, I-295 corridors.
        </div>
      </div>
    </div>
  )
}
