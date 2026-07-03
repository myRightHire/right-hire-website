import heroLatticeImage from "../assets/Vwi3G.jpg";

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="container hero-shell">
        <div
          className="hero-lattice-background"
          aria-hidden="true"
          style={{ backgroundImage: `url(${heroLatticeImage})` }}
        />
        <div className="hero-copy">
          <p className="eyebrow">Specialized Executive Search</p>
          <h1>Leadership hiring that reduces talent risk.</h1>
          <p className="hero-lead">
            Right Hire is a specialized search firm for advanced technology and
            manufacturing, strengthened by Meridian + Vector — our internal
            talent operating system, refined through every real-world mandate.
          </p>
          <div className="hero-actions">
            <a
              className="button button-primary"
              href="mailto:c@myrighthire.com?subject=Strategy%20Conversation%20Request"
            >
              Schedule a Strategy Conversation
            </a>
            <a className="button button-secondary" href="#platform">
              Explore Our Approach
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
