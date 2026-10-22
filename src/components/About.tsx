import React, { useState } from 'react';
import { Compass, Sparkles, HeartHandshake, Eye } from 'lucide-react';
import { JourneyModal } from './JourneyModal.tsx';

interface AboutProps {
  onLetTalk: () => void;
}

export const About: React.FC<AboutProps> = ({ onLetTalk }) => {
  const [isJourneyOpen, setIsJourneyOpen] = useState(false);

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-white/70 border-y border-[#EDE5FF]/80">
      {/* Background lavender glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-[#EDE5FF]/60 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Portrait & Decorative Lavender Elements (5 cols) */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative w-full max-w-sm">
              {/* Soft lavender halo background */}
              <div className="absolute -inset-3 bg-gradient-to-tr from-[#7C3AED]/20 via-[#C4B5FD]/30 to-[#EDE5FF] rounded-[2.5rem] blur-md -z-10" />

              {/* Outer rounded frame with lavender border */}
              <div className="relative rounded-[2rem] p-3 bg-white border border-[#EDE5FF] shadow-[0_16px_40px_-12px_rgba(124,58,237,0.15)] overflow-hidden group">
                <div className="relative aspect-[3/4] rounded-[1.5rem] overflow-hidden bg-[#EDE5FF]/50">
                  <img
                    src="/src/assets/images/insha_portrait_1792642291320.jpg"
                    alt="Insha Riaz, front-end web developer in modern creative studio"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  {/* Subtle gradient overlay at bottom */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#292044]/40 via-transparent to-transparent pointer-events-none" />

                  {/* Corner Badge */}
                  <div className="absolute bottom-4 left-4 right-4 glass-panel p-3 rounded-xl border border-white/60 shadow-md">
                    <p className="text-xs font-bold text-[#292044]">Insha Riaz</p>
                    <p className="text-[11px] text-[#7C3AED] font-medium">Front-End Developer & Designer</p>
                  </div>
                </div>
              </div>

              {/* Floating creative stat element */}
              <div className="absolute -bottom-4 -right-4 glass-panel px-4 py-2.5 rounded-2xl border border-[#EDE5FF] shadow-lg flex items-center gap-3">
                <div className="w-8 h-8 rounded-xl bg-[#EDE5FF] text-[#7C3AED] flex items-center justify-center">
                  <HeartHandshake className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[10px] uppercase font-bold text-[#7C3AED] tracking-wider">Passionate</p>
                  <p className="text-xs font-bold text-[#292044]">Craft & Attention to Detail</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Introduction & "Discover My Journey" (7 cols) */}
          <div className="lg:col-span-7 flex flex-col items-start">
            {/* Section kicker */}
            <div className="flex items-center gap-2 text-xs font-semibold text-[#7C3AED] uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Beyond the Screen</span>
            </div>

            {/* Exact Heading: “A Little About Insha” */}
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#292044] mb-6 font-editorial italic">
              A Little About Insha
            </h2>

            {/* Exact Text provided */}
            <p className="text-base sm:text-lg text-[#292044]/85 leading-relaxed mb-6 font-light">
              I'm Insha Riaz, a passionate front-end web developer who loves combining design and technology to create meaningful digital experiences. I enjoy building responsive interfaces, exploring modern design trends, and turning ideas into websites that feel intuitive and alive.
            </p>

            {/* Supporting paragraph elaborating on her technical craft */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6 w-full">
              <div className="p-4 rounded-xl bg-[#F8F5FF] border border-[#EDE5FF]">
                <p className="text-xs font-bold text-[#7C3AED] uppercase tracking-wide mb-1">Visual Harmony</p>
                <p className="text-xs text-[#292044]/75 leading-relaxed">
                  Every pixel, spacing unit, and font weight is intentionally placed to create a cohesive digital feel.
                </p>
              </div>
              <div className="p-4 rounded-xl bg-[#F8F5FF] border border-[#EDE5FF]">
                <p className="text-xs font-bold text-[#7C3AED] uppercase tracking-wide mb-1">Responsive Precision</p>
                <p className="text-xs text-[#292044]/75 leading-relaxed">
                  Seamless experiences across mobile screens, tablets, and wide desktop viewports without glitches.
                </p>
              </div>
            </div>

            {/* Working "Discover My Journey" Button */}
            <div className="mt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={() => setIsJourneyOpen(true)}
                className="group px-6 py-3.5 text-sm font-semibold text-white bg-[#7C3AED] rounded-xl hover:bg-[#6D28D9] transition-all duration-300 shadow-[0_4px_16px_rgba(124,58,237,0.3)] hover:shadow-[0_8px_24px_rgba(124,58,237,0.45)] hover:-translate-y-0.5 border border-[#7C3AED] flex items-center gap-2.5 cursor-pointer"
              >
                <Compass className="w-4 h-4 transition-transform group-hover:rotate-45 duration-300" />
                <span>Discover My Journey</span>
              </button>

              <button
                onClick={onLetTalk}
                className="px-5 py-3.5 text-sm font-semibold text-[#292044] hover:text-[#7C3AED] transition-colors flex items-center gap-2 cursor-pointer"
              >
                <Eye className="w-4 h-4 text-[#7C3AED]" />
                <span>Get In Touch</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Journey Modal */}
      <JourneyModal
        isOpen={isJourneyOpen}
        onClose={() => setIsJourneyOpen(false)}
        onLetTalk={onLetTalk}
      />
    </section>
  );
};
