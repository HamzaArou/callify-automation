import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useLocation } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const ProposalForm = () => {
  const location = useLocation();
  const initialPhoneNumber = location.state?.phoneNumber || "";
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    name: "",
    company: "",
    industry: "",
    email: "",
    phone: initialPhoneNumber,
    website: "",
    useCase: "",
    timing: "",
    crm: "",
    twilio: "",
    compliance: "",
    callOutcome: "",
    analytics: "",
    timeline: "",
    comments: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic here
    console.log("Form submitted:", formData);
    
    toast({
      title: "Success!",
      description: "We'll be in touch soon!",
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="name">Name <span className="text-red-500">*</span></Label>
          <Input
            id="name"
            placeholder="John Doe"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="company">Company <span className="text-red-500">*</span></Label>
          <Input
            id="company"
            placeholder="Example Inc."
            required
            value={formData.company}
            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="industry">Industry <span className="text-red-500">*</span></Label>
        <Select required onValueChange={(value) => setFormData({ ...formData, industry: value })}>
          <SelectTrigger>
            <SelectValue placeholder="Select your industry" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="healthcare">Healthcare</SelectItem>
            <SelectItem value="financial">Financial Services</SelectItem>
            <SelectItem value="retail">Retail/E-commerce</SelectItem>
            <SelectItem value="hospitality">Hospitality & Travel</SelectItem>
            <SelectItem value="utilities">Utilities & Telecom</SelectItem>
            <SelectItem value="government">Government/Public Services</SelectItem>
            <SelectItem value="professional">Professional Services (Law, Accounting, Consulting)</SelectItem>
            <SelectItem value="education">Education</SelectItem>
            <SelectItem value="other">Other</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="email">Email <span className="text-red-500">*</span></Label>
          <Input
            id="email"
            type="email"
            placeholder="johndoe@example.com"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="phone">Phone Number <span className="text-red-500">*</span></Label>
          <PhoneInput
            country={"us"}
            value={formData.phone}
            onChange={(phone) => setFormData({ ...formData, phone })}
            inputStyle={{
              width: "100%",
              height: "40px",
              fontSize: "16px"
            }}
            inputProps={{
              required: true,
              placeholder: "(000) 000-0000"
            }}
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="website">Website <span className="text-red-500">*</span></Label>
        <Input
          id="website"
          placeholder="www.example.com"
          required
          value={formData.website}
          onChange={(e) => setFormData({ ...formData, website: e.target.value })}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="useCase">Primary Outbound Use Case <span className="text-red-500">*</span></Label>
        <Select required onValueChange={(value) => setFormData({ ...formData, useCase: value })}>
          <SelectTrigger>
            <SelectValue placeholder="Select primary use case" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="appointments">Appointment Reminders</SelectItem>
            <SelectItem value="payments">Payment/Invoice Follow-Ups</SelectItem>
            <SelectItem value="policy">Policy Renewal or Loan Follow-Ups</SelectItem>
            <SelectItem value="cart">Abandoned Cart / Promotional Offers</SelectItem>
            <SelectItem value="reservations">Reservation/Travel Confirmations</SelectItem>
            <SelectItem value="events">Event/Enrollment Follow-Ups</SelectItem>
            <SelectItem value="other">Other</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="timing">Preferred Call Timing / Time Zone <span className="text-red-500">*</span></Label>
        <Select required onValueChange={(value) => setFormData({ ...formData, timing: value })}>
          <SelectTrigger>
            <SelectValue placeholder="Select preferred timing" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="morning">Morning (9 am–12 pm)</SelectItem>
            <SelectItem value="afternoon">Afternoon (12 pm–5 pm)</SelectItem>
            <SelectItem value="evening">Evening (5 pm–9 pm)</SelectItem>
            <SelectItem value="weekends">Weekends</SelectItem>
            <SelectItem value="24-7">24/7 Coverage</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="crm">Current Data Source / CRM <span className="text-red-500">*</span></Label>
        <Select required onValueChange={(value) => setFormData({ ...formData, crm: value })}>
          <SelectTrigger>
            <SelectValue placeholder="Select your CRM" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="salesforce">Salesforce</SelectItem>
            <SelectItem value="hubspot">HubSpot</SelectItem>
            <SelectItem value="sheets">Google Sheets</SelectItem>
            <SelectItem value="none">None / Custom</SelectItem>
            <SelectItem value="other">Other</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label>Do you have a twilio account? <span className="text-red-500">*</span></Label>
        <RadioGroup required onValueChange={(value) => setFormData({ ...formData, twilio: value })}>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="yes" id="twilio-yes" />
            <Label htmlFor="twilio-yes">Yes</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="no" id="twilio-no" />
            <Label htmlFor="twilio-no">No</Label>
          </div>
        </RadioGroup>
      </div>

      <div className="space-y-2">
        <Label htmlFor="compliance">Compliance Requirements <span className="text-red-500">*</span></Label>
        <Select required onValueChange={(value) => setFormData({ ...formData, compliance: value })}>
          <SelectTrigger>
            <SelectValue placeholder="Select compliance requirements" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="hipaa">HIPAA</SelectItem>
            <SelectItem value="pci">PCI-DSS</SelectItem>
            <SelectItem value="gdpr">GDPR</SelectItem>
            <SelectItem value="none">None</SelectItem>
            <SelectItem value="other">Other</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="timeline">Demo & Launch Timeline <span className="text-red-500">*</span></Label>
        <Select required onValueChange={(value) => setFormData({ ...formData, timeline: value })}>
          <SelectTrigger>
            <SelectValue placeholder="Select preferred timeline" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="asap">ASAP (Within 1 Week)</SelectItem>
            <SelectItem value="2-4-weeks">Within 2–4 Weeks</SelectItem>
            <SelectItem value="1-2-months">1–2 Months</SelectItem>
            <SelectItem value="no-rush">No Rush</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="comments">Comments or Questions</Label>
        <Textarea
          id="comments"
          placeholder="Tell us about your specific needs or any questions you have..."
          value={formData.comments}
          onChange={(e) => setFormData({ ...formData, comments: e.target.value })}
          className="min-h-[100px]"
        />
      </div>

      <Button
        type="submit"
        className="w-full bg-purple-600 hover:bg-purple-700 text-white font-medium text-lg h-12"
      >
        Get My Custom AI Proposal
      </Button>
    </form>
  );
};

export default ProposalForm;
