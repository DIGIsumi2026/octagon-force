import { useRef } from "react";
import { motion, useInView, type Variants } from "motion/react";
import {
  ShieldCheck,
  RadioTower,
  Wrench,
  BriefcaseBusiness,
  type LucideIcon,
} from "lucide-react";
import { images } from "../../data/imageAssets";

type WhyChooseItem = {
  icon: LucideIcon;
  title: string;
  description: string;
};

const whyChooseUsItems: WhyChooseItem[] = [
  {
    icon: ShieldCheck,
    title: "Elite Leadership Heritage",
    description:
      "Our security and management teams bring unparalleled tactical expertise to the private sector, with senior personnel possessing distinguished military or law enforcement backgrounds.",
  },
  {
    icon: RadioTower,
    title: "Round-the-Clock Vigilance",
    description:
      "We operate a state-of-the-art, 24/7 Operations and Monitoring Center, ensuring proactive real-time surveillance and rapid emergency responses.",
  },
  {
    icon: Wrench,
    title: "Specialized Technical Expertise",
    description:
      "Our operations are powered by an in-house technical department that undergoes continuous training to consistently meet the highest industry standards.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Strategic & Cost-Effective Consultancy",
    description:
      "We act as an objective partner, providing impartial, tailored recommendations designed to optimize your budget while delivering maximum operational value.",
  },
];

const sectionVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.12,
    },
  },
};

const copyItemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 42,
    filter: "blur(14px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.9,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const headingLineVariants: Variants = {
  hidden: {
    y: "115%",
    opacity: 0,
    filter: "blur(12px)",
  },
  visible: {
    y: "0%",
    opacity: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.95,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const cardsWrapVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.38,
    },
  },
};

const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    x: 130,
    y: 70,
    rotate: 5,
    scale: 0.92,
    filter: "blur(16px)",
  },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    rotate: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.95,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export default function WhyChooseUs() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const isInView = useInView(sectionRef, {
    once: true,
    amount: 0.28,
  });

  return (
    <section ref={sectionRef} className="why-choose-us-section">
      <div className="why-choose-us-bg" aria-hidden="true">
        <video
          className="why-choose-us-video"
          src={images.services.whyChooseUsVideo}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        />
        <div className="why-choose-us-overlay" />
        <div className="why-choose-us-grid-bg" />
      </div>

      <motion.div
        className="container why-choose-us-shell"
        variants={sectionVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <div className="why-choose-us-copy">
          <motion.span
            className="eyebrow eyebrow--light"
            variants={copyItemVariants}
          >
            <span />
            Why Choose Us
          </motion.span>

          <h2>
            <span className="why-choose-us-heading-line">
              <motion.span variants={headingLineVariants}>
                Built On Discipline,
              </motion.span>
            </span>
            <span className="why-choose-us-heading-line">
              <motion.span variants={headingLineVariants}>
                Trust, And Reliable
              </motion.span>
            </span>
            <span className="why-choose-us-heading-line">
              <motion.span variants={headingLineVariants}>
                Service Delivery.
              </motion.span>
            </span>
          </h2>

          <motion.p variants={copyItemVariants}>
            Octagon Force combines leadership heritage, operational vigilance,
            technical capability, and practical consultancy to deliver service
            solutions built around trust, control, and measurable value.
          </motion.p>
        </div>

        <motion.div
          className="why-choose-us-cards"
          variants={cardsWrapVariants}
        >
          {whyChooseUsItems.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.article
                key={item.title}
                className="why-choose-us-card"
                variants={cardVariants}
              >
                <div className="why-choose-us-card__index">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <div className="why-choose-us-card__icon">
                  <Icon />
                </div>

                <div className="why-choose-us-card__content">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </motion.article>
            );
          })}
        </motion.div>
      </motion.div>
    </section>
  );
}