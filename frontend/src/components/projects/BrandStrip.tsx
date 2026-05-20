import { brands } from "../../data/siteData";
import Reveal from "../common/Reveal";

export default function BrandStrip() {
  return (
    <section className="section">
      <div className="container">
        <Reveal>
          <div className="brand-strip">
            <h2>We&apos;ve Almost 24k+ Customer In World-Wide.</h2>
            <div className="brand-strip__logos">
              {brands.map((brand) => (
                <span key={brand}>{brand}</span>
              ))}
            </div>
            <a href="#contact">Collaborate with us for better performance — Contact Us →</a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
