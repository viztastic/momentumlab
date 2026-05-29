/* global React */
const { useState, useEffect } = React;

function HowLogo() {
  return (
    <a href="Momentum Lab.html" className="logo" aria-label="Momentum Lab home">
      <svg className="logo-mark" viewBox="0 0 28 28" aria-hidden="true">
        <circle cx="14" cy="14" r="12.5" fill="none" stroke="var(--ink)" strokeWidth="1.4"/>
        <path d="M7 17.5 C 10 9, 13 9, 14 13.5 C 15 18, 18 18, 21 10.5" fill="none" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round"/>
      </svg>
      <span className="logo-word" style={{ color: "var(--ink)" }}>Momentum<span className="logo-lab">Lab</span></span>
    </a>
  );
}

function HowNav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 24);
    on(); window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  const links = [
    ["What it is", "#what"],
    ["The method", "#practice"],
    ["The workshop", "#workshop"],
    ["What changes", "#changes"],
  ];
  return (
    <header className={"nav" + (scrolled ? " scrolled" : "")}>
      <div className="nav-inner wrap">
        <HowLogo />
        <nav className="nav-links">
          {links.map(([l, h]) => <a key={h} href={h}>{l}</a>)}
        </nav>
        <a href="Momentum Lab.html#checkin" className="btn btn-primary nav-cta">Run the (free) check-in</a>
      </div>
    </header>
  );
}

/* ---- content data ---- */
const ISNT = [
  ["Not a motivational workshop", "The energy in the room fades. We're after what holds once it does."],
  ["Not wellbeing or therapy", "We work on how teams operate, not on individuals' inner lives."],
  ["Not generic culture consulting", "No values posters. Specific behaviours, installed and reinforced."],
];

const AUDIENCE = [
  ["Leadership teams carrying too much", "Where a few people hold the whole operation together, and everyone knows it."],
  ["Teams stuck in reactive mode", "Where the week runs the team, clarity has thinned, and trust is quietly eroding."],
  ["Organisations scaling past hero dependence", "Where growth has outpaced the systems, and resilience needs to live in more than a handful of people."],
];

const PRACTICE = [
  { n: "01", key: "Diagnose", produces: "Behavioural diagnostic + team map",
    body: "We read where each team actually sits: how activated, how connected, then locate the friction driving disengagement before it's explained away as personality." },
  { n: "02", key: "Reset", produces: "Shared operating agreement",
    body: "In a facilitated workshop, the team rebuilds trust, names the unspoken friction safely, and agrees, explicitly, how it wants to operate from here." },
  { n: "03", key: "Embed", produces: "Operating-rhythm redesign",
    body: "We install the new patterns into the real working week: meeting structures, decision ownership, reflection cadences and leadership rhythms that fit how the team works." },
  { n: "04", key: "Reinforce", produces: "Reinforcement framework + check-ins",
    body: "Scheduled check-ins at 30, 60 and 90 days, plus accountability structures that keep the change alive when operational pressure returns." },
];

const AGENDA = [
  ["Open", "Where are we, honestly?", "A shared, no-blame read on how the team is currently operating, using the behavioural map as a common language."],
  ["Surface", "What's actually in the way", "Name the friction, the unspoken tension and the patterns no one's been saying out loud, safely."],
  ["Rebuild", "How we want to work", "Agree the trust, clarity and contribution norms the team will actually commit to."],
  ["Design", "The operating rhythms", "Redesign meetings, decisions and reflection cadences so the new behaviour has somewhere to live."],
  ["Close", "What happens Monday", "Leave with concrete first moves, owners, and the reinforcement schedule already booked."],
];

const BEFORE = ["Reactive communication", "Disengaged meetings", "Leadership bottlenecks", "Invisible burnout", "Fragmented trust", "Dependence on heroic individuals"];
const AFTER = ["Healthier operating rhythms", "Clearer behavioural expectations", "Stronger team trust", "More sustainable contribution", "Momentum that scales across teams", "Reinforcement that prevents regression"];

const REINFORCE = [
  ["30 / 60 / 90-day check-ins", "Scheduled behavioural reinforcement sessions that catch drift while it's still cheap to correct."],
  ["Accountability structures", "Lightweight, psychologically safe ways to hold follow-through without fear or blame."],
  ["Reflection cadences", "Regular, low-friction checkpoints built into the operating rhythm, not bolted on."],
  ["Leadership operating reviews", "Periodic reviews of whether leadership rhythms are reinforcing or eroding momentum."],
];

const FACTS = [
  ["Engagement length", "6–12 weeks core, with ongoing reinforcement"],
  ["Workshop format", "1–2 days, in person or hybrid"],
  ["Team size", "Single teams to multi-team org rollouts"],
  ["Starting point", "A free 5-minute behavioural check-in"],
];

function HowPage() {
  useEffect(() => {
    const reveal = () => {
      const vh = window.innerHeight || 800;
      document.querySelectorAll(".reveal:not(.in)").forEach((e) => {
        if (e.getBoundingClientRect().top < vh * 0.92) e.classList.add("in");
      });
    };
    requestAnimationFrame(reveal);
    window.addEventListener("scroll", reveal, { passive: true });
    window.addEventListener("resize", reveal);
    setTimeout(() => document.querySelectorAll(".reveal").forEach((e) => e.classList.add("in")), 2600);
  }, []);

  return (
    <React.Fragment>
      <HowNav />
      <main>
        {/* intro */}
        <section className="section how-hero" id="top">
          <div className="wrap">
            <a href="Momentum Lab.html" className="how-back reveal">← Back to Momentum Lab</a>
            <span className="eyebrow reveal">How it works</span>
            <h1 className="h-display how-hero-head reveal">
              What you're actually <span className="accent-ital">installing.</span>
            </h1>
            <p className="lede how-hero-lede reveal">
              Momentum Lab installs behavioural systems and leadership rhythms that
              improve trust, resilience and sustainable contribution across teams.
              Here's exactly how an engagement works, and what your organisation
              walks away with.
            </p>
            <div className="how-hero-cta reveal">
              <a href="Momentum Lab.html#checkin" className="btn btn-primary">Run the 5-minute check-in
                <svg className="arrow" viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
              </a>
              <a href="Momentum Lab.html#workshops" className="btn btn-ghost">Book a workshop</a>
            </div>
          </div>
        </section>

        {/* what it is */}
        <section className="section how-what" id="what">
          <div className="wrap how-grid">
            <div className="how-grid-l reveal">
              <span className="eyebrow"><span className="num">01</span> What it is</span>
              <h2 className="h-lg">A behavioural operating systems company for modern organisations.</h2>
              <p className="lede">
                Most teams don't lack capability. They lack the operating patterns
                that let trust, contribution and momentum hold under pressure. We
                diagnose those patterns, reset them with the team, embed them into
                the working week, and reinforce them over time.
              </p>
            </div>
            <div className="how-isnt reveal">
              {ISNT.map(([t, d]) => (
                <div className="how-isnt-row" key={t}>
                  <h3 className="how-isnt-t">{t}</h3>
                  <p className="how-isnt-d">{d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* who it's for */}
        <section className="section how-who" id="who">
          <div className="wrap">
            <div className="how-head reveal">
              <span className="eyebrow"><span className="num">02</span> Who it's for</span>
              <h2 className="h-lg">Built for the teams holding too much together.</h2>
            </div>
            <div className="how-who-grid reveal">
              {AUDIENCE.map(([t, d], i) => (
                <div className="how-who-card" key={t}>
                  <span className="how-who-n">0{i + 1}</span>
                  <h3 className="how-who-t">{t}</h3>
                  <p className="how-who-d">{d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* methodology in practice */}
        <section className="section how-practice" id="practice">
          <div className="wrap">
            <div className="how-head reveal">
              <span className="eyebrow"><span className="num">03</span> The method in practice</span>
              <h2 className="h-lg">Four moves, run as a loop. Each one produces something real.</h2>
            </div>
            <div className="how-practice-list">
              {PRACTICE.map((p) => (
                <div className="how-step reveal" key={p.key}>
                  <div className="how-step-n">{p.n}</div>
                  <div className="how-step-main">
                    <h3 className="how-step-key">{p.key}</h3>
                    <p className="how-step-body">{p.body}</p>
                  </div>
                  <div className="how-step-produces">
                    <span className="how-step-label">Produces</span>
                    <span className="how-step-artifact">{p.produces}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* the workshop */}
        <section className="section how-workshop" id="workshop">
          <div className="wrap how-grid">
            <div className="how-workshop-intro reveal">
              <span className="eyebrow on-night"><span className="num">04</span> The workshop</span>
              <h2 className="h-lg">What actually happens in the room.</h2>
              <p className="lede">
                The Reset workshop is one to two days, facilitated. It moves a team
                from an honest read of where it is, to a concrete agreement on how
                it will operate, with the reinforcement schedule booked before
                anyone leaves.
              </p>
            </div>
            <div className="how-agenda reveal">
              {AGENDA.map(([phase, title, desc], i) => (
                <div className="how-agenda-row" key={phase}>
                  <div className="how-agenda-rail"><span className="how-agenda-dot"></span></div>
                  <div className="how-agenda-body">
                    <span className="how-agenda-phase">{phase}</span>
                    <h3 className="how-agenda-title">{title}</h3>
                    <p className="how-agenda-desc">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* what changes */}
        <section className="section how-changes" id="changes">
          <div className="wrap">
            <div className="how-head reveal">
              <span className="eyebrow"><span className="num">05</span> What changes</span>
              <h2 className="h-lg">What's different after Momentum Lab.</h2>
              <p className="lede">Not a mood lift. A measurable shift in how the organisation operates.</p>
            </div>
            <div className="how-ba reveal">
              <div className="how-ba-col before">
                <div className="how-ba-tag">Before</div>
                <ul className="how-ba-list">
                  {BEFORE.map((x) => <li key={x}>{x}</li>)}
                </ul>
              </div>
              <div className="how-ba-arrow" aria-hidden="true">
                <svg viewBox="0 0 40 24" width="40" height="24" fill="none" stroke="var(--accent)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M4 12h30M27 5l7 7-7 7"/></svg>
              </div>
              <div className="how-ba-col after">
                <div className="how-ba-tag accent">After</div>
                <ul className="how-ba-list">
                  {AFTER.map((x) => <li key={x}>{x}</li>)}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* reinforcement */}
        <section className="section how-reinforce" id="reinforce">
          <div className="wrap">
            <div className="how-head reveal">
              <span className="eyebrow"><span className="num">06</span> Reinforcement</span>
              <h2 className="h-lg">How the change survives operational pressure.</h2>
              <p className="lede">Most workshops fade because nothing holds them. These are the mechanisms that do.</p>
            </div>
            <div className="how-reinforce-grid reveal">
              {REINFORCE.map(([t, d], i) => (
                <div className="how-reinforce-card" key={t}>
                  <span className="how-reinforce-n">{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="how-reinforce-t">{t}</h3>
                  <p className="how-reinforce-d">{d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* facts + CTA */}
        <section className="section how-facts">
          <div className="wrap">
            <div className="how-facts-grid reveal">
              {FACTS.map(([k, v]) => (
                <div className="how-fact" key={k}>
                  <span className="how-fact-k">{k}</span>
                  <span className="how-fact-v">{v}</span>
                </div>
              ))}
            </div>
            <div className="how-final reveal">
              <h2 className="h-xl">Momentum is not a <span className="accent-ital">personality trait.</span></h2>
              <p className="final-sub">It's built: diagnosed, installed and reinforced. Start with a five-minute read of where your teams stand.</p>
              <div className="final-cta">
                <a href="Momentum Lab.html#checkin" className="btn btn-primary">Run the 5-minute check-in
                  <svg className="arrow" viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
                </a>
                <a href="Momentum Lab.html#workshops" className="btn btn-ghost">Book a workshop</a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="wrap footer-inner">
          <div className="footer-brand">
            <a href="Momentum Lab.html" className="logo" aria-label="Momentum Lab home">
              <svg className="logo-mark" viewBox="0 0 28 28" aria-hidden="true">
                <circle cx="14" cy="14" r="12.5" fill="none" stroke="var(--on-night-2)" strokeWidth="1.4"/>
                <path d="M7 17.5 C 10 9, 13 9, 14 13.5 C 15 18, 18 18, 21 10.5" fill="none" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round"/>
              </svg>
              <span className="logo-word" style={{ color: "var(--on-night)" }}>Momentum<span className="logo-lab">Lab</span></span>
            </a>
            <p className="footer-tagline">A behavioural operating system for modern teams.</p>
            <a href="Momentum Lab.html#checkin" className="btn btn-primary footer-btn">Run the (free) check-in</a>
          </div>
          <div className="footer-cols">
            <div className="footer-col">
              <div className="footer-col-title">This page</div>
              <a href="#what">What it is</a>
              <a href="#practice">The method</a>
              <a href="#workshop">The workshop</a>
              <a href="#changes">What changes</a>
            </div>
            <div className="footer-col">
              <div className="footer-col-title">Momentum Lab</div>
              <a href="Momentum Lab.html#problem">The problem</a>
              <a href="Momentum Lab.html#method">The method</a>
              <a href="Momentum Lab.html#workshops">Workshops</a>
            </div>
            <div className="footer-col">
              <div className="footer-col-title">Start</div>
              <a href="Momentum Lab.html#checkin">The check-in</a>
              <a href="Momentum Lab.html#final">Get in touch</a>
            </div>
          </div>
        </div>
        <div className="wrap footer-fine">
          <span>© 2026 Momentum Lab</span>
          <span>Behavioural systems · Organisational health · Sustainable performance</span>
        </div>
      </footer>
    </React.Fragment>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<HowPage />);
