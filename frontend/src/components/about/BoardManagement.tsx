import { motion } from "motion/react";
import { images } from "../../data/imageAssets";

const boardMembers = [
  {
    image: images.management.thilanga,
    name: "Mr. Thilanga Sumathipala",
    role: "Chairman",
    description:
      "Driving the long-term strategic vision and upholding the foundational familial values of Octagon Force.",
  },
  {
    image: images.management.samadara,
    name: "Mrs. Samadara Sumathipala",
    role: "Director",
    description:
      "Championing sustainable business practices, corporate integrity, and strong stakeholder relations.",
  },
  {
    image: images.management.dulantha,
    name: "Mr. Dulantha Sumathipala",
    role: "Director",
    description:
      "Spearheading business development, innovation, and the continuous expansion of our service capabilities.",
  },
  {
    image: images.management.sajantha,
    name: "Mr. Sajantha Sumathipala",
    role: "Director",
    description:
      "Focusing on organizational development, strategic investments, and delivering ultimate client satisfaction.",
  },
];

export default function BoardManagement() {
  return (
    <section className="about-board-section">
      <div className="container">
        <div className="about-board-header">
          <span className="eyebrow">
            <span />
            Leadership
          </span>

          <h2>Board Of Management.</h2>

          <p>
            Guided by experienced leadership, Octagon Force continues to grow
            with discipline, integrity, service excellence, and a long-term
            commitment to client satisfaction.
          </p>
        </div>

        <div className="about-board-grid">
          {boardMembers.map((member, index) => (
            <motion.article
              className="about-board-card"
              key={member.name}
              initial={{ opacity: 0, y: 42, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.28 }}
              transition={{
                duration: 0.62,
                delay: index * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <div className="about-board-card__image">
                <img src={member.image} alt={member.name} />
              </div>

              <div className="about-board-card__body">
                <span className="about-board-card__number">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h3>{member.name}</h3>

                <p className="about-board-card__role">{member.role}</p>

                <p className="about-board-card__description">
                  {member.description}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}