export default function ContactSection() {
  return (
    <section className="section-soft" id="contact">
      <div className="container contact-section-shell">
        <div className="section-heading contact-heading">
          <p className="eyebrow">Strategy Conversation</p>
          <h2>Ready to make a stronger hiring decision?</h2>
          <p>
            Whether you have an active search or want to explore how Meridian
            and Vector can reduce talent risk in your next mandate, we'd welcome
            the conversation.
          </p>
        </div>

        <aside className="contact-card">
          <a
            className="button button-primary contact-cta"
            href="mailto:c@myrighthire.com?subject=Strategy%20Conversation%20Request"
          >
            Schedule a Strategy Conversation →
          </a>

          <div className="contact-meta">
            <div>
              <strong>Email</strong>
              <span>c@myrighthire.com</span>
            </div>
            <div>
              <strong>Next step</strong>
              <span>Please schedule a call to see how Right Hire may help you.</span>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
