import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu } from "lucide-react";
import { DesktopNavigation, MobileNavigation } from "../navigation/index";
import { DarkModeToggle } from "../../components/ui/DarkModeToggle";
import { useDarkMode } from "../../hooks/useDarkMode";
import { useLockScroll } from "../../hooks/useLockScroll";
import { twMerge } from "tailwind-merge";

const Header = ({ isMobile = false }) => {
  const [isDarkMode, toggleDarkMode] = useDarkMode();
  const [showMobileNavigation, setShowMobileNavigation] = useState(false);
  useLockScroll(showMobileNavigation);

  return (
    <div
      className={twMerge(
        "w-full flex justify-between md:justify-normal items-center p-4 relative",
        isMobile
          ? "bg-backgroundMain/50 backdrop-blur-lg"
          : "max-w-6xl mx-auto px-4 sm:px-6 lg:px-8",
      )}
    >
      <Link
        to={"/"}
        className="cursor-pointer shrink-0 rounded-sm md:bg-backgroundMain/50 md:backdrop-blur-lg "
      >
        <h1 className="md:w-14 md:h-12 flex justify-center items-center text-xl sm:text-2xl text-center font-bold text-textSecondary ">
          AM
        </h1>
      </Link>
      <div className="hidden md:block flex-grow h-[1px] bg-line" />
      <div className="flex items-center gap-2 sm:gap-3">
        <DesktopNavigation />
        <DarkModeToggle
          isDarkMode={isDarkMode}
          toggleDarkMode={toggleDarkMode}
        />
        <div
          className="md:hidden p-1 sm:p-1.5 hover:bg-cardBackground text-textSecondary rounded-md cursor-pointer"
          onClick={() => setShowMobileNavigation(true)}
        >
          <Menu size={28} className="sm:w-8 sm:h-8" />
        </div>
      </div>

      {showMobileNavigation && (
        <MobileNavigation
          isOpen={showMobileNavigation}
          onClose={() => setShowMobileNavigation(false)}
        />
      )}
    </div>
  );
};

export default Header;
