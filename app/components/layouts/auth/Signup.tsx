"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import Select from "react-select";
import "react-phone-number-input/style.css";

const countryOptions = [
  { value: "+1", label: "+1 (USA)" },
  { value: "+44", label: "+44 (UK)" },
  { value: "+62", label: "+62 (Indonesia)" },
];

const Signup = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [selectedCountryCode, setSelectedCountryCode] = useState("+62"); // Default to +62 (Indonesia)
  const router = useRouter();

  const handlePhoneChange = (value: string) => {
    setPhoneNumber(value);
  };

  return (
    <div className="flex flex-col w-full items-center justify-center min-h-screen">
      <div className="bg-white p-8 rounded-lg shadow-md md:w-full max-w-xl">
        <div className="mb-8 text-center flex flex-col">
          <div className="font-bold text-xl">Welcome to Fowardin</div>
          <div className="text-sm">
            Revolutionize your communication journey with Fowardin today
          </div>
        </div>
        <form>
          <div className="mb-4">
            <input
              type="text"
              id="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 border text-xs rounded-sm focus:outline-none focus:ring focus:ring-neutral-400"
            />
          </div>

          <div className="mb-4">
            <input
              type="text"
              id="username"
              placeholder="Enter your username"
              className="w-full px-4 py-3 border text-xs rounded-sm focus:outline-none focus:ring focus:ring-neutral-400"
            />
          </div>

          <div className="mb-4 flex flex-row gap-2 items-center">
            <Select
              options={countryOptions}
              value={countryOptions.find(
                (option) => option.value === selectedCountryCode
              )}
              onChange={(selectedOption) =>
                setSelectedCountryCode(selectedOption?.value || "+62")
              }
              className="flex-1 text-xs"
              classNamePrefix="react-select"
              placeholder="Select country code"
            />
            <input
              type="text"
              id="phone-number"
              placeholder="Enter your phone number"
              className="flex-1 px-4 py-3 border text-xs rounded-sm focus:outline-none focus:ring focus:ring-neutral-400"
              value={phoneNumber}
              onChange={(e) => handlePhoneChange(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              className="w-full px-4 py-3 border text-xs rounded-sm focus:outline-none focus:ring focus:ring-neutral-400"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-12 rounded-sm hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
          >
            Sign Up
          </button>
        </form>
        <div className="mt-6 items-center flex-row flex justify-center">
          <div className="text-sm flex gap-1 text-center">
            Sudah punya akun?{" "}
            <div
              onClick={() => router.push("/signIn")}
              className="text-blue-500 cursor-pointer hover:underline"
            >
              Masuk di sini
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
