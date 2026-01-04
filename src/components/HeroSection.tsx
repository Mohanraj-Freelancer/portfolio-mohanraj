import { ArrowDown, Github, Linkedin, Mail, Download } from 'lucide-react';
import { Button } from './ui/button';

export const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }} />
      
      {/* Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-border/50 mb-8 opacity-0 animate-fade-up">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-sm text-muted-foreground">Available for new opportunities</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 opacity-0 animate-fade-up stagger-1">
            Hi, I'm{' '}
            <span className="text-gradient">Mohanraj Gopi</span>
          </h1>

          {/* Subtitle */}
          <div className="mb-8 opacity-0 animate-fade-up stagger-2">
            <p className="text-xl md:text-2xl text-muted-foreground mb-4">
              <span className="text-primary font-semibold">iOS Developer</span> crafting exceptional mobile experiences
            </p>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Results-driven developer with expertise in Swift, SwiftUI & UIKit. 
              Building scalable, user-focused iPhone applications with clean architecture and modern design patterns.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 opacity-0 animate-fade-up stagger-3">
            <Button variant="hero" size="lg" asChild>
              <a href="#projects">View My Work</a>
            </Button>
            <Button variant="glass" size="lg" asChild>
              <a href="/Mohanraj_Resume.pdf" download="Mohanraj_Gopi_Resume.pdf">
                <Download className="w-4 h-4" />
                Download Resume
              </a>
            </Button>
            <Button variant="glass" size="lg" asChild>
              <a href="#contact">Let's Connect</a>
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-4 opacity-0 animate-fade-up stagger-4">
            <a
              href="https://github.com/Mohanraj-Freelancer"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full glass border border-border/50 text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300 hover:-translate-y-1"
            >
              <Github size={20} />
            </a>
            <a
              href="https://linkedin.com/in/mohan-raj-698756224"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full glass border border-border/50 text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300 hover:-translate-y-1"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:mohanrajiosdev7@gmail.com"
              className="p-3 rounded-full glass border border-border/50 text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300 hover:-translate-y-1"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in stagger-5">
        <a href="#about" className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
          <span className="text-xs font-medium">Scroll Down</span>
          <ArrowDown size={16} className="animate-bounce" />
        </a>
      </div>
    </section>
  );
};
