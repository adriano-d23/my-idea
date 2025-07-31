import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { FaLightbulb, FaMoon } from 'react-icons/fa';
import './ThemeToggle.css';

const ThemeToggle = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <button 
      className="theme-toggle" 
      onClick={toggleTheme}
      aria-label={isDarkMode ? 'Alternar para modo claro' : 'Alternar para modo escuro'}
    >
      {isDarkMode ? <FaLightbulb className="theme-icon" /> : <FaMoon className="theme-icon" />}
    </button>
  );
};

export default ThemeToggle; 