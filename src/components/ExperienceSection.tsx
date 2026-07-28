import { motion } from 'framer-motion';
import { Building2, MapPin, Calendar, CheckCircle2, ChevronRight } from 'lucide-react';

const experiences = [
  {
    company: 'C-Square Info Solutions Ltd',
    role: 'iOS Developer',
    location: 'Kochi, Kerala',
    period: '04/2024 – Present',
    badge: 'Current Role',
    isCurrent: true,
    description: 'Leading mobile application initiatives, architecting new SwiftUI features, and enforcing clean code practices across the team.',
    responsibilities: [
      'Lead development and maintenance of advanced iOS applications using Swift and SwiftUI',
      'Guide and mentor junior developers, establishing code review standards and unit testing workflows',
      'Participate in core architecture decision-making, improving code modularity and reusability',
      'Collaborate with product managers and UI designers to deliver intuitive Apple human-interface guidelines',
      'Conduct detailed code reviews and optimize memory management for enterprise platforms',
    ],
    tech: ['SwiftUI', 'Swift 6', 'Combine', 'SQLite Engine', 'REST APIs', 'XCTest'],
  },
  {
    company: 'Datasense Technologies',
    role: 'iOS Developer',
    location: 'Coimbatore, Tamilnadu',
    period: '03/2023 – 04/2024',
    badge: '1 Year 1 Month',
    isCurrent: false,
    description: 'Engineered high-concurrency client-server applications and integrated complex third-party SDKs.',
    responsibilities: [
      'Developed and optimized iOS applications using Swift, SwiftUI, and UIKit',
      'Integrated RESTful APIs and third-party services to enhance real-time functionality',
      'Debugged and resolved memory leaks using Xcode Instruments for bug-free releases',
      'Supported Agile development cycles with rapid feature implementation and sprint planning',
      'Maintained software quality standards with clean MVVM architecture',
    ],
    tech: ['Swift', 'UIKit', 'REST API', 'Firebase', 'MVVM', 'Agile'],
  },
  {
    company: 'App Innovation Technologies (P) Ltd',
    role: 'Fresher iOS Developer',
    location: 'Coimbatore, Tamilnadu',
    period: '11/2021 – 03/2023',
    badge: '1 Year 5 Months',
    isCurrent: false,
    description: 'Built foundational iOS applications, real-time messaging systems, and offline-capable SQLite databases.',
    responsibilities: [
      'Built and maintained multiple iOS applications with a focus on performance and usability',
      'Integrated Twilio, Google Maps, and ZegoCloud real-time chat SDKs for dynamic app experiences',
      'Designed efficient SQLite database models for offline-capable enterprise applications',
      'Implemented clean architecture patterns and followed SOLID principles strictly',
      'Performed end-to-end integration testing and cross-team feature delivery',
    ],
    tech: ['Swift', 'SQLite', 'Twilio SDK', 'Google Maps', 'ZegoCloud', 'CocoaPods'],
  },
];

export const ExperienceSection = () => {
  return (
    <section id="experience" className="py-28 md:py-36 relative bg-[#FFFFFF] dark:bg-[#000000] text-[#1D1D1F] dark:text-[#F5F5F7]">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          
          {/* Header */}
          <div className="text-center mb-24 max-w-2xl mx-auto">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-[#0071E3] dark:text-[#2997FF] mb-3 block"
            >
              Career History
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-6xl font-semibold tracking-tighter leading-tight mb-6 apple-gradient-text"
            >
              Track record of iOS excellence.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-[#6E6E73] dark:text-[#86868B] font-normal"
            >
              Over 4.8 years of continuous growth across leading software companies in South India.
            </motion.p>
          </div>

          {/* Timeline Container */}
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-4 sm:left-1/2 top-4 bottom-4 w-[2px] bg-[#E5E5EA] dark:bg-[#2c2c2e] sm:-translate-x-1/2" />

            <div className="space-y-16">
              {experiences.map((exp, index) => {
                const isEven = index % 2 === 0;
                return (
                  <motion.div
                    key={exp.company}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: index * 0.1 }}
                    className={`relative flex flex-col sm:flex-row items-center ${
                      isEven ? 'sm:flex-row-reverse' : ''
                    }`}
                  >
                    {/* Timeline Node Point */}
                    <div className="absolute left-4 sm:left-1/2 top-0 sm:-translate-x-1/2 -translate-x-1/2 z-20">
                      <div className={`w-8 h-8 rounded-full border-4 ${
                        exp.isCurrent
                          ? 'border-[#0071E3] bg-white dark:bg-black shadow-[0_0_15px_#0071E3]'
                          : 'border-[#86868B] bg-white dark:bg-black'
                      } flex items-center justify-center`}>
                        <div className={`w-2.5 h-2.5 rounded-full ${exp.isCurrent ? 'bg-[#0071E3] animate-pulse' : 'bg-[#86868B]'}`} />
                      </div>
                    </div>

                    {/* Card Content */}
                    <div className={`w-full sm:w-[calc(50%-2rem)] pl-12 sm:pl-0 ${
                      isEven ? 'sm:text-right' : 'sm:text-left'
                    }`}>
                      <motion.div
                        whileHover={{ y: -4 }}
                        className="p-8 rounded-3xl bg-[#F5F5F7] dark:bg-[#161617] border border-black/5 dark:border-white/10 shadow-apple dark:shadow-apple-dark"
                      >
                        <div className={`flex items-center gap-3 mb-3 ${isEven ? 'sm:flex-row-reverse sm:justify-start' : ''}`}>
                          <div className="w-10 h-10 rounded-2xl bg-[#0071E3]/10 text-[#0071E3] dark:text-[#2997FF] flex items-center justify-center flex-shrink-0">
                            <Building2 className="w-5 h-5" />
                          </div>
                          <div>
                            <span className="text-xs font-semibold text-[#0071E3] dark:text-[#2997FF] uppercase tracking-wider block">
                              {exp.period}
                            </span>
                            <h3 className="text-xl font-semibold tracking-tight text-[#1D1D1F] dark:text-[#F5F5F7]">
                              {exp.role}
                            </h3>
                          </div>
                        </div>

                        <h4 className="text-base font-semibold text-[#1D1D1F] dark:text-[#F5F5F7] mb-2">
                          {exp.company}
                        </h4>

                        <div className={`flex flex-wrap items-center gap-3 text-xs text-[#6E6E73] dark:text-[#86868B] mb-4 ${
                          isEven ? 'sm:justify-end' : ''
                        }`}>
                          <span className="inline-flex items-center gap-1">
                            <MapPin className="w-3.5 h-3.5" />
                            {exp.location}
                          </span>
                          <span className="px-2 py-0.5 rounded-full bg-black/5 dark:bg-white/10 font-mono">
                            {exp.badge}
                          </span>
                        </div>

                        <p className="text-sm text-[#6E6E73] dark:text-[#86868B] leading-relaxed mb-4">
                          {exp.description}
                        </p>

                        {/* Bullet points */}
                        <ul className="space-y-2 mb-6 text-xs text-[#6E6E73] dark:text-[#86868B]">
                          {exp.responsibilities.slice(0, 3).map((item, i) => (
                            <li key={i} className={`flex items-start gap-2 ${isEven ? 'sm:flex-row-reverse sm:text-right' : ''}`}>
                              <CheckCircle2 className="w-3.5 h-3.5 text-[#0071E3] dark:text-[#2997FF] flex-shrink-0 mt-0.5" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>

                        {/* Tech Pills */}
                        <div className={`flex flex-wrap gap-1.5 ${isEven ? 'sm:justify-end' : ''}`}>
                          {exp.tech.map((t) => (
                            <span
                              key={t}
                              className="px-2.5 py-1 rounded-full text-[11px] font-medium bg-white dark:bg-black text-[#1D1D1F] dark:text-[#F5F5F7] border border-black/5 dark:border-white/10"
                            >
                              {t}
                            </span>
                          ))}
                        </div>

                      </motion.div>
                    </div>

                  </motion.div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
