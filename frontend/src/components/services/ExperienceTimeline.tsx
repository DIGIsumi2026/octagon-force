/* import { experienceItems } from "../../data/siteData";
import Reveal from "../common/Reveal";
import SectionHeader from "../common/SectionHeader";

export default function ExperienceTimeline() {
  return (
    <section className="section dark-section">
      <div className="container">
        <SectionHeader
          eyebrow="What We Do"
          title="Detailed Services With Strong Visual Cards."
          description="The demo uses big alternating cards with rounded images and dark panels. This component follows that interaction pattern."
          light
        />

        <div className="experience-list">
          {experienceItems.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.06}>
              <article className="experience-card">
                <div>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
                <img src={item.image} alt={item.title} />
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
} */