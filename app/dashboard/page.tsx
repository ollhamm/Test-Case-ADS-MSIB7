"use client";
import React, { useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import Sidebar from "@/app/components/dashboard/sidebar/Sidebar";
import DashboardNavbar from "@/app/components/dashboard/navbar/DashboardNavbar";
import Header from "@/app/components/dashboard/header/Header";
import Analitik from "@/app/components/dashboard/analitik/Analitik";
import { SessionProvider } from "next-auth/react";
import { DashboardThemeProvider } from "../components/dashboard/DashboardThemeContext";

const Page = () => {
  const { id } = useParams();
  const router = useRouter();

  useEffect(() => {}, [id]);

  return (
    <SessionProvider>
      <DashboardThemeProvider>
        <div className="flex flex-col min-h-screen bg-[#F3F5F8] dark:bg-[#1F1F21]">
          <DashboardNavbar />
          <div className="flex">
            <Sidebar />
            <main className="flex-1 p-4">
              <Header />
              <Analitik />
            </main>
          </div>
        </div>
      </DashboardThemeProvider>
    </SessionProvider>
  );
};

export default Page;
