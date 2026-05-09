const platformItems = [
  {
    num: "01",
    title: "Meridian: Search definition and sourcing workflow",
    desc: "Structured search definition, sourcing workflow, candidate review, pipeline movement, outreach preparation, and governed recruiter execution.",
  },
  {
    num: "02",
    title: "Meridian: Candidate evaluation",
    desc: "Structured candidate screening, evidence-backed evaluation, fit review, and workflow support for moving the right candidates forward.",
  },
  {
    num: "03",
    title: "Vector: Leadership decision visibility",
    desc: "Executive-facing interpretation of talent risk, opportunity, and what deserves attention now.",
  },
  {
    num: "04",
    title: "Shared trust layer",
    desc: "Structured evidence, governance awareness, audit visibility, and more disciplined talent decisions across the workflow.",
  },
];

export default function PlatformSection() {
  return (
    <section id="platform">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">The Platform</p>
          <h2>Right Hire runs search through Meridian and Vector.</h2>
          <p>
            The firm is supported by two connected systems. Meridian powers
            recruiting and sourcing execution. Vector helps leadership see
            talent risk, opportunity, and decision priority more clearly.
          </p>
        </div>

        <div className="platform-grid">
          {platformItems.map((item) => (
            <article key={item.num} className="platform-card">
              <span className="platform-num">{item.num}</span>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
