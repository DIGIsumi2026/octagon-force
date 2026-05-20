import { benefits } from "../../data/siteData";
import Reveal from "../common/Reveal";
import SectionHeader from "../common/SectionHeader";

export default function BenefitCards() {
  return (
    <section className="section muted-section">
      <div className="container">
        <SectionHeader
          eyebrow="Why Choose OpenHome"
          title="Our Experience Spans Every Security Need."
          description="Use this area for your portfolio service highlights, technology strengths, or product benefits."
        />
        <div className="benefit-grid">
          {benefits.map((benefit, index) => (
            <Reveal key={benefit.title} delay={index * 0.07}>
              <article className="benefit-card">
                <span>{benefit.icon}</span>
                <h3>{benefit.title}</h3>
                <p>{benefit.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
