import React from 'react';
import SkillCard from './SkillCard';
import SoftSkills from './SoftSkills';

const SkillsSection = ({ skills }) => {
  const frontendSkills = skills.filter(skill => skill.category === "Frontend");
  const backendSkills = skills.filter(skill => skill.category === "Backend");
  const databaseSkills = skills.filter(skill => skill.category === "Database");
  const toolsSkills = skills.filter(skill => skill.category === "Tools & DevOps");

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 space-y-12">
      {/* Frontend & Backend */}
      <div className="grid md:grid-cols-2 gap-8">
        {/* Frontend */}
        <div data-aos="fade-right">
          <h2 className="text-xl font-bold text-primary border border-secondary/30 inline p-2 mb-4">Frontend</h2>
          <div className="space-y-4 mt-5">
            {frontendSkills.map((skill, idx) => (
              <div key={idx} data-aos="fade-up" data-aos-delay={idx * 100}>
                <SkillCard {...skill} />
              </div>
            ))}
          </div>
        </div>

        {/* Backend */}
        <div data-aos="fade-left">
          <h2 className="text-xl font-bold text-primary border border-secondary/30 inline p-2 mb-4">Backend</h2>
          <div className="space-y-4 mt-5">
            {backendSkills.map((skill, idx) => (
              <div key={idx} data-aos="fade-up" data-aos-delay={idx * 100}>
                <SkillCard {...skill} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Database & Tools */}
      <div className="grid md:grid-cols-2 gap-8">
        {/* Database */}
        <div data-aos="fade-right">
          <h2 className="text-xl font-bold text-primary border border-secondary/30 inline p-2 mb-4">Database</h2>
          <div className="space-y-4 mt-5">
            {databaseSkills.map((skill, idx) => (
              <div key={idx} data-aos="fade-up" data-aos-delay={idx * 100}>
                <SkillCard {...skill} />
              </div>
            ))}
          </div>
        </div>

        {/* Tools */}
        <div data-aos="fade-left">
          <h2 className="text-xl font-bold text-primary border border-secondary/30 inline p-2 mb-4">Tools & DevOps</h2>
          <div className="space-y-4 mt-5">
            {toolsSkills.map((skill, idx) => (
              <div key={idx} data-aos="fade-up" data-aos-delay={idx * 100}>
                <SkillCard {...skill} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Soft Skills */}
      <SoftSkills />
    </div>
  );
};

export default SkillsSection;
