import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    quote: "Mohanraj's mastery of SwiftUI and offline SQLite architecture saved our enterprise medical sales platform. His commitment to 60fps native performance and zero crash rates set a gold standard for our team.",
    author: "Technical Lead & Engineering Director",
    company: "C-Square Info Solutions Ltd",
    avatar: "TL",
    rating: 5,
  },
  {
    quote: "Working with Mohanraj on the Hero Cycles multi-level sales network was an absolute pleasure. He intuitively understands complex role hierarchies and builds reusable, clean MVVM components.",
    author: "Senior Product Manager",
    company: "Datasense Technologies",
    avatar: "PM",
    rating: 5,
  },
  {
    quote: "His integration of Twilio Voice, Agora SDK, and real-time chat into our applications was flawless. He brings Apple-level UI refinement and deep technical execution to every project.",
    author: "Solution Architect",
    company: "App Innovation Technologies",
    avatar: "SA",
    rating: 5,
  },
];

export const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-28 md:py-36 relative bg-[#FFFFFF] dark:bg-[#000000] text-[#1D1D1F] dark:text-[#F5F5F7] overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          
          {/* Header */}
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-[#0071E3] dark:text-[#2997FF] mb-3 block"
            >
              Client & Leadership Feedback
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-6xl font-semibold tracking-tighter leading-tight mb-6 apple-gradient-text"
            >
              Endorsed by engineering leaders.
            </motion.h2>
          </div>

          {/* Carousel Card Container */}
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, scale: 0.96, x: 20 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                exit={{ opacity: 0, scale: 0.96, x: -20 }}
                transition={{ duration: 0.4 }}
                className="p-8 sm:p-14 rounded-3xl bg-[#F5F5F7] dark:bg-[#161617] border border-black/5 dark:border-white/10 shadow-apple dark:shadow-apple-dark flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <Quote className="w-10 h-10 text-[#0071E3] dark:text-[#2997FF] opacity-60" />
                    <div className="flex gap-1">
                      {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-[#0071E3] text-[#0071E3] dark:fill-[#2997FF] dark:text-[#2997FF]" />
                      ))}
                    </div>
                  </div>

                  <p className="text-xl sm:text-2xl font-normal leading-relaxed text-[#1D1D1F] dark:text-[#F5F5F7] tracking-tight mb-10">
                    "{testimonials[currentIndex].quote}"
                  </p>
                </div>

                <div className="flex items-center justify-between pt-6 border-t border-black/5 dark:border-white/10">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#0071E3] text-white flex items-center justify-center font-bold text-sm">
                      {testimonials[currentIndex].avatar}
                    </div>
                    <div>
                      <h3 className="text-base font-semibold tracking-tight text-[#1D1D1F] dark:text-[#F5F5F7]">
                        {testimonials[currentIndex].author}
                      </h3>
                      <p className="text-xs text-[#6E6E73] dark:text-[#86868B]">
                        {testimonials[currentIndex].company}
                      </p>
                    </div>
                  </div>

                  {/* Indicators & Controls */}
                  <div className="flex items-center gap-3">
                    <button
                      onClick={prevTestimonial}
                      aria-label="Previous testimonial"
                      className="p-2.5 rounded-full border border-black/10 dark:border-white/15 bg-white dark:bg-black text-[#1D1D1F] dark:text-[#F5F5F7] hover:bg-[#0071E3] hover:text-white dark:hover:bg-[#0071E3] transition-colors"
                    >
                      <ChevronLeft size={18} />
                    </button>
                    <button
                      onClick={nextTestimonial}
                      aria-label="Next testimonial"
                      className="p-2.5 rounded-full border border-black/10 dark:border-white/15 bg-white dark:bg-black text-[#1D1D1F] dark:text-[#F5F5F7] hover:bg-[#0071E3] hover:text-white dark:hover:bg-[#0071E3] transition-colors"
                    >
                      <ChevronRight size={18} />
                    </button>
                  </div>
                </div>

              </motion.div>
            </AnimatePresence>

            {/* Pagination Dots */}
            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2 rounded-full transition-all ${
                    currentIndex === idx ? 'w-8 bg-[#0071E3]' : 'w-2 bg-black/20 dark:bg-white/20'
                  }`}
                />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
