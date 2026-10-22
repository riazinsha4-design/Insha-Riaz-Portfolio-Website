import React from 'react';
import { ArrowUp, Github, Linkedin, Heart, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Services', href: '#services' },
    { name: 'Work', href: '#work' },
    { name: 'Process', href: '#process' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="py-14 bg-white border-t border-[#EDE5FF] relative z-10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-10 border-b border-[#EDE5FF]">
          {/* Brand & exact footer statement */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="font-editorial italic font-normal text-2xl text-[#7C3AED]">I</span>
              <span className="text-xl font-bold tracking-tight text-[#292044]">Insha Riaz</span>
            </div>
            {/* Exact Footer Text: “Designed with creativity by Insha Riaz.” */}
            <p className="text-sm text-[#292044]/75 font-medium">
              Designed with creativity by Insha Riaz.
            </p>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-wrap items-center justify-center gap-6 text-xs font-semibold text-[#292044]/80">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.href)}
                className="hover:text-[#7C3AED] transition-colors cursor-pointer"
              >
                {link.name}
              </button>
            ))}
          </nav>

          {/* Back to top button */}
          <button
            onClick={scrollToTop}
            className="group p-3 rounded-2xl bg-[#F8F5FF] hover:bg-[#7C3AED] text-[#7C3AED] hover:text-white border border-[#EDE5FF] hover:border-[#7C3AED] transition-all duration-300 shadow-xs flex items-center gap-2 text-xs font-semibold cursor-pointer"
            aria-label="Back to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-4 h-4 transition-transform group-hover:-translate-y-1" />
          </button>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#292044]/60">
          <p>© 2026 Insha Riaz · Front-End Web Developer. All rights reserved.</p>

          <div className="flex items-center gap-4">
            <a
              href="mailto:riazinsha546@gmail.com"
              className="hover:text-[#7C3AED] transition-colors flex items-center gap-1.5"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>riazinsha546@gmail.com</span>
            </a>
            <span aria-hidden="true" className="text-[#C4B5FD]">·</span>
            <span>Crafted with Lavender & Violet Palette</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
