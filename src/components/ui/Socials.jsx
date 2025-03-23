import React from "react";
import { myData } from "../data/allData";

const Socials = ({ variant = "default" }) => {
  const getVariant = () => {
    switch (variant) {
      case "home":
        return "";
      case "footer":
        return "";
      default:
        return "";
    }
  };
  return (
    <div className="flex gap-3">
      {myData.social.map((icon) => (
        <div
          key={icon.name}
          className={`p-3 border border-borderLight hover:border-teal-500 rounded-lg bg-iconBackground transition-transform ease-out duration-200 cursor-pointer`}
        >
          <a
            href={icon.link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={icon.name}
          >
            <icon.name size={20} style={{ color: "var(--color-iconColor)" }} />
          </a>
        </div>
      ))}
    </div>
  );
};

export default Socials;
