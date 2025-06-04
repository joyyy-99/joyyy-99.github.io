
import React from 'react';
import { Button } from '@/components/ui/button';
import { Stars } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  highlights: string[];
  gradient: string;
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  return (
    <div 
      className={`gradient-border hover:scale-105 transition-all duration-300 animate-fade-in-up`}
      style={{ animationDelay: `${index * 0.2}s` }}
    >
      <div className="gradient-border-content p-6 h-full">
        <div className="flex items-start justify-between mb-4">
          <h3 className="font-orbitron font-bold text-xl text-white">
            {project.title}
          </h3>
          <Stars className="w-6 h-6 text-space-cyan animate-twinkle" />
        </div>
        
        <p className="text-gray-300 mb-4 leading-relaxed">
          {project.description}
        </p>
        
        <div className="mb-4">
          <h4 className="font-semibold text-space-cyan mb-2">Key Highlights:</h4>
          <ul className="text-gray-400 text-sm space-y-1">
            {project.highlights.map((highlight, idx) => (
              <li key={idx}>• {highlight}</li>
            ))}
          </ul>
        </div>
        
        <div className="mb-6">
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, idx) => (
              <span 
                key={idx}
                className={`px-3 py-1 bg-gradient-to-r ${project.gradient} text-white text-xs rounded-full font-medium`}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
        
        <Button 
        onClick={() => window.open(project.githubUrl, '_blank')}
        className={`w-full bg-gradient-to-r ${project.gradient} text-white hover:shadow-lg transition-all duration-300`}
        >
          View on GitHub
        </Button>

      </div>
    </div>
  );
};

export default ProjectCard;
