import { twMerge } from "tailwind-merge";

export const Button = ({
  startIcon,
  endIcon,
  startIconClassName,
  endIconClassName,
  children,
  onClick,
  className = "",
  isHover = "default",
  ...props
}) => {
  return (
    <button
      onClick={onClick}
      className={twMerge(
        "bg-teal-500 inline-flex items-center justify-center py-3 px-6 rounded-full font-semibold cursor-pointer hover:rotate-2 hover:scale-105 transition ease-in-out duration-300",
        className
      )}
      {...props}
    >
      {startIcon && (
        <span className={`mr-2 ${startIconClassName}`}>{startIcon}</span>
      )}
      {children}
      {endIcon && <span className={`ml-2 ${endIconClassName}`}>{endIcon}</span>}
    </button>
  );
};
