import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import Reveal from "../common/Reveal";
import { images } from "../../data/imageAssets";
import { videos } from "../../data/videoAssets";

export default function AboutBanner() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const [isVideoActive, setIsVideoActive] = useState(false);
  const hasPlayedOnScrollRef = useRef(false);

  const playVideo = () => {
    const video = videoRef.current;

    if (!video) return;

    setIsVideoActive(true);
    video.currentTime = 0;

    video.play().catch(() => {
      setIsVideoActive(false);
    });
  };

  useEffect(() => {
    const sectionElement = sectionRef.current;

    if (!sectionElement) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasPlayedOnScrollRef.current) {
          hasPlayedOnScrollRef.current = true;
          playVideo();
        }
      },
      {
        threshold: 0.45,
      }
    );

    observer.observe(sectionElement);

    return () => {
      observer.disconnect();
    };
  }, []);

  const handleVideoEnded = () => {
    setIsVideoActive(false);

    if (videoRef.current) {
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <section
      ref={sectionRef}
      className="section about-preview-section"
      id="about"
    >
      <div className="container">
        <Reveal>
          <article className="about-preview">
            <div className="about-preview__content">
              <span className="eyebrow eyebrow--light">
                <span />
                About Us
              </span>

              <h2>Octagon Force</h2>

              <p>
                Octagon Force is dedicated to serving in key focus areas,
                including security, transport, technical maintenance,
                construction, consultancy, project management, supply chain
                management, logistics, solid waste management, and housekeeping.
              </p>

              <p>
                We are committed to improving the lifestyle and life standard of
                our people with reliable, professional, and trusted service.
              </p>

              <Link to="/about" className="about-preview__button">
                Read More
              </Link>
            </div>

            <div
              className={`about-preview__media cursor-play-zone ${
                isVideoActive ? "is-active" : "is-inactive"
              }`}
              onMouseEnter={playVideo}
              data-cursor="Play"
            >
              <div className="about-preview__glow" />
              <div className="about-preview__shine" />

              {!isVideoActive && (
                <div className="about-preview__thumbnail">
                  <img
                    src={images.about.aboutVideoThumbnail}
                    alt="Octagon Force logo video preview"
                  />
                  <span className="about-preview__thumbnail-badge">
                    Intro Preview
                  </span>
                </div>
              )}

              <video
                ref={videoRef}
                className="about-preview__video"
                src={videos.about.logoEntry}
                muted
                playsInline
                preload="metadata"
                onEnded={handleVideoEnded}
              />
            </div>
          </article>
        </Reveal>
      </div>
    </section>
  );
}