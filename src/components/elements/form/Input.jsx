import { twMerge } from "tailwind-merge";
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
        "w-full outline-none border border-gray-300 px-4 py-2 rounded-md",
        className
      )}
      {...props}
    />
  );
};

export default Input;
