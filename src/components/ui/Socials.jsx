import { myData } from "../data/allData";
const Socials = ({ variant = "home", colorvariant = "home" }) => {
  const getVariant = () => {
    switch (variant) {
      case "home":
        return "p-3 border border-borderLight hover:border-teal-500 rounded-lg bg-iconBackground transition-transform ease-out duration-200 cursor-pointer";
      case "footer":
        return "p-3 bg-teal-500/10 hover:bg-teal-500/20 rounded-lg transition-transform ease-out duration-200 cursor-pointer";
      default:
        return "";
    }
  };

  /**
   * Returns the color variant for the social media icons based on the provided
   * `colorvariant` prop.
   *
   * @returns {string} A CSS class string that applies the correct color variant
   * for the icons.
   */
  const getColor = () => {
    switch (colorvariant) {
      case "home":
        return "text-[var(--color-iconColor)]";
      case "footer":
        return "text-[var(--color-darkIconColor)]";
      default:
        return "";
    }
  };

  return (
    <div className="flex gap-3">
      {myData.social.map((icon) => (
        <a
          key={icon.name}
          href={icon.link}
          rel="noopener noreferrer"
          aria-label={icon.name}
          className={`group  ${getVariant()}`}
        >
          <icon.name size={20} className={`${getColor()}`} />
        </a>
      ))}
    </div>
  );
};

export default Socials;
