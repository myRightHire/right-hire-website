export default function PlatformSection() {
  return (
    <section className="platform" id="platform">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">The Platform</p>
          <h2>Right Hire runs every search through Meridian and Vector.</h2>
        </div>
        <div className="platform-grid platform-grid-two">
          <div className="platform-card meridian">
            <span className="platform-label platform-label-meridian">Meridian</span>
            <h3>AI-Assisted Recruiting &amp; Sourcing Operating System</h3>
            <p>
              Structured search definition, AI-assisted sourcing workflow,
              evidence-backed evaluation, and governed execution.
            </p>
          </div>
          <div className="platform-card vector">
            <span className="platform-label platform-label-vector">Vector</span>
            <h3>AI-Native Executive Intelligence Layer</h3>
            <p>
              Turns recruiting activity into clear talent risk, opportunity, and
              decision visibility for leadership through an AI-native decision
              layer.
            </p>
          </div>
        </div>
        <p className="platform-note">
          Together they create an AI-assisted, defensible, repeatable advantage
          in high-stakes hiring.
        </p>
      </div>
    </section>
  );
}
