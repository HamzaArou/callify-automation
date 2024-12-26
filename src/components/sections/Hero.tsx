import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const Hero = () => {
  const [currentService, setCurrentService] = useState<"AI Assistant" | "New Website">("AI Assistant");
  const [phoneNumber, setPhoneNumber] = useState("");
  const { toast } = useToast();

  // Rotate service text
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentService(prev => prev === "AI Assistant" ? "New Website" : "AI Assistant");
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleSubmit = () => {
    if (!phoneNumber || phoneNumber.length < 10) {
      toast({
        variant: "destructive",
        title: "Phone Number Required",
        description: "Please enter a valid phone number to continue.",
      });
      return;
    }

    console.log("Submitted phone:", phoneNumber);
    toast({
      title: "Success!",
      description: "We'll contact you shortly to discuss your project.",
    });
    setPhoneNumber("");
  };

  const tooltipText = currentService === "AI Assistant" 
    ? "Automate inbound/outbound calls and boost conversions"
    : "Elevate your online presence with a modern, custom rebuild";

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
            Automate inbound queries and outbound follow-ups in minutes. Save hours on repetitive calls, capture more revenue, and streamline customer interactions—no complex setup, no extra costs.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col md:flex-row justify-center items-center gap-4 max-w-2xl mx-auto"
        >
          <div className="w-full md:w-[300px]">
            <PhoneInput
              country={"us"}
              value={phoneNumber}
              onChange={(phone) => setPhoneNumber(phone)}
              containerClass="w-full"
              inputClass="!w-full !h-[52px] !text-lg"
              buttonClass="!h-[52px]"
              placeholder="Enter your phone number"
            />
          </div>
          
          <div className="relative group w-full md:w-auto">
            <Button 
              size="lg" 
              onClick={handleSubmit}
              className="w-full md:w-auto group bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white !px-8 !py-6 text-lg relative whitespace-nowrap h-[52px]"
            >
              Build My{" "}
              <motion.span
                key={currentService}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="text-[#ff914d] font-semibold"
              >
                {currentService}
              </motion.span>
            </Button>
            <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 w-64 bg-black text-white text-sm rounded-md py-2 px-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {tooltipText}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
