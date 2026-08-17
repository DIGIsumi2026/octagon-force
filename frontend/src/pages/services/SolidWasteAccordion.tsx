import { useState } from "react";
import { ArrowRight, Building2, Home, Leaf, Trash2 } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { images } from "../../data/imageAssets";

const solidWasteServices = [
  {
    title: "Waste Removal & Cleanup",
    label: "Regular Clearance",
    image: images.services.solidWasteServices.wasteRemoval,
    icon: Trash2,
    description:
      "Our team manages accumulated waste through organized cleanup, regular removal, and structured handling to keep client spaces clean and presentable.",
  },
  {
    title: "Residential Waste Handling",
    label: "Home Environments",
    image: images.services.solidWasteServices.residentialWaste,
    icon: Home,
    description:
      "We support residential properties with dependable housekeeping and waste cleaning services that help maintain a hygienic, comfortable living environment.",
  },
  {
    title: "Office Janitorial Waste",
    label: "Corporate Spaces",
    image: images.services.solidWasteServices.officeWaste,
    icon: Building2,
    description:
      "Corporate offices and commercial workspaces are maintained through regular janitorial cleaning, waste handling, and structured hygiene practices.",
  },
  {
    title: "Garden Waste Cleaning",
    label: "Outdoor Areas",
    image: images.services.solidWasteServices.gardenWaste,
    icon: Leaf,
    description:
      "Outdoor gardens and commercial exterior areas are kept neat through organized garden waste clearing, cleaning support, and routine environmental care.",
  },
];

export default function SolidWasteAccordion() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="security-accordion-section solid-waste-accordion-section">
      <div className="container">
        <motion.div
          className="security-accordion-header solid-waste-accordion-header"
          initial={{ opacity: 0, y: 42, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.28 }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2>Regular Cleaning And Waste Care For Better Environments</h2>

          <p>
            Waste handling is integrated into our janitorial and housekeeping
            services, helping clients maintain clean, hygienic, and structured
            spaces while they focus on their daily operations.
          </p>
        </motion.div>

        <motion.div
          className="security-accordion solid-waste-accordion"
          initial={{ opacity: 0, y: 58, filter: "blur(12px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.95,
            delay: 0.12,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          {solidWasteServices.map((service, index) => {
            const isActive = activeIndex === index;
            const Icon = service.icon;

            return (
              <article
                key={service.title}
                className={`security-accordion-card solid-waste-accordion-card ${
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
                  <div className="security-accordion-card__icon solid-waste-accordion-card__icon">
                    <Icon />
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
