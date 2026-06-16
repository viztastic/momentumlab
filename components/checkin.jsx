/* global React */
const { useState, useRef, useEffect } = React;

const CHECKIN_Q = [
  {
    id: "gives",
    prompt: "When a week gets heavy, what tends to give first?",
    ack: "Noted. That's usually the earliest signal.",
    options: [
      { label: "Clarity, priorities blur", v: "clarity" },
      { label: "Energy, people run on reserves", v: "energy" },
      { label: "Trust, people stop reaching out", v: "trust" },
      { label: "Initiative, folks wait to be told", v: "initiative" },
    ],
  },
  {
    id: "friction",
    prompt: "And when friction shows up between people?",
    ack: "Got it. How a team handles friction says a lot.",
    options: [
      { label: "We talk it through fairly quickly", v: "talk" },
      { label: "We quietly work around it", v: "around" },
      { label: "It tends to sit unspoken", v: "sit" },
      { label: "It escalates faster than it should", v: "escalate" },
    ],
  },
  {
    id: "meetings",
    prompt: "Last one: what's the honest state of your meetings?",
    ack: "That's enough to give you a real read.",
    options: [
      { label: "Sharp and decisive", v: "sharp" },
      { label: "Functional, a bit flat", v: "flat" },
      { label: "Draining more than they help", v: "drain" },
      { label: "Quietly avoided where possible", v: "avoid" },
    ],
  },
];

function readResult(ans) {
  // light adaptive logic — picks a dominant pattern from the answers
  const heavy = ["sit", "avoid", "trust", "around"].filter((x) => Object.values(ans).includes(x)).length;
  const acute = ["energy", "escalate", "drain"].filter((x) => Object.values(ans).includes(x)).length;

  if (acute >= heavy && acute >= 2) {
    return {
      zone: "Running hot",
      tone: "amber",
      summary: "Your team is activated but stretched. Capacity is the constraint, not commitment.",
      blockers: ["Depleted capacity", "Reactive default", "Meetings draining energy"],
      next: ["Reset the load before adding rhythm", "Protect attention in your core meeting", "Name what's been absorbing the team unseen"],
    };
  }
  if (heavy >= 2) {
    return {
      zone: "Quietly disconnecting",
      tone: "clay",
      summary: "The team is stable on the surface, but trust and contribution are narrowing.",
      blockers: ["Unspoken friction", "Thinning trust", "Withdrawn ownership"],
      next: ["Make friction safe to name", "Re-establish why contribution matters", "Add a low-friction reflection checkpoint"],
    };
  }
  return {
    zone: "Holding momentum",
    tone: "olive",
    summary: "You're in a good zone. The risk is drifting back once pressure returns.",
    blockers: ["No cadence to hold the change", "Reliance on a few people", "Clarity that depends on memory"],
    next: ["Lock the rhythm that's working", "Spread ownership wider", "Reinforce it before the next busy stretch"],
  };
}

function CheckinDemo() {
  const [step, setStep] = useState(0); // 0..n-1 questions, then 'result'
  const [answers, setAnswers] = useState({});
  const [thinking, setThinking] = useState(false);
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);
  const done = step >= CHECKIN_Q.length;
  const scrollRef = useRef(null);

  const pick = (q, opt) => {
    if (thinking) return;
    const next = { ...answers, [q.id]: opt.v };
    setAnswers(next);
    setThinking(true);
    setTimeout(() => { setThinking(false); setStep((s) => s + 1); }, 720);
  };

  const reset = () => { setStep(0); setAnswers({}); setThinking(false); setEmail(""); setSent(false); };

  const submitEmail = (e) => {
    e.preventDefault();
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) return;
    setSent(true);
  };

  const result = done ? readResult(answers) : null;
  const t = result ? { bg: `var(--c-${result.tone}-bg)`, ink: `var(--c-${result.tone}-ink)` } : null;

  // build a transcript of asked questions
  const asked = CHECKIN_Q.slice(0, Math.min(step + (done ? 0 : 1), CHECKIN_Q.length));
  const current = done ? null : CHECKIN_Q[step];

  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [step, thinking]);

  return (
    <div className="checkin-card">
      <div className="checkin-bar">
        <div className="checkin-id">
          <span className="checkin-dot"></span>
          Momentum check-in
        </div>
        <div className="checkin-progress">
          {CHECKIN_Q.map((_, i) => (
            <span key={i} className={"cp" + (i < step ? " done" : "") + (i === step && !done ? " on" : "")}></span>
          ))}
          <span className={"cp" + (done ? " done" : "")}></span>
        </div>
      </div>

      <div className="checkin-stream" ref={scrollRef}>
        {!done && step === 0 && (
          <div className="bubble bot intro">
            No labels. No personality types. Just practical clarity. Three quick reads on how your team is operating.
          </div>
        )}

        {asked.map((q, i) => {
          const answered = answers[q.id] != null;
          const ans = q.options.find((o) => o.v === answers[q.id]);
          return (
            <React.Fragment key={q.id}>
              <div className="bubble bot">{q.prompt}</div>
              {answered && <div className="bubble me">{ans.label}</div>}
              {answered && i < step && <div className="bubble bot ack">{q.ack}</div>}
            </React.Fragment>
          );
        })}

        {thinking && (
          <div className="bubble bot typing"><span></span><span></span><span></span></div>
        )}

        {current && !thinking && (
          <div className="checkin-options">
            {current.options.map((o) => (
              <button key={o.v} className="checkin-opt" onClick={() => pick(current, o)}>
                {o.label}
              </button>
            ))}
          </div>
        )}

        {done && result && (
          <div className="checkin-result" style={{ borderColor: t.bg }}>
            <div className="checkin-result-top" style={{ background: t.bg, color: t.ink }}>
              <span className="checkin-result-label" style={{ color: t.ink }}>Your read</span>
              <h4 style={{ color: t.ink }}>{result.zone}</h4>
              <p style={{ color: t.ink }}>{result.summary}</p>
            </div>
            <div className="checkin-begin">
              {!sent ? (
                <React.Fragment>
                  <p className="checkin-begin-copy">Want the full read and the first moves that help? We'll send the five-minute check-in.</p>
                  <form className="checkin-begin-form" onSubmit={submitEmail}>
                    <input
                      type="email"
                      className="checkin-begin-input"
                      placeholder="you@yourteam.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      aria-label="Your work email"
                      required
                    />
                    <button type="submit" className="btn btn-primary checkin-begin-btn">
                      Begin together
                      <svg className="arrow" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
                    </button>
                  </form>
                </React.Fragment>
              ) : (
                <div className="checkin-begin-sent">
                  <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 12.5l5 5L20 6.5"/></svg>
                  <div>
                    <strong>We're on it.</strong>
                    <span>The full check-in is on its way to {email}. We'll be in touch to begin together.</span>
                  </div>
                </div>
              )}
            </div>
            <div className="checkin-result-foot">
              <span>3-question taster.</span>
              <button className="checkin-restart" onClick={reset}>Run it again ↺</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function Checkin() {
  return (
    <section className="section checkin" id="checkin">
      <div className="wrap checkin-grid">
        <div className="checkin-copy reveal">
          <span className="eyebrow">The check-in</span>
          <h2 className="h-xl">
            See where your team stands. <span className="accent-ital">Five minutes.</span>
          </h2>
          <p className="lede">
            A fast, honest read on where your people sit today — and the first
            move that starts shifting them toward flourishing.
          </p>
          <ul className="checkin-points">
            <li>Where each part of the team sits today</li>
            <li>Who's thriving, who's drifting, and why</li>
            <li>The first practical move toward flourishing</li>
          </ul>
          <a href="#workshops" className="btn btn-primary checkin-cta">
            See where your team lands
            <svg className="arrow" viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
          </a>
          <p className="checkin-note">Try the live taster on the right →</p>
        </div>
        <div className="checkin-demo reveal">
          <CheckinDemo />
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { Checkin, CheckinDemo });
