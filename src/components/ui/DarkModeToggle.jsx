import React, { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";

export const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") || "light";
  });

  const toggleDarkMode = () => {
    const newTheme = darkMode === "light" ? "dark" : "light";
    setDarkMode(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", darkMode);
  }, [darkMode]);

  return (
    <button
      onClick={toggleDarkMode}
      aria-label={darkMode === "dark" ? "Dark Mode" : "Light Mode"}
      className="cursor-pointer bg-gray-100 p-2 hover:bg-gray-100 rounded-full transition-colors"
    >
      <div
        className="transform transition-transform duration-300 ease-in-out"
        style={{ transform: `rotate(${darkMode === "dark" ? 360 : -180}deg)` }}
      >
        {darkMode === "dark" ? (
          <Moon size={20} className="text-[#0f8dca] " />
        ) : (
          <Sun size={20} className="text-yellow-500" />
        )}
      </div>
    </button>
  );
};
