"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import { toast } from "react-hot-toast";
import Spinner from "../../Spinner"; // Import Spinner component

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false); // State for loading
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true); // Start loading

    const result = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });

    setLoading(false); // Stop loading

    if (result?.error) {
      toast.error("Login failed. Please check your credentials and try again.");
    } else {
      toast.success("Login successful!");
      router.push("/dashboard");
    }
  };

  return (
    <div className="flex flex-col w-full items-center justify-center">
      <div className="bg-white text-black p-8 rounded-lg shadow-md w-full max-w-md">
        <div className="mb-8 text-center flex flex-col">
          <div className="font-bold text-xl">Welcome Back</div>
          <div className="text-sm">
            We&rsquo;re so excited to see you again!
          </div>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              type="text"
              id="email"
              placeholder="Enter your username or email"
              className="w-full px-4 py-3 bg-slate-100 border text-xs rounded-sm focus:outline-none focus:ring focus:ring-neutral-400"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              className="w-full px-6 py-3 border bg-slate-100 text-xs rounded-sm focus:outline-none focus:ring focus:ring-neutral-400"
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
            {loading ? <Spinner /> : "Sign In"}
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
