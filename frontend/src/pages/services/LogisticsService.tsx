import { motion } from "motion/react";
import { ArrowRight, Boxes } from "lucide-react";
import { Link } from "react-router-dom";
import { images } from "../../data/imageAssets";

import ServicePillMarquee from "../services/ServicePillMarquee";
import LogisticsAccordion from "../services/LogisticsAccordion";
import LogisticsSolutionsHighlight from "../services/LogisticsSolutionsHighlight";

export default function LogisticsService() {
  return (
    <main className="security-service-page logistics-service-page">
      <section className="security-service-hero logistics-service-hero">
        <div className="security-service-hero__image">
          <motion.img
            src={images.services.logisticsServices.logisticHero}
            alt="Octagon Force logistics support services"
            initial={{ scale: 1.08 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
          />
          <div className="security-service-hero__overlay logistics-service-hero__overlay" />
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
              Logistics Solutions
            </span>

            <h1>Integrated Operational Logistics Built For Dependability.</h1>

            <p>
              Octagon Force provides structured logistics support through
              experienced operational teams, strategically positioned vehicles,
              rapid coordination, and cost-effective consultancy tailored to
              your business needs.
            </p>

            <div className="security-service-hero__actions">
              <Link to="/contact" className="security-service-hero__button">
                Request Logistics Support
                <ArrowRight />
              </Link>

              <Link to="/services" className="security-service-hero__secondary">
                View All Services
              </Link>
            </div>
          </motion.div>

          <motion.div
            className="security-service-hero__badge logistics-service-hero__badge"
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

      <LogisticsAccordion />
      <LogisticsSolutionsHighlight />
      <ServicePillMarquee />
    </main>
  );
}