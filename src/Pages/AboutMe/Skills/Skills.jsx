import React from 'react';
import { useQuery } from '@tanstack/react-query';
import SkillsSection from './SkillsSection';
import useAxiosSecure from '../../../hooks/useAxiosSecure';

function Skills() {
    const axiosSecure = useAxiosSecure();

    const { data: skills, isLoading, isError } = useQuery({
        queryKey: ['skills'],
        queryFn: async () => {
            const response = await axiosSecure.get('/skill');
            return response.data;
        },
    });

    return (
        <div className="min-h-screen py-10">
            <div className="text-center md:mb-12" data-aos="fade-up">
                <h2 className="text-primary text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight">
                    My <span className="text-secondary">Skills</span>
                </h2>
            </div>
            {isLoading ? (
                <p className="text-center">Loading...</p>
            ) : isError ? (
                <p className="text-center text-red-500">Failed to load skills.</p>
            ) : (
                <SkillsSection skills={skills} />
            )}
        </div>
    );
}

export default Skills;
