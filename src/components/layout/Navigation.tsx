'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ThemeToggle from './ThemeToggle';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <span className="text-2xl font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
            ABC
          </span>

          <div className="hidden md:flex items-center space-x-8">
            {['Home', 'About', 'Services', 'Experience', 'Skills', 'Projects', 'Contact'].map((label) => (
              <a key={label} href={`#${label.toLowerCase()}`} className="text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-primary transition-all">
                {label}
              </a>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <button className="md:hidden text-gray-700 dark:text-gray-200" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? '×' : '☰'}
            </button>
          </div>
        </div>
      </div>

      <motion.div
        animate={isOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
        transition={{ duration: 0.3 }}
        className={`md:hidden overflow-hidden bg-white dark:bg-gray-900 shadow-lg`}
      >
        {['Home', 'About', 'Services', 'Experience', 'Skills', 'Projects', 'Contact'].map((label) => (
          <a key={label} href={`#${label.toLowerCase()}`} className="block py-3 text-gray-700 dark:text-gray-200 hover:text-primary" onClick={() => setIsOpen(false)}>
            {label}
          </a>
        ))}
      </motion.div>
    </motion.nav>
  );
};

export default Navigation;
