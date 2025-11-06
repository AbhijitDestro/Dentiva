import Header from "@/components/Landing/Header";
import Hero from "@/components/Landing/Hero";
import HowItWorks from "@/components/Landing/HowItWorks";
import WhatToAsk from "@/components/Landing/WhatToAsk";
import PricingSection from "@/components/Landing/PricingSection";
import CTA from "@/components/Landing/CTA";
import Footer from "@/components/Landing/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <HowItWorks />
      <WhatToAsk />
      <PricingSection />
      <CTA />
      <Footer />
    </div>
  );
}