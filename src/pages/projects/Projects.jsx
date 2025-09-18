import { myData } from "../../components/data/allData";
import FeaturedCard from "../../components/shared/FeaturedCard";
import ProjectCard from "../../components/shared/ProjectCard";

const Projects = () => {
  const [firsProject, ...restOfProjects] = myData.projects;
  // Render the Projects page, showcasing the latest project and a list of all projects.
  return (
    <div>
      {/* Header section with title and description */}
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

      {/* Latest project section */}
      <div className="mb-12">
        <h3 className="text-2xl text-textSecondary font-bold mb-3">
          Latest Project
        </h3>
        <FeaturedCard project={firsProject} className="mt-12" />
      </div>

      {/* All projects listing */}
      <div>
        <h3 className="text-2xl text-textSecondary font-bold mb-3">
          All Projects
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Render each project in the list */}
          {restOfProjects.map((project) => (
            <ProjectCard project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
