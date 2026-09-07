import { motion } from "motion/react";
import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { images } from "../../data/imageAssets";
import ServicePillMarquee from "../services/ServicePillMarquee";
import CleaningServicesAccordion from "../services/CleaningServicesAccordion";
import CleaningSolutionsHighlight from "../services/CleaningSolutionsHighlight";


export default function CleaningHousekeepingService() {
  return (
    <main className="security-service-page cleaning-service-page">
      <section className="security-service-hero cleaning-service-hero">
        <div className="security-service-hero__image">
          <motion.img
            src={images.services.cleaningServices.cleaningHero}
            alt="Octagon Force cleaning and housekeeping services"
            initial={{ scale: 1.08 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
          />
          <div className="security-service-hero__overlay cleaning-service-hero__overlay" />
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
              Cleaning & Housekeeping
            </span>

            <h1>Professional Cleaning Built Around Healthy Spaces</h1>

            <p>
              Octagon Force (Pvt) Ltd provides skilled and reliable housekeeping and janitorial personnel, available at short notice to deliver professional cleaning solutions within 24 hours. 
              Our services include general cleaning, deep cleaning, sanitization, garden and surrounding-area cleaning for private residences, offices, institutions, commercial premises, and other facilities.
            </p>

            <div className="security-service-hero__actions">
              <a href="https://wa.me/94777660021" target="_blank" rel="noopener noreferrer" className="security-service-hero__button">
                Request Cleaning Service
                <ArrowRight />
              </a>

              <Link to="/services" className="security-service-hero__secondary">
                View All Services
              </Link>
            </div>
          </motion.div>

          <motion.div
            className="security-service-hero__badge cleaning-service-hero__badge"
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

      <CleaningServicesAccordion />
      <CleaningSolutionsHighlight />
      <ServicePillMarquee />
      
    </main>
  );
}