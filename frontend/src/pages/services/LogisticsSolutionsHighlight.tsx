import { useEffect, useRef, useState } from "react";
import { motion, useInView, type Variants } from "motion/react";
import {
  ArrowRight,
  Boxes,
  Headphones,
  MapPinned,
  ShieldCheck,
} from "lucide-react";
import { Link } from "react-router-dom";

const highlightItems = [
  {
    icon: Boxes,
    title: "Experienced Staff",
    text: "Professional operational and technical staff trained to support logistics coordination with precision.",
  },
  {
    icon: MapPinned,
    title: "Strategic Positioning",
    text: "Area-based vehicle positioning designed to keep response times shorter and coordination more efficient.",
  },
  {
    icon: Headphones,
    title: "Rapid Coordination",
    text: "Responsive communication and deployment support for urgent assistance and transport logistics.",
  },
  {
    icon: ShieldCheck,
    title: "Objective Consultancy",
    text: "Cost-effective recommendations tailored to your operational requirements, business priorities, and budget.",
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

export default function LogisticsSolutionsHighlight() {
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
      className="security-solutions-highlight logistics-solutions-highlight"
    >
      <div className="security-solutions-highlight__bg logistics-solutions-highlight__bg" />

      <div className="container security-solutions-highlight__shell">
        <motion.div
          className="security-solutions-highlight__copy"
          variants={copyVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >

          <h2>Streamlined Coordination And Complete Dependability.</h2>

          <p>
            Do not let operational bottlenecks slow down your business. Our
            logistics solutions are backed by highly experienced professional
            staff dedicated to managing coordination needs with precision.
          </p>

          <p>
            As an area-based company, Octagon Force keeps its fleet positioned
            close by to support rapid response and seamless execution when you
            need it most. Our management team works directly with you to provide
            objective, cost-effective advice tailored to your business
            requirements and budget.
          </p>

          <a href="https://wa.me/94777660021" target="_blank" rel="noopener noreferrer" className="security-solutions-highlight__button">
            Discuss Logistics Requirements
            <ArrowRight />
          </a>
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