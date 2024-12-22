import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ArrowUp, ArrowDown, CheckCircle } from "lucide-react";
import { ComplexityLevel } from "@/types/industry-cases";

interface ComplexityLevelAccordionProps {
  level: string;
  data: ComplexityLevel;
  type: string;
}

export const ComplexityLevelAccordion = ({ level, data, type }: ComplexityLevelAccordionProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden"
    >
      <Accordion type="single" collapsible>
        <AccordionItem value={`${type}-${level}`}>
          <AccordionTrigger className="px-6 py-4 hover:no-underline">
            <div className="flex items-center gap-3">
              {level === "low" ? (
                <ArrowDown className="w-5 h-5 text-green-500" />
              ) : level === "mid" ? (
                <ArrowUp className="w-5 h-5 text-yellow-500" />
              ) : (
                <ArrowUp className="w-5 h-5 text-red-500" />
              )}
              <div className="text-left">
                <h3 className="text-lg font-semibold">{data.title}</h3>
                <p className="text-sm text-gray-500">{data.description}</p>
              </div>
            </div>
          </AccordionTrigger>
          <AccordionContent className="px-6 pb-4">
            <ul className="space-y-3">
              {data.items.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </motion.div>
  );
};