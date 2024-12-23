import { motion } from "framer-motion";
import { MessageSquare, Cpu, Rocket, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";

const steps = [
  {
    icon: MessageSquare,
    title: "1. Quick Discovery",
    description: "We discuss your biggest call-related challenges—outbound payments, inbound routing, you name it. This quick call lets us map the perfect AI solution.",
  },
  {
    icon: Cpu,
    title: "2. Custom Build",
    description: "Our team configures a tailored AI voice assistant, ready to handle your specific tasks—no complex setup required.",
  },
  {
    icon: Rocket,
    title: "3. Rapid Testing & Launch",
    description: "We demo the solution, you give a thumbs-up, and we go live. Within days, you'll see immediate time-savings and improved call efficiency.",
  },
  {
    icon: BarChart3,
    title: "4. Fine-Tuning & Scale",
    description: "Need more features or to expand across departments? We refine as needed, ensuring ongoing success and ROI.",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="pt-0 pb-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A simple path from discovery to live AI calls in days—not months.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow h-full flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center mb-6">
                    <Icon className="h-8 w-8 text-purple-600" />
                  </div>
                  {/* Connector line */}
                  {index < steps.length - 1 && (
                    <div className="absolute top-1/2 -right-4 w-8 h-0.5 bg-gray-200 hidden lg:block" />
                  )}
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            Ready to Transform Your Calls?
          </h3>
          <Button
            size="lg"
            className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-6 text-lg h-auto"
          >
            Book a Demo
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;
