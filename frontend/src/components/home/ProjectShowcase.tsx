import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";

import Reveal from "../common/Reveal";
import { images } from "../../data/imageAssets";

const projects = [
  {
    label: "Security",
    title: "Corporate Security Deployment",
    category: "Security & Manpower",
    description:
      "Professional guarding and site protection support for commercial buildings, offices, and high-responsibility properties.",
    image: images.projects.security,
  },
  {
    label: "Cash",
    title: "Secure Cash Transit Operation",
    category: "Cash Transport",
    description:
      "Disciplined cash movement support with trained personnel, secure handling, and dependable operational coordination.",
    image: images.projects.cash,
  },
  {
    label: "Facility",
    title: "Facility Care & Maintenance",
    category: "Cleaning & Maintenance",
    description:
      "Structured cleaning, maintenance, and facility support services for offices, residences, and managed properties.",
    image: images.projects.facility,
  },
  {
    label: "Logistics",
    title: "Logistics & Environmental Support",
    category: "Logistics & Waste Management",
    description:
      "Operational support for storage, transport coordination, waste handling, and cleaner service environments.",
    image: images.projects.logistics,
  },
];

export default function ProjectShowcase() {
  const [activeProject, setActiveProject] = useState(0);
  const selectedProject = projects[activeProject];

  return (
    <section className="home-projects-section" id="projects">
      <div className="home-projects-bg">
        <AnimatePresence mode="wait">
          <motion.img
            key={selectedProject.image}
            src={selectedProject.image}
            alt={selectedProject.title}
            initial={{ opacity: 0, scale: 1.08 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.03 }}
            transition={{
              duration: 0.9,
              ease: [0.22, 1, 0.36, 1],
            }}
          />
        </AnimatePresence>
      </div>

      <div className="home-projects-overlay" />

      <div className="container home-projects-shell">
        <Reveal>
          <div className="home-projects-header">
            <span className="eyebrow eyebrow--light">
              <span />
              Our Projects
            </span>

            <h2>Field-Proven Work Across Critical Services.</h2>

            <p>
              Explore selected Octagon Force project areas built around security,
              cash transport, facility care, logistics, and environmental
              support.
            </p>
          </div>
        </Reveal>

        <div className="home-projects-content">
          <AnimatePresence mode="wait">
            <motion.article
              key={selectedProject.title}
              className="home-projects-card"
              initial={{ opacity: 0, y: 34, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -24, filter: "blur(8px)" }}
              transition={{
                duration: 0.62,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <span>{selectedProject.category}</span>

              <h3>{selectedProject.title}</h3>

              <p>{selectedProject.description}</p>
            </motion.article>
          </AnimatePresence>

          <div className="home-projects-tabs" role="tablist">
            {projects.map((project, index) => (
              <button
                key={project.label}
                type="button"
                className={activeProject === index ? "is-active" : ""}
                onClick={() => setActiveProject(index)}
                onMouseEnter={() => setActiveProject(index)}
              >
                <span>{String(index + 1).padStart(2, "0")}</span>
                {project.label}
              </button>
            ))}
          </div>

          <Link to="/projects" className="home-projects-button">
            View All Projects
            <ArrowRight />
          </Link>
        </div>
      </div>
    </section>
  );
}