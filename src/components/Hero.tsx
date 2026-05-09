import heroLatticeImage from "../assets/SCc3a.jpg";

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
          <p className="eyebrow">Executive Search, Sharpened by Systems</p>
          <h1>Leadership hiring in advanced tech &amp; manufacturing.</h1>
          <p className="hero-lead">
            Powered by Meridian + Vector — our proprietary operating system that
            brings search-firm judgment and systems-level rigor to every
            mandate.
          </p>
          <div className="hero-actions">
            <a
              className="button button-primary"
              href="mailto:c@myrighthire.com?subject=Executive%20Search%20Brief%20Request"
            >
              Request Executive Search Brief
            </a>
            <a className="button button-secondary" href="#platform">
              See the Platform
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
