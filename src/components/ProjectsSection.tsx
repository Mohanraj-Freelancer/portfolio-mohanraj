import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, ShoppingCart, Bike, FileText, Users, MessageSquare, Heart, Utensils, Sparkles, Check, ChevronRight, X } from 'lucide-react';

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  badge: string;
  tagline: string;
  overview: string;
  icon: any;
  tech: string[];
  responsibilities: string[];
  keyFeatures: string[];
  gradient: string;
  appStoreUrl?: string;
  githubUrl?: string;
  liveDemoUrl?: string;
  mockupBg: string;
}

const projects: Project[] = [
  {
    id: 'sfa360',
    title: 'SFA 360',
    subtitle: 'Offline Medical Sales System',
    badge: 'Flagship Enterprise App',
    tagline: 'Zero-latency offline order processing for pharmaceutical giants.',
    overview: 'A full-featured offline sales force automation platform using custom SQLite local database engines for order placement, stock allocation, product catalogs, and field rep analytics without internet connection.',
    icon: ShoppingCart,
    tech: ['Swift', 'SQLite', 'Offline-First', 'Medical Domain', 'UIKit', 'Clean Architecture'],
    responsibilities: [
      'Engineered local SQLite database sync layer handling over 100,000+ SKU inventory items.',
      'Designed offline transaction queues with automatic background retry and conflict resolution.',
      'Built custom 60fps order creation UI reducing order placement time by 40%.',
    ],
    keyFeatures: [
      '100% offline order & invoice generation',
      'Instant catalog searching under 2 milliseconds',
      'Background delta sync when network returns',
      'Role-based medical representative permissions',
    ],
    gradient: 'from-blue-600 via-indigo-600 to-cyan-500',
    githubUrl: 'https://github.com/Mohanraj-Freelancer',
    mockupBg: '#0b192c',
  },
  {
    id: 'liveorder-csquare',
    title: 'LiveOrder-csquare',
    subtitle: 'Enterprise Order Management System',
    badge: 'App Store Featured',
    tagline: 'Real-time order management & live tracking for enterprise supply chains.',
    overview: 'Developed a real-time order management application using Swift, UIKit, and MVVM. Integrated REST APIs, WebSockets, and Swift Concurrency (async/await) for efficient order processing and live status updates.',
    icon: ShoppingCart,
    tech: ['Swift', 'UIKit', 'MVVM', 'REST APIs', 'WebSockets', 'Swift Concurrency', 'async/await'],
    responsibilities: [
      'Developed a real-time order management application using Swift, UIKit, and MVVM architecture.',
      'Integrated REST APIs, WebSockets, and Swift Concurrency (async/await) for efficient order processing and live status updates.',
      'Optimized networking pipeline and real-time state synchronization for enterprise buyers and distributors.',
    ],
    keyFeatures: [
      'Real-time order placement & live status tracking via WebSockets',
      'Swift Concurrency (async/await) for thread-safe network requests',
      'Clean MVVM architecture with reactive UI updates in UIKit',
      'Live production deployment on Apple App Store',
    ],
    gradient: 'from-[#0071E3] via-indigo-600 to-cyan-600',
    appStoreUrl: 'https://apps.apple.com/app/id1660025243',
    githubUrl: 'https://github.com/Mohanraj-Freelancer',
    mockupBg: '#0b132b',
  },
  {
    id: 'hero-cycles',
    title: 'Hero Cycles',
    subtitle: 'Multi-Level Enterprise Sales Network',
    badge: 'Enterprise Mobility',
    tagline: 'Hierarchical sales ecosystem for India’s largest bicycle manufacturer.',
    overview: 'Multi-tier iOS enterprise app serving Dealers, Area Sales Managers (ASM), Regional Managers (RM), and National Managers. Handles stock forecasting, warranty registration, and real-time sales dashboards.',
    icon: Bike,
    tech: ['SwiftUI', 'REST API', 'Multi-Role Hierarchy', 'Charts', 'Combine'],
    responsibilities: [
      'Developed declarative SwiftUI views for complex multi-level approval matrix workflows.',
      'Integrated RESTful APIs with pagination and JSON caching for fast data rendering.',
      'Refactored legacy network modules to Swift Concurrency async/await.',
    ],
    keyFeatures: [
      'Hierarchical role switcher (Dealer to National Manager)',
      'Live stock tracking and bulk dealer ordering',
      'Dynamic charts and target achievement meters',
      'Instant PDF quote generation',
    ],
    gradient: 'from-orange-600 via-red-600 to-amber-500',
    githubUrl: 'https://github.com/Mohanraj-Freelancer',
    mockupBg: '#1c0a00',
  },
  {
    id: 'live-doc',
    title: 'Live-Doc',
    subtitle: 'QR-Authenticated Document Engine',
    badge: 'Security & Auth',
    tagline: 'Fast document verification & offline upload engine.',
    overview: 'High-security document management app utilizing QR code instant authentication, offline document capture, image compression, and resilient upload queueing under poor network conditions.',
    icon: FileText,
    tech: ['Swift', 'QR Scanner', 'Sync Engine', 'Core Graphics', 'Offline Upload'],
    responsibilities: [
      'Implemented AVFoundation QR code scanning with sub-second authentication.',
      'Designed image compression pipeline reducing document file size by 70% with zero quality loss.',
      'Created persistent background upload session manager via URLSession.',
    ],
    keyFeatures: [
      'Instant QR Code hardware authentication',
      'Offline document scanning and PDF compiler',
      'Resilient chunked upload engine',
      'AES-256 local document storage encryption',
    ],
    gradient: 'from-emerald-600 via-teal-600 to-green-500',
    githubUrl: 'https://github.com/Mohanraj-Freelancer',
    mockupBg: '#041f17',
  },
  {
    id: 'callproofplus',
    title: 'CALLPROOFPLUS',
    subtitle: 'Sales Communication CRM',
    badge: 'Real-Time Voice & Maps',
    tagline: 'Complete mobile CRM with integrated VoIP & live geolocation tracking.',
    overview: 'Full lifecycle CRM app featuring Twilio native voice calls, ZegoCloud real-time chat, Google Maps location tracking, and client interaction histories stored in SQLite.',
    icon: Users,
    tech: ['Swift', 'Twilio Voice', 'ZegoCloud Chat', 'Google Maps API', 'SQLite'],
    responsibilities: [
      'Integrated Twilio Voice SDK for in-app cellular & VoIP call recording.',
      'Configured ZegoCloud WebSocket channels for instant team messaging.',
      'Optimized CoreLocation background GPS tracking to preserve battery health.',
    ],
    keyFeatures: [
      'In-app VoIP calling with automated call logs',
      'Real-time chat with image & location attachments',
      'Interactive map pins for client visit planning',
      'Lead funnel analytics dashboard',
    ],
    gradient: 'from-purple-600 via-[#0071E3] to-pink-500',
    githubUrl: 'https://github.com/Mohanraj-Freelancer',
    mockupBg: '#150628',
  },
  {
    id: 'qliq1s',
    title: "Qliq1's",
    subtitle: 'Social Media & Live Video Platform',
    badge: 'Media & Streaming',
    tagline: 'Interactive social hub with Agora HD video streaming.',
    overview: 'End-to-end social media application featuring Agora live video broadcasts, Firebase push notifications, social feeds, news APIs, and interactive comments.',
    icon: MessageSquare,
    tech: ['SwiftUI', 'Agora SDK', 'Firebase FCM', 'OpenWeather', 'NewsData API'],
    responsibilities: [
      'Integrated Agora Video SDK for multi-host live video streaming with sub-100ms latency.',
      'Configured Firebase Cloud Messaging for instant notifications on likes and followers.',
      'Built custom SwiftUI infinite scroll feed with lazy image caching.',
    ],
    keyFeatures: [
      'Agora HD Video calling and live broadcasting',
      'Real-time social feeds with rich media',
      'Firebase push notification center',
      'Custom weather & trending news widgets',
    ],
    gradient: 'from-indigo-600 via-purple-600 to-pink-600',
    githubUrl: 'https://github.com/Mohanraj-Freelancer',
    mockupBg: '#110729',
  },
  {
    id: 'pranayama',
    title: 'Pranayama App',
    subtitle: 'Breathing & Health Experience',
    badge: 'StoreKit Payments',
    tagline: 'Mindfulness & guided breathing with StoreKit in-app purchases.',
    overview: 'Wellness iOS application featuring Apple StoreKit subscription models, beginner to advanced breathing exercise modules, and haptic feedback breath pacing.',
    icon: Heart,
    tech: ['Swift', 'StoreKit', 'In-App Purchase', 'CoreHaptics', 'HealthKit'],
    responsibilities: [
      'Implemented Apple StoreKit in-app purchases and receipt validation engine.',
      'Created custom CoreHaptics vibration patterns guiding user breath cycles.',
      'Engineered smooth circular timer UI with Apple design aesthetics.',
    ],
    keyFeatures: [
      'Apple In-App Purchases (Monthly & Annual Subscriptions)',
      'Custom CoreHaptics breath rhythm feedback',
      'Daily streak tracking and health metrics',
      'Clean, distraction-free zen user interface',
    ],
    gradient: 'from-rose-600 via-pink-600 to-amber-500',
    githubUrl: 'https://github.com/Mohanraj-Freelancer',
    mockupBg: '#21050e',
  },
  {
    id: 'bistra',
    title: 'BISTRA',
    subtitle: 'Restaurant Operations Suite',
    badge: '3-App Ecosystem',
    tagline: 'Comprehensive 3-app suite for Admin, Waiter, and Customer ordering.',
    overview: 'End-to-end restaurant ecosystem comprising three dedicated iOS apps (Admin Portal, Waiter Order Pad, Customer Digital Menu). Features SwiftEntryKit alerts, iCarousel, and Alamofire networking.',
    icon: Utensils,
    tech: ['Swift', 'Multi-App Architecture', 'Alamofire', 'Push Notifications', 'QR Generator'],
    responsibilities: [
      'Architected 3 modular iOS applications sharing a core data model framework.',
      'Built real-time order status updates via push notifications and sockets.',
      'Designed interactive table management grid for restaurant staff.',
    ],
    keyFeatures: [
      '3 interconnected apps (Admin, Waiter, Customer)',
      'Table QR code scanner and instant ordering',
      'Kitchen order display sync',
      'Alamofire REST communication with retry logic',
    ],
    gradient: 'from-amber-600 via-orange-600 to-yellow-500',
    githubUrl: 'https://github.com/Mohanraj-Freelancer',
    mockupBg: '#231200',
  },
];

export const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-28 md:py-36 relative bg-[#F5F5F7] dark:bg-[#161617] text-[#1D1D1F] dark:text-[#F5F5F7] overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          
          {/* Header */}
          <div className="text-center mb-24 max-w-3xl mx-auto">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-[#0071E3] dark:text-[#2997FF] mb-3 block"
            >
              Featured Product Portfolio
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-6xl font-semibold tracking-tighter leading-tight mb-6 apple-gradient-text"
            >
              Every project unveiled like a new Apple release.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg sm:text-xl text-[#6E6E73] dark:text-[#86868B] font-normal"
            >
              Explore 8 production iOS applications built with precision engineering, clean architecture, and native performance.
            </motion.p>
          </div>

          {/* Projects Showcase List */}
          <div className="space-y-20 sm:space-y-28">
            {projects.map((project, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.8 }}
                  className="rounded-3xl bg-white dark:bg-[#000000] border border-black/5 dark:border-white/10 shadow-apple dark:shadow-apple-dark overflow-hidden grid lg:grid-cols-12 items-stretch"
                >
                  {/* Text Details Column */}
                  <div className={`lg:col-span-6 p-8 sm:p-12 flex flex-col justify-between ${
                    isEven ? 'lg:order-1' : 'lg:order-2'
                  }`}>
                    <div>
                      {/* Badge */}
                      <div className="flex items-center gap-2 mb-4">
                        <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#0071E3]/10 text-[#0071E3] dark:text-[#2997FF]">
                          {project.badge}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="text-3xl sm:text-5xl font-semibold tracking-tight text-[#1D1D1F] dark:text-[#F5F5F7] mb-2">
                        {project.title}
                      </h3>
                      <p className="text-base sm:text-lg font-medium text-[#0071E3] dark:text-[#2997FF] mb-4">
                        {project.subtitle}
                      </p>

                      {/* Tagline & Overview */}
                      <p className="text-base sm:text-lg font-normal text-[#1D1D1F] dark:text-[#F5F5F7] mb-3 leading-snug">
                        {project.tagline}
                      </p>
                      <p className="text-sm text-[#6E6E73] dark:text-[#86868B] leading-relaxed mb-6">
                        {project.overview}
                      </p>

                      {/* Key features bullets */}
                      <div className="space-y-2 mb-8">
                        {project.keyFeatures.slice(0, 3).map((feat, i) => (
                          <div key={i} className="flex items-center gap-2 text-xs text-[#6E6E73] dark:text-[#86868B]">
                            <Check className="w-4 h-4 text-[#0071E3] dark:text-[#2997FF] flex-shrink-0" />
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>

                      {/* Tech Pills */}
                      <div className="flex flex-wrap gap-2 mb-8">
                        {project.tech.map((t) => (
                          <span
                            key={t}
                            className="px-3 py-1 rounded-full text-xs font-medium bg-[#F5F5F7] dark:bg-[#161617] text-[#1D1D1F] dark:text-[#F5F5F7] border border-black/5 dark:border-white/10"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action buttons */}
                    <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-black/5 dark:border-white/10">
                      <button
                        onClick={() => setSelectedProject(project)}
                        className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#0071E3] text-white font-medium text-xs sm:text-sm hover:bg-[#0077ED] transition-colors shadow-sm"
                      >
                        <span>View Architecture & Details</span>
                        <ChevronRight className="w-4 h-4" />
                      </button>

                      {project.appStoreUrl && (
                        <a
                          href={project.appStoreUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-black dark:bg-white text-white dark:text-black font-medium text-xs sm:text-sm hover:opacity-90 transition-all shadow-sm"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                          <span>App Store</span>
                        </a>
                      )}

                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full border border-black/10 dark:border-white/15 text-[#1D1D1F] dark:text-[#F5F5F7] font-medium text-xs sm:text-sm hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
                        >
                          <Github className="w-4 h-4" />
                          <span>GitHub</span>
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Device / Graphic Mockup Column */}
                  <div className={`lg:col-span-6 p-8 sm:p-12 flex items-center justify-center relative overflow-hidden bg-gradient-to-br ${project.gradient} ${
                    isEven ? 'lg:order-2' : 'lg:order-1'
                  }`}>
                    {/* Background glow effects */}
                    <div className="absolute inset-0 bg-black/20 backdrop-blur-[2px]" />

                    {/* Device Showcase Frame */}
                    <motion.div
                      whileHover={{ scale: 1.04, rotate: isEven ? 1 : -1 }}
                      transition={{ type: 'spring', stiffness: 200, damping: 20 }}
                      className="relative z-10 w-full max-w-sm rounded-[36px] border-[6px] border-white/20 shadow-2xl p-6 text-white backdrop-blur-md"
                      style={{ backgroundColor: project.mockupBg }}
                    >
                      {/* Top App Header */}
                      <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/10">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-2xl bg-white/10 flex items-center justify-center border border-white/20">
                            <project.icon className="w-5 h-5 text-white" />
                          </div>
                          <div>
                            <p className="text-sm font-bold">{project.title}</p>
                            <p className="text-[10px] text-white/70">iOS 18 Native App</p>
                          </div>
                        </div>
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      </div>

                      {/* Mockup Content Lines */}
                      <div className="space-y-3 mb-6">
                        <div className="p-3 rounded-2xl bg-white/10 border border-white/10">
                          <p className="text-[10px] text-white/60">Key Technical Highlight</p>
                          <p className="text-xs font-semibold text-white mt-1">
                            {project.responsibilities[0]}
                          </p>
                        </div>
                        <div className="p-3 rounded-2xl bg-white/5 border border-white/10">
                          <p className="text-[10px] text-white/60">Primary Frameworks</p>
                          <p className="text-xs font-semibold text-white/90 mt-1">
                            {project.tech.slice(0, 4).join(' • ')}
                          </p>
                        </div>
                      </div>

                      {/* Status Footer */}
                      <div className="flex items-center justify-between text-[10px] text-white/50 pt-2 border-t border-white/10 font-mono">
                        <span>Production Release</span>
                        <span>60 FPS Native</span>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>

      {/* Detail Modal Drawer */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[10000] bg-black/70 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 30 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 30 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-3xl max-h-[85vh] overflow-y-auto rounded-3xl bg-white dark:bg-[#161617] text-[#1D1D1F] dark:text-[#F5F5F7] p-8 sm:p-12 border border-black/10 dark:border-white/15 shadow-2xl relative"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 p-2 rounded-full bg-black/5 dark:bg-white/10 text-[#1D1D1F] dark:text-[#F5F5F7] hover:bg-black/10 transition-colors"
              >
                <X size={20} />
              </button>

              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#0071E3]/10 text-[#0071E3] dark:text-[#2997FF]">
                  {selectedProject.badge}
                </span>
                <span className="text-xs font-mono text-[#6E6E73] dark:text-[#86868B]">
                  Project Deep Dive
                </span>
              </div>

              <h3 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-2">
                {selectedProject.title}
              </h3>
              <p className="text-lg font-medium text-[#0071E3] dark:text-[#2997FF] mb-6">
                {selectedProject.subtitle}
              </p>

              <p className="text-base text-[#6E6E73] dark:text-[#86868B] leading-relaxed mb-8">
                {selectedProject.overview}
              </p>

              {/* Responsibilities */}
              <div className="mb-8">
                <h4 className="text-lg font-semibold tracking-tight mb-4">Engineering Responsibilities</h4>
                <div className="space-y-3">
                  {selectedProject.responsibilities.map((resp, i) => (
                    <div key={i} className="p-4 rounded-2xl bg-[#F5F5F7] dark:bg-[#000000] border border-black/5 dark:border-white/10 flex items-start gap-3">
                      <Sparkles className="w-5 h-5 text-[#0071E3] dark:text-[#2997FF] flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-[#1D1D1F] dark:text-[#F5F5F7] leading-relaxed">{resp}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Features */}
              <div className="mb-8">
                <h4 className="text-lg font-semibold tracking-tight mb-4">Key System Features</h4>
                <div className="grid sm:grid-cols-2 gap-3">
                  {selectedProject.keyFeatures.map((feat, i) => (
                    <div key={i} className="p-3.5 rounded-xl bg-[#F5F5F7] dark:bg-[#000000] border border-black/5 dark:border-white/10 text-xs font-medium flex items-center gap-2">
                      <Check className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Stack */}
              <div className="mb-8">
                <h4 className="text-xs font-mono uppercase tracking-wider text-[#6E6E73] dark:text-[#86868B] mb-3">Tech Stack & Frameworks</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tech.map((t) => (
                    <span key={t} className="px-3 py-1 rounded-full text-xs font-medium bg-[#0071E3]/10 text-[#0071E3] dark:text-[#2997FF]">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-wrap items-center justify-end gap-3 pt-6 border-t border-black/10 dark:border-white/10">
                {selectedProject.appStoreUrl && (
                  <a
                    href={selectedProject.appStoreUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-black dark:bg-white text-white dark:text-black font-medium text-sm hover:opacity-90 transition-all shadow-sm"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>View on App Store</span>
                  </a>
                )}
                <button
                  onClick={() => setSelectedProject(null)}
                  className="px-6 py-2.5 rounded-full bg-[#0071E3] text-white font-medium text-sm hover:bg-[#0077ED]"
                >
                  Close Showcase
                </button>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
