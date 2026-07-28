import { motion } from 'framer-motion';
import { ShieldCheck, Cpu, Database, Cloud, Smartphone, Code2, Layers, Award } from 'lucide-react';

const highlights = [
  {
    icon: Smartphone,
    title: 'SwiftUI & UIKit Expertise',
    subtitle: '4.8+ Years Core iOS',
    description: 'Mastery over both modern declarative SwiftUI and deep imperative UIKit frameworks for 60fps native performance.',
  },
  {
    icon: Database,
    title: 'Offline-First Architecture',
    subtitle: 'SQLite & CoreData',
    description: 'Architecting zero-latency offline storage systems with automatic background sync engines for enterprise field reps.',
  },
  {
    icon: Layers,
    title: 'MVVM & Clean Architecture',
    subtitle: 'SOLID Design Patterns',
    description: 'Decoupled, highly testable code structures with strict separation of concerns, repository patterns, and DI.',
  },
  {
    icon: Cloud,
    title: 'Cloud & Real-Time SDKs',
    subtitle: 'Firebase, Twilio, Agora',
    description: 'Integrating voice/video calls, real-time WebSockets, push notifications, and REST APIs with seamless error handling.',
  },
  {
    icon: Cpu,
    title: 'High Performance & Memory',
    subtitle: 'Instruments & Profiling',
    description: 'Eliminating memory leaks, optimizing main thread execution, and profiling CPU usage for butter-smooth UI.',
  },
  {
    icon: ShieldCheck,
    title: 'Enterprise Production',
    subtitle: '5+ Apps Shipped',
    description: 'Leading end-to-end development, code reviews, and App Store releases for medical, retail, and sales enterprises.',
  },
];

export const AboutSection = () => {
  return (
    <section id="about" className="py-28 md:py-36 relative bg-[#F5F5F7] dark:bg-[#161617] text-[#1D1D1F] dark:text-[#F5F5F7] overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-20">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-[#0071E3] dark:text-[#2997FF] mb-3 block"
            >
              Engineering Philosophy
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-6xl font-semibold tracking-tighter leading-tight mb-6 apple-gradient-text"
            >
              Obsessed with performance. Dedicated to perfection.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg sm:text-xl text-[#6E6E73] dark:text-[#86868B] font-normal leading-relaxed tracking-tight"
            >
              With over 4.8 years of dedicated iOS engineering experience, I engineer high-concurrency mobile applications for enterprise giants. From offline medical order systems to real-time communication platforms, I focus on clean code and pixel-perfect design.
            </motion.p>
          </div>

          {/* Interactive Developer Bio Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-20 p-8 sm:p-12 rounded-3xl bg-white dark:bg-[#000000] border border-black/5 dark:border-white/10 shadow-apple dark:shadow-apple-dark flex flex-col lg:flex-row items-center gap-10"
          >
            {/* Developer Badge Avatar */}
            <div className="w-40 h-40 sm:w-48 sm:h-48 rounded-3xl bg-gradient-to-tr from-[#0071E3] to-[#2997FF] p-1 flex-shrink-0 shadow-apple-glow">
              <div className="w-full h-full rounded-[22px] bg-[#161617] flex flex-col items-center justify-center text-white relative overflow-hidden">
                <Code2 className="w-12 h-12 text-[#2997FF] mb-2" />
                <span className="text-xl font-bold tracking-tight">Mohanraj G.</span>
                <span className="text-xs text-white/60 font-mono">Senior iOS Lead</span>
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
              </div>
            </div>

            {/* Narrative Story */}
            <div className="flex-1 space-y-4 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0071E3]/10 text-[#0071E3] dark:text-[#2997FF] text-xs font-semibold">
                <Award className="w-3.5 h-3.5" />
                <span>Apple iOS Architecture & Development</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight text-[#1D1D1F] dark:text-[#F5F5F7]">
                Building apps that feel native, fluid, and effortless.
              </h3>
              <p className="text-base text-[#6E6E73] dark:text-[#86868B] leading-relaxed">
                My work spans leading complex mobile initiatives at <strong>C-Square Info Solutions Ltd</strong>, <strong>Datasense Technologies</strong>, and <strong>App Innovation Technologies</strong>. I take pride in crafting reusable UIKit components, SwiftUI reactive architectures, and reliable database layers.
              </p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-2 pt-2">
                {['Swift', 'SwiftUI', 'UIKit', 'MVVM', 'Clean Architecture', 'Firebase', 'SQLite', 'REST APIs', 'Combine'].map((badge) => (
                  <span
                    key={badge}
                    className="px-3 py-1 rounded-full text-xs font-medium bg-[#F5F5F7] dark:bg-[#1D1D1F] text-[#1D1D1F] dark:text-[#F5F5F7] border border-black/5 dark:border-white/10"
                  >
                    {badge}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Cards Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                whileHover={{ y: -6 }}
                className="p-8 rounded-3xl bg-white dark:bg-[#000000] border border-black/5 dark:border-white/10 shadow-apple dark:shadow-apple-dark hover:border-[#0071E3]/40 transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-[#0071E3]/10 dark:bg-[#2997FF]/10 text-[#0071E3] dark:text-[#2997FF] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-mono uppercase tracking-wider text-[#6E6E73] dark:text-[#86868B] mb-1 block">
                    {item.subtitle}
                  </span>
                  <h3 className="text-xl font-semibold tracking-tight mb-3 text-[#1D1D1F] dark:text-[#F5F5F7]">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#6E6E73] dark:text-[#86868B] leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};
