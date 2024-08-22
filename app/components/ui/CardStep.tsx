import React from "react";
import Image from "next/image";

interface CardStepProps {
  title: string;
  subtitle: string;
  imageUrl: string;
  altText: string;
  buttonLabels: string[];
}

const CardStep: React.FC<CardStepProps> = ({
  title,
  subtitle,
  imageUrl,
  altText,
  buttonLabels,
}) => {
  return (
    <div className="flex flex-col items-center justify-center mt-12">
      <h1 className="text-2xl md:text-3xl text-[#3366FF] font-bold mb-4 text-center px-6 md:px-48">
        &quot;{title}&quot;
      </h1>
      <div className="flex flex-col md:flex-row items-center justify-center gap-6">
        {/* Image */}
        <div className="flex justify-center order-1 md:order-1">
          <Image
            src={imageUrl}
            alt={altText}
            width={300}
            height={300}
            className="rounded-md"
          />
        </div>

        {/* Content with buttons */}
        <div className="flex flex-col md:w-1/2 p-8 md:p-6 order-2 md:order-2">
          <div className="flex flex-col gap-4 mb-6 w-full">
            <div className="flex flex-col md:flex-row gap-4 mb-6 w-full">
              {buttonLabels.map((label, index) => (
                <button
                  key={index}
                  className={`px-4 py-2 ${
                    index === 0
                      ? "bg-blue-600 text-white"
                      : "border border-blue-600 text-blue-600"
                  } rounded-lg flex items-center text-xs justify-center w-full`}
                >
                  {label}
                </button>
              ))}
            </div>
            <p className="text-sm md:text-md">{subtitle}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardStep;
