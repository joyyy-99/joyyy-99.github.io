import React from 'react';
import { Globe, Stars, Moon } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center justify-center space-y-6">
          {/* Orbiting icons animation */}
          <div className="relative">
            <div className="flex items-center space-x-8">
              <Globe className="w-8 h-8 text-space-violet animate-float" />
              <Stars className="w-10 h-10 text-space-cyan animate-twinkle" />
              <Moon className="w-8 h-8 text-space-pink animate-float" style={{ animationDelay: '1s' }} />
            </div>
          </div>

          <div className="text-center">
            <p className="font-orbitron font-bold text-xl mb-2">
              <span className="bg-gradient-to-r from-space-violet to-space-cyan bg-clip-text text-transparent">
                Joy Awino
              </span>
            </p>
            <p className="text-gray-400 mb-4">Software Developer</p>
            <p className="text-gray-500 text-sm">
              © {currentYear} Joy Awino. Built with React & Tailwind CSS by yours truly✨
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
