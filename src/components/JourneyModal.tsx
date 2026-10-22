import React, { useEffect } from 'react';
import { X, Heart, Sparkles, BookOpen, Layers, CheckCircle2 } from 'lucide-react';

interface JourneyModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLetTalk: () => void;
}

export const JourneyModal: React.FC<JourneyModalProps> = ({ isOpen, onClose, onLetTalk }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8 bg-[#292044]/60 backdrop-blur-sm animate-fadeIn">
      <div
        className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-[#EDE5FF] overflow-hidden max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#EDE5FF] bg-[#F8F5FF]">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-[#7C3AED]" />
            <span className="text-xs font-semibold uppercase tracking-wider text-[#7C3AED]">
              Insha's Developer Journey
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-[#292044]/70 hover:text-[#7C3AED] hover:bg-[#EDE5FF] transition-colors"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-6 text-[#292044]">
          <div>
            <h3 className="text-2xl font-bold tracking-tight mb-2">
              From Curiosity to Digital Craftsmanship
            </h3>
            <p className="text-sm text-[#292044]/80 leading-relaxed">
              My journey into front-end development began with a fascination for how visual ideas materialize in a browser window. I realized code is not just technical instructions—it's an artistic medium that connects human emotions with digital products.
            </p>
          </div>

          {/* Pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-2xl bg-[#F8F5FF] border border-[#EDE5FF]">
              <div className="w-8 h-8 rounded-lg bg-[#EDE5FF] flex items-center justify-center text-[#7C3AED] mb-3">
                <Heart className="w-4 h-4" />
              </div>
              <h4 className="text-sm font-bold mb-1">Human-Centered Design</h4>
              <p className="text-xs text-[#292044]/70 leading-relaxed">
                Prioritizing real people who navigate websites on everyday devices. Clear layouts, accessible contrast, and joyful micro-interactions.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[#F8F5FF] border border-[#EDE5FF]">
              <div className="w-8 h-8 rounded-lg bg-[#EDE5FF] flex items-center justify-center text-[#7C3AED] mb-3">
                <Layers className="w-4 h-4" />
              </div>
              <h4 className="text-sm font-bold mb-1">Clean Architectural Code</h4>
              <p className="text-xs text-[#292044]/70 leading-relaxed">
                Writing maintainable, modular components that other engineers can comfortably understand, extend, and scale.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[#F8F5FF] border border-[#EDE5FF]">
              <div className="w-8 h-8 rounded-lg bg-[#EDE5FF] flex items-center justify-center text-[#7C3AED] mb-3">
                <Sparkles className="w-4 h-4" />
              </div>
              <h4 className="text-sm font-bold mb-1">2026 Modern Aesthetic</h4>
              <p className="text-xs text-[#292044]/70 leading-relaxed">
                Moving past sterile generic templates to embrace refined editorial typography, soft gradients, and atmospheric depth.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[#F8F5FF] border border-[#EDE5FF]">
              <div className="w-8 h-8 rounded-lg bg-[#EDE5FF] flex items-center justify-center text-[#7C3AED] mb-3">
                <BookOpen className="w-4 h-4" />
              </div>
              <h4 className="text-sm font-bold mb-1">Continuous Evolution</h4>
              <p className="text-xs text-[#292044]/70 leading-relaxed">
                Consistently experimenting with the latest web standards, CSS subgrid, animation choreographies, and performance patterns.
              </p>
            </div>
          </div>

          {/* Core Values Checklist */}
          <div className="p-5 rounded-2xl bg-gradient-to-br from-[#EDE5FF]/60 to-[#F8F5FF] border border-[#C4B5FD]/50">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#7C3AED] mb-3">
              My Guiding Principles on Every Build
            </h4>
            <div className="space-y-2">
              <div className="flex items-center gap-2.5 text-xs text-[#292044]/90">
                <CheckCircle2 className="w-4 h-4 text-[#7C3AED] shrink-0" />
                <span>Zero bloated dependencies when clean native code performs better.</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-[#292044]/90">
                <CheckCircle2 className="w-4 h-4 text-[#7C3AED] shrink-0" />
                <span>Responsive layouts engineered for mobile, tablet, and widescreen.</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-[#292044]/90">
                <CheckCircle2 className="w-4 h-4 text-[#7C3AED] shrink-0" />
                <span>Thoughtful animations that guide attention without distracting.</span>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 bg-[#F8F5FF] border-t border-[#EDE5FF] flex items-center justify-between">
          <p className="text-xs text-[#292044]/60">Let's craft something meaningful together.</p>
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
                onLetTalk();
              }}
              className="px-4 py-2 text-xs font-semibold text-white bg-[#7C3AED] rounded-lg hover:bg-[#6D28D9] transition-colors shadow-sm"
            >
              Start a Conversation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
