/* global React */

const PRINCIPLES = [
  ["Reduce hero dependence", "Stop relying on a few exceptional people running permanently hot."],
  ["Scale trust & momentum", "Build the conditions for contribution to grow across the whole team."],
  ["Make sustainable the default", "Healthier operating patterns, reinforced. Not heroics, repeated."],
];

function Belief() {
  return (
    <section className="section belief" id="belief">
      <div className="wrap belief-inner">
        <span className="eyebrow reveal">What we believe</span>
        <h2 className="h-xl belief-statement reveal">
          Healthy systems outperform <span className="accent-ital">heroic cultures</span> over time.
        </h2>
        <p className="belief-body reveal">
          The strongest organisations aren't the ones that extract the most from a
          few people under constant pressure. They're the ones that build systems
          where trust, contribution and momentum scale across the whole team, so
          performance doesn't depend on who's running hottest this quarter.
        </p>
        <div className="belief-principles reveal">
          {PRINCIPLES.map(([title, desc], i) => (
            <div className="belief-principle" key={title}>
              <span className="belief-n">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="belief-p-title">{title}</h3>
              <p className="belief-p-desc">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { Belief });
