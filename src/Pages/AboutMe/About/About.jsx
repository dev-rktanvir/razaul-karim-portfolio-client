import React from 'react';

const About = () => {
    return (
        <section className="max-w-6xl mx-auto px-4 py-12">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                {/* Left Side - Circle Image */}
                <div className="flex-shrink-0">
                    <img
                        src="tanvir24.png"
                        alt="About me"
                        className="w-[300px] h-[300px] rounded-full border-4 border-primary/15 object-cover"
                    />
                </div>

                {/* Right Side - Text Box */}
                <div className="bg-secondary/15 text-accent p-6 rounded-lg shadow-md border border-transparent hover:border-primary/50 transition duration-300">
                    <div>
                        <h2 className="text-2xl text-secondary font-semibold mb-4">About Me</h2>
                        <p className=" leading-relaxed mb-4">
                            Hello! I’m a passionate developer specializing in React and Tailwind CSS. I love creating
                            beautiful, responsive web applications that provide excellent user experiences. When I’m not coding,
                            I enjoy learning new technologies and exploring creative design ideas.
                        </p>
                        <p className="leading-relaxed">
                            Hello! I’m a passionate developer specializing in React and Tailwind CSS. I love creating
                            beautiful, responsive web applications that provide excellent user experiences. When I’m not coding,
                            I enjoy learning new technologies and exploring creative design ideas.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
