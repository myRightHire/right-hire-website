const workflowSteps = [
  {
    num: "1",
    title: "Clarify the mandate",
    desc: "Define what success looks like, where false positives come from, and what evidence should matter most.",
  },
  {
    num: "2",
    title: "Run the search with more rigor",
    desc: "Use structured sourcing workflow and better search definition instead of relying on loose recruiter prose and repeated guesswork.",
  },
  {
    num: "3",
    title: "Evaluate with evidence",
    desc: "Use structured candidate screening and evidence-backed review instead of inconsistent early-stage judgment.",
  },
  {
    num: "4",
    title: "Give leaders clearer visibility",
    desc: "Translate recruiting activity into better decision support around talent risk, opportunity, and search momentum.",
  },
];

export default function WorkflowSection() {
  return (
    <section className="workflow-band" id="how-it-works">
      <div className="container workflow-grid">
        <div className="workflow-copy">
          <p className="eyebrow eyebrow-accent">How It Works</p>
          <h2>
            Right Hire combines search-firm judgment with a stronger internal
            operating model.
          </h2>
          <p>
            The goal is simple: define the search clearly, reduce sourcing
            waste, evaluate candidates more consistently, and give clients a
            sharper view of who is actually worth time.
          </p>
        </div>

        <div className="workflow-steps">
          {workflowSteps.map((step) => (
            <article key={step.num} className="workflow-step">
              <div className="workflow-number">{step.num}</div>
              <div>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
