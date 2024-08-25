"use client";
import { SessionProvider } from "next-auth/react";
import Sidebar from "@/app/components/dashboard/sidebar/Sidebar";
import DashboardNavbar from "@/app/components/dashboard/navbar/DashboardNavbar";
import Header from "@/app/components/dashboard/header/Header";
import Analitik from "@/app/components/dashboard/analitik/Analitik";

const Page = () => {
  return (
    <SessionProvider>
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
    </SessionProvider>
  );
};

export default Page;