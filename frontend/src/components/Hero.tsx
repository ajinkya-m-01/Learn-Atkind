import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import AILearningHero from "@/components/AILearningHero";
import AIFeaturesSection from "@/components/AIFeaturesSection";
import TransformerSection from "@/components/TransformerSection";

// New components
import LearningPathVisualizer from "@/components/LearningPathVisualizer";
import TechnologyStackShowcase from "@/components/TechnologyStackShowcase";
import ProjectShowcase from "@/components/ProjectShowcase";

// ✅ Added inline component to fix missing file error
const PremiumFeaturesSection = () => {
  return (
    <section className="py-20 bg-gray-50 text-center">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          Premium AI Learning Experience
        </h2>
        <p className="text-gray-600 text-lg mb-8">
          Unlock personalized mentorship, advanced projects, and priority support with Atkind Premium.
        </p>
        <Button className="bg-black hover:bg-gray-900 text-white font-medium text-lg px-8 py-6 rounded-xl">
          Upgrade to Premium
          <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
        </Button>
      </div>
    </section>
  );
};

const Hero = () => {
  return (
    <>
      {/* AI Learning Hero Section - Now at the top */}
      <AILearningHero />

      {/* Other Sections */}
      <AIFeaturesSection />
      <TransformerSection />

      {/* New Components */}
      <LearningPathVisualizer />
      <TechnologyStackShowcase />
      <ProjectShowcase />

      <PremiumFeaturesSection />
    </>
  );
};

export default Hero;