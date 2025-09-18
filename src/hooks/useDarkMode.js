// hooks/useDarkMode.js
import { useState, useEffect } from "react";

export const useDarkMode = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Check if we're in a browser environment
    if (typeof window !== "undefined") {
      return localStorage.getItem("theme") === "dark";
    }
    return false; // Default to light mode for SSR
  });

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Apply the theme to the document
      document.documentElement.setAttribute(
        "data-theme",
        isDarkMode ? "dark" : "light"
      );
      // Save to localStorage
      localStorage.setItem("theme", isDarkMode ? "dark" : "light");
    }
  }, [isDarkMode]);

  return [isDarkMode, toggleDarkMode];
};
