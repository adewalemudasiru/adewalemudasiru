import React from "react";

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
      className={`flex items-center py-4 px-8 rounded-full transition-all ease-in-out duration-300 ${className}`}
      onClick={onClick}
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
