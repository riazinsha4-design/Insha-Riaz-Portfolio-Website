import React, { useState } from 'react';
import { ArrowUpRight, Sparkles, Eye, Layers } from 'lucide-react';
import { Project } from '../types.ts';
import { ProjectModal } from './ProjectModal.tsx';

interface ProjectsProps {
  onContact: () => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onContact }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const sampleProjects: Project[] = [
    {
      id: 'quantum-cloud',
      title: 'Quantum Cloud Solutions',
      subtitle: 'SaaS Platform & Enterprise Dashboard',
      category: 'Business Websites',
      sampleLabel: 'Sample Project · Concept & Architecture',
      description:
        'A comprehensive corporate web presence and business intelligence dashboard engineered with modular React components, responsive SVG charts, and a calm violet design system.',
      image: '/src/assets/images/project_business_web_1792642291057.jpg',
      tags: ['React 19', 'Tailwind CSS', 'TypeScript', 'Responsive Grid', 'Recharts'],
      features: [
        'Live metric visualizers with smooth SVG animated transitions',
        'Fully responsive desktop-to-mobile navigation drawer',
        'Subtle lavender theme tokens with WCAG AA compliance',
        'Modular card architecture designed for scale',
      ],
      challenge: 'Rendering dense financial telemetry without overwhelming business users.',
      solution: 'Applied strict typographic hierarchy, generous white space, and purposeful soft lavender accents to guide executive attention.',
      techHighlights: ['Semantic markup', 'Custom responsive tables', 'Client-side state filters'],
    },
    {
      id: 'aurora-design-studio',
      title: 'Aurora Living Design Studio',
      subtitle: 'High-Impact Editorial Landing Page',
      category: 'Landing Pages',
      sampleLabel: 'Sample Project · Concept & Architecture',
      description:
        'An editorial digital showroom for an architectural and interior design collective, combining oversized serif typography, fluid image galleries, and smooth scroll choreography.',
      image: '/src/assets/images/project_landing_page_1792642291725.jpg',
      tags: ['HTML5', 'Modern CSS', 'JavaScript', 'Micro-Interactions', 'SEO Metadata'],
      features: [
        'Editorial typography pairing Fraunces Serif with Plus Jakarta Sans',
        'Fluid image zoom effects on mouse interaction',
        'Conversion-oriented consultation booking trigger',
        'Instant sub-second viewport load performance',
      ],
      challenge: 'Balancing full-bleed photography with high readability on all viewports.',
      solution: 'Created measured gradient contrast scrims and responsive CSS clamp scaling to ensure pristine contrast and zero layout shifts.',
      techHighlights: ['CSS Subgrid', 'Aspect-ratio preservation', 'Scroll-driven animations'],
    },
    {
      id: 'studio-atelier-architects',
      title: 'Studio Atelier Architects',
      subtitle: 'Minimalist Architecture Portfolio & Showcase',
      category: 'Creative Web Design',
      sampleLabel: 'Sample Project · Concept & Architecture',
      description:
        'A clean architectural portfolio website mockup with minimalist editorial grid, lavender and plum accents, responsive layout view on sleek tablet and widescreen.',
      image: '/src/assets/images/project_creative_web_1792642291145.jpg',
      tags: ['HTML5', 'CSS Grid', 'JavaScript', 'Responsive Design', 'Bento Architecture'],
      features: [
        'Asymmetrical multi-column masonry gallery view',
        'Touch-optimized project carousel on tablet and mobile',
        'Custom light-lavender modal lightbox with full EXIF specs',
        'Zero-dependency vanilla JavaScript interactions',
      ],
      challenge: 'Presenting multi-scale project blueprints in an intuitive web format.',
      solution: 'Architected responsive grid systems with modular cards that adapt fluidly between 3-column desktop and single-column mobile.',
      techHighlights: ['Zero-pill metadata', 'Fluid clamp typography', 'Hardware accelerated hover transitions'],
    },
    {
      id: 'verve-modern-cms',
      title: 'Verve Studio Collective',
      subtitle: 'WordPress Architecture & Custom Theme',
      category: 'WordPress Projects',
      sampleLabel: 'Sample Project · Concept & Architecture',
      description:
        'A tailored WordPress theme and Gutenberg block system for creative studios, allowing easy content editing while preserving strict design guidelines and fast page load times.',
      image: '/src/assets/images/project_creative_web_1792642291145.jpg',
      tags: ['WordPress', 'PHP / Blade', 'Gutenberg Blocks', 'Tailwind CSS', 'Fast Caching'],
      features: [
        'Custom Gutenberg editor blocks matching frontend CSS 1:1',
        'Dynamic post grid with real-time category filtering',
        'Clean semantic output free of bloated plugin markup',
        'Optimized WebP image delivery and lazy loading',
      ],
      challenge: 'Preventing non-technical site editors from breaking layout styling.',
      solution: 'Engineered strict modular block controls with preset design tokens, ensuring every published page retains the elegant brand aesthetic.',
      techHighlights: ['ACF Pro integration', 'Custom theme templates', 'Lighthouse 98+ mobile score'],
    },
  ];

  const categories = [
    'All',
    'Business Websites',
    'Landing Pages',
    'WordPress Projects',
    'Creative Web Design',
  ];

  const filteredProjects =
    selectedCategory === 'All'
      ? sampleProjects
      : sampleProjects.filter((p) => p.category === selectedCategory);

  return (
    <section id="work" className="py-24 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-[#EDE5FF]/50 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-[#7C3AED] uppercase tracking-wider mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Curated Portfolio</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#292044]">
              Selected Projects — <span className="font-editorial italic font-normal text-[#7C3AED]">My Creative Work</span>
            </h2>
            <p className="text-base text-[#292044]/80 mt-2 max-w-xl">
              Editorial website designs and clean front-end code crafted with responsiveness and visual elegance.
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 p-1.5 bg-[#EDE5FF]/60 rounded-2xl border border-[#EDE5FF]">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-xl transition-all duration-200 cursor-pointer whitespace-nowrap ${
                  selectedCategory === category
                    ? 'bg-white text-[#7C3AED] shadow-xs'
                    : 'text-[#292044]/70 hover:text-[#7C3AED] hover:bg-white/50'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative rounded-3xl bg-white border border-[#EDE5FF] hover:border-[#7C3AED]/70 shadow-[0_8px_30px_-10px_rgba(124,58,237,0.08)] hover:shadow-[0_20px_45px_-10px_rgba(124,58,237,0.2)] transition-all duration-300 overflow-hidden flex flex-col justify-between"
            >
              <div>
                {/* Image Container with Animated Zoom on Hover */}
                <div className="relative aspect-[4/3] overflow-hidden bg-[#EDE5FF]/30">
                  <img
                    src={project.image}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  {/* Subtle gradient vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#292044]/40 via-transparent to-transparent pointer-events-none" />

                  {/* Sample Project Label Badge */}
                  <div className="absolute top-4 left-4 glass-panel px-3 py-1 rounded-lg border border-white/60 text-[10px] font-semibold text-[#7C3AED]">
                    {project.sampleLabel}
                  </div>

                  {/* Category overlay */}
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="text-xs font-medium text-[#EDE5FF]">{project.category}</p>
                    <p className="text-lg font-bold">{project.title}</p>
                  </div>
                </div>

                {/* Content body */}
                <div className="p-6 sm:p-7">
                  <p className="text-sm text-[#292044]/80 leading-relaxed mb-5">
                    {project.description}
                  </p>

                  {/* Zero-Pill Tech Stack Metadata */}
                  <div className="flex flex-wrap items-center gap-2 text-xs text-[#292044]/70 font-medium mb-2">
                    {project.tags.map((tag, idx) => (
                      <React.Fragment key={tag}>
                        <span>{tag}</span>
                        {idx < project.tags.length - 1 && (
                          <span aria-hidden="true" className="text-[#C4B5FD]">·</span>
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              </div>

              {/* View Project Action */}
              <div className="px-6 pb-6 pt-2">
                <button
                  onClick={() => setActiveProject(project)}
                  className="w-full py-3 px-4 rounded-xl bg-[#F8F5FF] hover:bg-[#7C3AED] text-[#7C3AED] hover:text-white border border-[#EDE5FF] hover:border-[#7C3AED] text-xs font-semibold transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer shadow-xs group/btn"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>View Project & Architecture</span>
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Interactive Project Modal */}
      <ProjectModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
        onContact={() => {
          setActiveProject(null);
          onContact();
        }}
      />
    </section>
  );
};
