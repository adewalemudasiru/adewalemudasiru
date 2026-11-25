import { useState } from "react";
import { DesktopNavigation, MobileNavigation } from "../navigation/index";
import { DarkModeToggle } from "../../components/ui/DarkModeToggle";
import { useDarkMode } from "../../hooks/useDarkMode";
import { profile } from "../../components/data/allData";

const Header = () => {
  const [isDarkMode, toggleDarkMode] = useDarkMode();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    // Solid bg, no backdrop-filter: a filter would become the containing block for the fixed mobile menu.
    <header className="sticky top-0 z-40 border-b border-line bg-bg">
      <div className="container-page flex h-16 items-center justify-between gap-6">
        <a
          href="/#top"
          className="font-display text-2xl leading-none tracking-tight"
          onClick={() => setMenuOpen(false)}
        >
          {profile.name}
        </a>
        <div className="flex items-center gap-2 md:gap-6">
          <DesktopNavigation />
          <DarkModeToggle isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
          <MobileNavigation open={menuOpen} setOpen={setMenuOpen} />
        </div>
      </div>
    </header>
  );
};

export default Header;
