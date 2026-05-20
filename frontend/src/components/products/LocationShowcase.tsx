import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { locationScenes } from "../../data/siteData";
import Reveal from "../common/Reveal";

export default function LocationShowcase() {
  const [active, setActive] = useState(0);
  const scene = locationScenes[active];

  const next = () => setActive((current) => (current + 1) % locationScenes.length);
  const previous = () => setActive((current) => (current - 1 + locationScenes.length) % locationScenes.length);

  return (
    <section className="section" id="products">
      <div className="container">
        <Reveal>
          <div className="scene-showcase">
            <AnimatePresence mode="wait">
              <motion.img
                key={scene.key}
                src={scene.image}
                alt={scene.label}
                initial={{ opacity: 0, scale: 1.04 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.55 }}
              />
            </AnimatePresence>
            <div className="scene-showcase__shade" />
            <div className="scene-tabs">
              {locationScenes.map((item, index) => (
                <button
                  key={item.key}
                  className={index === active ? "active" : ""}
                  onClick={() => setActive(index)}
                >
                  <span />
                  {item.label}
                </button>
              ))}
            </div>
            <div className="scene-controls">
              <button aria-label="Previous scene" onClick={previous}>
                <ChevronLeft />
              </button>
              <button aria-label="Next scene" onClick={next}>
                <ChevronRight />
              </button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
