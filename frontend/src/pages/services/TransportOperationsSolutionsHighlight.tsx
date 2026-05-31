import { useEffect, useRef, useState } from "react";
import { motion, useInView, type Variants } from "motion/react";
import {
  ArrowRight,
  Headphones,
  Settings,
  ShieldCheck,
  Truck,
} from "lucide-react";
import { Link } from "react-router-dom";

const highlightItems = [
  {
    icon: Truck,
    title: "Asset-Based Network",
    text: "Fleet-backed transportation solutions designed for stronger control, dependability, and service confidence.",
  },
  {
    icon: ShieldCheck,
    title: "Professional Drivers",
    text: "Experienced and trained drivers focused on safe movement, route discipline, and reliable delivery.",
  },
  {
    icon: Settings,
    title: "On-Site Maintenance",
    text: "Fleet readiness supported by dedicated maintenance resources to keep vehicles operating at peak condition.",
  },
  {
    icon: Headphones,
    title: "Responsive Support",
    text: "Dedicated customer service coordination for smoother communication, updates, and operational follow-through.",
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

export default function TransportOperationsSolutionsHighlight() {
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
      className="security-solutions-highlight transport-operations-solutions-highlight"
    >
      <div className="security-solutions-highlight__bg transport-operations-solutions-highlight__bg" />

      <div className="container security-solutions-highlight__shell">
        <motion.div
          className="security-solutions-highlight__copy"
          variants={copyVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <span className="eyebrow eyebrow--light">
            <span />
            Asset-Based Transportation Solutions
          </span>

          <h2>Quality Service And Complete Dependability On The Move.</h2>

          <p>
            In a highly competitive market, Octagon Force stands out as a
            transportation provider committed to operational reliability,
            disciplined movement, and complete peace of mind for every client.
          </p>

          <p>
            We deploy professional, experienced drivers operating top-of-the-line
            equipment, supported by our own on-site fleet maintenance facility
            and a dedicated customer service team. Whether managing routine
            logistics or time-sensitive distribution, our asset-based network
            helps your cargo move safely and efficiently.
          </p>

          <Link to="/contact" className="security-solutions-highlight__button">
            Discuss Transport Requirements
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