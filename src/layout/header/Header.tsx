import { Menu } from "lucide-react";
import Navigation from "../navigation/Navigation";
import { DarkModeToggle } from "../../components/ui/DarkModeToggle";
import { useDarkMode } from "../../hooks/useDarkMode";

const Header = () => {
  const [isDarkMode, toggleDarkMode] = useDarkMode();
  return (
    <div className="flex justify-between md:justify-normal items-center">
      <h1 className="text-2xl font-bold text-textSecondary mr-4">AM</h1>
      <div className="hidden md:block flex-grow h-[1px] bg-line" />
      <div className="flex items-center gap-3">
        <Navigation />
        <DarkModeToggle
          isDarkMode={isDarkMode}
          toggleDarkMode={toggleDarkMode}
        />
        <div
          className="md:hidden p-1.5 hover:bg-cardBackground text-textSecondary rounded-md cursor-pointer"
          onClick={() => console.log("menu opened")}
        >
          <Menu size={32} />
        </div>
      </div>
    </div>
  );
};

export default Header;
