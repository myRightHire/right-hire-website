import Header from "../components/Header";
import Footer from "../components/Footer";
import founderPhoto from "../assets/chris-dempsey.jpg";
type PolicyType = "privacy" | "terms";
const contact = "mailto:c@myrighthire.com?subject=Discuss%20a%20search";
const models = [
  {name:"Contingent", tag:"For a defined individual hire", body:"Market access and focused recruiting for well-qualified individual roles.", details:"Success-based fee on placement.", fit:"A clear brief and a single hiring need."},
  {name:"Retained Search", tag:"Dedicated search partnership", body:"A named recruiter, reserved capacity, and direct founder involvement on every retained search.", details:"Defined scope and milestone-based fees.", fit:"A consequential hire that needs dedicated focus."},
  {name:"Recruiting Managed Services", tag:"An extension of your team", body:"Embedded recruiting capability for ongoing or multi-role needs, without adding permanent headcount.", details:"Reserved capacity, a reporting rhythm, stakeholder management, and consistent process ownership.", fit:"Sustained hiring needs that require continuity."},
];
export default function App() {
  const path = window.location.pathname.replace(/\/+$/, "") || "/";
  if (path === "/privacy" || path === "/terms") return <PolicyPage type={path.slice(1) as PolicyType} />;
  return <div className="site-shell rh-v2" id="top">
    <Header />
    <main id="main-content">
      <section className="v2-hero"><div className="container">
        <h1>Specialized recruiting for technology and manufacturing companies.</h1>
        <p className="v2-lede">Right Hire works with a small number of clients at a time — so every search gets a named recruiter, reserved capacity, and direct founder involvement.</p>
        <a className="button button-primary" href={contact}>Discuss a search <span aria-hidden="true">↗</span></a>
      </div></section>
      <section className="v2-proof" aria-labelledby="proof-title"><div className="container"><h2 className="v2-proof-heading" id="proof-title">Metrics from Recent Technology Client Engagement</h2><p className="v2-proof-context">Delivered under real deadline pressure for a technology client scaling critical post-sale and service capacity.</p><div className="v2-metrics"><div><strong>20</strong><h3>Accepted Offers</h3></div><div><strong>29<span> days</span></strong><h3>Time-to-Fill</h3><p>average, requisition to acceptance</p></div><div><strong>70<span>%</span></strong><h3>% of Presented Candidates Interviewed</h3></div></div></div></section>
      <section id="engagement-models"><div className="container"><div className="v2-section-head"><div><h2>The right level<br/>of partnership.</h2></div></div><div className="v2-models">{models.map((m,i)=><article className={i===1?"v2-model featured":"v2-model"} key={m.name}><p className="eyebrow">{m.tag}</p><h3>{m.name}</h3><p>{m.body}</p><p className="v2-model-details">{m.details}</p><div className="v2-fit"><strong>Best for</strong><p>{m.fit}</p></div><a href={`mailto:c@myrighthire.com?subject=${encodeURIComponent("Discuss " + m.name)}`}>Talk about this model <span aria-hidden="true">↗</span></a></article>)}</div></div></section>
      <section className="v2-soft" id="who-this-is-for"><div className="container"><h2>Built for the people<br/>who own the hire.</h2><div className="v2-buyers">{[["TA / HR leaders","Coordination that makes your work easier.","Clean handoffs, consistent reporting, and stakeholder management from a partner who reduces noise."],["Business leaders","A shortlist grounded in the actual work.","We clarify what the hire needs to accomplish, then focus the search and evaluation on that reality."],["Procurement / Finance","A clearly defined engagement.","Defined scope, a transparent fee structure, and a measurable process you can follow."]].map(([title,headline,body])=><article key={title}><p className="eyebrow">{title}</p><h3>{headline}</h3><p>{body}</p></article>)}</div></div></section>
      <section id="difference"><div className="container v2-split"><div><h2>Deliberately small.<br/>High judgment.<br/><em>Hands-on.</em></h2></div><div className="v2-prose"><p>We keep the relationship close and the work focused. On retained and RMS engagements, you have a named recruiter with reserved capacity and the founder directly involved.</p><p>Our focus is technology and manufacturing companies, with core roles in Customer Success, Account Management, and technical service and support.</p><p>You get operating discipline, clear communication, and personal ownership of the search.</p><a className="v2-text-link" href="#about">Meet the founder <span aria-hidden="true">↗</span></a></div></div></section>
      <section className="v2-process" id="how-it-works"><div className="container"><h2>Clarity first. Follow-through throughout.</h2><ol className="v2-steps">{[["Role clarity","Define the work, the success profile, and the expectations."],["Focused search","Bring dedicated focus, with reserved capacity on retained and RMS engagements."],["Structured evaluation","Evaluate consistently and keep stakeholders aligned."],["Offer & handoff","Support the offer and make the transition clear."]].map(([title,body],i)=><li key={title}><span>0{i+1}</span><h3>{title}</h3><p>{body}</p></li>)}</ol><p className="v2-process-note">We track every search in our own system so nothing falls through the cracks.</p></div></section>
      <section id="about"><div className="container v2-split"><div><h2>Chris Dempsey</h2><p className="v2-founder-title">Founder</p><p className="v2-founder-caption">Nearly 30 years in recruiting.<br/>Still close to the work.</p><img className="v2-founder-photo" src={founderPhoto} alt="Chris Dempsey, Founder of Right Hire" /></div><div className="v2-prose"><p>Chris brings nearly three decades of recruiting experience to Right Hire, including TA leadership at Sourcefire prior to its acquisition by Cisco, building recruiting capability during Cisco’s Professional Services-to-CX transition, recruiting leadership at Norsk Hydro Aluminum, and TA leadership at Wind River.</p><p>That experience informs a practical, hands-on approach to each engagement: understand the business, clarify the hire, and stay involved.</p><div className="v2-career">Norsk Hydro Aluminum <span>·</span> Sourcefire <span>·</span> Cisco <span>·</span> Wind River</div></div></div></section>
      <section className="v2-contact" id="contact"><div className="container"><p className="eyebrow">LET’S TALK ABOUT THE WORK</p><h2>Ready to discuss a search<br/>or an RMS engagement?</h2><p>No pitch deck. Just a clear discussion about the roles you need to fill.</p><a className="button" href={contact}>Schedule a conversation <span aria-hidden="true">↗</span></a><a className="v2-email" href="mailto:c@myrighthire.com">c@myrighthire.com</a></div></section>
    </main><Footer />
  </div>;
}

function PolicyPage({ type }: { type: PolicyType }) {
  const isPrivacy = type === "privacy";

  return (
    <div className="site-shell">
      <Header />
      <main className="policy-page" id="main-content">
        <div className="container">
          <div className="policy-card">
            <p className="eyebrow">{isPrivacy ? "Privacy" : "Terms"}</p>
            <h1>{isPrivacy ? "Privacy Statement" : "Terms of Use"}</h1>
            <p className="policy-intro">
              {isPrivacy
                ? "Right Hire respects your privacy. This page explains, at a high level, what information we collect, how we use it, and how to contact us with questions."
                : "These terms explain the basic rules for using Right Hire websites and related materials."}
            </p>

            {isPrivacy ? (
              <div className="policy-sections">
                <section>
                  <h2>Information we may collect</h2>
                  <p>
                    We may collect information you choose to share with us,
                    including your name, email address, company details, and
                    information related to recruiting inquiries.
                  </p>
                </section>
                <section>
                  <h2>How we use information</h2>
                  <p>
                    We use information to respond to inquiries, schedule
                    conversations, improve our services, and
                    support recruiting and talent-related workflows.
                  </p>
                </section>
                <section>
                  <h2>Website analytics and intelligence tools</h2>
                  <p>
                    We use third-party tools to understand how our website is
                    used and to identify companies that visit our site. These
                    tools may collect information such as IP addresses and
                    browsing activity on this site. They do not collect personal
                    information beyond what you choose to share with us directly.
                  </p>
                </section>
                <section>
                  <h2>Sharing and protection</h2>
                  <p>
                    We do not sell personal information. We may use trusted
                    service providers to operate our website and systems, and we
                    take reasonable steps to protect information shared with us.
                  </p>
                </section>
                <section>
                  <h2>Contact</h2>
                  <p>
                    For privacy questions, contact{" "}
                    <a href="mailto:c@myrighthire.com">c@myrighthire.com</a>.
                  </p>
                </section>
              </div>
            ) : (
              <div className="policy-sections">
                <section>
                  <h2>Permitted use</h2>
                  <p>
                    You may use this website and related materials for lawful
                    business evaluation, communication, and informational
                    purposes.
                  </p>
                </section>
                <section>
                  <h2>No guarantee</h2>
                  <p>
                    Content is provided for general information. Recruiting services and related materials may change
                    over time.
                  </p>
                </section>
                <section>
                  <h2>Intellectual property</h2>
                  <p>
                    Right Hire and related content, branding,
                    and materials remain the property of Right Hire unless
                    otherwise stated.
                  </p>
                </section>
                <section>
                  <h2>Contact</h2>
                  <p>
                    Questions about these terms can be sent to{" "}
                    <a href="mailto:c@myrighthire.com">c@myrighthire.com</a>.
                  </p>
                </section>
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
