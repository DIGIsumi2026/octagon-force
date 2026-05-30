import { motion } from "motion/react";
import { ArrowRight, Banknote } from "lucide-react";
import { Link } from "react-router-dom";
import { images } from "../../data/imageAssets";
import ServicePillMarquee from "../services/ServicePillMarquee";
import CashTransportAccordion from "../services/CleaningServicesAccordion";
import CashTransportSolutionsHighlight from "../services/CashTransportSolutionsHighlight";


export default function CashTransportService() {
  return (
    <main className="security-service-page cash-transport-page">
      <section className="security-service-hero cash-transport-hero">
        <div className="security-service-hero__image">
          <motion.img
            src={images.services.cashTransportServices.cashTransportHero}
            alt="Octagon Force cash transport services"
            initial={{ scale: 1.08 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
          />
          <div className="security-service-hero__overlay cash-transport-hero__overlay" />
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
              Cash In Transit
            </span>

            <h1>Secure Cash Transport With Absolute Dependability.</h1>

            <p>
              Octagon Force provides high-risk cash transport solutions managed
              by trained armed security professionals, specialized secure
              vehicles, and strict asset protection procedures from collection to
              destination.
            </p>

            <div className="security-service-hero__actions">
              <Link to="/contact" className="security-service-hero__button">
                Request Cash Transport
                <ArrowRight />
              </Link>

              <Link to="/services" className="security-service-hero__secondary">
                View All Services
              </Link>
            </div>
          </motion.div>

          <motion.div
            className="security-service-hero__badge cash-transport-hero__badge"
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

      
      <CashTransportAccordion />
      <CashTransportSolutionsHighlight />
      <ServicePillMarquee />
    </main>
  );
}