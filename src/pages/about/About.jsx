import React from "react";
import Introduction from "./sections/Introduction";
import Skills from "./sections/Skills";

const About = () => {
  return (
    <div>
      <h2 className="text-5xl font-bold mb-6">About Me</h2>
      <div>
        <Introduction className="mb-12" />
        <Skills />
      </div>
    </div>
  );
};

export default About;
