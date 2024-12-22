import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  buttonName: string;
}

export default function Button({ buttonName, ...props }: ButtonProps) {
  return (
    <button
      type="submit"
      className="mt-4 w-full rounded-xl bg-blueB p-3 text-white"
      {...props}
    >
      {buttonName}
    </button>
  );
}
