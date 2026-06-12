import Navbar from "@/app/components/Navbar";
import HeroSection from "@/app/components/HeroSection";
import CountdownTimer from "@/app/components/CountdownTimer";
import VisionSection from "@/app/components/VisionSection";
import FeaturesSection from "@/app/components/FeaturesSection";
import AIShowcase from "@/app/components/AIShowcase";
import ModulesSection from "@/app/components/ModulesSection";
import RoadmapSection from "@/app/components/RoadmapSection";
import ProductScreens from "@/app/components/ProductScreens";
import TeamSection from "@/app/components/TeamSection";
import WaitlistSection from "@/app/components/WaitlistSection";
import FAQSection from "@/app/components/FAQSection";
import Footer from "@/app/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <CountdownTimer />
        <VisionSection />
        <FeaturesSection />
        <AIShowcase />
        <ModulesSection />
        <RoadmapSection />
        <ProductScreens />
        <TeamSection />
        <WaitlistSection />
        <FAQSection />
      </main>
      <Footer />
    </>
  );
}
