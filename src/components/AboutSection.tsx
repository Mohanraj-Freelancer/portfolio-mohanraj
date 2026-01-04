import { Code2, Lightbulb, Users, Zap } from 'lucide-react';

const highlights = [
  {
    icon: Code2,
    title: 'Clean Code',
    description: 'MVVM/MVC architecture with SOLID principles for maintainable, scalable applications.',
  },
  {
    icon: Zap,
    title: 'Performance',
    description: 'Optimized apps with efficient memory management and smooth 60fps animations.',
  },
  {
    icon: Users,
    title: 'Team Player',
    description: 'Experienced in Agile environments, mentoring juniors, and cross-team collaboration.',
  },
  {
    icon: Lightbulb,
    title: 'Problem Solver',
    description: 'From offline-first solutions to complex API integrations and real-time features.',
  },
];

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-primary font-mono text-sm tracking-wider uppercase mb-4 block">
              About Me
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Passionate About Building
              <span className="text-gradient"> Great Apps</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
              With over 3 years of experience in iOS development, I specialize in creating 
              intuitive, high-performance mobile applications that users love.
            </p>
          </div>

          {/* Highlights Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((item, index) => (
              <div
                key={item.title}
                className="group p-6 rounded-2xl bg-gradient-card border border-border/50 hover:border-primary/30 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-border/50">
            <div className="text-center">
              <div className="text-4xl font-bold text-gradient mb-2">4+</div>
              <div className="text-muted-foreground text-sm">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-gradient mb-2">7</div>
              <div className="text-muted-foreground text-sm">Apps Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-gradient mb-2">3</div>
              <div className="text-muted-foreground text-sm">Companies</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-gradient mb-2">100%</div>
              <div className="text-muted-foreground text-sm">Dedication</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
