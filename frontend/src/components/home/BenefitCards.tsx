import { useRef } from "react";
import type React from "react";
import { Link } from "react-router-dom";
import {
  ShieldCheck,
  Sparkles,
  Banknote,
  Truck,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import {
  motion,
  useScroll,
  useTransform,
  type MotionValue,
} from "motion/react";

import Reveal from "../common/Reveal";
import { images } from "../../data/imageAssets";

type StatService = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

type VisualService = {
  number: string;
  title: string;
  caption: string;
  image: string;
  points: string[];
};

const octagonServices: StatService[] = [
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
    title: "Transport Operations",
    description:
      "Dependable asset based transportation, secure cash in transit services, professional driver deployment, top tier equipment.",
  },
];

const visualServices: VisualService[] = [
  {
    number: "01",
    title: "Security Service",
    caption:
      "Disciplined security teams for properties, personnel, VIP protection, special events, and high-responsibility environments.",
    image: images.services.security,
    points: ["Property security", "VIP protection", "Event security"],
  },
  {
    number: "02",
    title: "Cleaning Services",
    caption:
      "Professional cleaning and maintenance support for homes, offices, commercial spaces, and managed facilities.",
    image: images.services.cleaning,
    points: ["House cleaning", "Office cleaning", "Maintenance"],
  },
  {
    number: "03",
    title: "Cash Transport",
    caption:
      "Secure cash movement handled with confidentiality, route discipline, trained personnel, and professional care.",
    image: images.services.cashTransport,
    points: ["Cash in transit", "Secure handling", "Reliable delivery"],
  },
  {
  number: "04",
  title: "Transport Operations",
  caption:
    "Reliable transport solutions delivered through professional drivers, fleet readiness, quality equipment, and disciplined operational support.",
  image: images.services.serviceTransportOperations,
  points: ["Professional drivers", "Fleet readiness", "Dependable service"],
},
];

export default function BenefitCards() {
  const stackRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: stackRef,
    offset: ["start 80%", "end 20%"],
  });

  return (
    <section className="section benefit-services-section" id="services">
      <div className="container">
        <Reveal>
          <div className="benefit-services-header">
            <span className="eyebrow">
              <span />
              Our Services
            </span>

            <h2>Professional Services Built Around Your Needs</h2>

            <p>
              Octagon Force delivers trusted security, cleaning, cash transport,
              logistics and solid waste management services with discipline,
              reliability and professional care.
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

        <div className="visual-stack-section">
          <Reveal>
            <div className="visual-stack-header">
              <span className="eyebrow eyebrow--light">
                <span />
                 Our Expertise
              </span>

              <h2>Reliable Service Solutions For Every Operation.</h2>

              <p>
                 Explore Octagon Force services across security, cleaning, cash transport,
    logistics, and solid waste management through a focused visual service
    experience.
              </p>
            </div>
          </Reveal>

          <div className="visual-stack-list" ref={stackRef}>
            {visualServices.map((service, index) => (
              <VisualStackCard
                key={service.title}
                service={service}
                index={index}
                total={visualServices.length}
                scrollYProgress={scrollYProgress}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

type VisualStackCardProps = {
  service: VisualService;
  index: number;
  total: number;
  scrollYProgress: MotionValue<number>;
};

function VisualStackCard({
  service,
  index,
  total,
  scrollYProgress,
}: VisualStackCardProps) {
  const start = index / total;
  const middle = Math.min(start + 0.16, 1);
  const end = Math.min(start + 0.34, 1);

  const y = useTransform(
    scrollYProgress,
    [Math.max(start - 0.12, 0), middle, end],
    [160, 0, index * 12]
  );

  const scale = useTransform(
    scrollYProgress,
    [start, 1],
    [1, 1 - (total - index - 1) * 0.018]
  );


  const cardStyle = {
    "--card-index": index,
    y,
    scale,
  } as unknown as React.ComponentProps<typeof motion.article>["style"];

  return (
    <motion.article className="visual-stack-card" style={cardStyle}>
      <div className="visual-stack-card__content">
        <span className="visual-stack-card__number">{service.number}</span>

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

        <Link to="/services" className="visual-stack-card__link">
          Learn More
          <ArrowRight />
        </Link>
      </div>

      <div className="visual-stack-card__image">
        <img
          src={service.image}
          alt={service.title}
          loading="lazy"
          decoding="async"
        />
      </div>
    </motion.article>
  );
}
