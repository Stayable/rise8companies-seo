/* global React, ReactDOM, Nav, Hero, IndexStrip, StatsBand, Platform, Portfolio, Footer */
const { useState: useStateA, useEffect: useEffectA, useRef } = React;

function App() {
  const [active, setActive] = useStateA('top');
  const refs = {
    top: useRef(null), platform: useRef(null), portfolio: useRef(null), invest: useRef(null),
  };
  const ALIAS = { about: 'platform', community: 'portfolio' };

  const onNav = (id) => {
    const el = refs[ALIAS[id] || id]?.current;
    if (el) window.scrollTo({ top: el.offsetTop - 70, behavior: 'smooth' });
  };

  useEffectA(() => {
    const order = ['top', 'platform', 'portfolio', 'invest'];
    const onScroll = () => {
      const y = window.scrollY + window.innerHeight * 0.32;
      let cur = 'top';
      for (const id of order) {
        const el = refs[id]?.current;
        if (el && el.offsetTop <= y) cur = id;
      }
      setActive(cur === 'invest' ? 'invest' : cur);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="kit">
      <Nav active={active} onNav={onNav} />
      <section ref={refs.top}><Hero onNav={onNav} /><IndexStrip onNav={onNav} /><StatsBand /></section>
      <section ref={refs.platform}><Platform /></section>
      <section ref={refs.portfolio} style={{ background: 'var(--paper)' }}><Portfolio /></section>
      <section ref={refs.invest}><Footer /></section>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
