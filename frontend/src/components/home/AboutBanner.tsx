import { Phone } from "lucide-react";
import Reveal from "../common/Reveal";
import { images } from "../../data/imageAssets";
import { videos } from "../../data/videoAssets";

export default function AboutBanner() {
  return (
    <section className="section section--no-top" id="about">
      <div className="container">
        <Reveal>
          <article className="image-banner about-video-banner">
            <video
              className="image-banner__video"
              src={videos.about.logoEntry}
              poster={images.home.aboutBanner}
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
            />

            <div className="image-banner__overlay" />

            <div className="image-banner__content">
              <span className="eyebrow eyebrow--light">
                <span />
                About Us
              </span>

              <h2>Better Protection Starts With Smarter Prevention</h2>

              <p>
                Octagon Force provides professional security solutions focused
                on prevention, reliability, and trusted protection for modern
                homes, businesses, and properties.
              </p>
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