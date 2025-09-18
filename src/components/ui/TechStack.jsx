export const TechStack = ({ technologies = [], maxDisplay = 3 }) => {
  const displayedTech = technologies.slice(0, maxDisplay);
  const remainingCount = Math.max(0, technologies.length - maxDisplay);

  return (
    <ul className="flex flex-wrap text-textPrimary font-semibold gap-4 mt-auto">
      {displayedTech.map((tech, index) => (
        <li
          key={index}
          className="text-xs tracking-wide bg-teal-500/10 py-1 px-2 rounded-lg"
        >
          {tech}
        </li>
      ))}
      {remainingCount > 0 && (
        <li className="text-xs tracking-wide bg-teal-500/10 py-1 px-2 rounded-lg">
          +{remainingCount}
        </li>
      )}
    </ul>
  );
};
