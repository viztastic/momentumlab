/* global React, MatrixMini */

const DECLINE_STAGES = [
  {
    n: "01", name: "Drained",
    desc: "The work still gets done — but on reserves. Energy goes to surviving the week, not shaping it.",
    tags: ["Reactive work", "Survival mode"],
  },
  {
    n: "02", name: "Disconnected",
    desc: "People stop reaching for each other. Clarity drops, trust thins, and ownership quietly narrows.",
    tags: ["Low clarity", "Reduced trust", "Emotional withdrawal"],
  },
  {
    n: "03", name: "Stagnant",
    desc: "Fatigue stops being a state and becomes the default. This is the point most teams mistake for personality.",
    tags: ["Cultural fatigue", "Drift hardens"],
  },
];

function Problem() {
  return (
    <section className="section problem" id="problem">
      <div className="wrap">
        <div className="problem-head reveal">
          <span className="eyebrow on-night"><span className="num">01</span> The problem</span>
          <h2 className="h-xl problem-title">
            Most organisations react <span className="accent-ital">too late.</span>
          </h2>
          <p className="lede problem-lede">
            Disengagement rarely shows up as a resignation. It shows up as a slow
            decline that's easy to explain away — until it's the culture.
          </p>
        </div>

        <div className="decline reveal">
          {DECLINE_STAGES.map((s, i) => (
            <div className="decline-stage" key={s.n}>
              <div className="decline-bar"><span style={{ "--fill": `${100 - i * 30}%` }}></span></div>
              <div className="decline-n">{s.n}</div>
              <h3 className="decline-name">{s.name}</h3>
              <p className="decline-desc">{s.desc}</p>
              <div className="decline-tags">
                {s.tags.map((t) => <span key={t} className="tag-night">{t}</span>)}
              </div>
            </div>
          ))}
        </div>

        <div className="problem-foot reveal">
          <div className="problem-mini">
            <MatrixMini />
            <span className="problem-mini-cap">Where the drift lands — mapped in full further down.</span>
          </div>
          <blockquote className="problem-punch">
            The problem usually isn't capability.
            <br/>It's <span className="accent-ital">behavioural momentum.</span>
          </blockquote>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { Problem });
