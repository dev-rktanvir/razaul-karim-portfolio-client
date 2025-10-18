import React from "react";
import { useParams } from "react-router";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Loading from "../../Components/Loading/Loading";


const ProjectDetails = () => {
  const { id } = useParams();
  const axiosSecure = useAxiosSecure();

  const {
    data: project,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["project", id],
    queryFn: async () => {
      const res = await axiosSecure.get(`/projects/${id}`);
      return res.data;
    },
    enabled: !!id,
  });

  if (isLoading) {
    return <Loading></Loading>;
  }

  if (isError) {
    return (
      <div className="text-center py-10 text-red-500">
        Failed to load project. Error: {error.message}
      </div>
    );
  }

  return (
    <section
      className="max-w-4xl mx-auto px-6 py-12"
      aria-labelledby="project-details-heading"
    >
      {/* Banner Image */}
      {project?.banner && (
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
        {project?.name}
      </h2>

      {/* Main Tech Stack */}
      {project?.techStack?.length > 0 && (
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
      )}

      {/* Brief Description */}
      {project?.description && (
        <div className="mb-8">
          <h3 className="text-2xl font-semibold text-secondary mb-3">
            Brief Description
          </h3>
          <p className="text-accent text-lg">{project.description}</p>
        </div>
      )}

      {/* Live Project Link & GitHub Repo */}
      <div className="mb-8 flex flex-col sm:flex-row gap-4 justify-center">
        {project?.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border border-secondary text-secondary font-semibold px-6 py-3 rounded hover:bg-secondary/10 transition text-center"
          >
            Live Project
          </a>
        )}

        {project?.repo && (
          <a
            href={project.repo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border border-secondary text-secondary font-semibold px-6 py-3 rounded hover:bg-secondary/10 transition text-center"
          >
            GitHub Repository
          </a>
        )}
      </div>

      {/* Challenges Faced */}
      {project?.challenges && (
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
      {project?.improvements && (
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
