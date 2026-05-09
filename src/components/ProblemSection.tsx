const problems = [
  {
    title: "Searches start fuzzy",
    desc: "Leadership roles are often defined in broad, inconsistent language that creates weak sourcing and weak calibration.",
  },
  {
    title: "Sourcing lacks memory",
    desc: "Good candidates, false positives, and learned market patterns disappear into spreadsheets, tabs, and recruiter memory.",
  },
  {
    title: "Evaluation is inconsistent",
    desc: "Candidate review depends too much on individual style instead of structured evidence and repeatable decision logic.",
  },
  {
    title: "Workflow stalls",
    desc: "Search teams lose time coordinating sourcing, review, outreach, and leadership updates instead of advancing the right people.",
  },
];

export default function ProblemSection() {
  return (
    <section className="section-soft">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">The Problem</p>
          <h2>
            Most firms still run high-value search work with fragmented tools,
            inconsistent judgment, and weak process memory.
          </h2>
        </div>

        <div className="problem-grid">
          {problems.map((problem) => (
            <article key={problem.title} className="problem-card">
              <h3>{problem.title}</h3>
              <p>{problem.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
