import { ArrowRight } from "lucide-react";
import Reveal from "../common/Reveal";
import { images } from "../../data/imageAssets";

const cards = [
  {
    title: "DIY Your Security System",
    button: "Product Now",
    image: images.contact.diy
  },
  {
    title: "Unsure What You Need",
    button: "How Do I Start?",
    image: images.contact.unsure
  },
  {
    title: "Got A Questions?",
    button: "Contact Us Directly",
    image: images.contact.questions
  }
];

export default function SupportCards() {
  return (
    <section className="section section--no-top">
      <div className="container">
        <div className="support-grid">
          {cards.map((card, index) => (
            <Reveal key={card.title} delay={index * 0.08}>
              <article className="support-card">
                <img src={card.image} alt={card.title} />
                <div />
                <section>
                  <h3>{card.title}</h3>
                  <a href="#contact">
                    {card.button} <ArrowRight />
                  </a>
                </section>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
