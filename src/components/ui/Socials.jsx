import React from "react";
import { myData } from "../data/allData";

const Socials = ({ variant = "default" }) => {
  const getVariant = () => {
    switch (variant) {
      case "home":
        return "bg-teal-50 p-2 border border-gray-100 transition-colors ease-in-out duration-500 hover:border-teal-500 rounded-md";
      case "footer":
        return "bg-teal-50 p-2 rounded-md";
      default:
        return "bg-teal-50 text-teal-500";
    }
  };
  return (
    <div className="flex gap-3">
      {myData.social.map((icon) => (
        <div key={icon.name} className={`${getVariant()}  cursor-pointer`}>
          <a
            href={icon.link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={icon.name}
          >
            <img src={icon.logo} alt={icon.name} className="w-5 h-5" />
          </a>
        </div>
      ))}
    </div>
  );
};

export default Socials;
