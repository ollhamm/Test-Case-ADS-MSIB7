"use client";
import React, { useState, useEffect } from "react";
import {
  FaBell,
  FaUserCircle,
  FaSun,
  FaChevronUp,
  FaChevronDown,
} from "react-icons/fa";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";
import { useParams } from "next/navigation";

const DashboardNavbar = () => {
  const { id } = useParams();
  const [user, setUser] = useState<{ username: string; id: string } | null>(
    null
  );
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // State to control dropdown visibility
  const router = useRouter();

  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem("authToken");

      if (!token) {
        router.push("/signIn");
        return;
      }

      try {
        const response = await fetch("/api/user", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.ok) {
          const data = await response.json();
          setUser(data.user);
          // Redirect to the dashboard with the user ID
          router.push(`/dashboard/${data.user.id}`);
        } else {
          console.error("Failed to fetch user:", await response.json());
          router.push("/signIn");
        }
      } catch (error) {
        console.error("Error fetching user:", error);
        router.push("/signIn");
      }
    };

    fetchUser();
  }, [router]);

  const handleLogout = async () => {
    const token = localStorage.getItem("authToken");

    if (token) {
      try {
        const response = await fetch("/api/logout", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.ok) {
          toast.success("Logout successful!");
          localStorage.removeItem("authToken");
          router.push("/signIn");
        } else {
          const errorData = await response.json();
          toast.error(`Logout failed: ${errorData.error}`);
        }
      } catch (error) {
        console.error("Error logging out:", error);
        toast.error("An unexpected error occurred. Please try again.");
      }
    } else {
      toast.error("No token found. Please log in again.");
      router.push("/signIn");
    }
  };

  return (
    <div className="bg-[#F3F5F8] p-4 flex items-center justify-between w-auto px-4 absolute top-0 left-[18%] right-0 z-20">
      <div className="text-md font-bold">
        <div className="flex flex-row items-center gap-3">
          <div>Selamat datang,</div>
          <div>{user?.username}</div>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <div className="bg-white p-1 rounded-full">
          <button className="p-2 rounded-full">
            <FaBell size={20} />
          </button>
        </div>

        {/* Dropdown for User Profile */}
        <div className="relative">
          <div
            className="flex rounded-xl bg-[#F3F5F8] cursor-pointer items-center p-4 w-full text-left "
            onClick={() => setIsDropdownOpen(!isDropdownOpen)} // Toggle dropdown visibility
          >
            <FaUserCircle size={24} />
            <span className="ml-2">{user?.username}</span>
            {isDropdownOpen ? (
              <FaChevronUp className="w-3 h-3 ml-2" />
            ) : (
              <FaChevronDown className="w-3 h-3 ml-2" />
            )}
          </div>

          {/* Dropdown Content */}
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white border rounded-2xl shadow-lg">
              <button
                onClick={handleLogout}
                className="w-full roun px-4 py-2 text-left hover:bg-red-400 rounded-2xl"
              >
                Logout
              </button>
            </div>
          )}
        </div>

        {/* Sun Icon */}
        <div className="bg-white p-1 rounded-full">
          <button className="p-2 rounded-full hover:bg-gray-200">
            <FaSun size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default DashboardNavbar;
