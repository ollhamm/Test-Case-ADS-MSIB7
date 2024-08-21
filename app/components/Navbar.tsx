"use client";
import React, { useState } from "react";
import Image from "next/image";
import { IoMdMenu, IoMdClose } from "react-icons/io";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="w-full md:w-6/12 fixed top-0 left-0 mt-0 md:mt-4 right-0 mx-auto flex flex-row items-center justify-between p-4 px-8 bg-white shadow-md z-50">
      <div className="flex cursor-pointer flex-row items-center text-xs md:text-xl">
        <Image
          src={"/images/logo-ads.png"}
          height={50}
          width={100}
          alt="logo-ads"
        />
      </div>

      {/* Hamburger Icon */}
      <div className="md:hidden flex items-center">
        <button onClick={toggleMenu}>
          {isOpen ? <IoMdClose size={24} /> : <IoMdMenu size={24} />}
        </button>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex flex-1 items-center justify-center font-semibold gap-6">
        <div className="flex flex-row gap-6">
          <div>Features</div>
          <div>Pricing</div>
          <div>Demo</div>
          <div>Blog</div>
        </div>
      </div>

      {/* SignIn Button */}
      <div className="hidden md:flex items-center">
        <button className="rounded-md bg-[#3366FF] text-white px-4 py-2">
          SignIn
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-x-0 top-0 bottom-0 bg-white p-6 transform ${
          isOpen ? "translate-y-0" : "-translate-y-full"
        } transition-transform duration-300 ease-in-out md:hidden h-2/4`}
      >
        <div className="flex flex-col gap-4">
          <div className="text-right">
            <button onClick={toggleMenu}>
              <IoMdClose size={24} />
            </button>
          </div>
          <div className="flex flex-col gap-4 font-semibold">
            <div>Features</div>
            <div>Pricing</div>
            <div>Demo</div>
            <div>Blog</div>
            <div className="relative flex items-center">
              <button className="rounded-md bg-[#3366FF] text-white px-4 py-2">
                SignIn
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
