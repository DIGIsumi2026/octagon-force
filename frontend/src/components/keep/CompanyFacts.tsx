import { CheckCircle2, LockKeyhole, ShieldCheck, Smartphone } from "lucide-react";
import Reveal from "../common/Reveal";
import { images } from "../../data/imageAssets";

const companyFacts = [
  {
    icon: <CheckCircle2 />,
    value: "99%",
    label: "Accuracy",
  },
  {
    icon: <ShieldCheck />,
    value: "24/7",
    label: "Protection",
  },
  {
    icon: <LockKeyhole />,
    value: "05",
    label: "Core Services",
  },
  {
    icon: <Smartphone />,
    value: "100%",
    label: "Client Focus",
  },
];

export default function KeepCompanyFacts() {
  return (
    <section className="section keep-company-facts">
      <div className="container">
        <Reveal>
          <div className="keep-section-header">
            <span className="eyebrow">
              <span />
              Company Facts
            </span>

            <h2>Everything You Need To Keep Safe.</h2>

            <p>
              A flexible portfolio layout with image cards, icon panels, and
              service-focused content for future page development.
            </p>
          </div>
        </Reveal>

        <div className="keep-facts-layout">
          <Reveal>
            <article className="keep-facts-image keep-facts-image--large">
              <img src={images.hero.H1} alt="Octagon Force service preview" />
              <div className="keep-facts-image__caption">
                <ShieldCheck />
                <span>Trusted Service Support</span>
              </div>
            </article>
          </Reveal>

          <div className="keep-facts-middle">
            <Reveal delay={0.08}>
              <article className="keep-facts-image keep-facts-image--small">
                <img src={images.hero.H2} alt="Connected service ecosystem" />
                <div className="keep-facts-image__label">
                  Connected Ecosystem
                </div>
              </article>
            </Reveal>

            <Reveal delay={0.16}>
              <article className="keep-facts-highlight">
                <LockKeyhole />
                <h3>Professional Service Network</h3>
                <p>
                  Designed for security, cleaning, logistics, transport, and
                  facility support operations.
                </p>
              </article>
            </Reveal>
          </div>

          <div className="keep-facts-stats">
            {companyFacts.map((fact, index) => (
              <Reveal key={fact.label} delay={index * 0.08}>
                <article className="keep-fact-card">
                  <div className="keep-fact-card__icon">{fact.icon}</div>
                  <strong>{fact.value}</strong>
                  <span>{fact.label}</span>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}