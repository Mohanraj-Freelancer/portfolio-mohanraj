import { useState } from 'react';
import { motion } from 'framer-motion';
import { Code2, Layers, Database, Cpu, Wrench, ShieldCheck } from 'lucide-react';

const skillCategories = [
  {
    name: 'Core iOS & Languages',
    icon: Code2,
    skills: [
      { name: 'Swift', level: 100, experience: '4.8 Years', desc: 'Swift 6, Async/Await, Protocols, Generics' },
      { name: 'SwiftUI', level: 100, experience: '4 Years', desc: 'Declarative UI, State Management, Custom Animations' },
      { name: 'UIKit', level: 100, experience: '4.8 Years', desc: 'AutoLayout, Programmatic UI, Custom Controls' },
      { name: 'Combine', level: 100, experience: '3+ Years', desc: 'Publishers, Subscribers, Reactive Streams' },
      { name: 'Concurrency', level: 100, experience: '3+ Years', desc: 'Actors, TaskGroups, MainActor, Threading' },
    ],
  },
  {
    name: 'Architecture & Design Patterns',
    icon: Layers,
    skills: [
      { name: 'MVVM', level: 100, experience: '4.8+ Years', desc: 'Model-View-ViewModel with Clean State' },
      { name: 'Clean Architecture', level: 100, experience: '4.8+ Years', desc: 'Use Cases, Repositories, Domain Isolation' },
      { name: 'MVC', level: 100, experience: '4.8+ Years', desc: 'Traditional iOS Design Pattern' },
      { name: 'SOLID Principles', level: 100, experience: '4.8+ Years', desc: 'Clean, Maintainable, Scalable OOP' },
      { name: 'Dependency Injection', level: 100, experience: '4.8+ Years', desc: 'Swinject, Protocol-based Decoupling' },
    ],
  },
  {
    name: 'Databases & Storage',
    icon: Database,
    skills: [
      { name: 'SQLite', level: 100, experience: '2+ Years', desc: 'Offline-First Local DB Engines & Migrations' },
      { name: 'CoreData', level: 90, experience: '2+ Years', desc: 'Apple Native Persistent Container' },
      { name: 'Firebase', level: 100, experience: '4+ Years', desc: 'Firestore, Cloud Messaging, Auth, Crashlytics' },
      { name: 'URLCache & Memory', level: 100, experience: '4+ Years', desc: 'Disk/RAM Caching & Asset Management' },
    ],
  },
  {
    name: 'SDKs, APIs & Tools',
    icon: Wrench,
    skills: [
      { name: 'REST API', level: 100, experience: '4.8+ Years', desc: 'URLSession, Alamofire, JSONDecoder' },
      { name: 'Zegocloud', level: 100, experience: '2+ Years', desc: 'VoIP Cellular Calls, Audio Streams & HD Live Video Broadcasting' },
      { name: 'Twilio SDK', level: 100, experience: '2+ Years', desc: 'VoIP Cellular Calls & Audio Streams' },
      { name: 'Agora SDK', level: 100, experience: '2+ Years', desc: 'HD Live Video Broadcasting & WebRTC' },
      { name: 'Git & GitHub', level: 100, experience: '4.8+ Years', desc: 'Git Flow, Rebase, PR Reviews, Actions' },
      { name: 'Fastlane & CI/CD', level: 100, experience: '2+ Years', desc: 'Automated TestFlight & App Store Delivery' },
    ],
  },
];

const floatingBubbles = [
  'Swift', 'SwiftUI', 'UIKit', 'Combine', 'Concurrency',
  'MVVM', 'MVC', 'Clean Architecture', 'SOLID Principles', 'Dependency Injection', 'SQLite', 'CoreData',
  'Firebase', 'Git', 'Fastlane', 'REST API', 'StoreKit', 'XCTest'
];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <section id="skills" className="py-28 md:py-36 relative bg-[#FFFFFF] dark:bg-[#000000] text-[#1D1D1F] dark:text-[#F5F5F7] overflow-hidden">
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
              Technical Mastery
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-6xl font-semibold tracking-tighter leading-tight mb-6 apple-gradient-text"
            >
              Interactive Skill Ecosystem.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-[#6E6E73] dark:text-[#86868B] font-normal"
            >
              Hover over skills to explore deep technical proficiency, architectural patterns, and framework experience.
            </motion.p>
          </div>

          {/* Floating Skill Bubbles */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center items-center gap-3 sm:gap-4 mb-20 max-w-4xl mx-auto"
          >
            {floatingBubbles.map((bubble, i) => (
              <motion.div
                key={bubble}
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.4,
                  delay: i * 0.04,
                  y: {
                    repeat: Infinity,
                    duration: 3 + (i % 3),
                    ease: 'easeInOut',
                  },
                }}
                className="px-5 py-3 rounded-full bg-[#F5F5F7] dark:bg-[#161617] text-[#1D1D1F] dark:text-[#F5F5F7] font-semibold text-sm sm:text-base border border-black/5 dark:border-white/10 shadow-apple hover:border-[#0071E3] hover:text-[#0071E3] dark:hover:text-[#2997FF] hover:shadow-apple-glow transition-all duration-300 cursor-default"
              >
                {bubble}
              </motion.div>
            ))}
          </motion.div>

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {skillCategories.map((cat, idx) => {
              const Icon = cat.icon;
              const isActive = activeCategory === idx;
              return (
                <button
                  key={cat.name}
                  onClick={() => setActiveCategory(idx)}
                  className={`inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 ${
                    isActive
                      ? 'bg-[#0071E3] text-white shadow-apple-glow scale-105'
                      : 'bg-[#F5F5F7] dark:bg-[#161617] text-[#6E6E73] dark:text-[#86868B] hover:text-[#1D1D1F] dark:hover:text-[#F5F5F7] border border-black/5 dark:border-white/10'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{cat.name}</span>
                </button>
              );
            })}
          </div>

          {/* Category Skills Grid */}
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="grid sm:grid-cols-2 gap-6"
          >
            {skillCategories[activeCategory].skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="p-6 sm:p-8 rounded-3xl bg-[#F5F5F7] dark:bg-[#161617] border border-black/5 dark:border-white/10 shadow-apple dark:shadow-apple-dark flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-semibold tracking-tight text-[#1D1D1F] dark:text-[#F5F5F7]">
                      {skill.name}
                    </h3>
                    <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded-full bg-[#0071E3]/10 text-[#0071E3] dark:text-[#2997FF]">
                      {skill.experience}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#6E6E73] dark:text-[#86868B] mb-6">
                    {skill.desc}
                  </p>
                </div>

                {/* Progress Bar */}
                <div>
                  <div className="flex justify-between text-xs font-medium text-[#6E6E73] dark:text-[#86868B] mb-2">
                    <span>Proficiency</span>
                    <span>{skill.level}%</span>
                  </div>
                  <div className="h-2 w-full rounded-full bg-black/10 dark:bg-white/10 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, ease: 'easeOut' }}
                      className="h-full rounded-full bg-gradient-to-r from-[#0071E3] to-[#2997FF]"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
};
