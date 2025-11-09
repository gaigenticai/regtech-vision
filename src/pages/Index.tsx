// Header is rendered globally from App.tsx
import HeroSection from "@/components/HeroSection";
import GaigenticLabsSection from "@/components/GaigenticLabsSection";
import SolutionsPreview from "@/components/SolutionsPreview";
import AgentsShowcase from "@/components/AgentsShowcase";
import ProcessSection from "@/components/ProcessSection";
import AboutSection from "@/components/AboutSection";
import StickyCTA from "@/components/StickyCTA";

const Index = () => {
  return (
  <div className="min-h-screen bg-white">
  <main className="pt-16 md:pt-0">
        <HeroSection />
        <GaigenticLabsSection />
        <AgentsShowcase />
        <SolutionsPreview />
        <ProcessSection />
        <AboutSection />
      </main>
  <StickyCTA />
    </div>
  );
};

export default Index;