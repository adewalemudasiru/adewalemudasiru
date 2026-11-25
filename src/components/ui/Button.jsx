import { twMerge } from "tailwind-merge";

export const Button = ({ className = "", type = "button", ...props }) => (
  <button
    type={type}
    className={twMerge(
      "inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-3 font-medium text-accent-fg transition-[opacity,transform] hover:opacity-90 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-60",
      className,
    )}
    {...props}
  />
);
