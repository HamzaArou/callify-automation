import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface Option {
  value: string;
  label: string;
}

interface SelectFieldProps {
  id: string;
  label: string;
  required?: boolean;
  placeholder?: string;
  options: Option[];
  value: string;
  onChange: (value: string) => void;
}

const SelectField = ({
  id,
  label,
  required = false,
  placeholder,
  options,
  value,
  onChange
}: SelectFieldProps) => {
  return (
    <div className="space-y-2">
      <Label htmlFor={id}>
        {label} {required && <span className="text-red-500">*</span>}
      </Label>
      <Select required={required} value={value} onValueChange={onChange}>
        <SelectTrigger id={id} className="bg-white border-gray-200">
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>
          {options.map((option) => (
            <SelectItem key={option.value} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default SelectField;