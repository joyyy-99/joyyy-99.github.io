import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Rocket } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="font-orbitron font-bold text-4xl md:text-5xl mb-6">
              <span className="bg-gradient-to-r from-space-violet to-space-cyan bg-clip-text text-transparent">
                Let's Connect
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-space-violet to-space-cyan mx-auto rounded-full"></div>
            <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
              Ready to launch your next project? Let's discuss how we can work together to create something amazing.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="animate-slide-in-left">
              <div className="gradient-border">
                <div className="gradient-border-content p-8">
                  <Rocket className="w-12 h-12 text-space-cyan mb-6 animate-rocket-float" />
                  <h3 className="font-orbitron font-bold text-2xl mb-4 text-space-cyan">
                    Connect With Joy
                  </h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    I'm always excited to work on innovative projects and collaborate with fellow developers. 
                    Whether you have a project in mind or just want to connect, feel free to reach out!
                  </p>
                  <div className="space-y-3 text-gray-300">
                    <p>📧 joyawino99@gmail.com</p>
                    <p>🌍 Nairobi, Kenya</p>
                    <p>💼 Available for freelance projects</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="animate-fade-in-up">
              <form
                action="https://formspree.io/f/xldnddvz"
                method="POST"
                className="space-y-6"
              >
                <Input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  className="bg-space-navy border-space-purple focus:border-space-cyan text-white placeholder-gray-400"
                />
                <Input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                  className="bg-space-navy border-space-purple focus:border-space-cyan text-white placeholder-gray-400"
                />
                <Textarea
                  name="message"
                  placeholder="Your Message"
                  rows={5}
                  required
                  className="bg-space-navy border-space-purple focus:border-space-cyan text-white placeholder-gray-400 resize-none"
                />
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-space-violet to-space-cyan hover:from-space-cyan hover:to-space-violet text-white font-semibold py-3 rounded-lg transition-all duration-300 transform hover:scale-105"
                >
                  Send Message 🚀
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
