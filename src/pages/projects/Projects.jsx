import React from "react";
import { myData } from "../../components/data/allData";
import { TechStack } from "../../components/ui/TechStack";

const Projects = () => {
  const [firsProject, ...restOfProjects] = myData.projects;
  return (
    <div>
      <div>
        <h2 className="text-center text-5xl text-textSecondary font-bold mb-6">
          Projects
        </h2>
        <p className="max-w-2xl mx-auto text-center text-lg text-textPrimary leading-relaxed mb-12">
          Explore my portfolio of projects showcasing my expertise in web
          development, from responsive applications to innovative solutions
          using modern technologies.
        </p>
      </div>
      <div className="mb-12">
        <h3 className="text-2xl text-textSecondary font-bold mb-3">
          Latest Project
        </h3>
        <div className="group grid grid-cols-1 md:grid-cols-2 rounded-2xl overflow-hidden border border-borderLight hover:border-teal-500 bg-cardBackround shadow-md hover:shadow-lg transition ease-in-out duration-300">
          <div className="relative overflow-hidden ">
            <img
              src={firsProject.image}
              alt={firsProject.title}
              className="w-full h-64 object-cover"
              loading="lazy"
              decoding="async"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100  transition-opacity duration-300 flex items-end justify-start p-6 z-20">
              <div className="flex gap-3 transition ease-in-out duration-300">
                {firsProject.info.map((item) => (
                  <a href={item.link} className="bg-teal-500 p-2 rounded-lg">
                    <img
                      src={item.icon}
                      className="w-5 h-5"
                      loading="lazy"
                      decoding="async"
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center p-6 mt-6 md:mt-0">
            <h4 className="text-2xl text-textSecondary font-bold mb-3">
              {firsProject.title}
            </h4>
            <p className="text-lg text-textPrimary mb-4">
              {firsProject.description}
            </p>
            <ul className="flex gap-3 mt-auto">
              {firsProject.stack.map((item) => (
                <li className="text-xs text-textPrimary tracking-wide font-semibold bg-teal-500/20 px-2 py-1 rounded-full">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div>
        <h3 className="text-2xl text-textSecondary font-bold mb-3">
          All Projects
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {restOfProjects.map((project) => (
            <div className="group rounded-2xl overflow-hidden border border-borderLight hover:border hover:border-teal-500 bg-cardBackround shadow-md hover:shadow-lg transition ease-in-out duration-300">
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  decoding="async"
                  className=" w-full h-52 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100  transition-opacity duration-300 flex items-end justify-start p-6 z-20">
                  <div className="flex gap-3">
                    {project.info.map((item) => (
                      <a
                        href={item.link}
                        className="bg-teal-500 p-2 rounded-lg"
                      >
                        <img
                          src={item.icon}
                          className="w-5 h-5"
                          loading="lazy"
                          decoding="async"
                        />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h4 className="text-xl text-textSecondary font-bold mb-3">
                  {project.title}
                </h4>
                <p className="text-md text-textPrimary mb-4">
                  {project.description}
                </p>
                <TechStack technologies={project.stack} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
