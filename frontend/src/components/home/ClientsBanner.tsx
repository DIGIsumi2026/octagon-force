import { useEffect, useMemo, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";

import Reveal from "../common/Reveal";
import { images } from "../../data/imageAssets";

const clients = [
  { name: "Client One", logo: images.clients.client1 },
  { name: "Client Two", logo: images.clients.client2 },
  { name: "Client Three", logo: images.clients.client3 },
  { name: "Client Four", logo: images.clients.client4 },
  { name: "Client Five", logo: images.clients.client5 },
  { name: "Client Six", logo: images.clients.client6 },
  { name: "Client Seven", logo: images.clients.client7 },
  { name: "Client Eight", logo: images.clients.client8 },
  { name: "Client Nine", logo: images.clients.client9 },
  { name: "Client Ten", logo: images.clients.client10 },
  { name: "Client Eleven", logo: images.clients.client11 },
  { name: "Client Twelve", logo: images.clients.client12 },
  { name: "Client Thirteen", logo: images.clients.client13 },
  { name: "Client Fourteen", logo: images.clients.client14 },
  { name: "Client Fifteen", logo: images.clients.client15 },
  { name: "Client Sixteen", logo: images.clients.client16 },
  { name: "Client Seventeen", logo: images.clients.client17 },
  { name: "Client Eighteen", logo: images.clients.client18 },
];

const visibleLogoCount = 5;
const centerIndex = Math.floor(visibleLogoCount / 2);

export default function ClientsBanner() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const visibleClients = useMemo(() => {
    return Array.from({ length: visibleLogoCount }, (_, index) => {
      const offset = index - centerIndex;
      const realIndex =
        (activeIndex + offset + clients.length) % clients.length;

      return {
        ...clients[realIndex],
        offset,
        realIndex,
      };
    });
  }, [activeIndex]);

  const handleNext = () => {
    setActiveIndex((current) => (current + 1) % clients.length);
  };

  const handlePrevious = () => {
    setActiveIndex((current) =>
      current === 0 ? clients.length - 1 : current - 1
    );
  };

  useEffect(() => {
    if (isPaused) return;

    const timer = window.setInterval(() => {
      handleNext();
    }, 1600);

    return () => window.clearInterval(timer);
  }, [isPaused]);

  return (
    <section
      className="home-clients-section"
      id="clients"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="container">
        <Reveal>
          <div className="home-clients-header">
            <span className="eyebrow">
              <span />
              Our Clients
            </span>

            <h2>Trusted By Clients Who Expect Reliable Service.</h2>

            <p>
              We support organizations with dependable security, cleaning,
              logistics, transport, and facility service operations.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.12}>
          <div className="home-clients-slider">
            <button
              type="button"
              className="home-clients-arrow home-clients-arrow--prev"
              onClick={handlePrevious}
              aria-label="Previous clients"
            >
              <ArrowLeft />
            </button>

            <div className="home-clients-window">
              <div className="home-clients-track">
                <AnimatePresence initial={false} mode="popLayout">
                  {visibleClients.map((client) => {
                    const isActive = client.offset === 0;
                    const distance = Math.abs(client.offset);

                    return (
                      <motion.article
                        layout
                        key={client.name}
                        className={`home-client-logo-card ${
                          isActive ? "is-active" : ""
                        } distance-${distance}`}
                        initial={{
                          opacity: 0,
                          y: 18,
                        }}
                        animate={{
                          opacity: 1,
                          y: isActive ? -8 : distance === 1 ? 4 : 10,
                          scale: 1,
                        }}
                        exit={{
                          opacity: 0,
                          y: -18,
                        }}
                        transition={{
                          layout: {
                            duration: 0.42,
                            ease: [0.22, 1, 0.36, 1],
                          },
                          opacity: {
                            duration: 0.22,
                            ease: "easeOut",
                          },
                          y: {
                            duration: 0.36,
                            ease: [0.22, 1, 0.36, 1],
                          },
                        }}
                      >
                        <img src={client.logo} alt={`${client.name} logo`} />
                      </motion.article>
                    );
                  })}
                </AnimatePresence>
              </div>
            </div>

            <button
              type="button"
              className="home-clients-arrow home-clients-arrow--next"
              onClick={handleNext}
              aria-label="Next clients"
            >
              <ArrowRight />
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}