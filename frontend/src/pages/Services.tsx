import { useState, useRef } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowDown, ArrowRight } from "lucide-react";
import { images } from "../data/imageAssets";
import ServicesShowcase from "../components/services/ServicesShowcase";

const serviceHighlights = [
  "Security Services",
  "Cleaning & Housekeeping",
  "Cash Transport",
  "Transport Operations",
  "Logistics Support",
  "Solid Waste Management",
];

export default function Services() {
  const [videoEnded, setVideoEnded] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const handleVideoEnded = () => {
    setVideoEnded(true);

    if (videoRef.current) {
      videoRef.current.pause();
    }
  };
  
  const scrollToServices = () => {
    const target = document.querySelector("#service-overview");
    target?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <main className="services-page">
      <section className="services-hero">
        <motion.div
          className="services-hero__video-stage"
          initial={{ opacity: 0, scale: 1.025 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <video
            ref={videoRef}
            className={`services-hero__video ${videoEnded ? "is-ended" : ""}`}
            src={images.services.heroVideo}
            poster={images.services.heroThumbnail}
            autoPlay
            muted
            playsInline
            preload="auto"
            onEnded={handleVideoEnded}
        />

       <AnimatePresence>
         {videoEnded && (
         <motion.img
         src={images.services.heroThumbnail}
         alt="Octagon Force service overview"
         className="services-hero__thumbnail"
         initial={{ opacity: 0, scale: 1.04, filter: "blur(8px)" }}
         animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
         exit={{ opacity: 0 }}
         transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
       />
        )}
       </AnimatePresence>

          <div className="services-hero__overlay" />
          <div className="services-hero__grain" />
        </motion.div>

        <div className="services-hero__content">
          <motion.span
            className="eyebrow eyebrow--light"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          >
            <span />
            Our Services
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 26, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.75, delay: 0.38, ease: [0.22, 1, 0.36, 1] }}
          >
            Professional Services Built Around Discipline And Trust.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.56, ease: [0.22, 1, 0.36, 1] }}
          >
            Reliable security, cleaning, cash transport, logistics, transport,
            and environmental support services delivered through trained teams.
          </motion.p>

          <AnimatePresence>
            {videoEnded && (
              <motion.div
                className="services-hero__actions"
                initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: 18 }}
                transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
              >
                <button
                  type="button"
                  onClick={scrollToServices}
                  className="services-hero__button"
                >
                  Explore Services
                  <ArrowRight />
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <AnimatePresence>
          {videoEnded && (
            <motion.div
              className="services-hero__service-strip"
              initial={{ opacity: 0, x: "-50%", y: 36, scale: 0.94 }}
              animate={{ opacity: 1, x: "-50%", y: 0, scale: 1 }}
              exit={{ opacity: 0, x: "-50%", y: 24, scale: 0.94 }}
              transition={{ duration: 0.82, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
            >
              {serviceHighlights.map((item, index) => (
                <motion.span
                  key={item}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.22 + index * 0.06,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  {item}
                </motion.span>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        <motion.button
          type="button"
          className="services-hero__scroll-cue"
          onClick={scrollToServices}
          initial={{ opacity: 0, x: "-50%", y: -8 }}
          animate={{
            opacity: 1,
            x: "-50%",
            y: [0, 10, 0],
          }}
          transition={{
            opacity: { duration: 0.55, delay: 1 },
            y: {
              duration: 1.8,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
          aria-label="Scroll to service overview"
        >
          <ArrowDown />
        </motion.button>
      </section>
      
      <ServicesShowcase />

    </main>
  );
}