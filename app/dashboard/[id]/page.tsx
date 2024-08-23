"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";
import { useParams } from "next/navigation";

const Page = () => {
  const { id } = useParams();
  const [user, setUser] = useState<{ username: string; id: string } | null>(
    null
  );
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
    <div className="flex flex-col w-full items-center justify-center min-h-screen">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <div className="mb-8 text-center flex flex-col">
          <div className="font-bold text-xl">Welcome {user?.username}</div>
          <div className="text-sm">Here&apos;s your dashboard</div>
        </div>
        {/* Other dashboard content goes here */}
        <button
          onClick={handleLogout}
          className="w-full bg-red-500 text-white py-2 px-12 rounded-sm hover:bg-red-600 focus:outline-none focus:ring focus:ring-red-300"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Page;
