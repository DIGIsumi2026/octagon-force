import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "motion/react";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { heroSlides } from "../../data/siteData";

const WHATSAPP_NUMBER = "94777660021"; 

const WHATSAPP_MESSAGE =
  "Hello Octagon Force, I would like to know more about your services.";

const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_MESSAGE
)}`;

function HeroNavButtons() {
  const swiper = useSwiper();
  return (
    <div className="hero-controls-mobile">
      <button className="hero-prev" aria-label="Previous slide" onClick={() => swiper.slidePrev()}>
        <ChevronLeft size={24} />
      </button>
      <button className="hero-next" aria-label="Next slide" onClick={() => swiper.slideNext()}>
        <ChevronRight size={24} />
      </button>
    </div>
  );
}

export default function Hero() {
  return (
    <section id="home" className="hero-section">
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
          <SwiperSlide key={slide.title}>
            <div className="hero-slide">
              <img src={slide.image} alt="" className="hero-slide__image" />
              <div className="hero-slide__overlay" />
              <div className="container hero-content">
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
                  className="hero-copy"
                >
                  <span className="eyebrow eyebrow--light">
                    <span />
                    Octagon Portfoloio
                  </span>
                  <h1>{slide.title}</h1>
                  <p>{slide.copy}</p>
                  <div className="hero-actions">
                    <a className="primary-button" href={whatsappUrl}>
                      Chat with Us <ArrowRight size={19} />
                    </a>
                    <a className="secondary-button" href="/about">
                      How It Works <ArrowRight size={19} />
                    </a>
                  </div>
                </motion.div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      
        <HeroNavButtons />
      </Swiper>
    </section>
  );
}
