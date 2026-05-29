/* global React, Logo */

const FINAL_COPY = {
  A: { head: ["Momentum is not a", ["personality", " trait."]] },
  B: { head: ["Healthy teams aren't", ["lucky", " teams."]] },
};

function FinalCTA({ variant = "A" }) {
  const c = FINAL_COPY[variant] || FINAL_COPY.A;
  return (
    <section className="section final" id="final">
      <div className="wrap final-inner reveal">
        <h2 className="h-display final-head">
          {c.head[0]} <span className="accent-ital">{c.head[1][0]}</span>{c.head[1][1]}
        </h2>
        <p className="final-sub">
          Sustainable performance is systemic. It's shaped by operating patterns,
          reinforced over time, and built so an organisation never depends entirely
          on its heroes. Start with a five-minute read.
        </p>
        <div className="final-cta">
          <a href="#checkin" className="btn btn-primary">
            Run the 5-minute check-in
            <svg className="arrow" viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
          </a>
          <a href="#workshops" className="btn btn-ghost">Book a workshop</a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  const cols = [
    ["Explore", [["The problem", "#problem"], ["The method", "#method"], ["The check-in", "#checkin"], ["Workshops", "#workshops"]]],
    ["Workshops", [["Team Reset", "#workshops"], ["Leadership Enablement", "#workshops"], ["Performance Systems", "#workshops"]]],
    ["Company", [["How it works", "How It Works.html"], ["The method", "#method"], ["Get in touch", "#final"]]],
  ];
  return (
    <footer className="footer">
      <div className="wrap footer-inner">
        <div className="footer-brand">
          <Logo night />
          <p className="footer-tagline">
            A behavioural operating system for modern teams. We help organisations
            correct behavioural drift before disengagement becomes culture.
          </p>
          <a href="#checkin" className="btn btn-primary footer-btn">Run the (free) check-in</a>
        </div>
        <div className="footer-cols">
          {cols.map(([title, links]) => (
            <div className="footer-col" key={title}>
              <div className="footer-col-title">{title}</div>
              {links.map(([label, href]) => <a key={label + href} href={href}>{label}</a>)}
            </div>
          ))}
        </div>
      </div>
      <div className="wrap footer-fine">
        <span>© 2026 Momentum Lab</span>
        <span>Behavioural systems · Organisational health · Sustainable performance</span>
      </div>
    </footer>
  );
}

Object.assign(window, { FinalCTA, Footer, FINAL_COPY });
