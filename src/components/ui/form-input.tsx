import { forwardRef, InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const FormInput = forwardRef<HTMLInputElement, InputProps>(
  ({ label, ...props }, ref) => {
    return (
      <div className="flex flex-col gap-1">
        <label>{label} *</label>
        <input ref={ref} {...props} className="rounded-xl bg-gray-200 p-3" />
      </div>
    );
  },
);

export default FormInput;
