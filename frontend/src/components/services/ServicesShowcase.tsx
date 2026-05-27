import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { images } from "../../data/imageAssets";

const services = [
  {
    title: "Security Services",
    tag: "Protection",
    image: images.services.cards.securityCard,
    href: "/services/security",
    description:
      "Professional security solutions for corporate buildings, commercial properties, apartments, institutions, and service environments with disciplined teams and reliable supervision.",
  },
  {
    title: "Cleaning & Housekeeping",
    tag: "Facility Care",
    image: images.services.cards.cleaningCrad,
    href: "/services/cleaning-housekeeping",
    description:
      "Clean, hygienic, and well-managed spaces supported by trained cleaning and housekeeping staff for offices, hotels, facilities, and commercial environments.",
  },
  {
    title: "Cash Transport",
    tag: "Secure Transit",
    image: images.services.cards.cashTrasportCard,
    href: "/services/cash-transport",
    description:
      "Confidential and organized cash transport support handled by professional teams, secure procedures, and dependable operational coordination.",
  },
  {
    title: "Transport Services",
    tag: "Mobility",
    image: images.services.cards.transportCard,
    href: "/services/transport",
    description:
      "Reliable transport support for business operations, staff movement, service coordination, and professional mobility requirements.",
  },
  {
    title: "Logistics Support",
    tag: "Operations",
    image: images.services.cards.logisticsCard,
    href: "/services/logistics",
    description:
      "Structured supply chain and logistics support including goods handling, delivery coordination, warehouse assistance, and operational service support.",
  },
  {
    title: "Solid Waste Management",
    tag: "Environment",
    image: images.services.cards.wasteCard,
    href: "/services/waste-management",
    description:
      "Responsible waste management support with organized collection, separated recycling practices, clean handling, and environmental care.",
  },
];

export default function ServicesShowcase() {
  return (
    <section id="service-overview" className="services-showcase-section">
      <div className="container">
        <motion.div
          className="services-showcase-header"
          initial={{ opacity: 0, y: 34 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="eyebrow">
            <span />
            Our Services
          </span>

          <h2>Reliable Service Areas For Everyday Operations.</h2>

          <p>
            Explore the core services delivered by Octagon Force through
            trained teams, structured supervision, and dependable operational
            standards.
          </p>
        </motion.div>

        <div className="services-showcase-grid">
  {services.map((service, index) => {
    const columnOffset = index % 3;
    const startX = columnOffset === 0 ? -90 : columnOffset === 1 ? 0 : 90;
    const startRotate = columnOffset === 0 ? -7 : columnOffset === 1 ? 3 : 7;

    return (
      <motion.article
        key={service.title}
        className="service-flip-card"
        data-card-index={index}
        initial={{
          opacity: 0,
          y: 180,
          x: startX,
          rotate: startRotate,
          scale: 0.86,
          filter: "blur(14px)",
        }}
        whileInView={{
          opacity: 1,
          y: 0,
          x: 0,
          rotate: 0,
          scale: 1,
          filter: "blur(0px)",
        }}
        viewport={{ once: true, amount: 0.22 }}
        transition={{
          duration: 0.95,
          delay: index * 0.11,
          ease: [0.16, 1, 0.3, 1],
        }}
        tabIndex={0}
      >
              <div className="service-flip-card__inner">
                <div className="service-flip-card__face service-flip-card__front">
                  <img src={service.image} alt={service.title} />

                  <div className="service-flip-card__shade" />

                  <div className="service-flip-card__front-content">
                    <span>{service.tag}</span>
                    <h3>{service.title}</h3>

                    <Link to={service.href} className="service-card-button">
                      Read More
                      <ArrowRight />
                    </Link>
                  </div>
                </div>

                <div className="service-flip-card__face service-flip-card__back">
                  <img src={service.image} alt={`${service.title} detail`} />

                  <div className="service-flip-card__back-overlay" />

                  <div className="service-flip-card__back-content">
                    <span>{service.tag}</span>
                    <h3>{service.title}</h3>

                    <p>{service.description}</p>

                    <Link to={service.href} className="service-card-button">
                      Read More
                      <ArrowRight />
                    </Link>
                  </div>
                </div>
              </div>
            </motion.article>
    );  
})}
        </div>
      </div>
    </section>
  );
}