import { myData } from "../../../components/data/allData";
import { CodeXml } from "lucide-react";

const Skills = () => {
  return (
    <div>
      <h3 className="flex items-center space-x-2 text-2xl text-textSecondary font-bold mb-3">
        <CodeXml className="text-teal-500" />
        <span>Skills</span>
      </h3>
      <div className="grid grid-cols-2 gap-4">
        {myData.stack.map((skill) => (
          <div
            key={skill.name}
            className="group relative transition-all duration-500 hover:scale-105"
          >
            {/* background */}
            <div className="absolute inset-0 w-full h-full bg-teal-500/30 rotate-1 group-hover:rotate-3 transition-transform  rounded-xl"></div>
            {/* main content */}
            <div className="relative flex items-center space-x-3 bg-cardBackground px-6 py-5 border border-borderLight rounded-xl group-hover:border group-hover:border-teal-500">
              <img src={skill.icon} alt={skill.name} className="w-5 h-5" />
              <span className="text-center text-textSecondary">
                {skill.name}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
