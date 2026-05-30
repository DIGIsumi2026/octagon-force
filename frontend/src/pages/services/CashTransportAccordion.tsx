import { useState } from "react";
import { ArrowRight, Banknote } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { images } from "../../data/imageAssets";

const cashTransportServices = [
  {
    title: "Risk Management",
    label: "High-Risk Control",
    image: images.services.cashTransportServices.riskManagement,
    description:
      "Cash transport is treated as a high-risk operation and handled with maximum security precautions, disciplined planning, and strict operational control.",
  },
  {
    title: "Armed Security Personnel",
    label: "Trained Professionals",
    image: images.services.cashTransportServices.armedPersonnel,
    description:
      "Every cash-in-transit operation is managed by highly trained armed security professionals prepared to protect financial assets with confidence and discipline.",
  },
  {
    title: "Specialized Vehicles",
    label: "Secure Transit Fleet",
    image: images.services.cashTransportServices.secureVehicles,
    description:
      "Cash movements are conducted using specialized transport vehicles equipped with dedicated security features to support safe and controlled transit.",
  },
  {
    title: "Built-In Safe Storage",
    label: "Locked Asset Protection",
    image: images.services.cashTransportServices.safeStorage,
    description:
      "All cash is stored and locked securely inside built-in safes during transit, helping guarantee protection from collection point to final destination.",
  },
];

export default function CashTransportAccordion() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="security-accordion-section cash-transport-accordion-section">
      <div className="container">
        <motion.div
          className="security-accordion-header cash-transport-accordion-header"
          initial={{ opacity: 0, y: 42, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.28 }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="eyebrow">
            <span />
            Cash Transport Operations
          </span>

          <h2>High-Risk Financial Asset Protection.</h2>

          <p>
            Our cash-in-transit service is designed for secure financial asset
            movement through trained armed personnel, specialized transport
            vehicles, and locked safe storage throughout the route.
          </p>
        </motion.div>

        <motion.div
          className="security-accordion cash-transport-accordion"
          initial={{ opacity: 0, y: 58, filter: "blur(12px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.95,
            delay: 0.12,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          {cashTransportServices.map((service, index) => {
            const isActive = activeIndex === index;

            return (
              <article
                key={service.title}
                className={`security-accordion-card cash-transport-accordion-card ${
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
                  <div className="security-accordion-card__icon cash-transport-accordion-card__icon">
                    <Banknote />
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