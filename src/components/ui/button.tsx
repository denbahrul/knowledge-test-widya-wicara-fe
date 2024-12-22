import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  buttonName: string;
}

export default function Button({ buttonName, ...props }: ButtonProps) {
  return (
    <button
      type="submit"
      className="mt-4 rounded-xl bg-blueB px-6 py-3 text-white"
      {...props}
    >
      {buttonName}
    </button>
  );
}
