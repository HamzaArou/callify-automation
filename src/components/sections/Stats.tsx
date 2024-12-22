import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const stats = [
  {
    value: "12",
    unit: "hours",
    label: "Staff time saved per week",
  },
  {
    value: "30",
    unit: "%",
    label: "More overdue invoices recovered",
  },
  {
    value: "40",
    unit: "%",
    label: "Reduction in no-shows",
  },
];

const Stats = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  return (
    <section ref={containerRef} className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center p-6 rounded-xl bg-white shadow-sm"
            >
              <motion.div
                initial={{ scale: 0.5 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                className="text-4xl md:text-5xl font-bold text-purple-600 mb-2"
              >
                {stat.value}
                <span className="text-2xl md:text-3xl ml-1">{stat.unit}</span>
              </motion.div>
              <p className="text-gray-600 text-lg">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;