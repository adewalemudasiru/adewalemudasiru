import React from "react";
import { myData } from "../../components/data/allData";

const Projects = () => {
  const [firsProject, ...restOfProjects] = myData.projects;
  return (
    <div>
      <div>
        <h2 className="text-center text-5xl font-bold mb-6">Projects</h2>
        <p className="max-w-2xl mx-auto text-center text-lg leading-relaxed mb-12">
          Explore my portfolio of projects showcasing my expertise in web
          development, from responsive applications to innovative solutions
          using modern technologies.
        </p>
      </div>
      <div className="mb-12">
        <h3 className="text-2xl font-bold mb-3">Latest Project</h3>
        <div className="grid grid-cols-1 md:grid-cols-2  gap-12 rounded-2xl bg-red-500 overflow-hidden">
          <div>
            <img src={firsProject.image} alt={firsProject.title} />
          </div>
          <div className="flex flex-col justify-center p-6">
            <h4 className="text-2xl font-bold">{firsProject.title}</h4>
            <p className="mb-4">{firsProject.description}</p>
            <span className="flex flex-col gap-2 mt-auto">
              {firsProject.stack.map((item) => item)}
            </span>
          </div>
        </div>
      </div>
      <div>
        <h3 className="text-2xl font-bold mb-3">All Projects</h3>
        <div>
          {restOfProjects.map((project) => (
            <div>
              <img src={project.image} alt={project.title} />
              <div>
                <h4>{project.title}</h4>
                <p>{project.description}</p>
                <span className="flex flex-col gap-2">
                  {project.stack.map((item) => item)}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
