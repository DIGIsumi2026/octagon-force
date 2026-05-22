import Hero from "../components/home/Hero";
import Marquee from "../components/home/Marquee";
import AboutBanner from "../components/home/AboutBanner";
import BenefitCards from "../components/home/BenefitCards";
import ProjectShowcase from "../components/home/ProjectShowcase";

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <AboutBanner />
      <BenefitCards />
      <ProjectShowcase />
    </>
  );
}