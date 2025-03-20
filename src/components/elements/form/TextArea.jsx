import { twMerge } from "tailwind-merge";
const TextArea = ({ value, onChange, placeholder, className, ...props }) => {
  return (
    <textarea
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={twMerge(
        "w-full outline-none border border-gray-300 px-4 py-3 rounded-md",
        className
      )}
      {...props}
    />
  );
};

export default TextArea;
