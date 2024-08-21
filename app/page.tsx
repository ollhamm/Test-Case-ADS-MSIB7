import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col bg-[url('/images/bg-ads.png')]">
      <div className="flex flex-1 items-center justify-center min-h-screen p-8">
        <div>Section 1</div>
      </div>

      {/* Bagian kedua - Layar tambahan */}
      <div className="flex flex-1 items-center justify-center min-h-screen p-8 bg-[#ECF2FA]">
        <div>Section 2</div>
      </div>
      {/* Bagian kedua - Layar tambahan */}
      <div className="flex flex-1 items-center justify-center min-h-screen p-8 bg-white">
        <div>Section 3</div>
      </div>
      <div className="flex flex-1 items-center justify-center min-h-screen p-8 bg-[#ECF2FA]">
        <div>Section 4</div>
      </div>
      <div className="flex flex-1 items-center justify-center min-h-screen p-8 bg-white">
        <div>Section 5</div>
      </div>
      <div className="flex flex-1 items-center justify-center min-h-screen p-8 bg-white">
        <div>Section 6</div>
      </div>
      <div className="flex flex-1 items-center justify-center min-h-screen bg-[url('/images/bg-footer.png')]">
        <div>Section 6</div>
      </div>
    </div>
  );
}
