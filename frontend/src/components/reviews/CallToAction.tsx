import { ArrowRight } from "lucide-react";
import Reveal from "../common/Reveal";
import { images } from "../../data/imageAssets";

export default function CallToAction() {
  return (
    <section className="section">
      <div className="container">
        <Reveal>
          <article className="cta-banner">
            <img
              src={images.reviews.ctaTechnician}
              alt="Security technician"
            />
            <div />
            <section>
              <span className="eyebrow eyebrow--light">
                <span />
                Why Choose OpenHome
              </span>
              <h2>We Take Care Of Everything For You</h2>
              <p>You do not have to worry about a thing. We plan, install, activate, and show you how to use your new system.</p>
              <a href="#contact" className="secondary-button">
                How Do I Start? <ArrowRight />
              </a>
            </section>
          </article>
        </Reveal>
      </div>
    </section>
  );
}
