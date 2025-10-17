import React from "react";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";


const CourseCard = ({ course }) => (
    <div className="flex gap-4 p-4 bg-secondary/15 rounded-lg shadow hover:shadow-lg transition-shadow duration-300">
        <img
            src={course.logo}
            alt={`${course.provider} logo`}
            className="w-14 h-14 object-contain rounded-md"
        />
        <div>
            <h4 className="text-primary font-semibold text-lg">{course.title}</h4>
            <p className="text-secondary font-medium">{course.provider}</p>
            <p className="text-accent text-sm italic">{course.duration}</p>
            <p className="text-accent text-sm mt-2">{course.description}</p>
        </div>
    </div>
);

const CoursesTraining = () => {
    const axiosSecure = useAxiosSecure();

    const { data: courses = [], isLoading, isError } = useQuery({
        queryKey: ["courses"],
        queryFn: async () => {
            const res = await axiosSecure.get("/course");
            return res.data;
        },
    });

    if (isLoading) return <p className="text-center">Loading courses...</p>;
    if (isError) return <p className="text-center text-red-500">Failed to load courses.</p>;

    return (
        <section className="w-full px-6 py-12" aria-labelledby="courses-heading">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h2
                        id="courses-heading"
                        className="text-primary text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight"
                    >
                        Completed <span className="text-secondary">Courses</span>
                    </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {courses.map((course) => (
                        <CourseCard key={course.title} course={course} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CoursesTraining;
