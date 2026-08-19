const categories = [
  {
    label: "Tech & Operations",
    roles: [
      {
        id: 1,
        location: "Southeast US (On-site / Travel)",
        type: "Full-time",
        title: "Field Manager – Deployment Operations",
        description:
          "Leading field deployment and installation operations for a leading manufacturer of industrial equipment. Own technician coordination, multi-site conversions, deployment execution, escalation management, and operational performance to ensure seamless customer implementations and scalable field operations.",
        mailtoSubject: "Field%20Manager%20%E2%80%93%20Deployment%20Operations",
      },
    ],
  },
  {
    label: "Manufacturing & Field Operations",
    roles: [
      {
        id: 4,
        location: "Midwest US (On-site)",
        type: "Full-time",
        title: "Compliance & Safety Specialist",
        description:
          "Overseeing safety, environmental compliance, and hazardous materials programs across manufacturing and distribution operations. Ensure OSHA, DOT, and regulatory adherence while driving a strong culture of safety, training, and continuous improvement.",
        mailtoSubject: "Compliance%20%26%20Safety%20Specialist",
      },
    ],
  },
];

export default function OpenRolesSection() {
  return (
    <section className="open-roles" id="open-roles">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">Open Roles</p>
          <h2>Current search assignments</h2>
          <p>
            Active searches managed through Meridian — our recruiting and
            sourcing operating system. New mandates added regularly.
          </p>
        </div>

        {categories.map((cat) => (
          <div key={cat.label} className="roles-category">
            <h3 className="roles-category-label">{cat.label}</h3>
            <div className="roles-grid">
              {cat.roles.map((role) => (
                <article key={role.id} className="role-card">
                  <div className="role-meta">
                    <span className="role-location">{role.location}</span>
                    <span className="role-type">{role.type}</span>
                  </div>
                  <h3>{role.title}</h3>
                  <p>{role.description}</p>
                  <a
                    href={`mailto:c@myrighthire.com?subject=${role.mailtoSubject}`}
                    className="button button-primary"
                  >
                    Express Interest
                  </a>
                </article>
              ))}
            </div>
          </div>
        ))}

        <p className="roles-footer-note">
          All active searches are managed with{" "}
          <strong>Meridian</strong>-supported workflow and evaluation discipline.
          Have a mandate or want to discuss a role?{" "}
          <a href="#contact">Get in touch</a>.
        </p>
      </div>
    </section>
  );
}
