"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";
import { useParams } from "next/navigation";
import Sidebar from "@/app/components/dashboard/sidebar/Sidebar";
import DashboardNavbar from "@/app/components/dashboard/navbar/DashboardNavbar";
import Header from "@/app/components/dashboard/header/Header";
import Analitik from "@/app/components/dashboard/analitik/Analitik";

const Page = () => {
  // const { id } = useParams();
  // const [user, setUser] = useState<{ username: string; id: string } | null>(
  //   null
  // );
  // const router = useRouter();

  // useEffect(() => {
  //   const fetchUser = async () => {
  //     const token = localStorage.getItem("authToken");

  //     if (!token) {
  //       router.push("/signIn");
  //       return;
  //     }

  //     try {
  //       const response = await fetch("/api/user", {
  //         method: "GET",
  //         headers: {
  //           Authorization: `Bearer ${token}`,
  //         },
  //       });

  //       if (response.ok) {
  //         const data = await response.json();
  //         setUser(data.user);
  //         // Redirect to the dashboard with the user ID
  //         router.push(`/dashboard/${data.user.id}`);
  //       } else {
  //         console.error("Failed to fetch user:", await response.json());
  //         router.push("/signIn");
  //       }
  //     } catch (error) {
  //       console.error("Error fetching user:", error);
  //       router.push("/signIn");
  //     }
  //   };

  //   fetchUser();
  // }, [router]);

  // const handleLogout = async () => {
  //   const token = localStorage.getItem("authToken");

  //   if (token) {
  //     try {
  //       const response = await fetch("/api/logout", {
  //         method: "POST",
  //         headers: {
  //           Authorization: `Bearer ${token}`,
  //         },
  //       });

  //       if (response.ok) {
  //         toast.success("Logout successful!");
  //         localStorage.removeItem("authToken");
  //         router.push("/signIn");
  //       } else {
  //         const errorData = await response.json();
  //         toast.error(`Logout failed: ${errorData.error}`);
  //       }
  //     } catch (error) {
  //       console.error("Error logging out:", error);
  //       toast.error("An unexpected error occurred. Please try again.");
  //     }
  //   } else {
  //     toast.error("No token found. Please log in again.");
  //     router.push("/signIn");
  //   }
  // };

  return (
    <div className="flex flex-col bg-[#F3F5F8] min-h-screen">
      <DashboardNavbar />
      <div className="flex flex-grow">
        <Sidebar />
        <div className="flex-1 items-center justify-center min-h-screen p-4">
          <div>
            <Header />
          </div>
          <Analitik />
        </div>
      </div>
    </div>
  );
};

export default Page;
