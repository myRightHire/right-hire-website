const steps = [
  {
    num: "1",
    title: "Clarify the Mandate",
    desc: "Define success, risks, and what evidence matters most.",
  },
  {
    num: "2",
    title: "Source with Precision",
    desc: "Structured workflow and market intelligence replace guesswork.",
  },
  {
    num: "3",
    title: "Evaluate with Evidence",
    desc: "Consistent, structured review that surfaces real fit — not impressions.",
  },
  {
    num: "4",
    title: "Deliver Leadership Visibility",
    desc: "Translate search progress into clear, actionable insight for executives.",
  },
];

export default function WorkflowSection() {
  return (
    <section className="workflow" id="how-it-works">
      <div className="container">
        <div className="section-heading workflow-copy">
          <p className="eyebrow">Our Process</p>
          <h2>A sharper way to run executive search.</h2>
          <p>
            A disciplined operating approach that clarifies the mandate,
            sharpens sourcing, and preserves evidence as the search advances.
          </p>
        </div>
        <div className="workflow-steps">
          {steps.map((step) => (
            <div key={step.num} className="workflow-step">
              <div className="workflow-number">{step.num}</div>
              <div>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
