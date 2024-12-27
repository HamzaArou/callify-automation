import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (!phoneNumber || phoneNumber.length < 10) {
      toast({
        variant: "destructive",
        title: "Invalid phone number",
        description: "Please enter a valid phone number to continue",
      });
      return;
    }
    
    navigate('/proposal', { state: { phoneNumber } });
  };

  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-20">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center gap-8 text-center"
        >
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            Get More Leads with an
            <br />
            AI-Powered Sales Team
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-[800px]">
            Our AI assistant handles your outbound calls 24/7, booking meetings and qualifying leads while you focus on closing deals.
          </p>
          
          <div className="flex flex-col md:flex-row gap-4 w-full max-w-lg">
            <div className="w-[300px] mx-auto">
              <PhoneInput
                country={"us"}
                value={phoneNumber}
                onChange={setPhoneNumber}
                inputStyle={{
                  width: "100%",
                  height: "52px",
                  fontSize: "1.125rem",
                  backgroundColor: "white"
                }}
                inputProps={{
                  placeholder: "Enter your phone number"
                }}
              />
            </div>
          </div>
          
          <div className="w-full md:w-auto">
            <Button 
              size="lg" 
              onClick={handleSubmit}
              className="w-full md:w-auto group bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white !px-8 !py-6 text-lg relative whitespace-nowrap h-[52px]"
            >
              Build My AI Assistant
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
