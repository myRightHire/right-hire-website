const industries = [
  "Advanced Manufacturing",
  "Industrial Equipment",
  "Defense & Aerospace Technology",
  "Supply Chain & Logistics",
  "Technical Operations",
  "Clean Energy & Infrastructure",
  "Emerging Technology",
  "Distribution & Field Operations",
];

export default function WhoWeServeSection() {
  return (
    <section className="who-we-serve section-soft">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">Who We Serve</p>
          <h2>Built for companies where the wrong hire is costly.</h2>
          <p>
            CEOs, COOs, and CHROs in advanced technology and manufacturing trust
            Right Hire when high-consequence leadership decisions cannot afford
            to be wrong.
          </p>
        </div>
        <div className="industry-tags">
          {industries.map((industry) => (
            <span key={industry} className="industry-tag">
              {industry}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
