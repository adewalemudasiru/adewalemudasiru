import { useState, useEffect } from "react";

// index.html sets data-theme before paint (saved choice, else OS preference); this hook takes over from there.
export const useDarkMode = () => {
  const [isDarkMode, setIsDarkMode] = useState(
    () => document.documentElement.dataset.theme === "dark",
  );

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => {
      localStorage.setItem("theme", prev ? "light" : "dark");
      return !prev;
    });
  };

  useEffect(() => {
    document.documentElement.dataset.theme = isDarkMode ? "dark" : "light";
  }, [isDarkMode]);

  return [isDarkMode, toggleDarkMode];
};
