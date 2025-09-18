import React from "react";
import { myData } from "../data/allData";

/**
 * Renders a list of social media icons with links.
 *
 * @param {Object} props - The component props.
 * @param {string} [props.variant="home"] - Determines the styling variant for the icons.
 * @param {string} [props.colorvariant="home"] - Determines the color variant for the icons.
 *
 * @returns {JSX.Element} A set of social media icons styled according to the provided variants.
 */

const Socials = ({ variant = "home", colorvariant = "home" }) => {
  /**
   * Returns the styling variant for the social media icons based on the provided
   * `variant` prop.
   *
   * @returns {string} A CSS class string that applies the correct styling variant
   * for the icons.
   */
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
