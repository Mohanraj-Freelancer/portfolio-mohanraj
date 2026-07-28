import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Github, Linkedin, Send, Sparkles, CheckCircle2 } from 'lucide-react';
import confetti from 'canvas-confetti';

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Trigger celebratory Apple confetti burst
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#0071E3', '#2997FF', '#FFFFFF', '#34C759'],
    });

    setIsSubmitted(true);

    // Also prefill mailto link in background
    const mailtoLink = `mailto:mohanrajiosdev7@gmail.com?subject=Portfolio Inquiry from ${encodeURIComponent(
      formData.name
    )}&body=${encodeURIComponent(formData.message)}%0A%0AFrom: ${encodeURIComponent(formData.email)}`;
    window.location.href = mailtoLink;
  };

  return (
    <section id="contact" className="py-28 md:py-36 relative bg-[#F5F5F7] dark:bg-[#161617] text-[#1D1D1F] dark:text-[#F5F5F7] overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          
          {/* Header */}
          <div className="text-center mb-20 max-w-2xl mx-auto">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-[#0071E3] dark:text-[#2997FF] mb-3 block"
            >
              Let's Connect
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-6xl font-semibold tracking-tighter leading-tight mb-6 apple-gradient-text"
            >
              Build the next great iOS experience together.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-[#6E6E73] dark:text-[#86868B] font-normal"
            >
              Whether you need an iOS lead for an enterprise solution or advice on SwiftUI architecture, I'd love to hear from you.
            </motion.p>
          </div>

          <div className="grid lg:grid-cols-12 gap-10 items-start">
            
            {/* Contact Details Column */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-5 p-8 sm:p-10 rounded-3xl bg-white dark:bg-[#000000] border border-black/5 dark:border-white/10 shadow-apple dark:shadow-apple-dark space-y-8"
            >
              <div>
                <h3 className="text-2xl font-semibold tracking-tight text-[#1D1D1F] dark:text-[#F5F5F7] mb-2">
                  Direct Contact
                </h3>
                <p className="text-sm text-[#6E6E73] dark:text-[#86868B]">
                  Available for full-time roles, freelance iOS projects, and technical consulting.
                </p>
              </div>

              <div className="space-y-6">
                <a
                  href="mailto:mohanrajiosdev7@gmail.com"
                  className="flex items-center gap-4 group p-3 rounded-2xl hover:bg-[#F5F5F7] dark:hover:bg-[#161617] transition-colors"
                >
                  <div className="w-12 h-12 rounded-2xl bg-[#0071E3]/10 text-[#0071E3] dark:text-[#2997FF] flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-[#6E6E73] dark:text-[#86868B] font-medium">Email Address</p>
                    <p className="font-semibold text-sm sm:text-base text-[#1D1D1F] dark:text-[#F5F5F7] group-hover:text-[#0071E3] transition-colors">
                      mohanrajiosdev7@gmail.com
                    </p>
                  </div>
                </a>

                <a
                  href="tel:+919360036367"
                  className="flex items-center gap-4 group p-3 rounded-2xl hover:bg-[#F5F5F7] dark:hover:bg-[#161617] transition-colors"
                >
                  <div className="w-12 h-12 rounded-2xl bg-[#0071E3]/10 text-[#0071E3] dark:text-[#2997FF] flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-[#6E6E73] dark:text-[#86868B] font-medium">Phone</p>
                    <p className="font-semibold text-sm sm:text-base text-[#1D1D1F] dark:text-[#F5F5F7] group-hover:text-[#0071E3] transition-colors">
                      +91 9360036367
                    </p>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-3">
                  <div className="w-12 h-12 rounded-2xl bg-[#0071E3]/10 text-[#0071E3] dark:text-[#2997FF] flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-[#6E6E73] dark:text-[#86868B] font-medium">Location</p>
                    <p className="font-semibold text-sm sm:text-base text-[#1D1D1F] dark:text-[#F5F5F7]">
                      Chennai & Kochi, India
                    </p>
                  </div>
                </div>
              </div>

              {/* Social links */}
              <div className="pt-6 border-t border-black/5 dark:border-white/10">
                <p className="text-xs font-mono uppercase tracking-wider text-[#6E6E73] dark:text-[#86868B] mb-4">
                  Professional Profiles
                </p>
                <div className="flex gap-3">
                  <a
                    href="https://github.com/Mohanraj-Freelancer"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3.5 rounded-2xl bg-[#F5F5F7] dark:bg-[#161617] text-[#1D1D1F] dark:text-[#F5F5F7] hover:bg-[#0071E3] hover:text-white transition-colors"
                  >
                    <Github size={20} />
                  </a>
                  <a
                    href="https://linkedin.com/in/mohan-raj-698756224"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3.5 rounded-2xl bg-[#F5F5F7] dark:bg-[#161617] text-[#1D1D1F] dark:text-[#F5F5F7] hover:bg-[#0071E3] hover:text-white transition-colors"
                  >
                    <Linkedin size={20} />
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Minimal Contact Form Column */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-7 p-8 sm:p-10 rounded-3xl bg-white dark:bg-[#000000] border border-black/5 dark:border-white/10 shadow-apple dark:shadow-apple-dark"
            >
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-16 text-center space-y-6"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 text-emerald-500 mx-auto flex items-center justify-center">
                    <CheckCircle2 size={36} />
                  </div>
                  <h3 className="text-3xl font-semibold tracking-tight text-[#1D1D1F] dark:text-[#F5F5F7]">
                    Thank You, {formData.name || 'Friend'}!
                  </h3>
                  <p className="text-base text-[#6E6E73] dark:text-[#86868B] max-w-md mx-auto leading-relaxed">
                    Your message has been initiated. I will review your inquiry and respond to <strong>{formData.email}</strong> shortly.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="px-6 py-2.5 rounded-full bg-[#0071E3] text-white text-xs font-semibold hover:bg-[#0077ED] transition-colors"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-xs font-semibold uppercase tracking-wider text-[#6E6E73] dark:text-[#86868B] mb-2">
                      Your Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      placeholder="e.g. Steve Jobs"
                      className="w-full px-5 py-3.5 rounded-2xl bg-[#F5F5F7] dark:bg-[#161617] border border-black/5 dark:border-white/10 text-[#1D1D1F] dark:text-[#F5F5F7] placeholder:text-[#86868B] focus:outline-none focus:border-[#0071E3] focus:ring-1 focus:ring-[#0071E3] transition-all text-sm"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-[#6E6E73] dark:text-[#86868B] mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      placeholder="steve@apple.com"
                      className="w-full px-5 py-3.5 rounded-2xl bg-[#F5F5F7] dark:bg-[#161617] border border-black/5 dark:border-white/10 text-[#1D1D1F] dark:text-[#F5F5F7] placeholder:text-[#86868B] focus:outline-none focus:border-[#0071E3] focus:ring-1 focus:ring-[#0071E3] transition-all text-sm"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wider text-[#6E6E73] dark:text-[#86868B] mb-2">
                      Project Details / Message
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                      placeholder="Tell me about your iOS project, target deadline, and goals..."
                      className="w-full px-5 py-3.5 rounded-2xl bg-[#F5F5F7] dark:bg-[#161617] border border-black/5 dark:border-white/10 text-[#1D1D1F] dark:text-[#F5F5F7] placeholder:text-[#86868B] focus:outline-none focus:border-[#0071E3] focus:ring-1 focus:ring-[#0071E3] transition-all text-sm resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-full bg-[#0071E3] hover:bg-[#0077ED] text-white font-medium text-base shadow-apple-glow transition-all hover:scale-[1.01] active:scale-[0.99] flex items-center justify-center gap-2"
                  >
                    <Send size={16} />
                    <span>Send Message</span>
                  </button>
                </form>
              )}
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
};
