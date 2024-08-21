import {
  IoTimeSharp,
  IoTimerSharp,
  IoMailSharp,
  IoPhonePortraitSharp,
} from "react-icons/io5";
import { FaFileExcel, FaGoogle } from "react-icons/fa";

// Data Dummy untuk Price 1
const PRICE1 = {
  title: "Premium Plan",
  subtitle: "Best plan for growing businesses",
  price: "Free",
  subPrice: "-",
  buttonLabel: "Subscribe Now",
  items: [
    { icon: <IoTimeSharp size={20} />, name: "100 Auto reply" },
    { icon: <IoTimerSharp size={20} />, name: "500 Broadcast" },
    { icon: <IoMailSharp size={20} />, name: "50 Campaign" },
    { icon: <IoPhonePortraitSharp size={20} />, name: "500 Contact" },
    { icon: <FaFileExcel size={20} />, name: "50 Device" },
    { icon: <FaFileExcel size={20} />, name: "Excel / CSV Contact Import" },
    { icon: <FaGoogle size={20} />, name: "Google Contact Sync" },
  ],
};

// Data Dummy untuk Price 2
const PRICE2 = {
  title: "Premium Plan",
  subtitle: "Best plan for growing businesses",
  price: "$99/month",
  subPrice: "$899/year",
  buttonLabel: "Subscribe Now",
  items: [
    { icon: <IoTimeSharp size={20} />, name: "100 Auto reply" },
    { icon: <IoTimerSharp size={20} />, name: "500 Broadcast" },
    { icon: <IoMailSharp size={20} />, name: "50 Campaign" },
    { icon: <IoPhonePortraitSharp size={20} />, name: "500 Contact" },
    { icon: <FaFileExcel size={20} />, name: "50 Device" },
    { icon: <FaFileExcel size={20} />, name: "Excel / CSV Contact Import" },
    { icon: <FaGoogle size={20} />, name: "Google Contact Sync" },
  ],
};

export { PRICE1, PRICE2 };
