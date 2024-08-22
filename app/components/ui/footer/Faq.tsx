// Faq.tsx
import React from "react";
import Input from "../Input";
import Result from "./Result";
import { IoRemove } from "react-icons/io5";

const Faq = () => {
  return (
    <div className="flex-col max-w-full mt-24 flex items-center justify-center p-12 md:p-4">
      <div className="text-2xl text-center text-white font-bold mb-6">
        Frequently Asked Questions
      </div>
      <div className="w-full max-w-md space-y-4 items-center mt-4 flex flex-col">
        <Input />
        <div className="flex flex-col space-y-4 items-center text-start w-full">
          <Result
            title="Apa itu Forwardin?"
            subtitle="Forwardin adalah sebuah platform alat pengelolaan pesan WhatsApp yang dirancang untuk membantu Anda mengirim pesan ke banyak nomor dan grup WhatsApp secara bersamaan. Forwardin juga menyediakan berbagai fitur canggih seperti auto-reply, fitur broadcast, manajemen kampanye, serta sinkronisasi kontak WhatsApp dan kontak Google."
            icon={IoRemove}
          />
          <Result title="Apakah Forwardin cocok untuk saya?" icon={IoRemove} />
          <Result
            title="Apakah Forwardin perlu di-install ke komputer?"
            icon={IoRemove}
          />
        </div>
      </div>
    </div>
  );
};

export default Faq;
