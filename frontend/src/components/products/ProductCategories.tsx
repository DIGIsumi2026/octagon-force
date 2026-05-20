import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import { categories } from "../../data/siteData";
import Reveal from "../common/Reveal";
import SectionHeader from "../common/SectionHeader";

export default function ProductCategories() {
  return (
    <section className="section section--no-top">
      <div className="container">
        <SectionHeader
          eyebrow="Our Products"
          title="A System Designed To Keep Safe."
          description="Hover cards with image overlays match the product-category style shown in the demo."
        />
        <div className="category-grid">
          {categories.map((category, index) => (
            <Reveal key={category.title} delay={index * 0.08}>
              <motion.article className="category-card" whileHover={{ y: -10 }}>
                <img src={category.image} alt={category.title} />
                <div />
                <section>
                  <h3>{category.title}</h3>
                  <p>{category.description}</p>
                  <button aria-label={`Open ${category.title}`}>
                    <ArrowUpRight />
                  </button>
                </section>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
