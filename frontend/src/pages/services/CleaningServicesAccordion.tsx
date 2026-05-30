import { useState } from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { images } from "../../data/imageAssets";

const cleaningServices = [
  {
    title: "Sanitizing",
    label: "Hygienic Standards",
    image: images.services.cleaningServices.sanitizing,
    description:
      "Deep sanitization protocols designed to maintain hygienic standards, reduce contamination risks, and create safer residential, commercial, and shared environments.",
  },
  {
    title: "Cleaning Houses",
    label: "Residential Care",
    image: images.services.cleaningServices.houses,
    description:
      "Comprehensive residential cleaning and upkeep services that help homes remain clean, organized, fresh, and comfortable despite busy daily schedules.",
  },
  {
    title: "Cleaning Offices",
    label: "Corporate Janitorial Care",
    image: images.services.cleaningServices.offices,
    description:
      "Professional janitorial care for commercial workspaces and corporate offices, supporting clean, productive, and well-maintained business environments.",
  },
  {
    title: "Gardens & Landscaping",
    label: "Outdoor Maintenance",
    image: images.services.cleaningServices.gardensLandscaping,
    description:
      "Complete garden cleaning, landscaping, and outdoor environment maintenance to keep exterior spaces neat, welcoming, and visually refined.",
  },
];

export default function CleaningServicesAccordion() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="security-accordion-section cleaning-accordion-section">
      <div className="container">
        <motion.div
          className="security-accordion-header cleaning-accordion-header"
          initial={{ opacity: 0, y: 42, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.28 }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="eyebrow">
            <span />
            Cleaning Services
          </span>

          <h2>Reliable Housekeeping And Janitorial Support.</h2>

          <p>
            From daily cleaning to deep sanitization and outdoor maintenance,
            Octagon Force helps maintain cleaner, healthier, and more organized
            spaces for homes, offices, and commercial properties.
          </p>
        </motion.div>

        <motion.div
          className="security-accordion cleaning-accordion"
          initial={{ opacity: 0, y: 58, filter: "blur(12px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.95,
            delay: 0.12,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          {cleaningServices.map((service, index) => {
            const isActive = activeIndex === index;

            return (
              <article
                key={service.title}
                className={`security-accordion-card cleaning-accordion-card ${
                  isActive ? "is-active" : ""
                }`}
                onMouseEnter={() => setActiveIndex(index)}
                onFocus={() => setActiveIndex(index)}
                tabIndex={0}
              >
                <img src={service.image} alt={service.title} />

                <div className="security-accordion-card__shade" />

                <div className="security-accordion-card__number">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <div className="security-accordion-card__collapsed">
                  <div className="security-accordion-card__icon cleaning-accordion-card__icon">
                    <Sparkles />
                  </div>

                  <h3>{service.title}</h3>
                </div>

                <div className="security-accordion-card__expanded">
                  <span>{service.label}</span>

                  <h3>{service.title}</h3>

                  <p>{service.description}</p>

                  <Link to="/contact" className="security-accordion-card__link">
                    Request This Service
                    <ArrowRight />
                  </Link>
                </div>
              </article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}