import React from "react";
import { myData } from "../../../components/data/allData";

const Details = () => {
  return (
    <div>
      <div>
        <h3>Experience</h3>
        <div>
          {myData.experience.map((exp) => (
            <div key={exp.company}>
              <div>
                <div>
                  <exp.icon />
                </div>
                <span>{exp.period}</span>
              </div>

              <h4>{exp.jobTitle}</h4>
              <p>{exp.company}</p>
              <p>{exp.description}</p>
              <ul>
                <li>{exp.technologies}</li>
              </ul>
            </div>
          ))}
        </div>
      </div>
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
          <h3>Education</h3>
          <div>
            {myData.education.map((edu) => (
              <div key={edu.certificate}>
                <div>
                  <div>
                    <edu.icon />
                  </div>
                  <span>{edu.certificate}</span>
                </div>
                <h4>{edu.course}</h4>
                <div>
                  <p>{edu.school}</p>
                  <span>{edu.period}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <h3>Badges</h3>
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
