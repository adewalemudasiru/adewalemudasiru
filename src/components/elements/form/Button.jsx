import React from "react";
import { twMerge } from "tailwind-merge";

const Button = ({
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
  const hoverEffect = () => {
    switch (isHover) {
      case "home":
        return "hover:ml-4";
      default:
        return "";
    }
  };

  return (
    <button
      onClick={onClick}
      className={twMerge(
        "bg-teal-500 inline-flex items-center justify-center py-3 px-6 rounded-full font-semibold cursor-pointer ",
        className
      )}
      {...props}
    >
      {startIcon && (
        <span className={`mr-2 ${startIconClassName}`}>{startIcon}</span>
      )}
      {children}
      {endIcon && (
        <span className={`ml-2 ${hoverEffect()} ${endIconClassName}`}>
          {endIcon}
        </span>
      )}
    </button>
  );
};

export default Button;
