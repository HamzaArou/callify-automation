import { motion } from "framer-motion";
import Hero from "@/components/sections/Hero";
import VideoSection from "@/components/sections/VideoSection";
import IndustryTestCases from "@/components/sections/IndustryTestCases";
import Benefits from "@/components/sections/Benefits";
import HowItWorks from "@/components/sections/HowItWorks";
import ValueProposition from "@/components/sections/ValueProposition";
import Demo from "@/components/sections/Demo";
import Testimonials from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ";
import Footer from "@/components/sections/Footer";
import Nav from "@/components/Nav";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white relative">
      <Nav />
      <main className="relative">
        <Hero />
        <VideoSection />
        <IndustryTestCases />
        <Benefits />
        <HowItWorks />
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