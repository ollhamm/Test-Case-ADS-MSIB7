import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="w-full md:w-6/12 fixed top-0 left-0 mt-4 right-0 mx-auto flex flex-row items-center justify-between p-4 px-6 md:px-8 bg-transparent backdrop-blur-xl shadow-md z-50">
      <div className="flex cursor-pointer flex-row items-center text-xs md:text-xl">
        <Image
          src={"/images/logo-ads.png"}
          height={50}
          width={100}
          alt="logo-ads"
        />
      </div>
      <div className="flex flex-row items-center font-semibold gap-6">
        <div>Features</div>
        <div>Pricing</div>
        <div>Demo</div>
        <div>Blog</div>
      </div>
      <div className="relative flex items-center">
        <button className="rounded-md bg-[#3366FF] text-white px-4 py-2">
          SignIn
        </button>
      </div>
    </div>
  );
};

export default Navbar;
