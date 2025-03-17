import React from "react";
import { navItems } from "../data/navigationData";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="flex justify-center fixed top-6 left-1/2 -translate-x-1/2 z-50">
      <ul className="bg-white/70 flex justify-center gap-10 text-white py-4 px-6 rounded-full shadow-lg backdrop-blur-sm ">
        {navItems.map((item) => (
          <li key={item.id} className="cursor-pointer font-semibold">
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                isActive
                  ? "text-teal-500 transition-colors ease-in-out duration-300"
                  : "text-black hover:text-teal-500 transition-colors ease-in-out duration-300"
              }
            >
              <item.icon size={20} />
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navigation;
