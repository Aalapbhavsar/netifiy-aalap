'use client';

import { motion } from 'framer-motion';
import { Download, ArrowRight } from 'lucide-react';

export default function HeroSection() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="section pt-32 pb-20 relative overflow-hidden">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="mb-6"
            >
              <span className="section-label">Welcome to my portfolio</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-5xl lg:text-6xl font-bold mb-6 leading-tight"
            >
              Full-Stack Developer & <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">Problem Solver</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-lg text-text-secondary mb-8 leading-relaxed max-w-xl"
            >
              I build beautiful, fast, and responsive web applications using modern technologies. Passionate about creating exceptional user experiences and clean code.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap gap-4"
            >
              <button
                onClick={() => scrollToSection('projects')}
                className="btn btn-primary btn-lg"
              >
                View My Work <ArrowRight size={20} />
              </button>
              <a
                href="/resume.pdf"
                download
                className="btn btn-secondary btn-lg"
              >
                <Download size={20} /> Download Resume
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex gap-8 mt-12 pt-8 border-t border-border-subtle"
            >
              <div>
                <div className="text-3xl font-bold text-primary">50+</div>
                <p className="text-text-muted text-sm">Projects Completed</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-secondary">30+</div>
                <p className="text-text-muted text-sm">Happy Clients</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent">5+</div>
                <p className="text-text-muted text-sm">Years Experience</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right - Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="relative h-96 lg:h-full min-h-96"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl blur-3xl"></div>
            <div className="relative h-full rounded-3xl overflow-hidden border border-border-medium bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
              <div className="w-full h-full bg-gradient-to-br from-primary/5 to-secondary/5 flex items-center justify-center">
                <div className="text-center">
                  {/* Placeholder for profile image - in production, replace with <Image /> */}
                  <div className="w-64 h-64 rounded-full bg-gradient-to-br from-primary to-secondary opacity-20 mx-auto mb-4"></div>
                  <p className="text-text-muted text-sm">Profile Image</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2 text-text-muted cursor-pointer">
          <span className="text-sm">Scroll to explore</span>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </motion.div>
    </section>
  );
}
