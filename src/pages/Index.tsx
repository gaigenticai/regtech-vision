// Header is rendered globally from App.tsx
import HeroSection from "@/components/HeroSection";
import WhoWeAreSection from "@/components/WhoWeAreSection";
import GaigenticLabsSection from "@/components/GaigenticLabsSection";
import AgentsShowcase from "@/components/AgentsShowcase";
import AboutSection from "@/components/AboutSection";
import StickyCTA from "@/components/StickyCTA";

const Index = () => {
  return (
  <div className="min-h-screen bg-white">
  <main className="pt-16 md:pt-0">
        <HeroSection />
        <WhoWeAreSection />
        <GaigenticLabsSection />
        <AgentsShowcase />
        <AboutSection />
      </main>
  <StickyCTA />
    </div>
  );
};

export default Index;
