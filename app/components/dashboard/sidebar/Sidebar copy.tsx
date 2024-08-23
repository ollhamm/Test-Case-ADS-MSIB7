import React, { useState } from "react";
import {
  FaHome,
  FaMobileAlt,
  FaUserCircle,
  FaCommentDots,
  FaInbox,
  FaChevronDown,
  FaChevronUp,
  FaCog,
  FaBroadcastTower,
  FaBullhorn,
  FaRobot,
  FaHandsHelping,
  FaChartBar,
  FaExchangeAlt,
  FaFacebookMessenger,
} from "react-icons/fa";
import { MdChat, MdSend } from "react-icons/md";
import Image from "next/image";
import Link from "next/link";

const Sidebar = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isMessageListOpen, setIsMessageListOpen] = useState(false);

  return (
    <div className="w-[18%] min-w-[200px] h-auto bg-white p-4 text-black font-semibold text-xs flex flex-col relative z-10">
      <div className="flex items-center justify-center p-4">
        <Image
          src={"/images/logo-blue.png"}
          height={200}
          width={150}
          alt="logo dashboard"
        />
        {/* Replace with your logo */}
      </div>
      <nav className="flex gap-2 flex-col flex-grow mt-4">
        <Link
          href="/dashboard"
          className="flex items-center p-4 rounded-lg hover:bg-blue-600 active:bg-blue-700 transition-colors duration-200"
        >
          <FaHome size={12} />
          <span className="ml-2">Dashboard</span>
        </Link>
        <Link href="/device" className="flex items-center p-4 rounded-lg ">
          <FaMobileAlt size={12} />
          <span className="ml-2">Device</span>
        </Link>
        <div>
          {/* tombol utama */}
          <button
            className="flex items-center p-4 w-full text-left rounded-xl bg-[#F3F5F8]"
            onClick={() => setIsContactOpen(!isContactOpen)}
          >
            <FaUserCircle size={12} />
            <span className="ml-2">Contact</span>
            {isContactOpen ? (
              <FaChevronUp className="w-3 h-3 ml-auto" />
            ) : (
              <FaChevronDown className="w-3 h-3 ml-auto" />
            )}
          </button>
          {isContactOpen && (
            <div className="pl-8">
              <Link
                href="/contacts"
                className="flex items-center p-4 rounded-2xl "
              >
                <FaCommentDots size={12} />
                <span className="ml-2">Contacts</span>
              </Link>
              <Link
                href="/groups"
                className="flex items-center p-4 rounded-2xl "
              >
                <FaInbox size={12} />
                <span className="ml-2">Groups</span>
              </Link>
            </div>
          )}
        </div>
        <div>
          {/* tombol utama Message List*/}
          <button
            className="flex items-center p-4 w-full text-left rounded-lg bg-[#F3F5F8]"
            onClick={() => setIsMessageListOpen(!isMessageListOpen)}
          >
            <FaCommentDots size={12} />
            <span className="ml-2">Message List</span>
            {isMessageListOpen ? (
              <FaChevronUp className="w-3 h-3 ml-auto" />
            ) : (
              <FaChevronDown className="w-3 h-3 ml-auto" />
            )}
          </button>
          {isMessageListOpen && (
            <div className="pl-8">
              <Link
                href="/messenger"
                className="flex items-center p-4 rounded-2xl "
              >
                <MdChat size={12} />
                <span className="ml-2">Messenger</span>
              </Link>
              <Link
                href="/incoming"
                className="flex items-center p-4 rounded-2xl "
              >
                <FaFacebookMessenger size={12} />
                <span className="ml-2">Incoming Chart</span>
              </Link>
              <Link
                href="/outgoing"
                className="flex items-center p-4 rounded-2xl "
              >
                <MdSend size={12} />
                <span className="ml-2">Outgoing Chart</span>
              </Link>
            </div>
          )}
        </div>
        {/* New Tools section */}
        <div className="text-xs mt-2 mb-2">
          <div className="text-gray-300 ">Tools</div>
          <Link href="/broadcast" className="flex items-center p-4 rounded-lg">
            <FaBroadcastTower size={12} />
            <span className="ml-2">Broadcast</span>
          </Link>
          <Link href="/campaign" className="flex items-center p-4 rounded-lg">
            <FaBullhorn size={12} />
            <span className="ml-2">Campaign</span>
          </Link>
          <Link href="/auto-reply" className="flex items-center p-4 rounded-lg">
            <FaRobot size={12} />
            <span className="ml-2">Auto Reply</span>
          </Link>
          <Link
            href="/customer-service"
            className="flex items-center p-4 rounded-lg"
          >
            <FaHandsHelping size={12} />
            <span className="ml-2">Customer Service</span>
          </Link>
          <Link href="/analytics" className="flex items-center p-4 rounded-lg">
            <FaChartBar size={12} />
            <span className="ml-2">Analytics</span>
          </Link>
          <Link
            href="/forwarding-api"
            className="flex items-center p-4 rounded-lg"
          >
            <FaExchangeAlt size={12} />
            <span className="ml-2">Forwarding API</span>
          </Link>
        </div>
        {/* others */}
        <div className="text-xs mt-2 mb-2">
          <div className="text-gray-300 ">Others</div>
          <Link href="/analytics" className="flex items-center p-4 rounded-lg">
            <FaCog size={12} />
            <span className="ml-2">Analytics</span>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;
