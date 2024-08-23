"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        // Save the token in localStorage
        localStorage.setItem("authToken", data.token);

        // Save the token in a cookie
        document.cookie = `authToken=${data.token}; path=/; Secure; SameSite=Strict`;

        toast.success("Login successful!");

        // Redirect to the dashboard with the user ID
        router.push(`/dashboard/${data.user.id}`);
      } else {
        toast.error(data.error || "Login failed!");
      }
    } catch (error) {
      toast.error("Error during login!");
      console.error("Error during login:", error);
    }
  };

  return (
    <div className="flex flex-col w-full items-center justify-center ">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <div className="mb-8 text-center flex flex-col">
          <div className="font-bold text-xl">Welcome Back</div>
          <div className="text-sm">We’re so excited to see you again!</div>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              type="text"
              id="email"
              placeholder="Enter your username or email"
              className="w-full px-4 py-3 border text-xs rounded-sm focus:outline-none focus:ring focus:ring-neutral-400"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="mb-2">
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              className="w-full px-6 py-3 border text-xs rounded-sm focus:outline-none focus:ring focus:ring-neutral-400"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
