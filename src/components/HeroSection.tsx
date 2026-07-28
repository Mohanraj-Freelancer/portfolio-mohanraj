import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown, Download, ChevronRight, Sparkles, Code2, Layers, Cpu, ShieldCheck } from 'lucide-react';
import { IPhone3DMockup } from './IPhone3DMockup';

export const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Parallax on scroll
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const heroY = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.85], [1, 0]);

  return (
    <section
      ref={containerRef}
      id="hero"
      className="min-h-screen relative flex items-center justify-center pt-28 pb-16 overflow-hidden bg-[#FFFFFF] dark:bg-[#000000] text-[#1D1D1F] dark:text-[#F5F5F7]"
    >
      {/* Background Ambient Mesh Light */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-[20%] left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-gradient-to-b from-[#0071E3]/15 via-[#0071E3]/5 to-transparent blur-[140px] rounded-full dark:from-[#2997FF]/20 dark:via-[#0071E3]/5" />
        <div className="absolute top-[40%] left-[5%] w-[450px] h-[450px] bg-purple-500/10 blur-[130px] rounded-full" />
        <div className="absolute bottom-[10%] right-[5%] w-[500px] h-[500px] bg-blue-500/10 blur-[140px] rounded-full" />
      </div>

      <motion.div
        style={{ y: heroY, opacity: heroOpacity }}
        className="container mx-auto px-6 relative z-10"
      >
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center max-w-7xl mx-auto">
          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
            
            {/* Apple Product Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-black/10 dark:border-white/15 bg-black/5 dark:bg-white/10 backdrop-blur-md mb-6 shadow-sm"
            >
              <span className="w-2 h-2 rounded-full bg-[#0071E3] dark:bg-[#2997FF] animate-ping" />
              <span className="text-xs font-semibold uppercase tracking-wider text-[#6E6E73] dark:text-[#86868B]">
                Senior iOS Engineer • 4.8+ Years Experience
              </span>
            </motion.div>

            {/* Main Hero Title */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-5xl sm:text-7xl md:text-8xl lg:text-[88px] font-semibold tracking-tighter leading-[1.02] mb-6 apple-gradient-text"
            >
              Mohanraj Gopi
            </motion.h1>

            {/* Role Title */}
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-2xl sm:text-4xl lg:text-5xl font-semibold tracking-tight apple-blue-gradient mb-6"
            >
              iOS Architect. Swift Specialist. Crafting Native Apps.
            </motion.h2>

            {/* Description Paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-lg sm:text-xl text-[#6E6E73] dark:text-[#86868B] max-w-2xl font-normal leading-relaxed tracking-tight mb-8"
            >
              Architecting high-performance iOS applications with Swift, SwiftUI, and UIKit. Specializing in clean MVVM architecture, zero-latency offline SQLite engines, and fluid 60fps animations.
            </motion.p>

            {/* CTA Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-10"
            >
              {/* Primary Apple Button */}
              <a
                href="#projects"
                className="group relative inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#0071E3] hover:bg-[#0077ED] dark:bg-[#0071E3] text-white font-medium text-base shadow-apple hover:shadow-apple-glow transition-all duration-300 hover:scale-[1.03] active:scale-[0.98]"
              >
                <span>Explore Selected Work</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              {/* Secondary Apple Glass Button */}
              <a
                href="/Mohanraj_Resume.pdf"
                download="Mohanraj_Gopi_Resume.pdf"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-black/10 dark:border-white/15 bg-black/5 dark:bg-white/10 hover:bg-black/10 dark:hover:bg-white/15 text-[#1D1D1F] dark:text-[#F5F5F7] font-medium text-base backdrop-blur-md transition-all duration-300 hover:scale-[1.03] active:scale-[0.98]"
              >
                <Download className="w-4 h-4 text-[#0071E3] dark:text-[#2997FF]" />
                <span>Download Resume</span>
              </a>
            </motion.div>

            {/* Quick Metrics Strip */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="grid grid-cols-3 gap-6 pt-6 border-t border-black/10 dark:border-white/10 w-full max-w-lg"
            >
              <div>
                <p className="text-2xl sm:text-3xl font-semibold tracking-tight text-[#1D1D1F] dark:text-[#F5F5F7]">
                  4.8+
                </p>
                <p className="text-xs text-[#6E6E73] dark:text-[#86868B] font-medium">Years iOS Exp.</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-semibold tracking-tight text-[#0071E3] dark:text-[#2997FF]">
                  5+
                </p>
                <p className="text-xs text-[#6E6E73] dark:text-[#86868B] font-medium">Enterprise Products</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-semibold tracking-tight text-[#1D1D1F] dark:text-[#F5F5F7]">
                  60 FPS
                </p>
                <p className="text-xs text-[#6E6E73] dark:text-[#86868B] font-medium">Fluid Swift UI</p>
              </div>
            </motion.div>

          </div>

          {/* Right Column: 3D iPhone Mockup with Mouse Movement Physics */}
          <div className="lg:col-span-5 flex justify-center items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.3 }}
              className="w-full flex justify-center"
            >
              <IPhone3DMockup initialScreen="sfa360" interactiveScreenTabs={true} />
            </motion.div>
          </div>

        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <a
            href="#about"
            className="inline-flex flex-col items-center gap-2 text-xs font-medium text-[#6E6E73] dark:text-[#86868B] hover:text-[#0071E3] dark:hover:text-[#2997FF] transition-colors"
          >
            <span>Scroll to discover product stories</span>
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              <ArrowDown size={16} />
            </motion.div>
          </a>
        </motion.div>

      </motion.div>
    </section>
  );
};
