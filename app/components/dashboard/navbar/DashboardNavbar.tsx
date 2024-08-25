"use client";
import React, { useState } from "react";
import { useSession, signOut } from "next-auth/react";
import { useTheme } from "next-themes";
import toast from "react-hot-toast";
import {
  FaBell,
  FaUserCircle,
  FaSun,
  FaMoon,
  FaChevronUp,
  FaChevronDown,
} from "react-icons/fa";
import { usePathname } from "next/navigation";

const DashboardNavbar = () => {
  const { data: session, status } = useSession();
  const { theme, setTheme } = useTheme();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  console.log("Session:", session);

  const pathname = usePathname();
  const isDashboardPage = pathname === "/dashboard";

  const handleLogout = async () => {
    try {
      await signOut({ redirect: false });
      toast.success("Anda telah logout.");
      window.location.href = "/signIn";
    } catch (error) {
      toast.error("Terjadi kesalahan saat logout.");
    }
  };

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
    toast.success(`Mode ${theme === "light" ? "Gelap" : "Terang"} diaktifkan.`);
  };

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  return (
    <div
      className={`p-4 flex items-center justify-between w-auto px-4 absolute top-0 left-[18%] right-0 z-20 ${
        isDashboardPage ? "dark:bg-[#1F1F21]" : "bg-[#F3F5F8]"
      } ${isDashboardPage ? "dark:text-white" : ""}`}
    >
      <div className="text-md font-bold">
        <div className="flex flex-row items-center gap-3">
          <div>Selamat datang,</div>
          <div>{session?.user?.name || "not logged in"}</div>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <div
          className={`p-1 rounded-full ${
            isDashboardPage ? "dark:bg-[#010103]" : "bg-white"
          }`}
        >
          <button
            className="p-2 rounded-full"
            onClick={() => toast("Belum ada notifikasi baru")}
          >
            <FaBell size={20} />
          </button>
        </div>

        <div className="relative">
          <div
            className={`flex rounded-3xl cursor-pointer items-center py-3 px-8 w-full text-left ${
              isDashboardPage ? "dark:bg-[#010103]" : "bg-[#F3F5F8]"
            }`}
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            <div className="text-blue-500">
              <FaUserCircle size={24} />
            </div>
            <span className="ml-2">
              {session?.user?.name || "not logged in"}
            </span>
            {isDropdownOpen ? (
              <FaChevronUp className="w-3 h-3 ml-2" />
            ) : (
              <FaChevronDown className="w-3 h-3 ml-2" />
            )}
          </div>

          {isDropdownOpen && (
            <div
              className={`absolute right-0 mt-2 w-48 border rounded-2xl shadow-lg ${
                isDashboardPage ? "dark:bg-[#010103]" : "bg-white"
              }`}
            >
              <button
                onClick={() =>
                  signOut({ callbackUrl: "/signIn", redirect: true })
                }
                className="w-full px-4 py-2 text-left hover:bg-red-400 rounded-2xl"
              >
                Logout
              </button>
            </div>
          )}
        </div>

        <div
          className={`p-1 rounded-full ${
            isDashboardPage ? "dark:bg-[#010103]" : "bg-white"
          }`}
        >
          <button
            className="p-2 rounded-full hover:bg-gray-200"
            onClick={toggleTheme}
          >
            {theme === "light" ? (
              <FaSun size={20} />
            ) : (
              <FaMoon size={20} className="text-blue-500" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default DashboardNavbar;