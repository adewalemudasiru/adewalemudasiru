import { TechStack } from "../ui/TechStack";

const FeaturedCard = ({ project, className = "", isMobile = false }) => {
  const projectLink = project.info[0].link;

  return (
    <div
      className={`group grid grid-cols-1 ${isMobile ? "" : "md:grid-cols-2"} rounded-2xl overflow-hidden border border-borderLight hover:border-teal-500 bg-cardBackround shadow-md hover:shadow-lg transition ease-in-out duration-300 ${className}`}
    >
      {/* Image and overlay section - now clickable */}
      <a
        href={projectLink}
        target="_blank"
        rel="noopener noreferrer"
        className="relative overflow-hidden block cursor-pointer"
      >
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-48 sm:h-64 md:h-64 object-cover"
          loading="lazy"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-start p-4 sm:p-6 z-20">
          <div className="flex gap-3 transition ease-in-out duration-300">
            {/* Action buttons - prevent click from bubbling to parent link */}
            {project.info.map((item, index) => (
              <div
                key={index}
                className="bg-teal-500 p-2 rounded-lg hover:bg-teal-600 transition-colors"
              >
                <img
                  src={item.icon}
                  alt="Action icon"
                  className="w-5 h-5"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            ))}
          </div>
        </div>
      </a>

      {/* Details section - optionally make this clickable too */}
      <div className="flex flex-col justify-center p-4 sm:p-6 md:mt-0">
        <a
          href={projectLink}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-teal-500 transition-colors"
        >
          <h4 className="text-xl sm:text-2xl text-textSecondary font-bold mb-2 sm:mb-3 cursor-pointer">
            {project.title}
          </h4>
        </a>
        <p className="text-sm sm:text-base md:text-lg text-textPrimary mb-3 sm:mb-4 line-clamp-3">
          {project.description}
        </p>

        <TechStack technologies={project.stack} />
      </div>
    </div>
  );
};

export default FeaturedCard;
