'use client';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const NAV_LINKS = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);

      // Determine active section
      const sections = NAV_LINKS.map(l => l.href.replace('#', ''));
      for (const id of sections.reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 100) {
          setActiveSection(id);
          break;
        }
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-bg-base/95 backdrop-blur-md border-b border-border-subtle shadow-md' : 'bg-transparent'
      }`}
      id="navbar"
    >
      <div className="container flex items-center justify-between h-16">
        {/* Logo */}
        <button
          onClick={() => handleNavClick('#hero')}
          className="flex items-center gap-2 hover:opacity-80 transition-opacity"
        >
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
            <span className="text-white font-bold text-sm">A</span>
          </div>
          <span className="font-bold text-lg hidden sm:inline">Aalap</span>
        </button>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map(({ href, label }) => (
            <li key={href}>
              <button
                onClick={() => handleNavClick(href)}
                className={`text-sm font-medium transition-colors duration-300 ${
                  activeSection === href.replace('#', '')
                    ? 'text-primary'
                    : 'text-text-secondary hover:text-text-primary'
                }`}
              >
                {label}
              </button>
            </li>
          ))}
        </ul>

        {/* CTA Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="/admin/login"
            className="btn btn-ghost btn-sm"
          >
            Admin
          </a>
          <button
            onClick={() => handleNavClick('#contact')}
            className="btn btn-primary btn-sm"
          >
            Hire Me
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2 hover:bg-bg-surface rounded-lg transition-colors"
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <X size={24} className="text-text-primary" />
          ) : (
            <Menu size={24} className="text-text-primary" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-bg-surface/95 backdrop-blur-md border-b border-border-subtle">
          <div className="container py-4 space-y-2">
            {NAV_LINKS.map(({ href, label }) => (
              <button
                key={href}
                onClick={() => handleNavClick(href)}
                className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                  activeSection === href.replace('#', '')
                    ? 'bg-primary/10 text-primary'
                    : 'text-text-secondary hover:bg-bg-surface'
                }`}
              >
                {label}
              </button>
            ))}
            <div className="flex gap-2 pt-4 border-t border-border-subtle mt-4">
              <a href="/admin/login" className="btn btn-ghost btn-sm flex-1">
                Admin
              </a>
              <button
                onClick={() => handleNavClick('#contact')}
                className="btn btn-primary btn-sm flex-1"
              >
                Hire Me
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
