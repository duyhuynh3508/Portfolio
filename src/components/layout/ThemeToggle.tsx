'use client';

import { useState, useEffect } from 'react';
import { Moon, Sun } from 'lucide-react';

const ThemeToggle = () => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const isDark = document.documentElement.classList.contains('dark');
    setTheme(isDark ? 'dark' : 'light');
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-3 rounded-full transition-all transform hover:scale-105 bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 hover:bg-gray-300 shadow-lg"
      aria-label="Toggle theme"
    >
      {theme === 'light' ? (
        <Moon size={22} className="text-gray-600 dark:text-gray-300" />
      ) : (
        <Sun size={22} className="text-yellow-500 dark:text-yellow-300" />
      )}
    </button>
  );
};

export default ThemeToggle;
