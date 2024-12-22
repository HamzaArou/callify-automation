import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const industries = [
  {
    id: "healthcare",
    name: "Healthcare",
    description: "Automated appointment reminders and follow-ups",
    example: "Reduce no-shows by 40% with AI-powered appointment confirmations",
  },
  {
    id: "retail",
    name: "Retail",
    description: "Order status updates and customer feedback calls",
    example: "Increase customer satisfaction with proactive order updates",
  },
  {
    id: "services",
    name: "Professional Services",
    description: "Payment reminders and service scheduling",
    example: "Recover 30% more overdue payments with automated follow-ups",
  },
];

const IndustryTestCases = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Industry-Specific Test Cases
          </h2>
          <p className="text-xl text-gray-600">
            Discover how our AI voice assistant can be customized for your industry
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Tabs defaultValue="healthcare" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              {industries.map((industry) => (
                <TabsTrigger key={industry.id} value={industry.id}>
                  {industry.name}
                </TabsTrigger>
              ))}
            </TabsList>
            {industries.map((industry) => (
              <TabsContent key={industry.id} value={industry.id}>
                <div className="p-6 bg-white rounded-xl shadow-sm">
                  <h3 className="text-xl font-semibold mb-4">{industry.description}</h3>
                  <p className="text-gray-600 mb-4">{industry.example}</p>
                  <p className="text-sm text-gray-500">
                    Customizable to your specific workflow and requirements
                  </p>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </motion.div>
      </div>
    </section>
  );
};

export default IndustryTestCases;