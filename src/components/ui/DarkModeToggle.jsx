// components/ui/DarkModeToggle.jsx
import { Moon, Sun } from "lucide-react";

export const DarkModeToggle = ({ isDarkMode, toggleDarkMode }) => {
  return (
    <button
      onClick={toggleDarkMode}
      aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
      className="group cursor-pointer bg-gray-100 p-2 hover:bg-gray-100 rounded-full transition-colors dark:bg-gray-800 dark:hover:bg-gray-700"
    >
      <div
        className="transform transition-transform duration-300 ease-in-out group-hover:scale-120"
        style={{ transform: `rotate(${isDarkMode ? 360 : -180}deg)` }}
      >
        {isDarkMode ? (
          <Moon size={20} className="text-[#0f8dca]" />
        ) : (
          <Sun size={20} className="text-yellow-500" />
        )}
      </div>
    </button>
  );
};
