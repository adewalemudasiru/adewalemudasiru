import React from "react";
import { myData } from "../data/aboutData";

const Skills = () => {
  return (
    <div>
      <h3 className="text-2xl font-bold mt-12">Skills</h3>
      <div className="flex flex-wrap justify-center gap-4">
        {myData.stack.map((skill) => (
          <div
            key={skill.name}
            className="flex flex-col items-center justify-center aspect-square w-[calc(50%-0.5rem)] sm:w-[calc(33.333%-0.75rem)] md:w-[calc(25%-0.75rem)] gap-3 bg-amber-50 p-4 rounded-xl"
          >
            <img src={skill.icon} alt={skill.name} className="w-8 h-8" />
            <span className="text-center">{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
