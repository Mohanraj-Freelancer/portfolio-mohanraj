import { useState, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { ArrowDown, Download, ChevronRight, Sparkles, Layers, Cpu, ShieldCheck, Play } from 'lucide-react';

export const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeScreenTab, setActiveScreenTab] = useState<'app' | 'code' | 'architecture'>('app');

  // Parallax on scroll
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const heroY = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const phoneScale = useTransform(scrollYProgress, [0, 1], [1, 0.9]);

  // Mouse move tilt effect for iPhone frame
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setTilt({
      rotateX: -y / 25,
      rotateY: x / 25,
    });
  };

  const handleMouseLeave = () => {
    setTilt({ rotateX: 0, rotateY: 0 });
  };

  return (
    <section
      ref={containerRef}
      id="hero"
      className="min-h-screen relative flex items-center justify-center pt-28 pb-16 overflow-hidden bg-[#FFFFFF] dark:bg-[#000000] text-[#1D1D1F] dark:text-[#F5F5F7]"
    >
      {/* Background Ambient Mesh Light */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-[20%] left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-gradient-to-b from-[#0071E3]/10 via-[#0071E3]/5 to-transparent blur-[140px] rounded-full dark:from-[#2997FF]/15 dark:via-[#0071E3]/5" />
        <div className="absolute top-[40%] left-[10%] w-[400px] h-[400px] bg-purple-500/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-[10%] right-[10%] w-[500px] h-[500px] bg-blue-500/5 blur-[130px] rounded-full" />
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
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-black/10 dark:border-white/15 bg-black/5 dark:bg-white/10 backdrop-blur-md mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-[#0071E3] dark:bg-[#2997FF] animate-ping" />
              <span className="text-xs font-semibold uppercase tracking-wider text-[#6E6E73] dark:text-[#86868B]">
                Senior iOS Engineer • 4.8+ Years
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
              iOS Engineer. Architect. Crafting Swift Experiences.
            </motion.h2>

            {/* Description Paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-lg sm:text-xl text-[#6E6E73] dark:text-[#86868B] max-w-2xl font-normal leading-relaxed tracking-tight mb-8"
            >
              Building beautiful, scalable and high-performance iOS applications with Swift, SwiftUI and UIKit. Specializing in clean architecture, offline-first SQLite systems, and 60fps animations.
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
                <span>View Projects</span>
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
                <p className="text-xs text-[#6E6E73] dark:text-[#86868B] font-medium">Years Experience</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-semibold tracking-tight text-[#0071E3] dark:text-[#2997FF]">
                  5+
                </p>
                <p className="text-xs text-[#6E6E73] dark:text-[#86868B] font-medium">Enterprise Apps</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-semibold tracking-tight text-[#1D1D1F] dark:text-[#F5F5F7]">
                  60 FPS
                </p>
                <p className="text-xs text-[#6E6E73] dark:text-[#86868B] font-medium">Fluid Native UI</p>
              </div>
            </motion.div>

          </div>

          {/* Right Column: Animated iPhone Mockup */}
          <div className="lg:col-span-5 flex justify-center items-center">
            <motion.div
              style={{ scale: phoneScale }}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              animate={{ rotateX: tilt.rotateX, rotateY: tilt.rotateY }}
              transition={{ type: 'spring', stiffness: 200, damping: 25 }}
              className="relative w-[310px] sm:w-[340px] h-[650px] rounded-[52px] border-[10px] border-[#2c2c2e] dark:border-[#3a3a3c] bg-black shadow-[0_30px_100px_rgba(0,0,0,0.3)] dark:shadow-[0_30px_100px_rgba(0,113,227,0.2)] overflow-hidden transition-all duration-300 perspective-1000"
            >
              {/* Dynamic Island */}
              <div className="absolute top-3 left-1/2 -translate-x-1/2 w-28 h-7 bg-black rounded-full z-30 flex items-center justify-between px-3 border border-white/10">
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 animate-pulse" />
                <div className="w-3 h-3 rounded-full bg-[#1c1c1e] border border-white/20" />
              </div>

              {/* Status Bar */}
              <div className="absolute top-3 left-6 right-6 z-20 flex justify-between items-center text-[10px] font-semibold text-white/90">
                <span>9:41</span>
                <div className="flex items-center gap-1.5">
                  <span>5G</span>
                  <div className="w-5 h-2.5 border border-white/80 rounded-sm p-0.5 flex items-center">
                    <div className="w-full h-full bg-white rounded-xs" />
                  </div>
                </div>
              </div>

              {/* Screen Tab Switcher */}
              <div className="absolute top-14 left-4 right-4 z-20 flex gap-1 p-1 bg-white/10 backdrop-blur-md rounded-xl border border-white/10">
                <button
                  onClick={() => setActiveScreenTab('app')}
                  className={`flex-1 py-1 text-[10px] font-semibold rounded-lg transition-all ${
                    activeScreenTab === 'app' ? 'bg-[#0071E3] text-white shadow' : 'text-white/60 hover:text-white'
                  }`}
                >
                  SFA 360 App
                </button>
                <button
                  onClick={() => setActiveScreenTab('code')}
                  className={`flex-1 py-1 text-[10px] font-semibold rounded-lg transition-all ${
                    activeScreenTab === 'code' ? 'bg-[#0071E3] text-white shadow' : 'text-white/60 hover:text-white'
                  }`}
                >
                  SwiftUI Code
                </button>
                <button
                  onClick={() => setActiveScreenTab('architecture')}
                  className={`flex-1 py-1 text-[10px] font-semibold rounded-lg transition-all ${
                    activeScreenTab === 'architecture' ? 'bg-[#0071E3] text-white shadow' : 'text-white/60 hover:text-white'
                  }`}
                >
                  MVVM Pattern
                </button>
              </div>

              {/* Screen Content View */}
              <div className="w-full h-full pt-24 pb-8 px-4 flex flex-col justify-between text-white bg-gradient-to-b from-[#111115] via-[#09090c] to-[#000000]">
                {activeScreenTab === 'app' && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                    className="flex-1 flex flex-col justify-between"
                  >
                    <div>
                      {/* App Header Card */}
                      <div className="p-3 rounded-2xl bg-white/10 border border-white/10 backdrop-blur-md mb-3 flex items-center justify-between">
                        <div>
                          <p className="text-[10px] text-white/50 uppercase font-mono tracking-wider">Enterprise iOS</p>
                          <p className="text-sm font-semibold text-white">SFA 360 Suite</p>
                        </div>
                        <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 text-[10px] font-medium border border-emerald-500/30">
                          Offline Sync Active
                        </span>
                      </div>

                      {/* App Stats Card */}
                      <div className="grid grid-cols-2 gap-2 mb-3">
                        <div className="p-3 rounded-2xl bg-white/5 border border-white/10">
                          <p className="text-[10px] text-white/50">Orders Processed</p>
                          <p className="text-lg font-bold text-[#2997FF]">142,500+</p>
                        </div>
                        <div className="p-3 rounded-2xl bg-white/5 border border-white/10">
                          <p className="text-[10px] text-white/50">Local SQLite Latency</p>
                          <p className="text-lg font-bold text-emerald-400">&lt; 2ms</p>
                        </div>
                      </div>

                      {/* Features List */}
                      <div className="space-y-2">
                        <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 flex items-center gap-2">
                          <ShieldCheck className="w-4 h-4 text-[#2997FF]" />
                          <span className="text-xs text-white/80">AES-256 Offline Database Encryption</span>
                        </div>
                        <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 flex items-center gap-2">
                          <Cpu className="w-4 h-4 text-purple-400" />
                          <span className="text-xs text-white/80">Swift Concurrency & Async/Await</span>
                        </div>
                        <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 flex items-center gap-2">
                          <Layers className="w-4 h-4 text-amber-400" />
                          <span className="text-xs text-white/80">60 FPS Custom UIKit Animations</span>
                        </div>
                      </div>
                    </div>

                    {/* Interactive Widget Button */}
                    <div className="p-3 rounded-2xl bg-[#0071E3] text-white text-center font-medium text-xs shadow-lg shadow-blue-500/30 flex items-center justify-center gap-2">
                      <Sparkles className="w-3.5 h-3.5 animate-spin" />
                      <span>Running iOS 18 Runtime</span>
                    </div>
                  </motion.div>
                )}

                {activeScreenTab === 'code' && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                    className="flex-1 flex flex-col justify-between"
                  >
                    <div className="p-3 rounded-2xl bg-[#000000] border border-white/15 font-mono text-[11px] leading-relaxed text-blue-300">
                      <p className="text-pink-400 font-semibold">// Swift 6.0 Concurrency</p>
                      <p className="text-purple-400">@Observable <span className="text-white">class</span> <span className="text-yellow-300">iOSViewModel</span> &#123;</p>
                      <p className="pl-3 text-emerald-300">var <span className="text-white">orders</span>: [<span className="text-yellow-300">Order</span>] = []</p>
                      <p className="pl-3 text-purple-400"><span className="text-pink-400">func</span> <span className="text-blue-300">syncData</span>() <span className="text-pink-400">async</span> &#123;</p>
                      <p className="pl-6 text-white"><span className="text-pink-400">let</span> records = <span className="text-pink-400">try</span>?</p>
                      <p className="pl-9 text-yellow-300"><span className="text-pink-400">await</span> SQLiteEngine.fetch()</p>
                      <p className="pl-6 text-white"><span className="text-pink-400">self</span>.orders = records</p>
                      <p className="pl-3 text-purple-400">&#125;</p>
                      <p className="text-purple-400">&#125;</p>
                    </div>

                    <div className="p-3 rounded-2xl bg-white/5 border border-white/10 text-center text-xs text-white/70">
                      Clean Swift Architecture
                    </div>
                  </motion.div>
                )}

                {activeScreenTab === 'architecture' && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                    className="flex-1 flex flex-col justify-around text-center"
                  >
                    <div className="p-3 rounded-2xl bg-[#0071E3]/20 border border-[#0071E3]/40">
                      <p className="text-xs font-semibold text-[#2997FF]">SwiftUI / UIKit View</p>
                      <p className="text-[10px] text-white/60">Declarative UI & Animations</p>
                    </div>

                    <div className="w-0.5 h-6 bg-white/20 mx-auto" />

                    <div className="p-3 rounded-2xl bg-purple-500/20 border border-purple-500/40">
                      <p className="text-xs font-semibold text-purple-300">MVVM ViewModel</p>
                      <p className="text-[10px] text-white/60">Combine & Async/Await State</p>
                    </div>

                    <div className="w-0.5 h-6 bg-white/20 mx-auto" />

                    <div className="p-3 rounded-2xl bg-emerald-500/20 border border-emerald-500/40">
                      <p className="text-xs font-semibold text-emerald-300">Repository Layer</p>
                      <p className="text-[10px] text-white/60">SQLite Local + REST API Cloud Sync</p>
                    </div>
                  </motion.div>
                )}

                {/* Bottom Home Indicator */}
                <div className="w-32 h-1 bg-white/40 rounded-full mx-auto mt-4" />
              </div>
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
            <span>Scroll to explore</span>
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
