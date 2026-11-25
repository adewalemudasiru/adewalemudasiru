import { Moon, Sun } from "lucide-react";

export const DarkModeToggle = ({ isDarkMode, toggleDarkMode }) => (
  <button
    type="button"
    onClick={toggleDarkMode}
    aria-label={isDarkMode ? "Switch to light theme" : "Switch to dark theme"}
    className="grid size-11 place-items-center rounded-full text-muted transition-colors hover:text-fg"
  >
    {/* key remounts the icon so the turn plays on every switch */}
    <span key={String(isDarkMode)} className="animate-turn">
      {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
    </span>
  </button>
);
