import type React from "react";
import { Link } from "react-router-dom";
import CompanyIntro from "../components/about/CompanyIntro";
import { motion } from "motion/react";
import {
  ArrowRight,
  BadgeCheck,
  Banknote,
  Building2,
  CheckCircle2,
  ClipboardCheck,
  HardHat,
  Home,
  Recycle,
  ShieldCheck,
  Sparkles,
  Target,
  Truck,
  UsersRound,
  Wrench,
} from "lucide-react";

import Reveal from "../components/common/Reveal";
import { images } from "../data/imageAssets";

type FocusArea = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

const focusAreas: FocusArea[] = [
  {
    title: "Security",
    description:
      "Professional security support for people, properties, events, and high-responsibility environments.",
    icon: <ShieldCheck />,
  },
  {
    title: "Transport",
    description:
      "Reliable transport service support for operational movement, staff mobility, and client service needs.",
    icon: <Truck />,
  },
  {
    title: "Technical & Maintenance",
    description:
      "Skilled technical teams for facility systems, maintenance tasks, and operational continuity.",
    icon: <Wrench />,
  },
  {
    title: "Construction",
    description:
      "Project support teams for construction coordination, site supervision, and service execution.",
    icon: <HardHat />,
  },
  {
    title: "Consultancy & Projects",
    description:
      "Structured planning, coordination, and project management support for business operations.",
    icon: <ClipboardCheck />,
  },
  {
    title: "Supply Chain & Logistics",
    description:
      "Storage, goods monitoring, transport coordination, and logistics support from origin to delivery.",
    icon: <Building2 />,
  },
  {
    title: "Solid Waste Management",
    description:
      "Responsible waste collection, sorting, treatment, and disposal support for cleaner environments.",
    icon: <Recycle />,
  },
  {
    title: "Housekeeping",
    description:
      "Professional housekeeping and cleaning services for homes, offices, and managed facilities.",
    icon: <Sparkles />,
  },
];

const values = [
  {
    icon: <BadgeCheck />,
    title: "Professional Discipline",
    description:
      "Every service is handled with structured coordination, trained teams, and responsible execution.",
  },
  {
    icon: <UsersRound />,
    title: "People-Focused Service",
    description:
      "Our work is built around improving the lifestyle, safety, and service experience of our people.",
  },
  {
    icon: <Target />,
    title: "Reliable Operations",
    description:
      "We focus on dependable field performance across security, logistics, maintenance, and support services.",
  },
];

export default function About() {
  return (
    <main className="about-page">
      <section className="about-hero-v2">
        <div className="about-hero-v2__image">
          <img src={images.about.hero} alt="Octagon Force professional service teams" />
        </div>

        <div className="about-hero-v2__overlay" />

        <div className="container about-hero-v2__grid">
          <motion.div
            className="about-hero-v2__copy"
            initial={{ opacity: 0, y: 42 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="eyebrow eyebrow--light">
              <span />
              About Octagon Force
            </span>

            <h1>One Force For Safer, Services for the country.</h1>

            <p>
              Octagon Force is dedicated to serving the country through security,
              transport, technical and maintenance, construction, consultancy,
              project management, logistics, solid waste management, and
              housekeeping services.
            </p>

            <div className="about-hero-v2__actions">
              <Link to="/services" className="about-primary-link">
                Explore Services
                <ArrowRight />
              </Link>

              <Link to="/contact" className="about-secondary-link">
                Contact Us
              </Link>
            </div>
          </motion.div>

          <motion.div
            className="about-hero-v2__panel"
            initial={{ opacity: 0, x: 42 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.75, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="about-hero-v2__panel-top">
              <span>8</span>
              <p>Core focus elements supporting people, properties, businesses, and communities.</p>
            </div>

            <div className="about-hero-v2__mini-list">
              <span>
                <CheckCircle2 />
                Security & protection
              </span>
              <span>
                <CheckCircle2 />
                Cleaning & housekeeping
              </span>
              <span>
                <CheckCircle2 />
                Logistics & transport
              </span>
              <span>
                <CheckCircle2 />
                Maintenance & projects
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="about-story-v2">
        <div className="container">
          <CompanyIntro />

        </div>
      </section>

      <section className="about-focus-v2">
        <div className="container">
          <Reveal>
            <div className="about-section-heading-v2">
              <span className="eyebrow">
                <span />
                What We Cover
              </span>

              <h2>Eight Service Areas. One Professional Standard.</h2>

              <p>
                Our teams support clients through a connected service model built
                for real operational needs.
              </p>
            </div>
          </Reveal>

          <div className="about-focus-v2__grid">
            {focusAreas.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.06}>
                <article className="about-focus-card-v2">
                  <div className="about-focus-card-v2__icon">{item.icon}</div>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="about-values-v2">
        <div className="container">
          <Reveal>
            <div className="about-values-v2__layout">
              <div className="about-values-v2__copy">
                <span className="eyebrow eyebrow--light">
                  <span />
                  Our Standard
                </span>

                <h2>Built On Discipline, Trust, And Reliable Service Delivery.</h2>

                <p>
                  Every Octagon Force service should feel organized, professional,
                  and accountable — from the first client conversation to the final
                  field execution.
                </p>
              </div>

              <div className="about-values-v2__cards">
                {values.map((value, index) => (
                  <Reveal key={value.title} delay={index * 0.08}>
                    <article className="about-value-card-v2">
                      <span>{value.icon}</span>
                      <div>
                        <h3>{value.title}</h3>
                        <p>{value.description}</p>
                      </div>
                    </article>
                  </Reveal>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="about-cta-v2">
        <div className="container">
          <Reveal>
            <div className="about-cta-v2__box">
              <div>
                <span className="eyebrow eyebrow--light">
                  <span />
                  Work With Us
                </span>

                <h2>Need A Reliable Service Partner?</h2>

                <p>
                  Talk to Octagon Force about security, cleaning, transport,
                  logistics, maintenance, and operational support services.
                </p>
              </div>

              <Link to="/contact" className="about-primary-link">
                Get In Touch
                <ArrowRight />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}