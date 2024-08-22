"use client";
import React, { useEffect, useState } from "react";
import { MultiStepLoader as Loader } from "../../ui/multi-step-loader";

const loadingStates = [
  { text: "Get Started" },
  { text: "Broadcast" },
  { text: "Campaign" },
  { text: "Auto Reply" },
  { text: "Opportunity" },
  { text: "Pricing" },
  { text: "FAQ" },
  { text: "Contact Us" },
];

export function MultiStepLoaderDemo() {
  const [activeSection, setActiveSection] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const sections = Array.from(document.querySelectorAll(".section"));
      let currentIndex = 0;

      for (let i = 0; i < sections.length; i++) {
        const { top, bottom } = sections[i].getBoundingClientRect();
        if (top < window.innerHeight / 2 && bottom > window.innerHeight / 2) {
          currentIndex = i;
          break;
        }
      }

      setActiveSection(currentIndex);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="hidden md:flex fixed top-0 bottom-0 left-0 z-[100] dark:border-gray-700">
      <Loader loadingStates={loadingStates} currentStep={activeSection} />
    </div>
  );
}
