import React from "react";

const courses = [
    {
        title: "Complete React Developer in 2024",
        provider: "Udemy",
        duration: "Jan 2024 - Apr 2024",
        description: "Comprehensive React course covering hooks, context API, Redux, and performance optimization.",
        logo: "https://upload.wikimedia.org/wikipedia/commons/0/0e/Udemy_logo.svg",
    },
    {
        title: "Node.js, Express, MongoDB & More",
        provider: "Coursera",
        duration: "May 2023 - Jul 2023",
        description: "Backend development course focusing on building REST APIs with Node.js and MongoDB.",
        logo: "https://upload.wikimedia.org/wikipedia/commons/e/e4/Coursera_logo.svg",
    },
    {
        title: "Tailwind CSS From Scratch",
        provider: "Frontend Masters",
        duration: "Sep 2023",
        description: "Hands-on training on building responsive UI quickly with Tailwind CSS.",
        logo: "https://avatars.githubusercontent.com/u/3302306?s=280&v=4",
    },
    {
        title: "Git & GitHub Masterclass",
        provider: "Pluralsight",
        duration: "Dec 2023",
        description: "Master version control and collaboration workflows using Git and GitHub.",
        logo: "https://www.pluralsight.com/content/dam/pluralsight2/brands/brand-logos/pluralsight-logo.svg",
    },
];

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
                    {courses.map((course, i) => (
                        <CourseCard key={i} course={course} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CoursesTraining;
