import React from "react";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import ProjectCard from "./ProjectCard";
import Loading from "../../Components/Loading/Loading";

const Projects = () => {
    const axiosSecure = useAxiosSecure();

    const {
        data: projects = [],
        isLoading,
        isError,
    } = useQuery({
        queryKey: ["projects"],
        queryFn: async () => {
            const res = await axiosSecure.get("/projects");
            return res.data;
        },
    });

    if (isLoading) return <Loading />;

    if (isError) {
        return (
            <p className="text-center text-red-500 text-lg mt-10">
                Failed to load projects. Please try again later.
            </p>
        );
    }

    return (
        <section className="w-full px-6 py-12" aria-labelledby="projects-heading">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-primary text-center text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight">
                    My <span className="text-secondary">Projects</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10 md:mt-20">
                    {projects.length === 0 ? (
                        <p className="text-center col-span-full">No projects found.</p>
                    ) : (
                        projects.map((project) => (
                            <ProjectCard key={project._id || project.name} project={project} />
                        ))
                    )}
                </div>
            </div>
        </section>
    );
};

export default Projects;
