"use client";
import { useRouter } from "next/navigation";
import React from "react";

const SignIn = () => {
  const router = useRouter();
  return (
    <div className="flex flex-col w-full items-center justify-center ">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <div className="mb-8 text-center flex flex-col">
          <div className="font-bold text-xl">Welcome Back</div>
          <div className="text-sm">We’re so excited to see you again!</div>
        </div>
        <form>
          <div className="mb-4">
            <input
              type="text"
              id="username"
              placeholder="Enter your username or email"
              className="w-full px-4 py-3 border text-xs rounded-sm focus:outline-none focus:ring focus:ring-neutral-400"
            />
          </div>

          <div className="mb-2">
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              className="w-full px-6 py-3 border text-xs rounded-sm focus:outline-none focus:ring focus:ring-neutral-400"
            />
          </div>

          <div className="text-start mb-6">
            <a href="#" className="text-xs text-blue-500 hover:underline">
              Lupa Password?
            </a>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-12 rounded-sm hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
          >
            Sign In
          </button>
        </form>
        <div className="mt-6 items-center flex-row flex justify-center">
          <div className="text-sm flex gap-1 text-center">
            Butuh buat akun?{" "}
            <div
              onClick={() => router.push("/signup")}
              className="text-blue-500 cursor-pointer hover:underline"
            >
              Daftar di sini
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
