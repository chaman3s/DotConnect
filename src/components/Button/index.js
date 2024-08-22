import React from "react";
import PropTypes from "prop-types";

const shapes = {
  round: "rounded-[12px]",
};

const variants = {
  fill: {
    gray_900: "bg-gray-900 text-white-a700",
  },
};

const sizes = {
  xs: "h-[52px] px-[34px] text-[12px]",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant = "fill",
  size = "xs",
  color = "gray_900",
  ...restProps
}) => {
  return (
    <button
      className={`${shapes[shape]} ${variants[variant][color]} ${sizes[size]} ${className}`}
      {...restProps}
    >
      {leftIcon && <span className="mr-2">{leftIcon}</span>}
      {children}
      {rightIcon && <span className="ml-2">{rightIcon}</span>}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
  shape: PropTypes.oneOf(["round"]),
  variant: PropTypes.oneOf(["fill"]),
  size: PropTypes.oneOf(["xs"]),
  color: PropTypes.oneOf(["gray_900"]),
};
export {Button};