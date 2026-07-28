import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const words = ["Hello", "Bonjour", "Hola", "Namaste", "Swift", "Mohanraj Gopi"];

export const Preloader = ({ onComplete }: { onComplete: () => void }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < words.length - 1) {
      const timer = setTimeout(() => {
        setIndex((prev) => prev + 1);
      }, 220);
      return () => clearTimeout(timer);
    } else {
      const timer = setTimeout(() => {
        onComplete();
      }, 600);
      return () => clearTimeout(timer);
    }
  }, [index, onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
      className="fixed inset-0 z-[10000] bg-[#000000] flex items-center justify-center text-white"
    >
      <div className="flex flex-col items-center">
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.2 }}
          className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight font-sans"
        >
          {words[index]}
        </motion.div>
        
        <div className="mt-8 flex gap-1 items-center">
          <span className="w-1.5 h-1.5 rounded-full bg-[#0071E3] animate-pulse" />
          <span className="text-xs text-white/40 font-mono uppercase tracking-widest">
            iOS Engineering
          </span>
        </div>
      </div>
    </motion.div>
  );
};
