import meridianScreenshot from "../imports/meridian-define-search-live.png";
import vectorScreenshot from "../imports/vector-executive-brief-live.png";

export default function ProductShowcaseSection() {
  return (
    <section className="product-showcase" id="platform">
      <div className="container">

        {/* Section heading — same pattern as other pages */}
        <div className="section-heading">
          <p className="eyebrow">The Platform</p>
          <h2>Right Hire runs every search through Meridian and Vector.</h2>
        </div>

        {/* Headline tight above the frames */}
        <div className="product-showcase__above-grid">
          <h3 className="product-showcase__heading">Meridian + Vector</h3>
          <p className="product-showcase__sub">
            Execution for recruiters. Intelligence for leadership.
          </p>
        </div>

        {/* Screenshots */}
        <div className="product-showcase__grid">
          {/* Meridian — blue frame */}
          <div className="product-showcase__panel">
            <div className="product-showcase__label product-showcase__label--meridian">Meridian · Define Search</div>
            <div className="product-showcase__frame product-showcase__frame--meridian">
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
              Recruiting &amp; sourcing operating system
            </p>
          </div>

          {/* Vector — gold frame */}
          <div className="product-showcase__panel">
            <div className="product-showcase__label product-showcase__label--vector">Vector · Executive Brief</div>
            <div className="product-showcase__frame product-showcase__frame--vector">
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
              Executive brief &amp; decision-support layer
            </p>
          </div>
        </div>

        <p className="product-showcase__footnote">
          Together they bring operating discipline and real visibility to high-consequence hiring decisions.
        </p>
      </div>
    </section>
  );
}
