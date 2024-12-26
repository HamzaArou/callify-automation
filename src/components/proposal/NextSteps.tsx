import { Search, ArrowRight, Rocket } from "lucide-react";

const NextSteps = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-white mb-8">Here's what will happen next:</h2>

      <div className="space-y-6">
        <div className="bg-blue-900 rounded-xl p-6 text-white">
          <div className="flex items-start gap-4">
            <div className="bg-blue-800/50 p-3 rounded-lg">
              <Search className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Review Your Details</h3>
              <p className="text-blue-100">
                We'll analyze your industry, use case, and data needs to craft the perfect outbound call scenario.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-blue-900 rounded-xl p-6 text-white">
          <div className="flex items-start gap-4">
            <div className="bg-blue-800/50 p-3 rounded-lg">
              <ArrowRight className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Build Your Test Case</h3>
              <p className="text-blue-100">
                Our team designs a custom call flow in Make.com and VAPI.ai, focusing on your chosen outcome—appointments, payments, or follow-ups.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-blue-900 rounded-xl p-6 text-white">
          <div className="flex items-start gap-4">
            <div className="bg-blue-800/50 p-3 rounded-lg">
              <Rocket className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Demo & Launch</h3>
              <p className="text-blue-100">
                We'll demo the AI assistant, gather your feedback, and go live. Track results in our dashboard—from call recordings to final outcomes.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center gap-8 mt-12">
        <img src="/amazon-partner.png" alt="Amazon Partner" className="h-16 object-contain" />
        <img src="/inc5000.png" alt="Inc 5000" className="h-16 object-contain" />
        <img src="/google-partner.png" alt="Google Partner" className="h-16 object-contain" />
        <img src="/microsoft-partner.png" alt="Microsoft Partner" className="h-16 object-contain" />
      </div>
    </div>
  );
};

export default NextSteps;