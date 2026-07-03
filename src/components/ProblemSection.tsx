export default function ProblemSection() {
  return (
    <section className="problem section-soft">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">The Challenge</p>
          <h2>Where executive searches break down.</h2>
        </div>
        <div className="problem-grid">
          <div className="problem-card">
            <strong>Searches start fuzzy</strong>
            <span>
              Vague mandates create weak sourcing and poor calibration.
            </span>
          </div>
          <div className="problem-card">
            <strong>Sourcing lacks memory</strong>
            <span>
              Market intelligence and candidate patterns disappear across tools
              and inboxes.
            </span>
          </div>
          <div className="problem-card">
            <strong>Evaluation is inconsistent</strong>
            <span>
              Decisions depend too heavily on individual style instead of
              structured evidence.
            </span>
          </div>
          <div className="problem-card">
            <strong>Workflow stalls</strong>
            <span>
              Time is lost coordinating instead of advancing the right
              candidates.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
