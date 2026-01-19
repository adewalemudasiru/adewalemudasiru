import { myData } from "../../components/data/allData";
import { NavLink } from "react-router-dom";

const Navigation = () => {
 
  return (
    <div className="h-12 hidden md:flex">
      <ul className="h-full bg-backgroudAlt flex justify-center items-center gap-6 py-2 px-6 border border-borderLight rounded-full shadow-lg backdrop-blur-md ">
        {myData.navItems.map((item) => (
          <li key={item.id} className="cursor-pointer font-semibold">
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                `group transition-colors ease-in-out duration-300 ${
                  isActive ? "text-teal-500" : "text-black hover:text-teal-500"
                }`
              }
            >
              <div className="group flex flex-col items-center transition duration-300">
                <item.icon
                  size={20}
                  className="text-[var(--color-iconColor)] group-hover:text-teal-500 group-focus:text-teal-500 group-[.text-teal-500]:text-teal-500 transition-colors duration-300"
                />
                <span
                  className="text-xs opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-6 transition-all duration-300"
                  style={{ transitionProperty: "opacity, max-height" }}
                >
                  {item.name}
                </span>
              </div>
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navigation;
