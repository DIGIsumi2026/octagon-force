import { ArrowUpRight } from "lucide-react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { projectCards } from "../../data/siteData";
import Reveal from "../common/Reveal";
import SectionHeader from "../common/SectionHeader";

export default function ProjectsCarousel() {
  return (
    <section className="section muted-section" id="projects">
      <div className="container">
        <SectionHeader
          eyebrow="Projects"
          title="Security Projects Across Different Environments."
          description="The video shows large horizontal project cards. This carousel gives the same interaction in React."
        />

        <Reveal>
          <Swiper
            modules={[Navigation]}
            navigation
            spaceBetween={24}
            slidesPerView={1.15}
            breakpoints={{
              768: { slidesPerView: 2.1 },
              1024: { slidesPerView: 2.6 }
            }}
            className="project-swiper"
          >
            {projectCards.map((project) => (
              <SwiperSlide key={project.title}>
                <article className="project-card">
                  <img src={project.image} alt={project.title} />
                  <div />
                  <section>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <button aria-label={`Open ${project.title}`}>
                      <ArrowUpRight />
                    </button>
                  </section>
                </article>
              </SwiperSlide>
            ))}
          </Swiper>
        </Reveal>
      </div>
    </section>
  );
}
