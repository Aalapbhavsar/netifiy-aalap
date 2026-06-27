'use client';

import { motion } from 'framer-motion';
import { BookOpen, Award, Briefcase, Code } from 'lucide-react';

export default function AboutSection() {
  const timeline = [
    {
      year: '2023 - Present',
      title: 'Senior Full-Stack Developer',
      company: 'Tech Innovators Inc',
      description: 'Leading development of high-performance web applications with React and Node.js'
    },
    {
      year: '2021 - 2023',
      title: 'Full-Stack Developer',
      company: 'Digital Solutions Ltd',
      description: 'Developed and maintained multiple client projects using modern tech stack'
    },
    {
      year: '2019 - 2021',
      title: 'Junior Developer',
      company: 'Web Agency',
      description: 'Started career building responsive websites and learning web technologies'
    }
  ];

  const education = [
    {
      year: '2019',
      title: 'Bachelor of Computer Science',
      school: 'University of Technology',
      focus: 'Software Engineering & Web Development'
    },
    {
      year: '2023',
      title: 'Advanced Full-Stack Certification',
      school: 'Online Academy',
      focus: 'React, Next.js, TypeScript & Cloud'
    }
  ];

  return (
    <section id="about" className="section relative overflow-hidden">
      <div className="container">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="section-label"
          >
            About Me
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="section-title"
          >
            Who I Am
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="section-description"
          >
            Crafting digital experiences with passion and precision
          </motion.p>
        </div>

        {/* Main About Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {[
            {
              icon: Code,
              title: 'Full-Stack Developer',
              description: 'Specialized in React, Next.js, TypeScript, and Node.js. Building scalable and performant applications.'
            },
            {
              icon: Briefcase,
              title: 'Problem Solver',
              description: 'Passionate about solving complex technical challenges and delivering elegant solutions.'
            },
            {
              icon: BookOpen,
              title: 'Continuous Learner',
              description: 'Always exploring new technologies and best practices to stay ahead in this dynamic field.'
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2 text-lg">{item.title}</h3>
                  <p className="text-text-secondary text-sm leading-relaxed">{item.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Experience & Education */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Experience */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <Briefcase className="w-6 h-6 text-primary" />
              Experience
            </h3>
            <div className="space-y-6">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="card pl-6 border-l-2 border-primary/50 hover:border-primary"
                >
                  <span className="text-primary text-sm font-semibold">{item.year}</span>
                  <h4 className="font-semibold text-lg mt-2">{item.title}</h4>
                  <p className="text-text-muted text-sm mb-2">{item.company}</p>
                  <p className="text-text-secondary text-sm">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <Award className="w-6 h-6 text-secondary" />
              Education
            </h3>
            <div className="space-y-6">
              {education.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="card pl-6 border-l-2 border-secondary/50 hover:border-secondary"
                >
                  <span className="text-secondary text-sm font-semibold">{item.year}</span>
                  <h4 className="font-semibold text-lg mt-2">{item.title}</h4>
                  <p className="text-text-muted text-sm mb-2">{item.school}</p>
                  <p className="text-text-secondary text-sm">{item.focus}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
