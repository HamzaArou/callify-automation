import { motion } from "framer-motion";
import { Target, MessageSquare, Play, BarChart3 } from "lucide-react";

const steps = [
  {
    icon: Target,
    title: "Pick Your Task",
    description: "Choose a high-need, low-risk task like overdue invoices or appointment reminders",
  },
  {
    icon: MessageSquare,
    title: "Get Your Script",
    description: "We provide a pre-built voice script and handle all setup",
  },
  {
    icon: Play,
    title: "Launch Calls",
    description: "Start your AI calls (inbound or outbound) in just a few clicks",
  },
  {
    icon: BarChart3,
    title: "Track Results",
    description: "Monitor real-time results with clear metrics on outcomes and time saved",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            How Our Test Cases Work
          </h2>
          <p className="text-xl text-gray-600">
            Get started in minutes with our simple setup process
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mb-4">
                  <Icon className="h-6 w-6 text-purple-600" />
                </div>
                <div className="absolute -left-4 top-1/2 transform -translate-y-1/2 hidden lg:block">
                  {index < steps.length - 1 && (
                    <div className="w-8 h-0.5 bg-gray-200"></div>
                  )}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;