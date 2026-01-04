const skillCategories = [
  {
    title: 'Languages & Frameworks',
    skills: [
      { name: 'Swift', level: 95 },
      { name: 'SwiftUI', level: 90 },
      { name: 'UIKit', level: 90 },
      { name: 'iPhone SDK', level: 88 },
      { name: 'Cocoa Framework', level: 85 },
    ],
  },
  {
    title: 'Tools & Platforms',
    skills: [
      { name: 'Xcode', level: 95 },
      { name: 'Git', level: 88 },
      { name: 'App Store Connect', level: 85 },
      { name: 'TestFlight', level: 85 },
      { name: 'Instruments', level: 80 },
    ],
  },
  {
    title: 'Architecture & Patterns',
    skills: [
      { name: 'MVVM', level: 92 },
      { name: 'MVC', level: 90 },
      { name: 'SOLID Principles', level: 88 },
      { name: 'Clean Architecture', level: 85 },
      { name: 'Dependency Injection', level: 82 },
    ],
  },
  {
    title: 'APIs & Services',
    skills: [
      { name: 'REST APIs', level: 92 },
      { name: 'Firebase', level: 85 },
      { name: 'Twilio SDK', level: 82 },
      { name: 'Agora SDK', level: 80 },
      { name: 'Google Maps', level: 85 },
    ],
  },
];

const techLogos = [
  'Swift', 'SwiftUI', 'Xcode', 'Git', 'Firebase', 'SQLite', 
  'REST API', 'Agile', 'TestFlight', 'CocoaPods'
];

export const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 relative bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-primary font-mono text-sm tracking-wider uppercase mb-4 block">
              Expertise
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Technical
              <span className="text-gradient"> Skills</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              A comprehensive toolkit refined through years of building production-grade iOS applications.
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {skillCategories.map((category) => (
              <div
                key={category.title}
                className="p-6 rounded-2xl bg-gradient-card border border-border/50"
              >
                <h3 className="text-lg font-semibold mb-6">{category.title}</h3>
                <div className="space-y-4">
                  {category.skills.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm font-medium">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-secondary rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-primary rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Tech Marquee */}
          <div className="relative overflow-hidden py-8">
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />
            
            <div className="flex gap-8 animate-marquee">
              {[...techLogos, ...techLogos].map((tech, index) => (
                <div
                  key={`${tech}-${index}`}
                  className="flex-shrink-0 px-6 py-3 rounded-full glass border border-border/50 text-muted-foreground font-medium text-sm whitespace-nowrap"
                >
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
      `}</style>
    </section>
  );
};
