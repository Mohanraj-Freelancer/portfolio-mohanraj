import { useState, useEffect } from 'react';
import { Menu, X, Apple } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { ThemeToggle } from './ThemeToggle';

const navItems = [
  { label: 'Home', href: '#' },
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
];

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4 md:pt-6 transition-all duration-500 pointer-events-none">
      <motion.nav
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`pointer-events-auto transition-all duration-500 rounded-full border shadow-apple dark:shadow-apple-dark ${
          isScrolled
            ? 'apple-glass py-2 px-5 md:px-7 border-black/10 dark:border-white/15 scale-95 md:scale-100'
            : 'bg-white/60 dark:bg-black/60 apple-glass py-3 px-6 md:px-8 border-black/5 dark:border-white/10'
        }`}
      >
        <div className="flex items-center gap-4 md:gap-8">
          {/* Apple / MG Logo */}
          <a
            href="#"
            className="flex items-center gap-2 text-[#1D1D1F] dark:text-[#F5F5F7] hover:text-[#0071E3] dark:hover:text-[#2997FF] transition-colors group"
          >
            <div className="w-7 h-7 rounded-full bg-[#1D1D1F] dark:bg-[#F5F5F7] text-white dark:text-black flex items-center justify-center font-semibold text-xs group-hover:bg-[#0071E3] dark:group-hover:bg-[#2997FF] group-hover:text-white transition-colors">
              <Apple className="w-3.5 h-3.5 fill-current" />
            </div>
            <span className="font-semibold text-sm tracking-tight hidden sm:inline-block">
              Mohanraj Gopi
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <ul className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="text-xs md:text-sm font-normal text-[#6E6E73] dark:text-[#86868B] hover:text-[#1D1D1F] dark:hover:text-[#F5F5F7] transition-colors duration-200 tracking-tight"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Controls & CTA */}
          <div className="flex items-center gap-3">
            <ThemeToggle />

            <a
              href="/Mohanraj_Resume.pdf"
              download="Mohanraj_Gopi_Resume.pdf"
              className="hidden sm:inline-flex items-center justify-center px-4 py-1.5 rounded-full text-xs font-medium bg-[#0071E3] hover:bg-[#0077ED] dark:bg-[#0071E3] text-white shadow-sm transition-all hover:scale-105 active:scale-95"
            >
              Resume
            </a>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden text-[#1D1D1F] dark:text-[#F5F5F7] p-1.5 focus:outline-none"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.25 }}
            className="pointer-events-auto absolute top-20 left-4 right-4 apple-glass rounded-3xl p-6 border border-black/10 dark:border-white/15 shadow-2xl lg:hidden flex flex-col gap-4 text-center"
          >
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-base font-medium text-[#1D1D1F] dark:text-[#F5F5F7] py-2 border-b border-black/5 dark:border-white/5 last:border-0 hover:text-[#0071E3] transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href="/Mohanraj_Resume.pdf"
              download="Mohanraj_Gopi_Resume.pdf"
              className="mt-2 w-full py-3 rounded-full text-sm font-medium bg-[#0071E3] text-white text-center shadow-md"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Download Resume
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
