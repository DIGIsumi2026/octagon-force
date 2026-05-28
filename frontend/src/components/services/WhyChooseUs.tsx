import { useEffect, useRef, useState } from "react";
import { ShieldCheck, RadioTower, Wrench, BriefcaseBusiness } from "lucide-react";
import { images } from "../../data/imageAssets";

const whyChooseUsItems = [
  {
    icon: ShieldCheck,
    title: "Elite Leadership Heritage",
    description:
      "Our security and management teams bring unparalleled tactical expertise to the private sector, with senior personnel possessing distinguished military or law enforcement backgrounds.",
  },
  {
    icon: RadioTower,
    title: "Round-the-Clock Vigilance",
    description:
      "We operate a state-of-the-art, 24/7 Operations and Monitoring Center, ensuring proactive real-time surveillance and rapid emergency responses.",
  },
  {
    icon: Wrench,
    title: "Specialized Technical Expertise",
    description:
      "Our operations are powered by an in-house technical department that undergoes continuous training to consistently meet the highest industry standards.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Strategic & Cost-Effective Consultancy",
    description:
      "We act as an objective partner, providing impartial, tailored recommendations designed to optimize your budget while delivering maximum operational value.",
  },
];

export default function WhyChooseUs() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.22,
      }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`why-choose-us-section ${isVisible ? "is-visible" : ""}`}
    >
      <div className="why-choose-us-bg">
        <video
          className="why-choose-us-video"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        >
          <source src={images.services.whyChooseUsVideo} type="video/mp4" />
        </video>
        <div className="why-choose-us-overlay" />
      </div>

      <div className="container why-choose-us-shell">
        <div className="why-choose-us-copy">
          <div className="eyebrow eyebrow--light">
            <span />
            Why Choose Us
          </div>

          <h2>Built On Discipline, Trust, And Reliable Service Delivery.</h2>

          <p>
            Octagon Force combines experienced leadership, strong operational
            systems, technical capability, and practical consultancy to deliver
            dependable service solutions across every sector we serve.
          </p>
        </div>

        <div className="why-choose-us-grid">
          {whyChooseUsItems.map((item, index) => {
            const Icon = item.icon;

            return (
              <article
                key={item.title}
                className="why-choose-us-card"
                style={{ transitionDelay: `${index * 140}ms` }}
              >
                <div className="why-choose-us-card__icon">
                  <Icon />
                </div>

                <div className="why-choose-us-card__content">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}