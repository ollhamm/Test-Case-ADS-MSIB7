// Input.tsx
import React from "react";
import { IoSearch } from "react-icons/io5";

interface InputProps {
  placeholder?: string;
  iconSize?: number;
}

const Input: React.FC<InputProps> = ({
  placeholder = "Type here...",
  iconSize = 20,
}) => {
  return (
    <div className="flex items-center w-full max-w-lg bg-white border border-gray-300 rounded-lg">
      {" "}
      <input
        type="text"
        placeholder={placeholder}
        className="flex-1 p-2 outline-none bg-white rounded-l-lg"
      />
      <button className="p-2 flex items-center justify-center">
        <IoSearch size={iconSize} />
      </button>
    </div>
  );
};

export default Input;
