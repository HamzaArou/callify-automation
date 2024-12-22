import { motion } from "framer-motion";
import { ArrowRight, Phone, MessageSquare, BarChart3, Upload } from "lucide-react";
import { Button } from "@/components/ui/button";
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
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Nav />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8">
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