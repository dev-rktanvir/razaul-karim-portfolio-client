import React from 'react';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../../hooks/useAxiosSecure';


const SoftSkills = () => {
    const axiosSecure = useAxiosSecure();

    const { data: softSkills = [], isLoading, isError } = useQuery({
        queryKey: ['softSkills'],
        queryFn: async () => {
            const res = await axiosSecure.get('/skill-soft');
            return res.data;
        },
    });
    console.log(softSkills)

    return (
        <section className="max-w-4xl mx-auto px-4 py-12" data-aos="fade-up">
            <h3 className="text-3xl font-semibold text-primary mb-6 text-center">
                Soft Skills
            </h3>

            {isLoading ? (
                <p className="text-center">Loading...</p>
            ) : isError ? (
                <p className="text-center text-red-500">Failed to load soft skills.</p>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {softSkills.map((skill, i) => (
                        <div
                            key={i}
                            className="p-4 bg-primary/10 rounded-lg shadow text-left"
                            data-aos="zoom-in"
                            data-aos-delay={i * 100}
                        >
                            <h5 className="font-semibold text-primary mb-1">{skill.name}</h5>
                            <p className="text-sm text-primary/80">{skill.description}</p>
                        </div>
                    ))}
                </div>
            )}
        </section>
    );
};

export default SoftSkills;
