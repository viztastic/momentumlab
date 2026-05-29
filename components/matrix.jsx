/* global React */
const { useState } = React;

/* ----------------------------------------------------------
   Behavioural matrix — 2 rows (arousal) × 3 cols (orientation)
   Used full + interactive in the Method section, and as a
   small static preview in the Problem section.
   ---------------------------------------------------------- */

const MATRIX_ZONES = [
  {
    id: "overwhelm", row: 0, col: 0, tone: "rose",
    kicker: "Hyperarousal · Self-absorbed",
    title: "Overwhelm & reactive",
    blurb: "High stress, tunnel vision, survival mode.",
    flag: "Burnout risk", flagIcon: "warn",
    signals: ["Reactive work", "Low clarity", "Emotional withdrawal"],
    move: "Reset first. Lower the load before asking for more; trust can't rebuild under threat.",
  },
  {
    id: "anxious", row: 0, col: 1, tone: "amber",
    kicker: "Hyperarousal · Transitional",
    title: "Anxious helper",
    blurb: "Wants to contribute, but capacity is depleted.",
    flag: "Unstable", flagIcon: "bolt",
    signals: ["Over-extended", "Blurred boundaries", "Quiet resentment"],
    move: "Embed clearer meeting rhythms and decision ownership so effort lands where it counts.",
  },
  {
    id: "driven", row: 0, col: 2, tone: "pink",
    kicker: "Hyperarousal · Other-focused",
    title: "Driven but fragile",
    blurb: "High output and prosocial, but approaching the edge.",
    flag: "Watch closely", flagIcon: "bolt",
    signals: ["High output", "Carrying others", "Running hot"],
    move: "Reinforce sustainable pacing. Protect your strongest contributors from quiet over-reliance.",
  },
  {
    id: "disengaged", row: 1, col: 0, tone: "clay",
    kicker: "Optimal arousal · Self-focused",
    title: "Disengaged but stable",
    blurb: "Functioning, but withdrawn and low-contribution.",
    flag: "Latent potential", flagIcon: "arrow",
    signals: ["Going through motions", "Low initiative", "Checked out"],
    move: "Diagnose the disconnect. Re-establish why their contribution matters before adding rhythm.",
  },
  {
    id: "sweet", row: 1, col: 1, tone: "olive",
    kicker: "Optimal arousal · Transitional",
    title: "The sweet spot",
    blurb: "Peak performance zone. Resilient and engaged.",
    flag: "Target state", flagIcon: "star",
    signals: ["Clear ownership", "Steady trust", "Sustainable pace"],
    move: "Reinforce what's working. Most teams arrive here and drift back without a cadence to hold it.",
  },
  {
    id: "flourishing", row: 1, col: 2, tone: "teal",
    kicker: "Optimal arousal · Other-focused",
    title: "Flourishing contributor",
    blurb: "Engaged, regulated and generative.",
    flag: "Thriving", flagIcon: "star",
    signals: ["Lifts the room", "Shares ownership", "Generative trust"],
    move: "Make it repeatable. Turn this person's patterns into the team's operating defaults.",
  },
];

function ZoneIcon({ kind, color }) {
  const s = { width: 14, height: 14, stroke: color, fill: "none", strokeWidth: 1.8, strokeLinecap: "round", strokeLinejoin: "round" };
  if (kind === "warn") return (<svg viewBox="0 0 24 24" style={{ width: 14, height: 14 }}><path d="M12 3 2 21h20L12 3Z" fill="none" stroke={color} strokeWidth="1.8" strokeLinejoin="round"/><path d="M12 10v5M12 18h.01" stroke={color} strokeWidth="1.8" strokeLinecap="round"/></svg>);
  if (kind === "bolt") return (<svg viewBox="0 0 24 24" style={{ width: 14, height: 14 }}><path d="M13 2 4 14h6l-1 8 9-12h-6l1-8Z" fill={color} stroke="none"/></svg>);
  if (kind === "arrow") return (<svg viewBox="0 0 24 24" style={{ width: 14, height: 14 }}><path d="M5 12h14M13 6l6 6-6 6" {...s}/></svg>);
  return (<svg viewBox="0 0 24 24" style={{ width: 14, height: 14 }}><path d="M12 3.5 14 9l5.5.3-4.3 3.5L16.7 18 12 14.8 7.3 18l1.5-5.2L4.5 9.3 10 9l2-5.5Z" fill={color} stroke="none"/></svg>);
}

function tints(tone) {
  return {
    bg: `var(--c-${tone}-bg)`,
    ink: `var(--c-${tone}-ink)`,
  };
}

/* ---- Full interactive matrix ---- */
function MomentumMatrix() {
  const [active, setActive] = useState("sweet");
  const zone = MATRIX_ZONES.find((z) => z.id === active);
  const t = tints(zone.tone);

  return (
    <div className="mtx">
      <div className="mtx-grid-area">
        <div className="mtx-yaxis">
          <span>High<br/>arousal</span>
          <span>Mid<br/>arousal</span>
          <span>Low<br/>arousal</span>
        </div>
        <div className="mtx-grid">
          {MATRIX_ZONES.map((z) => {
            const zt = tints(z.tone);
            const on = z.id === active;
            return (
              <button
                key={z.id}
                className={"mtx-cell" + (on ? " on" : "")}
                style={{ background: zt.bg, color: zt.ink }}
                onClick={() => setActive(z.id)}
                aria-pressed={on}
              >
                <span className="mtx-kicker" style={{ color: zt.ink }}>{z.kicker}</span>
                <span className="mtx-title" style={{ color: zt.ink }}>{z.title}</span>
                <span className="mtx-flag" style={{ color: zt.ink }}>
                  <ZoneIcon kind={z.flagIcon} color={zt.ink} /> {z.flag}
                </span>
              </button>
            );
          })}
        </div>
        <div className="mtx-xaxis">
          <span>Self-focused</span>
          <span>Transitional</span>
          <span>Other-focused</span>
        </div>
        <div className="mtx-xlabel">Prosocial orientation →</div>
      </div>

      <aside className="mtx-detail" style={{ borderColor: t.bg }}>
        <div className="mtx-detail-top" style={{ background: t.bg }}>
          <span className="mtx-detail-flag" style={{ color: t.ink }}>
            <ZoneIcon kind={zone.flagIcon} color={t.ink} /> {zone.flag}
          </span>
          <h4 className="mtx-detail-title" style={{ color: t.ink }}>{zone.title}</h4>
          <p className="mtx-detail-blurb" style={{ color: t.ink }}>{zone.blurb}</p>
        </div>
        <div className="mtx-detail-body">
          <div className="mtx-detail-label">What you'd notice</div>
          <div className="mtx-signals">
            {zone.signals.map((s) => <span key={s} className="mtx-signal">{s}</span>)}
          </div>
          <div className="mtx-detail-label" style={{ marginTop: 22 }}>The intervention</div>
          <p className="mtx-move">{zone.move}</p>
        </div>
      </aside>
    </div>
  );
}

/* ---- Polished static preview (Problem section) ---- */
function MatrixMini() {
  return (
    <div className="mtx-mini">
      <div className="mtx-mini-grid" aria-hidden="true">
        {MATRIX_ZONES.map((z) => {
          const zt = tints(z.tone);
          const target = z.id === "sweet";
          const start = z.id === "overwhelm";
          return (
            <div
              key={z.id}
              className={"mtx-mini-cell" + (target ? " target" : "") + (start ? " start" : "")}
              style={{ background: zt.bg, color: zt.ink }}
            >
              <span className="mtx-mini-title">{z.title}</span>
              {start && <span className="mtx-mini-tag">Where drift begins</span>}
              {target && <span className="mtx-mini-tag">◆ Target state</span>}
            </div>
          );
        })}
      </div>
      <div className="mtx-mini-legend">
        <span><i className="md rose"></i>Drained &amp; reactive</span>
        <svg viewBox="0 0 34 12" width="34" height="12" fill="none" aria-hidden="true">
          <path d="M1 6h27M24 2l5 4-5 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <span><i className="md olive"></i>Resilient &amp; engaged</span>
      </div>
    </div>
  );
}

Object.assign(window, { MomentumMatrix, MatrixMini, MATRIX_ZONES });
