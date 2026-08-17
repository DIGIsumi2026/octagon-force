import { motion } from "motion/react";
import { ArrowRight, Trash2 } from "lucide-react";
import { Link } from "react-router-dom";
import { images } from "../../data/imageAssets";

import ServicePillMarquee from "../services/ServicePillMarquee";
import SolidWasteAccordion from "../services/SolidWasteAccordion";
import SolidWasteSolutionsHighlight from "../services/SolidWasteSolutionsHighlight";

export default function SolidWasteManagementService() {
  return (
    <main className="security-service-page solid-waste-page">
      <section className="security-service-hero solid-waste-hero">
        <div className="security-service-hero__image">
          <motion.img
            src={images.services.solidWasteServices.solidHero}
            alt="Octagon Force solid waste management and janitorial cleaning services"
            initial={{ scale: 1.08 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
          />
          <div className="security-service-hero__overlay solid-waste-hero__overlay" />
        </div>

        <div className="container security-service-hero__content">
          <motion.div
            className="security-service-hero__copy"
            initial={{ opacity: 0, y: 46, filter: "blur(14px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{
              duration: 0.9,
              delay: 0.18,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <span className="eyebrow eyebrow--light">
              <span />
              Waste & Janitorial Cleaning
            </span>

            <h1>Integrated Waste Removal and Housekeeping Solutions</h1>

            <p>
              Octagon Force supports clean, hygienic, and organized environments
              through dependable waste handling, regular janitorial cleaning,
              and housekeeping support for residential, corporate and outdoor
              spaces.
            </p>

            <div className="security-service-hero__actions">
              <a href="https://wa.me/94777660021" target="_blank" rel="noopener noreferrer" className="security-service-hero__button">
                Request Waste Cleaning Support
                <ArrowRight />
              </a>

              <Link to="/services" className="security-service-hero__secondary">
                View All Services
              </Link>
            </div>
          </motion.div>

          <motion.div
            className="security-service-hero__badge solid-waste-hero__badge"
            initial={{ opacity: 0, scale: 0.86, y: 28 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{
              duration: 0.75,
              delay: 0.55,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
          </motion.div>
        </div>
      </section>

      <SolidWasteAccordion />
      <SolidWasteSolutionsHighlight />
      <ServicePillMarquee />
    </main>
  );
}