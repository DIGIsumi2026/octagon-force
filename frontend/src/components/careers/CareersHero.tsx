import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Link } from "react-router-dom";
import { images } from "../../data/imageAssets"; 
import "../../App.css";

const heroSlides = [
  {
    id: 1,
    image: images.careers.hero1,
    alt: "Octagon Force security team",
  },
  {
    id: 2,
    image: images.careers.hero3,
    alt: "Octagon Force housekeeping team",
  },
  {
    id: 3,
    image: images.careers.hero2,
    alt: "Octagon Force logistics team",
  },
  {
    id: 4,
    image: images.careers.hero4,
    alt: "Octagon Force cash transport team",
  },
];

function CareersNavButtons() {
  const swiper = useSwiper();

  return (
    <div className="hero-controls-mobile">
      <button type="button" className="hero-prev" aria-label="Previous slide" onClick={() => swiper.slidePrev()}>
        <ChevronLeft size={24} />
      </button>
      <button type="button" className="hero-next" aria-label="Next slide" onClick={() => swiper.slideNext()}>
        <ChevronRight size={24} />
      </button>
    </div>
  );
}

const CareersHero = () => {
  return (
    <section className="careers-hero hero-section">
      <Swiper
        modules={[Autoplay, EffectFade, Pagination]}
        effect="fade"
        loop
        speed={900}
        autoplay={{ delay: 4500, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        className="hero-swiper"
      >
        {heroSlides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="hero-slide">
              <img src={slide.image} alt={slide.alt} className="hero-slide__image" />
              <div className="hero-slide__overlay" />
              <div className="container hero-content">
                <div className="careers-hero-content hero-copy">
                  <h1>Build Your Career With Octagon Force</h1>

                  <p>
                    Join a disciplined team delivering trusted security, housekeeping
                    and cash transport services across Sri Lanka.
                  </p>

                  <div className="careers-hero-actions">
                    <Link to="/contact" className="careers-hero-btn primary">
                      Apply Now <ArrowRight size={18} />
                    </Link>

                    <a href="#career-openings" className="careers-hero-btn secondary">
                      View Opportunities
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
        <CareersNavButtons />
      </Swiper>

    </section>
  );
};

export default CareersHero;
