/* global React, useTweaks, TweaksPanel, TweakSection, TweakColor, TweakRadio, TweakToggle,
   Nav, Hero, Problem, Method, Checkin, Workshops, Proof, FinalCTA, Footer */
const { useEffect, useRef } = React;

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "palette": "blush",
  "headingFont": "serif",
  "darkProblem": true,
  "heroVariant": "A",
  "finalVariant": "A"
}/*EDITMODE-END*/;

const THEMES = [
  { id: "blush", label: "Blush", accent: "#b03a5b", night: "#241319", paper: "#faf6f5" },
  { id: "ember", label: "Ember", accent: "#b5333a", night: "#16110e", paper: "#faf8f6" },
  { id: "iris",  label: "Iris",  accent: "#7547ad", night: "#1e1830", paper: "#f8f6fa" },
  { id: "clay",  label: "Clay",  accent: "#a8632f", night: "#211d17", paper: "#faf7f1" },
];

function PalettePicker({ value, onChange }) {
  return (
    <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
      {THEMES.map((th) => {
        const on = value === th.id;
        return (
          <button key={th.id} onClick={() => onChange(th.id)} title={th.label}
            style={{
              flex: "1 1 0", minWidth: 64, cursor: "pointer", padding: "8px 8px 7px",
              borderRadius: 11, background: th.paper,
              border: on ? `2px solid ${th.accent}` : "1.5px solid rgba(0,0,0,.12)",
              display: "flex", flexDirection: "column", gap: 7, alignItems: "stretch",
              transition: "border-color .2s, transform .15s", transform: on ? "translateY(-1px)" : "none",
            }}>
            <span style={{ display: "flex", gap: 4 }}>
              <span style={{ flex: 2, height: 16, borderRadius: 4, background: th.accent }}></span>
              <span style={{ flex: 1, height: 16, borderRadius: 4, background: th.night }}></span>
            </span>
            <span style={{ fontSize: 11, fontWeight: 600, color: "#222", textAlign: "left" }}>{th.label}</span>
          </button>
        );
      })}
    </div>
  );
}

function useReveal() {
  const setup = useRef(false);
  useEffect(() => {
    const reveal = () => {
      const vh = window.innerHeight || 800;
      document.querySelectorAll(".reveal:not(.in)").forEach((e) => {
        if (e.getBoundingClientRect().top < vh * 0.92) e.classList.add("in");
      });
    };
    requestAnimationFrame(reveal);
    if (!setup.current) {
      setup.current = true;
      window.addEventListener("scroll", reveal, { passive: true });
      window.addEventListener("resize", reveal);
      // safety net — never leave content permanently hidden
      setTimeout(() => document.querySelectorAll(".reveal").forEach((e) => e.classList.add("in")), 2600);
    }
  });
}

function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
  useReveal();

  useEffect(() => {
    const r = document.documentElement;
    r.dataset.theme = t.palette;
    r.style.setProperty("--serif", t.headingFont === "sans"
      ? '"Hanken Grotesk", system-ui, sans-serif'
      : '"Newsreader", Georgia, serif');
    document.body.classList.toggle("flat-problem", !t.darkProblem);
  }, [t.palette, t.headingFont, t.darkProblem]);

  return (
    <React.Fragment>
      <Nav />
      <main>
        <Hero variant={t.heroVariant} />
        <Method />
        <Checkin />
        <Workshops />
        <FinalCTA variant={t.finalVariant} />
      </main>
      <Footer />

      <TweaksPanel>
        <TweakSection label="Palette" />
        <PalettePicker value={t.palette} onChange={(v) => setTweak("palette", v)} />
        <TweakRadio label="Headings" value={t.headingFont}
          options={[{ value: "serif", label: "Serif" }, { value: "sans", label: "Sans" }]}
          onChange={(v) => setTweak("headingFont", v)} />

        <TweakSection label="Layout" />
        <TweakToggle label="Dark problem section" value={t.darkProblem}
          onChange={(v) => setTweak("darkProblem", v)} />

        <TweakSection label="Copy variants" />
        <TweakRadio label="Hero headline" value={t.heroVariant}
          options={[{ value: "A", label: "Top performers" }, { value: "B", label: "Heroics" }]}
          onChange={(v) => setTweak("heroVariant", v)} />
        <TweakRadio label="Final headline" value={t.finalVariant}
          options={[{ value: "A", label: "Personality" }, { value: "B", label: "Lucky teams" }]}
          onChange={(v) => setTweak("finalVariant", v)} />
      </TweaksPanel>
    </React.Fragment>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
