import { useState } from "react";
import { motion } from "motion/react";
import Reveal from "../common/Reveal";
import { images } from "../../data/imageAssets";

const features = [
  {
    label: "Doorbell Camera Pro",
    title: "Actively Protect Your Packages",
    copy: "See who is at your front door, respond to visitors, and keep deliveries visible from the app.",
    image: images.products.doorbellCamera
  },
  {
    label: "Outdoor Camera Pro",
    title: "Scare Away Lurkers",
    copy: "Use lights, alerts, and outdoor video verification to reduce blind spots around your property.",
    image: images.products.outdoorCamera
  },
  {
    label: "Indoor Camera Pro",
    title: "Know What Happens Inside",
    copy: "Monitor rooms, storage areas, or offices with privacy-aware indoor camera placement.",
    image: images.products.indoorCamera
  }
];

export default function ProductFeature() {
  const [active, setActive] = useState(0);
  const item = features[active];

  return (
    <section className="section muted-section">
      <div className="container">
        <Reveal>
          <div className="product-feature">
            <div>
              <span className="eyebrow">
                <span />
                Key Features
              </span>
              <h2>A Security Solution For Your Business</h2>
              <div className="product-tabs">
                {features.map((feature, index) => (
                  <button
                    key={feature.label}
                    className={index === active ? "active" : ""}
                    onClick={() => setActive(index)}
                  >
                    {feature.label}
                  </button>
                ))}
              </div>
            </div>
            <motion.div
              key={item.label}
              className="product-feature__visual"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.45 }}
            >
              <img src={item.image} alt={item.label} />
              <article>
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
              </article>
            </motion.div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
