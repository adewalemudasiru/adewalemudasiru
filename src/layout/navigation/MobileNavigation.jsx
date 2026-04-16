import { Button } from "../../components/ui/Button";
import { X } from "lucide-react";
import { myData } from "../../components/data/allData";
import { NavLink } from "react-router-dom";
import Socials from "../../components/ui/Socials";
import { twMerge } from "tailwind-merge";

const MobileNavigation = ({ isOpen, onClose }) => {
  return (
    <aside
      className={twMerge(
        "fixed top-0 right-0 bg-backgroundMain",
        "h-svh w-full flex flex-col z-50 p-4 sm:p-6 md:hidden",
        "transform transition-transform duration-300 ease-in-out",
        isOpen ? "translate-x-0" : "translate-x-full",
        "overflow-y-auto",
      )}
    >
      <div className="flex justify-end">
        <Button variant="ghost" onClick={onClose}>
          <X size={32} />
        </Button>
      </div>

      <ul className="mt-8 space-y-4">
        {myData.navItems.map((item) => (
          <li key={item.id}>
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                `text-xl sm:text-2xl font-semibold block py-2 ${
                  isActive
                    ? "text-teal-500"
                    : "text-textSecondary hover:text-teal-500"
                }`
              }
              onClick={onClose}
            >
              {item.name}
            </NavLink>
          </li>
        ))}
      </ul>

      <div className="mt-auto pt-8 pb-6">
        <h3 className="mb-4 text-textSecondary font-semibold text-sm sm:text-base">
          Connect
        </h3>
        <Socials />
      </div>
    </aside>
  );
};

export default MobileNavigation;
