import { motion, useScroll, useTransform } from 'framer-motion';

export const AmbientBackground = () => {
  const { scrollYProgress } = useScroll();

  // Color dynamic morphing on scroll
  const orb1Y = useTransform(scrollYProgress, [0, 0.5, 1], [0, 400, 800]);
  const orb2Y = useTransform(scrollYProgress, [0, 0.5, 1], [0, -300, -600]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 0.9, 0.7]);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Top Ambient Glow Mesh */}
      <motion.div
        style={{ y: orb1Y, opacity }}
        className="absolute -top-[15%] left-1/2 -translate-x-1/2 w-[80vw] max-w-[1200px] h-[600px] bg-gradient-to-b from-[#0071E3]/15 via-[#2997FF]/10 to-transparent blur-[150px] rounded-full dark:from-[#2997FF]/20 dark:via-[#0071E3]/10"
      />

      {/* Floating Purple Aura */}
      <motion.div
        style={{ y: orb2Y }}
        className="absolute top-[35%] -left-[10%] w-[600px] h-[600px] bg-gradient-to-tr from-purple-600/10 via-indigo-500/5 to-transparent blur-[160px] rounded-full dark:from-purple-500/15"
      />

      {/* Floating Emerald Aura */}
      <motion.div
        style={{ y: orb1Y }}
        className="absolute top-[65%] -right-[10%] w-[600px] h-[600px] bg-gradient-to-bl from-teal-500/10 via-emerald-500/5 to-transparent blur-[160px] rounded-full dark:from-emerald-500/15"
      />

      {/* Subtle Noise / Grid Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.015] dark:opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.8) 1px, transparent 0)`,
          backgroundSize: '24px 24px'
        }}
      />
    </div>
  );
};
