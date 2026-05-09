const services = [
  {
    title: "Executive Hiring",
    desc: "Leadership and executive search where weak definition, sourcing, or evaluation creates expensive downstream mistakes.",
  },
  {
    title: "Technical Talent",
    desc: "Specialized hiring in advanced technology and manufacturing where technical depth, talent scarcity, and execution pressure demand sharper search rigor.",
  },
  {
    title: "Scalable TA Systems",
    desc: "Enterprise talent acquisition infrastructure powered by Meridian and Vector to bring operational discipline and leadership visibility to recruiting.",
  },
];

export default function FocusSection() {
  return (
    <section id="focus">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">Our Services</p>
          <h2>Three pillars of talent excellence</h2>
          <p>
            We deliver specialized search and scalable talent systems across
            executive hiring, technical talent, and enterprise TA
            infrastructure.
          </p>
        </div>

        <div className="focus-grid">
          {services.map((service) => (
            <article key={service.title} className="focus-card">
              <div className="service-icon" aria-hidden="true">
                ✓
              </div>
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
