"use client";
import CardPrice from "./CardPrice";
import { useState } from "react";
import {
  IoTimeSharp,
  IoTimerSharp,
  IoMailSharp,
  IoPhonePortraitSharp,
} from "react-icons/io5";
import { FaFileExcel } from "react-icons/fa";

export function PricingSection() {
  const [isMonthly, setIsMonthly] = useState(true);
  const pricingOptions = [
    {
      title: "Starter",
      subtitle:
        "Mulai perjalanan Anda dengan paket Starter selama 14 hari. Nikmati pesan otomatis, siaran pesan, dan manajemen kontak yang efisien. Dapatkan integrasi yang membantu dan sinkronisasi kontak WhatsApp.",
      priceMonthly: "Gratis",
      priceYearly: "Gratis",
      buttonLabel: "Start Now",
      buttonStyle: "bg-blue-500 shadow-md",
      items: [
        { icon: <IoTimeSharp size={20} />, name: "100 Auto reply" },
        { icon: <IoTimerSharp size={20} />, name: "500 Broadcast" },
        { icon: <IoMailSharp size={20} />, name: "50 Campaign" },
        { icon: <IoPhonePortraitSharp size={20} />, name: "500 Contact" },
        { icon: <FaFileExcel size={20} />, name: "50 Contact Import" },
      ],
    },
    {
      title: "Basic",
      subtitle:
        "Dapatkan akses selama 1 bulan dengan paket Basic. Manfaatkan fitur pesan otomatis, siaran pesan, dan manajemen kontak yang ditingkatkan. Rasakan kenyamanan integrasi yang luas dengan sinkronisasi kontak Google dan WhatsApp.",
      priceMonthly: "Rp 65.000",
      priceYearly: "Rp 650.000",
      buttonLabel: "Get Started",
      buttonStyle: "bg-orange-500 shadow-lg",
      items: [
        { icon: <IoTimeSharp size={20} />, name: "300 Auto reply" },
        { icon: <IoTimerSharp size={20} />, name: "1000 Broadcast" },
        { icon: <IoMailSharp size={20} />, name: "150 Campaign" },
        { icon: <IoPhonePortraitSharp size={20} />, name: "1000 Contact" },
        { icon: <FaFileExcel size={20} />, name: "100 Contact Import" },
      ],
    },
    {
      title: "Premium",
      subtitle:
        "Perpanjang pengalaman Anda dengan paket Premium selama 1 bulan. Nikmati manfaat pesan otomatis, siaran pesan, dan manajemen kontak tanpa batasan. Aktifkan integrasi yang luas dengan sinkronisasi kontak Google dan WhatsApp.",
      priceMonthly: "Rp 76.000",
      priceYearly: "Rp 800.000",
      buttonLabel: "Get Started",
      buttonStyle: "bg-blue-500 shadow-md",
      items: [
        { icon: <IoTimeSharp size={20} />, name: "Unlimited Auto reply" },
        { icon: <IoTimerSharp size={20} />, name: "Unlimited Broadcast" },
        { icon: <IoMailSharp size={20} />, name: "Unlimited Campaign" },
        { icon: <IoPhonePortraitSharp size={20} />, name: "Unlimited Contact" },
        { icon: <FaFileExcel size={20} />, name: "Unlimited Contact Import" },
      ],
    },
    {
      title: "Pro",
      subtitle:
        "Jelajahi seluruh fitur dengan paket Pro selama 1 bulan. Dapatkan keuntungan dari pesan otomatis, siaran pesan, serta manajemen kontak yang tidak terbatas. Aktifkan integrasi yang luas dengan sinkronisasi kontak Google dan WhatsApp.",
      priceMonthly: "Rp 86.000",
      priceYearly: "Rp 900.000",
      buttonLabel: "Get Started",
      buttonStyle: "bg-blue-500 shadow-md",
      items: [
        { icon: <IoTimeSharp size={20} />, name: "Unlimited Auto reply" },
        { icon: <IoTimerSharp size={20} />, name: "Unlimited Broadcast" },
        { icon: <IoMailSharp size={20} />, name: "Unlimited Campaign" },
        { icon: <IoPhonePortraitSharp size={20} />, name: "Unlimited Contact" },
        { icon: <FaFileExcel size={20} />, name: "Unlimited Contact Import" },
      ],
    },
  ];

  return (
    <div className="flex-col text-black flex items-center justify-center">
      <div className="text-2xl mt-8 font-bold mb-8">Our Pricing</div>
      <div className="mb-4">
        <div className="flex relative">
          <button
            className={`py-2 px-6 border rounded-l-2xl ${
              isMonthly ? "bg-blue-500 text-white" : "bg-white text-blue-500"
            }`}
            onClick={() => setIsMonthly(true)}
          >
            Monthly
          </button>
          <button
            className={`py-2 px-6 border rounded-r-2xl ${
              !isMonthly ? "bg-blue-500 text-white" : "bg-white text-blue-500"
            }`}
            onClick={() => setIsMonthly(false)}
          >
            Yearly
          </button>
        </div>
      </div>
      <div className="text-sm md:text-md mt-8 text-[#3366FF] bg-[#E6E8F0] p-2 rounded-2xl mb-8">
        Hemat hingga 25% dengan paket tahunan
      </div>
      <div className="flex md:flex-row md:ml-12 flex-col mb-12 md:space-x-4 overflow-x-auto px-8 md:px-28">
        {pricingOptions.map((option, index) => (
          <CardPrice
            key={index}
            title={option.title}
            subtitle={option.subtitle}
            price={isMonthly ? option.priceMonthly : option.priceYearly}
            subPrice={isMonthly ? "per month" : "per year"}
            buttonLabel={option.buttonLabel}
            buttonStyle={option.buttonStyle}
            items={option.items}
          />
        ))}
      </div>
    </div>
  );
}
