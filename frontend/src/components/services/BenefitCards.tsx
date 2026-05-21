import { Link } from "react-router-dom";
import {
  ShieldCheck,
  Sparkles,
  Banknote,
  Truck,
  Recycle,
  ArrowRight,
} from "lucide-react";
import Reveal from "../common/Reveal";

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

export default function BenefitCards() {
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
      </div>
    </section>
  );
}