import { Phone } from "lucide-react";
import Reveal from "../common/Reveal";
import { images } from "../../data/imageAssets";

export default function AboutBanner() {
  return (
    <section className="section section--no-top">
      <div className="container">
        <Reveal>
          <article className="image-banner">
            <img
              src={images.home.aboutBanner}
              alt="Technician installing security camera"
            />
            <div className="image-banner__overlay" />
            <div className="image-banner__content">
              <span className="eyebrow eyebrow--light">
                <span />
                About Us
              </span>
              <h2>Better Protection Starts With Smarter Prevention</h2>
              <p>OpenHome security systems do not just record activity; they help prevent issues with smarter planning, alerts, and support.</p>
            </div>
            <div className="call-card">
              <span>
                <Phone />
              </span>
              <div>
                <small>CALL NOW:</small>
                <strong>+(084) 123 - 456 88</strong>
              </div>
            </div>
          </article>
        </Reveal>
      </div>
    </section>
  );
}
