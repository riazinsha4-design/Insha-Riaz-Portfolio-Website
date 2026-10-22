import React, { useState, useEffect } from 'react';
import { X, ExternalLink, Monitor, Tablet, Smartphone, Sparkles, CheckCircle2 } from 'lucide-react';
import { Project } from '../types.ts';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onContact: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose, onContact }) => {
  const [deviceView, setDeviceView] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-[#292044]/70 backdrop-blur-sm animate-fadeIn">
      <div
        className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl border border-[#EDE5FF] overflow-hidden max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#EDE5FF] bg-[#F8F5FF]">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-[#7C3AED] uppercase tracking-wider">
              {project.sampleLabel}
            </span>
            <span className="text-[#C4B5FD]">·</span>
            <span className="text-xs text-[#292044]/70">{project.category}</span>
          </div>

          {/* Device viewport switcher */}
          <div className="hidden sm:flex items-center gap-1 p-1 bg-white rounded-xl border border-[#EDE5FF]">
            <button
              onClick={() => setDeviceView('desktop')}
              className={`p-1.5 rounded-lg text-xs font-semibold transition-colors flex items-center gap-1 ${
                deviceView === 'desktop' ? 'bg-[#7C3AED] text-white shadow-xs' : 'text-[#292044]/70 hover:text-[#7C3AED]'
              }`}
              title="Desktop preview"
            >
              <Monitor className="w-3.5 h-3.5" />
              <span>Desktop</span>
            </button>
            <button
              onClick={() => setDeviceView('tablet')}
              className={`p-1.5 rounded-lg text-xs font-semibold transition-colors flex items-center gap-1 ${
                deviceView === 'tablet' ? 'bg-[#7C3AED] text-white shadow-xs' : 'text-[#292044]/70 hover:text-[#7C3AED]'
              }`}
              title="Tablet preview"
            >
              <Tablet className="w-3.5 h-3.5" />
              <span>Tablet</span>
            </button>
            <button
              onClick={() => setDeviceView('mobile')}
              className={`p-1.5 rounded-lg text-xs font-semibold transition-colors flex items-center gap-1 ${
                deviceView === 'mobile' ? 'bg-[#7C3AED] text-white shadow-xs' : 'text-[#292044]/70 hover:text-[#7C3AED]'
              }`}
              title="Mobile preview"
            >
              <Smartphone className="w-3.5 h-3.5" />
              <span>Mobile</span>
            </button>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-[#292044]/70 hover:text-[#7C3AED] hover:bg-[#EDE5FF] transition-colors"
            aria-label="Close project modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content Scrollable Area */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-6">
          {/* Simulated Browser Preview Frame */}
          <div className="flex justify-center bg-[#EDE5FF]/30 p-4 sm:p-6 rounded-2xl border border-[#EDE5FF]">
            <div
              className={`transition-all duration-300 bg-white rounded-xl border border-[#EDE5FF] shadow-lg overflow-hidden flex flex-col ${
                deviceView === 'desktop'
                  ? 'w-full'
                  : deviceView === 'tablet'
                  ? 'w-[520px] max-w-full'
                  : 'w-[320px] max-w-full'
              }`}
            >
              {/* Browser chrome header */}
              <div className="flex items-center justify-between px-3 py-2 bg-[#F8F5FF] border-b border-[#EDE5FF] text-[11px] text-[#292044]/60">
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-red-400" />
                  <span className="w-2 h-2 rounded-full bg-yellow-400" />
                  <span className="w-2 h-2 rounded-full bg-green-400" />
                </div>
                <div className="font-mono-code text-[10px] bg-white px-3 py-0.5 rounded border border-[#EDE5FF] text-[#292044]/70 truncate max-w-[200px]">
                  https://insha-riaz.design/{project.id}
                </div>
                <Sparkles className="w-3 h-3 text-[#7C3AED]" />
              </div>

              {/* Main Image */}
              <div className="relative aspect-video overflow-hidden bg-[#EDE5FF]/40">
                <img
                  src={project.image}
                  alt={project.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Project Details */}
          <div>
            <div className="flex flex-wrap items-center gap-2 text-xs text-[#292044]/60 mb-2">
              <span>{project.category}</span>
              <span aria-hidden="true">·</span>
              <span>{project.subtitle}</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold text-[#292044] mb-3">
              {project.title}
            </h3>

            <p className="text-sm sm:text-base text-[#292044]/80 leading-relaxed mb-6">
              {project.description}
            </p>

            {/* Zero-Pill Tech Metadata */}
            <div className="p-4 rounded-xl bg-[#F8F5FF] border border-[#EDE5FF] mb-6">
              <p className="text-xs font-bold text-[#7C3AED] uppercase tracking-wider mb-2">
                Technologies & Architecture
              </p>
              <div className="flex flex-wrap items-center gap-2 text-xs text-[#292044]/80 font-medium">
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

            {/* Key Features & Problem/Solution Breakdown */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <div className="p-4 rounded-xl bg-[#F8F5FF] border border-[#EDE5FF]">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#7C3AED] mb-2">
                  Development Highlights
                </h4>
                <ul className="space-y-1.5 text-xs text-[#292044]/80">
                  {project.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#7C3AED] shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-4 rounded-xl bg-[#F8F5FF] border border-[#EDE5FF]">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#7C3AED] mb-2">
                  Front-End Engineering Focus
                </h4>
                <p className="text-xs text-[#292044]/80 leading-relaxed">
                  {project.solution}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer actions */}
        <div className="px-6 py-4 bg-[#F8F5FF] border-t border-[#EDE5FF] flex flex-wrap items-center justify-between gap-4">
          <p className="text-xs text-[#292044]/60">
            {project.sampleLabel} — Ready to adapt with your custom assets.
          </p>
          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="px-4 py-2 text-xs font-semibold text-[#292044] hover:text-[#7C3AED] transition-colors"
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                onContact();
              }}
              className="px-4 py-2 text-xs font-semibold text-white bg-[#7C3AED] rounded-lg hover:bg-[#6D28D9] transition-colors shadow-sm flex items-center gap-1.5"
            >
              <span>Build a Similar Website</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
