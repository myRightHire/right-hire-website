const differences = [
  {
    title: "Search-firm judgment",
    desc: "We still believe leadership and executive hiring is a high-judgment business that requires market understanding and human rigor.",
  },
  {
    title: "Systems behind the search",
    desc: "Meridian and Vector give us a stronger way to define searches, preserve evidence, and maintain operational discipline.",
  },
  {
    title: "Evidence over impression",
    desc: "Structured evaluations, sourcing signals, and workflow memory create a more defensible view of who is worth time.",
  },
  {
    title: "Leadership visibility",
    desc: "Vector gives the executive layer a clearer read on talent decisions instead of leaving recruiting truth trapped inside operator workflow.",
  },
];

export default function DifferenceSection() {
  return (
    <section id="difference">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">Why Right Hire</p>
          <h2>
            This is not generic recruiting services and not generic recruiting
            software.
          </h2>
        </div>

        <div className="difference-grid">
          {differences.map((item) => (
            <article key={item.title} className="difference-card">
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
