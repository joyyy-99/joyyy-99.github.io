import React from 'react';

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Languages",
      skills: [
        { name: "JavaScript", level: 90 },
        { name: "TypeScript", level: 90 },
        { name: "Python", level: 90 },
        { name: "PHP", level: 88 },
        { name: "Kotlin", level: 85 },
        { name: "Java", level: 80 }
      ]
    },
    {
      title: "Frameworks & Libraries",
      skills: [
        { name: "React", level: 90 },
        { name: "Laravel", level: 90 },
        { name: "Node.js", level: 80 },
        { name: "Flask", level: 75 }
      ]
    },
    {
      title: "Tools & Technologies",
      skills: [
        { name: "GitHub", level: 90 },
        { name: "Postman", level: 90 },
        { name: "Firebase", level: 85 },
        { name: "Google Cloud", level: 80 },
        { name: "Docker", level: 75 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="font-orbitron font-bold text-4xl md:text-5xl mb-6">
            <span className="bg-gradient-to-r from-space-violet to-space-cyan bg-clip-text text-transparent">
              Technical Skills
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-space-violet to-space-cyan mx-auto rounded-full"></div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, categoryIdx) => (
            <div 
              key={categoryIdx}
              className={`gradient-border animate-fade-in-up`}
              style={{ animationDelay: `${categoryIdx * 0.2}s` }}
            >
              <div className="gradient-border-content p-6">
                <h3 className="font-orbitron font-bold text-xl mb-6 text-center">
                  <span className="bg-gradient-to-r from-space-violet to-space-cyan bg-clip-text text-transparent">
                    {category.title}
                  </span>
                </h3>
                
                <div className="space-y-4">
                  {category.skills.map((skill, skillIdx) => (
                    <div key={skillIdx}>
                      <div className="flex justify-between mb-2">
                        <span className="text-white font-medium">{skill.name}</span>
                        <span className="text-space-cyan">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-space-navy rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-space-violet to-space-cyan h-2 rounded-full transition-all duration-1000 ease-out"
                          style={{ 
                            width: `${skill.level}%`,
                            animationDelay: `${(categoryIdx * 0.2) + (skillIdx * 0.1)}s`
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
