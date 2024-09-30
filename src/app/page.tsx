import { CallToAction } from "@/sections/CallToAction";
import { Features } from "@/sections/Features";
import Header from "@/sections/Header";
import HeroSection from "@/sections/HeroSection";
import LogoTicker from "@/sections/LogoTicker";
import { Testimonials } from "@/sections/Testimonials";

export default function Home() {
  return (
    <div>
      <Header />
      <HeroSection/>
      <LogoTicker/>
      <Features/>
      <Testimonials/>
      <CallToAction/>
    </div>
  );
}
