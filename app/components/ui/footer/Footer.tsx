// Footer.tsx
import React from "react";
import Image from "next/image"; // Gunakan Image dari Next.js untuk optimasi gambar

const Footer = () => {
  return (
    <div className="flex-col max-w-full mt-24 flex items-center justify-center p-12 md:px-4">
      <div className="container mx-auto flex flex-col md:flex-row justify-between gap-8 max-w-screen-lg">
        {/* Konten Pertama */}
        <div className="flex-1 flex flex-col items-start">
          <div className="flex text-white items-center mb-4">
            <Image
              src="/images/logo-ads-white.png"
              alt="Logo"
              width={150}
              height={100}
            />
          </div>
          <p className="text-gray-300 text-left text-sm">
            Fowardin is your ultimate communication management solution. We
            empower businesses of all sizes with efficient message forwarding,
            streamlined contact management, and powerful campaign scheduling.
            Our mission is to simplify your communication processes, helping you
            engage with your audience effectively and effortlessly. Join us in
            transforming your communication game today!
          </p>
        </div>

        {/* Konten Kedua */}
        <div className="flex-1 flex flex-col items-start">
          <h4 className="text-lg font-semibold text-white mb-2">Contact Us</h4>
          <p className="text-gray-300 text-left text-sm mb-4">
            Join our mailing list to receive updates, exclusive content, and
            early access to upcoming events. By signing up, you become an
            integral part of our community, spreading the message of compassion
            and making a difference.
          </p>
          <div className="text-left">
            <p className="text-white">
              Email:{" "}
              <a href="mailto:info@fowardin.com" className="text-gray-300">
                info@fowardin.com
              </a>
            </p>
            <p className="text-white">
              Phone:{" "}
              <a href="tel:+11234567890" className="text-gray-300">
                +1 (123) 456-7890
              </a>
            </p>
          </div>
        </div>

        {/* Konten Ketiga */}
        <div className="flex flex-col mb-20 items-start">
          <h4 className="text-lg font-semibold text-white mb-2">Let’s Talk</h4>
          <div className="text-gray-300 text-left text-sm mb-4">
            <p>Facebook</p>
            <p>Instagram</p>
            <p>Twitter</p>
          </div>
        </div>
      </div>

      {/* Powered By */}
      <div className="mt-28 flex justify-center w-full">
        <p className="text-gray-300 text-sm flex items-center">
          Powered By:{" "}
          <Image
            src={"/images/name.png"}
            alt="Powered By"
            width={100}
            height={30}
            className="ml-2"
          />
        </p>
      </div>
    </div>
  );
};

export default Footer;
