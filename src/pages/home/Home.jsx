import React from "react";
import { Button } from "../../components/ui/Button";
import { ArrowRight } from "lucide-react";
import Socials from "../../components/ui/Socials";

const Home = ({ isMobile = false }) => {
  return (
    <div className={isMobile ? "" : "-mt-24"}>
      <div
        className={`flex flex-col gap-y-6 
      items-center text-center 
      ${isMobile ? "py-12 sm:py-16" : "h-svh"} justify-center`}
      >
        <div
          className="inline-flex items-center gap-2 
        border border-borderLight 
        py-2 px-4 rounded-full 
        bg-white/5 text-xs sm:text-sm"
        >
          <span className="w-2 h-2 rounded-full bg-teal-500 animate-pulse "></span>
          <span className="font-medium text-textPrimary ">
            Available for freelance work
          </span>
        </div>
        <div className="max-w-2xl space-y-5 px-2 sm:px-0">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-textSecondary leading-tight">
            Adewale Mudasiru
          </h2>
          <p className="text-sm sm:text-base md:text-lg font-medium text-textPrimary leading-relaxed">
            Frontend developer{" "}
            <span className="text-teal-500">
              crafting intuitive, responsive web experiences
            </span>{" "}
            with clean code and modern frameworks.{" "}
            <span className="text-teal-500">
              Turning designs into seamless user interfaces
            </span>
            .
          </p>
        </div>
        <div
          className="flex flex-col 
        md:flex-row 
        md:items-center space-y-3
        md:space-y-0 md:space-x-4 w-full sm:w-auto px-2 sm:px-0"
        >
          <div className="w-full sm:w-auto">
            <a href="#contact" className="w-full">
              <Button
                endIcon={<ArrowRight size={16} />}
                className="w-full sm:w-auto"
              >
                Let's talk
              </Button>
            </a>
          </div>
          <div>
            <Socials />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
