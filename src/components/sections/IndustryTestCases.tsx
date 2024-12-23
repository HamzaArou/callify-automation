import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PhoneOutgoing, PhoneIncoming, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { UseCase, UseCaseGroup, TestCase } from "@/types/industry-cases";

const outboundCases: UseCase[] = [
  {
    title: "Payment & Invoice Reminders",
    description: "Automated follow-ups for outstanding payments",
    roiStat: "Reduce overdue invoices by 30%",
    example: "Perfect for e-commerce, service-based SMBs, or healthcare billing"
  },
  {
    title: "Appointment Confirmations",
    description: "Automated scheduling and reminder calls",
    roiStat: "Reduce no-shows by 40%",
    example: "Ideal for healthcare, beauty, and professional services"
  },
  {
    title: "Lead Follow-Ups & Sales Calls",
    description: "Timely engagement with potential customers",
    roiStat: "Increase conversion rates by 25%",
    example: "Great for sales teams and lead generation"
  },
  {
    title: "Database Reactivation",
    description: "Re-engage dormant customers",
    roiStat: "Recover 20% of inactive accounts",
    example: "Effective for subscription services and retail"
  },
  {
    title: "Order/Delivery Updates",
    description: "Keep customers informed automatically",
    roiStat: "Reduce support inquiries by 35%",
    example: "Perfect for e-commerce and delivery services"
  },
  {
    title: "Membership/Subscription Renewals",
    description: "Proactive renewal reminders and offers",
    roiStat: "Improve renewal rates by 28%",
    example: "Ideal for subscription-based businesses"
  }
];

const inboundCases: UseCase[] = [
  {
    title: "Front Desk / Reception",
    description: "No more missed calls—our AI welcomes customers 24/7",
    roiStat: "Handle 90% of routine calls automatically",
    example: "Essential for businesses of all sizes"
  },
  {
    title: "Customer Support / Help Desk",
    description: "Automated FAQ handling and ticket logging",
    roiStat: "Resolve 60% of queries instantly",
    example: "Perfect for support teams and service desks"
  },
  {
    title: "Appointment Scheduling",
    description: "Let callers book appointments automatically",
    roiStat: "Save 15 hours per week on scheduling",
    example: "Great for medical offices and service providers"
  },
  {
    title: "Billing & Account Inquiries",
    description: "Quick account checks and status updates",
    roiStat: "Reduce billing support calls by 45%",
    example: "Ideal for subscription services and utilities"
  }
];

const hybridCases: UseCase[] = [
  {
    title: "Support Follow-Up",
    description: "Inbound query triggers automated status check",
    roiStat: "Improve customer satisfaction by 40%",
    example: "Perfect for customer service excellence"
  },
  {
    title: "Order Escalations",
    description: "Automated callback system for issue resolution",
    roiStat: "Reduce resolution time by 50%",
    example: "Ideal for e-commerce and service providers"
  },
  {
    title: "Event/Webinar Management",
    description: "Complete event communication automation",
    roiStat: "Save 10 hours per event on communications",
    example: "Great for education and event management"
  }
];

const UseCaseCard = ({ useCase }: { useCase: UseCase }) => (
  <Card className="p-6 bg-white shadow-sm hover:shadow-md transition-shadow">
    <h4 className="text-lg font-semibold mb-2">{useCase.title}</h4>
    <p className="text-gray-600 mb-3">{useCase.description}</p>
    <p className="text-green-600 font-medium mb-2">{useCase.roiStat}</p>
    <p className="text-sm text-gray-500">{useCase.example}</p>
  </Card>
);

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
            What Exactly Can Be Automated?
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Whether you're looking for outbound, inbound, or hybrid calling solutions, our AI assistant tackles every high-need task—so you can save time, reduce costs, and boost revenue. Explore below to see how we customize each scenario to fit your unique workflow.
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
              <TabsTrigger value="outbound" className="w-1/3">
                <PhoneOutgoing className="w-4 h-4 mr-2" />
                Outbound
              </TabsTrigger>
              <TabsTrigger value="inbound" className="w-1/3">
                <PhoneIncoming className="w-4 h-4 mr-2" />
                Inbound
              </TabsTrigger>
              <TabsTrigger value="hybrid" className="w-1/3">
                <Phone className="w-4 h-4 mr-2" />
                Hybrid
              </TabsTrigger>
            </TabsList>

            <TabsContent value="outbound">
              <h3 className="text-2xl font-bold mb-6 text-center">Outbound Call Scenarios—Our Specialty</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {outboundCases.map((useCase, index) => (
                  <UseCaseCard key={index} useCase={useCase} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="inbound">
              <h3 className="text-2xl font-bold mb-6 text-center">Inbound Call Scenarios—Smart Front Desk & Beyond</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
                {inboundCases.map((useCase, index) => (
                  <UseCaseCard key={index} useCase={useCase} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="hybrid">
              <h3 className="text-2xl font-bold mb-6 text-center">Combine Both for a Seamless Experience</h3>
              <p className="text-center text-gray-600 mb-8 max-w-3xl mx-auto">
                For businesses needing a complete communication loop, our AI integrates inbound and outbound seamlessly—responding to inquiries, then following up proactively.
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                {hybridCases.map((useCase, index) => (
                  <UseCaseCard key={index} useCase={useCase} />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-16 text-center"
        >
          <p className="text-lg text-gray-600 max-w-4xl mx-auto mb-8">
            Ready to see how these AI scenarios fit your business? We've prepared pre-built test cases—no complex setup required.
          </p>
          <Button size="lg" className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700">
            Try a Free Outbound Demo
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default IndustryTestCases;