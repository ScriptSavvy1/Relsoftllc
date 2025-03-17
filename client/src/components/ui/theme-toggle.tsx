import React from "react";
import { useTheme } from "@/hooks/use-theme-toggle";

export function ThemeToggle() {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
      aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
    >
      {isDarkMode ? (
        <i className="fas fa-moon text-yellow-300"></i>
      ) : (
        <i className="fas fa-sun text-orange-500"></i>
      )}
    </button>
  );
}
