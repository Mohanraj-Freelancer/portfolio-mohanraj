import { ExternalLink, Database, Users, ShoppingCart, MessageSquare, Heart, Utensils, FileText, Bike } from 'lucide-react';
import { Button } from './ui/button';

const projects = [
  {
    title: 'SFA 360',
    subtitle: 'Offline Medical Sales System',
    description: 'A fully offline platform using local SQLite database for order management, product catalogs, inventory tracking, and analytics. Supports pharmaceutical and medical equipment workflows without internet dependency.',
    icon: ShoppingCart,
    tags: ['Swift', 'SQLite', 'Offline-First', 'Medical'],
    color: 'from-blue-500 to-cyan-500',
  },
  {
    title: 'Hero Cycles',
    subtitle: 'Multi-level Sales Application',
    description: 'Hierarchical sales app for Dealers, Area Sales Managers, Regional Managers, and National Managers with order placement, tracking, inventory checks, and role-based dashboards.',
    icon: Bike,
    tags: ['SwiftUI', 'REST API', 'Multi-Role', 'Enterprise'],
    color: 'from-orange-500 to-red-500',
  },
  {
    title: 'Live-Doc',
    subtitle: 'Document Uploader',
    description: 'QR-authenticated document management app with online and offline upload capability. Features secure QR-based login, offline-first flow with automatic sync, and optimized for unreliable network conditions.',
    icon: FileText,
    tags: ['Swift', 'QR Auth', 'Sync Engine', 'Offline'],
    color: 'from-green-500 to-emerald-500',
  },
  {
    title: 'CALLPROOFPLUS',
    subtitle: 'Sales CRM',
    description: 'Full lifecycle CRM application with Twilio voice calls, ZegoCloud real-time chat, Google Maps location features, and comprehensive SQLite data handling.',
    icon: Users,
    tags: ['Swift', 'Twilio', 'ZegoCloud', 'Google Maps'],
    color: 'from-purple-500 to-pink-500',
  },
  {
    title: "Qliq1's",
    subtitle: 'Social Networking Application',
    description: 'End-to-end social experience integrating Twilio SDK, OpenWeather API, NewsData API, Agora SDK for video calls, and Firebase Cloud Messaging.',
    icon: MessageSquare,
    tags: ['SwiftUI', 'Agora', 'FCM', 'Social'],
    color: 'from-indigo-500 to-violet-500',
  },
  {
    title: 'Pranayama App',
    subtitle: 'Breathing Exercise App',
    description: 'Wellness-focused breathing exercise app with Apple In-App Payments integration and beginner-friendly modules designed to improve user health experience.',
    icon: Heart,
    tags: ['Swift', 'In-App Purchase', 'Health', 'UI/UX'],
    color: 'from-rose-500 to-pink-500',
  },
  {
    title: 'BISTRA',
    subtitle: 'Restaurant Ecosystem',
    description: 'End-to-end restaurant solution with separate apps for Admin, Waiter, and Customers. Features Push Notifications, Alamofire, SwiftEntryKit, iCarousel, Kingfisher, and QR generator.',
    icon: Utensils,
    tags: ['Swift', 'Multi-App', 'Push Notifications', 'QR'],
    color: 'from-amber-500 to-yellow-500',
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-primary font-mono text-sm tracking-wider uppercase mb-4 block">
              Portfolio
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Featured
              <span className="text-gradient"> Projects</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              A selection of iOS applications I've built, showcasing diverse industries and technical challenges.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className="group relative p-6 rounded-2xl bg-gradient-card border border-border/50 hover:border-primary/30 transition-all duration-500 hover:-translate-y-2 overflow-hidden"
              >
                {/* Gradient Overlay on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                
                {/* Icon */}
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${project.color} p-0.5 mb-4`}>
                  <div className="w-full h-full rounded-xl bg-card flex items-center justify-center">
                    <project.icon className="w-6 h-6 text-foreground" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-lg font-semibold mb-1">{project.title}</h3>
                <p className="text-primary text-sm font-medium mb-3">{project.subtitle}</p>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 text-xs font-medium rounded-full bg-secondary text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
