import { Link } from "react-router-dom";
import {
  Banknote,
  Recycle,
  ShieldCheck,
  Sparkles,
  Truck,
} from "lucide-react";
import Reveal from "../common/Reveal";
import { images } from "../../data/imageAssets";

const detailedServices = [
  {
    number: "01",
    icon: <ShieldCheck />,
    title: "Security Service",
    image: images.hero.H3,
    description:
      "Professional property security, personnel protection, VIP security, special event security, and trained security support.",
    points: [
      "Property security",
      "Personnel protection",
      "VIP security",
      "Special event security",
    ],
  },
  {
    number: "02",
    icon: <Sparkles />,
    title: "Cleaning Services",
    image: images.hero.H4,
    description:
      "Reliable house cleaning, office cleaning, maintenance, and facility cleaning services for professional spaces.",
    points: [
      "House cleaning",
      "Office cleaning",
      "Facility maintenance",
      "Scheduled cleaning support",
    ],
  },
  {
    number: "03",
    icon: <Banknote />,
    title: "Cash Transport Service",
    image: images.hero.H5,
    description:
      "Secure and dependable cash transportation services handled with confidentiality, discipline, and operational care.",
    points: [
      "Secure cash movement",
      "Trained handling",
      "Confidential service",
      "Reliable transport support",
    ],
  },
  {
    number: "04",
    icon: <Truck />,
    title: "Supply Chain Management & Logistics",
    image: images.hero.H6,
    description:
      "Storage facilities, goods monitoring, transportation support, and logistics coordination from origin to final delivery.",
    points: [
      "Storage support",
      "Goods monitoring",
      "Transport coordination",
      "Logistics management",
    ],
  },
  {
    number: "05",
    icon: <Recycle />,
    title: "Solid Waste Management",
    image: images.hero.H7,
    description:
      "Responsible waste collection, sorting, treatment, and disposal services focused on cleaner and safer communities.",
    points: [
      "Waste collection",
      "Sorting support",
      "Treatment and disposal",
      "Cleaner community focus",
    ],
  },
];

export default function KeepDetailedServices() {
  return (
    <section className="section keep-detailed-services">
      <div className="container">
        <Reveal>
          <div className="keep-section-header keep-section-header--dark">
            <span className="eyebrow eyebrow--light">
              <span />
              What We Do
            </span>

            <h2>Detailed Services With Strong Visual Cards.</h2>

            <p>
              This saved section uses large alternating service cards with
              rounded images, dark panels, and clear service details.
            </p>
          </div>
        </Reveal>

        <div className="keep-detailed-list">
          {detailedServices.map((service, index) => (
            <Reveal key={service.title} delay={index * 0.08}>
              <article
                className={`keep-detailed-card ${
                  index % 2 === 1 ? "keep-detailed-card--reverse" : ""
                }`}
              >
                <div className="keep-detailed-card__content">
                  <span className="keep-detailed-card__number">
                    {service.number}
                  </span>

                  <div className="keep-detailed-card__icon">
                    {service.icon}
                  </div>

                  <h3>{service.title}</h3>

                  <p>{service.description}</p>

                  <ul>
                    {service.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>

                  <Link to="/services" className="keep-detailed-card__button">
                    View Service
                  </Link>
                </div>

                <div className="keep-detailed-card__image">
                  <img src={service.image} alt={service.title} />
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}