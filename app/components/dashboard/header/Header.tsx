"use client";
import React from "react";
import { FaUserCircle } from "react-icons/fa";
import Image from "next/image";

const Header = () => {
  return (
    <div className="flex mt-28 gap-2 p-6 justify-center items-stretch">
      {/* Left Card */}
      <div className="flex-1 border-0 dark:border dark:border-gray-500 dark:bg-[#1F1F21] bg-white p-6 rounded-lg  flex flex-col justify-between">
        <div className="flex justify-between">
          <div className="flex flex-col gap-6">
            <div className="text-sm font-semibold">
              Paket
              <br /> Saat Ini
            </div>
            <div className="text-sm font-semibold mt-4">Devices</div>
            <div className="text-sm font-semibold mt-4">Contacts</div>
          </div>
          <div className="flex flex-col mb-3 justify-between">
            <div className="flex gap-2 flex-row">
              <div className="text-md font-bold">Starter</div>
              <div className="text-md text-xs text-white px-3 py-1 bg-black rounded-2xl">
                Free
              </div>
            </div>
            <div className="bg-gray-300 w-44 h-2 rounded-full relative">
              <div className="flex flex-col gap-3">
                <div
                  className="absolute top-0 left-0 h-2 rounded-full bg-red-500"
                  style={{ width: "80%" }}
                ></div>
                <div className="mt-2 text-xs text-gray-300">
                  8 dari 10 device yang tersedia
                </div>
              </div>
            </div>
            <div className="bg-gray-300 w-44 h-2 rounded-full relative">
              <div className="flex flex-col gap-3">
                <div
                  className="absolute top-0 left-0 h-2 rounded-full bg-green-500"
                  style={{ width: "20%" }}
                ></div>
              </div>
              <div className="mt-2 text-xs text-gray-300">
                8 dari 10 device yang tersedia
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-between">
            <div className="flex text-xs gap-8 flex-col items-end text-end">
              <div className="flex flex-col">
                <div>Aktif sampai dengan</div>
                <div className="font-semibold">Selasa, 29 Agustus 2023</div>
              </div>
              <div className="font-semibold">
                Upgrade paket untuk meningkatkan
                <br /> batasan fitur yang ada
                <br />
              </div>
              <div className="flex">
                <button className="font-semibold text-blue-500 items-center px-10 rounded-md py-2 border border-blue-400 ">
                  Upgrade Paket
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Card */}
      <div className="flex-2 border-0 dark:border dark:bg-[#1F1F21] bg-white p-4 dark:border-gray-500 rounded-lg flex flex-col justify-between">
        <div className="text-start mb-2 font-semibold flex items-center">
          Pesan Terakhir
        </div>
        <div className="flex flex-col gap-2">
          {/* chat 1 */}
          <div className="text-sm flex gap-4 border-0 dark:border-gray-500 dark:border bg-[#F3F5F8] dark:bg-[#1F1F21] py-2 px-2 rounded-md">
            <div className="items-center text-blue-500 flex justify-center">
              <FaUserCircle size={24} />
            </div>
            <div className="flex flex-col">
              <div className="font-semibold text-start">anda</div>
              <div>Hai apa kabarmu hari ini? Semoga...</div>
            </div>
            <div className="flex items-center justify-center">
              <button className="text-xs rounded-2xl px-3 py-1 text-white bg-[#3366FF]">
                Terkirim
              </button>
            </div>
          </div>
          {/* chat 2 */}
          <div className="text-sm flex gap-4 dark:border-gray-500 border-0 dark:border bg-[#F3F5F8] dark:bg-[#1F1F21] py-2 px-2 rounded-md">
            <div className="items-center text-blue-500 flex justify-center">
              <FaUserCircle size={24} />
            </div>
            <div className="flex flex-col">
              <div className="font-semibold text-start">anda</div>
              <div>Hai apa kabarmu hari ini? Semoga...</div>
            </div>
            <div className="flex items-center justify-center">
              <button className="text-xs rounded-2xl px-3 py-1 text-white bg-[#3366FF]">
                Terkirim
              </button>
            </div>
          </div>
          {/* chat 3 */}
          <div className="text-sm flex gap-4 dark:border-gray-500 border-0 dark:border bg-[#F3F5F8] dark:bg-[#1F1F21] py-2 px-2 rounded-md">
            <div className="items-center text-blue-500 flex justify-center">
              <Image
                src={"/icon/message.png"}
                height={24}
                width={24}
                alt="logo"
              />
            </div>
            <div className="flex flex-col">
              <div className="font-semibold text-start">anda</div>
              <div>Hai apa kabarmu hari ini? Semoga...</div>
            </div>
            <div className="flex items-center justify-center">
              <button className="text-xs rounded-2xl px-3 py-1 text-white bg-[#4FBEAB]">
                Diterima
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
