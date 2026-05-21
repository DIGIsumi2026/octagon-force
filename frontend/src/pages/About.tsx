import Reveal from "../components/common/Reveal";
import { videos } from "../data/videoAssets";

export default function About() {
  return (
    <main className="about-page">
      <section className="about-page-hero">
        <div className="container">
          <Reveal>
            <div className="about-page-hero__grid">
              <div>
                <span className="eyebrow eyebrow--light">
                  <span />
                  About Octagon Force
                </span>

                <h1>Professional Force For Reliable Service</h1>

                <p>
                  Octagon Force is committed to serving with discipline,
                  reliability, and professionalism across security, transport,
                  maintenance, construction, consultancy, logistics, and facility
                  support services.
                </p>
              </div>

              <video
                className="about-page-hero__video"
                src={videos.about.logoEntry}
                muted
                playsInline
                controls
                preload="metadata"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal>
            <div className="about-page-content">
              <h2>Who We Are</h2>

              <p>
                Octagon Force is dedicated to serving in eight key focus
                elements for the country: security, transport, technical and
                maintenance, construction, consultancy and project management,
                supply chain management and logistics, solid waste management,
                and housekeeping.
              </p>

              <p>
                We are committed to improving the lifestyle and life standard of
                our people by delivering dependable, structured, and responsible
                services.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}