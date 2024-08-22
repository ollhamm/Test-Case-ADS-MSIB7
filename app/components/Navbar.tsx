"use client";
import React, { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import { IoMdMenu, IoMdClose } from "react-icons/io";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [hideMenu, setHideMenu] = useState<boolean>(false);
  const pathname = usePathname();
  const router = useRouter();

  // Effect to determine if menu should be hidden and navbar should be full width
  useEffect(() => {
    if (pathname === "/signIn" || pathname === "/signup") {
      setHideMenu(true);
    } else {
      setHideMenu(false);
    }
  }, [pathname]);

  const toggleMenu = () => setIsOpen(!isOpen);

  // Determine navbar classes based on pathname
  const navbarClasses = `w-full ${
    pathname === "/signIn" || pathname === "/signup" ? "" : "md:w-6/12"
  } fixed top-0 left-0 ${
    pathname === "/signIn" || pathname === "/signup" ? "mt-0" : "md:mt-4"
  } right-0 mx-auto flex flex-row md:justify-between justify-between items-center p-4 px-8 bg-white shadow-md z-50`;

  return (
    <div className={navbarClasses}>
      <div
        onClick={() => router.push("/")}
        className="flex cursor-pointer flex-row items-center text-xs md:text-xl"
      >
        <Image
          src={"/images/logo-ads.png"}
          height={50}
          width={100}
          alt="logo-ads"
        />
      </div>

      {!hideMenu && (
        <>
          {/* Hamburger Icon */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu}>
              {isOpen ? <IoMdClose size={24} /> : <IoMdMenu size={24} />}
            </button>
          </div>

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
            <button
              onClick={() => router.push("/signIn")}
              className="rounded-md bg-[#3366FF] text-white px-4 py-2"
            >
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
              <div className="flex flex-col gap-4 items-center font-semibold">
                <div>Features</div>
                <div>Pricing</div>
                <div>Demo</div>
                <div>Blog</div>
                <div className="relative flex items-center">
                  <button
                    onClick={() => router.push("/signIn")}
                    className="rounded-md bg-[#3366FF] text-white w-full max-w-lg px-8 py-2"
                  >
                    SignIn
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Navbar;
