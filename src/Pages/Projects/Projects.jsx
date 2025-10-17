import React from "react";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";


const ProjectCard = ({ project }) => (
    <div className="p-6 bg-secondary/15 rounded-lg shadow hover:shadow-lg transition-shadow duration-300">
        {/* Banner Image */}
        {project.banner && (
            <img
                src={project.banner}
                alt={`${project.name} Banner`}
                className="rounded-md mb-4 w-[500px] object-cover max-h-[400px] mx-auto"
                onError={(e) => (e.target.src = "https://via.placeholder.com/600x300?text=No+Image")}
            />
        )}
        <h4 className="text-secondary font-semibold mb-2 text-lg">{project.name}</h4>
        <p className="text-accent text-sm mb-3">{project.description}</p>

        {/* Tech stack badges */}
        <div className="mb-3 flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
                <span
                    key={tech}
                    className="bg-primary/20 text-primary text-xs font-medium px-2 py-1 rounded"
                >
                    {tech}
                </span>
            ))}
        </div>

        {/* Action buttons */}
        <div className="flex gap-4 items-center mt-4">
            {project.link && (
                <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-secondary font-semibold border border-secondary/50 px-3 py-1 rounded hover:bg-secondary/20 transition"
                >
                    View Project
                </a>
            )}
            {project.repo && (
                <a
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-secondary font-semibold border border-secondary/50 px-3 py-1 rounded hover:bg-secondary/20 transition"
                >
                    GitHub Repo
                </a>
            )}
        </div>
    </div>
);

const Projects = () => {
    const axiosSecure = useAxiosSecure();

    const { data: projects = [], isLoading, isError } = useQuery({
        queryKey: ["projects"],
        queryFn: async () => {
            const res = await axiosSecure.get("/projects");
            return res.data; // make sure your API returns an array of projects
        },
    });

    if (isLoading) return <p className="text-center">Loading projects...</p>;

    if (isError) return <p className="text-center text-red-500">Failed to load projects.</p>;

    return (
        <section className="w-full px-6 py-12" aria-labelledby="projects-heading">
            <div className="max-w-7xl mx-auto">
                <div className="text-center md:mb-20" data-aos="fade-up">
                    <h2
                        id="projects-heading"
                        className="text-primary text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight"
                    >
                        My <span className="text-secondary">Projects</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.length === 0 ? (
                        <p className="text-center col-span-full">No projects found.</p>
                    ) : (
                        projects.map((project) => (
                            <ProjectCard key={project.name} project={project} />
                        ))
                    )}
                </div>
            </div>
        </section>
    );
};

export default Projects;
