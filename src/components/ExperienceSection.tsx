import { Building2, MapPin, Calendar } from 'lucide-react';

const experiences = [
  {
    company: 'C-Square Info Solutions Ltd',
    role: 'iOS Developer',
    location: 'Kochi, Kerala',
    period: '04/2024 – Present',
    type: 'current',
    responsibilities: [
      'Lead development and maintenance of advanced iOS applications using Swift and SwiftUI',
      'Guide and mentor junior developers, ensuring adherence to coding standards',
      'Participate in architecture decision-making, improving code structure and reusability',
      'Collaborate with product managers and designers to deliver intuitive user experiences',
      'Conduct detailed code reviews and foster a culture of continuous improvement',
    ],
  },
  {
    company: 'Datasense Technologies',
    role: 'iOS Developer',
    location: 'Coimbatore, Tamilnadu',
    period: '03/2023 – 04/2024',
    type: 'past',
    responsibilities: [
      'Developed and optimized iOS applications using Swift, SwiftUI, and UIKit',
      'Integrated REST APIs and third-party services to enhance functionality',
      'Debugged and resolved issues to ensure smooth and bug-free releases',
      'Supported Agile development cycles with feature implementation and sprint planning',
      'Contributed to code reviews and maintained software quality standards',
    ],
  },
  {
    company: 'App Innovation Technologies (P) Ltd',
    role: 'Fresher iOS Developer',
    location: 'Coimbatore, Tamilnadu',
    period: '11/2021 – 03/2023',
    type: 'past',
    responsibilities: [
      'Built and maintained multiple iOS applications with a focus on performance and usability',
      'Integrated Twilio, Google Maps, and real-time chat SDKs for dynamic app experiences',
      'Designed efficient SQLite database models for offline-capable applications',
      'Implemented clean architecture patterns and followed SOLID principles',
      'Performed integration testing and collaborated across teams for high-quality delivery',
    ],
  },
];

export const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 relative bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-primary font-mono text-sm tracking-wider uppercase mb-4 block">
              Career Journey
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Professional
              <span className="text-gradient"> Experience</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              A track record of delivering impactful iOS applications across diverse industries.
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2" />

            {experiences.map((exp, index) => (
              <div
                key={exp.company}
                className={`relative mb-12 last:mb-0 ${
                  index % 2 === 0 ? 'md:pr-8 md:text-right md:ml-0 md:mr-auto md:w-1/2' : 'md:pl-8 md:ml-auto md:w-1/2'
                } pl-8 md:pl-0`}
              >
                {/* Timeline Dot */}
                <div
                  className={`absolute w-4 h-4 rounded-full border-4 border-background top-1 ${
                    exp.type === 'current' ? 'bg-primary shadow-glow' : 'bg-muted'
                  } left-0 md:left-auto ${
                    index % 2 === 0 ? 'md:right-0 md:translate-x-1/2' : 'md:left-0 md:-translate-x-1/2'
                  } -translate-x-1/2`}
                />

                {/* Content Card */}
                <div className="p-6 rounded-2xl bg-gradient-card border border-border/50 hover:border-primary/30 transition-all duration-300 group">
                  <div className={`flex items-start gap-3 mb-4 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                      <Building2 className="w-5 h-5 text-primary" />
                    </div>
                    <div className={index % 2 === 0 ? 'md:text-right' : ''}>
                      <h3 className="text-lg font-semibold">{exp.role}</h3>
                      <p className="text-primary font-medium">{exp.company}</p>
                    </div>
                  </div>

                  <div className={`flex flex-wrap gap-4 text-sm text-muted-foreground mb-4 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {exp.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {exp.period}
                    </span>
                  </div>

                  <ul className={`space-y-2 text-sm text-muted-foreground ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                    {exp.responsibilities.slice(0, 3).map((resp, i) => (
                      <li key={i} className={`flex items-start gap-2 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
