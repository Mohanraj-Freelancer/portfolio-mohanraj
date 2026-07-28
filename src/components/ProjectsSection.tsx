import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ExternalLink, 
  Github, 
  ShoppingCart, 
  Bike, 
  FileText, 
  Users, 
  MessageSquare, 
  Heart, 
  Utensils, 
  Sparkles, 
  Check, 
  ChevronRight, 
  X,
  Layers,
  Database,
  Cpu,
  ShieldCheck,
  Zap,
  Radio,
  QrCode
} from 'lucide-react';

import { SFA360DeviceMockup, LiveOrderDeviceMockup, LiveDocDeviceMockup } from './DeviceMockups';
import { IPhone3DMockup } from './IPhone3DMockup';

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
  bgGlow: string;
  appStoreUrl?: string;
  githubUrl?: string;
  mockupType: 'sfa360' | 'liveorder' | 'livedoc' | '3diphone' | 'generic';
  metrics: { label: string; value: string }[];
}

const featuredProjects: Project[] = [
  {
    id: 'sfa360',
    title: 'SFA 360 Enterprise',
    subtitle: 'Offline Medical Sales Force Automation System',
    badge: 'Flagship Enterprise Product',
    tagline: 'Zero-latency offline order placement & stock allocation for pharmaceutical giants.',
    overview: 'A full-featured offline sales force automation platform using custom SQLite local database engines for instant order creation, stock allocation, product catalog searching, and field rep analytics without internet connectivity.',
    icon: ShoppingCart,
    mockupType: 'sfa360',
    gradient: 'from-blue-600 via-indigo-700 to-cyan-700',
    bgGlow: 'rgba(0, 113, 227, 0.15)',
    tech: ['Swift 6', 'SQLite Engine', 'Offline-First', 'UIKit', 'Clean Architecture', 'REST APIs'],
    responsibilities: [
      'Engineered a thread-safe local SQLite database sync layer handling 100,000+ SKU inventory items under 2ms.',
      'Designed offline transaction queues with automatic background retry and conflict resolution.',
      'Built a 60fps order creation UI that reduced order placement time by 40% for field representatives.',
    ],
    keyFeatures: [
      '100% offline order & invoice generation',
      'Instant catalog search latency under 2 milliseconds',
      'Background delta sync when network connection resumes',
      'Role-based medical representative permissions',
    ],
    metrics: [
      { label: 'SKU Inventory Cached', value: '100,000+' },
      { label: 'Database Latency', value: '< 2 ms' },
      { label: 'Order Placement Time', value: '-40%' },
    ],
    appStoreUrl: 'https://apps.apple.com/app/id6453795530',
    githubUrl: 'https://github.com/Mohanraj-Freelancer',
  },
  {
    id: 'liveorder-csquare',
    title: 'LiveOrder-csquare',
    subtitle: 'Enterprise Order Management & Real-Time Tracking System',
    badge: 'App Store Featured Live Product',
    tagline: 'Real-time order management & live status pipeline for enterprise supply chains.',
    overview: 'Developed a real-time order management application using Swift, UIKit, and MVVM. Integrated REST APIs, WebSockets, and Swift Concurrency (async/await) for efficient order processing and live status updates.',
    icon: Radio,
    mockupType: 'liveorder',
    gradient: 'from-cyan-600 via-[#0071E3] to-blue-800',
    bgGlow: 'rgba(41, 151, 255, 0.15)',
    tech: ['Swift 6', 'UIKit', 'MVVM Pattern', 'REST APIs', 'WebSockets', 'Swift Concurrency', 'async/await'],
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
    metrics: [
      { label: 'App Store Status', value: 'Live Production' },
      { label: 'App ID', value: '1660025243' },
      { label: 'UI Frame Rate', value: '60 FPS Native' },
    ],
    appStoreUrl: 'https://apps.apple.com/app/id1660025243',
    githubUrl: 'https://github.com/Mohanraj-Freelancer',
  },
  {
    id: 'live-doc',
    title: 'Live-Doc Engine',
    subtitle: 'QR-Authenticated High-Security Document Platform',
    badge: 'Hardware Security & AVFoundation',
    tagline: 'Instant QR code authentication & offline resilient upload engine.',
    overview: 'High-security document management app utilizing hardware AVFoundation QR code instant authentication, offline document capture, Core Graphics image compression, and resilient upload queueing under poor network conditions.',
    icon: FileText,
    mockupType: 'livedoc',
    gradient: 'from-emerald-600 via-teal-700 to-green-800',
    bgGlow: 'rgba(16, 185, 129, 0.15)',
    tech: ['Swift', 'AVFoundation QR Scanner', 'Sync Engine', 'Core Graphics', 'URLSession Background Queue'],
    responsibilities: [
      'Implemented AVFoundation QR code scanning with sub-second hardware authentication.',
      'Designed an image compression pipeline reducing document file size by 70% with zero quality loss.',
      'Created a persistent background upload session manager via URLSession.',
    ],
    keyFeatures: [
      'Instant QR Code hardware authentication',
      'Offline document scanning and PDF compiler',
      'Resilient chunked upload engine',
      'AES-256 local document storage encryption',
    ],
    metrics: [
      { label: 'Authentication Speed', value: 'Sub-second' },
      { label: 'Image Compression', value: '-70% Size' },
      { label: 'Upload Reliability', value: '100% Retried' },
    ],
    appStoreUrl: 'https://apps.apple.com/app/id6504079182',
    githubUrl: 'https://github.com/Mohanraj-Freelancer',
  },
  {
    id: 'hero-cycles',
    title: 'Hero Cycles Mobility',
    subtitle: 'Multi-Level Enterprise Sales Hierarchy Ecosystem',
    badge: 'Enterprise Supply Mobility',
    tagline: 'Hierarchical multi-tier sales ecosystem for India’s largest bicycle manufacturer.',
    overview: 'Multi-tier iOS enterprise app serving Dealers, Area Sales Managers (ASM), Regional Managers (RM), and National Managers. Handles stock forecasting, warranty registration, and real-time sales dashboards.',
    icon: Bike,
    mockupType: '3diphone',
    gradient: 'from-amber-600 via-orange-700 to-red-700',
    bgGlow: 'rgba(245, 158, 11, 0.15)',
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
    metrics: [
      { label: 'User Roles', value: '4 Tier Hierarchy' },
      { label: 'Network Pipeline', value: 'Async/Await' },
      { label: 'UI Architecture', value: 'Declarative SwiftUI' },
    ],
    githubUrl: 'https://github.com/Mohanraj-Freelancer',
  },
  {
    id: 'callproofplus',
    title: 'CALLPROOFPLUS',
    subtitle: 'Sales Communication CRM & Geolocation Tracker',
    badge: 'Real-Time Voice & Maps',
    tagline: 'Complete mobile CRM with integrated Twilio VoIP & live geolocation tracking.',
    overview: 'Full lifecycle CRM app featuring Twilio native voice calls, ZegoCloud real-time chat, Google Maps location tracking, and client interaction histories stored in SQLite.',
    icon: Users,
    mockupType: '3diphone',
    gradient: 'from-purple-600 via-indigo-700 to-pink-700',
    bgGlow: 'rgba(168, 85, 247, 0.15)',
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
    metrics: [
      { label: 'VoIP Engine', value: 'Twilio Voice' },
      { label: 'Messaging Latency', value: '< 50ms' },
      { label: 'Storage', value: 'Local SQLite' },
    ],
    githubUrl: 'https://github.com/Mohanraj-Freelancer',
  },
];

export const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeStoryTab, setActiveStoryTab] = useState<Record<string, 'narrative' | 'tech' | 'impact'>>({});

  const setStoryTab = (projectId: string, tab: 'narrative' | 'tech' | 'impact') => {
    setActiveStoryTab((prev) => ({ ...prev, [projectId]: tab }));
  };

  return (
    <section id="projects" className="py-28 md:py-36 relative bg-[#F5F5F7] dark:bg-[#0a0a0c] text-[#1D1D1F] dark:text-[#F5F5F7] overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          
          {/* Main Showcase Header */}
          <div className="text-center mb-24 max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-black/10 dark:border-white/15 bg-black/5 dark:bg-white/10 backdrop-blur-md mb-4"
            >
              <Sparkles size={14} className="text-[#0071E3] dark:text-[#2997FF]" />
              <span className="text-xs font-semibold uppercase tracking-wider text-[#0071E3] dark:text-[#2997FF]">
                Selected Work & Case Studies
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-6xl font-semibold tracking-tighter leading-tight mb-6 apple-gradient-text"
            >
              Immersive Product Storytelling.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg sm:text-xl text-[#6E6E73] dark:text-[#86868B] font-normal"
            >
              Explore flagship iOS applications through interactive device mockups, architecture blueprints, and real-world performance metrics.
            </motion.p>
          </div>

          {/* Full-Screen Immersive Story Cards */}
          <div className="space-y-24 sm:space-y-32">
            {featuredProjects.map((project, index) => {
              const currentTab = activeStoryTab[project.id] || 'narrative';

              return (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.8 }}
                  className="relative rounded-[40px] bg-white dark:bg-[#121216] border border-black/10 dark:border-white/15 shadow-2xl overflow-hidden"
                >
                  {/* Subtle Ambient Section Glow */}
                  <div
                    className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[400px] blur-[150px] pointer-events-none rounded-full"
                    style={{ backgroundColor: project.bgGlow }}
                  />

                  <div className="grid lg:grid-cols-12 items-stretch relative z-10">
                    
                    {/* Story Narrative Column */}
                    <div className="lg:col-span-7 p-8 sm:p-14 flex flex-col justify-between">
                      <div>
                        {/* Header Badges */}
                        <div className="flex flex-wrap items-center gap-3 mb-6">
                          <span className="text-xs font-mono font-bold tracking-widest text-[#0071E3] dark:text-[#2997FF] uppercase">
                            STORY 0{index + 1} //
                          </span>
                          <span className="px-3.5 py-1 rounded-full text-xs font-semibold bg-[#0071E3]/10 text-[#0071E3] dark:text-[#2997FF]">
                            {project.badge}
                          </span>
                        </div>

                        {/* Title & Subtitle */}
                        <h3 className="text-3xl sm:text-5xl font-semibold tracking-tight text-[#1D1D1F] dark:text-[#F5F5F7] mb-2">
                          {project.title}
                        </h3>
                        <p className="text-base sm:text-lg font-medium text-[#0071E3] dark:text-[#2997FF] mb-6">
                          {project.subtitle}
                        </p>

                        {/* Story Phase Nav Tabs */}
                        <div className="flex gap-2 p-1 bg-[#F5F5F7] dark:bg-white/10 rounded-2xl border border-black/5 dark:border-white/10 mb-8 max-w-md">
                          <button
                            onClick={() => setStoryTab(project.id, 'narrative')}
                            className={`flex-1 py-1.5 text-xs font-semibold rounded-xl transition-all ${
                              currentTab === 'narrative'
                                ? 'bg-[#0071E3] text-white shadow-sm'
                                : 'text-[#6E6E73] dark:text-[#86868B] hover:text-[#1D1D1F] dark:hover:text-[#F5F5F7]'
                            }`}
                          >
                            01. Story
                          </button>
                          <button
                            onClick={() => setStoryTab(project.id, 'tech')}
                            className={`flex-1 py-1.5 text-xs font-semibold rounded-xl transition-all ${
                              currentTab === 'tech'
                                ? 'bg-[#0071E3] text-white shadow-sm'
                                : 'text-[#6E6E73] dark:text-[#86868B] hover:text-[#1D1D1F] dark:hover:text-[#F5F5F7]'
                            }`}
                          >
                            02. Architecture
                          </button>
                          <button
                            onClick={() => setStoryTab(project.id, 'impact')}
                            className={`flex-1 py-1.5 text-xs font-semibold rounded-xl transition-all ${
                              currentTab === 'impact'
                                ? 'bg-[#0071E3] text-white shadow-sm'
                                : 'text-[#6E6E73] dark:text-[#86868B] hover:text-[#1D1D1F] dark:hover:text-[#F5F5F7]'
                            }`}
                          >
                            03. Impact
                          </button>
                        </div>

                        {/* Dynamic Story Content */}
                        <AnimatePresence mode="wait">
                          {currentTab === 'narrative' && (
                            <motion.div
                              key="narrative"
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: -10 }}
                              transition={{ duration: 0.2 }}
                              className="space-y-4 mb-8"
                            >
                              <p className="text-lg font-medium text-[#1D1D1F] dark:text-[#F5F5F7] leading-snug">
                                "{project.tagline}"
                              </p>
                              <p className="text-sm sm:text-base text-[#6E6E73] dark:text-[#86868B] leading-relaxed">
                                {project.overview}
                              </p>
                            </motion.div>
                          )}

                          {currentTab === 'tech' && (
                            <motion.div
                              key="tech"
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: -10 }}
                              transition={{ duration: 0.2 }}
                              className="space-y-3 mb-8"
                            >
                              <p className="text-xs font-mono uppercase tracking-wider text-[#6E6E73] dark:text-[#86868B]">
                                Engineering Contributions:
                              </p>
                              {project.responsibilities.map((resp, rIdx) => (
                                <div key={rIdx} className="p-3.5 rounded-2xl bg-[#F5F5F7] dark:bg-white/5 border border-black/5 dark:border-white/10 flex items-start gap-3">
                                  <Sparkles className="w-4 h-4 text-[#0071E3] dark:text-[#2997FF] flex-shrink-0 mt-0.5" />
                                  <span className="text-xs sm:text-sm text-[#1D1D1F] dark:text-[#F5F5F7] leading-normal">{resp}</span>
                                </div>
                              ))}
                            </motion.div>
                          )}

                          {currentTab === 'impact' && (
                            <motion.div
                              key="impact"
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: -10 }}
                              transition={{ duration: 0.2 }}
                              className="space-y-4 mb-8"
                            >
                              <p className="text-xs font-mono uppercase tracking-wider text-[#6E6E73] dark:text-[#86868B]">
                                Key System Specifications:
                              </p>
                              <div className="grid grid-cols-3 gap-3">
                                {project.metrics.map((m, mIdx) => (
                                  <div key={mIdx} className="p-4 rounded-2xl bg-[#F5F5F7] dark:bg-white/5 border border-black/5 dark:border-white/10 text-center">
                                    <p className="text-lg sm:text-xl font-bold text-[#0071E3] dark:text-[#2997FF] font-mono">{m.value}</p>
                                    <p className="text-[10px] text-[#6E6E73] dark:text-[#86868B] font-medium mt-0.5">{m.label}</p>
                                  </div>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>

                        {/* Framework Badges */}
                        <div className="flex flex-wrap gap-2 mb-8">
                          {project.tech.map((t) => (
                            <span
                              key={t}
                              className="px-3 py-1 rounded-full text-xs font-mono font-medium bg-[#F5F5F7] dark:bg-white/10 text-[#1D1D1F] dark:text-[#F5F5F7] border border-black/5 dark:border-white/10"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Action Links */}
                      <div className="flex flex-wrap items-center gap-3 pt-6 border-t border-black/5 dark:border-white/10">
                        <button
                          onClick={() => setSelectedProject(project)}
                          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#0071E3] hover:bg-[#0077ED] text-white font-medium text-xs sm:text-sm shadow-md transition-all hover:scale-[1.02]"
                        >
                          <span>Full Case Study & Architecture</span>
                          <ChevronRight className="w-4 h-4" />
                        </button>

                        {project.appStoreUrl && (
                          <a
                            href={project.appStoreUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-black dark:bg-white text-white dark:text-black font-medium text-xs sm:text-sm hover:opacity-90 transition-all shadow-sm"
                          >
                            <ExternalLink className="w-4 h-4" />
                            <span>View App Store</span>
                          </a>
                        )}

                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-black/10 dark:border-white/15 text-[#1D1D1F] dark:text-[#F5F5F7] font-medium text-xs sm:text-sm hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
                          >
                            <Github className="w-4 h-4" />
                            <span>GitHub</span>
                          </a>
                        )}
                      </div>
                    </div>

                    {/* Interactive Device Showcase Column */}
                    <div className="lg:col-span-5 p-8 sm:p-12 bg-gradient-to-b from-black/5 to-black/10 dark:from-white/5 dark:to-white/10 flex items-center justify-center relative overflow-hidden border-t lg:border-t-0 lg:border-l border-black/5 dark:border-white/10">
                      {project.mockupType === 'sfa360' && <SFA360DeviceMockup />}
                      {project.mockupType === 'liveorder' && <LiveOrderDeviceMockup />}
                      {project.mockupType === 'livedoc' && <LiveDocDeviceMockup />}
                      {project.mockupType === '3diphone' && <IPhone3DMockup initialScreen="sfa360" interactiveScreenTabs={false} />}
                    </div>

                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>

      {/* Deep-Dive Case Study Modal Drawer */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[10000] bg-black/75 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
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
                  Architecture Deep Dive
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

              {/* Key Features */}
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
                    <span key={t} className="px-3 py-1 rounded-full text-xs font-mono font-medium bg-[#0071E3]/10 text-[#0071E3] dark:text-[#2997FF]">
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
                  Close Case Study
                </button>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
