import Hero from "../components/home/Hero";
import Marquee from "../components/home/Marquee";
import AboutBanner from "../components/home/AboutBanner";
import BenefitCards from "../components/home/BenefitCards";

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <AboutBanner />
      <BenefitCards />
    </>
  );
}