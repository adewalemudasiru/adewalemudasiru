import React from "react";
import Button from "../../components/elements/form/Button";
import { ArrowRight } from "lucide-react";

const Home = () => {
  return (
    <div className="-mt-24">
      <div className="flex flex-col gap-y-7 items-center text-center h-screen justify-center ">
        <div className="inline-flex items-center gap-2 border border-gray-100 py-2 px-4 rounded-full">
          <span className="w-2 h-2 rounded-full bg-teal-500 animate-pulse "></span>
          <span className="text-sm">Available for freelance work</span>
        </div>
        <div className="max-w-2xl space-y-5">
          <h2 className="text-5xl font-bold">Adewale Mudasiru</h2>
          <p>
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
        <div>
          <Button endIcon={<ArrowRight size={16} />}>Let's talk</Button>
        </div>
      </div>
    </div>
  );
};

export default Home;
