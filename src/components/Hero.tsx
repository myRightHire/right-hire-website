const heroCards = [
  {
    num: "01",
    title: "Specialized Judgment",
    desc: "Focused exclusively on leadership roles where weak hires are catastrophically expensive.",
  },
  {
    num: "02",
    title: "Meridian OS",
    desc: "End-to-end recruiting operating system — definition through governed execution.",
  },
  {
    num: "03",
    title: "Vector Intelligence",
    desc: "Leadership-facing layer that surfaces talent risk, momentum, and priority.",
  },
];

const heroBullets = [
  "Leadership & executive search in complex technical domains",
  "Meridian: Structured sourcing, workflow & evidence system",
  "Vector: Real-time talent risk & executive decision intelligence",
];

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">Right Hire + Meridian + Vector</p>
          <h1>
            Executive search for advanced technology and manufacturing, powered
            by systems-level rigor.
          </h1>
          <p className="hero-tagline">The Right Talent. The Right Impact.</p>
          <p className="hero-lead">
            Specialized search judgment fused with Meridian (recruiting
            operating system) and Vector (leadership decision layer).
          </p>
          <p className="hero-kicker">STRATEGY. INSIGHT. RESULTS.</p>

          <div className="hero-actions">
            <a
              className="button button-primary"
              href="mailto:c@myrighthire.com?subject=Right%20Hire%20Demo%20Request"
            >
              Request a Demo
            </a>
            <a className="button button-secondary" href="#platform">
              Explore the Platform
            </a>
          </div>

          <ul className="hero-bullets">
            {heroBullets.map((item) => (
              <li key={item}>
                <span aria-hidden="true">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="hero-side">
          <div className="hero-note">
            <p className="hero-note-eyebrow">What makes Right Hire different</p>
            <h2>Search-firm judgment with system-level rigor behind it.</h2>
            <p>
              We still believe high-stakes hiring is a judgment business. The
              edge comes from systems that remove ambiguity in definition,
              sourcing, and decision-making.
            </p>
          </div>

          <div className="hero-metrics">
            {heroCards.map((card) => (
              <article key={card.num} className="hero-metric-card">
                <div className="hero-metric-num">{card.num}</div>
                <h3>{card.title}</h3>
                <p>{card.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
