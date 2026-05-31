import { useState } from "react";
import { ArrowRight, Truck } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { images } from "../../data/imageAssets";

const transportServices = [
  {
    title: "Asset-Based Transport",
    label: "Fleet Ownership",
    image: images.services.transportServices.assetBased,
    description:
      "Octagon Force operates as an asset-based transportation solutions provider, giving clients greater dependability, control, and confidence in every movement.",
  },
  {
    title: "Professional Drivers",
    label: "Trained Personnel",
    image: images.services.transportServices.professionalDrivers,
    description:
      "Our transport operations are handled by highly professional, trained drivers who understand safety, punctuality, route discipline, and client service standards.",
  },
  {
    title: "Top-Line Equipment",
    label: "Quality Fleet Assets",
    image: images.services.transportServices.topLineEquipment,
    description:
      "We utilize quality transport equipment to support safe, efficient, and reliable cargo movement across routine logistics and time-sensitive delivery needs.",
  },
  {
    title: "Fleet Maintenance",
    label: "On-Site Readiness",
    image: images.services.transportServices.fleetMaintenance,
    description:
      "Our own on-site maintenance facility helps keep the fleet in peak condition, reducing operational delays and supporting consistent service reliability.",
  },
  {
    title: "Customer Support",
    label: "Responsive Coordination",
    image: images.services.transportServices.customerSupport,
    description:
      "A dedicated customer service team supports each transport requirement with responsive communication, coordination, and dependable operational follow-up.",
  },
];

export default function TransportOperationsAccordion() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="security-accordion-section transport-operations-accordion-section">
      <div className="container">
        <motion.div
          className="security-accordion-header transport-operations-accordion-header"
          initial={{ opacity: 0, y: 42, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.28 }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="eyebrow">
            <span />
            Transport Operations
          </span>

          <h2>Reliable Movement Backed By Fleet Control.</h2>

          <p>
            From experienced drivers to maintained equipment and responsive
            coordination, Octagon Force provides dependable transport solutions
            designed to move cargo safely, efficiently, and with peace of mind.
          </p>
        </motion.div>

        <motion.div
          className="security-accordion transport-operations-accordion"
          initial={{ opacity: 0, y: 58, filter: "blur(12px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.95,
            delay: 0.12,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          {transportServices.map((service, index) => {
            const isActive = activeIndex === index;

            return (
              <article
                key={service.title}
                className={`security-accordion-card transport-operations-accordion-card ${
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
                  <div className="security-accordion-card__icon transport-operations-accordion-card__icon">
                    <Truck />
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