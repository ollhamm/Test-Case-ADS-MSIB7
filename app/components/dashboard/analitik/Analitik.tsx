"use client";
import React from "react";
import Pie from "../pie/Pie";

const Analitik = () => {
  return (
    <div className="flex w-full p-6 justify-center">
      <div className="bg-white dark:bg-[#1F1F21] dark:border dark:border-gray-500 border-0 rounded-lg p-8 shadow-lg flex flex-col w-full">
        <div className="text-xl font-bold mb-6">Analitik</div>

        <div className="w-full flex items-start gap-2 justify-between rounded-lg h-full">
          {/* card kiri */}
          <div className="border rounded-md dark:boder dark:border-gray-500 flex-[2] flex flex-col p-4 h-full">
            <div className="flex flex-col">
              <div className="text-md font-semibold">Ringkasan hari ini</div>
              <div className="flex justify-between mt-2 gap-2 flex-row">
                <div className="flex-1 bg-neutral-200 dark:bg-[#010103] w-auto items-start p-4 rounded-lg justify-center flex-col">
                  <div className="text-xs">Device</div>
                  <div className="text-md font-bold">RMX3263</div>
                </div>
                <div className="flex-1 text-xs dark:bg-[#010103] bg-neutral-200 w-14 items-start p-4 rounded-lg justify-center flex-col">
                  <div>Aktif sejak</div>
                  <div>29.8.2023</div>
                </div>
              </div>
              <div className="flex justify-between mt-2 gap-2 flex-row">
                <div className="flex-1 items-start p-4 rounded-lg  justify-center flex-col">
                  <div className="text-xs">Pesan keluar</div>
                  <div className="text-xs font-semibold">24</div>
                </div>
                <div className="flex-1 items-start p-4 rounded-lg justify-center flex-col">
                  <div className="text-xs">Pesan Masuk</div>
                  <div className="text-xs font-semibold">7</div>
                </div>
                <div className="flex-1 items-start p-4 rounded-lg justify-center flex-col">
                  <div className="text-xs">Pesan Gagal</div>
                  <div className="text-xs font-semibold">0</div>
                </div>
              </div>
            </div>
          </div>

          {/* card kanan */}
          <div className="flex-[4] border rounded-md dark:border-gray-500 p-6 h-full flex flex-col justify-between">
            <div className="text-sm font-bold">Total statistik pesan</div>
            <div className="flex justify-between gap-2">
              <div className="flex flex-col mt-8">
                <div className="flex items-start text-start mt-8 gap-2 flex-col">
                  <div className="text-xs">Total Pesan Keluar</div>
                  <div className="font-semibold text-sm">45</div>
                </div>
                <div className="flex items-start text-start mt-8 gap-2 flex-col">
                  <div className="text-xs">Total Pesan Keluar</div>
                  <div className="font-semibold text-sm">45</div>
                </div>
              </div>
              <div className="flex flex-col mt-8 mr-auto justify-between">
                <div className="flex items-start text-start mt-8 gap-2 flex-col">
                  <div className="text-xs">Total Pesan Gagal</div>
                  <div className="font-semibold text-sm">8</div>
                </div>
              </div>
              <div className="flex flex-col justify-center items-center">
                <div className="flex text-xs gap-8 flex-col items-end">
                  <Pie />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analitik;
