import React from "react";

const dummyProject = {
  name: "Awesome Project",
  banner: "https://repository-images.githubusercontent.com/456963513/82528385-a73f-488f-9003-513321283a6b", // Replace with your own image
  techStack: ["React", "Node.js", "Express", "MongoDB"],
  description:
    "This is a sample project demonstrating a full-stack web application with user authentication and CRUD operations.",
  link: "https://example.com/live-project",
  repo: "https://github.com/yourusername/awesome-project-client",
  challenges: `- Handling authentication securely using JWT tokens.
- Managing state across multiple components efficiently.
- Optimizing API response times for better performance.`,
  improvements: `- Implement unit and integration testing.
- Add support for multiple languages.
- Improve UI responsiveness and accessibility.`,
};

const ProjectDetails = ({ project = dummyProject }) => {
  return (
    <section
      className="max-w-4xl mx-auto px-6 py-12"
      aria-labelledby="project-details-heading"
    >
      {/* Banner Image */}
      {project.banner && (
        <img
          src={project.banner}
          alt={`${project.name} Banner`}
          className="rounded-lg w-full mb-8 object-cover max-h-[400px]"
        />
      )}

      <h2
        id="project-details-heading"
        className="text-secondary text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-8 text-center"
      >
        {project.name}
      </h2>

      {/* Main Tech Stack */}
      <div className="mb-8">
        <h3 className="text-2xl font-semibold text-secondary mb-3">
          Main Technology Stack
        </h3>
        <div className="flex flex-wrap gap-3">
          {project.techStack.map((tech, idx) => (
            <span
              key={idx}
              className="bg-primary/20 text-primary text-sm font-medium px-3 py-1 rounded"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Brief Description */}
      <div className="mb-8">
        <h3 className="text-2xl font-semibold text-secondary mb-3">
          Brief Description
        </h3>
        <p className="text-accent text-lg">{project.description}</p>
      </div>

      {/* Live Project Link & GitHub Repo */}
      <div className="mb-8 flex flex-col sm:flex-row gap-4 justify-center">
        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border border-secondary text-secondary font-semibold px-6 py-3 rounded hover:bg-secondary/10 transition text-center"
          >
            Live Project
          </a>
        )}

        {project.repo && (
          <a
            href={project.repo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border border-secondary text-secondary font-semibold px-6 py-3 rounded hover:bg-secondary/10 transition text-center"
          >
            GitHub Repository (Client)
          </a>
        )}
      </div>

      {/* Challenges Faced */}
      {project.challenges && (
        <div className="mb-8">
          <h3 className="text-2xl font-semibold text-secondary mb-3">
            Challenges Faced
          </h3>
          <p className="text-accent text-lg whitespace-pre-line">
            {project.challenges}
          </p>
        </div>
      )}

      {/* Potential Improvements */}
      {project.improvements && (
        <div>
          <h3 className="text-2xl font-semibold text-secondary mb-3">
            Potential Improvements & Future Plans
          </h3>
          <p className="text-accent text-lg whitespace-pre-line">
            {project.improvements}
          </p>
        </div>
      )}
    </section>
  );
};

export default ProjectDetails;
