"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import Select from "react-select";
import "react-phone-number-input/style.css";
import { toast } from "react-hot-toast";

const countryOptions = [
  { value: "+1", label: "+1 (USA)" },
  { value: "+44", label: "+44 (UK)" },
  { value: "+62", label: "+62 (Indonesia)" },
];

const Signup = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [selectedCountryCode, setSelectedCountryCode] = useState("+62");
  const router = useRouter();

  const handlePhoneChange = (value: string) => {
    setPhoneNumber(value);
  };

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!phoneNumber) {
      toast.error("Phone number is required");
      return;
    }

    const fullPhoneNumber = `${selectedCountryCode}${phoneNumber}`;

    const payload = {
      email,
      username,
      phone_number: fullPhoneNumber,
      password,
    };

    try {
      const response = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success("Registration successful!");
        router.push("/signIn");
      } else {
        toast.error(`Registration failed: ${data.error}`);
      }
    } catch (error) {
      console.error("Error saat mendaftar:", error);
      toast.error("An unexpected error occurred. Please try again.");
    }
  };

  return (
    <div className="flex flex-col w-full items-center justify-center min-h-screen">
      <div className="bg-white text-black p-8 rounded-lg shadow-md md:w-full max-w-xl">
        <div className="mb-8 text-center flex flex-col">
          <div className="font-bold text-xl">Welcome to Fowardin</div>
          <div className="text-sm">
            Revolutionize your communication journey with Fowardin today
          </div>
        </div>
        <form onSubmit={handleSignup}>
          <div className="mb-4">
            <input
              type="text"
              id="email"
              placeholder="Enter your email"
              className="w-full bg-slate-100 px-4 py-3 border text-xs rounded-sm focus:outline-none focus:ring focus:ring-neutral-400"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <input
              type="text"
              id="username"
              placeholder="Enter your username"
              className="w-full px-4 py-3 bg-slate-100 border text-xs rounded-sm focus:outline-none focus:ring focus:ring-neutral-400"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
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
              className="flex-1 bg-slate-100 text-xs"
              classNamePrefix="react-select"
              placeholder="Select country code"
            />
            <input
              type="text"
              id="phone_number"
              placeholder="Enter your phone number"
              className="flex-1 px-4 bg-slate-100 py-3 border text-xs rounded-sm focus:outline-none focus:ring focus:ring-neutral-400"
              value={phoneNumber}
              onChange={(e) => handlePhoneChange(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              className="w-full bg-slate-100 px-4 py-3 border text-xs rounded-sm focus:outline-none focus:ring focus:ring-neutral-400"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
