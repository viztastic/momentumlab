/* global React */

const ENGAGEMENT_PHASES = [
  { n: "01", key: "Diagnose", when: "Week 0", desc: "Behavioural diagnostic and team mapping. We locate where each team sits and what's driving the drift." },
  { n: "02", key: "Reset", when: "Workshop · 1–2 days", desc: "In the room: rebuild trust, surface friction safely, and agree how the team actually wants to operate." },
  { n: "03", key: "Embed", when: "Weeks 1–8", desc: "Install operating rhythms, meeting structures and leadership practices into the real working week." },
  { n: "04", key: "Reinforce", when: "Ongoing", desc: "Scheduled reinforcement check-ins and accountability structures keep the change from quietly regressing." },
];

const DELIVERABLES = [
  ["Behavioural diagnostic", "A clear read on disengagement patterns and momentum blockers across your teams."],
  ["Team behavioural map", "Where each team sits on the matrix, and the first move that helps."],
  ["Leadership operating review", "How current leadership rhythms either reinforce or erode momentum."],
  ["Operating-rhythm redesign", "Reworked cadences for meetings, decisions and reflection that fit the real week."],
  ["Accountability structures", "Psychologically safe ways to hold follow-through without fear or blame."],
  ["Sustainable contribution playbook", "The team's agreed operating defaults, written down and usable."],
  ["Reinforcement framework", "The mechanisms that keep new behaviour alive under operational pressure."],
  ["Post-workshop check-ins", "Scheduled behavioural reinforcement sessions at 30, 60 and 90 days."],
];

function DocIcon() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="var(--accent)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M6 2.5h8l4 4V21a.5.5 0 0 1-.5.5h-11A.5.5 0 0 1 6 21V2.5Z"/>
      <path d="M14 2.5V6.5h4M9 12h6M9 15.5h6M9 8.5h2"/>
    </svg>
  );
}

function Engagement() {
  return (
    <section className="section engagement" id="engagement">
      <div className="wrap">
        <div className="eng-head reveal">
          <span className="eyebrow"><span className="num">05</span> What you're buying</span>
          <h2 className="h-xl">
            Not a workshop. An <span className="accent-ital">operating-system install.</span>
          </h2>
          <p className="lede">
            Every engagement runs on the same behavioural spine: Diagnose, Reset,
            Embed, Reinforce. Here's what that looks like in practice, and exactly
            what your organisation walks away with.
          </p>
        </div>

        {/* engagement timeline */}
        <div className="eng-timeline reveal">
          {ENGAGEMENT_PHASES.map((p, i) => (
            <div className="eng-phase" key={p.key}>
              <div className="eng-phase-top">
                <span className="eng-phase-n">{p.n}</span>
                <span className="eng-phase-dot"></span>
              </div>
              <div className="eng-phase-when">{p.when}</div>
              <h3 className="eng-phase-key">{p.key}</h3>
              <p className="eng-phase-desc">{p.desc}</p>
            </div>
          ))}
        </div>

        {/* deliverables */}
        <div className="eng-deliver reveal">
          <div className="eng-deliver-head">
            <h3 className="h-lg">What teams actually receive</h3>
            <p className="eng-deliver-sub">Tangible artefacts and systems, not a slide deck and good intentions.</p>
          </div>
          <div className="eng-deliver-grid">
            {DELIVERABLES.map(([title, desc]) => (
              <div className="deliverable" key={title}>
                <DocIcon />
                <div>
                  <h4 className="deliverable-title">{title}</h4>
                  <p className="deliverable-desc">{desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="eng-cta">
            <a href="How It Works.html" className="btn btn-primary">
              See how a full engagement works
              <svg className="arrow" viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
            </a>
            <a href="#workshops" className="btn btn-ghost">Compare workshops</a>
          </div>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { Engagement });
