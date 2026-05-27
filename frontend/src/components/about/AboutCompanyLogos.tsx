import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { companyLogos } from "../../data/companyLogos";
export default function AboutCompanyLogos() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const visibleLogos = useMemo(() => {
    const total = companyLogos.length;

    return [-2, -1, 0, 1, 2].map((offset) => {
      const index = (activeIndex + offset + total) % total;

      return {
        ...companyLogos[index],
        index,
        offset,
        distance: Math.abs(offset),
        isActive: offset === 0,
      };
    });
  }, [activeIndex]);

  useEffect(() => {
    if (isPaused || companyLogos.length <= 1) return;

    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % companyLogos.length);
    }, 2400);

    return () => window.clearInterval(timer);
  }, [isPaused]);

  const goPrevious = () => {
    setActiveIndex((current) =>
      current === 0 ? companyLogos.length - 1 : current - 1
    );
  };

  const goNext = () => {
    setActiveIndex((current) => (current + 1) % companyLogos.length);
  };

  return (
    <section className="about-company-logo-section">
      <div className="container">
        <div className="about-company-logo-header">
          <span className="eyebrow">
            <span />
            Our Companies
          </span>

          <h2>Connected By Trust, Service, And Shared Values.</h2>

          <p>
            Our operations are strengthened by connected businesses, trusted
            partnerships, and a long-standing commitment to professional service
            delivery.
          </p>
        </div>

        <div
          className="about-company-logo-slider"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <button
            type="button"
            className="about-company-logo-arrow about-company-logo-arrow--prev"
            onClick={goPrevious}
            aria-label="Previous logo"
          >
            <ArrowLeft />
          </button>

          <div className="about-company-logo-window">
            <div className="about-company-logo-track">
              <AnimatePresence mode="popLayout">
                {visibleLogos.map((company) => (
                  <motion.article
                    layout
                    key={`${company.name}-${company.index}`}
                    className={`about-company-logo-card ${
                      company.isActive ? "is-active" : ""
                    } distance-${company.distance}`}
                    initial={{
                      opacity: 0,
                      y: 24,
                      scale: 0.88,
                    }}
                    animate={{
                      opacity: company.isActive
                        ? 1
                        : company.distance === 1
                        ? 0.74
                        : 0.42,
                      y: company.isActive
                        ? -10
                        : company.distance === 1
                        ? 6
                        : 16,
                      scale: company.isActive
                        ? 1.08
                        : company.distance === 1
                        ? 0.94
                        : 0.82,
                    }}
                    exit={{
                      opacity: 0,
                      y: 24,
                      scale: 0.88,
                    }}
                    transition={{
                      duration: 0.58,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >
                    <img src={company.logo} alt={`${company.name} logo`} />
                  </motion.article>
                ))}
              </AnimatePresence>
            </div>
          </div>

          <button
            type="button"
            className="about-company-logo-arrow about-company-logo-arrow--next"
            onClick={goNext}
            aria-label="Next logo"
          >
            <ArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
}