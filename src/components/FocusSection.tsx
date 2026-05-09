const services = [
  {
    title: "Focus",
    desc: "Executive search expertise, centered on operational evidence, clarity, and better selection discipline.",
  },
  {
    title: "Platform",
    desc: "Meridian and Vector provide the systems layer behind sharper recruiting execution and clearer leadership visibility.",
  },
  {
    title: "Process",
    desc: "A structured workflow for mandate definition, sourcing precision, evidence capture, and momentum management.",
  },
  {
    title: "Difference",
    desc: "Not search alone and not software alone. The edge is the combination of judgment, method, and visibility.",
  },
];

export default function FocusSection() {
  return (
    <section className="overview-band" id="focus">
      <div className="container">
        <div className="overview-grid">
          {services.map((service) => (
            <article key={service.title} className="focus-card">
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
