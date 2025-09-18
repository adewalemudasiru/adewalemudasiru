import { useState } from "react";
import { twMerge } from "tailwind-merge";
/**
 * A text area component that allows users to input a text value. It has a
 * max length of 1000 characters by default, and displays a character count
 * below the text area.
 *
 * @param {string} [value] - The initial value of the text area.
 * @param {function} [onChange] - A callback function that is called when the
 * value of the text area changes.
 * @param {string} [placeholder] - The placeholder text to display in the text
 * area.
 * @param {string} [className] - An optional className to apply to the text
 * area.
 * @param {number} [maxLength=1000] - The maximum number of characters that can
 * be entered into the text area.
 * @param {object} [props] - Any other props to apply to the text area.
 */
export const TextArea = ({
  value,
  onChange,
  placeholder,
  className,
  maxLength = 1000,
  ...props
}) => {
  const [characterCount, setCharacterCount] = useState(0);

  const handleChange = (event) => {
    onChange(event);
    setCharacterCount(event.target.value.length);
  };

  return (
    <div>
      <textarea
        value={value}
        onChange={handleChange}
        maxLength={maxLength}
        placeholder={placeholder}
        onFocus={(e) => {
          e.target.placeholder = ""; // Clear the placeholder on focus
        }}
        onBlur={(e) => {
          e.target.placeholder = placeholder; // Restore the placeholder on blur
        }}
        className={twMerge(
          "w-full outline-none text-textSecondary bg-cardBackground border border-borderLight focus:border-teal-500 px-4 py-3 rounded-xl resize-none",
          className
        )}
        {...props}
      />
      <p className="flex justify-end text-sm text-textPrimary mt-2">
        {characterCount}/{maxLength}
      </p>
    </div>
  );
};
