import React, { useState } from 'react';
import {
  Code,
  Palette,
  FileCode2,
  Smartphone,
  Globe2,
  Layout,
  Check,
  Laptop,
  Tablet,
  CheckCircle2,
  Monitor
} from 'lucide-react';

export const Skills: React.FC = () => {
  // Interactive responsive demo state inside the Responsive Design bento card
  const [activeBreakpoint, setActiveBreakpoint] = useState<'mobile' | 'tablet' | 'desktop'>('desktop');

  // Interactive CSS demo snippet
  const [cssMode, setcssMode] = useState<'card' | 'glow' | 'glass'>('glow');

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-[#C4B5FD]/20 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <p className="text-xs font-semibold uppercase tracking-wider text-[#7C3AED] mb-2">
            Technical Repertoire
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#292044]">
            My Skills — <span className="font-editorial italic font-normal text-[#7C3AED]">What I Bring to the Web</span>
          </h2>
          <p className="text-base text-[#292044]/80 mt-3 leading-relaxed">
            A balanced synthesis of structural engineering, fluid responsiveness, dynamic scripting, and thoughtful aesthetic design.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1: HTML5 (Spans 2 cols on lg) */}
          <div className="lg:col-span-2 group relative p-6 sm:p-8 rounded-3xl bg-white border border-[#EDE5FF] hover:border-[#7C3AED]/60 shadow-[0_8px_30px_-10px_rgba(124,58,237,0.08)] hover:shadow-[0_16px_40px_-10px_rgba(124,58,237,0.18)] transition-all duration-300">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-5">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-[#EDE5FF] text-[#7C3AED] flex items-center justify-center transition-transform group-hover:scale-110">
                  <Code className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#292044]">HTML5</h3>
                  <p className="text-xs text-[#292044]/60">Semantic Architecture & Web Standards</p>
                </div>
              </div>
              <div className="flex items-center gap-2 text-xs font-medium text-[#7C3AED]">
                <CheckCircle2 className="w-4 h-4" />
                <span>Modern Standards</span>
              </div>
            </div>

            <p className="text-sm text-[#292044]/80 leading-relaxed mb-6">
              Structuring accessible, clean, and search-optimized web foundations using semantic markup tags, ARIA roles, and valid DOM hierarchies.
            </p>

            {/* Visual element: Semantic tags code block */}
            <div className="p-4 rounded-2xl bg-[#F8F5FF] border border-[#EDE5FF] font-mono-code text-xs text-[#292044]/80 flex flex-wrap items-center gap-2">
              <span className="text-[#7C3AED]">&lt;header&gt;</span>
              <span className="text-[#292044]/40">·</span>
              <span className="text-[#7C3AED]">&lt;main role=&quot;main&quot;&gt;</span>
              <span className="text-[#292044]/40">·</span>
              <span className="text-[#7C3AED]">&lt;section aria-labelledby&gt;</span>
              <span className="text-[#292044]/40">·</span>
              <span className="text-[#7C3AED]">&lt;article&gt;</span>
              <span className="text-[#292044]/40">·</span>
              <span className="text-[#7C3AED]">&lt;footer&gt;</span>
            </div>
          </div>

          {/* Card 2: CSS3 (1 col) */}
          <div className="group relative p-6 sm:p-8 rounded-3xl bg-white border border-[#EDE5FF] hover:border-[#7C3AED]/60 shadow-[0_8px_30px_-10px_rgba(124,58,237,0.08)] hover:shadow-[0_16px_40px_-10px_rgba(124,58,237,0.18)] transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-2xl bg-[#EDE5FF] text-[#7C3AED] flex items-center justify-center transition-transform group-hover:scale-110">
                  <Palette className="w-6 h-6" />
                </div>
                {/* Interactive mode switcher */}
                <div className="flex items-center gap-1 bg-[#F8F5FF] p-1 rounded-lg border border-[#EDE5FF] text-[10px] font-semibold">
                  <button
                    onClick={() => setcssMode('glow')}
                    className={`px-2 py-1 rounded transition-colors ${cssMode === 'glow' ? 'bg-[#7C3AED] text-white' : 'text-[#292044]/70 hover:text-[#7C3AED]'}`}
                  >
                    Glow
                  </button>
                  <button
                    onClick={() => setcssMode('glass')}
                    className={`px-2 py-1 rounded transition-colors ${cssMode === 'glass' ? 'bg-[#7C3AED] text-white' : 'text-[#292044]/70 hover:text-[#7C3AED]'}`}
                  >
                    Glass
                  </button>
                </div>
              </div>

              <h3 className="text-xl font-bold text-[#292044] mb-1">CSS3</h3>
              <p className="text-xs text-[#292044]/60 mb-3">Modern Layouts, Flexbox & Tailwind</p>
              <p className="text-sm text-[#292044]/80 leading-relaxed mb-4">
                Mastery of Tailwind CSS, CSS Grid, custom properties, and smooth keyframe animations with hardware acceleration.
              </p>
            </div>

            {/* Interactive live style simulation */}
            <div
              className={`p-3 rounded-xl border text-center text-xs font-semibold transition-all duration-300 ${
                cssMode === 'glow'
                  ? 'bg-gradient-to-r from-[#7C3AED] to-[#9061F9] text-white shadow-[0_6px_20px_rgba(124,58,237,0.35)] border-transparent'
                  : 'bg-white/70 backdrop-blur-md text-[#292044] border-[#C4B5FD] shadow-sm'
              }`}
            >
              {cssMode === 'glow' ? '✨ Violet Ambient Glow active' : '🔮 Glassmorphism active'}
            </div>
          </div>

          {/* Card 3: JavaScript (1 col) */}
          <div className="group relative p-6 sm:p-8 rounded-3xl bg-white border border-[#EDE5FF] hover:border-[#7C3AED]/60 shadow-[0_8px_30px_-10px_rgba(124,58,237,0.08)] hover:shadow-[0_16px_40px_-10px_rgba(124,58,237,0.18)] transition-all duration-300">
            <div className="w-12 h-12 rounded-2xl bg-[#EDE5FF] text-[#7C3AED] flex items-center justify-center mb-4 transition-transform group-hover:scale-110">
              <FileCode2 className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-[#292044] mb-1">JavaScript</h3>
            <p className="text-xs text-[#292044]/60 mb-3">Modern ES6+, React Hooks & Logic</p>
            <p className="text-sm text-[#292044]/80 leading-relaxed mb-4">
              Writing resilient client-side logic, manipulating the DOM with precision, managing state, handling API integrations, and building dynamic UI components.
            </p>
            <div className="space-y-1.5 pt-2 border-t border-[#EDE5FF]">
              <div className="flex items-center gap-2 text-xs text-[#292044]/80">
                <Check className="w-3.5 h-3.5 text-[#7C3AED]" />
                <span>ESNext Asynchronous Flows & Promises</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-[#292044]/80">
                <Check className="w-3.5 h-3.5 text-[#7C3AED]" />
                <span>Component State & Event Architectures</span>
              </div>
            </div>
          </div>

          {/* Card 4: Responsive Web Design (Spans 2 cols on lg) with interactive Breakpoint Simulator */}
          <div className="lg:col-span-2 group relative p-6 sm:p-8 rounded-3xl bg-white border border-[#EDE5FF] hover:border-[#7C3AED]/60 shadow-[0_8px_30px_-10px_rgba(124,58,237,0.08)] hover:shadow-[0_16px_40px_-10px_rgba(124,58,237,0.18)] transition-all duration-300">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-[#EDE5FF] text-[#7C3AED] flex items-center justify-center transition-transform group-hover:scale-110">
                  <Smartphone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#292044]">Responsive Web Design</h3>
                  <p className="text-xs text-[#292044]/60">Fluid Scaling & Touch Accessibility</p>
                </div>
              </div>

              {/* Breakpoint Switcher */}
              <div className="flex items-center gap-1 p-1 bg-[#F8F5FF] rounded-xl border border-[#EDE5FF]">
                <button
                  onClick={() => setActiveBreakpoint('mobile')}
                  className={`flex items-center gap-1 px-2.5 py-1 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                    activeBreakpoint === 'mobile'
                      ? 'bg-[#7C3AED] text-white shadow-xs'
                      : 'text-[#292044]/70 hover:text-[#7C3AED]'
                  }`}
                >
                  <Smartphone className="w-3.5 h-3.5" />
                  <span>375px</span>
                </button>
                <button
                  onClick={() => setActiveBreakpoint('tablet')}
                  className={`flex items-center gap-1 px-2.5 py-1 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                    activeBreakpoint === 'tablet'
                      ? 'bg-[#7C3AED] text-white shadow-xs'
                      : 'text-[#292044]/70 hover:text-[#7C3AED]'
                  }`}
                >
                  <Tablet className="w-3.5 h-3.5" />
                  <span>768px</span>
                </button>
                <button
                  onClick={() => setActiveBreakpoint('desktop')}
                  className={`flex items-center gap-1 px-2.5 py-1 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                    activeBreakpoint === 'desktop'
                      ? 'bg-[#7C3AED] text-white shadow-xs'
                      : 'text-[#292044]/70 hover:text-[#7C3AED]'
                  }`}
                >
                  <Monitor className="w-3.5 h-3.5" />
                  <span>1440px</span>
                </button>
              </div>
            </div>

            <p className="text-sm text-[#292044]/80 leading-relaxed mb-4">
              Building mobile-first layouts that adapt naturally across smartphones, iPads, high-res laptops, and ultrawide desktop monitors without layout breakage.
            </p>

            {/* Interactive Breakpoint Simulator Frame */}
            <div className="p-3 rounded-2xl bg-[#F8F5FF] border border-[#EDE5FF] flex justify-center items-center overflow-hidden">
              <div
                className={`transition-all duration-300 p-3 rounded-xl bg-white border border-[#C4B5FD]/40 shadow-xs flex items-center justify-between gap-3 text-xs ${
                  activeBreakpoint === 'mobile'
                    ? 'w-48 flex-col text-center'
                    : activeBreakpoint === 'tablet'
                    ? 'w-80 flex-row'
                    : 'w-full max-w-md flex-row'
                }`}
              >
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#7C3AED]" />
                  <span className="font-semibold text-[#292044]">Insha Web Demo</span>
                </div>
                <div className="text-[11px] text-[#7C3AED] font-medium">
                  {activeBreakpoint === 'mobile' ? 'Mobile Stack' : activeBreakpoint === 'tablet' ? 'Tablet Grid' : 'Full Desktop Layout'}
                </div>
              </div>
            </div>
          </div>

          {/* Card 5: WordPress Development (1 col) */}
          <div className="group relative p-6 sm:p-8 rounded-3xl bg-white border border-[#EDE5FF] hover:border-[#7C3AED]/60 shadow-[0_8px_30px_-10px_rgba(124,58,237,0.08)] hover:shadow-[0_16px_40px_-10px_rgba(124,58,237,0.18)] transition-all duration-300">
            <div className="w-12 h-12 rounded-2xl bg-[#EDE5FF] text-[#7C3AED] flex items-center justify-center mb-4 transition-transform group-hover:scale-110">
              <Globe2 className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-[#292044] mb-1">WordPress Development</h3>
            <p className="text-xs text-[#292044]/60 mb-3">Custom Themes & Content Management</p>
            <p className="text-sm text-[#292044]/80 leading-relaxed mb-4">
              Transforming custom Figma & HTML designs into fully editable WordPress themes, Gutenberg blocks, and dynamic content templates.
            </p>
            <div className="space-y-1.5 pt-2 border-t border-[#EDE5FF]">
              <div className="flex items-center gap-2 text-xs text-[#292044]/80">
                <Check className="w-3.5 h-3.5 text-[#7C3AED]" />
                <span>Custom Page Templates & Post Types</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-[#292044]/80">
                <Check className="w-3.5 h-3.5 text-[#7C3AED]" />
                <span>Plugin Customization & Performance Tuning</span>
              </div>
            </div>
          </div>

          {/* Card 6: UI/UX Design (1 col) */}
          <div className="group relative p-6 sm:p-8 rounded-3xl bg-white border border-[#EDE5FF] hover:border-[#7C3AED]/60 shadow-[0_8px_30px_-10px_rgba(124,58,237,0.08)] hover:shadow-[0_16px_40px_-10px_rgba(124,58,237,0.18)] transition-all duration-300">
            <div className="w-12 h-12 rounded-2xl bg-[#EDE5FF] text-[#7C3AED] flex items-center justify-center mb-4 transition-transform group-hover:scale-110">
              <Layout className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-[#292044] mb-1">UI/UX Design</h3>
            <p className="text-xs text-[#292044]/60 mb-3">Figma, Wireframing & Design Systems</p>
            <p className="text-sm text-[#292044]/80 leading-relaxed mb-4">
              Crafting clear user journeys, balanced typographic hierarchies, consistent design tokens, and delightful interactive affordances.
            </p>
            <div className="space-y-1.5 pt-2 border-t border-[#EDE5FF]">
              <div className="flex items-center gap-2 text-xs text-[#292044]/80">
                <Check className="w-3.5 h-3.5 text-[#7C3AED]" />
                <span>Design Tokens & Color Harmony</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-[#292044]/80">
                <Check className="w-3.5 h-3.5 text-[#7C3AED]" />
                <span>Intuitive Navigation & Reduced Friction</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
