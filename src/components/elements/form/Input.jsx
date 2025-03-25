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
        "w-full outline-none text-textSecondary bg-cardBackground border border-borderLight focus:border-teal-500 px-4 py-3 rounded-xl",
        className
      )}
      {...props}
    />
  );
};

export default Input;
