import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ShieldCheck,
  Sparkles,
  Banknote,
  Truck,
  Recycle,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import Reveal from "../common/Reveal";
import { images } from "../../data/imageAssets";

const octagonServices = [
  {
    icon: <ShieldCheck />,
    title: "Security Service",
    description:
      "Professional property security, personnel protection, VIP security, special event security, and trained security support.",
  },
  {
    icon: <Sparkles />,
    title: "Cleaning Services",
    description:
      "Reliable house cleaning, office cleaning, maintenance, and facility cleaning solutions for cleaner homes and workplaces.",
  },
  {
    icon: <Banknote />,
    title: "Cash Transport",
    description:
      "Secure and dependable cash transport services handled with discipline, confidentiality, and professional care.",
  },
  {
    icon: <Truck />,
    title: "Supply Chain & Logistics",
    description:
      "Storage facilities, goods monitoring, transport coordination, and logistics support from origin to final delivery.",
  },
  {
    icon: <Recycle />,
    title: "Solid Waste Management",
    description:
      "Responsible waste collection, sorting, treatment, and disposal services focused on cleaner and safer communities.",
  },
];

const visualServices = [
  {
    number: "01",
    title: "Security Service",
    caption:
      "Trained security teams for properties, personnel, VIP protection, events, and high-responsibility environments.",
    image: images.services.security,
    points: [
      "Property security",
      "Personnel protection",
      "VIP security",
      "Special event security",
    ],
  },
  {
    number: "02",
    title: "Cleaning Services",
    caption:
      "Professional cleaning and maintenance support for homes, offices, commercial locations, and managed facilities.",
    image: images.services.cleaning,
    points: [
      "House cleaning",
      "Office cleaning",
      "Maintenance",
      "Facility cleaning",
    ],
  },
  {
    number: "03",
    title: "Cash Transport Service",
    caption:
      "Secure cash movement handled with confidentiality, discipline, route planning, and professional care.",
    image: images.services.cashTransport,
    points: [
      "Secure transport",
      "Confidential handling",
      "Trained personnel",
      "Reliable delivery",
    ],
  },
  {
    number: "04",
    title: "Supply Chain & Logistics",
    caption:
      "Storage, monitoring, coordination, and transportation support from the origin point to final delivery.",
    image: images.services.supplyChain,
    points: [
      "Storage support",
      "Goods monitoring",
      "Transport coordination",
      "Logistics management",
    ],
  },
  {
    number: "05",
    title: "Solid Waste Management",
    caption:
      "Responsible waste collection, sorting, treatment, and disposal services for cleaner and safer communities.",
    image: images.services.solidWaste,
    points: [
      "Waste collection",
      "Waste sorting",
      "Treatment support",
      "Safe disposal",
    ],
  },
];

export default function BenefitCards() {
  const [activeCard, setActiveCard] = useState(0);

  return (
    <section className="section benefit-services-section" id="services">
      <div className="container">
        <Reveal>
          <div className="benefit-services-header">
            <span className="eyebrow">
              <span />
              Our Services
            </span>

            <h2>Professional Services Built Around Your Needs.</h2>

            <p>
              Octagon Force delivers trusted security, cleaning, cash transport,
              logistics, and solid waste management services with discipline,
              reliability, and professional care.
            </p>
          </div>
        </Reveal>

        <div className="benefit-services-grid">
          {octagonServices.map((service, index) => (
            <Reveal key={service.title} delay={index * 0.08}>
              <article className="benefit-service-card">
                <div className="benefit-service-card__number">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <div className="benefit-service-card__icon">
                  {service.icon}
                </div>

                <h3>{service.title}</h3>

                <p>{service.description}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.25}>
          <div className="benefit-services-action">
            <Link to="/services" className="benefit-services-button">
              See More
              <ArrowRight />
            </Link>
          </div>
        </Reveal>

        <div className="visual-services-block">
          <Reveal>
            <div className="visual-services-header">
              <span className="eyebrow eyebrow--light">
                <span />
                Service Details
              </span>

              <h2>Explore Our Core Services Visually.</h2>

              <p>
                Each service is designed to support people, businesses, and
                organizations with dependable field teams, structured workflows,
                and professional execution.
              </p>
            </div>
          </Reveal>

          <div className="visual-services-stack">
            {visualServices.map((service, index) => (
              <article
                key={service.title}
                className={`visual-service-card ${
                  activeCard === index ? "is-active" : ""
                }`}
                style={{ "--card-index": index } as React.CSSProperties}
                onMouseEnter={() => setActiveCard(index)}
              >
                <div className="visual-service-card__content">
                  <span className="visual-service-card__number">
                    {service.number}
                  </span>

                  <h3>{service.title}</h3>

                  <p>{service.caption}</p>

                  <ul>
                    {service.points.map((point) => (
                      <li key={point}>
                        <CheckCircle2 />
                        {point}
                      </li>
                    ))}
                  </ul>

                  <Link to="/services" className="visual-service-card__link">
                    Learn More
                    <ArrowRight />
                  </Link>
                </div>

                <div className="visual-service-card__image">
                  <img src={service.image} alt={service.title} />
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}