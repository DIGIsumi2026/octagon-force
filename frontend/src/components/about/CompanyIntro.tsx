import { useRef} from "react";
import { motion, useScroll, useTransform } from "motion/react";
import Reveal from "../common/Reveal";
import { images } from "../../data/imageAssets";



export default function CompanyIntro() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const hoverTimerRef = useRef<number | null>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const imageScale = useTransform(
    scrollYProgress,
    [0, 0.78, 1],
    [1.02, 1.02, 1]
  );

  const imageOpacity = useTransform(
    scrollYProgress,
    [0, 0.78, 0.9, 1],
    [1, 1, 0.82, 0.64]
  );

  const cardY = useTransform(
    scrollYProgress,
    [0.08, 0.78, 1],
    ["106vh", "0vh", "0vh"]
  );

  const cardRadius = useTransform(
    scrollYProgress,
    [0.08, 0.78],
    ["46px", "0px"]
  );

  const playVideo = () => {
  const video = videoRef.current;
  if (!video) return;

  if (hoverTimerRef.current) {
    window.clearTimeout(hoverTimerRef.current);
  }

  hoverTimerRef.current = window.setTimeout(async () => {
    try {
      video.muted = true;
      video.currentTime = 0;
      await video.play();
    } catch (error) {
      console.error("About intro video failed to play:", error);
    }
  }, 2000);
};


  const stopVideo = () => {
  const video = videoRef.current;

  if (hoverTimerRef.current) {
    window.clearTimeout(hoverTimerRef.current);
    hoverTimerRef.current = null;
  }

  if (!video) return;

  video.pause();
  video.currentTime = 0;
};

  return (
    <section className="about-company-intro" ref={sectionRef}>
      <div className="about-company-intro__sticky">
        <div
          className="about-company-intro__media-stage"
          onMouseEnter={playVideo}
          onMouseLeave={stopVideo}
        >
          <motion.img
            src={images.about.entry}
            alt="Octagon Force employees representing company services"
            className="about-company-intro__image"
            style={{
              scale: imageScale,
              opacity: imageOpacity,
            }}
          />

          <video
            ref={videoRef}
            className="about-company-intro__video"
            src={images.about.companyIntroVideo}
            muted
            playsInline
            loop
            preload="auto"
          />

          <div className="about-company-intro__image-shade" />

          <div className="about-company-intro__hover-badge">
            Hover To Play
          </div>
        </div>
      </div>

      <div className="container about-company-intro__stack">
        <motion.article
          className="about-company-card"
          style={{
            y: cardY,
            borderRadius: cardRadius,
          }}
        >
          <div className="about-company-card__inner">
            <div className="about-company-card__logo">
              <img
                src={images.about.sumathiLogo}
                alt="Sumathi Universal Management and Investment Private Limited logo"
              />
            </div>

            <div className="about-company-card__content">
              <span className="eyebrow">
                <span />
                About Us
              </span>

              <h2>Part Of A Legacy Built On Unity, Honesty, And Integrity.</h2>

              <p>
                Octagon Force is part of Sumathi Universal Management and
                Investment (Pvt) Ltd, a business conglomerate bound by familial
                values of unity, honesty, and integrity.
              </p>

              <p>
                The foundation of the company was established in 1948 by Late
                Mr. U.W. Sumathipala and his spouse, Late Dr. (Mrs) Milina
                Sumathipala.
              </p>
            </div>
          </div>
        </motion.article>

        <Reveal delay={0.12}>
  <section className="about-vision-mission-section">
  <div className="about-vision-mission-header">
    <span className="eyebrow eyebrow--light">
      <span />
      Vision & Mission
    </span>

    <h2>Guided By Purpose. Driven By Service.</h2>

    <p>
      Our vision and mission reflect the standards, discipline, and service
      commitment that guide every Octagon Force operation.
    </p>
  </div>

  <div className="about-vm-swipe-list">
    {/* Vision */}
    <motion.article
      className="about-vm-swipe-card about-vm-swipe-card--vision"
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.62 }}
    >
      <motion.div
        className="about-vm-swipe-card__content about-vm-swipe-card__content--left"
        variants={{
          hidden: { opacity: 0, x: -70, filter: "blur(10px)" },
          show: { opacity: 1, x: 0, filter: "blur(0px)" },
        }}
        transition={{
          duration: 0.9,
          ease: [0.22, 1, 0.36, 1],
          delay: 0.2,
        }}
      >

        <span className="eyebrow eyebrow--light">
          <span />
          Our Vision
        </span>
        <p>
          To become a dominant force in every industry we operate in, 
          while contributing towards the development of our nation and its citizens.
        </p>
      </motion.div>

      <motion.div
        className="about-vm-swipe-card__media"
        variants={{
          hidden: {
            left: "0%",
            width: "100%",
            borderRadius: "0px",
          },
          show: {
            left: "50%",
            width: "50%",
            borderRadius: "34px",
          },
        }}
        transition={{
          duration: 1.15,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        <motion.img
          src={images.about.visionImage}
          alt="Octagon Force company vision"
          variants={{
            hidden: {
              filter: "blur(8px) saturate(0.9) contrast(0.9)",
              scale: 1.08,
            },
            show: {
              filter: "blur(0px) saturate(1.06) contrast(1.04)",
              scale: 1.02,
            },
          }}
          transition={{
            duration: 1.1,
            ease: [0.22, 1, 0.36, 1],
          }}
        />

        <motion.div
          className="about-vm-swipe-card__intro-label"
          variants={{
            hidden: { opacity: 1, y: 0, filter: "blur(0px)" },
            show: { opacity: 0, y: -18, filter: "blur(8px)" },
          }}
          transition={{
            duration: 0.55,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <span className="eyebrow eyebrow--light">
            <span />
            Our Vision
          </span>
        </motion.div>
      </motion.div>
    </motion.article>

    {/* Mission */}
    <motion.article
      className="about-vm-swipe-card about-vm-swipe-card--mission"
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.62 }}
    >
      <motion.div
        className="about-vm-swipe-card__content about-vm-swipe-card__content--right"
        variants={{
          hidden: { opacity: 0, x: 70, filter: "blur(10px)" },
          show: { opacity: 1, x: 0, filter: "blur(0px)" },
        }}
        transition={{
          duration: 0.9,
          ease: [0.22, 1, 0.36, 1],
          delay: 0.2,
        }}
      >

        <span className="eyebrow eyebrow--light">
          <span />
          Our Mission
        </span>
        <p>
          To become a sustainable business that brings merits and profitability to the entire society, 
          while remaining true to our beliefs and the highest level of integrity. 
          We strive to achieve product and service excellence to become the strongest, 
          most innovative, and diversified group in the region.
        </p>
      </motion.div>

      <motion.div
        className="about-vm-swipe-card__media"
        variants={{
          hidden: {
            left: "0%",
            width: "100%",
            borderRadius: "0px",
          },
          show: {
            left: "0%",
            width: "50%",
            borderRadius: "34px",
          },
        }}
        transition={{
          duration: 1.15,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        <motion.img
          src={images.about.missionImage}
          alt="Octagon Force company mission"
          variants={{
            hidden: {
              filter: "blur(8px) saturate(0.9) contrast(0.9)",
              scale: 1.08,
            },
            show: {
              filter: "blur(0px) saturate(1.06) contrast(1.04)",
              scale: 1.02,
            },
          }}
          transition={{
            duration: 1.1,
            ease: [0.22, 1, 0.36, 1],
          }}
        />

        <motion.div
          className="about-vm-swipe-card__intro-label"
          variants={{
            hidden: { opacity: 1, y: 0, filter: "blur(0px)" },
            show: { opacity: 0, y: -18, filter: "blur(8px)" },
          }}
          transition={{
            duration: 0.55,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <span className="eyebrow eyebrow--light">
            <span />
            Our Mission
          </span>
        </motion.div>
      </motion.div>
    </motion.article>
  </div>
   </section>
   </Reveal>
      </div>
    </section>
  );
}