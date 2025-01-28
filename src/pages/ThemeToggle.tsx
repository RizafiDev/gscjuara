import React, { useState, useEffect } from "react";

const ThemeToggle: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Handle perubahan tema
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }
  };

  // Menyimpan mode gelap/terang di localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      setIsDarkMode(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
  }, [isDarkMode]);

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        isDarkMode ? "bg-gray-900 text-white" : "bg-white text-black"
      } flex items-center justify-center`}
    >
      <button
        onClick={toggleTheme}
        className="p-4 bg-gray-200 dark:bg-gray-700 rounded-full shadow-lg flex items-center justify-center"
      >
        {isDarkMode ? (
          <i className="ri-sun-line ri-xl text-white"></i>
        ) : (
          <i className="ri-moon-clear-line ri-xl text-black"></i>
        )}
      </button>
    </div>
  );
};

export default ThemeToggle;
