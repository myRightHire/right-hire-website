import meridianScreenshot from "../imports/meridian-define-search-live.png";
import vectorScreenshot from "../imports/vector-executive-brief-live.png";
import logo from "../imports/right-hire-logo-transparent.png";

export default function ProductShowcaseSection() {
  return (
    <section className="product-showcase" id="product-showcase">
      {/* Logo */}
      <div className="product-showcase__logo">
        <img src={logo} alt="Right Hire" />
      </div>

      {/* Headline */}
      <h2 className="product-showcase__heading">Meridian + Vector</h2>
      <p className="product-showcase__sub">
        Execution for recruiters. Intelligence for leadership.
      </p>

      {/* Screenshots */}
      <div className="product-showcase__grid">
        {/* Meridian */}
        <div className="product-showcase__panel">
          <div className="product-showcase__label">Meridian · Define Search</div>
          <div className="product-showcase__frame">
            <div className="product-showcase__chrome">
              <span />
              <span />
              <span />
            </div>
            <img
              src={meridianScreenshot}
              alt="Meridian Define Search"
              className="product-showcase__img"
            />
          </div>
          <div className="product-showcase__product-name product-showcase__product-name--meridian">
            Meridian
          </div>
          <p className="product-showcase__product-desc">
            AI-assisted recruiting &amp; sourcing operating system
          </p>
        </div>

        {/* Vector */}
        <div className="product-showcase__panel">
          <div className="product-showcase__label">Vector · Executive Brief</div>
          <div className="product-showcase__frame product-showcase__frame--vector">
            <div className="product-showcase__chrome">
              <span />
              <span />
              <span />
            </div>
            <img
              src={vectorScreenshot}
              alt="Vector Executive Brief"
              className="product-showcase__img"
            />
          </div>
          <div className="product-showcase__product-name product-showcase__product-name--vector">
            Vector
          </div>
          <p className="product-showcase__product-desc">
            AI-native executive intelligence &amp; decision layer
          </p>
        </div>
      </div>
    </section>
  );
}
