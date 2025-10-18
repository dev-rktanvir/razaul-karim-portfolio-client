import React from "react";
import { Link } from "react-router";
import { motion } from "framer-motion";

const ProjectCard = ({ project, index = 0 }) => {
    return (
        <motion.div
            className="p-6 bg-secondary/15 rounded-lg shadow hover:shadow-lg transition-shadow duration-300"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.6, ease: 'easeOut' }}
        >
            {/* Banner Image */}
            {project.banner && (
                <img
                    src={project.banner}
                    alt={`${project.name} Banner`}
                    className="rounded-md mb-4 w-full max-w-[500px] object-cover max-h-[400px] mx-auto"
                    onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = "https://via.placeholder.com/600x300?text=No+Image";
                    }}
                />
            )}

            {/* Project Name */}
            <h4 className="text-secondary font-semibold mb-2 text-lg">{project.name}</h4>

            {/* Description */}
            <p className="text-accent text-sm mb-3">{project.description}</p>

            {/* Action Buttons */}
            <div className="flex gap-4 items-center mt-4">
                {project.link && (
                    <Link
                        to={`/projects/${project._id}`}
                        className="text-secondary font-semibold border border-secondary/50 px-3 py-1 rounded hover:bg-secondary/20 transition"
                    >
                        Project Details
                    </Link>
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
        </motion.div>
    );
};

export default ProjectCard;
