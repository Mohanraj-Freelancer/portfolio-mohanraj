import { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Award, Briefcase, Code, CheckCircle } from 'lucide-react';

const stats = [
  {
    icon: Award,
    value: 4.8,
    suffix: '+',
    label: 'Years Experience',
    detail: 'Hands-on native iOS development with Swift, SwiftUI & UIKit',
    color: 'from-blue-500 to-indigo-600',
  },
  {
    icon: Briefcase,
    value: 5,
    suffix: '+',
    label: 'Enterprise Apps',
    detail: 'Shipped for medical, retail, CRM & social media platforms',
    color: 'from-purple-500 to-pink-600',
  },
  {
    icon: CheckCircle,
    value: 100,
    suffix: '+',
    label: 'Features Delivered',
    detail: 'Offline sync engines, Twilio VoIP, Agora streaming & StoreKit',
    color: 'from-emerald-500 to-teal-600',
  },
  {
    icon: Code,
    value: 500,
    suffix: '+',
    label: 'Git Commits',
    detail: 'Clean commits, pull requests, and peer code reviews',
    color: 'from-orange-500 to-amber-600',
  },
];

const CountUpNumber = ({ target, suffix }: { target: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    const stepTime = duration / steps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [isInView, target]);

  return (
    <span ref={ref}>
      {target % 1 !== 0 ? count.toFixed(1) : Math.floor(count)}
      {suffix}
    </span>
  );
};

export const AchievementsSection = () => {
  return (
    <section id="achievements" className="py-28 md:py-36 relative bg-[#F5F5F7] dark:bg-[#161617] text-[#1D1D1F] dark:text-[#F5F5F7] overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          
          {/* Header */}
          <div className="text-center mb-20 max-w-3xl mx-auto">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-[#0071E3] dark:text-[#2997FF] mb-3 block"
            >
              Proven Metrics
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-6xl font-semibold tracking-tighter leading-tight mb-6 apple-gradient-text"
            >
              By the numbers.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-[#6E6E73] dark:text-[#86868B] font-normal"
            >
              Quantifiable impact delivered across production enterprise codebases.
            </motion.p>
          </div>

          {/* Stats Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="p-8 rounded-3xl bg-white dark:bg-[#000000] border border-black/5 dark:border-white/10 shadow-apple dark:shadow-apple-dark flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-[#0071E3]/10 dark:bg-[#2997FF]/10 text-[#0071E3] dark:text-[#2997FF] flex items-center justify-center mb-6">
                    <stat.icon className="w-6 h-6" />
                  </div>
                  <div className="text-5xl sm:text-6xl font-bold tracking-tighter text-[#1D1D1F] dark:text-[#F5F5F7] mb-2 font-sans">
                    <CountUpNumber target={stat.value} suffix={stat.suffix} />
                  </div>
                  <h3 className="text-lg font-semibold tracking-tight text-[#1D1D1F] dark:text-[#F5F5F7] mb-2">
                    {stat.label}
                  </h3>
                </div>
                <p className="text-xs text-[#6E6E73] dark:text-[#86868B] leading-relaxed pt-4 border-t border-black/5 dark:border-white/5">
                  {stat.detail}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};
