import { useRef, type ReactNode } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import {
  ShieldCheck,
  Wrench,
  Truck,
  HardHat,
  Sparkles,
} from "lucide-react";

import Reveal from "../common/Reveal";
import { images } from "../../data/imageAssets";

type ServiceArea = {
  title: string;
  icon: ReactNode;
};

const serviceAreas: ServiceArea[] = [
  {
    title: "Security",
    icon: <ShieldCheck />,
  },
  {
    title: "Technical & Maintenance",
    icon: <Wrench />,
  },
  {
    title: "Transport",
    icon: <Truck />,
  },
  {
    title: "Construction",
    icon: <HardHat />,
  },
  {
    title: "Housekeeping",
    icon: <Sparkles />,
  },
];

export default function CompanyIntro() {
  const sectionRef = useRef<HTMLElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  /*
    Important:
    - Image remains clear until the white section fully covers it.
    - Blur starts only after progress 0.63.
  */
  const imageScale = useTransform(
  scrollYProgress,
  [0, 0.78, 1],
  [1.02, 1.02, 1]
);

  const imageOpacity = useTransform(
  scrollYProgress,
  [0, 0.78, 0.9, 1],
  [1, 1, 0.78, 0.58]
);

  const imageFilter = useTransform(
  scrollYProgress,
  [0, 1],
  [
    "blur(0px) saturate(1.06) contrast(1.05)",
    "blur(0px) saturate(1.06) contrast(1.05)",
  ]
);
  /*
    White section starts below the image.
    It moves up and fully covers the image at around 0.63.
  */
  const cardY = useTransform(
  scrollYProgress,
  [0.08, 0.78, 1],
  ["106vh", "0vh", "0vh"]
);

  const cardRadius = useTransform(
  scrollYProgress,
  [0.08, 0.78],
  ["46px", "0px"]
);

  return (
    <section className="about-company-intro" ref={sectionRef}>
      <div className="about-company-intro__sticky">
        <div className="container about-company-intro__image-container">
          <motion.img
            src={images.about.entry}
            alt="Octagon Force employees representing company services"
            className="about-company-intro__image"
            style={{
              scale: imageScale,
              opacity: imageOpacity,
              filter: imageFilter,
            }}
          />

          <div className="about-company-intro__image-shade" />
        </div>
      </div>

      <div className="container about-company-intro__stack">
        <motion.article
          className="about-company-card"
          style={{
            y: cardY,
            borderRadius: cardRadius,
          }}
        >
          <div className="about-company-card__inner">
            <div className="about-company-card__logo">
              <img
                src={images.about.sumathiLogo}
                alt="Sumathi Universal Management and Investment Private Limited logo"
              />
            </div>

            <div className="about-company-card__content">
              <span className="eyebrow">
                <span />
                About Us
              </span>

              <h2>Part Of A Legacy Built On Unity, Honesty, And Integrity.</h2>

              <p>
                Octagon Force is part of Sumathi Universal Management and
                Investment (Pvt) Ltd, a business conglomerate bound by familial
                values of unity, honesty, and integrity.
              </p>

              <p>
                The foundation of the company was established in 1948 by Late
                Mr. U.W. Sumathipala and his spouse, Late Dr. (Mrs) Milina
                Sumathipala.
              </p>
            </div>
          </div>
        </motion.article>

        <Reveal delay={0.12}>
          <div className="about-company-services">
            <div className="about-company-services__heading">
              <span className="eyebrow">
                <span />
                What We Do
              </span>

              <h3>Dedicated To Serving The Country In Five Key Areas.</h3>
            </div>

            <div className="about-company-services__grid">
              {serviceAreas.map((service, index) => (
                <motion.article
                  key={service.title}
                  className="about-company-service-pill"
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.35 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.07,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <span>{service.icon}</span>
                  <strong>{service.title}</strong>
                </motion.article>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}