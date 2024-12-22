import { motion } from "framer-motion";
import { Check } from "lucide-react";

const benefits = [
  "No lengthy contracts, no heavy upfront fees",
  "Quick set-up—we do the heavy lifting",
  "Plug-and-play AI scripts that target tasks where you need help most",
  "If you don't see an ROI in 30 days, you can walk away—no questions asked",
];

const ValueProposition = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Low-Risk, High-Return Solution
          </h2>
          <p className="text-xl text-gray-600">
            Start seeing results without the traditional barriers
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid gap-6"
        >
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="flex items-center gap-4 p-6 bg-white rounded-xl shadow-sm"
            >
              <div className="flex-shrink-0">
                <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                  <Check className="h-5 w-5 text-green-600" />
                </div>
              </div>
              <p className="text-lg text-gray-700">{benefit}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ValueProposition;