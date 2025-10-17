
import React from "react";

const technicalSkills = {
  frontend: {
    title: "Frontend",
    skills: [
      {
        name: "HTML",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
        description: "Markup language for creating web pages.",
      },
      {
        name: "CSS",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
        description: "Stylesheet language to design web pages.",
      },
      {
        name: "Tailwind CSS",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
        description: "Utility-first CSS framework for fast UI dev.",
      },
      {
        name: "JavaScript",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        description: "Main scripting language for web development.",
      },
      {
        name: "React",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        description: "JavaScript library for building UIs.",
      },
    ],
  },
  backend: {
    title: "Backend",
    skills: [
      {
        name: "Node.js",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
        description: "JavaScript runtime for server-side development.",
      },
      {
        name: "Express",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
        description: "Minimalist web framework for Node.js.",
      },
    ],
  },
  database: {
    title: "Database",
    skills: [
      {
        name: "MongoDB",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
        description: "NoSQL database for scalable applications.",
      },
      {
        name: "Firebase",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
        description: "Backend-as-a-Service for real-time apps.",
      },
    ],
  },
  tools: {
    title: "Tools & DevOps",
    skills: [
      {
        name: "GitHub",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
        description: "Code hosting and version control platform.",
      },
      {
        name: "Deployment",
        logo: "https://img.icons8.com/external-tal-revivo-color-tal-revivo/48/000000/external-netlify-a-cloud-computing-company-that-offers-hosting-services-logo-color-tal-revivo.png",
        description: "Deploying apps via Netlify, Vercel, etc.",
      },
    ],
  },
};

const softSkills = [
  {
    name: "Communication",
    description: "Effectively exchanging information with others.",
  },
  {
    name: "Teamwork",
    description: "Collaborating well with others to achieve goals.",
  },
  {
    name: "Problem Solving",
    description: "Finding solutions to difficult or complex issues.",
  },
  {
    name: "Adaptability",
    description: "Adjusting to new conditions and challenges.",
  },
];

const SkillGroup = ({ title, skills, isTechnical = true }) => (
  <div className="w-full px-4 mb-10">
    <h4 className="text-xl font-bold text-primary border border-secondary/30 inline p-2 mb-4">{title}</h4>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
      {skills.map((skill, i) => (
        <div
          key={i}
          className={`flex items-center gap-4 p-4 rounded-lg shadow ${
            isTechnical ? "bg-secondary/15" : "bg-primary/10"
          }`}
        >
          {isTechnical && (
            <img src={skill.logo} alt={skill.name} className="w-10 h-10" />
          )}
          <div>
            <h5 className={`font-semibold ${isTechnical ? "text-secondary" : "text-primary"}`}>
              {skill.name}
            </h5>
            <p className={`text-sm ${isTechnical ? "text-accent" : "text-primary/80"}`}>
              {skill.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const Test = () => {
  return (
    <section className="w-full px-6 py-12" aria-labelledby="Test-heading">
      <div className="max-w-7xl mx-auto">
        <div className="text-center md:mb-20" data-aos="fade-up">
          <h2
            id="skills-heading"
            className="text-primary text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight"
          >
            My <span className="text-secondary">Skills</span>
          </h2>
        </div>

        {/* Technical Skills */}
        <div className="flex flex-col md:flex-row md:gap-8">
          {/* Left Column */}
          <div data-aos="fade-right" className="w-full md:w-1/2 px-4 mb-10">
            <SkillGroup title={technicalSkills.frontend.title} skills={technicalSkills.frontend.skills} />
          </div>

          {/* Right Column */}
          <div data-aos="fade-left" className="w-full md:w-1/2 px-4 mb-10">
            <SkillGroup title={technicalSkills.backend.title} skills={technicalSkills.backend.skills} />
          </div>
        </div>

        <div className="my-8 border-t border-secondary/20"></div>

        <div className="flex flex-col md:flex-row md:gap-8">
          {/* Left Column */}
          <div data-aos="fade-right" className="w-full md:w-1/2 px-4 mb-10">
            <SkillGroup title={technicalSkills.database.title} skills={technicalSkills.database.skills} />
          </div>

          {/* Right Column */}
          <div data-aos="fade-left" className="w-full md:w-1/2 px-4 mb-10">
            <SkillGroup title={technicalSkills.tools.title} skills={technicalSkills.tools.skills} />
          </div>
        </div>

        {/* Separator */}
        <div className="my-12 border-t border-secondary/30"></div>

        {/* Soft Skills */}
        <div className="max-w-4xl mx-auto px-4" data-aos="fade-up">
          <h3 className="text-3xl font-semibold text-primary mb-6 text-center">
            Soft Skills
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {softSkills.map((skill, i) => (
              <div
                key={i}
                className="p-6 bg-primary/10 rounded-lg shadow text-center"
                data-aos="zoom-in"
                data-aos-delay={i * 100}
              >
                <h5 className="font-semibold text-primary mb-2">{skill.name}</h5>
                <p className="text-primary/80 text-sm">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Test;
