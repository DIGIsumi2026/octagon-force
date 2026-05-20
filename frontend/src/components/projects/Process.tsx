import { processSteps } from "../../data/siteData";
import Reveal from "../common/Reveal";
import SectionHeader from "../common/SectionHeader";

export default function Process() {
  return (
    <section className="section dark-section" id="process">
      <div className="container">
        <SectionHeader
          eyebrow="How It Works"
          title="Interesting Numbers About Us"
          description="A dark process panel similar to the demo, useful for explaining your backend-powered customer request flow."
          light
        />
        <div className="process-row">
          {processSteps.map((step, index) => (
            <Reveal key={step.title} delay={index * 0.08}>
              <article className="process-card">
                <span>{step.icon}</span>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
