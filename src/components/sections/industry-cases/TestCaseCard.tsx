import { Button } from "@/components/ui/button";
import { TestCase } from "@/types/industry-cases";

interface TestCaseCardProps {
  testCase: TestCase;
}

export const TestCaseCard = ({ testCase }: TestCaseCardProps) => {
  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-colors">
      <h4 className="text-lg font-semibold mb-3">{testCase.title}</h4>
      <p className="text-gray-300 text-sm mb-4">{testCase.description}</p>
      <Button
        variant="secondary"
        className="w-full bg-white text-gray-900 hover:bg-gray-100"
      >
        Launch Quick Test
      </Button>
    </div>
  );
};