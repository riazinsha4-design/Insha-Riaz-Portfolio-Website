import React from 'react';
import {
  Code2,
  Smartphone,
  Globe2,
  Rocket,
  RefreshCw,
  Figma,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react';
import { Service } from '../types.ts';

interface ServicesProps {
  onSelectService: (serviceName: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  const services: Service[] = [
    {
      id: 'frontend',
      title: 'Front-End Web Development',
      description:
        'Building responsive, accessible, and fast web applications using clean HTML5, modern CSS, and modern JavaScript architectures.',
      iconName: 'Code2',
      highlights: ['Clean code standards', 'Modern component architecture', 'Accessible WCAG structure'],
    },
    {
      id: 'responsive',
      title: 'Responsive Website Design',
      description:
        'Ensuring flawless visuals and smooth user experience across smartphones, tablets, laptops, and large desktop screens.',
      iconName: 'Smartphone',
      highlights: ['Mobile-first strategy', 'Fluid typography scaling', 'Zero horizontal scrolling bugs'],
    },
    {
      id: 'wordpress',
      title: 'WordPress Website Development',
      description:
        'Creating custom WordPress websites and themes tailored to your exact branding, with easy client-side content editing.',
      iconName: 'Globe2',
      highlights: ['Custom page templates', 'Intuitive block editing', 'Optimized page speed'],
    },
    {
      id: 'landing',
      title: 'Landing Page Design',
      description:
        'High-converting, visually striking landing pages engineered to highlight your products, capture leads, and engage visitors.',
      iconName: 'Rocket',
      highlights: ['Focal visual hierarchy', 'Compelling call-to-actions', 'Lightning fast loading'],
    },
    {
      id: 'redesign',
      title: 'Website Redesign',
      description:
        'Modernizing outdated websites into fresh, contemporary digital spaces with improved navigation, better aesthetics, and faster code.',
      iconName: 'RefreshCw',
      highlights: ['Design trend modernization', 'UX friction removal', 'Preserved SEO hierarchy'],
    },
    {
      id: 'uiux',
      title: 'UI/UX Design',
      description:
        'Designing intuitive interfaces, cohesive color palettes, wireframes, and design systems that users enjoy interacting with.',
      iconName: 'Figma',
      highlights: ['User flow optimization', 'Tailored lavender & violet palettes', 'Interactive prototyping'],
    },
  ];

  const renderIcon = (name: string) => {
    switch (name) {
      case 'Code2':
        return <Code2 className="w-6 h-6 text-[#7C3AED]" />;
      case 'Smartphone':
        return <Smartphone className="w-6 h-6 text-[#7C3AED]" />;
      case 'Globe2':
        return <Globe2 className="w-6 h-6 text-[#7C3AED]" />;
      case 'Rocket':
        return <Rocket className="w-6 h-6 text-[#7C3AED]" />;
      case 'RefreshCw':
        return <RefreshCw className="w-6 h-6 text-[#7C3AED]" />;
      case 'Figma':
        return <Figma className="w-6 h-6 text-[#7C3AED]" />;
      default:
        return <Code2 className="w-6 h-6 text-[#7C3AED]" />;
    }
  };

  return (
    <section id="services" className="py-24 relative bg-[#EDE5FF]/40 border-y border-[#EDE5FF]">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#C4B5FD]/15 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-xs font-semibold uppercase tracking-wider text-[#7C3AED] mb-2">
            What I Deliver
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#292044]">
            My Services — <span className="font-editorial italic font-normal text-[#7C3AED]">Ideas Into Reality</span>
          </h2>
          <p className="text-base text-[#292044]/80 mt-3 leading-relaxed">
            Tailored digital solutions engineered with aesthetic precision, clean markup, and user-friendly interactions.
          </p>
        </div>

        {/* 6 White Cards on Light Lavender background */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="group relative p-7 rounded-3xl bg-white border border-[#EDE5FF] hover:border-[#7C3AED] shadow-[0_6px_25px_-8px_rgba(124,58,237,0.06)] hover:shadow-[0_16px_36px_-8px_rgba(124,58,237,0.18)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Header row with icon & editorial index */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-[#EDE5FF] flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:bg-[#EDE5FF]/80">
                    {renderIcon(service.iconName)}
                  </div>
                  <span className="font-editorial italic text-sm text-[#7C3AED]/70 font-semibold">
                    0{index + 1}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-[#292044] mb-3 group-hover:text-[#7C3AED] transition-colors">
                  {service.title}
                </h3>

                <p className="text-sm text-[#292044]/75 leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Service highlights */}
                <div className="space-y-2 mb-6">
                  {service.highlights.map((highlight, hIdx) => (
                    <div key={hIdx} className="flex items-center gap-2 text-xs text-[#292044]/80 font-medium">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#7C3AED] shrink-0" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <button
                onClick={() => onSelectService(service.title)}
                className="pt-4 border-t border-[#EDE5FF] flex items-center justify-between text-xs font-semibold text-[#7C3AED] group-hover:text-[#6D28D9] transition-colors cursor-pointer"
              >
                <span>Request this service</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
