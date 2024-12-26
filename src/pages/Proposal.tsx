import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/components/ui/use-toast";
import { Search, ArrowRight, Rocket } from "lucide-react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const Proposal = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    website: "",
    company: "",
    phone: "",
    budget: "",
    comments: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.phone || !formData.company) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Please fill in all required fields",
      });
      return;
    }

    // Handle form submission
    toast({
      title: "Success!",
      description: "Your proposal request has been submitted. We'll be in touch soon!",
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      website: "",
      company: "",
      phone: "",
      budget: "",
      comments: ""
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column - Form */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h1 className="text-3xl font-bold mb-8">Request a FREE Proposal Now!</h1>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-sm font-medium">
                    Name <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="name"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="h-12"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="company" className="text-sm font-medium">
                    Company <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="company"
                    placeholder="Example"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="h-12"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="website" className="text-sm font-medium">
                    Website <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="website"
                    placeholder="www.example.com"
                    value={formData.website}
                    onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                    className="h-12"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-sm font-medium">
                    Phone Number <span className="text-red-500">*</span>
                  </Label>
                  <PhoneInput
                    country={"us"}
                    value={formData.phone}
                    onChange={(phone) => setFormData({ ...formData, phone })}
                    inputStyle={{
                      width: "100%",
                      height: "48px",
                      fontSize: "16px",
                      backgroundColor: "white"
                    }}
                    inputProps={{
                      placeholder: "(000) 000-0000"
                    }}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="budget" className="text-sm font-medium">
                  Project Budget <span className="text-red-500">*</span>
                </Label>
                <Select onValueChange={(value) => setFormData({ ...formData, budget: value })}>
                  <SelectTrigger className="h-12">
                    <SelectValue placeholder="Select project budget" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="5k-10k">$5,000 - $10,000</SelectItem>
                    <SelectItem value="10k-25k">$10,000 - $25,000</SelectItem>
                    <SelectItem value="25k-50k">$25,000 - $50,000</SelectItem>
                    <SelectItem value="50k+">$50,000+</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="comments" className="text-sm font-medium">
                  Comments or Questions
                </Label>
                <Textarea
                  id="comments"
                  placeholder="Tell us about your project..."
                  value={formData.comments}
                  onChange={(e) => setFormData({ ...formData, comments: e.target.value })}
                  className="min-h-[100px]"
                />
              </div>

              <Button
                type="submit"
                className="w-full h-12 bg-purple-600 hover:bg-purple-700 text-white font-medium text-lg"
              >
                Get My Custom Quote
              </Button>
            </form>
          </div>

          {/* Right Column - Next Steps */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-white mb-8">Here's what will happen next:</h2>

            <div className="space-y-6">
              <div className="bg-blue-900 rounded-xl p-6 text-white">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-800/50 p-3 rounded-lg">
                    <Search className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Get to know your business</h3>
                    <p className="text-blue-100">
                      From our first conversation, we begin researching your business, competitors, and industry. We'll audit your site to craft a fully customized proposal.
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
                    <h3 className="text-xl font-semibold mb-2">Put together your flight plan</h3>
                    <p className="text-blue-100">
                      Based on their research, your strategist will compile personalized recommendations for how your business can drive more revenue.
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
                    <h3 className="text-xl font-semibold mb-2">Prepare for takeoff</h3>
                    <p className="text-blue-100">
                      Your flight plan will include pricing, timelines, a detailed view of what a partnership would look like, and how we'll help your business grow.
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
        </div>
      </div>
    </div>
  );
};

export default Proposal;