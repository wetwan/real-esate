/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import { IconType } from "react-icons";
import { BiChevronRight } from "react-icons/bi";

type Props = {
  text?: string;
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  arrow?: IconType;
};

const Button: React.FC<Props> = ({
  text,
  className,
  onClick,
  disabled,
  arrow,
}) => {
  return (
    <button
      className={`cursor-pointer flex items-center ${className} block ${
        disabled ? "opacity-50 cursor-not-allowed" : ""
      }`}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
      {arrow && (
        <span className="ml-2 text-white text-2xl">
          {React.createElement(arrow)}
        </span>
      )}
    </button>
  );
};

export default Button;
