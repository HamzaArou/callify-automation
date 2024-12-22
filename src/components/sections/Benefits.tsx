import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";

const benefits = [
  {
    stat: "30%",
    label: "More overdue invoices recovered",
  },
  {
    stat: "40%",
    label: "Reduction in no-shows",
  },
  {
    stat: "12",
    suffix: "hrs",
    label: "Staff time saved per week",
  },
  {
    stat: "50%",
    label: "Cut in busywork calls",
  },
];

const Benefits = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Immediate Benefits
          </h2>
          <p className="text-xl text-gray-600">
            Real results from our clients' success stories
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="absolute top-4 right-4 text-green-500">
                <ArrowUp className="h-5 w-5" />
              </div>
              <div className="text-4xl md:text-5xl font-bold text-purple-600 mb-2">
                {benefit.stat}
                {benefit.suffix && <span className="text-2xl ml-1">{benefit.suffix}</span>}
              </div>
              <p className="text-gray-600">{benefit.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;