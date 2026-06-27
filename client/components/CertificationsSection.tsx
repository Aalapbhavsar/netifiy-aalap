'use client';

import { motion } from 'framer-motion';
import { Award, Calendar } from 'lucide-react';

export default function CertificationsSection() {
  const certifications = [
    {
      title: 'AWS Certified Solutions Architect',
      issuer: 'Amazon Web Services',
      date: '2023',
      link: '#',
      icon: '☁️'
    },
    {
      title: 'Google Cloud Professional',
      issuer: 'Google Cloud',
      date: '2023',
      link: '#',
      icon: '🔧'
    },
    {
      title: 'Meta Front-End Professional',
      issuer: 'Meta Certificates',
      date: '2022',
      link: '#',
      icon: '⚛️'
    },
    {
      title: 'Full-Stack JavaScript Developer',
      issuer: 'Codecademy',
      date: '2022',
      link: '#',
      icon: '💻'
    },
    {
      title: 'MongoDB Associate Developer',
      issuer: 'MongoDB University',
      date: '2021',
      link: '#',
      icon: '🗄️'
    },
    {
      title: 'Kubernetes Application Developer',
      issuer: 'Linux Foundation',
      date: '2021',
      link: '#',
      icon: '🐳'
    }
  ];

  return (
    <section className="section relative overflow-hidden bg-bg-surface/30">
      <div className="container">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="section-label"
          >
            Credentials
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="section-title"
          >
            Certifications
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="section-description"
          >
            Professional certifications and credentials
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <motion.a
              key={index}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card group hover:border-primary"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="text-4xl">{cert.icon}</div>
                <Award className="w-5 h-5 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              <h3 className="font-bold text-lg mb-2 text-text-primary">
                {cert.title}
              </h3>

              <p className="text-text-secondary text-sm mb-3">{cert.issuer}</p>

              <div className="flex items-center gap-2 text-text-muted text-xs pt-3 border-t border-border-subtle">
                <Calendar size={14} />
                <span>{cert.date}</span>
              </div>

              <p className="mt-3 text-primary text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                View Certificate →
              </p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
