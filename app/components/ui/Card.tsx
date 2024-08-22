"use client";
import React from "react";
import Image from "next/image";
import { IoArrowForward } from "react-icons/io5";

interface CardProps {
  title: string;
  subtitle: string;
  buttonLabel?: string;
  onButtonClick?: () => void;
  imageUrl: string;
  altText: string;
  reverseLayout?: boolean;
}

const Card: React.FC<CardProps> = ({
  title,
  subtitle,
  buttonLabel,
  onButtonClick,
  imageUrl,
  altText,
  reverseLayout = true,
}) => {
  return (
    <div
      className={`flex flex-col ${
        reverseLayout ? "md:flex-row-reverse" : "md:flex-row"
      } items-center md:ml-24 ml-0 mt-12 justify-between px-6 md:px-48`}
    >
      {/* Image */}
      <div className="flex justify-center w-full md:w-1/2 mb-6 md:mb-0">
        <Image
          src={imageUrl}
          alt={altText}
          width={500}
          height={700}
          className="rounded-md"
        />
      </div>

      {/* Content with title, subtitle, and button */}
      <div className="flex flex-col justify-center w-full md:w-1/2 p-8 md:p-6">
        <h1 className="text-xl md:text-3xl font-bold mb-4">{title}</h1>
        <p className="text-sm md:text-md mb-6">{subtitle}</p>
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
    </div>
  );
};

export default Card;
