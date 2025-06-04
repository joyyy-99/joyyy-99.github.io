import React from 'react';
import ProjectCard from './ProjectCard';

const ProjectsSection = () => {
  const projects = [
    {
      title: "XWaste App",
      description: "Full-stack waste management platform connecting users with efficient waste collection services",
      technologies: ["Laravel", "Kotlin", "Firebase", "REST API"],
      githubUrl: "https://github.com/joyyy-99/XWaste",
      highlights: ["Real-time tracking", "Payment integration", "Admin dashboard"],
      gradient: "from-space-violet to-space-cyan"
    },
    {
      title: "Travel Assistant Chatbot",
      description: "A web-based chatbot that helps users plan their trips by suggesting destinations, finding flights and accommodations, and providing personalized travel tips.",
      technologies: ["React", "Flask", "OpenAI GPT-3.5", "APIs"],
      githubUrl: "https://github.com/joyyy-99/travel_assistant",
      highlights: ["Destination suggestions", "API-driven recommendations", "Conversational UI"],
      gradient: "from-space-cyan to-space-pink"
    },
    {
      title: "Color Match Game",
      description: "Interactive game featuring color matching mechanics and engaging gameplay",
      technologies: ["WebGL", "Three.js", "Game Logic"],
      githubUrl: "https://github.com/joyyy-99/ColorMatch_v2_webGL",
      highlights: ["Smooth animations", "Score tracking", "Responsive controls"],
      gradient: "from-space-pink to-space-violet"
    },
    {
      title: "Sentiment Analyzer",
      description: "Real-time tweet sentiment classification using machine learning and Twitter API",
      technologies: ["Python", "Naïve Bayes", "Twitter API", "NLP"],
      githubUrl: "https://github.com/joyyy-99/Sentiment_Analyzer",
      highlights: ["Real-time analysis", "ML classification", "Data visualization"],
      gradient: "from-space-violet to-space-cyan"
    }
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="font-orbitron font-bold text-4xl md:text-5xl mb-6">
            <span className="bg-gradient-to-r from-space-violet to-space-cyan bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-space-violet to-space-cyan mx-auto rounded-full"></div>
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            Explore my latest work in web development, mobile applications, and innovative software solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
