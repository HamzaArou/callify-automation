import { motion } from "framer-motion";
import { Phone, Clock, DollarSign, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

const benefits = [
  {
    icon: Clock,
    title: "Save Time",
    description: "Automate repetitive calls and follow-ups"
  },
  {
    icon: DollarSign,
    title: "Reduce Costs",
    description: "Lower overhead while scaling operations"
  },
  {
    icon: Heart,
    title: "Delight Customers",
    description: "24/7 availability with consistent service"
  }
];

const WhatWeDo = () => {
  const scrollToDemo = () => {
    const demoSection = document.getElementById('demo');
    if (demoSection) {
      demoSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center lg:text-left"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              What We Do
            </h2>
            <h3 className="text-xl font-semibold text-purple-600 mb-6">
              AI Voice Calls That Free Your Team and Drive Revenue
            </h3>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              We build custom AI voice assistants that handle your inbound and outbound calls—everything from payment reminders to appointment scheduling and follow-ups. Our solutions run effortlessly in the background, saving your team hours of repetitive work and boosting customer satisfaction.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              It's fast to deploy, simple to scale, and proven to deliver real ROI.
            </p>
            <Button 
              size="lg"
              onClick={scrollToDemo}
              className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white"
            >
              Try It Now
            </Button>
          </motion.div>

          {/* Right Column - Benefits */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-start space-x-4"
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center">
                    <benefit.icon className="w-6 h-6 text-purple-600" />
                  </div>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">
                    {benefit.title}
                  </h4>
                  <p className="text-gray-600">
                    {benefit.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;