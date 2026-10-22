import React, { useState } from 'react';
import { Search, Compass, Code, Rocket, CheckCircle2, ArrowRight } from 'lucide-react';

export const Process: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);

  const steps = [
    {
      id: 'discover',
      title: 'Discover',
      tagline: 'Understanding Vision & Strategy',
      description:
        'We unpack your project objectives, target audience, brand essence, and functional requirements to establish a clear architectural roadmap.',
      icon: Search,
      deliverables: [
        'Requirement analysis & scope definition',
        'Visual moodboard & aesthetic alignment',
        'Information architecture & sitemap',
      ],
      duration: 'Phase 01',
    },
    {
      id: 'design',
      title: 'Design',
      tagline: 'Visual Architecture & Wireframes',
      description:
        'Translating conceptual direction into responsive wireframes, lavender-violet color palettes, typographic hierarchies, and fluid interaction prototypes.',
      icon: Compass,
      deliverables: [
        'High-fidelity UI/UX mockups in Figma',
        'Mobile, tablet & desktop layout systems',
        'Micro-interaction & transition blueprints',
      ],
      duration: 'Phase 02',
    },
    {
      id: 'develop',
      title: 'Develop',
      tagline: 'Clean Code & Responsive Implementation',
      description:
        'Writing clean, semantic HTML5, modern modular CSS/Tailwind, and dynamic JavaScript logic. Testing cross-browser fidelity and fluid responsiveness.',
      icon: Code,
      deliverables: [
        'Semantic HTML & accessible ARIA tree',
        'Lightweight, performant animation curves',
        'WordPress / React component integration',
      ],
      duration: 'Phase 03',
    },
    {
      id: 'deliver',
      title: 'Deliver',
      tagline: 'Testing, Polish & Seamless Launch',
      description:
        'Conducting thorough cross-device QA, optimizing assets for sub-second load times, configuring SEO tags, and deploying your digital experience.',
      icon: Rocket,
      deliverables: [
        'Lighthouse performance & accessibility audit',
        'Cross-browser and mobile device verification',
        'Live deployment & client handover',
      ],
      duration: 'Phase 04',
    },
  ];

  return (
    <section id="process" className="py-24 relative overflow-hidden bg-white/60 border-y border-[#EDE5FF]/80">
      {/* Background glow */}
      <div className="absolute top-1/2 right-10 -translate-y-1/2 w-80 h-80 bg-[#C4B5FD]/15 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-xs font-semibold uppercase tracking-wider text-[#7C3AED] mb-2">
            Methodology
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#292044]">
            My Creative Process —{' '}
            <span className="font-editorial italic font-normal text-[#7C3AED]">From Vision to Launch</span>
          </h2>
          <p className="text-base text-[#292044]/80 mt-3 leading-relaxed">
            Four structured phases engineered to ensure clear communication, pristine code, and an unforgettable digital result.
          </p>
        </div>

        {/* Desktop Connected Violet Timeline Line */}
        <div className="relative mb-12">
          {/* Horizontal connecting line on desktop */}
          <div className="hidden lg:block absolute top-1/2 left-[12%] right-[12%] h-[2px] -translate-y-1/2 bg-gradient-to-r from-[#C4B5FD] via-[#7C3AED] to-[#C4B5FD] -z-0 opacity-40" />

          {/* 4 Step Nodes */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              const isSelected = activeStep === idx;
              return (
                <button
                  key={step.id}
                  onClick={() => setActiveStep(idx)}
                  className={`text-left p-6 rounded-3xl transition-all duration-300 border flex flex-col justify-between cursor-pointer ${
                    isSelected
                      ? 'bg-white border-[#7C3AED] shadow-[0_12px_32px_-8px_rgba(124,58,237,0.22)] -translate-y-1'
                      : 'bg-[#F8F5FF] border-[#EDE5FF] hover:border-[#C4B5FD] hover:bg-white/80'
                  }`}
                >
                  <div>
                    {/* Top row with icon & phase number */}
                    <div className="flex items-center justify-between mb-4">
                      <div
                        className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-transform duration-300 ${
                          isSelected
                            ? 'bg-[#7C3AED] text-white scale-110 shadow-[0_4px_14px_rgba(124,58,237,0.4)]'
                            : 'bg-[#EDE5FF] text-[#7C3AED]'
                        }`}
                      >
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="font-editorial italic text-xs font-semibold text-[#7C3AED]">
                        {step.duration}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-[#292044] mb-1">
                      {step.title}
                    </h3>
                    <p className="text-xs text-[#7C3AED] font-medium mb-3">
                      {step.tagline}
                    </p>
                    <p className="text-xs text-[#292044]/75 leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {/* Active indicator bar */}
                  <div className="mt-5 pt-3 border-t border-[#EDE5FF] flex items-center justify-between text-[11px] font-semibold">
                    <span className={isSelected ? 'text-[#7C3AED]' : 'text-[#292044]/50'}>
                      {isSelected ? 'Currently Viewing' : 'Click to inspect'}
                    </span>
                    <ArrowRight
                      className={`w-3.5 h-3.5 transition-transform ${
                        isSelected ? 'text-[#7C3AED] translate-x-1' : 'text-[#292044]/40'
                      }`}
                    />
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Selected Step Detailed Breakdown Card */}
        <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-white to-[#F8F5FF] border border-[#EDE5FF] shadow-[0_8px_30px_-10px_rgba(124,58,237,0.08)]">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-[#EDE5FF]">
            <div>
              <span className="text-xs font-bold text-[#7C3AED] uppercase tracking-wider">
                Phase {activeStep + 1} Deep-Dive
              </span>
              <h4 className="text-2xl font-bold text-[#292044] mt-1">
                {steps[activeStep].title}: {steps[activeStep].tagline}
              </h4>
            </div>
            <div className="text-xs text-[#292044]/60 max-w-sm">
              Each stage produces concrete deliverables and client feedback touchpoints.
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6">
            {steps[activeStep].deliverables.map((item, dIdx) => (
              <div key={dIdx} className="p-4 rounded-2xl bg-white border border-[#EDE5FF] flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-[#7C3AED] shrink-0 mt-0.5" />
                <span className="text-xs text-[#292044]/85 font-medium leading-relaxed">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
