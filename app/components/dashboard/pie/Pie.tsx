import React from "react";

const Pie = () => {
  return (
    <div className="flex justify-center items-center h-auto">
      <svg
        width="150"
        height="150"
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
        className="rotate-180"
      >
        <circle
          cx="50"
          cy="50"
          r="40"
          stroke="transparent"
          strokeWidth="20"
          fill="none"
          strokeDasharray="251.2"
          strokeDashoffset="0"
        />
        <circle
          cx="50"
          cy="50"
          r="40"
          stroke="blue"
          strokeWidth="20"
          fill="none"
          strokeDasharray="251.2"
          strokeDashoffset="0"
          style={{ strokeDashoffset: "0", strokeDasharray: "125.6 251.2" }}
        />
        <circle
          cx="50"
          cy="50"
          r="40"
          stroke="green"
          strokeWidth="20"
          fill="none"
          strokeDasharray="251.2"
          style={{
            strokeDashoffset: "-125.6",
            strokeDasharray: "75.36 251.2",
          }}
        />
        <circle
          cx="50"
          cy="50"
          r="40"
          stroke="white"
          strokeWidth="20"
          fill="none"
          strokeDasharray="251.2"
          style={{
            strokeDashoffset: "-201.96",
            strokeDasharray: "50.24 251.2",
          }}
        />
      </svg>
    </div>
  );
};

export default Pie;
