import { motion, useScroll, useSpring } from 'framer-motion';

export const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 250,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="fixed top-0 left-0 right-0 z-[10000] pointer-events-none">
      {/* Glow Backdrop */}
      <motion.div
        className="h-[3px] bg-gradient-to-r from-[#0071E3] via-[#2997FF] to-[#70B4FF] origin-left shadow-[0_0_15px_#0071E3] dark:shadow-[0_0_20px_#2997FF]"
        style={{ scaleX }}
      />
    </div>
  );
};
