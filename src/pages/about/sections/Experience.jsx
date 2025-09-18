import { myData } from "../../../components/data/allData";
import { TechStack } from "../../../components/ui/TechStack";
import { BriefcaseBusiness } from "lucide-react";

const Experience = () => {
  return (
    <div>
      <h3 className="flex items-center space-x-2 text-2xl text-textSecondary font-bold mb-3 ">
        <BriefcaseBusiness className="text-teal-500" />
        <span>Experience</span>
      </h3>
      <div className="grid gap-6">
        {myData.experience.map((exp) => {
          return (
            <div
              key={exp.id}
              className="flex items-start gap-4 bg-cardBackground border border-borderLight hover:border-teal-500 transition-color ease-in-out duration-300 rounded-xl p-6"
            >
              <div className="p-2 bg-teal-500/10 rounded-lg">
                <exp.icon className="text-teal-500" size={20} />
              </div>
              <div className="flex-1">
                <h4 className="text-xl text-textSecondary font-bold">
                  {exp.jobTitle}
                </h4>
                <div className="flex items-center text-textPrimary gap-2 mb-2">
                  <p>{exp.company}</p>
                  <span>({exp.period})</span>
                </div>
                <p className="mb-4 text-textPrimary">{exp.description}</p>
                <TechStack technologies={exp.technologies} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Experience;
