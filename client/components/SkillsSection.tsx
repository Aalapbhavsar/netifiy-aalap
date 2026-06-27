'use client';

import { motion } from 'framer-motion';
import { Code2, Database, Cloud, Wrench } from 'lucide-react';

export default function SkillsSection() {
  const skillCategories = [
    {
      title: 'Frontend',
      icon: Code2,
      color: 'from-primary to-accent',
      skills: [
        { name: 'React', level: 95 },
        { name: 'Next.js', level: 92 },
        { name: 'TypeScript', level: 88 },
        { name: 'Tailwind CSS', level: 93 },
        { name: 'Framer Motion', level: 85 },
        { name: 'Redux', level: 80 }
      ]
    },
    {
      title: 'Backend',
      icon: Code2,
      color: 'from-secondary to-primary',
      skills: [
        { name: 'Node.js', level: 85 },
        { name: 'Express.js', level: 84 },
        { name: 'Python', level: 80 },
        { name: 'RESTful APIs', level: 90 },
        { name: 'GraphQL', level: 75 },
        { name: 'WebSockets', level: 80 }
      ]
    },
    {
      title: 'Database',
      icon: Database,
      color: 'from-accent to-secondary',
      skills: [
        { name: 'MongoDB', level: 82 },
        { name: 'PostgreSQL', level: 85 },
        { name: 'MySQL', level: 80 },
        { name: 'Firebase', level: 78 },
        { name: 'Redis', level: 75 },
        { name: 'SQL', level: 88 }
      ]
    },
    {
      title: 'Tools & DevOps',
      icon: Wrench,
      color: 'from-primary to-secondary',
      skills: [
        { name: 'Git', level: 92 },
        { name: 'Docker', level: 80 },
        { name: 'GitHub Actions', level: 78 },
        { name: 'AWS', level: 75 },
        { name: 'Linux', level: 85 },
        { name: 'CI/CD', level: 80 }
      ]
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section id="skills" className="section relative overflow-hidden bg-bg-surface/30">
      <div className="container">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="section-label"
          >
            Technical Expertise
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="section-title"
          >
            Skills & Proficiencies
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="section-description"
          >
            Comprehensive skill set across modern web technologies
          </motion.p>
        </div>

        {/* Skill Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, categoryIndex) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={categoryIndex}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                className="card"
              >
                {/* Category Header */}
                <div className={`flex items-center gap-3 mb-6 pb-4 border-b border-border-subtle`}>
                  <div className={`p-2 rounded-lg bg-gradient-to-br ${category.color}`}>
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="font-bold text-lg">{category.title}</h3>
                </div>

                {/* Skills List */}
                <motion.div
                  className="space-y-4"
                  variants={container}
                  initial="hidden"
                  whileInView="show"
                >
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div key={skillIndex} variants={item}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium text-text-primary">
                          {skill.name}
                        </span>
                        <span className="text-xs text-text-muted">{skill.level}%</span>
                      </div>
                      <div className="w-full h-2 bg-bg-surface-hover rounded-full overflow-hidden">
                        <motion.div
                          className={`h-full bg-gradient-to-r ${category.color}`}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 0.8, delay: skillIndex * 0.05 }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* Additional Skills as Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 pt-12 border-t border-border-subtle"
        >
          <h3 className="text-xl font-bold mb-8 text-center">Other Technologies & Tools</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'Figma', 'Jest', 'Webpack', 'Vitest', 'Storybook', 'GraphQL',
              'Stripe API', 'Twilio', 'SendGrid', 'OpenAI API', 'Vercel',
              'Netlify', 'Postman', 'VS Code', 'Jira', 'Agile'
            ].map((tech, index) => (
              <motion.button
                key={index}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="badge"
              >
                {tech}
              </motion.button>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
