import { TechStack } from "../ui/TechStack";

const ProjectCard = ({ project, className = "" }) => {
  return (
    <div
      key={project.title}
      className={`group rounded-2xl overflow-hidden border border-borderLight hover:border hover:border-teal-500 bg-cardBackround shadow-md hover:shadow-lg transition ease-in-out duration-300 cursor-pointer ${className}`}
    >
      {/* Image and overlay for each project */}
      <div className="relative overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          decoding="async"
          className="w-full h-52 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-start p-6 z-20">
          <div className="flex gap-3">
            {/* Links for project actions */}
            {project.info.map((item, index) => (
              <a
                key={index}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-teal-500 p-2 rounded-lg hover:bg-teal-600 transition-colors"
              >
                <img
                  src={item.icon}
                  alt={`${project.title} action`}
                  className="w-5 h-5"
                  loading="lazy"
                  decoding="async"
                />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Details for each project */}
      <div className="p-6">
        <h4 className="text-xl text-textSecondary font-bold mb-3">
          {project.title}
        </h4>
        <p className="text-md text-textPrimary mb-4">{project.description}</p>
        <TechStack technologies={project.stack} />
      </div>
    </div>
  );
};

export default ProjectCard;
