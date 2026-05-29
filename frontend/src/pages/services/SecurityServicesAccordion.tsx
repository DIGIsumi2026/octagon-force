import { useState } from "react";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { images } from "../../data/imageAssets";

const securityServices = [
  {
    title: "Security Bouncers",
    label: "Crowd Control",
    image: images.services.securityServices.bouncers,
    description:
      "Professional crowd control and access management personnel trained to maintain order, safety, and guest confidence at events, venues, and hospitality environments.",
  },
  {
    title: "Private Security",
    label: "Property Protection",
    image: images.services.securityServices.privateSecurity,
    description:
      "Dedicated private security solutions designed to protect residential, commercial, and institutional properties through disciplined monitoring and professional presence.",
  },
  {
    title: "Body Guards & VIP Protection",
    label: "Executive Safety",
    image: images.services.securityServices.vipProtection,
    description:
      "Discreet executive protection services for VIPs, dignitaries, and high-profile individuals, ensuring safe movement, privacy, and reliable personal security.",
  },
  {
    title: "Armed & Unarmed Guards",
    label: "Trained Guarding",
    image: images.services.securityServices.armedUnarmedGuards,
    description:
      "Highly trained armed and unarmed guard services tailored for sensitive locations, high-value assets, and environments requiring enhanced vigilance and response readiness.",
  },
  {
    title: "Static Security",
    label: "Fixed-Post Security",
    image: images.services.securityServices.staticSecurity,
    description:
      "Reliable fixed-post guarding solutions for entrances, checkpoints, and key operational locations, providing continuous site protection and controlled access management.",
  },
];

export default function SecurityServicesAccordion() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="security-accordion-section">
      <div className="container">
        <motion.div
          className="security-accordion-header"
          initial={{ opacity: 0, y: 42, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.28 }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="eyebrow">
            <span />
            Security Services
          </span>

          <h2>Specialized Protection For Every Security Requirement.</h2>

          <p>
            Octagon Force provides disciplined, well-supervised, and professional
            security solutions for people, properties, events, and sensitive
            operational environments.
          </p>
        </motion.div>

        <motion.div
          className="security-accordion"
          initial={{ opacity: 0, y: 58, filter: "blur(12px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.95, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
        >
          {securityServices.map((service, index) => {
            const isActive = activeIndex === index;

            return (
              <article
                key={service.title}
                className={`security-accordion-card ${
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
                  <div className="security-accordion-card__icon">
                    <ShieldCheck />
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