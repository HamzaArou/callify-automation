import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Phone } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const Demo = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast({
      title: "Demo call initiated!",
      description: "You will receive a call shortly to experience our AI voice assistant.",
    });

    setIsLoading(false);
    setPhoneNumber("");
  };

  return (
    <section id="demo" className="py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Experience It Yourself
          </h2>
          <p className="text-xl text-gray-600">
            Enter your phone number below to receive a demo call from our AI voice assistant
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white rounded-2xl shadow-sm p-8 md:p-12"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="max-w-sm mx-auto">
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                Phone Number
              </label>
              <Input
                id="phone"
                type="tel"
                placeholder="Enter your phone number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                className="w-full"
                required
              />
            </div>
            <div className="flex justify-center">
              <Button
                type="submit"
                size="lg"
                disabled={isLoading}
                className="w-full max-w-sm group"
              >
                <Phone className="mr-2 h-4 w-4" />
                {isLoading ? "Initiating Demo Call..." : "Start Demo Call"}
              </Button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Demo;