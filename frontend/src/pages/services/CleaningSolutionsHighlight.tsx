import { useEffect, useRef, useState } from "react";
import { motion, useInView, type Variants } from "motion/react";
import {
  ArrowRight,
  CalendarCheck,
  Home,
  Leaf,
  Sparkles,
} from "lucide-react";
import { Link } from "react-router-dom";

const highlightItems = [
  {
    icon: Sparkles,
    title: "Deep Sanitizing",
    text: "Structured sanitization methods that help maintain cleaner, safer, and more hygienic environments.",
  },
  {
    icon: CalendarCheck,
    title: "Schedule-Friendly Care",
    text: "Reliable cleaning support designed around busy residential, corporate, and commercial schedules.",
  },
  {
    icon: Home,
    title: "Residential & Office Care",
    text: "Professional cleaning teams for homes, offices, commercial facilities, and shared workspaces.",
  },
  {
    icon: Leaf,
    title: "Outdoor Upkeep",
    text: "Garden cleaning, landscaping, and exterior maintenance to keep outdoor spaces organized and inviting.",
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

export default function CleaningSolutionsHighlight() {
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
      className="security-solutions-highlight cleaning-solutions-highlight"
    >
      <div className="security-solutions-highlight__bg cleaning-solutions-highlight__bg" />

      <div className="container security-solutions-highlight__shell">
        <motion.div
          className="security-solutions-highlight__copy"
          variants={copyVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <span className="eyebrow eyebrow--light">
            <span />
            Professional Housekeeping & Janitorial Solutions
          </span>

          <h2>A Cleaner, Healthier Environment Built Around Your Busy Schedule.</h2>

          <p>
            Regular cleaning is essential to maintaining a healthy, organized,
            and welcoming environment. However, modern schedules often make it
            difficult to manage cleaning and upkeep consistently.
          </p>

          <p>
            Octagon Force steps in to handle the burden of waste, cleaning, and
            maintenance while you focus on your daily priorities. Delivering
            trusted housekeeping and janitorial services for residential and
            commercial spaces, our specialized team manages everything from
            day-to-day cleaning to structural upkeep, ensuring your environment
            remains pristine, organized, and inviting.
          </p>

          <Link to="/contact" className="security-solutions-highlight__button">
            Discuss Cleaning Requirements
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