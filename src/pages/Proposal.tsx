import ProposalForm from "@/components/proposal/ProposalForm";
import NextSteps from "@/components/proposal/NextSteps";

const Proposal = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column - Form */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h1 className="text-3xl font-bold mb-8">Request a FREE Proposal Now!</h1>
            <ProposalForm />
          </div>

          {/* Right Column - Next Steps */}
          <NextSteps />
        </div>
      </div>
    </div>
  );
};

export default Proposal;