import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { PhoneOutgoing, PhoneIncoming, ArrowUp, ArrowDown, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const complexityLevels = {
  outbound: {
    low: {
      title: "Low Complexity",
      description: "Minimal disruption, fast ROI, easy to set up",
      items: [
        "Payment & Invoice Reminders: Gently nudge customers about upcoming or overdue payments",
        "Appointment Confirmations: Automatically remind clients of scheduled visits or calls",
        "Simple Follow-Ups: Send quick check-ins or thank-you messages after an initial purchase or inquiry"
      ]
    },
    mid: {
      title: "Mid Complexity",
      description: "Boosts revenue by targeting specific groups; can handle moderate call flow complexity",
      items: [
        "Sales & Lead Follow-Ups: Re-engage warm leads, cross-sell, or upsell existing customers",
        "Database Reactivation: Prompt dormant clients to revisit your products/services",
        "Promotional or Seasonal Campaigns: Announce limited-time offers or holiday sales"
      ]
    },
    high: {
      title: "High Complexity",
      description: "Advanced AI logic minimizes human oversight while maintaining professional tone",
      items: [
        "Collections & Sensitive Negotiations: AI handles more delicate calls with empathetic, data-driven scripts",
        "Contract Renewals & Negotiations: Automate renewals or initial negotiations",
        "Critical Client Communications: For high-value relationships requiring personalized conversations"
      ]
    }
  },
  inbound: {
    low: {
      title: "Low Complexity",
      description: "Frees your team from repetitive tasks; easy to implement with minimal operational risk",
      items: [
        "Basic Reception & Call Routing: Instantly direct callers to the correct department",
        "FAQs & Simple Queries: Provide answers to common questions without tying up staff",
        "Internal HR Hotline: Automate simple staff inquiries or internal announcements"
      ]
    },
    mid: {
      title: "Mid Complexity",
      description: "Reduces wait times, improves satisfaction by swiftly connecting callers",
      items: [
        "Multi-Department Transfers: Seamlessly triage calls between departments",
        "Appointment Booking & Service Scheduling: Help callers set or change appointments via AI",
        "Order Status & Tracking: Allow customers to retrieve updates in real time"
      ]
    },
    high: {
      title: "High Complexity",
      description: "Maintains professionalism under heavier risk scenarios",
      items: [
        "Complaint Handling & Escalation: AI gathers details, attempts resolution",
        "Tier-2 or Specialized Support Calls: Capable of advanced troubleshooting",
        "High-Value Client Routing: Prioritize premium clients with custom greetings"
      ]
    }
  }
};

const testCases = [
  {
    title: "Overdue Invoice Reminders",
    description: "Launch a small outbound campaign to a handful of overdue accounts to prove immediate results."
  },
  {
    title: "Appointment Reminders",
    description: "Upload a list of upcoming appointments, and watch as our AI reduces no-shows by up to 40%."
  },
  {
    title: "Inbound Call Routing Demo",
    description: "We'll set up a trial phone line that shows how efficiently our AI can direct callers to different departments."
  },
  {
    title: "Sales Lead Follow-Up",
    description: "We'll help you re-engage a small batch of warm leads and track conversions in real time."
  }
];

const IndustryTestCases = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Optimize Every Phone Call: Outbound and Inbound AI at Your Fingertips
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Our AI voice assistant scales to any business need, from simple, low-risk calls to more sophisticated, high-complexity tasks. Below, you'll find every scenario we support—so you can see at a glance how we'll transform your phone-based processes, no matter your industry.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-16"
        >
          <Tabs defaultValue="outbound" className="w-full">
            <TabsList className="w-full max-w-md mx-auto mb-8">
              <TabsTrigger value="outbound" className="w-1/2">
                <PhoneOutgoing className="w-4 h-4 mr-2" />
                Outbound Calls
              </TabsTrigger>
              <TabsTrigger value="inbound" className="w-1/2">
                <PhoneIncoming className="w-4 h-4 mr-2" />
                Inbound Calls
              </TabsTrigger>
            </TabsList>

            {["outbound", "inbound"].map((type) => (
              <TabsContent key={type} value={type}>
                <div className="space-y-6">
                  {Object.entries(complexityLevels[type]).map(([level, data]) => (
                    <motion.div
                      key={level}
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
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 text-white"
        >
          <h3 className="text-2xl font-bold mb-6 text-center">Ready-to-Test Use Cases</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testCases.map((testCase, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-colors"
              >
                <h4 className="text-lg font-semibold mb-3">{testCase.title}</h4>
                <p className="text-gray-300 text-sm mb-4">{testCase.description}</p>
                <Button
                  variant="secondary"
                  className="w-full bg-white text-gray-900 hover:bg-gray-100"
                >
                  Launch Quick Test
                </Button>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-16 text-center"
        >
          <p className="text-lg text-gray-600 max-w-4xl mx-auto mb-8">
            Whether it's a single use case or a full-scale rollout, our AI voice assistant scales seamlessly from less complicated tasks to higher-stakes conversations. Ready to see it in action?
          </p>
          <Button size="lg" className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700">
            Book Your Free Trial Now
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default IndustryTestCases;