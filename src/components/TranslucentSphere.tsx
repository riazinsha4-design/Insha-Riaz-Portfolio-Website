import React, { useState, useEffect } from 'react';

export const TranslucentSphere: React.FC = () => {
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;
      setMouseOffset({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="relative w-64 h-64 sm:w-72 sm:h-72 flex items-center justify-center select-none pointer-events-none">
      {/* Outer ambient blur glow */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#7C3AED]/20 via-[#C4B5FD]/30 to-[#EDE5FF]/40 blur-2xl animate-slow-pulse" />

      {/* Orbiting thin violet glass ring */}
      <div
        className="absolute w-80 h-32 rounded-[100%] border border-[#C4B5FD]/60 -rotate-12 animate-float"
        style={{
          boxShadow: '0 0 25px rgba(196, 181, 253, 0.4)',
        }}
      />

      {/* Main translucent glass sphere */}
      <div
        className="relative w-56 h-56 sm:w-64 sm:h-64 rounded-full overflow-hidden transition-transform duration-300 ease-out"
        style={{
          transform: `translate(${mouseOffset.x}px, ${mouseOffset.y}px)`,
          background: 'radial-gradient(circle at 35% 30%, rgba(255, 255, 255, 0.85) 0%, rgba(196, 181, 253, 0.45) 40%, rgba(124, 58, 237, 0.6) 80%, rgba(41, 32, 68, 0.75) 100%)',
          boxShadow: 'inset -15px -15px 35px rgba(41, 32, 68, 0.35), inset 12px 12px 25px rgba(255, 255, 255, 0.8), 0 20px 45px rgba(124, 58, 237, 0.22)',
          backdropFilter: 'blur(8px)',
        }}
      >
        {/* Specular highlight */}
        <div
          className="absolute top-6 left-8 w-20 h-12 rounded-[100%] bg-white/70 blur-xs -rotate-45"
          style={{
            transform: `translate(${mouseOffset.x * 0.5}px, ${mouseOffset.y * 0.5}px) rotate(-45deg)`,
          }}
        />

        {/* Secondary soft rim highlight */}
        <div className="absolute bottom-4 right-6 w-24 h-16 rounded-[100%] bg-[#EDE5FF]/40 blur-sm rotate-12" />

        {/* Subtle internal grid/code lattice */}
        <div className="absolute inset-0 opacity-20 mix-blend-overlay flex items-center justify-center font-mono-code text-[10px] text-white p-4 leading-relaxed tracking-wider">
          &lt;div className=&quot;violet-aura&quot;&gt;
          <br />
          &nbsp;&nbsp;ux = responsive;
          <br />
          &nbsp;&nbsp;code = clean;
          <br />
          &lt;/div&gt;
        </div>
      </div>

      {/* Satellite miniature floating sphere */}
      <div
        className="absolute -top-3 -right-2 w-10 h-10 rounded-full animate-float"
        style={{
          animationDelay: '-2s',
          background: 'radial-gradient(circle at 30% 30%, #FFFFFF, #C4B5FD 50%, #7C3AED 90%)',
          boxShadow: '0 6px 15px rgba(124, 58, 237, 0.25)',
        }}
      />

      {/* Floating abstract lavender pill badge */}
      <div
        className="absolute -bottom-2 -left-3 glass-panel px-3.5 py-1.5 rounded-xl shadow-md border border-[#EDE5FF] text-[11px] font-medium text-[#292044] animate-float"
        style={{ animationDelay: '-1s' }}
      >
        <span className="text-[#7C3AED] font-semibold">2026</span> · Front-End Architecture
      </div>
    </div>
  );
};
