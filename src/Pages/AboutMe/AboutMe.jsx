import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

import About from './About/About';
import Skills from './Skills/Skills';
import CoursesTraining from './CoursesTraining/CoursesTraining';

const AboutMe = () => {
    useEffect(() => {
        AOS.init({
            duration: 800,        // Animation duration (ms)
            once: false,           // Only animate once on scroll
            offset: 100,          // Trigger point offset
        });
    }, []);

    return (
        <section className="min-h-screen max-w-7xl mx-auto px-4 py-10 md:py-20">
            <div className="text-center md:mb-12" data-aos="fade-up">
                <h2 className="text-primary text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight">
                    About <span className="text-secondary">Me</span>
                </h2>
            </div>

            {/* Apply animation on child sections */}
            <div data-aos="fade-up">
                <About />
            </div>

            <div data-aos="fade-up" data-aos-delay="100">
                <Skills />
            </div>

            <div data-aos="fade-up" data-aos-delay="200">
                <CoursesTraining />
            </div>
        </section>
    );
};

export default AboutMe;
