import { myData } from "../../components/data/allData";
import FeaturedCard from "../../components/shared/FeaturedCard";
import ProjectCard from "../../components/shared/ProjectCard";

const Projects = ({ isMobile = false }) => {
  const [firsProject, ...restOfProjects] = myData.projects;
  // Render the Projects page, showcasing the latest project and a list of all projects.
  return (
    <div>
      {/* Header section with title and description */}
      <div className="px-2">
        <h2 className="text-center text-3xl sm:text-4xl md:text-5xl text-textSecondary font-bold mb-4 sm:mb-6">
          Projects
        </h2>
        <p className="max-w-2xl mx-auto text-center text-sm sm:text-base md:text-lg text-textPrimary leading-relaxed mb-8 sm:mb-12">
          Explore my portfolio of projects showcasing my expertise in web
          development, from responsive applications to innovative solutions
          using modern technologies.
        </p>
      </div>

      {/* Latest project section */}
      <div className="mb-8 sm:mb-12">
        <h3 className="text-xl sm:text-2xl text-textSecondary font-bold mb-3 px-2">
          Latest Project
        </h3>
        <FeaturedCard
          project={firsProject}
          className="mt-6 sm:mt-12"
          isMobile={isMobile}
        />
      </div>

      {/* All projects listing */}
      <div>
        <h3 className="text-xl sm:text-2xl text-textSecondary font-bold mb-3 px-2">
          All Projects
        </h3>
        <div
          className={`${isMobile ? "grid grid-cols-1 gap-4 sm:gap-6" : "grid md:grid-cols-2 lg:grid-cols-3 gap-6"}`}
        >
          {/* Render each project in the list */}
          {restOfProjects.map((project) => (
            <ProjectCard
              project={project}
              key={project.title}
              isMobile={isMobile}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
