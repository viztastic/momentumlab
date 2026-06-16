/* global React, MomentumMatrix */

function Method() {
  return (
    <section className="section method" id="method">
      <div className="wrap">
        <div className="method-intro reveal">
          <span className="eyebrow">The destination</span>
          <h2 className="h-xl">
            Move every person toward becoming a <span className="accent-ital">flourishing contributor.</span>
          </h2>
          <p className="lede">
            We mark where each person stands today, then point to the
            development that moves them forward — until flourishing is the norm across
            the team, not the privilege of a few.
          </p>
        </div>

        {/* before / after the shift */}
        <div className="contrast reveal">
          <div className="contrast-col fade">
            <div className="contrast-tag">Before</div>
            <ul className="contrast-list">
              <li>Reactive weeks that run the team</li>
              <li>Meetings that drain more than they decide</li>
              <li>Trust thinning, friction left unspoken</li>
              <li>The whole operation resting on a few people</li>
            </ul>
          </div>
          <div className="contrast-col keep">
            <div className="contrast-tag accent">After</div>
            <ul className="contrast-list">
              <li>Clear ownership and a week the team controls</li>
              <li>Sharper decisions, fewer reactive scrambles</li>
              <li>Trust and contribution that scale past the few</li>
              <li>Momentum that holds when pressure returns</li>
            </ul>
          </div>
        </div>

        {/* interactive matrix */}
        <div className="matrix-block reveal">
          <div className="matrix-head">
            <span className="eyebrow">The diagnostic</span>
            <h3 className="h-lg">See where every person stands.</h3>
            <p className="lede">
              Two readings: how activated a person is, and how oriented they are
              toward others. Six states, from drained and reactive to flourishing
              contributor. <strong>Click any</strong> to explore.
            </p>
          </div>
          <MomentumMatrix />
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { Method });
