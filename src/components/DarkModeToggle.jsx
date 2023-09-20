import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

const DarkModeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    const savedTheme = localStorage.getItem("color-theme");
    if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      setIsDarkMode(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !isDarkMode;
    setIsDarkMode(newDarkMode);

    const html = document.documentElement;
    if (newDarkMode) {
      html.classList.add("dark");
      localStorage.setItem("color-theme", "dark");
    } else {
      html.classList.remove("dark");
      localStorage.setItem("color-theme", "light");
    }
  };

  return (
    <div className="dark-mode-toggle p-2">
      <div className="cursor-pointer" onClick={toggleDarkMode}>
        {isDarkMode ? (
          <FontAwesomeIcon icon={faSun} className="text-white text-2xl" />
        ) : (
          <FontAwesomeIcon icon={faMoon} className="text-blue-800 text-2xl" />
        )}
      </div>
    </div>
  );
};

export default DarkModeToggle;
