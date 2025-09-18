// import { div } from "motion/react-client";
import { twMerge } from "tailwind-merge";
/**
 * A customizable input component.
 *
 * @param {string} [type="text"] - The type of the input field.
 * @param {string} [value] - The value of the input field.
 * @param {function} [onChange] - A callback function that is called when the input value changes.
 * @param {string} [placeholder] - The placeholder text to display in the input field.
 * @param {string} [className] - An optional className to apply to the input field.
 * @param {object} [props] - Any other props to apply to the input field.
 */

export const Input = ({
  type = "text",
  value,
  onChange,
  placeholder,
  className,
  rightIcon,
  leftIcon,
  ...props
}) => {
  return (
    <div
      className={twMerge(
        "relative w-full flex items-center gap-2 outline-none text-textSecondary bg-cardBackground border border-borderLight focus:border-teal-500 px-4 py-3 rounded-xl",
        className
      )}
      {...props}
    >
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        onFocus={(e) => {
          e.target.placeholder = ""; // Clear the placeholder on focus
        }}
        onBlur={(e) => {
          e.target.placeholder = placeholder; // Restore the placeholder on blur
        }}
        className="w-full bg-transparent outline-none pr-4"
      />
      {rightIcon && <div>{rightIcon}</div>}
    </div>
  );
};
