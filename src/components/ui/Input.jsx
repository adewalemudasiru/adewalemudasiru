import { twMerge } from "tailwind-merge";

export const fieldClass =
  "w-full rounded-md border border-line bg-surface px-4 py-3 text-fg placeholder:text-muted transition-colors hover:border-muted focus:border-accent focus:outline-none focus-visible:outline-2 focus-visible:outline-accent aria-[invalid=true]:border-red-600";

export const Input = ({ className, ...props }) => (
  <input className={twMerge(fieldClass, className)} {...props} />
);
