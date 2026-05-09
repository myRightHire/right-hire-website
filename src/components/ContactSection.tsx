export default function ContactSection() {
  return (
    <section className="section-soft" id="contact">
      <div className="container contact-layout">
        <div className="section-heading contact-heading">
          <p className="eyebrow">Contact</p>
          <h2>Discuss a leadership or executive search mandate.</h2>
          <p>
            We work best with organizations that value judgment and operating
            discipline in high-consequence hiring.
          </p>
        </div>

        <aside className="contact-card">
          <a
            className="button button-primary contact-cta"
            href="mailto:c@myrighthire.com?subject=Right%20Hire%20Demo%20Request"
          >
            Request a Demo
          </a>

          <div className="contact-meta">
            <div>
              <strong>Email</strong>
              <span>c@myrighthire.com</span>
            </div>
            <div>
              <strong>Phone</strong>
              <span>443-255-5856</span>
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
