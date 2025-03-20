import React from "react";
import { myData } from "../../components/data/allData";
// import Input from "../../components/elements/form/Input";
// import TextArea from "../../components/elements/form/TextArea";

const Projects = () => {
  const [firsProject, ...restOfProjects] = myData.projects;
  return (
    <div>
      <div className="mb-12 w-full">
        <h2 className="text-center text-5xl font-bold mb-6">Projects</h2>
        <div className="grid space-y-8 w-full">
          {myData.contact.map((item) => (
            <div className="flex items-center p-4 gap-4 bg-amber-50 rounded-2xl w-full">
              <div>
                <item.icon size={20} />
              </div>
              <div>
                <h4 className="text-sm tracking-widest">{item.name}</h4>
                <p className="text-md font-semibold">{item.value}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mb-12"></div>
      <div>
        <h3 className="text-2xl font-bold mb-3">All Projects</h3>
        <div className="w-full"></div>
      </div>
    </div>
  );
};

export default Projects;
