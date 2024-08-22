"use client";
import React from "react";
import { IconType } from "react-icons";

interface ResultProps {
  title: string;
  subtitle?: string;
  icon: IconType;
}

const Result: React.FC<ResultProps> = ({ title, subtitle, icon: Icon }) => {
  return (
    <div className="relative flex flex-col p-4 bg-white border border-gray-300 rounded-lg shadow-lg w-full max-w-lg">
      <div className="absolute top-4 right-4 text-3xl text-white bg-blue-500 p-1">
        <Icon size={16} />
      </div>
      <div className="text-xs md:text-md font-bold text-gray-800 mb-2">
        {title}
      </div>
      <div className="text-gray-600 text-xs">{subtitle}</div>
    </div>
  );
};

export default Result;
