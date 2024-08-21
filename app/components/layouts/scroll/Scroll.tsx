"use client";
import React from "react";

const Scroll: React.FC = () => {
  return (
    <div className="flex">
      <div className="w-1/4 border-l border-gray-300 p-4">
        <div className="flex flex-col gap-4">
          <div className="text-xl font-semibold">Sections</div>
          <a href="#section-1" className="hover:text-blue-500">
            Section 1
          </a>
          <a href="#section-2" className="hover:text-blue-500">
            Section 2
          </a>
          <a href="#section-3" className="hover:text-blue-500">
            Section 3
          </a>
          <a href="#section-4" className="hover:text-blue-500">
            Section 4
          </a>
          <a href="#section-5" className="hover:text-blue-500">
            Section 5
          </a>
          <a href="#section-6" className="hover:text-blue-500">
            Section 6
          </a>
          <a href="#section-7" className="hover:text-blue-500">
            Section 7
          </a>
        </div>
      </div>
    </div>
  );
};

export default Scroll;
