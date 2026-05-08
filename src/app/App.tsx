import { useState } from "react";
import logoImage from "../imports/Logo_no_tagline_white_background_Draft_2.jpg";

export default function App() {
  return (
    <div className="min-h-screen" style={{ fontFamily: "'Manrope', sans-serif" }}>
      <Header />
      <main>
        <HeroSection />
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

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navItems = [
    { href: "#focus", label: "Focus" },
    { href: "#platform", label: "Platform" },
    { href: "#how-it-works", label: "How it works" },
    { href: "#difference", label: "Why Right Hire" },
    { href: "#contact", label: "Contact" },
  ];

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="sticky top-0 z-20 py-4 backdrop-blur-md border-b border-border/60 bg-white">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex items-center justify-between">
          <a href="#top" aria-label="Right Hire home" onClick={closeMenu}>
          <img src={logoImage} alt="Right Hire" style={{ height: '120px' }} className="w-auto" />
        </a>

        <nav className="hidden md:flex items-center gap-8 text-sm font-semibold" style={{ color: '#1e5a96' }} aria-label="Primary">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="hover:opacity-70 transition-opacity">
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="mailto:chris.dempsey@myrighthire.com?subject=Right%20Hire%20Demo%20Request"
          className="hidden md:inline-flex items-center justify-center px-6 py-3 rounded-full font-bold text-sm bg-primary text-primary-foreground hover:-translate-y-0.5 transition-all shadow-xl"
        >
          Request Demo
        </a>

          <button
            className="md:hidden text-3xl leading-none"
            style={{ color: "#1e5a96" }}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
            type="button"
          >
            {menuOpen ? "×" : "☰"}
          </button>
        </div>

        {menuOpen ? (
          <div className="md:hidden mt-4 rounded-[24px] border border-border bg-white shadow-xl p-4">
            <nav className="flex flex-col gap-3 text-base font-semibold" style={{ color: "#1e5a96" }} aria-label="Mobile Primary">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="rounded-xl px-3 py-2 hover:bg-[rgba(30,90,150,0.08)] transition-colors"
                  onClick={closeMenu}
                >
                  {item.label}
                </a>
              ))}
              <a
                href="mailto:chris.dempsey@myrighthire.com?subject=Right%20Hire%20Demo%20Request"
                className="mt-2 inline-flex items-center justify-center px-6 py-3 rounded-full font-bold text-sm bg-primary text-primary-foreground shadow-xl"
                onClick={closeMenu}
              >
                Request Demo
              </a>
            </nav>
          </div>
        ) : null}
      </div>
    </header>
  );
}

function HeroSection() {
  return (
    <section className="pt-20 pb-24 relative overflow-hidden" id="top">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-12 items-stretch">
          {/* Left Copy */}
          <div className="flex-1">
            <p className="eyebrow">
              Right Hire + Meridian + Vector
            </p>
            <h1 className="text-[2.7rem] sm:text-5xl md:text-6xl lg:text-7xl leading-none mb-6 max-w-[18ch]">
              Executive search for advanced technology and manufacturing, powered by systems-level rigor.
            </h1>
            <p className="text-2xl mb-4" style={{ fontFamily: "'Newsreader', serif", color: 'var(--brand-green)' }}>
              The Right Talent. The Right Impact.
            </p>
            <p className="text-lg text-muted-foreground max-w-xl mb-8 leading-relaxed">
              Specialized search judgment fused with Meridian (recruiting operating system) and Vector (leadership decision layer). <span className="text-sm font-bold tracking-wider text-muted-foreground whitespace-nowrap">STRATEGY. INSIGHT. RESULTS.</span>
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <a
                href="mailto:chris.dempsey@myrighthire.com?subject=Right%20Hire%20Demo%20Request"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full font-bold bg-primary text-primary-foreground hover:-translate-y-0.5 transition-all shadow-xl"
              >
                Request a Demo
              </a>
              <a
                href="#platform"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full font-bold border border-border hover:bg-white/80 transition-all"
              >
                Explore the Platform
              </a>
            </div>

            <ul className="space-y-4 text-muted-foreground">
              {[
                "Leadership & executive search in complex technical domains",
                "Meridian: Structured sourcing, workflow & evidence system",
                "Vector: Real-time talent risk & executive decision intelligence"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-secondary text-xl font-bold mt-0.5">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Panel */}
          <div className="flex-1 flex flex-col gap-6">
            <div className="bg-gradient-to-b from-white/95 to-[#f6f8ff]/95 rounded-[28px] p-8 border border-white/60 shadow-2xl">
              <div className="text-sm font-bold text-primary mb-3">What makes Right Hire different</div>
              <h2 className="text-3xl md:text-4xl leading-tight mb-4">
                Search-firm judgment with system-level rigor behind it.
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                We still believe high-stakes hiring is a judgment business. The edge comes from systems that remove ambiguity in definition, sourcing, and decision-making.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { num: "01", title: "Specialized Judgment", desc: "Focused exclusively on leadership roles where weak hires are catastrophically expensive." },
                { num: "02", title: "Meridian OS", desc: "End-to-end recruiting operating system — definition through governed execution." },
                { num: "03", title: "Vector Intelligence", desc: "Leadership-facing layer that surfaces talent risk, momentum, and priority." }
              ].map((card, i) => (
                <div key={i} className="bg-white/90 rounded-[28px] p-6 border border-white/60 shadow-xl">
                  <div className="text-4xl font-bold text-primary mb-3">{card.num}</div>
                  <strong className="block text-lg mb-2">{card.title}</strong>
                  <span className="text-sm text-muted-foreground leading-relaxed">{card.desc}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FocusSection() {
  return (
    <section className="py-20" id="focus">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="max-w-3xl mb-12">
          <p className="eyebrow">Our Services</p>
          <h2 className="text-4xl md:text-5xl leading-tight mb-6">
            Three pillars of talent excellence
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            We deliver specialized search and scalable talent systems across executive hiring, technical talent, and enterprise TA infrastructure.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { title: "Executive Hiring", desc: "Leadership and executive search where weak definition, sourcing, or evaluation creates expensive downstream mistakes." },
            { title: "Technical Talent", desc: "Specialized hiring in advanced technology and manufacturing where technical depth, talent scarcity, and execution pressure demand sharper search rigor." },
            { title: "Scalable TA Systems", desc: "Enterprise talent acquisition infrastructure powered by Meridian and Vector to bring operational discipline and leadership visibility to recruiting." }
          ].map((item, i) => (
            <article key={i} className="bg-white/70 rounded-[18px] p-8 border border-border shadow-xl">
              <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center mb-4">
                <span className="text-2xl text-secondary">✓</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProblemSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-transparent to-[var(--brand-cream)]">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="max-w-3xl mb-10">
          <p className="eyebrow">The problem</p>
          <h2 className="text-4xl md:text-5xl leading-tight">
            Most firms still run high-value search work with fragmented tools, inconsistent judgment, and weak process memory.
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { title: "Searches start fuzzy", desc: "Leadership roles are often defined in broad, inconsistent language that creates weak sourcing and weak calibration." },
            { title: "Sourcing lacks memory", desc: "Good candidates, false positives, and learned market patterns disappear into spreadsheets, tabs, and recruiter memory." },
            { title: "Evaluation is inconsistent", desc: "Candidate review depends too much on individual style instead of structured evidence and repeatable decision logic." },
            { title: "Workflow stalls", desc: "Search teams lose time coordinating sourcing, review, outreach, and leadership updates instead of advancing the right people." }
          ].map((item, i) => (
            <article key={i} className="bg-card rounded-[18px] p-6 border border-white/55 shadow-xl">
              <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function PlatformSection() {
  return (
    <section className="py-20" id="platform">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="max-w-3xl mb-10">
          <p className="eyebrow">The platform</p>
          <h2 className="text-4xl md:text-5xl leading-tight mb-6">
            Right Hire runs search through Meridian and Vector.
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            The firm is supported by two connected systems. Meridian powers recruiting and sourcing execution.
            Vector helps leadership see talent risk, opportunity, and decision priority more clearly.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { num: "01", title: "Meridian: Search definition and sourcing workflow", desc: "Structured search definition, sourcing workflow, candidate review, pipeline movement, outreach preparation, and governed recruiter execution." },
            { num: "02", title: "Meridian: Candidate evaluation", desc: "Structured candidate screening, evidence-backed evaluation, fit review, and workflow support for moving the right candidates forward." },
            { num: "03", title: "Vector: Leadership decision visibility", desc: "Executive-facing interpretation of talent risk, opportunity, and what deserves attention now." },
            { num: "04", title: "Shared trust layer", desc: "Structured evidence, governance awareness, audit visibility, and more disciplined talent decisions across the workflow." }
          ].map((item, i) => (
            <article key={i} className="bg-card rounded-[18px] p-6 border border-white/55 shadow-xl">
              <span className="inline-block text-2xl font-bold text-primary mb-3">{item.num}</span>
              <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function WorkflowSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-transparent to-[var(--brand-navy)] text-white" id="how-it-works">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          <div className="flex-1">
            <p className="text-sm font-extrabold tracking-widest uppercase text-secondary mb-4">How it works</p>
            <h2 className="text-4xl md:text-5xl leading-tight mb-6">
              Right Hire combines search-firm judgment with a stronger internal operating model.
            </h2>
            <p className="text-lg text-white/80 leading-relaxed">
              The goal is simple: define the search clearly, reduce sourcing waste, evaluate candidates more consistently,
              and give clients a sharper view of who is actually worth time.
            </p>
          </div>
          <div className="flex-1 space-y-4">
            {[
              { num: "1", title: "Clarify the mandate", desc: "Define what success looks like, where false positives come from, and what evidence should matter most." },
              { num: "2", title: "Run the search with more rigor", desc: "Use structured sourcing workflow and better search definition instead of relying on loose recruiter prose and repeated guesswork." },
              { num: "3", title: "Evaluate with evidence", desc: "Use structured candidate screening and evidence-backed review instead of inconsistent early-stage judgment." },
              { num: "4", title: "Give leaders clearer visibility", desc: "Translate recruiting activity into better decision support around talent risk, opportunity, and search momentum." }
            ].map((step, i) => (
              <article key={i} className="flex gap-4 p-5 bg-white/10 backdrop-blur-sm rounded-[18px] border border-white/20">
                <div className="w-11 h-11 rounded-full flex items-center justify-center flex-shrink-0 bg-secondary/15">
                  <span className="text-xl font-bold text-secondary">{step.num}</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                  <p className="text-white/70 leading-relaxed">{step.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function DifferenceSection() {
  return (
    <section className="py-20" id="difference">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="max-w-3xl mb-10">
          <p className="eyebrow">Why Right Hire</p>
          <h2 className="text-4xl md:text-5xl leading-tight">
            This is not generic recruiting services and not generic recruiting software.
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { title: "Search-firm judgment", desc: "We still believe leadership and executive hiring is a high-judgment business that requires market understanding and human rigor." },
            { title: "Systems behind the search", desc: "Meridian and Vector give us a stronger way to define searches, preserve evidence, and maintain operational discipline." },
            { title: "Evidence over impression", desc: "Structured evaluations, sourcing signals, and workflow memory create a more defensible view of who is worth time." },
            { title: "Leadership visibility", desc: "Vector gives the executive layer a clearer read on talent decisions instead of leaving recruiting truth trapped inside operator workflow." }
          ].map((item, i) => (
            <article key={i} className="bg-card rounded-[18px] p-6 border border-white/55 shadow-xl">
              <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProofSection() {
  const tags = [
    "Executive and leadership search",
    "Advanced technology",
    "Advanced manufacturing",
    "Technical and technical-adjacent hiring",
    "Organizations that need stronger recruiting operating discipline",
    "Teams that want better talent decision visibility"
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-transparent to-[var(--brand-cream)]">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-8 items-center justify-between">
          <div className="max-w-xl">
            <p className="eyebrow">Who this is for</p>
            <h2 className="text-4xl md:text-5xl leading-tight">
              Built for organizations that need stronger search judgment in hard-to-fill, high-consequence hiring.
            </h2>
          </div>
          <div className="flex flex-wrap gap-3 justify-end">
            {tags.map((tag, i) => (
              <span key={i} className="px-4 py-3 rounded-full bg-white/74 border border-border font-semibold text-sm">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function FAQSection() {
  const faqs = [
    {
      question: "Do you replace live interviews?",
      answer: "No. Right Hire strengthens how a search is defined, sourced, and evaluated so live interview time is spent on the people who actually matter."
    },
    {
      question: "Are you a search firm or a software company?",
      answer: "Right Hire is a search firm with a focused operating model. Meridian and Vector are the systems that power how we run search and how we surface talent decisions more clearly."
    },
    {
      question: "What is Meridian?",
      answer: "Meridian is the recruiting and sourcing operating system behind Right Hire. It supports search definition, sourcing workflow, candidate evaluation, pipeline movement, and recruiter execution."
    },
    {
      question: "What is Vector?",
      answer: "Vector is the leadership decision layer. It helps surface talent risk, opportunity, and what deserves executive attention as searches move forward."
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="max-w-3xl mb-10">
          <p className="eyebrow">FAQ</p>
          <h2 className="text-4xl md:text-5xl leading-tight">
            Questions buyers will ask
          </h2>
        </div>
        <div className="space-y-4 max-w-4xl">
          {faqs.map((faq, i) => (
            <details key={i} className="bg-card rounded-[18px] p-5 border border-white/55 shadow-xl group">
              <summary className="cursor-pointer font-bold text-lg list-none flex items-center justify-between">
                {faq.question}
                <span className="text-2xl text-muted-foreground group-open:rotate-45 transition-transform">+</span>
              </summary>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section className="py-20 bg-[var(--brand-cream)]" id="contact">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="max-w-xl">
            <p className="eyebrow">Contact</p>
            <h2 className="text-4xl md:text-5xl leading-tight mb-6">
              Discuss a leadership or executive search mandate.
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We work best with organizations that value judgment and operating discipline in high-consequence hiring.
            </p>
          </div>
          <div className="bg-white rounded-[28px] p-8 border border-border shadow-2xl w-full max-w-md">
            <a
              href="mailto:chris.dempsey@myrighthire.com?subject=Right%20Hire%20Demo%20Request"
              className="block w-full text-center py-4 rounded-full font-bold bg-primary text-white mb-6 hover:-translate-y-0.5 transition-all shadow-lg"
            >
              Request a Demo
            </a>
            <div className="space-y-4 text-sm">
              <p className="text-muted-foreground">
                <strong className="block text-foreground mb-1">Email</strong>
                chris.dempsey@myrighthire.com
              </p>
              <p className="text-muted-foreground">
                <strong className="block text-foreground mb-1">Phone</strong>
                443-255-5856
              </p>
              <p className="text-muted-foreground">
                <strong className="block text-foreground mb-1">Next step</strong>
                Please schedule a call to see how Right Hire may help you.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-12 border-t border-border/60 bg-white/70">
      <div className="container mx-auto px-6 max-w-7xl text-sm text-muted-foreground flex flex-col md:flex-row justify-between items-center gap-4">
        <div>
          <strong className="block text-foreground">Right Hire</strong>
          <p>Executive search for advanced tech and manufacturing</p>
        </div>
        <p>© 2026 Right Hire. All rights reserved.</p>
      </div>
    </footer>
  );
}
