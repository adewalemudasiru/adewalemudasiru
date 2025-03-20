import React from "react";
import Introduction from "./sections/Introduction";
import Skills from "./sections/Details";

const About = () => {
  return (
    <div>
      <h2 className="text-center text-5xl font-bold mb-6">About Me</h2>
      <div>
        <Introduction className="mb-12" />
        <Skills />
      </div>
    </div>
  );
};

export default About;
