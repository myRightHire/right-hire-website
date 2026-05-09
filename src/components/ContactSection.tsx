export default function ContactSection() {
  return (
    <section className="section-soft" id="contact">
      <div className="container contact-section-shell">
        <div className="section-heading contact-heading">
          <p className="eyebrow">Start a Conversation</p>
          <h2>Ready to discuss a leadership or executive search mandate?</h2>
          <p>
            Whether you have an active search or want to explore how Meridian
            and Vector can strengthen your talent process, we'd welcome the
            conversation.
          </p>
        </div>

        <aside className="contact-card">
          <a
            className="button button-primary contact-cta"
            href="mailto:c@myrighthire.com?subject=Right%20Hire%20Demo%20Request"
          >
            Request Executive Search Brief →
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
