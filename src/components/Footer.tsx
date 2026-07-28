import { Apple, Heart } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="py-12 bg-[#000000] text-[#86868B] border-t border-white/10 text-xs font-normal">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-white">
              <Apple size={12} />
            </div>
            <span>
              Copyright © {new Date().getFullYear()} Mohanraj Gopi. All rights reserved.
            </span>
          </div>

          <div className="flex items-center gap-1.5 text-white/70">
            <span>Built with</span>
            <Heart size={12} className="text-[#0071E3] fill-current animate-pulse" />
            <span>using React, TypeScript & Framer Motion</span>
          </div>

          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white transition-colors">Back to top ↑</a>
            <a href="https://github.com/Mohanraj-Freelancer" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">GitHub</a>
            <a href="https://linkedin.com/in/mohan-raj-698756224" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
          </div>

        </div>
      </div>
    </footer>
  );
};
