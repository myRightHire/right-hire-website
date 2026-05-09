const heroBullets = [
  "Executive search expertise for high-consequence leadership hiring",
  "Meridian and Vector add systems-level rigor behind every mandate",
  "Built for advanced technology and manufacturing organizations",
];

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="container">
        <div className="hero-shell">
          <div className="hero-grid">
            <div className="hero-copy">
              <p className="eyebrow hero-eyebrow">Right Hire + Meridian + Vector</p>
              <h1>Right Hire</h1>
              <p className="hero-subtitle">Executive Search &amp; Selection</p>
              <p className="hero-lead">
                High-judgment search, strengthened by Meridian and Vector, for
                organizations that need stronger signal, stronger calibration,
                and stronger talent decisions.
              </p>
              <p className="hero-kicker">The Right Talent. The Right Impact.</p>

              <div className="hero-actions">
                <a
                  className="button button-primary"
                  href="mailto:c@myrighthire.com?subject=Right%20Hire%20Demo%20Request"
                >
                  Request a Demo
                </a>
                <a className="button button-secondary hero-secondary" href="#focus">
                  Explore the Framework
                </a>
              </div>

              <ul className="hero-bullets">
                {heroBullets.map((item) => (
                  <li key={item}>
                    <span aria-hidden="true">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="hero-visual-wrap" aria-hidden="true">
              <svg
                className="hero-lattice"
                viewBox="0 0 700 620"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <radialGradient
                    id="heroGlow"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(358 282) rotate(90) scale(258 286)"
                  >
                    <stop stopColor="rgba(255,249,239,0.95)" />
                    <stop offset="1" stopColor="rgba(255,249,239,0)" />
                  </radialGradient>
                </defs>

                <circle cx="370" cy="285" r="244" fill="url(#heroGlow)" />
                <g stroke="rgba(49,34,22,0.38)" strokeWidth="1.15">
                  {Array.from({ length: 24 }).map((_, i) => {
                    const offset = i * 18;
                    return (
                      <path
                        key={`mesh-a-${offset}`}
                        d={`M ${168 + offset} 38 C ${472 + offset * 0.16} 132, ${461 - offset * 0.85} 454, ${186 + offset * 0.22} 580`}
                      />
                    );
                  })}
                  {Array.from({ length: 23 }).map((_, i) => {
                    const offset = i * 18;
                    return (
                      <path
                        key={`mesh-b-${offset}`}
                        d={`M 644 ${130 + offset} C 518 ${98 + offset * 0.08}, 245 ${160 - offset * 0.48}, 92 ${430 - offset * 0.25}`}
                      />
                    );
                  })}
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
