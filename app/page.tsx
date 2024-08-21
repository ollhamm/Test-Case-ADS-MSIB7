"use client";
import React, { useEffect, useState } from "react";
import Card from "./components/ui/Card";
import CardStep from "./components/ui/CardStep";
import CardPrice from "./components/ui/CardPrice";
const Home = () => {
  const [currentSection, setCurrentSection] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll(".section");
      let newCurrentSection = 0;
      sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        if (
          rect.top <= window.innerHeight / 2 &&
          rect.bottom > window.innerHeight / 2
        ) {
          newCurrentSection = index;
        }
      });
      setCurrentSection(newCurrentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="relative">
      <div className="flex flex-col w-full bg-[url('/images/bg-ads.png')] bg-cover bg-fixed bg-center bg-repeat-no">
        <div
          className={`section flex flex-1 items-center justify-center min-h-screen transition-opacity duration-500 ${
            currentSection === 0 ? "opacity-100" : "opacity-30 blur-sm"
          }`}
        >
          {/* page 1 */}
          <div>
            <Card
              title="Elevate Your Messaging Efficiency with Our Innovative Admin Tools"
              subtitle="Selamat datang di Fowardin! Pengelolaan pesan Anda menjadi lebih mudah dengan Admin Tools kami. Tingkatkan komunikasi Anda dan pelanggan dengan fitur pesan otomatis. Menyimpan kontak menjadi lebih praktis dengan fitur sinkronasi Google Contact. Dapatkan kendali penuh pesan dengan manajemen konten yang praktis."
              buttonLabel="Daftar Sekarang"
              onButtonClick={() => alert("Button clicked!")}
              imageUrl="/images/section-1.png"
              altText="Admin Tools"
              reverseLayout={true}
            />
          </div>
        </div>
        <div
          className={`section flex flex-1 items-center justify-center min-h-screen bg-[#ECF2FA] transition-opacity duration-500 ${
            currentSection === 1 ? "opacity-100" : "opacity-30 blur-sm"
          }`}
        >
          {/* page 2 */}
          <div className="flex flex-col md:flex-row-reverse">
            <Card
              title="Reach Further with Ease"
              subtitle="Fowardin memberikan Anda akses cepat untuk memperluas jangkauan komunikasi Anda. Dengan fitur Broadcast kami, Anda dapat mengirim pesan kepada banyak kontak dan grup sekaligus. Menjangkau audiens Anda tidak pernah semudah ini."
              imageUrl="/images/section-2.png"
              altText="Admin Tools"
              reverseLayout={false}
            />
          </div>
        </div>
        <div
          className={`section flex flex-1 items-center justify-center min-h-screen bg-white transition-opacity duration-500 ${
            currentSection === 2 ? "opacity-100" : "opacity-30 blur-sm"
          }`}
        >
          {/* page 3 */}
          <div>
            <Card
              title="Right Time, Effective Messages"
              subtitle="Fowardin memungkinkan Anda untuk merencanakan pengiriman iklan yang tepat sasaran. Manfaatkan fitur Campaign kami untuk mengoptimalkan pesan iklan Anda sehingga hasilnya lebih akurat dan sukses. Dengan Fowardin, setiap pesan iklan memiliki dampak yang lebih besar."
              imageUrl="/images/section-3.png"
              altText="Admin Tools"
            />
          </div>
        </div>
        <div
          className={`section flex flex-1 items-center justify-center min-h-screen bg-[#ECF2FA] transition-opacity duration-500 ${
            currentSection === 3 ? "opacity-100" : "opacity-30 blur-sm"
          }`}
        >
          {/* page 4 */}
          <div>
            <Card
              title="Respond Faster with the Convenience of Auto Reply"
              subtitle="Fowardin mempermudah Anda untuk memberikan respon cepat kepada pesan dari banyak kontak dan grup sekaligus. Dengan fitur Auto Reply kami, Anda dapat menjawab pertanyaan atau memberikan respon otomatis, menghemat waktu dan energi Anda. Tanggap lebih cepat dengan Fowardin."
              imageUrl="/images/section-4.png"
              altText="Admin Tools"
              reverseLayout={false}
            />
          </div>
        </div>
        <div
          className={`section flex flex-1 items-center justify-center min-h-screen bg-white transition-opacity duration-500 ${
            currentSection === 4 ? "opacity-100" : "opacity-30 blur-sm"
          }`}
        >
          <div>
            <CardStep
              title="One Step Closer to More Effective and Connected Communication!"
              subtitle="Bidang ini dapat memanfaatkan fitur Broadcast untuk mengirim promosi, pengumuman, dan informasi produk kepada pelanggan dalam jumlah besar secara efisien. Selain itu, fitur Campaign dapat membantu merencanakan dan menyampaikan pesan iklan dengan waktu yang tepat kepada target audiens yang sesuai."
              imageUrl="/images/section-5.png"
              altText="Admin Tools"
              buttonLabels={[
                "Bisnis dan Pemasaran",
                "Komersial dan Penjualan",
                "Organisasi Sosial",
              ]}
            />
          </div>
        </div>
        <div
          className={`section flex flex-1 items-center justify-center min-h-screen bg-white transition-opacity duration-500 ${
            currentSection === 5 ? "opacity-100" : "opacity-30 blur-sm"
          }`}
        >
          <div>
            <CardPrice
              title="Starter"
              subtitle="Mulai perjalanan Anda dengan paket Starter selama 14 hari. Nikmati pesan otomatis, siaran pesan, dan  manajemen kontak yang efisien. Dapatkan integrasi yang membantu dan sinkronisasi kontak WhatsApp."
              price="Gratis"
              subPrice="-"
              buttonLabel="test"
            />
          </div>
        </div>
        <div
          className={`section flex flex-1 items-center justify-center min-h-screen bg-[url('/images/bg-footer.png')] bg-cover bg-center bg-repeat-no transition-opacity duration-500 ${
            currentSection === 6 ? "opacity-100" : "opacity-30 blur-sm"
          }`}
        >
          <div>Section 7</div>
        </div>
      </div>
    </div>
  );
};

export default Home;
