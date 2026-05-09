const proofTags = [
  "Executive and leadership search",
  "Advanced technology",
  "Advanced manufacturing",
  "Technical and technical-adjacent hiring",
  "Organizations that need stronger recruiting operating discipline",
  "Teams that want better talent decision visibility",
];

export default function ProofSection() {
  return (
    <section className="section-soft">
      <div className="container proof-layout">
        <div className="section-heading proof-heading">
          <p className="eyebrow">Who This Is For</p>
          <h2>
            Built for organizations that need stronger search judgment in
            hard-to-fill, high-consequence hiring.
          </h2>
        </div>

        <div className="proof-tags">
          {proofTags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
