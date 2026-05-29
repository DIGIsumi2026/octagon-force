import { motion } from "motion/react";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";
import { images } from "../../data/imageAssets";

export default function SecurityService() {
  return (
    <main className="security-service-page">
      <section className="security-service-hero">
        <div className="security-service-hero__image">
          <motion.img
            src={images.services.securityHero}
            alt="Octagon Force security services"
            initial={{ scale: 1.08 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
          />
          <div className="security-service-hero__overlay" />
        </div>

        <div className="container security-service-hero__content">
          <motion.div
            className="security-service-hero__copy"
            initial={{ opacity: 0, y: 46, filter: "blur(14px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.9, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="eyebrow eyebrow--light">
              <span />
              Security Services
            </span>

            <h1>Professional Security Built On Discipline And Trust.</h1>

            <p>
              Octagon Force provides reliable security solutions through trained,
              disciplined, and well-supervised security personnel for corporate,
              commercial, residential, and operational environments.
            </p>

            <div className="security-service-hero__actions">
              <Link to="/contact" className="security-service-hero__button">
                Request Security Service
                <ArrowRight />
              </Link>

              <Link to="/services" className="security-service-hero__secondary">
                View All Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}