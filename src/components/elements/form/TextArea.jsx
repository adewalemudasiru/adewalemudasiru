import { twMerge } from "tailwind-merge";
const TextArea = ({ value, onChange, placeholder, className, ...props }) => {
  return (
    <textarea
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

export default TextArea;
