import { Play, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import Reveal from "../common/Reveal";
import { images } from "../../data/imageAssets";

export default function VideoShowcase() {
  const [open, setOpen] = useState(false);

  return (
    <section className="section section--no-top">
      <div className="container">
        <Reveal>
          <article className="video-showcase">
            <img
              src={images.products.videoPreview}
              alt="OpenHome video preview"
            />
            <div />
            <button className="play-button" onClick={() => setOpen(true)} aria-label="Play video">
              <Play fill="currentColor" />
            </button>
            <h2>Openhome</h2>
          </article>
        </Reveal>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            className="modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="video-modal"
              initial={{ opacity: 0, scale: 0.92, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 30 }}
            >
              <button className="modal-close" onClick={() => setOpen(false)} aria-label="Close video">
                <X />
              </button>
              <iframe
                title="Security demo video"
                src="https://www.youtube.com/embed/ysz5S6PUM-U"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
