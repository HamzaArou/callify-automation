import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

interface FormFieldProps {
  id: string;
  label: string;
  required?: boolean;
  type?: string;
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
}

const FormField = ({ 
  id, 
  label, 
  required = false, 
  type = "text", 
  placeholder, 
  value, 
  onChange 
}: FormFieldProps) => {
  return (
    <div className="space-y-2">
      <Label htmlFor={id}>
        {label} {required && <span className="text-red-500">*</span>}
      </Label>
      <Input
        id={id}
        type={type}
        placeholder={placeholder}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="bg-white border-gray-200 focus:border-[#6B47DC] focus:ring-[#6B47DC]"
      />
    </div>
  );
};

export default FormField;