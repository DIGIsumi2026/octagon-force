import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  ChevronDown,
  ChevronUp,
  X,
} from "lucide-react";
import {
  careerPositions,
  type CareerPosition,
} from "../../data/careerPositions";
import "../../App.css";

const INITIAL_VISIBLE_JOBS = 3;

export default function OpenPositions() {
  const [showAll, setShowAll] = useState(false);
  const [activeJob, setActiveJob] =
    useState<CareerPosition | null>(null);
  const modalScrollRef = useRef<HTMLDivElement>(null);

  const hasMoreJobs =
    careerPositions.length > INITIAL_VISIBLE_JOBS;

  const visibleJobs = showAll
    ? careerPositions
    : careerPositions.slice(0, INITIAL_VISIBLE_JOBS);

  useEffect(() => {
    if (!activeJob) return;

    const previousOverflow = document.body.style.overflow;
    const previousRootOverflow = document.documentElement.style.overflow;
    const previousFocus = document.activeElement;
    window.dispatchEvent(new CustomEvent("career-job-modal-toggle", { detail: true }));
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";
    modalScrollRef.current?.focus({ preventScroll: true });

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveJob(null);
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.documentElement.style.overflow = previousRootOverflow;
      window.dispatchEvent(new CustomEvent("career-job-modal-toggle", { detail: false }));
      if (previousFocus instanceof HTMLElement) {
        previousFocus.focus({ preventScroll: true });
      }
      window.removeEventListener("keydown", handleEscape);
    };
  }, [activeJob]);

  const handleApplyNow = () => {
    setActiveJob(null);

    window.setTimeout(() => {
      document
        .getElementById("career-application")
        ?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
    }, 120);
  };

  return (
    <section className="career-openings" id="career-openings">
      <div className="career-openings-container">
        <header className="career-openings-heading">
          <h2>Open positions</h2>
        </header>

        <div className="career-job-list">
          {visibleJobs.map((job) => (
            <article
              key={job.id}
              className="career-job-card"
            >
              <div className="career-job-main">
                <div className="career-job-meta">
                  <h3>{job.title}</h3>

                  <span>
                    Posted {job.postedDate}
                  </span>
                </div>

                <p>{job.shortDescription}</p>
              </div>

              <button
                type="button"
                className="career-job-open"
                onClick={() => setActiveJob(job)}
                aria-label={`View full job description for ${job.title}`}
              >
                <ArrowRight
                  size={22}
                  strokeWidth={1.6}
                />
              </button>
            </article>
          ))}
        </div>

        {hasMoreJobs && (
          <div className="career-jobs-toggle-wrap">
            <button
              type="button"
              className="career-jobs-toggle"
              onClick={() => setShowAll((current) => !current)}
              aria-expanded={showAll}
            >
              <span>
                {showAll ? "View less" : "Show more"}
              </span>

              {showAll ? (
                <ChevronUp size={18} />
              ) : (
                <ChevronDown size={18} />
              )}
            </button>
          </div>
        )}
      </div>

      {activeJob && (
        <div
          className="career-job-modal-backdrop"
          data-lenis-prevent
          role="presentation"
          onMouseDown={(event) => {
            if (event.currentTarget === event.target) {
              setActiveJob(null);
            }
          }}
        >
          <div
            className="career-job-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="career-job-modal-title"
          >
            <button
              type="button"
              className="career-job-modal-close"
              onClick={() => setActiveJob(null)}
              aria-label="Close job description"
            >
              <X size={22} />
            </button>

            <div className="career-job-modal-scroll" ref={modalScrollRef} tabIndex={-1}>
              <div className="career-job-modal-header">
                <span className="career-job-modal-kicker">
                  Career opportunity
                </span>

                <h2 id="career-job-modal-title">
                  {activeJob.title}
                </h2>

                <p className="career-job-modal-date">
                  Posted {activeJob.postedDate}
                </p>
              </div>

              <div className="career-job-modal-content">
                <section>
                  <h3>About the role</h3>
                  <p>{activeJob.overview}</p>
                </section>

                <section>
                  <h3>Key responsibilities</h3>

                  <ul>
                    {activeJob.responsibilities.map(
                      (responsibility) => (
                        <li key={responsibility}>
                          {responsibility}
                        </li>
                      ),
                    )}
                  </ul>
                </section>

                <section>
                  <h3>What we're looking for</h3>

                  <ul>
                    {activeJob.requirements.map(
                      (requirement) => (
                        <li key={requirement}>
                          {requirement}
                        </li>
                      ),
                    )}
                  </ul>
                </section>
              </div>
            </div>

            <div className="career-job-modal-footer">
              <button
                type="button"
                className="career-job-apply"
                onClick={handleApplyNow}
              >
                Apply now
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
