import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  placeholder: string;
}

export default function FormInput({ label, ...props }: InputProps) {
  return (
    <div className="flex flex-col gap-1">
      <label>{label} *</label>
      <input {...props} className="bg-gray-200 rounded-xl p-3" />
    </div>
  );
}
