
import React from 'react';
import { Button } from '@/components/ui/button';
import { Rocket } from 'lucide-react';

const HeroSection = () => {
  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated rocket */}
      <div className="absolute top-20 right-10 animate-rocket-float">
        <Rocket className="w-16 h-16 text-space-violet opacity-60" />
      </div>
      
      {/* Floating planets */}
      <div className="absolute top-1/4 left-10 w-20 h-20 rounded-full bg-gradient-to-br from-space-violet to-space-purple opacity-40 animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-12 h-12 rounded-full bg-gradient-to-br from-space-cyan to-space-violet opacity-30 animate-float" style={{ animationDelay: '2s' }} />
      
      <div className="container mx-auto px-6 text-center z-10">
        <div className="animate-fade-in-up">
          <h1 className="font-orbitron font-black text-5xl md:text-7xl lg:text-8xl mb-6">
            <span className="bg-gradient-to-r from-space-violet via-space-cyan to-space-pink bg-clip-text text-transparent">
              Joy Awino
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl lg:text-3xl mb-8 text-gray-300 font-light">
            Software Developer
          </p>
          
          <p className="text-lg md:text-xl mb-12 text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Building full-stack web and mobile applications with Laravel, Kotlin, React, and Firebase. 
            Passionate about AI, cybersecurity, and creating elegant data-driven solutions.
          </p>
          
          <Button 
           onClick={() => window.open('https://github.com/joyyy-99', '_blank')}
           size="lg"
           className="bg-gradient-to-r from-space-violet to-space-cyan hover:from-space-cyan hover:to-space-violet text-white font-semibold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-space-violet/25"
           >
            Explore My Work on GitHub
          </Button>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
