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
      {
        id: 2,
        location: "Southeast US (On-site)",
        type: "Full-time",
        title: "Training Manager – Technical Workforce Development",
        description:
          "Driving technical training, technician onboarding, and workforce readiness programs for a high-growth industrial equipment manufacturer. Develop scalable training curricula, certification standards, and enablement initiatives that improve field execution, deployment quality, and overall operational consistency.",
        mailtoSubject: "Training%20Manager%20%E2%80%93%20Technical%20Workforce%20Development",
      },
      {
        id: 3,
        location: "Southeast US (On-site)",
        type: "Full-time",
        title: "Project Manager – Transformation Initiatives",
        description:
          "Delivering complex cross-functional projects in a manufacturing and technology transformation environment. Own end-to-end execution, risk management, stakeholder alignment, and measurable business outcomes, with exposure to ERP implementations and operational change.",
        mailtoSubject: "Project%20Manager%20%E2%80%93%20Transformation%20Initiatives",
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
  {
    label: "Corporate & Leadership",
    roles: [
      {
        id: 5,
        location: "Southeast US (On-site)",
        type: "Full-time",
        title: "Director of Collections",
        description:
          "Leading collections strategy and a high-performing team responsible for a large accounts receivable portfolio in a manufacturing/distribution environment. Drive process improvements, cash flow performance, cross-functional collaboration, and Billing-to-Cash excellence while maintaining strong customer relationships.",
        mailtoSubject: "Director%20of%20Collections",
      },
      {
        id: 6,
        location: "Southeast US (On-site)",
        type: "Full-time",
        title: "Corporate Controller",
        description:
          "Supporting corporate accounting leadership in a growing manufacturing organization. Oversee financial close processes, GAAP reporting, internal controls, system improvements, and cross-functional collaboration to ensure accurate, timely, and compliant financial operations.",
        mailtoSubject: "Corporate%20Controller",
      },
      {
        id: 7,
        location: "Southeast US (On-site)",
        type: "Full-time",
        title: "Accounting Manager",
        description:
          "Managing day-to-day accounting operations (AP, AR, taxes, reconciliations) in a manufacturing environment. Support month-end close, cash forecasting, financial reporting, team development, and process improvements while maintaining strong internal controls.",
        mailtoSubject: "Accounting%20Manager",
      },
      {
        id: 8,
        location: "Southeast US (On-site / Hybrid)",
        type: "Full-time",
        title: "Customer Success Manager – Technology",
        description:
          "Managing long-term customer relationships and driving adoption of advanced technology solutions for a leading industrial equipment manufacturer. Serve as the primary point of contact, deliver exceptional customer experiences, gather insights for product improvement, and maximize customer value and retention.",
        mailtoSubject: "Customer%20Success%20Manager%20%E2%80%93%20Technology",
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
            Roles powered by Meridian — our proprietary recruiting and sourcing
            operating system. New mandates added regularly.
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
