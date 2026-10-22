import React from 'react';
import {
  Lightbulb,
  Smartphone,
  Sparkles,
  Code2,
  Smile,
  GraduationCap,
} from 'lucide-react';

export const WhyChooseMe: React.FC = () => {
  const principles = [
    {
      title: 'Creative Problem-Solving',
      description:
        'Approaching challenges with curiosity and lateral thinking, transforming design constraints into distinctive digital advantages.',
      icon: Lightbulb,
    },
    {
      title: 'Responsive-First Development',
      description:
        'Architecting fluid viewport transitions from initial markup, ensuring smartphones, tablets, and wide monitors feel natively supported.',
      icon: Smartphone,
    },
    {
      title: 'Attention to Detail',
      description:
        'Obsessing over pixel balance, typographical measure, micro-interaction timing, and subtle border radiuses that elevate perception.',
      icon: Sparkles,
    },
    {
      title: 'Clean and Organized Code',
      description:
        'Writing modular, readable components, semantic HTML5, and maintainable CSS that any engineer can pick up without friction.',
      icon: Code2,
    },
    {
      title: 'User-Friendly Experiences',
      description:
        'Keeping interfaces accessible, fast-loading, intuitive to navigate, and free from confusing dark patterns or bloated scripts.',
      icon: Smile,
    },
    {
      title: 'Continuous Learning',
      description:
        'Constantly tracking modern web trends, emerging CSS standards, and UX paradigms to deliver contemporary 2026 digital work.',
      icon: GraduationCap,
    },
  ];

  return (
    <section className="py-28 relative overflow-hidden bg-gradient-to-br from-[#7C3AED] via-[#6D28D9] to-[#292044] text-white">
      {/* Floating Geometric Shapes in Background */}
      <div className="absolute top-10 left-10 w-72 h-72 rounded-full border border-white/10 blur-xs pointer-events-none animate-float" />
      <div
        className="absolute bottom-10 right-10 w-96 h-96 rounded-full border border-[#C4B5FD]/20 pointer-events-none animate-float"
        style={{ animationDelay: '-3s' }}
      />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-gradient-to-tr from-[#9061F9]/30 via-transparent to-[#C4B5FD]/20 blur-3xl pointer-events-none" />

      {/* Floating decorative isometric diamond */}
      <div className="absolute -top-12 right-1/4 w-32 h-32 border border-[#C4B5FD]/30 rotate-45 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Editorial Section Header with Oversized Typography */}
        <div className="max-w-3xl mb-16">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#EDE5FF] mb-3">
            Core Philosophy & Values
          </p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] mb-6 [text-wrap:balance]">
            Why Work With{' '}
            <span className="font-editorial italic font-normal text-[#C4B5FD]">
              Insha?
            </span>
          </h2>
          <p className="text-base sm:text-lg text-[#EDE5FF]/85 leading-relaxed font-light">
            Crafting a website is more than just stacking templates. It is an intentional collaboration to translate your vision into an elegant, reliable, and high-performing digital identity.
          </p>
        </div>

        {/* 6 Editorial Value Proposition Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {principles.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="group p-7 rounded-3xl bg-white/10 backdrop-blur-md border border-white/15 hover:border-[#C4B5FD]/60 hover:bg-white/15 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-white/15 text-[#EDE5FF] flex items-center justify-center transition-transform group-hover:scale-110 group-hover:bg-[#EDE5FF] group-hover:text-[#7C3AED]">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="font-editorial italic text-xs text-[#C4B5FD]/70 font-semibold">
                      0{idx + 1}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#EDE5FF] transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-sm text-[#EDE5FF]/80 leading-relaxed font-light">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-white/10 flex items-center gap-2 text-xs text-[#C4B5FD] font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C4B5FD]" />
                  <span>Guaranteed Standard</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
