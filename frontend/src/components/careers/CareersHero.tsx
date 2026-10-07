import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { images } from "../../data/imageAssets"; 
import "../../App.css";

const heroSlides = [
  {
    id: 1,
    image: images.careers.hero1,
    alt: "Octagon Force security team",
    label: "Security Services",
  },
  {
    id: 2,
    image: images.careers.hero3,
    alt: "Octagon Force housekeeping team",
    label: "Housekeeping & Janitorial",
  },
  {
    id: 3,
    image: images.careers.hero2,
    alt: "Octagon Force logistics team",
    label: "Logistics Operations",
  },
  {
    id: 4,
    image: images.careers.hero4,
    alt: "Octagon Force cash transport team",
    label: "Cash Transport",
  },
];

const CareersHero = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % heroSlides.length);
    }, 4500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="careers-hero">
      <div className="careers-hero-slider">
        {heroSlides.map((slide, index) => (
          <div
            key={slide.id}
            className={`careers-hero-slide ${
              index === activeIndex ? "is-active" : ""
            }`}
          >
            <img src={slide.image} alt={slide.alt} />
          </div>
        ))}
      </div>

      <div className="careers-hero-overlay" />

      <div className="careers-hero-content">
        <span className="careers-hero-kicker">CAREERS AT OCTAGON FORCE</span>

        <h1>Build Your Career With Octagon Force</h1>

        <p>
          Join a disciplined team delivering trusted security, housekeeping,
          cash transport, and logistics services across Sri Lanka.
        </p>

        <div className="careers-hero-actions">
          <Link to="/contact" className="careers-hero-btn primary">
            Apply Now <ArrowRight size={18} />
          </Link>

          <a href="#career-openings" className="careers-hero-btn secondary">
            View Opportunities
          </a>
        </div>
      </div>

      <div className="careers-hero-thumbs">
        {heroSlides.map((slide, index) => (
          <button
            key={slide.id}
            type="button"
            className={`careers-hero-thumb ${
              index === activeIndex ? "is-active" : ""
            }`}
            onClick={() => setActiveIndex(index)}
            aria-label={`Show ${slide.label}`}
          >
            <img src={slide.image} alt={slide.label} />
            <span>{slide.label}</span>
          </button>
        ))}
      </div>
    </section>
  );
};

export default CareersHero;