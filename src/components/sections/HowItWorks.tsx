import { motion } from "framer-motion";
import { Upload, MessageSquare, Phone, BarChart3 } from "lucide-react";

const steps = [
  {
    icon: Upload,
    title: "Connect your data",
    description: "Easily import your invoices, bookings, and customer data",
  },
  {
    icon: MessageSquare,
    title: "Customize your script",
    description: "Create personalized voice scripts that match your brand",
  },
  {
    icon: Phone,
    title: "Launch automated calls",
    description: "Start your campaign with just a few clicks",
  },
  {
    icon: BarChart3,
    title: "Track results",
    description: "Monitor performance and optimize in real-time",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-16 md:py-24">
      <div className="text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
        >
          How It Works
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl text-gray-600"
        >
          Get started in minutes with our simple setup process
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {steps.map((step, index) => {
          const Icon = step.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center text-center p-6 rounded-xl bg-white shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mb-4">
                <Icon className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default HowItWorks;