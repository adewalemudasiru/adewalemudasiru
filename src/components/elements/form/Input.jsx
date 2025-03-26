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

const Input = ({
  type = "text",
  value,
  onChange,
  placeholder,
  className,
  ...props
}) => {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={twMerge(
        "w-full outline-none text-textSecondary bg-cardBackground border border-borderLight focus:border-teal-500 px-4 py-3 rounded-xl",
        className
      )}
      {...props}
    />
  );
};

export default Input;
