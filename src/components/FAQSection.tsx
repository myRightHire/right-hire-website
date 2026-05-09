const faqs = [
  {
    question: "Do you replace live interviews?",
    answer:
      "No. Right Hire strengthens how a search is defined, sourced, and evaluated so live interview time is spent on the people who actually matter.",
  },
  {
    question: "Are you a search firm or a software company?",
    answer:
      "Right Hire is a search firm with a focused operating model. Meridian and Vector are the systems that power how we run search and how we surface talent decisions more clearly.",
  },
  {
    question: "What is Meridian?",
    answer:
      "Meridian is the recruiting and sourcing operating system behind Right Hire. It supports search definition, sourcing workflow, candidate evaluation, pipeline movement, and recruiter execution.",
  },
  {
    question: "What is Vector?",
    answer:
      "Vector is the leadership decision layer. It helps surface talent risk, opportunity, and what deserves executive attention as searches move forward.",
  },
];

export default function FAQSection() {
  return (
    <section id="faq">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">FAQ</p>
          <h2>Questions buyers will ask</h2>
        </div>

        <div className="faq-list">
          {faqs.map((faq) => (
            <details key={faq.question}>
              <summary>
                <span>{faq.question}</span>
                <span aria-hidden="true">+</span>
              </summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
