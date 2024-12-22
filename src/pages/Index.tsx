import { motion } from "framer-motion";
import Hero from "@/components/sections/Hero";
import HowItWorks from "@/components/sections/HowItWorks";
import Stats from "@/components/sections/Stats";
import VideoSection from "@/components/sections/VideoSection";
import Testimonials from "@/components/sections/Testimonials";
import Demo from "@/components/sections/Demo";
import Footer from "@/components/sections/Footer";
import Nav from "@/components/Nav";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white relative">
      <Nav />
      <main className="relative">
        <Hero />
        <VideoSection />
        <HowItWorks />
        <Stats />
        <Testimonials />
        <Demo />
      </main>
      <Footer />
    </div>
  );
};

export default Index;