export default function PlatformSection() {
  return (
    <section className="platform" id="platform">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">The Platform</p>
          <h2>Every search runs through Meridian and Vector.</h2>
        </div>
        <div className="platform-grid platform-grid-two">
          <div className="platform-card meridian">
            <span className="platform-label platform-label-meridian">Meridian</span>
            <h3>Recruiting &amp; Sourcing Operating System</h3>
            <p>
              Structured mandate intake, disciplined sourcing workflow,
              evidence-backed evaluation, and governed execution — refined
              through every active search.
            </p>
          </div>
          <div className="platform-card vector">
            <span className="platform-label platform-label-vector">Vector</span>
            <h3>Executive Talent Intelligence Layer</h3>
            <p>
              Turns recruiting activity into clear talent risk, opportunity, and
              decision visibility — giving leadership a sharper view than
              traditional search allows.
            </p>
          </div>
        </div>
        <p className="platform-note">
          Together they bring operating discipline and real visibility to
          high-consequence hiring decisions.
        </p>
      </div>
    </section>
  );
}
