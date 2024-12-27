import { useState } from "react";
import { useLocation } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import FormField from "./form/FormField";
import SelectField from "./form/SelectField";

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
    timeline: "",
    comments: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    
    toast({
      title: "Success!",
      description: "We'll be in touch soon!",
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FormField
          id="name"
          label="Name"
          required
          placeholder="John Doe"
          value={formData.name}
          onChange={(value) => setFormData({ ...formData, name: value })}
        />

        <FormField
          id="company"
          label="Company"
          required
          placeholder="Example Inc."
          value={formData.company}
          onChange={(value) => setFormData({ ...formData, company: value })}
        />
      </div>

      <SelectField
        id="industry"
        label="Industry"
        required
        placeholder="Select your industry"
        value={formData.industry}
        onChange={(value) => setFormData({ ...formData, industry: value })}
        options={[
          { value: "healthcare", label: "Healthcare" },
          { value: "financial", label: "Financial Services" },
          { value: "retail", label: "Retail/E-commerce" },
          { value: "hospitality", label: "Hospitality & Travel" },
          { value: "utilities", label: "Utilities & Telecom" },
          { value: "government", label: "Government/Public Services" },
          { value: "professional", label: "Professional Services" },
          { value: "education", label: "Education" },
          { value: "other", label: "Other" }
        ]}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FormField
          id="email"
          label="Email"
          type="email"
          required
          placeholder="johndoe@example.com"
          value={formData.email}
          onChange={(value) => setFormData({ ...formData, email: value })}
        />

        <div className="space-y-2">
          <Label htmlFor="phone">Phone Number <span className="text-red-500">*</span></Label>
          <PhoneInput
            country={"us"}
            value={formData.phone}
            onChange={(phone) => setFormData({ ...formData, phone })}
            inputProps={{
              required: true,
              placeholder: "(000) 000-0000"
            }}
          />
        </div>
      </div>

      <FormField
        id="website"
        label="Website"
        required
        placeholder="www.example.com"
        value={formData.website}
        onChange={(value) => setFormData({ ...formData, website: value })}
      />

      <SelectField
        id="useCase"
        label="Primary Outbound Use Case"
        required
        placeholder="Select primary use case"
        value={formData.useCase}
        onChange={(value) => setFormData({ ...formData, useCase: value })}
        options={[
          { value: "appointments", label: "Appointment Reminders" },
          { value: "payments", label: "Payment/Invoice Follow-Ups" },
          { value: "policy", label: "Policy Renewal or Loan Follow-Ups" },
          { value: "cart", label: "Abandoned Cart / Promotional Offers" },
          { value: "reservations", label: "Reservation/Travel Confirmations" },
          { value: "events", label: "Event/Enrollment Follow-Ups" },
          { value: "other", label: "Other" }
        ]}
      />

      <SelectField
        id="timing"
        label="Preferred Call Timing / Time Zone"
        required
        placeholder="Select preferred timing"
        value={formData.timing}
        onChange={(value) => setFormData({ ...formData, timing: value })}
        options={[
          { value: "morning", label: "Morning (9 am–12 pm)" },
          { value: "afternoon", label: "Afternoon (12 pm–5 pm)" },
          { value: "evening", label: "Evening (5 pm–9 pm)" },
          { value: "weekends", label: "Weekends" },
          { value: "24-7", label: "24/7 Coverage" }
        ]}
      />

      <SelectField
        id="crm"
        label="Current Data Source / CRM"
        required
        placeholder="Select your CRM"
        value={formData.crm}
        onChange={(value) => setFormData({ ...formData, crm: value })}
        options={[
          { value: "salesforce", label: "Salesforce" },
          { value: "hubspot", label: "HubSpot" },
          { value: "sheets", label: "Google Sheets" },
          { value: "none", label: "None / Custom" },
          { value: "other", label: "Other" }
        ]}
      />

      <div className="space-y-2">
        <Label>Twilio Account <span className="text-red-500">*</span></Label>
        <RadioGroup required value={formData.twilio} onValueChange={(value) => setFormData({ ...formData, twilio: value })}>
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

      <SelectField
        id="compliance"
        label="Compliance Requirements"
        required
        placeholder="Select compliance requirements"
        value={formData.compliance}
        onChange={(value) => setFormData({ ...formData, compliance: value })}
        options={[
          { value: "hipaa", label: "HIPAA" },
          { value: "pci", label: "PCI-DSS" },
          { value: "gdpr", label: "GDPR" },
          { value: "none", label: "None" },
          { value: "other", label: "Other" }
        ]}
      />

      <SelectField
        id="timeline"
        label="Demo & Launch Timeline"
        required
        placeholder="Select preferred timeline"
        value={formData.timeline}
        onChange={(value) => setFormData({ ...formData, timeline: value })}
        options={[
          { value: "asap", label: "ASAP (Within 1 Week)" },
          { value: "2-4-weeks", label: "Within 2–4 Weeks" },
          { value: "1-2-months", label: "1–2 Months" },
          { value: "no-rush", label: "No Rush" }
        ]}
      />

      <div className="space-y-2">
        <Label htmlFor="comments">Comments or Questions</Label>
        <Textarea
          id="comments"
          placeholder="Tell us about your specific needs or any questions you have..."
          value={formData.comments}
          onChange={(e) => setFormData({ ...formData, comments: e.target.value })}
          className="min-h-[100px] bg-white border-gray-200 focus:border-[#6B47DC] focus:ring-[#6B47DC]"
        />
      </div>

      <Button
        type="submit"
        className="w-full bg-[#6B47DC] hover:bg-[#5A3DBA] text-white font-medium text-lg h-12 rounded-lg transition-colors"
      >
        Get My Custom AI Proposal
      </Button>
    </form>
  );
};

export default ProposalForm;