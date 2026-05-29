import { useEffect, useRef, useState } from "react";
import { motion, useInView, type Variants } from "motion/react";
import {
  ArrowRight,
  Clock3,
  RadioTower,
  ShieldCheck,
  UsersRound,
} from "lucide-react";
import { Link } from "react-router-dom";

const highlightItems = [
  {
    icon: Clock3,
    title: "24/7 Vigilance",
    text: "Continuous protection and active supervision for properties, people, and assets.",
  },
  {
    icon: RadioTower,
    title: "Operations Monitoring",
    text: "Real-time surveillance, rapid response, and coordinated security communication.",
  },
  {
    icon: ShieldCheck,
    title: "Disciplined Security Force",
    text: "Professionally trained officers guided by experienced security leadership.",
  },
  {
    icon: UsersRound,
    title: "Tailored Protection",
    text: "Flexible security solutions for static guarding, VIP protection, and crowd control.",
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

export default function SecuritySolutionsHighlight() {
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
    <section ref={sectionRef} className="security-solutions-highlight">
      <div className="security-solutions-highlight__bg" />

      <div className="container security-solutions-highlight__shell">
        <motion.div
          className="security-solutions-highlight__copy"
          variants={copyVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <span className="eyebrow eyebrow--light">
            <span />
            Comprehensive Security Solutions
          </span>

          <h2>24/7 Vigilance And Protection For Your Assets.</h2>

          <p>
            Don't compromise on the safety of your property, people, or financial
            assets. Our comprehensive security solutions are driven by management
            with extensive military and police experience, ensuring a highly
            disciplined and professional force on the ground.
          </p>

          <p>
            Operating 24/7 with unwavering vigilance, we utilize a dedicated
            Operations and Monitoring Center for real-time surveillance, rapid
            response, and seamless coordination. From static guarding and private
            security to VIP protection and crowd management, we provide highly
            trained officers to deliver maximum security and complete peace of
            mind tailored to your exact needs.
          </p>

          <Link to="/contact" className="security-solutions-highlight__button">
            Discuss Security Requirements
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