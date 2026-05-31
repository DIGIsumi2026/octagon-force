import { motion } from "motion/react";
import { ArrowRight, Truck } from "lucide-react";
import { Link } from "react-router-dom";
import { images } from "../../data/imageAssets";

import ServicePillMarquee from "../services/ServicePillMarquee";
import TransportOperationsAccordion from "../services/TransportOperationsAccordion";
import TransportOperationsSolutionsHighlight from "../services/TransportOperationsSolutionsHighlight";

export default function TransportOperationsService() {
  return (
    <main className="security-service-page transport-operations-page">
      <section className="security-service-hero transport-operations-hero">
        <div className="security-service-hero__image">
          <motion.img
            src={images.services.transportServices.transportHero}
            alt="Octagon Force transport operations services"
            initial={{ scale: 1.08 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
          />
          <div className="security-service-hero__overlay transport-operations-hero__overlay" />
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
              Transport Services
            </span>

            <h1>Asset-Based Transportation Built For Dependability.</h1>

            <p>
              Octagon Force delivers reliable transport operations through
              trained drivers, top-of-the-line equipment, responsive customer
              support, and an asset-based fleet maintained for safe and efficient
              movement.
            </p>

            <div className="security-service-hero__actions">
              <Link to="/contact" className="security-service-hero__button">
                Request Transport Service
                <ArrowRight />
              </Link>

              <Link to="/services" className="security-service-hero__secondary">
                View All Services
              </Link>
            </div>
          </motion.div>

          <motion.div
            className="security-service-hero__badge transport-operations-hero__badge"
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

      <TransportOperationsAccordion />
      <TransportOperationsSolutionsHighlight />
      <ServicePillMarquee />
    </main>
  );
}