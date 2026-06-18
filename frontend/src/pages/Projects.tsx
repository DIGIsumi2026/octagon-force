import { useEffect, useRef, useState, type CSSProperties } from "react";
import { AnimatePresence, motion } from "motion/react";
import {
  ArrowRight,
  Building2,
  Landmark,
  Store,
  Waves,
} from "lucide-react";
import { Link } from "react-router-dom";
import { images } from "../data/imageAssets";

const projects = [
  {
    number: "01",
    title: "Cargills Food City",
    category: "Commercial & Retail Deployments",
    logo: images.projects.logos.foodCity,
    image: images.projects.showcase.foodCity,
    icon: Store,
    locations: "Katubadda, Thalawathugoda, Nugegoda, Maradana, Majestic City",
    description:
      "Active service presence across major Cargills Food City branches, supporting high-traffic retail environments with disciplined supervision, operational support, and reliable service coverage.",
    tags: ["Retail deployment", "Branch coverage", "Operational support"],
  },
  {
    number: "02",
    title: "Cool Planet",
    category: "Retail Facility Support",
    logo: images.projects.logos.coolPlanet,
    image: images.projects.showcase.coolPlanet,
    icon: Building2,
    locations: "Mount Lavinia, Delkanda",
    description:
      "Retail facility security and operational support deployments for premium shopping environments requiring customer-friendly service presence, structured monitoring, and dependable coordination.",
    tags: ["Retail security", "Facility support", "Customer environment"],
  },
  {
    number: "03",
    title: "Kapri Super Center",
    category: "Commercial Space Deployments",
    logo: images.projects.logos.kapri,
    image: images.projects.showcase.kapri,
    icon: Store,
    locations: "Mount Lavinia, Negombo",
    description:
      "Commercial space deployments supporting daily retail operations through reliable service presence, organized supervision, and consistent operational discipline.",
    tags: ["Commercial support", "Retail operations", "Service presence"],
  },
  {
    number: "04",
    title: "Calamansi Cove Villas",
    category: "Hospitality & Leisure Projects",
    logo: images.projects.logos.calamansi,
    image: images.projects.showcase.calamansi,
    icon: Waves,
    locations: "Premium luxury villa environment",
    description:
      "Luxury villa security and environmental support project focused on guest safety, site presentation, discreet service presence, and premium hospitality standards.",
    tags: ["Luxury villas", "Environmental support", "Guest safety"],
  },
  {
    number: "05",
    title: "DFCC Bank",
    category: "Banking & Corporate Deployments",
    logo: images.projects.logos.dfcc,
    image: images.projects.showcase.dfcc,
    icon: Landmark,
    locations: "Specialized corporate and financial institution environment",
    description:
      "Specialized corporate and financial institution asset protection project requiring disciplined security execution, reliable access control, and dependable supervision.",
    tags: ["Asset protection", "Corporate security", "Financial institution"],
  },
];

type ProjectItem = (typeof projects)[number];

function ProjectQueueShowcase({ projects }: { projects: ProjectItem[] }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const hoverTimerRef = useRef<number | null>(null);

  const activeProject = projects[activeIndex];
  const ActiveIcon = activeProject.icon;

  const clearHoverTimer = () => {
    if (hoverTimerRef.current) {
      window.clearTimeout(hoverTimerRef.current);
      hoverTimerRef.current = null;
    }
  };

  const handleProjectChange = (index: number, immediate = false) => {
    clearHoverTimer();

    if (index === activeIndex) return;

    if (immediate) {
      setActiveIndex(index);
      return;
    }

    hoverTimerRef.current = window.setTimeout(() => {
      setActiveIndex(index);
    }, 220);
  };

  useEffect(() => {
    return () => {
      clearHoverTimer();
    };
  }, []);

  return (
    <motion.div
      className="project-queue-showcase sp-project-showcase"
      initial={{ opacity: 0, y: 70, scale: 0.96, filter: "blur(14px)" }}
      whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
      viewport={{ once: true, amount: 0.22 }}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
    >
      <AnimatePresence mode="sync">
        <motion.div
          key={activeProject.title}
          className="project-queue-showcase__active-bg"
          initial={{ opacity: 0, scale: 1.035 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{ duration: 0.34, ease: [0.16, 1, 0.3, 1] }}
        >
          <img
            src={activeProject.image}
            alt={`${activeProject.title} deployment`}
            loading="lazy"
            decoding="async"
          />
        </motion.div>
      </AnimatePresence>

      <div className="project-queue-showcase__shade" />
      <div className="project-queue-showcase__glow" />

      <AnimatePresence mode="sync">
        <motion.div
          key={`${activeProject.title}-content`}
          className="project-queue-showcase__content"
          initial={{ opacity: 0, x: -26, filter: "blur(8px)" }}
          animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
          exit={{ opacity: 0, x: -18, filter: "blur(7px)" }}
          transition={{
            duration: 0.28,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          <div className="project-queue-showcase__number">
            {activeProject.number}
          </div>

          <div className="project-queue-showcase__logo sp-project-showcase-logo">
            <img
              src={activeProject.logo}
              alt={`${activeProject.title} logo`}
              loading="lazy"
              decoding="async"
            />
          </div>

          <span className="project-queue-showcase__category">
            {activeProject.category}
          </span>

          <h3>{activeProject.title}</h3>

          <p className="sp-project-showcase-description">
            {activeProject.description}
          </p>

          <div className="project-queue-showcase__locations">
            {activeProject.locations}
          </div>

          <div className="project-queue-showcase__tags">
            {activeProject.tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>

          <Link to="/contact" className="project-queue-showcase__button">
            Contact Us
            <ArrowRight />
          </Link>
        </motion.div>
      </AnimatePresence>

      <AnimatePresence mode="sync">
        <motion.div
          className="project-queue-showcase__badge"
          key={`${activeProject.title}-badge`}
          initial={{ opacity: 0, scale: 0.78, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 8 }}
          transition={{
            duration: 0.25,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          <ActiveIcon />
        </motion.div>
      </AnimatePresence>

      <div className="project-queue-showcase__thumb-queue">
        {projects.map((project, index) => {
          const isActive = index === activeIndex;

          return (
            <motion.button
              key={project.title}
              type="button"
              className={`project-queue-thumb sp-project-showcase-card ${isActive ? "is-active" : ""}`}
              onMouseEnter={() => handleProjectChange(index)}
              onMouseLeave={clearHoverTimer}
              onFocus={() => handleProjectChange(index, true)}
              onClick={() => handleProjectChange(index, true)}
              style={{ "--thumb-index": index } as CSSProperties}
              initial={{ opacity: 0, y: 54, scale: 0.86 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.58,
                delay: 0.1 + index * 0.045,
                ease: [0.16, 1, 0.3, 1],
              }}
              aria-label={`Show ${project.title}`}
              aria-pressed={isActive}
            >
              <img
                src={project.image}
                alt={`${project.title} preview`}
                loading="lazy"
                decoding="async"
              />

              <span className="project-queue-thumb__number">
                {project.number}
              </span>

              <span className="project-queue-thumb__title">
                {project.title}
              </span>
            </motion.button>
          );
        })}
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <main className="projects-page">
      <section className="projects-hero">
        <div className="projects-hero__bg" />

        <div className="projects-hero__image">
          <motion.img
            src={images.projects.hero}
            alt="Octagon Force project deployments"
            initial={{ scale: 1.08 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
          />
        </div>

        <div className="container projects-hero__content">
          <motion.div
            className="projects-hero__copy"
            initial={{ opacity: 0, y: 46, filter: "blur(14px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="eyebrow eyebrow--light">
              <span />
              Our Deployments
            </span>

            <h1>Featured Projects & Active Deployments.</h1>

            <p>
              Proven operational excellence across Sri Lanka&apos;s leading
              retail, hospitality, banking, corporate, government, and critical
              infrastructure environments.
            </p>

            <Link to="/contact" className="projects-hero__button">
              Discuss Your Project
              <ArrowRight />
            </Link>
          </motion.div>

          <motion.div
            className="projects-hero__stats"
            initial={{ opacity: 0, y: 34 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.85,
              delay: 0.28,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <article>
              <strong>06+</strong>
              <span>Deployment sectors</span>
            </article>

            <article>
              <strong>24/7</strong>
              <span>Operational vigilance</span>
            </article>

            <article>
              <strong>100%</strong>
              <span>Disciplined execution focus</span>
            </article>
          </motion.div>
        </div>
      </section>

      <section className="project-presentation-section" id="project-presentation">
        <div className="project-presentation-bg" />

        <div className="container project-presentation-container">
          <motion.div
            className="project-presentation-header"
            initial={{ opacity: 0, y: 34, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.82, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="eyebrow">
              <span />
              Project Presentation
            </span>

            <h2>Featured Deployments In One Operational Showcase.</h2>

            <p>
              Hover each deployment image to expand the project, view the
              description, and connect with Octagon Force for similar operational
              support.
            </p>
          </motion.div>

          <ProjectQueueShowcase projects={projects} />
        </div>
      </section>

      <section className="projects-brief-section">
        <div className="projects-brief-section__bg" />

        <div className="container projects-brief-section__shell">
          <motion.div
            className="projects-brief-section__copy"
            initial={{ opacity: 0, y: 46, filter: "blur(14px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="eyebrow eyebrow--light">
              <span />
              Featured Projects & Active Deployments
            </span>

            <h2>
              Proven Operational Excellence Across Sri Lanka&apos;s Leading
              Sectors.
            </h2>

            <p>
              We do not just offer services; we manage critical operational
              environments with absolute precision. Octagon Force&apos;s project
              footprint is demonstrated daily through active deployments at major
              financial institutions like DFCC Bank, major retail networks
              including Cargills Food City, commercial retail spaces such as
              Cool Planet and Kapri Super Center, premium hospitality venues like
              Calamansi Cove Villas, and critical state infrastructure such as
              the Department of Meteorology.
            </p>

            <p>
              Our diverse project portfolio stands as a testament to reliability,
              discipline, and uncompromising standards of execution nationwide.
            </p>
          </motion.div>

          <motion.div
            className="projects-brief-section__cards"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.28 }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.14,
                  delayChildren: 0.24,
                },
              },
            }}
          >
            {[
              ["Retail", "Cargills Food City, Cool Planet, Kapri Super Center"],
              ["Hospitality", "Calamansi Cove Villas"],
              ["Banking", "DFCC Bank"],
              ["Government", "Department of Meteorology"],
            ].map(([title, text], index) => (
              <motion.article
                key={title}
                variants={{
                  hidden: {
                    opacity: 0,
                    y: 42,
                    rotate: -3,
                    scale: 0.92,
                    filter: "blur(12px)",
                  },
                  visible: {
                    opacity: 1,
                    y: 0,
                    rotate: 0,
                    scale: 1,
                    filter: "blur(0px)",
                    transition: {
                      duration: 0.78,
                      ease: [0.16, 1, 0.3, 1],
                    },
                  },
                }}
              >
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="projects-contact-cta">
        <div className="container projects-contact-cta__container">
          <motion.div
            className="projects-contact-cta__panel"
            style={
              {
                "--projects-cta-bg": `url(${images.projects.contactCta})`,
              } as CSSProperties
            }
            initial={{ opacity: 0, y: 52, filter: "blur(14px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="eyebrow eyebrow--light">
              <span />
              Start Your Deployment
            </span>

            <h2>Need A Disciplined Team For Your Site?</h2>

            <p>
              Connect with Octagon Force to discuss service deployment,
              operational support, security coverage, facility care, or tailored
              project requirements.
            </p>

            <Link to="/contact" className="projects-contact-cta__button">
              Contact Us
              <ArrowRight />
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
