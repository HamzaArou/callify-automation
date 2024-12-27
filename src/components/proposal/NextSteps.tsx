import { Search, PuzzlePiece, Rocket } from "lucide-react";

const NextSteps = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-white mb-8">Here's what will happen next:</h2>

      <div className="space-y-6">
        <div className="bg-[#7E5BDC] rounded-xl p-6 text-white">
          <div className="flex items-start gap-4">
            <div className="bg-[#6B47DC]/50 p-3 rounded-lg">
              <Search className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Review Your Details</h3>
              <p className="text-gray-100">
                We'll analyze your industry, goals, and call data needs to design the perfect outbound AI scenario.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-[#7E5BDC] rounded-xl p-6 text-white">
          <div className="flex items-start gap-4">
            <div className="bg-[#6B47DC]/50 p-3 rounded-lg">
              <PuzzlePiece className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Build Your Test Case</h3>
              <p className="text-gray-100">
                Our experts create a custom call flow in Make.com and VAPI.ai, focusing on your top priorities—whether it's scheduling, payments, or reminders.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-[#7E5BDC] rounded-xl p-6 text-white">
          <div className="flex items-start gap-4">
            <div className="bg-[#6B47DC]/50 p-3 rounded-lg">
              <Rocket className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Demo & Launch</h3>
              <p className="text-gray-100">
                We'll demo the AI assistant, gather your feedback, and go live. Track every call's outcome—plus recordings—in our dashboard.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NextSteps;