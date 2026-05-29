import { motion } from "motion/react";
import { ArrowRight, CheckCircle2, PhoneCall } from "lucide-react";
import { Link } from "react-router-dom";
import { images } from "../../data/imageAssets";

const ctaPoints = [
  "Professional teams for multi-sector service requirements",
  "Reliable service planning, supervision, and coordination",
  "Tailored solutions for your organization’s operation",
];

export default function ServicesContactCta() {
  return (
    <section className="services-contact-cta-section">
      <div className="services-contact-cta-bg">
        <motion.img
          src={images.services.contactCta}
          alt="Octagon Force service consultation"
          initial={{ scale: 1.08 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
        />
        <div className="services-contact-cta-overlay" />
      </div>

      <div className="container services-contact-cta-shell">
        <motion.div
          className="services-contact-cta-content"
          initial={{ opacity: 0, y: 46, filter: "blur(14px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="eyebrow eyebrow--light">
            <span />
            Talk To Us
          </span>

          <h2>Ready To Build A Reliable Service Plan?</h2>

          <p>
            Connect with Octagon Force to discuss a professional service solution
            for security, cleaning, cash transport, logistics, transport, and
            environmental support requirements.
          </p>

          <div className="services-contact-cta-list">
            {ctaPoints.map((point, index) => (
              <motion.div
                key={point}
                className="services-contact-cta-point"
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{
                  duration: 0.58,
                  delay: 0.25 + index * 0.11,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <CheckCircle2 />
                <span>{point}</span>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="services-contact-cta-actions"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.68, delay: 0.58, ease: [0.22, 1, 0.36, 1] }}
          >
            <Link to="/contact" className="services-contact-cta-button">
              Contact Us
              <ArrowRight />
            </Link>

            <Link to="/contact" className="services-contact-cta-secondary">
              <PhoneCall />
              Request Consultation
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}