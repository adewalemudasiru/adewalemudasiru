import { TechStack } from "../ui/TechStack";

const ProjectCard = ({ project, className = "", isMobile = false }) => {
  const projectLink = project.info[0].link;

  return (
    <div
      key={project.title}
      className={`group rounded-2xl overflow-hidden border border-borderLight hover:border hover:border-teal-500 bg-cardBackround shadow-md hover:shadow-lg transition ease-in-out duration-300 ${className}`}
    >
      {/* Image and overlay for each project */}

      <a
        href={projectLink}
        target="_blank"
        rel="noopener noreferrer"
        className="relative overflow-hidden cursor-pointer"
      >
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          decoding="async"
          className="w-full h-40 sm:h-48 md:h-52 object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-start p-4 sm:p-6 z-20">
          <div className="flex gap-3">
            {/* Links for project actions */}
            {project.info.map((item, index) => (
              <div
                key={index}
                className="bg-teal-500 p-2 rounded-lg hover:bg-teal-600 transition-colors"
              >
                <img
                  src={item.icon}
                  alt={`${project.title} action`}
                  className="w-5 h-5"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            ))}
          </div>
        </div>
      </a>

      {/* Details for each project */}
      <div className="p-4 sm:p-6">
        <a
          href={projectLink}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-teal-500 transition-colors"
        >
          <h4 className="text-lg sm:text-xl text-textSecondary font-bold mb-2 sm:mb-3 cursor-pointer">
            {project.title}
          </h4>
        </a>
        <p className="text-sm sm:text-base text-textPrimary mb-3 sm:mb-4 line-clamp-2">
          {project.description}
        </p>
        <TechStack technologies={project.stack} />
      </div>
    </div>
  );
};

export default ProjectCard;
