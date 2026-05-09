export default function FocusSection() {
  return (
    <section className="focus" id="focus">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">Search Focus</p>
          <h2>Built for high-consequence leadership and executive roles.</h2>
          <p>We focus where weak search judgment is most expensive.</p>
        </div>
        <div className="focus-grid">
          <div className="focus-card">
            <div className="service-icon" aria-hidden="true">
              👔
            </div>
            <h3>Leadership &amp; Executive Search</h3>
            <p>
              Critical hires where clarity, precision, and cultural fit
              determine long-term success.
            </p>
          </div>
          <div className="focus-card">
            <div className="service-icon" aria-hidden="true">
              ⚡
            </div>
            <h3>Advanced Technology</h3>
            <p>
              Complex, fast-evolving environments where technical depth and
              talent scarcity demand sharper execution.
            </p>
          </div>
          <div className="focus-card">
            <div className="service-icon" aria-hidden="true">
              🏭
            </div>
            <h3>Advanced Manufacturing</h3>
            <p>
              Operational leadership roles where domain context, execution
              strength, and reliability matter most.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
