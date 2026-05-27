import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowRight, CheckCircle2, PhoneCall } from "lucide-react";
import { images } from "../../data/imageAssets";

const highlights = [
  "Security, cleaning, transport, logistics, and facility support",
  "Professional teams with disciplined service coordination",
  "Reliable solutions for businesses, properties, and communities",
];

export default function AboutContactBanner() {
  return (
    <section className="about-contact-banner-section">
      <motion.div className="about-contact-banner">
    <motion.img
      src={images.about.contactBanner}
      alt="Octagon Force contact and service coordination"
      className="about-contact-banner__image"
      initial={{ scale: 1.08 }}
      whileInView={{ scale: 1.02 }}
      viewport={{ once: true }}
      transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
    />
        <motion.img
          src={images.about.contactBanner}
          alt="Octagon Force contact and service coordination"
          className="about-contact-banner__image"
      />

        <div className="about-contact-banner__overlay" />

        <motion.div
          className="about-contact-banner__glow"
          initial={{ opacity: 0, scale: 0.7 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
        />

        <div className="about-contact-banner__content">
          <motion.span
            className="eyebrow eyebrow--light"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.12 }}
          >
            <span />
            Talk To Us
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 28, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.72, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
          >
            Ready To Work With A Reliable Service Partner?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
          >
            Connect with Octagon Force to discuss professional security,
            cleaning, transport, logistics, and operational support services
            tailored to your organization.
          </motion.p>

          <motion.ul
            className="about-contact-banner__list"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              show: {
                transition: {
                  staggerChildren: 0.08,
                  delayChildren: 0.36,
                },
              },
            }}
          >
            {highlights.map((item) => (
              <motion.li
                key={item}
                variants={{
                  hidden: { opacity: 0, x: -24 },
                  show: { opacity: 1, x: 0 },
                }}
                transition={{ duration: 0.52, ease: [0.22, 1, 0.36, 1] }}
              >
                <CheckCircle2 />
                {item}
              </motion.li>
            ))}
          </motion.ul>

          <motion.div
            className="about-contact-banner__actions"
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.62, delay: 0.56, ease: [0.22, 1, 0.36, 1] }}
          >
            <Link to="/contact" className="about-contact-banner__button">
              Contact Us
              <ArrowRight />
            </Link>

            <span className="about-contact-banner__note">
              <PhoneCall />
              Let’s discuss your service requirement.
            </span>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}