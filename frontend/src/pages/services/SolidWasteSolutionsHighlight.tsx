import { useEffect, useRef, useState } from "react";
import { motion, useInView, type Variants } from "motion/react";
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  Home,
  Sparkles,
  Trash2,
} from "lucide-react";
import { Link } from "react-router-dom";

const highlightItems = [
  {
    icon: Trash2,
    title: "Regular Waste Clearance",
    text: "Dependable waste handling and cleanup support to prevent buildup and maintain presentation.",
  },
  {
    icon: Sparkles,
    title: "Hygienic Environments",
    text: "Structured janitorial cleaning focused on safer, cleaner, and healthier spaces.",
  },
  {
    icon: Building2,
    title: "Office & Commercial Care",
    text: "Waste cleaning and housekeeping support for corporate offices and commercial facilities.",
  },
  {
    icon: Home,
    title: "Residential Support",
    text: "Regular cleaning assistance for homes, apartments, and residential spaces.",
  },
];

const copyVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 46,
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

const cardsWrapVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.16,
      delayChildren: 0.28,
    },
  },
};

const cardRevealVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 52,
    rotate: -3,
    scale: 0.92,
    filter: "blur(14px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    rotate: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.82,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export default function SolidWasteSolutionsHighlight() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const isInView = useInView(sectionRef, {
    once: true,
    amount: 0.28,
  });

  const [cardOrder, setCardOrder] = useState(highlightItems);

  useEffect(() => {
    if (!isInView) return;

    const startShuffle = window.setTimeout(() => {
      const interval = window.setInterval(() => {
        setCardOrder((current) => {
          const [first, ...rest] = current;
          return [...rest, first];
        });
      }, 3200);

      return () => window.clearInterval(interval);
    }, 1700);

    return () => window.clearTimeout(startShuffle);
  }, [isInView]);

  return (
    <section
      ref={sectionRef}
      className="security-solutions-highlight solid-waste-solutions-highlight"
    >
      <div className="security-solutions-highlight__bg solid-waste-solutions-highlight__bg" />

      <div className="container security-solutions-highlight__shell">
        <motion.div
          className="security-solutions-highlight__copy"
          variants={copyVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <span className="eyebrow eyebrow--light">
            <span />
            Integrated Waste Removal & Housekeeping
          </span>

          <h2>Hygienic, Organized, And Regular Waste Clearance Solutions.</h2>

          <p>
            Do not let accumulated waste compromise the hygiene and presentation
            of your facility. Our janitorial and housekeeping division steps in
            to manage your environment, cleaning and organizing waste so you can
            stay focused on your daily priorities.
          </p>

          <p>
            We provide dependable regular cleaning and waste handling across
            residential properties, corporate offices, and commercial gardens.
            Operating with high standards of sanitization, our team helps ensure
            a clean, safe, and pristine environment for employees, clients, and
            residents.
          </p>

          <Link to="/contact" className="security-solutions-highlight__button">
            Discuss Waste Cleaning Support
            <ArrowRight />
          </Link>
        </motion.div>

        <motion.div
          className="security-solutions-highlight__cards security-solutions-highlight__cards--shuffle"
          variants={cardsWrapVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {cardOrder.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.article
                layout
                key={item.title}
                className={`security-solutions-highlight__card ${
                  index === 0 ? "is-leading-card" : ""
                }`}
                variants={cardRevealVariants}
                transition={{
                  layout: {
                    duration: 0.95,
                    ease: [0.16, 1, 0.3, 1],
                  },
                }}
              >
                <span className="security-solutions-highlight__card-number">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div className="security-solutions-highlight__icon">
                  <Icon />
                </div>

                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}