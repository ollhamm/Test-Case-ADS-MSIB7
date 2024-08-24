"use client";
import React from "react";
import Image from "next/image";
import Signup from "../components/layouts/auth/Signup";

const Page = () => {
  return (
    <div className="flex flex-row items-stretch md:-mt-44 -mt-10 justify-center bg-white md:bg-[#ECF2FA] min-h-screen p-2 md:p-48">
      <div className="hidden md:flex flex-col items-center justify-center w-full md:w-2/4 text-left p-4 md:p-8">
        <Image
          src="/images/login.png"
          alt="Login Image"
          width={400}
          height={400}
        />
        <div className="text-md md:text-xl font-bold text-black mb-4 text-start mt-4">
          Elevate Your Messaging Efficiency with Our Innovative Admin Tools
        </div>
        <div className="text-sm md:text-xs text-gray-700 text-start mt-2">
          Selamat datang di Fowardin! Pengelolaan pesan Anda menjadi lebih mudah
          dengan Admin Tools kami. Tingkatkan komunikasi Anda dan pelanggan
          dengan fitur pesan otomatis. Menyimpan kontak menjadi lebih praktis
          dengan fitur sinkronasi Google Concact. Dapatkan kendali penuh pesan
          dengan manajemen konten yang praktis.
        </div>
      </div>

      {/* Bagian Kanan: Form Login */}
      <div className="w-full md:w-2/4 flex items-center justify-center p-4 md:p-8">
        <Signup />
      </div>
    </div>
  );
};

export default Page;
