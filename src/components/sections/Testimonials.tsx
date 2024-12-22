import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    quote: "This boosted our invoice collections by 25% in under a month.",
    author: "Sarah Johnson",
    role: "Finance Director",
    company: "TechCorp Inc.",
  },
  {
    quote: "The automated calls saved our team countless hours of manual work.",
    author: "Michael Chen",
    role: "Operations Manager",
    company: "Global Solutions",
  },
  {
    quote: "Customer response rates improved dramatically with AI voice calls.",
    author: "Emma Williams",
    role: "Customer Success",
    company: "ServicePro",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((current) => (current + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((current) => (current - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative bg-white rounded-2xl shadow-sm p-8 md:p-12"
        >
          <Quote className="absolute text-purple-100 h-24 w-24 -top-6 -left-6 transform -rotate-12" />
          
          <div className="relative z-10">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="text-center"
            >
              <p className="text-2xl md:text-3xl text-gray-900 mb-8">
                "{testimonials[currentIndex].quote}"
              </p>
              <div className="space-y-2">
                <p className="font-semibold text-gray-900">
                  {testimonials[currentIndex].author}
                </p>
                <p className="text-gray-600">
                  {testimonials[currentIndex].role}, {testimonials[currentIndex].company}
                </p>
              </div>
            </motion.div>

            <div className="flex justify-center items-center space-x-4 mt-8">
              <Button
                variant="outline"
                size="icon"
                onClick={prev}
                className="rounded-full"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      index === currentIndex ? "bg-purple-600" : "bg-gray-300"
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
              <Button
                variant="outline"
                size="icon"
                onClick={next}
                className="rounded-full"
                aria-label="Next testimonial"
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;