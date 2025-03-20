import React from "react";
import { myData } from "../../../components/data/allData";

const Details = () => {
  return (
    <div>
      <div>
        <h3 className="text-2xl font-bold mb-3">Experience</h3>
        <div className="grid gap-6">
          {myData.experience.map((exp) => (
            <div key={exp.company} className="bg-amber-50 p-6">
              <div className="flex items-center gap-4 mb-1">
                <div>
                  <exp.icon size={20} />
                </div>
                <span>{exp.period}</span>
              </div>

              <h4 className="text-xl font-bold mt-2">{exp.jobTitle}</h4>
              <p>{exp.company}</p>
              <p className="mb-4">{exp.description}</p>
              <ul className="flex gap-4 ">
                {exp.technologies.map((tech) => (
                  <li className="text-sm bg-teal-50 p-2 rounded-lg">{tech}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className=" mt-12">
        <h3 className="text-2xl font-bold mb-3">Skills</h3>
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
        <h3 className="text-2xl font-bold mb-3">Education</h3>
        <div className="grid gap-4">
          {myData.education.map((edu) => (
            <div key={edu.certificate} className="bg-amber-50 p-6 rounded-2xl">
              <div className="flex items-center gap-4">
                <div>
                  <edu.icon />
                </div>
                <span>{edu.certificate}</span>
              </div>
              <h4 className="text-xl font-bold">{edu.course}</h4>
              <div className="flex justify-between items-center">
                <p>{edu.school}</p>
                <span>{edu.period}</span>
              </div>
            </div>
          ))}
        </div>
        <h3 className="text-2xl font-bold mb-3">Badges</h3>
        <div>
          {myData.badges.map((badge) => (
            <div>
              <div>
                <badge.icon />
                <span>{badge.subtitle}</span>
              </div>
              <div>{badge.title}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Details;
