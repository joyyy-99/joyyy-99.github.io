
import React from 'react';
import { Globe } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="font-orbitron font-bold text-4xl md:text-5xl mb-6">
              <span className="bg-gradient-to-r from-space-violet to-space-cyan bg-clip-text text-transparent">
                About Me
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-space-violet to-space-cyan mx-auto rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <div className="gradient-border">
                <div className="gradient-border-content p-8">
                  <Globe className="w-16 h-16 text-space-cyan mb-6 animate-float" />
                  <h3 className="font-orbitron font-bold text-2xl mb-4 text-space-cyan">
                    My Journey in Tech
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    I'm a passionate software developer pursuing a Bachelor's degree in Informatics and Computer Science 
                    at Strathmore University. My journey in tech is driven by curiosity and a desire to build 
                    solutions that make a real impact.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="animate-fade-in-up space-y-6">
              <div className="gradient-border">
                <div className="gradient-border-content p-6">
                  <h4 className="font-orbitron font-bold text-lg mb-3 text-space-violet">Education</h4>
                  <p className="text-gray-300">Bachelor of Informatics and Computer Science</p>
                  <p className="text-gray-400">Strathmore University • GPA 3.5</p>
                </div>
              </div>
              
              <div className="gradient-border">
                <div className="gradient-border-content p-6">
                  <h4 className="font-orbitron font-bold text-lg mb-3 text-space-cyan">Certifications</h4>
                  <ul className="text-gray-300 space-y-1">
                    <li>• CCNA 1 & 2</li>
                    <li>• IBM AI Fundamentals</li>
                    <li>• IBM Cybersecurity</li>
                  </ul>
                </div>
              </div>
              
              <div className="gradient-border">
                <div className="gradient-border-content p-6">
                  <h4 className="font-orbitron font-bold text-lg mb-3 text-space-pink">Specializations</h4>
                  <ul className="text-gray-300 space-y-1">
                    <li>• Web & Mobile Development</li>
                    <li>• UI/UX Design</li>
                    <li>• Cloud Services & API Integration</li>
                    <li>• AI & Cybersecurity Fundamentals</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
