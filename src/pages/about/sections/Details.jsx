import React from "react";
import { myData } from "../../../components/data/allData";
import { TechStack } from "../../../components/ui/TechStack";

/**
 * A component that renders my experience, skills, education, and badges on the
 * about page.
 *
 * @returns {React.ReactElement} The Details component.
 */
const Details = () => {
  return (
    <div className="mt-12 grid md:grid-cols-2 gap-12">
      <div>
        <h3 className="text-2xl text-textSecondary font-bold mb-3 ">
          Experience
        </h3>
        <div className="grid gap-6">
          {myData.experience.map((exp) => {
            return (
              <div
                key={exp.company}
                className="flex items-start gap-4 bg-cardBackground border border-borderLight rounded-xl p-6"
              >
                <div className="p-2 bg-teal-500/10 rounded-lg">
                  <exp.icon color="teal" size={20} />
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

      <div className="space-y-12">
        <div>
          <h3 className="text-2xl text-textSecondary font-bold mb-3">Skills</h3>
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

        <div>
          <h3 className="text-2xl text-textSecondary font-bold mb-3">
            Education
          </h3>
          <div className="grid gap-4">
            {myData.education.map((edu) => (
              <div
                key={edu.certificate}
                className="flex items-start gap-3 bg-cardBackground p-6 rounded-2xl border border-borderLight hover:border-teal-500 transition-all ease-in-out duration-500"
              >
                <div className="bg-teal-500/10 p-2 rounded-lg">
                  <edu.icon color="teal" />
                </div>
                <div className="w-full">
                  <span className="text-textPrimary">{edu.certificate}</span>
                  <h4 className="flex-1 text-xl text-textSecondary font-bold">
                    {edu.course}
                  </h4>
                  <div className="flex justify-between items-center text-textPrimary">
                    <p>{edu.school}</p>
                    <span>{edu.period}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl text-textSecondary font-bold mb-3">Badges</h3>
          <div>
            {myData.badges.map((badge) => (
              <div className="p-6 bg-cardBackground border border-borderLight rounded-2xl hover:border-teal-500 transition-all ease-in-out duration-500">
                <div className="flex items-center gap-3">
                  <div className="bg-teal-500/10 p-2 rounded-lg">
                    <badge.icon color="teal" />
                  </div>

                  <div>
                    <span className="text-textPrimary">{badge.subtitle}</span>
                    <div className="text-textSecondary">{badge.title}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
