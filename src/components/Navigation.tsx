
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${
      scrolled ? 'bg-space-deep/90 backdrop-blur-md border-space-purple/20' : 'border-transparent'
      }`}>

      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            {/* JA Logo */}
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-space-violet to-space-cyan flex items-center justify-center">
              <span className="font-orbitron font-bold text-lg text-white">JA</span>
            </div>
            <div className="font-orbitron font-bold text-xl bg-gradient-to-r from-space-violet to-space-cyan bg-clip-text text-transparent">
              Joy Awino
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('about')}
              className="text-white hover:text-space-cyan transition-colors duration-300"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('projects')}
              className="text-white hover:text-space-cyan transition-colors duration-300"
            >
              Projects
            </button>
            <button 
              onClick={() => scrollToSection('skills')}
              className="text-white hover:text-space-cyan transition-colors duration-300"
            >
              Skills
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-white hover:text-space-cyan transition-colors duration-300"
            >
              Contact
            </button>
            <Button 
              onClick={() => window.open('/Joy_Awino_CV.pdf', '_blank')}
              className="bg-gradient-to-r from-space-violet to-space-cyan text-white hover:from-space-cyan hover:to-space-violet transition-all duration-300"
            >
              CV
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
