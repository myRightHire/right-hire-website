import ContactSection from "../components/ContactSection";
import DifferenceSection from "../components/DifferenceSection";
import FAQSection from "../components/FAQSection";
import FocusSection from "../components/FocusSection";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import PlatformSection from "../components/PlatformSection";
import ProblemSection from "../components/ProblemSection";
import ProofSection from "../components/ProofSection";
import WorkflowSection from "../components/WorkflowSection";

type PolicyType = "privacy" | "terms";

export default function App() {
  const path =
    typeof window !== "undefined"
      ? window.location.pathname.replace(/\/+$/, "") || "/"
      : "/";

  if (path === "/privacy") {
    return <PolicyPage type="privacy" />;
  }

  if (path === "/terms") {
    return <PolicyPage type="terms" />;
  }

  return (
    <div className="site-shell">
      <Header />
      <main>
        <Hero />
        <FocusSection />
        <ProblemSection />
        <PlatformSection />
        <WorkflowSection />
        <DifferenceSection />
        <ProofSection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

function PolicyPage({ type }: { type: PolicyType }) {
  const isPrivacy = type === "privacy";

  return (
    <div className="site-shell">
      <Header />
      <main className="policy-page">
        <div className="container">
          <div className="policy-card">
            <p className="eyebrow">{isPrivacy ? "Privacy" : "Terms"}</p>
            <h1>{isPrivacy ? "Privacy Statement" : "Terms of Use"}</h1>
            <p className="policy-intro">
              {isPrivacy
                ? "Right Hire respects your privacy. This page explains, at a high level, what information we collect, how we use it, and how to contact us with questions."
                : "These terms explain the basic rules for using Right Hire websites, demos, and related materials."}
            </p>

            {isPrivacy ? (
              <div className="policy-sections">
                <section>
                  <h2>Information we may collect</h2>
                  <p>
                    We may collect information you choose to share with us,
                    including your name, email address, company details, and
                    information related to recruiting or demo inquiries.
                  </p>
                </section>
                <section>
                  <h2>How we use information</h2>
                  <p>
                    We use information to respond to inquiries, schedule
                    conversations, provide demos, improve our services, and
                    support recruiting and talent-related workflows.
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
                    Content is provided for general information. Demo materials,
                    recruiting workflows, and product availability may change
                    over time.
                  </p>
                </section>
                <section>
                  <h2>Intellectual property</h2>
                  <p>
                    Right Hire, Meridian, Vector, and related content, branding,
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
