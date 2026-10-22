/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar.tsx';
import { Hero } from './components/Hero.tsx';
import { About } from './components/About.tsx';
import { Skills } from './components/Skills.tsx';
import { Services } from './components/Services.tsx';
import { Projects } from './components/Projects.tsx';
import { Process } from './components/Process.tsx';
import { WhyChooseMe } from './components/WhyChooseMe.tsx';
import { Contact } from './components/Contact.tsx';
import { Footer } from './components/Footer.tsx';
import { CustomCursor } from './components/CustomCursor.tsx';
import { ParticlesBackground } from './components/ParticlesBackground.tsx';

export default function App() {
  const [selectedService, setSelectedService] = useState<string>('Front-End Web Development');

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToWork = () => {
    const workSection = document.getElementById('work');
    if (workSection) {
      workSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectServiceFromCard = (serviceTitle: string) => {
    setSelectedService(serviceTitle);
    scrollToContact();
  };

  return (
    <div className="min-h-screen bg-[#F8F5FF] text-[#292044] relative selection:bg-[#C4B5FD] selection:text-[#292044]">
      {/* Desktop-only refined custom cursor */}
      <CustomCursor />

      {/* Lightweight canvas particle network */}
      <ParticlesBackground />

      {/* Navigation adhering to Top Bar Contract */}
      <Navbar onOpenContact={scrollToContact} />

      <main className="relative z-10">
        {/* Hero Section — Meet Insha */}
        <Hero onExploreWork={scrollToWork} onLetTalk={scrollToContact} />

        {/* About Me — Beyond the Screen */}
        <About onLetTalk={scrollToContact} />

        {/* My Skills — What I Bring to the Web */}
        <Skills />

        {/* My Services — Ideas Into Reality */}
        <Services onSelectService={handleSelectServiceFromCard} />

        {/* Selected Projects — My Creative Work */}
        <Projects onContact={scrollToContact} />

        {/* My Creative Process: Discover → Design → Develop → Deliver */}
        <Process />

        {/* Why Work With Me? (Editorial section) */}
        <WhyChooseMe />

        {/* Let's Build Something Great (Contact section) */}
        <Contact preselectedService={selectedService} />
      </main>

      {/* Clean, elegant footer */}
      <Footer />
    </div>
  );
}
