"use client";
import Image from "next/image";
import Card from "./components/ui/Card";

export default function Home() {
  return (
    <div className="flex flex-col w-full bg-[url('/images/bg-ads.png')] bg-cover bg-fixed bg-center bg-repeat-no">
      <div className="flex flex-1 items-center justify-center min-h-screen">
        <div>
          <Card
            title="Elevate Your Messaging Efficiency with Our Innovative Admin Tools"
            subtitle="Selamat datang di Fowardin! Pengelolaan pesan Anda menjadi lebih mudah dengan Admin Tools kami. Tingkatkan komunikasi Anda dan pelanggan dengan fitur pesan otomatis. Menyimpan kontak menjadi lebih praktis dengan fitur sinkronasi Google Contact. Dapatkan kendali penuh pesan dengan manajemen konten yang praktis."
            buttonLabel="Daftar Sekarang"
            onButtonClick={() => alert("Button clicked!")}
            imageUrl="/images/section-1.png"
            altText="Admin Tools"
          />
        </div>
      </div>

      <div className="flex flex-1 items-center justify-center min-h-screen bg-[#ECF2FA]">
        <div>Section 2</div>
      </div>
      <div className="flex flex-1 items-center justify-center min-h-screen bg-white">
        <div>Section 3</div>
      </div>
      <div className="flex flex-1 items-center justify-center min-h-screen bg-[#ECF2FA]">
        <div>Section 4</div>
      </div>
      <div className="flex flex-1 items-center justify-center min-h-screen bg-white">
        <div>Section 5</div>
      </div>
      <div className="flex flex-1 items-center justify-center min-h-screen bg-white">
        <div>Section 6</div>
      </div>
      <div className="flex flex-1 items-center justify-center min-h-screen bg-[url('/images/bg-footer.png')] bg-cover bg-center bg-repeat-no">
        <div>Section 7</div>
      </div>
    </div>
  );
}
