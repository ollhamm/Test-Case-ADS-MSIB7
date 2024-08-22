"use client";
import React from "react";
import { IoArrowForward } from "react-icons/io5";

interface ButtonProps {
  buttonLabel?: string;
  onButtonClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ buttonLabel, onButtonClick }) => {
  return (
    <div>
      {buttonLabel && (
        <button
          className="px-6 py-2 w-4/6 md:w-1/2 md:text-md text-xs bg-[#000000] text-white rounded-md border justify-between flex items-center gap-2"
          onClick={onButtonClick}
        >
          {buttonLabel}
          <div className="flex items-center justify-center h-full">
            <IoArrowForward />
          </div>
        </button>
      )}
    </div>
  );
};

export default Button;
