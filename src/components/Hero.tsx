import React from 'react';
import { ArrowDown, ArrowUpRight, Sparkles, Terminal, Code2 } from 'lucide-react';
import { TranslucentSphere } from './TranslucentSphere.tsx';

interface HeroProps {
  onExploreWork: () => void;
  onLetTalk: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreWork, onLetTalk }) => {
  return (
    <section className="relative min-h-[92vh] pt-32 pb-16 flex items-center overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-tr from-[#C4B5FD]/25 via-[#EDE5FF]/40 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-12 right-10 w-96 h-96 bg-[#7C3AED]/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Typography & CTAs (7 columns) */}
          <div className="lg:col-span-7 flex flex-col items-start z-10">
            {/* Editorial subhead kicker */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-[#EDE5FF] border border-[#C4B5FD]/40 text-xs font-semibold text-[#7C3AED] mb-6">
              <Sparkles className="w-3.5 h-3.5 text-[#7C3AED]" />
              <span>Available for Creative Web Development</span>
            </div>

            {/* Exact Headline: "Hi, I'm Insha Riaz." */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#292044] leading-[1.12] mb-5 [text-wrap:balance]">
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-[#7C3AED] via-[#9061F9] to-[#C4B5FD] bg-clip-text text-transparent animate-violet-gradient inline-block font-editorial italic font-normal tracking-normal pr-1">
                Insha Riaz
              </span>
              .
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl font-medium text-[#7C3AED] mb-4">
              Front-End Developer crafting beautiful digital experiences.
            </p>

            {/* Supporting text */}
            <p className="text-base text-[#292044]/80 leading-relaxed max-w-xl mb-8">
              I transform creative ideas into responsive, elegant, and engaging websites that bring brands to life.
            </p>

            {/* Two Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
              {/* Explore My Work Button */}
              <button
                onClick={onExploreWork}
                className="group relative px-6 py-3.5 text-sm font-semibold text-white bg-[#7C3AED] rounded-xl hover:bg-[#6D28D9] transition-all duration-300 shadow-[0_4px_20px_rgba(124,58,237,0.35)] hover:shadow-[0_8px_25px_rgba(124,58,237,0.5)] hover:-translate-y-0.5 border border-[#7C3AED] flex items-center justify-center gap-2 cursor-pointer w-full sm:w-auto overflow-hidden"
              >
                <span className="relative z-10">Explore My Work</span>
                <ArrowDown className="w-4 h-4 relative z-10 transition-transform duration-300 group-hover:translate-y-1" />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out" />
              </button>

              {/* Let's Talk Button */}
              <button
                onClick={onLetTalk}
                className="group px-6 py-3.5 text-sm font-semibold text-[#292044] bg-white rounded-xl hover:bg-[#EDE5FF]/60 hover:text-[#7C3AED] transition-all duration-300 shadow-[0_2px_12px_rgba(124,58,237,0.08)] hover:shadow-[0_6px_20px_rgba(124,58,237,0.2)] hover:-translate-y-0.5 border border-[#C4B5FD] hover:border-[#7C3AED] flex items-center justify-center gap-2 cursor-pointer w-full sm:w-auto"
              >
                <span>Let's Talk</span>
                <ArrowUpRight className="w-4 h-4 text-[#7C3AED] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </button>
            </div>

            {/* Tech badges inline metadata */}
            <div className="mt-10 pt-6 border-t border-[#EDE5FF] w-full flex items-center gap-3 text-xs text-[#292044]/70 font-medium">
              <span className="text-[#7C3AED] font-semibold flex items-center gap-1.5">
                <Code2 className="w-3.5 h-3.5" />
                Specialization
              </span>
              <span aria-hidden="true" className="text-[#C4B5FD]">·</span>
              <span>Modern React & UI</span>
              <span aria-hidden="true" className="text-[#C4B5FD]">·</span>
              <span>Clean CSS & Tailwind</span>
              <span aria-hidden="true" className="text-[#C4B5FD]">·</span>
              <span>WordPress & CMS</span>
            </div>
          </div>

          {/* Right Column: Visual Container & 3D Translucent Sphere (5 columns) */}
          <div className="lg:col-span-5 relative flex flex-col items-center justify-center">
            {/* Visual Frame */}
            <div className="relative w-full max-w-md">
              {/* Decorative background glow frame */}
              <div className="absolute -inset-2 bg-gradient-to-br from-[#7C3AED]/20 to-[#C4B5FD]/30 rounded-3xl blur-lg -z-10" />

              <div className="relative bg-white rounded-2xl p-3 shadow-[0_12px_36px_-8px_rgba(124,58,237,0.18)] border border-[#EDE5FF] overflow-hidden">
                {/* Code Editor Header simulation */}
                <div className="flex items-center justify-between pb-2.5 mb-2.5 border-b border-[#EDE5FF] px-2">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#C4B5FD]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#EDE5FF]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#7C3AED]/50" />
                  </div>
                  <span className="font-mono-code text-[11px] text-[#292044]/60">insha-workspace.tsx</span>
                  <Terminal className="w-3 h-3 text-[#7C3AED]" />
                </div>

                {/* Developer Workstation Image */}
                <div className="relative h-64 sm:h-72 rounded-xl overflow-hidden bg-[#EDE5FF]/40">
                  <img
                    src="/src/assets/images/hero_developer_visual_1792642291318.jpg"
                    alt="Digital development workstation with glowing purple interface geometries"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                  {/* Subtle gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#292044]/50 via-transparent to-transparent pointer-events-none" />

                  {/* Overlaid Floating 3D Sphere in corner */}
                  <div className="absolute -bottom-8 -right-8 scale-75 sm:scale-90 pointer-events-none">
                    <TranslucentSphere />
                  </div>

                  <div className="absolute bottom-3 left-3 text-white">
                    <p className="font-mono-code text-[11px] tracking-wide text-[#EDE5FF]">
                      // 2026 Creative Experience
                    </p>
                    <p className="text-xs font-semibold">Pixel-Perfect Digital Craft</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
