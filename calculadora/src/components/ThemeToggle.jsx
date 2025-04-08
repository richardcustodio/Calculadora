import React, { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import "./ThemeToggle.css"; // Vamos criar este arquivo CSS

function ThemeToggle() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className="theme-toggle-container">
      <button onClick={toggleTheme} className="theme-toggle-button">
        {theme === "dark" ? "Tema Claro" : "Tema Escuro"}
      </button>
    </div>
  );
}

export default ThemeToggle;
