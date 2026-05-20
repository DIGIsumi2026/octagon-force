import { Star } from "lucide-react";
import { testimonials } from "../../data/siteData";
import Reveal from "../common/Reveal";
import SectionHeader from "../common/SectionHeader";

export default function Testimonials() {
  return (
    <section className="section muted-section" id="reviews">
      <div className="container">
        <SectionHeader
          eyebrow="Reviews"
          title="Clients Trust Us To Keep Safe."
          description="Tall review cards with star ratings match the lower part of the reference demo."
        />
        <div className="testimonial-grid">
          {testimonials.map((review, index) => (
            <Reveal key={review.name} delay={index * 0.07}>
              <article className="testimonial-card">
                <div className="stars">
                  {Array.from({ length: 5 }).map((_, starIndex) => (
                    <Star key={starIndex} fill="currentColor" />
                  ))}
                </div>
                <h3>{review.name}</h3>
                <time>{review.date}</time>
                <h4>{review.title}</h4>
                <p>{review.quote}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
