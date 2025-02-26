"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface Step {
  label: string;
  link: string;
}

interface NavigationProps {
  steps: Step[];
}

const StepNavigation: React.FC<NavigationProps> = ({ steps }) => {
  const pathname = usePathname();
  const activeIndex = steps.findIndex((step) => step.link === pathname);

  return (
    <div className="flex items-center justify-center w-full">
      {steps.map((step, index) => {
        const isCompleted = index <= activeIndex;

        return (
          <React.Fragment key={step.link}>
            {/* <Link href={step.link}> */}
            <button>
              <div
                className={`flex items-center justify-center w-10 h-10 rounded-full font-bold transition-all cursor-pointer
                ${
                  isCompleted
                    ? "bg-blue-500 text-white"
                    : "bg-gray-300 text-gray-700"
                }`}
              >
                {index + 1}
              </div>
            </button>
            {index < steps.length - 1 && (
              <div
                className={`h-1 flex-1 mx-2 transition-all 
                ${index < activeIndex ? "bg-blue-500" : "bg-gray-300"}`}
              ></div>
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default StepNavigation;
