// Scenes for the Stayable Jax North leasing video.
// Each scene component is wrapped by a <Sprite> in jax-north-app.jsx, so
// useSprite() inside gives a localTime starting at 0 when that scene begins.

// ─── Palette (matches the RISE8 website) ─────────────────────────────────
const palette = {
  navy: '#14181F',
  navy2: '#1A2438',
  paper: '#F5F1E8',
  paperDim: 'rgba(245,241,232,0.72)',
  paperFaint: 'rgba(245,241,232,0.42)',
  paperRule: 'rgba(245,241,232,0.18)',
  teal: '#00A8B5',
  tealDim: 'rgba(0,168,181,0.55)',
  rule: 'rgba(245,241,232,0.20)',
  serif: "'EB Garamond', Georgia, serif",
  sans: "'Inter', system-ui, sans-serif",
  mono: "'JetBrains Mono', ui-monospace, monospace",
};

// ─── Shared helpers ───────────────────────────────────────────────────────

// Fade + lift entry/exit envelope, returns { opacity, ty }
function envelope(localTime, duration, entryDur = 0.6, exitDur = 0.5, lift = 18) {
  const exitStart = Math.max(0, duration - exitDur);
  let opacity = 1, ty = 0;
  if (localTime < entryDur) {
    const tt = Easing.easeOutCubic(clamp(localTime / entryDur, 0, 1));
    opacity = tt;
    ty = (1 - tt) * lift;
  } else if (localTime > exitStart) {
    const tt = Easing.easeInCubic(clamp((localTime - exitStart) / exitDur, 0, 1));
    opacity = 1 - tt;
    ty = -tt * (lift / 2);
  }
  return { opacity, ty };
}

// A horizontal hairline that draws left→right, then optionally retracts.
function Hairline({ x, y, width = 600, color = palette.teal, thickness = 1, start = 0, drawDur = 0.9, holdEnd = Infinity, retract = false, retractDur = 0.6 }) {
  const t = useSprite().localTime;
  let pct = 0;
  if (t >= start) {
    pct = clamp((t - start) / drawDur, 0, 1);
    pct = Easing.easeInOutQuart(pct);
  }
  if (retract && t > holdEnd) {
    const r = clamp((t - holdEnd) / retractDur, 0, 1);
    pct = 1 - Easing.easeInOutCubic(r);
  }
  return (
    <div style={{
      position: 'absolute', left: x, top: y,
      width, height: thickness, transformOrigin: 'left center',
      transform: `scaleX(${pct})`,
      background: color,
      willChange: 'transform',
    }}/>
  );
}

// Static architectural silhouette — variable-width buildings, like the hero
function ArchSilhouette({ y, height = 220, opacity = 1, palette: pal = ['#0e1320', '#1a2030', '#0e1320'] }) {
  const stripes = [
    { w: 6, h: 0.45 }, { w: 4, h: 0.6 }, { w: 8, h: 0.55 },
    { w: 14, h: 0.85 }, { w: 6, h: 0.7 }, { w: 4, h: 0.55 },
    { w: 10, h: 0.75 }, { w: 18, h: 1.0 }, { w: 8, h: 0.8 },
    { w: 5, h: 0.6 }, { w: 12, h: 0.7 }, { w: 6, h: 0.5 },
    { w: 16, h: 0.92 }, { w: 8, h: 0.7 }, { w: 5, h: 0.55 },
    { w: 9, h: 0.65 }, { w: 6, h: 0.45 }, { w: 11, h: 0.78 },
    { w: 7, h: 0.6 }, { w: 4, h: 0.4 },
  ];
  const totalW = stripes.reduce((a, b) => a + b.w, 0);
  return (
    <div style={{
      position: 'absolute', left: 0, right: 0, bottom: 1080 - y - height,
      height, opacity,
      display: 'flex', alignItems: 'flex-end',
      pointerEvents: 'none',
    }}>
      {stripes.map((s, i) => (
        <div key={i} style={{
          flex: s.w,
          height: `${s.h * 100}%`,
          background: pal[i % pal.length],
          borderRight: '0.5px solid rgba(0,0,0,0.4)',
        }}/>
      ))}
    </div>
  );
}

// ════════════════════════════════════════════════════════════════════════
// SCENE 1 — Opening (0s → 7.5s)
// "STAYABLE JAX NORTH · LEASING OPPORTUNITY"
// ════════════════════════════════════════════════════════════════════════
function SceneOpening() {
  const { localTime, duration } = useSprite();

  // Architectural silhouette fades in slowly, then dims
  const archOp = interpolate(
    [0, 1.5, 5.5, 7.5],
    [0, 0.55, 0.45, 0.0],
    Easing.easeInOutCubic
  )(localTime);

  // Big silent serif "—" mark at top center drawing in
  const dashEnv = envelope(localTime, duration, 1.0, 0.6, 0);

  // Eyebrow timing
  const eyeEnv = envelope(Math.max(0, localTime - 1.6), duration - 1.6, 0.7, 0.5, 12);

  // Sub-line
  const subEnv = envelope(Math.max(0, localTime - 2.6), duration - 2.6, 0.7, 0.5, 10);

  // Bottom date label
  const dateEnv = envelope(Math.max(0, localTime - 3.4), duration - 3.4, 0.7, 0.5, 8);

  return (
    <>
      <ArchSilhouette y={1080} height={300} opacity={archOp} />

      {/* Center hairline drawing */}
      <div style={{
        position: 'absolute', left: '50%', top: 440,
        transform: 'translateX(-50%)',
        opacity: dashEnv.opacity,
        width: 120, display: 'flex', justifyContent: 'center',
      }}>
        <Hairline x={0} y={0} width={120} color={palette.teal} thickness={1} start={0} drawDur={1.0} />
      </div>

      {/* Eyebrow */}
      <div style={{
        position: 'absolute', left: '50%', top: 470,
        transform: `translate(-50%, ${eyeEnv.ty}px)`,
        opacity: eyeEnv.opacity,
        fontFamily: palette.sans,
        fontSize: 13,
        letterSpacing: '0.42em',
        textTransform: 'uppercase',
        color: palette.paper,
        fontWeight: 500,
        whiteSpace: 'nowrap',
      }}>
        Stayable Jax North
        <span style={{ color: palette.teal, margin: '0 14px' }}>·</span>
        Leasing Opportunity
      </div>

      {/* Italic serif sub */}
      <div style={{
        position: 'absolute', left: '50%', top: 530,
        transform: `translate(-50%, ${subEnv.ty}px)`,
        opacity: subEnv.opacity,
        fontFamily: palette.serif,
        fontStyle: 'italic',
        fontSize: 24,
        color: palette.paperDim,
        whiteSpace: 'nowrap',
        letterSpacing: '0.005em',
      }}>
        A short note from RISE8 Companies &nbsp;·&nbsp; in conjunction with Everybody's Home
      </div>

      {/* Bottom date / locator */}
      <div style={{
        position: 'absolute', left: '50%', top: 600,
        transform: `translate(-50%, ${dateEnv.ty}px)`,
        opacity: dateEnv.opacity * 0.7,
        fontFamily: palette.mono,
        fontSize: 11,
        letterSpacing: '0.22em',
        color: palette.paperFaint,
        textTransform: 'uppercase',
        whiteSpace: 'nowrap',
      }}>
        Jacksonville, Florida &nbsp; / &nbsp; 128 keys &nbsp; / &nbsp; available 2026
      </div>
    </>
  );
}

// ════════════════════════════════════════════════════════════════════════
// SCENE 2 — Invitation (6.5s → 16.5s)
// "We're looking for a non-profit partner."
// ════════════════════════════════════════════════════════════════════════
function SceneInvitation() {
  const { localTime, duration } = useSprite();

  // Eyebrow
  const eyeEnv = envelope(localTime, duration, 0.7, 0.6, 8);

  // First line "We're looking for a"
  const line1Env = envelope(Math.max(0, localTime - 0.8), duration - 0.8, 0.8, 0.6, 20);

  // Second line "non-profit partner."
  const line2Env = envelope(Math.max(0, localTime - 1.8), duration - 1.8, 0.9, 0.6, 24);

  // Subline
  const subEnv = envelope(Math.max(0, localTime - 3.2), duration - 3.2, 0.7, 0.6, 10);

  // Slow ken-burns zoom on the whole composition
  const camScale = interpolate([0, duration], [1.0, 1.04], Easing.linear)(localTime);

  return (
    <div style={{
      position: 'absolute', inset: 0,
      transform: `scale(${camScale})`,
      transformOrigin: 'center 55%',
    }}>
      {/* Eyebrow */}
      <div style={{
        position: 'absolute', left: 200, top: 340,
        transform: `translateY(${eyeEnv.ty}px)`,
        opacity: eyeEnv.opacity,
        display: 'flex', alignItems: 'center', gap: 18,
        fontFamily: palette.sans,
        fontSize: 12,
        letterSpacing: '0.32em',
        textTransform: 'uppercase',
        color: palette.paperDim,
        fontWeight: 500,
      }}>
        <span style={{ width: 56, height: 1, background: palette.teal }}></span>
        <span>II &nbsp;·&nbsp; The Invitation</span>
      </div>

      {/* Headline */}
      <div style={{
        position: 'absolute', left: 200, top: 400,
        fontFamily: palette.serif,
        fontWeight: 500,
        fontSize: 108,
        lineHeight: 1.02,
        letterSpacing: '-0.014em',
        color: palette.paper,
        maxWidth: 1700,
      }}>
        <div style={{
          transform: `translateY(${line1Env.ty}px)`,
          opacity: line1Env.opacity,
          whiteSpace: 'nowrap',
        }}>
          We're looking for a
        </div>
        <div style={{
          transform: `translateY(${line2Env.ty}px)`,
          opacity: line2Env.opacity,
          fontStyle: 'italic',
          color: palette.teal,
          whiteSpace: 'nowrap',
        }}>
          non-profit partner.
        </div>
      </div>

      {/* Subline */}
      <div style={{
        position: 'absolute', left: 200, top: 660,
        transform: `translateY(${subEnv.ty}px)`,
        opacity: subEnv.opacity,
        fontFamily: palette.serif,
        fontStyle: 'italic',
        fontSize: 28,
        color: palette.paperDim,
        maxWidth: 1200,
        lineHeight: 1.45,
      }}>
        To lease 128 rooms — in whole, or in part — at Stayable Jacksonville North.
      </div>
    </div>
  );
}

// ════════════════════════════════════════════════════════════════════════
// SCENE 3 — Property (15.5s → 26.5s)
// "128 rooms in Jacksonville." with counter
// ════════════════════════════════════════════════════════════════════════
function SceneProperty() {
  const { localTime, duration } = useSprite();

  const eyeEnv = envelope(localTime, duration, 0.7, 0.5, 8);
  const numEnv = envelope(Math.max(0, localTime - 0.8), duration - 0.8, 1.0, 0.5, 30);
  const labelEnv = envelope(Math.max(0, localTime - 1.6), duration - 1.6, 0.7, 0.5, 12);
  const statsEnv = envelope(Math.max(0, localTime - 2.4), duration - 2.4, 0.9, 0.5, 16);

  // Counter: 0 → 128 over 2.5s starting at localTime 1.0
  const counterStart = 1.0;
  const counterDur = 2.0;
  const counterT = clamp((localTime - counterStart) / counterDur, 0, 1);
  const counterEased = Easing.easeOutCubic(counterT);
  const counterVal = Math.floor(counterEased * 128);

  // Architectural silhouette appears at bottom, with one section highlighted
  const archOp = interpolate(
    [0, 2.5, 9, 11],
    [0, 0.55, 0.55, 0.0],
    Easing.easeInOutCubic
  )(localTime);

  return (
    <>
      {/* Eyebrow */}
      <div style={{
        position: 'absolute', left: 200, top: 240,
        transform: `translateY(${eyeEnv.ty}px)`,
        opacity: eyeEnv.opacity,
        display: 'flex', alignItems: 'center', gap: 18,
        fontFamily: palette.sans,
        fontSize: 12,
        letterSpacing: '0.32em',
        textTransform: 'uppercase',
        color: palette.paperDim,
        fontWeight: 500,
      }}>
        <span style={{ width: 56, height: 1, background: palette.teal }}></span>
        <span>III &nbsp;·&nbsp; The Property</span>
      </div>

      {/* Big counter */}
      <div style={{
        position: 'absolute', left: 200, top: 290,
        transform: `translateY(${numEnv.ty}px)`,
        opacity: numEnv.opacity,
        fontFamily: palette.serif,
        fontWeight: 500,
        fontSize: 380,
        lineHeight: 0.92,
        letterSpacing: '-0.04em',
        color: palette.paper,
        fontVariantNumeric: 'tabular-nums',
      }}>
        {counterVal}
      </div>

      {/* "ROOMS" label, lined */}
      <div style={{
        position: 'absolute', left: 210, top: 660,
        transform: `translateY(${labelEnv.ty}px)`,
        opacity: labelEnv.opacity,
        fontFamily: palette.sans,
        fontSize: 14,
        letterSpacing: '0.42em',
        textTransform: 'uppercase',
        color: palette.paperDim,
        display: 'flex', alignItems: 'center', gap: 16,
        fontWeight: 500,
      }}>
        Rooms
        <span style={{ width: 220, height: 1, background: palette.paperRule }}></span>
        <span style={{ color: palette.teal }}>extended-stay keys</span>
      </div>

      {/* Right side property facts */}
      <div style={{
        position: 'absolute', right: 200, top: 290,
        opacity: statsEnv.opacity,
        transform: `translateY(${statsEnv.ty}px)`,
        width: 560,
        fontFamily: palette.serif,
        color: palette.paper,
      }}>
        <div style={{
          fontFamily: palette.sans,
          fontSize: 11,
          letterSpacing: '0.28em',
          textTransform: 'uppercase',
          color: palette.paperFaint,
          fontWeight: 500,
          marginBottom: 18,
        }}>Index of Facts</div>

        {[
          ['Property', 'Stayable Jacksonville North'],
          ['Class', 'Extended-stay hotel'],
          ['Keys', '128 rooms · across 8 floors'],
          ['Market', 'Northeast Florida · I-95 corridor'],
          ['Availability', 'Whole property or partial floors'],
          ['Operator', 'Owned by RISE8 Companies'],
        ].map(([k, v], i) => (
          <div key={i} style={{
            display: 'grid',
            gridTemplateColumns: '140px 1fr',
            gap: 20,
            padding: '14px 0',
            borderBottom: `0.5px solid ${palette.paperRule}`,
            alignItems: 'baseline',
            opacity: clamp((localTime - 2.4 - i * 0.18) / 0.5, 0, 1),
            transform: `translateY(${(1 - clamp((localTime - 2.4 - i * 0.18) / 0.5, 0, 1)) * 8}px)`,
          }}>
            <div style={{
              fontFamily: palette.sans,
              fontSize: 10,
              letterSpacing: '0.26em',
              textTransform: 'uppercase',
              color: palette.paperFaint,
              fontWeight: 500,
            }}>{k}</div>
            <div style={{
              fontFamily: palette.serif,
              fontSize: 22,
              fontStyle: i === 4 ? 'italic' : 'normal',
              color: i === 4 ? palette.teal : palette.paper,
              lineHeight: 1.35,
            }}>{v}</div>
          </div>
        ))}
      </div>

      {/* Bottom silhouette */}
      <ArchSilhouette y={920} height={160} opacity={archOp} palette={['#0a0e18', '#10162a', '#0a0e18']} />
    </>
  );
}

// ════════════════════════════════════════════════════════════════════════
// SCENE 4 — Floors / partial-lease grid (25.5s → 38.5s)
// 8 floors × 16 rooms grid; sequential fill, then highlight floors
// ════════════════════════════════════════════════════════════════════════
function SceneFloors() {
  const { localTime, duration } = useSprite();

  const eyeEnv = envelope(localTime, duration, 0.7, 0.5, 8);
  const titleEnv = envelope(Math.max(0, localTime - 0.6), duration - 0.6, 0.8, 0.5, 16);
  const gridEnv = envelope(Math.max(0, localTime - 1.4), duration - 1.4, 0.6, 0.5, 0);

  const ROWS = 8;
  const COLS = 16;
  const CELL = 56;
  const GAP = 8;
  const gridW = COLS * CELL + (COLS - 1) * GAP;
  const gridH = ROWS * CELL + (ROWS - 1) * GAP;
  const originX = (1920 - gridW) / 2;
  const originY = 340;

  // Fill cells sequentially: 0 → all over 1.8s, starting at localTime 2.0
  const fillStart = 2.0;
  const fillDur = 1.8;

  // Highlight phases.
  //  Returns { lit: bool, op: number } — `lit` paints the cell teal, `op` sets opacity.
  //  Default (pre-phase or after fill complete with no phase active): all paper-rule cells, full opacity.
  function highlightForRow(rowIdx) {
    const floorNum = ROWS - rowIdx; // 1..8 (top floor = 8 visually? actually rowIdx 0 = top)
    // Pre-phase: just show the filled neutral grid
    if (localTime < 4.5) return { lit: false, op: 1.0 };
    if (localTime >= 4.5 && localTime < 6.5) return { lit: floorNum === 5, op: floorNum === 5 ? 1.0 : 0.22 };
    if (localTime >= 6.5 && localTime < 8.5) return { lit: (floorNum === 5 || floorNum === 4), op: (floorNum === 5 || floorNum === 4) ? 1.0 : 0.22 };
    if (localTime >= 8.5 && localTime < 10.5) return { lit: (floorNum >= 4 && floorNum <= 6), op: (floorNum >= 4 && floorNum <= 6) ? 1.0 : 0.22 };
    if (localTime >= 10.5) return { lit: true, op: 1.0 };
    return { lit: false, op: 1.0 };
  }

  // Label at the right that updates with highlight phase
  let phaseLabel = '128 rooms · 8 floors';
  let phaseSub = 'Every cell is a key.';
  if (localTime >= 4.5 && localTime < 6.5) { phaseLabel = 'One floor'; phaseSub = '16 keys — a small pilot.'; }
  else if (localTime >= 6.5 && localTime < 8.5) { phaseLabel = 'Two floors'; phaseSub = '32 keys — room to grow.'; }
  else if (localTime >= 8.5 && localTime < 10.5) { phaseLabel = 'Three floors'; phaseSub = '48 keys — a serving program.'; }
  else if (localTime >= 10.5) { phaseLabel = 'The whole property'; phaseSub = '128 keys — fully dedicated.'; }

  const labelKey = phaseLabel; // used to force re-mount fade

  return (
    <>
      {/* Eyebrow */}
      <div style={{
        position: 'absolute', left: 200, top: 200,
        transform: `translateY(${eyeEnv.ty}px)`,
        opacity: eyeEnv.opacity,
        display: 'flex', alignItems: 'center', gap: 18,
        fontFamily: palette.sans, fontSize: 12,
        letterSpacing: '0.32em', textTransform: 'uppercase',
        color: palette.paperDim, fontWeight: 500,
      }}>
        <span style={{ width: 56, height: 1, background: palette.teal }}></span>
        <span>IV &nbsp;·&nbsp; Whole — or in part</span>
      </div>

      {/* Title */}
      <div style={{
        position: 'absolute', left: 200, top: 245,
        transform: `translateY(${titleEnv.ty}px)`,
        opacity: titleEnv.opacity,
        fontFamily: palette.serif,
        fontWeight: 500,
        fontSize: 56,
        lineHeight: 1.05,
        letterSpacing: '-0.012em',
        color: palette.paper,
        whiteSpace: 'nowrap',
      }}>
        Lease the whole property —
        <span style={{ fontStyle: 'italic', color: palette.teal }}> or a floor at a time.</span>
      </div>

      {/* Grid */}
      <div style={{
        position: 'absolute',
        left: originX, top: originY,
        width: gridW, height: gridH,
        opacity: gridEnv.opacity,
      }}>
        {/* Floor labels on the left */}
        {Array.from({ length: ROWS }).map((_, r) => {
          const y = r * (CELL + GAP);
          const floorNum = ROWS - r;
          const { lit } = highlightForRow(r);
          return (
            <div key={'lbl-' + r} style={{
              position: 'absolute', left: -78, top: y,
              width: 64, height: CELL,
              display: 'flex', alignItems: 'center', justifyContent: 'flex-end',
              fontFamily: palette.mono,
              fontSize: 11,
              letterSpacing: '0.16em',
              color: lit ? palette.teal : palette.paperFaint,
              transition: 'color 0.4s',
            }}>
              FL · {String(floorNum).padStart(2, '0')}
            </div>
          );
        })}

        {/* Cells */}
        {Array.from({ length: ROWS * COLS }).map((_, i) => {
          const r = Math.floor(i / COLS);
          const c = i % COLS;
          // Fill order: snake left-to-right per row, top-to-bottom
          const fillProgress = clamp((localTime - fillStart) / fillDur, 0, 1);
          const cellsToFill = Math.floor(fillProgress * ROWS * COLS);
          const cellOrder = r * COLS + c;
          const filled = cellOrder < cellsToFill;
          const { lit, op } = highlightForRow(r);

          return (
            <div key={i} style={{
              position: 'absolute',
              left: c * (CELL + GAP),
              top: r * (CELL + GAP),
              width: CELL, height: CELL,
              background: !filled
                ? 'transparent'
                : (lit ? palette.teal : 'rgba(245,241,232,0.06)'),
              border: `0.5px solid ${
                !filled
                  ? palette.paperRule
                  : (lit ? palette.teal : 'rgba(245,241,232,0.28)')
              }`,
              opacity: !filled ? 0.35 : op,
              transition: 'background 0.5s, border-color 0.5s, opacity 0.5s',
            }}/>
          );
        })}
      </div>

      {/* Phase callout below grid */}
      <div key={labelKey} style={{
        position: 'absolute',
        left: '50%', top: originY + gridH + 56,
        transform: 'translateX(-50%)',
        textAlign: 'center',
        width: 900,
        animation: 'jaxFadeIn 0.5s ease-out',
      }}>
        <div style={{
          fontFamily: palette.sans,
          fontSize: 11, letterSpacing: '0.32em', textTransform: 'uppercase',
          color: palette.paperFaint, fontWeight: 500, marginBottom: 10,
          whiteSpace: 'nowrap',
        }}>Example</div>
        <div style={{
          fontFamily: palette.serif,
          fontStyle: 'italic',
          fontSize: 38,
          color: palette.teal,
          letterSpacing: '-0.005em',
          whiteSpace: 'nowrap',
        }}>{phaseLabel}</div>
        <div style={{
          fontFamily: palette.serif,
          fontSize: 20,
          color: palette.paperDim,
          marginTop: 6,
          whiteSpace: 'nowrap',
        }}>{phaseSub}</div>
      </div>

      <style>{`
        @keyframes jaxFadeIn {
          from { opacity: 0; transform: translate(-50%, 8px); }
          to   { opacity: 1; transform: translate(-50%, 0px); }
        }
      `}</style>
    </>
  );
}

// ════════════════════════════════════════════════════════════════════════
// SCENE 5 — In partnership (37.5s → 48.5s)
// R8 + EH marks; pull quote from Everybody's Home
// ════════════════════════════════════════════════════════════════════════
function ScenePartnership() {
  const { localTime, duration } = useSprite();

  const eyeEnv = envelope(localTime, duration, 0.7, 0.5, 8);
  const marksEnv = envelope(Math.max(0, localTime - 0.5), duration - 0.5, 0.8, 0.5, 10);
  const captionEnv = envelope(Math.max(0, localTime - 1.4), duration - 1.4, 0.7, 0.5, 8);
  const quoteEnv = envelope(Math.max(0, localTime - 2.6), duration - 2.6, 1.0, 0.5, 22);
  const attrEnv = envelope(Math.max(0, localTime - 4.0), duration - 4.0, 0.8, 0.5, 10);

  // Marks separate and drift apart slightly over time
  const markGap = interpolate([0.5, 1.4], [80, 110], Easing.easeOutCubic)(localTime);

  return (
    <>
      {/* Eyebrow */}
      <div style={{
        position: 'absolute', left: 200, top: 200,
        transform: `translateY(${eyeEnv.ty}px)`,
        opacity: eyeEnv.opacity,
        display: 'flex', alignItems: 'center', gap: 18,
        fontFamily: palette.sans, fontSize: 12,
        letterSpacing: '0.32em', textTransform: 'uppercase',
        color: palette.paperDim, fontWeight: 500,
      }}>
        <span style={{ width: 56, height: 1, background: palette.teal }}></span>
        <span>V &nbsp;·&nbsp; In partnership with Everybody's Home</span>
      </div>

      {/* Two marks meeting */}
      <div style={{
        position: 'absolute', left: '50%', top: 330,
        transform: `translate(-50%, ${marksEnv.ty}px)`,
        opacity: marksEnv.opacity,
        display: 'flex', alignItems: 'center', gap: markGap,
      }}>
        {/* R8 mark */}
        <div style={{
          width: 110, height: 110,
          border: `0.5px solid ${palette.teal}`,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontFamily: palette.serif,
          fontWeight: 500, fontSize: 40,
          color: palette.teal,
          letterSpacing: '0.01em',
        }}>R8</div>

        {/* Connector */}
        <div style={{
          fontFamily: palette.serif,
          fontSize: 56,
          color: palette.paperDim,
          fontStyle: 'italic',
          lineHeight: 1,
          marginTop: -8,
        }}>+</div>

        {/* EH mark */}
        <div style={{
          width: 110, height: 110,
          border: `0.5px solid ${palette.paper}`,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontFamily: palette.serif,
          fontWeight: 500, fontSize: 38,
          color: palette.paper,
          letterSpacing: '0.01em',
        }}>EH</div>
      </div>

      {/* Caption under marks */}
      <div style={{
        position: 'absolute', left: '50%', top: 470,
        transform: `translate(-50%, ${captionEnv.ty}px)`,
        opacity: captionEnv.opacity,
        textAlign: 'center',
      }}>
        <div style={{
          fontFamily: palette.sans,
          fontSize: 11, letterSpacing: '0.32em', textTransform: 'uppercase',
          color: palette.paperFaint, fontWeight: 500, marginBottom: 8,
        }}>RISE8 Companies &nbsp;·&nbsp; Everybody's Home Inc.</div>
        <div style={{
          fontFamily: palette.serif, fontSize: 22, color: palette.paperDim,
          fontStyle: 'italic',
        }}>Our affiliated 501(c)(3), founded alongside Stayable.</div>
      </div>

      {/* Pull quote — large italic serif */}
      <div style={{
        position: 'absolute', left: '50%', top: 600,
        transform: `translate(-50%, ${quoteEnv.ty}px)`,
        opacity: quoteEnv.opacity,
        textAlign: 'center',
        width: 1500,
      }}>
        <div style={{
          fontFamily: palette.serif,
          fontSize: 76,
          fontStyle: 'italic',
          lineHeight: 1.15,
          color: palette.paper,
          letterSpacing: '-0.012em',
        }}>
          “A stable address changes <br/>
          <span style={{ color: palette.teal }}>what a person can build next.”</span>
        </div>
      </div>

      {/* Attribution */}
      <div style={{
        position: 'absolute', left: '50%', top: 880,
        transform: `translate(-50%, ${attrEnv.ty}px)`,
        opacity: attrEnv.opacity,
        fontFamily: palette.sans,
        fontSize: 11, letterSpacing: '0.32em', textTransform: 'uppercase',
        color: palette.paperFaint, fontWeight: 500,
      }}>
        — Everybody's Home &nbsp;·&nbsp; everybodyshome.org
      </div>
    </>
  );
}

// ════════════════════════════════════════════════════════════════════════
// SCENE 6 — Open invitation / CTA (47.5s → 58s)
// ════════════════════════════════════════════════════════════════════════
function SceneCTA() {
  const { localTime, duration } = useSprite();

  const eyeEnv = envelope(localTime, duration, 0.7, 0.5, 8);
  const titleEnv = envelope(Math.max(0, localTime - 0.6), duration - 0.6, 0.9, 0.5, 22);
  const emailEnv = envelope(Math.max(0, localTime - 1.8), duration - 1.8, 1.0, 0.5, 18);
  const subEnv = envelope(Math.max(0, localTime - 3.0), duration - 3.0, 0.8, 0.5, 10);
  const closeLineEnv = envelope(Math.max(0, localTime - 4.2), duration - 4.2, 1.2, 0.5, 0);
  const sigEnv = envelope(Math.max(0, localTime - 5.0), duration - 5.0, 0.9, 0.5, 8);

  // Caret blink for the email
  const caretOn = (Math.floor(localTime * 1.6) % 2) === 0;

  return (
    <>
      {/* Eyebrow */}
      <div style={{
        position: 'absolute', left: '50%', top: 230,
        transform: `translate(-50%, ${eyeEnv.ty}px)`,
        opacity: eyeEnv.opacity,
        display: 'flex', alignItems: 'center', gap: 18,
        fontFamily: palette.sans, fontSize: 12,
        letterSpacing: '0.32em', textTransform: 'uppercase',
        color: palette.paperDim, fontWeight: 500,
      }}>
        <span style={{ width: 56, height: 1, background: palette.teal }}></span>
        <span>VI &nbsp;·&nbsp; Open invitation</span>
        <span style={{ width: 56, height: 1, background: palette.teal }}></span>
      </div>

      {/* Headline */}
      <div style={{
        position: 'absolute', left: '50%', top: 295,
        transform: `translate(-50%, ${titleEnv.ty}px)`,
        opacity: titleEnv.opacity,
        textAlign: 'center',
        fontFamily: palette.serif,
        fontWeight: 500,
        fontSize: 96,
        lineHeight: 1.06,
        letterSpacing: '-0.014em',
        color: palette.paper,
        width: 1500,
      }}>
        Write to us.
        <div style={{ fontStyle: 'italic', color: palette.teal, marginTop: 4 }}>
          Tell us what you'd do here.
        </div>
      </div>

      {/* Email card */}
      <div style={{
        position: 'absolute', left: '50%', top: 600,
        transform: `translate(-50%, ${emailEnv.ty}px)`,
        opacity: emailEnv.opacity,
        textAlign: 'center',
        padding: '24px 56px',
        border: `0.5px solid ${palette.teal}`,
        background: 'rgba(0,168,181,0.04)',
        backdropFilter: 'blur(2px)',
      }}>
        <div style={{
          fontFamily: palette.sans,
          fontSize: 11, letterSpacing: '0.36em',
          textTransform: 'uppercase',
          color: palette.paperFaint, fontWeight: 500,
          marginBottom: 16,
        }}>Correspondence</div>
        <div style={{
          fontFamily: palette.mono,
          fontSize: 56,
          color: palette.paper,
          letterSpacing: '-0.005em',
          fontVariantNumeric: 'tabular-nums',
        }}>
          rb@rise8companies.com
          <span style={{
            display: 'inline-block',
            marginLeft: 6,
            width: 18, height: 50,
            background: palette.teal,
            verticalAlign: '-10px',
            opacity: caretOn ? 1 : 0,
          }}></span>
        </div>
      </div>

      {/* Subtext */}
      <div style={{
        position: 'absolute', left: '50%', top: 800,
        transform: `translate(-50%, ${subEnv.ty}px)`,
        opacity: subEnv.opacity,
        textAlign: 'center',
        fontFamily: palette.serif,
        fontStyle: 'italic',
        fontSize: 26,
        color: palette.paperDim,
        maxWidth: 1100,
        lineHeight: 1.4,
      }}>
        Whole property or partial floors. We'll respond to every serious inquiry.
      </div>

      {/* Closing hairline */}
      <div style={{
        position: 'absolute', left: '50%', top: 900,
        transform: 'translateX(-50%)',
        opacity: closeLineEnv.opacity,
      }}>
        <Hairline x={0} y={0} width={400} color={palette.teal} thickness={1}
                  start={0} drawDur={1.2} />
      </div>

      {/* Signature line */}
      <div style={{
        position: 'absolute', left: '50%', top: 930,
        transform: `translate(-50%, ${sigEnv.ty}px)`,
        opacity: sigEnv.opacity,
        textAlign: 'center',
        fontFamily: palette.sans,
        fontSize: 11, letterSpacing: '0.36em', textTransform: 'uppercase',
        color: palette.paperFaint, fontWeight: 500,
      }}>
        RISE8 Companies &nbsp;·&nbsp; Stayable Suites &nbsp;·&nbsp; Everybody's Home
      </div>
    </>
  );
}

// Export to window so jax-north-app.jsx can use them
Object.assign(window, {
  SceneOpening, SceneInvitation, SceneProperty,
  SceneFloors, ScenePartnership, SceneCTA,
  palette: window.__jaxPalette = palette,
  envelope, Hairline, ArchSilhouette,
});
