/* global React, MomentumMatrix */

const METHOD_STEPS = [
  {
    n: "01", key: "Diagnose",
    desc: "Identify the behavioural friction and disengagement patterns already in motion, before they're explained away as personality.",
  },
  {
    n: "02", key: "Reset",
    desc: "Rebuild trust, alignment and behavioural clarity, so the team has a shared, honest read on how it actually operates.",
  },
  {
    n: "03", key: "Embed",
    desc: "Install sustainable operating rhythms and leadership practices into the real week: meetings, decisions, reflection.",
  },
  {
    n: "04", key: "Reinforce",
    desc: "Prevent regression with repeatable systems and accountability structures that hold the change under operational pressure.",
  },
];

const INSTALLS = [
  ["Leadership rhythms", "Predictable cadences that set tone, surface friction early, and model the behaviour you want repeated."],
  ["Behavioural reinforcement", "Systems that reward the right operating patterns so they survive past the post-workshop glow."],
  ["Meeting structures", "Formats that protect attention, sharpen decisions, and stop work from defaulting to reactive."],
  ["Reflection cadences", "Regular, low-friction checkpoints that catch drift while it's still cheap to correct."],
  ["Safe accountability", "Psychological safety and ownership held together: candour without blame, follow-through without fear."],
  ["Sustainable patterns", "Operating defaults a team can actually keep: pace that compounds instead of burning down."],
];

function Method() {
  return (
    <section className="section method" id="method">
      <div className="wrap">
        <div className="method-intro reveal">
          <span className="eyebrow"><span className="num">02</span> The method</span>
          <h2 className="h-xl">
            Most workshops end when everyone <span className="accent-ital">leaves the room.</span>
          </h2>
          <p className="lede">
            Ours doesn't. We run a workshop worth booking on its own, led by
            world-class facilitators. The difference is what we leave behind: an
            operating system that keeps the shift alive long after the day ends.
          </p>
        </div>

        {/* where most workshops stop vs where we keep going */}
        <div className="contrast reveal">
          <div className="contrast-col fade">
            <div className="contrast-tag">Where most workshops stop</div>
            <ul className="contrast-list">
              <li>A high-energy day, then back to the same week</li>
              <li>Insight that depends on individuals remembering</li>
              <li>Momentum with no system to hold it</li>
              <li>Change that fades the moment pressure returns</li>
            </ul>
          </div>
          <div className="contrast-col keep">
            <div className="contrast-tag accent">Where Momentum Lab keeps going</div>
            <ul className="contrast-list">
              <li>Operating rhythms built into the real working week</li>
              <li>Behaviour reinforced by structure, not willpower</li>
              <li>Accountability that's safe enough to be honest</li>
              <li>Change that compounds under pressure instead of breaking</li>
            </ul>
          </div>
        </div>

        {/* 4-step model */}
        <div className="model reveal">
          <div className="model-head">
            <h3 className="h-lg">A behavioural systems model, not a pep talk.</h3>
            <p className="model-sub">Four moves, run as a loop. The fourth feeds the first: reinforcement keeps diagnosis honest.</p>
          </div>
          <div className="model-flow">
            {METHOD_STEPS.map((s, i) => (
              <React.Fragment key={s.key}>
                <div className="model-step">
                  <div className="model-n">{s.n}</div>
                  <h4 className="model-name">{s.key}</h4>
                  <p className="model-desc">{s.desc}</p>
                </div>
                {i < METHOD_STEPS.length - 1 && (
                  <div className="model-arrow" aria-hidden="true">
                    <svg viewBox="0 0 40 24" width="40" height="24" fill="none" stroke="var(--accent)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M4 12h30M27 5l7 7-7 7"/></svg>
                  </div>
                )}
              </React.Fragment>
            ))}
            <div className="model-loop" aria-hidden="true">
              <svg viewBox="0 0 1000 60" preserveAspectRatio="none" width="100%" height="60">
                <path d="M970 6 C 985 30, 985 54, 500 54 C 15 54, 15 30, 30 6" fill="none" stroke="var(--accent)" strokeWidth="1.4" strokeDasharray="4 5" strokeLinecap="round"/>
                <path d="M24 14 L30 6 L37 13" fill="none" stroke="var(--accent)" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="model-loop-label">Reinforced, on repeat</span>
            </div>
          </div>
        </div>

        {/* what we install */}
        <div className="installs reveal">
          <div className="installs-head">
            <span className="eyebrow"><span className="num"></span>What gets installed</span>
            <h3 className="h-lg">Six operating patterns, embedded into the week.</h3>
          </div>
          <div className="installs-grid">
            {INSTALLS.map(([title, desc], i) => (
              <div className="install" key={title}>
                <div className="install-i">{String(i + 1).padStart(2, "0")}</div>
                <h4 className="install-title">{title}</h4>
                <p className="install-desc">{desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* interactive matrix */}
        <div className="matrix-block reveal">
          <div className="matrix-head">
            <span className="eyebrow"><span className="num"></span>Diagnose</span>
            <h3 className="h-lg">Where is your team right now?</h3>
            <p className="lede">
              Two readings: how activated the team is, and how much it's oriented
              toward each other. Six zones. <strong>Click any zone</strong> to see what
              you'd notice, and the first move that helps.
            </p>
          </div>
          <MomentumMatrix />
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { Method });
