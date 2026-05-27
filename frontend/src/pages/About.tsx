import { Link } from "react-router-dom";
import CompanyIntro from "../components/about/CompanyIntro";
import BoardManagement from "../components/about/BoardManagement";
import { motion } from "motion/react";
import AboutCompanyLogos from "../components/about/AboutCompanyLogos";
import AboutContactBanner from "../components/about/AboutContactBanner";
import {
  ArrowRight,
  BadgeCheck,
  CheckCircle2,
  Target,
  UsersRound,
} from "lucide-react";

import Reveal from "../components/common/Reveal";
import { images } from "../data/imageAssets";

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
          <img
            src={images.about.hero}
            alt="Octagon Force professional service teams"
          />
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
            transition={{
              duration: 0.75,
              delay: 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <div className="about-hero-v2__panel-top">
              <span>8</span>
              <p>
                Core focus elements supporting people, properties, businesses,
                and communities.
              </p>
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

      <BoardManagement />
      <AboutCompanyLogos/>
      <AboutContactBanner />
    </main>
  );
}