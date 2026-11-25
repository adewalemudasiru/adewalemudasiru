import { twMerge } from "tailwind-merge";
import { fieldClass } from "./Input";

export const TextArea = ({ className, value = "", maxLength = 1000, ...props }) => (
  <div>
    <textarea
      value={value}
      maxLength={maxLength}
      className={twMerge(fieldClass, "resize-y", className)}
      {...props}
    />
    <p className="mt-1 text-right font-mono text-xs text-muted" aria-live="off">
      {value.length}/{maxLength}
    </p>
  </div>
);
