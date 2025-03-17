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
  ...props
}) => {
  return (
    <button
      onClick={onClick}
      className={twMerge(
        "bg-teal-500 text-white flex items-center justify-center py-2 px-4 rounded-full",
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

export default Button;
