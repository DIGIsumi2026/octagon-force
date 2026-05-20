import { Camera, CheckCircle2, LockKeyhole, Smartphone } from "lucide-react";
import { motion } from "motion/react";
import { factCards } from "../../data/siteData";
import Reveal from "../common/Reveal";
import SectionHeader from "../common/SectionHeader";
import { images } from "../../data/imageAssets";

export default function FeatureCollage() {
  return (
    <section className="section" id="services">
      <div className="container">
        <SectionHeader
          eyebrow="Company Facts"
          title="Everything You Need To Keep Safe."
          description="A flexible security portfolio layout with product cards, icon panels, and image-led content just like the reference demo."
        />

        <Reveal className="collage-grid">
          <motion.article className="collage-card collage-card--large" whileHover={{ y: -8 }}>
            <img
              src={images.services.smartCamera}
              alt="Security camera"
            />
            <div className="collage-card__caption">
              <Camera />
              <h3>Smart Camera Monitoring</h3>
              <p>AI-ready devices detect unusual activity instantly.</p>
            </div>
          </motion.article>

          <motion.article className="collage-card collage-card--image" whileHover={{ y: -8 }}>
            <img
              src={images.services.connectedApp}
              alt="Person using mobile app"
            />
            <span>Connected Ecosystem</span>
          </motion.article>

          <motion.article className="collage-card collage-card--stat" whileHover={{ y: -8 }}>
            <CheckCircle2 />
            <strong>99%</strong>
            <span>Accuracy</span>
          </motion.article>

          <motion.article className="collage-card collage-card--teal" whileHover={{ y: -8 }}>
            <LockKeyhole />
            <h3>Smart, Safe, And Secure</h3>
          </motion.article>

          <motion.article className="collage-card collage-card--glass" whileHover={{ y: -8 }}>
            <Smartphone />
            <p>Instant alert integration with your lifestyle.</p>
          </motion.article>
        </Reveal>

        <div className="fact-card-row">
          {factCards.map((card, index) => (
            <Reveal key={card.title} delay={index * 0.08}>
              <article className="mini-card">
                <span>{card.icon}</span>
                <h3>{card.title}</h3>
                <p>{card.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
