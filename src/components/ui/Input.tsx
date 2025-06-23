import clsx from "clsx";
import { type InputHTMLAttributes } from "react";
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  required?: boolean;
  helperText?: string;
  error?: boolean;
  errorMessage?: string;
}

export const Input = ({
  label,
  required,
  helperText,
  error,
  errorMessage,
  onChange,
  ...props
}: InputProps) => {
  return (
    <div className="relative">
      <label
        className={`text-neutral-800 dark:text-neutral-200 block text-sm font-bold mb-1 ${props.className}`}
      >
        {label}:
        {!required && <span className="text-neutral-500">(Opcional)</span>}
      </label>
      <input
        {...props}
        onChange={onChange}
        className={clsx(
          "rounded p-2 outline-none border text-sm shadow w-full",
          error
            ? "border-red-500 focus:ring-red-500 focus:border-red-500"
            : "border-neutral-500 dark:border-cyan-500 focus:ring-blue-500 focus:border-blue-500",
          props.className
        )}
      />
      {error && (
        <p className="text-sm mt-1 text-red-500">
          {errorMessage || helperText}
        </p>
      )}
    </div>
  );
};
