// Main app — sets up the Stage, wires scenes together, and updates the
// data-screen-label attribute on the root each second so comments anchor
// to a specific timestamp.

const DURATION = 58; // seconds

function ScreenLabelUpdater() {
  const t = useTime();
  React.useEffect(() => {
    const root = document.getElementById('root');
    if (!root) return;
    const m = Math.floor(t / 60);
    const s = Math.floor(t % 60);
    const label = `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
    if (root.getAttribute('data-screen-label') !== label) {
      root.setAttribute('data-screen-label', label);
    }
  }, [Math.floor(t)]);
  return null;
}

// Subtle vignette overlay for cinematic feel
function Vignette() {
  return (
    <div style={{
      position: 'absolute', inset: 0,
      background: 'radial-gradient(ellipse at 50% 50%, transparent 50%, rgba(0,0,0,0.45) 100%)',
      pointerEvents: 'none',
      zIndex: 100,
    }}/>
  );
}

// Persistent film-grain noise via SVG filter
function FilmGrain() {
  return (
    <div style={{
      position: 'absolute', inset: 0,
      backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='220' height='220'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 1  0 0 0 0 0.95  0 0 0 0 0.91  0 0 0 0.08 0'/></filter><rect width='100%25' height='100%25' filter='url(%23n)'/></svg>")`,
      opacity: 0.5,
      mixBlendMode: 'overlay',
      pointerEvents: 'none',
      zIndex: 99,
    }}/>
  );
}

// Section labels in the bottom-left, indexing the film like the website's index
function SectionIndex() {
  const t = useTime();
  const SECTIONS = [
    { start: 0,  end: 7,  num: 'I',   label: 'Opening' },
    { start: 7,  end: 16, num: 'II',  label: 'Invitation' },
    { start: 16, end: 26, num: 'III', label: 'The Property' },
    { start: 26, end: 38, num: 'IV',  label: 'Whole — or in part' },
    { start: 38, end: 48, num: 'V',   label: 'In partnership' },
    { start: 48, end: 58, num: 'VI',  label: 'Open invitation' },
  ];
  const current = SECTIONS.find(s => t >= s.start && t < s.end) || SECTIONS[SECTIONS.length - 1];
  return (
    <div style={{
      position: 'absolute',
      bottom: 56, left: 64,
      display: 'flex', alignItems: 'baseline', gap: 18,
      color: 'rgba(237,231,215,0.45)',
      fontFamily: 'Inter, sans-serif',
      fontSize: 11,
      letterSpacing: '0.28em',
      textTransform: 'uppercase',
      fontWeight: 500,
      zIndex: 60,
      whiteSpace: 'nowrap',
    }}>
      <span style={{ fontFamily: 'EB Garamond, serif', fontSize: 18, color: '#00A8B5', letterSpacing: '0.05em', fontStyle: 'italic' }}>
        {current.num}
      </span>
      <span style={{ whiteSpace: 'nowrap' }}>{current.label}</span>
    </div>
  );
}

// Top-right brand mark — appears throughout to anchor the piece
function BrandMark() {
  return (
    <div style={{
      position: 'absolute',
      top: 56, right: 64,
      display: 'flex', alignItems: 'center', gap: 14,
      color: 'rgba(237,231,215,0.65)',
      zIndex: 60,
    }}>
      <div style={{
        width: 36, height: 36,
        border: '0.5px solid #00A8B5',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontFamily: 'EB Garamond, serif', fontWeight: 500, fontSize: 14,
        color: '#00A8B5', letterSpacing: '0.02em',
      }}>R8</div>
      <div style={{
        fontFamily: 'EB Garamond, serif', fontWeight: 500,
        fontSize: 14, letterSpacing: '0.06em',
      }}>RISE8 COMPANIES</div>
    </div>
  );
}

// Top-left timestamp/index — keeps the film grounded as a "document"
function TopLabel() {
  const t = useTime();
  const m = Math.floor(t / 60);
  const s = Math.floor(t % 60);
  return (
    <div style={{
      position: 'absolute',
      top: 56, left: 64,
      display: 'flex', alignItems: 'center', gap: 18,
      color: 'rgba(237,231,215,0.45)',
      fontFamily: 'Inter, sans-serif',
      fontSize: 10,
      letterSpacing: '0.28em',
      textTransform: 'uppercase',
      fontWeight: 500,
      zIndex: 60,
    }}>
      <span>Stayable Jax North</span>
      <span style={{ width: 40, height: 1, background: 'rgba(237,231,215,0.25)' }}></span>
      <span style={{ fontFamily: 'JetBrains Mono, monospace', letterSpacing: '0.08em' }}>
        {String(m).padStart(2,'0')}:{String(s).padStart(2,'0')} / 00:58
      </span>
    </div>
  );
}

function App() {
  return (
    <Stage width={1920} height={1080} duration={DURATION} background="#14181F" persistKey="stayable-jax-north">
      <ScreenLabelUpdater />

      {/* Persistent chrome */}
      <TopLabel />
      <BrandMark />
      <SectionIndex />

      {/* Scenes */}
      <Sprite start={0}     end={7.0}>  <SceneOpening />      </Sprite>
      <Sprite start={7.0}   end={16.0}> <SceneInvitation />   </Sprite>
      <Sprite start={16.0}  end={26.0}> <SceneProperty />     </Sprite>
      <Sprite start={26.0}  end={38.0}> <SceneFloors />       </Sprite>
      <Sprite start={38.0}  end={48.0}> <ScenePartnership />  </Sprite>
      <Sprite start={48.0}  end={58}>   <SceneCTA />          </Sprite>

      <FilmGrain />
      <Vignette />
    </Stage>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
