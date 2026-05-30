import { useEffect, useRef, useState } from "react";
import { motion, useInView, type Variants } from "motion/react";
import {
  ArrowRight,
  Banknote,
  LockKeyhole,
  ShieldCheck,
  Truck,
} from "lucide-react";
import { Link } from "react-router-dom";

const highlightItems = [
  {
    icon: ShieldCheck,
    title: "Risk-Controlled Transit",
    text: "High-risk cash movements managed with maximum security precautions and disciplined operational planning.",
  },
  {
    icon: Banknote,
    title: "Armed Professionals",
    text: "Cash transport handled by rigorously trained armed security personnel focused on asset safety.",
  },
  {
    icon: Truck,
    title: "Specialized Vehicles",
    text: "Secure transport vehicles equipped with dedicated protection features for cash-in-transit operations.",
  },
  {
    icon: LockKeyhole,
    title: "Built-In Safe Storage",
    text: "Financial assets locked inside heavy-duty internal safes throughout the complete transit route.",
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

export default function CashTransportSolutionsHighlight() {
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
      className="security-solutions-highlight cash-transport-solutions-highlight"
    >
      <div className="security-solutions-highlight__bg cash-transport-solutions-highlight__bg" />

      <div className="container security-solutions-highlight__shell">
        <motion.div
          className="security-solutions-highlight__copy"
          variants={copyVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <span className="eyebrow eyebrow--light">
            <span />
            Secure Cash Transport Services
          </span>

          <h2>High-Risk Asset Protection With Absolute Dependability.</h2>

          <p>
            Protect your financial assets with transit solutions engineered to
            reduce high-risk exposure. Our specialized cash transport service is
            executed by rigorously trained armed security professionals using
            vehicles equipped with dedicated security equipment.
          </p>

          <p>
            By securing your assets inside heavy-duty internal safes throughout
            the entire transit route, Octagon Force stays one step ahead of
            external threats to help ensure your funds reach their destination
            safely, reliably, and without compromise.
          </p>

          <Link to="/contact" className="security-solutions-highlight__button">
            Discuss Cash Transport
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