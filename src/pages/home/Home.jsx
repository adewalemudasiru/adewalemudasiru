import React from "react";
import Button from "../../components/elements/form/Button";
import { ArrowRight } from "lucide-react";
import Socials from "../../components/ui/Socials";

/**
 * The home page of the website, featuring a hero section with a heading,
 * subheading, and call-to-action button, as well as a social media section.
 *
 * @returns {React.ReactElement} The home page component.
 */
const Home = () => {
  return (
    <div className="-mt-24">
      <div className="flex flex-col gap-y-7 items-center text-center h-screen justify-center ">
        <div className="inline-flex items-center gap-2 border border-borderLight py-2 px-4 rounded-full bg-white/5">
          <span className="w-2 h-2 rounded-full bg-teal-500 animate-pulse "></span>
          <span className="text-sm text-textPrimary ">
            Available for freelance work
          </span>
        </div>
        <div className="max-w-2xl space-y-5">
          <h2 className="text-5xl font-bold text-textSecondary">
            Adewale Mudasiru
          </h2>
          <p className="text-lg text-textPrimary">
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
        <div className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-4">
          <div>
            <a href="/contact">
              <Button endIcon={<ArrowRight size={16} isHover="home" />}>
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
