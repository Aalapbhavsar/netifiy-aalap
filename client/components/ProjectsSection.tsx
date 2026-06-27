'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Share2 } from 'lucide-react';

export default function ProjectsSection() {
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with real-time inventory, payment processing, and admin dashboard.',
      image: 'gradient-to-br from-primary/20 to-accent/20',
      techStack: ['Next.js', 'TypeScript', 'MongoDB', 'Stripe', 'Tailwind'],
      liveLink: '#',
      githubLink: '#',
      featured: true
    },
    {
      id: 2,
      title: 'AI Chat Application',
      description: 'Real-time chat application with AI integration, user authentication, and message history.',
      image: 'gradient-to-br from-secondary/20 to-primary/20',
      techStack: ['React', 'Node.js', 'Socket.io', 'OpenAI API', 'PostgreSQL'],
      liveLink: '#',
      githubLink: '#',
      featured: true
    },
    {
      id: 3,
      title: 'Project Management Tool',
      description: 'Collaborative project management platform with real-time updates and team collaboration features.',
      image: 'gradient-to-br from-accent/20 to-secondary/20',
      techStack: ['Next.js', 'Firebase', 'React Query', 'Tailwind', 'TypeScript'],
      liveLink: '#',
      githubLink: '#',
      featured: false
    },
    {
      id: 4,
      title: 'Analytics Dashboard',
      description: 'Data visualization dashboard with interactive charts and real-time analytics.',
      image: 'gradient-to-br from-primary/20 to-secondary/20',
      techStack: ['React', 'D3.js', 'Node.js', 'PostgreSQL', 'Redux'],
      liveLink: '#',
      githubLink: '#',
      featured: false
    },
    {
      id: 5,
      title: 'Social Media Feed',
      description: 'Responsive social media feed with infinite scroll, likes, comments, and real-time notifications.',
      image: 'gradient-to-br from-secondary/20 to-accent/20',
      techStack: ['Next.js', 'MongoDB', 'Socket.io', 'AWS S3', 'Tailwind'],
      liveLink: '#',
      githubLink: '#',
      featured: false
    },
    {
      id: 6,
      title: 'Video Streaming Platform',
      description: 'Video hosting and streaming platform with adaptive bitrate and user subscription management.',
      image: 'gradient-to-br from-accent/20 to-primary/20',
      techStack: ['Node.js', 'FFmpeg', 'HLS', 'AWS CloudFront', 'PostgreSQL'],
      liveLink: '#',
      githubLink: '#',
      featured: false
    }
  ];

  return (
    <section id="projects" className="section relative overflow-hidden">
      <div className="container">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="section-label"
          >
            Portfolio
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="section-title"
          >
            Featured Projects
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="section-description"
          >
            Showcase of my best work across different technologies
          </motion.p>
        </div>

        {/* Featured Projects - Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {projects.filter(p => p.featured).map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="card-elevated group"
            >
              {/* Project Image/Cover */}
              <div className={`h-48 rounded-xl bg-${project.image} mb-6 overflow-hidden relative`}>
                <div className={`w-full h-full bg-gradient-to-br ${project.image} opacity-60`}></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-text-muted opacity-50">
                    <div className="text-6xl mb-2">📱</div>
                    <p>Project Preview</p>
                  </div>
                </div>
              </div>

              {/* Project Info */}
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, idx) => (
                    <span key={idx} className="badge text-xs">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex gap-3 pt-4 border-t border-border-subtle">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary flex-1 btn-sm"
                  >
                    <ExternalLink size={16} /> Live Demo
                  </a>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-ghost flex-1 btn-sm"
                  >
                    <Share2 size={16} /> Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* All Projects Grid */}
        <div className="space-y-8">
          <div className="flex items-center justify-between">
            <h3 className="text-2xl font-bold">All Projects</h3>
            <a href="#" className="btn btn-secondary btn-sm">
              View All →
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.filter(p => !p.featured).map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card group"
              >
                {/* Small Preview */}
                <div className={`h-32 rounded-lg bg-gradient-to-br ${project.image} mb-4 opacity-60`}></div>

                <h4 className="font-bold text-lg mb-2">{project.title}</h4>
                <p className="text-text-secondary text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1 mb-4">
                  {project.techStack.slice(0, 3).map((tech, idx) => (
                    <span key={idx} className="badge text-xs">
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 3 && (
                    <span className="badge text-xs">+{project.techStack.length - 3}</span>
                  )}
                </div>

                <div className="flex gap-2">
                  <a
                    href={project.liveLink}
                    className="btn btn-secondary btn-sm flex-1"
                  >
                    <ExternalLink size={14} />
                  </a>
                  <a
                    href={project.githubLink}
                    className="btn btn-ghost btn-sm flex-1"
                  >
                    <Share2 size={14} />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
