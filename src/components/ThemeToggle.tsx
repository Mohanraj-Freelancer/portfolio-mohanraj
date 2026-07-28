import { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';
import { motion } from 'framer-motion';

export const ThemeToggle = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');

  useEffect(() => {
    const isLight = !document.documentElement.classList.contains('dark');
    setTheme(isLight ? 'light' : 'dark');
  }, []);

  const toggleTheme = () => {
    if (theme === 'dark') {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('apple-portfolio-theme', 'light');
      setTheme('light');
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('apple-portfolio-theme', 'dark');
      setTheme('dark');
    }
  };

  return (
    <motion.button
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.94 }}
      onClick={toggleTheme}
      aria-label="Toggle dark and light mode"
      className="p-2 rounded-full border border-black/10 dark:border-white/15 bg-black/5 dark:bg-white/10 backdrop-blur-md text-[#1D1D1F] dark:text-[#F5F5F7] hover:border-[#0071E3] transition-colors"
    >
      {theme === 'dark' ? (
        <Sun className="w-4 h-4 text-[#F5F5F7]" />
      ) : (
        <Moon className="w-4 h-4 text-[#1D1D1F]" />
      )}
    </motion.button>
  );
};
