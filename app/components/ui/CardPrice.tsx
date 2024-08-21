"use client";
import React from "react";
import {
  IoTimeSharp,
  IoTimerSharp,
  IoMailSharp,
  IoPhonePortraitSharp,
} from "react-icons/io5";
import { FaFileExcel, FaGoogle } from "react-icons/fa";

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
}

const CardPrice: React.FC<CardPriceProps> = ({
  title,
  subtitle,
  price,
  subPrice,
  buttonLabel,
  onButtonClick,
  items = [],
}) => {
  return (
    <div className="flex flex-col text-start border rounded-md shadow-lg p-4 max-w-sm mx-auto bg-white">
      <h1 className="text-lg font-bold mb-2">{title}</h1>

      <p className="text-sm text-gray-600 mb-4">{subtitle}</p>

      <div className="text-2xl font-semibold mb-1">{price}</div>

      {subPrice && <div className="text-sm text-gray-500 mb-4">{subPrice}</div>}

      {buttonLabel && (
        <button
          className="px-6 py-2 w-full bg-[#000000] text-white rounded-md flex items-center justify-center gap-2"
          onClick={onButtonClick}
        >
          {buttonLabel}
        </button>
      )}

      {/* Daftar item dengan ikon */}
      {items.length > 0 && (
        <div className="flex flex-col text-start mt-6">
          {items.map((item, index) => (
            <div key={index} className="flex items-center gap-3 mb-2">
              <div className="text-blue-600">{item.icon}</div>
              <div>{item.name}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CardPrice;
