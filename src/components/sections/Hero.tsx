import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

const Hero = () => {
  const scrollToVideo = () => {
    const element = document.getElementById("video-section");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-20">
      <div className="text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight bg-gradient-to-r from-gray-900 via-purple-900 to-gray-900 bg-clip-text text-transparent mb-6">
            AI Voice Calls Made Easy—
            <br />
            Test Our Assistant, Risk-Free
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Automate inbound queries and outbound follow-ups in minutes. Save hours on repetitive calls, capture more revenue, and streamline customer interactions—no complex setup, no extra costs. Ready to see it in action? Test our AI voice assistant now and experience instant results for your business.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Button 
            size="lg" 
            className="group bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white px-8 py-6 text-lg"
          >
            Test It Free Now
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            className="px-8 py-6 text-lg border-2 group"
            onClick={scrollToVideo}
          >
            See How It Works
            <Play className="ml-2 h-5 w-5 transition-transform group-hover:scale-110" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;