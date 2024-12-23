import { motion } from "framer-motion";
import Hero from "@/components/sections/Hero";
import IndustryTestCases from "@/components/sections/IndustryTestCases";
import Benefits from "@/components/sections/Benefits";
import WhatWeDo from "@/components/sections/WhatWeDo";
import ValueProposition from "@/components/sections/ValueProposition";
import Demo from "@/components/sections/Demo";
import Testimonials from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ";
import Footer from "@/components/sections/Footer";
import Nav from "@/components/Nav";
import HowItWorks from "@/components/sections/HowItWorks";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white relative">
      <Nav />
      <main className="relative">
        <Hero />
        <WhatWeDo />
        <IndustryTestCases />
        <HowItWorks />
        <Benefits />
        <ValueProposition />
        <Demo />
        <Testimonials />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
};

export default Index;