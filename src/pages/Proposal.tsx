import ProposalForm from "@/components/proposal/ProposalForm";
import NextSteps from "@/components/proposal/NextSteps";

const Proposal = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#6B47DC] to-[#5A3DBA]">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl font-bold text-white mb-4">Ready to Automate Your Outbound Calls?</h1>
          <p className="text-xl text-gray-100 mb-12">
            Request your FREE AI Outbound Caller from the experts who specialize in voice automation.
          </p>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Column - Form */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Request a FREE Proposal Now!</h2>
              <ProposalForm />
            </div>

            {/* Right Column - Next Steps */}
            <div className="space-y-6">
              <NextSteps />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Proposal;