"use client";
import React from "react";

interface CardItem {
  icon: React.ReactNode;
  name: string;
}

interface CardPriceProps {
  title: string;
  subtitle: string;
  price: string;
  subPrice?: string;
  buttonLabel?: string;
  onButtonClick?: () => void;
  items?: CardItem[];
  buttonStyle?: string;
}

const CardPrice: React.FC<CardPriceProps> = ({
  title,
  subtitle,
  price,
  subPrice,
  buttonLabel,
  onButtonClick,
  buttonStyle = "bg-blue-500 hover:bg-blue-600",
  items = [],
}) => {
  return (
    <div className="flex flex-col items-center gap-3">
      <div className="flex flex-col text-start mb-8 gap-4 h-[100%] rounded-md shadow-lg p-6 max-w-md mx-auto bg-white">
        <h1 className="text-md font-bold">{title}</h1>
        <p className="text-xs font-semibold text-gray-600">{subtitle}</p>
        <div className="text-xl font-bold">{price}</div>
        {subPrice && <div className="text-xs text-gray-500">{subPrice}</div>}
        {buttonLabel && (
          <button
            className={`px-4 py-2 text-sm w-full text-white rounded-md flex items-center justify-center gap-2 ${buttonStyle}`}
            onClick={onButtonClick}
          >
            {buttonLabel}
          </button>
        )}
        {items.length > 0 && (
          <div className="flex flex-col gap-2 text-start mt-4">
            {items.map((item, index) => (
              <div key={index} className="flex items-center gap-2 mb-1">
                <div className="text-blue-600">{item.icon}</div>
                <div className="text-sm">{item.name}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CardPrice;
