/* global React */

const WORKSHOPS = [
  {
    tag: "Team Reset",
    format: "2 days · whole team · in person",
    lead: "For teams stuck in reactive mode. Clear the friction, rebuild trust, and re-establish how the team actually wants to operate.",
    points: ["Surface the unspoken friction safely", "Rebuild trust and shared ownership", "Reset meeting and decision rhythms", "Leave with a cadence the week can hold"],
    change: "By week four: fewer reactive scrambles, clearer ownership.",
  },
  {
    tag: "Leadership Enablement",
    format: "6 weeks · managers · hybrid",
    lead: "For the people who set the tone. Install the leadership rhythms that reinforce trust and momentum without adding overhead.",
    points: ["Leadership rhythms that model the behaviour", "Reading drift early, before it hardens", "Accountability that stays psychologically safe", "Reinforcement built into the week"],
    change: "By week six: leaders catch drift instead of inheriting it.",
    feature: true,
  },
  {
    tag: "Sustainable Performance Systems",
    format: "Ongoing · org-wide cadence",
    lead: "For organisations done with the burnout cycle. Embed the operating patterns that make momentum repeatable across teams.",
    points: ["Org-wide behavioural reinforcement systems", "Reflection cadences that prevent regression", "Sustainable operating defaults, not heroics", "Quarterly read on behavioural momentum"],
    change: "Over a quarter: momentum becomes a system, not a mood.",
  },
];

function Workshops() {
  return (
    <section className="section workshops" id="workshops">
      <div className="wrap">
        <div className="workshops-head reveal">
          <span className="eyebrow">Development</span>
          <h2 className="h-xl">
            Development that moves people <span className="accent-ital">toward flourishing.</span>
          </h2>
          <p className="lede">
            Your read points to what each team needs next. We deliver the
            development that moves them forward — and makes flourishing the
            default, not the exception.
          </p>
        </div>

        <div className="workshops-grid reveal">
          {WORKSHOPS.map((w) => (
            <article className={"workshop" + (w.feature ? " feature" : "")} key={w.tag}>
              {w.feature && <span className="workshop-pin">Most requested</span>}
              <div className="workshop-format">{w.format}</div>
              <h3 className="workshop-tag">{w.tag}</h3>
              <p className="workshop-lead">{w.lead}</p>
              <div className="workshop-change">{w.change}</div>
              <a href="#final" className="workshop-cta">
                Book this development
                <svg className="arrow" viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

const OBSERVATIONS = [
  { quote: "We realised the issue wasn't capability. It was exhaustion.", who: "Operations lead · heard in a Team Reset" },
  { quote: "The team stopped operating in survival mode.", who: "Engineering manager · six weeks in" },
  { quote: "We finally had language for what was happening.", who: "Founder · 30-person team" },
  { quote: "It changed how we work together, week to week. Not just that one day.", who: "People lead · quarter two" },
];

function Proof() {
  return (
    <section className="section proof">
      <div className="wrap">
        <div className="proof-head reveal">
          <span className="eyebrow"><span className="num">06</span> What teams notice</span>
          <h2 className="h-lg proof-title">
            The shift people describe isn't motivation. It's <span className="accent-ital">relief.</span>
          </h2>
        </div>
        <div className="proof-grid reveal">
          {OBSERVATIONS.map((o, i) => (
            <figure className="obs" key={i}>
              <blockquote className="obs-quote">“{o.quote}”</blockquote>
              <figcaption className="obs-who">{o.who}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { Workshops, Proof });
