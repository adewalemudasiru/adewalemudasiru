import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu } from "lucide-react";
import { DesktopNavigation, MobileNavigation } from "../navigation/index";
import { DarkModeToggle } from "../../components/ui/DarkModeToggle";
import { useDarkMode } from "../../hooks/useDarkMode";
import { useLockScroll } from "../../hooks/useLockScroll";

const Header = () => {
  const [isDarkMode, toggleDarkMode] = useDarkMode();
  const [showMobileNavigation, setShowMobileNavigation] = useState(false);
  useLockScroll(showMobileNavigation);

  return (
    <div className="flex justify-between md:justify-normal items-center relative ">
      <Link to={"/"} className="cursor-pointer">
        <h1 className="text-2xl font-bold text-textSecondary mr-4">AM</h1>
      </Link>
      <div className="hidden md:block flex-grow h-[1px] bg-line" />
      <div className="flex items-center gap-3">
        <DesktopNavigation />
        <DarkModeToggle
          isDarkMode={isDarkMode}
          toggleDarkMode={toggleDarkMode}
        />
        <div
          className="md:hidden p-1.5 hover:bg-cardBackground text-textSecondary rounded-md cursor-pointer"
          onClick={() => setShowMobileNavigation(true)}
        >
          <Menu size={32} />
        </div>
      </div>

      <MobileNavigation
        isOpen={showMobileNavigation}
        onClose={() => setShowMobileNavigation(false)}
      />
    </div>
  );
};

export default Header;
