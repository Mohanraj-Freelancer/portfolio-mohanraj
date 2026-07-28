import { useState } from 'react';
import { motion } from 'framer-motion';
import { Code2, Layers, Database, Cpu, Wrench, Sparkles, Terminal } from 'lucide-react';
import { CodeSnippetWindow } from './CodeSnippetWindow';

const skillCategories = [
  {
    name: 'Core iOS & Languages',
    icon: Code2,
    skills: [
      { name: 'Swift', level: 100, experience: '4.8 Years', desc: 'Swift 6, Async/Await, Actors, Protocols', snippetKey: 'Swift' },
      { name: 'SwiftUI', level: 100, experience: '4 Years', desc: 'Declarative UI, State Management, Custom Animations', snippetKey: 'SwiftUI' },
      { name: 'UIKit', level: 100, experience: '4.8 Years', desc: 'AutoLayout, Programmatic UI, Custom Controls', snippetKey: 'UIKit' },
      { name: 'Combine', level: 100, experience: '3+ Years', desc: 'Publishers, Subscribers, Reactive Streams', snippetKey: 'Combine' },
      { name: 'Concurrency', level: 100, experience: '3+ Years', desc: 'Actors, TaskGroups, MainActor, Threading', snippetKey: 'Swift' },
    ],
  },
  {
    name: 'Architecture & Patterns',
    icon: Layers,
    skills: [
      { name: 'MVVM', level: 100, experience: '4.8+ Years', desc: 'Model-View-ViewModel with Clean State', snippetKey: 'MVVM' },
      { name: 'Clean Architecture', level: 100, experience: '4.8+ Years', desc: 'Use Cases, Repositories, Domain Isolation', snippetKey: 'MVVM' },
      { name: 'SOLID Principles', level: 100, experience: '4.8+ Years', desc: 'Clean, Maintainable, Scalable OOP', snippetKey: 'MVVM' },
      { name: 'Dependency Injection', level: 100, experience: '4.8+ Years', desc: 'Swinject, Protocol-based Decoupling', snippetKey: 'MVVM' },
    ],
  },
  {
    name: 'Databases & Storage',
    icon: Database,
    skills: [
      { name: 'SQLite', level: 100, experience: '2+ Years', desc: 'Offline-First Local DB Engines & Migrations', snippetKey: 'SQLite' },
      { name: 'CoreData', level: 90, experience: '2+ Years', desc: 'Apple Native Persistent Container', snippetKey: 'SQLite' },
      { name: 'Firebase', level: 100, experience: '4+ Years', desc: 'Firestore, Cloud Messaging, Auth, Crashlytics', snippetKey: 'Swift' },
    ],
  },
  {
    name: 'SDKs & Infrastructure',
    icon: Wrench,
    skills: [
      { name: 'REST API', level: 100, experience: '4.8+ Years', desc: 'URLSession, Alamofire, JSONDecoder', snippetKey: 'Swift' },
      { name: 'Zegocloud', level: 100, experience: '2+ Years', desc: 'VoIP Cellular Calls & HD Live Video Broadcasting', snippetKey: 'Swift' },
      { name: 'Twilio SDK', level: 100, experience: '2+ Years', desc: 'VoIP Cellular Calls & Audio Streams', snippetKey: 'Swift' },
      { name: 'Agora SDK', level: 100, experience: '2+ Years', desc: 'HD Live Video Broadcasting & WebRTC', snippetKey: 'Swift' },
    ],
  },
];

const floatingBubbles = [
  'Swift 6', 'SwiftUI', 'UIKit', 'Combine', 'Concurrency',
  'MVVM', 'Clean Architecture', 'SOLID', 'SQLite Engine', 'CoreData',
  'Firebase', 'Git Flow', 'Fastlane', 'REST API', 'StoreKit', 'XCTest'
];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState(0);
  const [selectedSnippetKey, setSelectedSnippetKey] = useState('Swift');

  return (
    <section id="skills" className="py-28 md:py-36 relative bg-[#FFFFFF] dark:bg-[#000000] text-[#1D1D1F] dark:text-[#F5F5F7] overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          
          {/* Header */}
          <div className="text-center mb-16 max-w-3xl mx-auto">
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
              iOS Engineering & Live Code Sandbox.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-[#6E6E73] dark:text-[#86868B] font-normal"
            >
              Explore core iOS frameworks and interact with live production Swift 6 code snippets built with Clean Architecture.
            </motion.p>
          </div>

          {/* Floating Skill Badges */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center items-center gap-2.5 sm:gap-3 mb-16 max-w-4xl mx-auto"
          >
            {floatingBubbles.map((bubble, i) => {
              const matchingSnippetKey = bubble.includes('SwiftUI') ? 'SwiftUI' :
                                         bubble.includes('UIKit') ? 'UIKit' :
                                         bubble.includes('Combine') ? 'Combine' :
                                         bubble.includes('SQLite') ? 'SQLite' :
                                         bubble.includes('MVVM') ? 'MVVM' : 'Swift';
              return (
                <motion.button
                  key={bubble}
                  onClick={() => setSelectedSnippetKey(matchingSnippetKey)}
                  initial={{ opacity: 0, scale: 0.8, y: 20 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.03 }}
                  className={`px-4 py-2 rounded-full font-semibold text-xs sm:text-sm border transition-all duration-300 ${
                    selectedSnippetKey === matchingSnippetKey
                      ? 'bg-[#0071E3] text-white border-[#0071E3] shadow-apple-glow scale-105'
                      : 'bg-[#F5F5F7] dark:bg-[#161617] text-[#1D1D1F] dark:text-[#F5F5F7] border-black/5 dark:border-white/10 hover:border-[#0071E3]'
                  }`}
                >
                  {bubble}
                </motion.button>
              );
            })}
          </motion.div>

          {/* Grid Layout: Left Column Skill Cards, Right Column Interactive Code Snippet Window */}
          <div className="grid lg:grid-cols-12 gap-8 items-start mb-16">
            
            {/* Left Column: Category Tabs & Skill Cards */}
            <div className="lg:col-span-6 space-y-6">
              
              {/* Category Tabs */}
              <div className="flex flex-wrap gap-2 p-1.5 bg-[#F5F5F7] dark:bg-[#161617] rounded-2xl border border-black/5 dark:border-white/10">
                {skillCategories.map((cat, idx) => {
                  const Icon = cat.icon;
                  const isActive = activeCategory === idx;
                  return (
                    <button
                      key={cat.name}
                      onClick={() => setActiveCategory(idx)}
                      className={`flex-1 min-w-[120px] inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold transition-all duration-300 ${
                        isActive
                          ? 'bg-[#0071E3] text-white shadow-sm'
                          : 'text-[#6E6E73] dark:text-[#86868B] hover:text-[#1D1D1F] dark:hover:text-[#F5F5F7]'
                      }`}
                    >
                      <Icon className="w-3.5 h-3.5" />
                      <span>{cat.name}</span>
                    </button>
                  );
                })}
              </div>

              {/* Skills List in Active Category */}
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="space-y-3"
              >
                {skillCategories[activeCategory].skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    onClick={() => setSelectedSnippetKey(skill.snippetKey)}
                    whileHover={{ scale: 1.01 }}
                    className={`p-5 rounded-2xl border transition-all cursor-pointer ${
                      selectedSnippetKey === skill.snippetKey
                        ? 'bg-[#0071E3]/5 dark:bg-[#0071E3]/10 border-[#0071E3] shadow-md'
                        : 'bg-[#F5F5F7] dark:bg-[#161617] border-black/5 dark:border-white/10 hover:border-black/20 dark:hover:border-white/20'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <h3 className="text-base font-semibold tracking-tight text-[#1D1D1F] dark:text-[#F5F5F7] flex items-center gap-2">
                        {skill.name}
                        {selectedSnippetKey === skill.snippetKey && (
                          <span className="w-2 h-2 rounded-full bg-[#0071E3] dark:bg-[#2997FF] animate-ping" />
                        )}
                      </h3>
                      <span className="text-[11px] font-mono font-semibold px-2.5 py-0.5 rounded-full bg-[#0071E3]/10 text-[#0071E3] dark:text-[#2997FF]">
                        {skill.experience}
                      </span>
                    </div>
                    <p className="text-xs text-[#6E6E73] dark:text-[#86868B] mb-3">
                      {skill.desc}
                    </p>

                    {/* Progress Bar */}
                    <div className="h-1.5 w-full rounded-full bg-black/10 dark:bg-white/10 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                        className="h-full rounded-full bg-gradient-to-r from-[#0071E3] to-[#2997FF]"
                      />
                    </div>
                  </motion.div>
                ))}
              </motion.div>

            </div>

            {/* Right Column: Animated Xcode Code Snippet Sandbox */}
            <div className="lg:col-span-6 sticky top-28">
              <CodeSnippetWindow
                activeSkillKey={selectedSnippetKey}
                onSelectSkill={(key) => setSelectedSnippetKey(key)}
              />
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
