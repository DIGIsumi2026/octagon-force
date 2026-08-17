import { useState } from "react";
import { ArrowRight, Boxes } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { images } from "../../data/imageAssets";

const logisticsServices = [
  {
    title: "Professional Logistics Staff",
    label: "Experienced Operations",
    image: images.services.logisticsServices.professionalStaff,
    description:
      "Our logistics support is handled by professional, highly experienced operational and technical staff trained to manage coordination needs with precision.",
  },
  {
    title: "Strategic Fleet Positioning",
    label: "Area-Based Readiness",
    image: images.services.logisticsServices.fleetPositioning,
    description:
      "As an area-based company, Octagon Force positions vehicles strategically close by to support faster response, efficient coordination, and urgent assistance.",
  },
  {
    title: "Rapid Coordination",
    label: "Responsive Execution",
    image: images.services.logisticsServices.rapidCoordination,
    description:
      "We support urgent transport logistics and operational requirements through responsive communication, fast deployment, and seamless execution.",
  },
  {
    title: "Customized Consultancy",
    label: "Cost-Effective Advice",
    image: images.services.logisticsServices.customizedConsultancy,
    description:
      "Our management team reviews your exact operational needs and provides objective, impartial, and budget-conscious recommendations for your business.",
  },
];

export default function LogisticsAccordion() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="security-accordion-section logistics-accordion-section">
      <div className="container">
        <motion.div
          className="security-accordion-header logistics-accordion-header"
          initial={{ opacity: 0, y: 42, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.28 }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
        >

          <h2>Streamlined Coordination For Operational Continuity</h2>

          <p>
            From experienced technical staff to area-based vehicle readiness and
            tailored consultancy, Octagon Force helps businesses reduce
            operational bottlenecks and maintain dependable movement.
          </p>
        </motion.div>

        <motion.div
          className="security-accordion logistics-accordion"
          initial={{ opacity: 0, y: 58, filter: "blur(12px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.95,
            delay: 0.12,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          {logisticsServices.map((service, index) => {
            const isActive = activeIndex === index;

            return (
              <article
                key={service.title}
                className={`security-accordion-card logistics-accordion-card ${
                  isActive ? "is-active" : ""
                }`}
                onMouseEnter={() => setActiveIndex(index)}
                onFocus={() => setActiveIndex(index)}
                tabIndex={0}
              >
                <img
                  src={service.image}
                  alt={service.title}
                  loading="lazy"
                  decoding="async"
                />

                <div className="security-accordion-card__shade" />

                <div className="security-accordion-card__number">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <div className="security-accordion-card__collapsed">
                  <div className="security-accordion-card__icon logistics-accordion-card__icon">
                    <Boxes />
                  </div>

                  <h3>{service.title}</h3>
                </div>

                <div className="security-accordion-card__expanded">
                  <span>{service.label}</span>

                  <h3>{service.title}</h3>

                  <p>{service.description}</p>

                  <a href="https://wa.me/94777660021" target="_blank" rel="noopener noreferrer" className="security-accordion-card__link">
                    Request This Service
                    <ArrowRight />
                  </a>
                </div>
              </article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
