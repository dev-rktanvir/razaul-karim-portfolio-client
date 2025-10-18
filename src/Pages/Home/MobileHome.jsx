import { motion } from 'framer-motion';
import { FaHandPaper } from 'react-icons/fa';
import SocialLinks from '../../Components/SocialLinks/SocialLinks';
import AnimatedButton from '../../Components/AnimatedButton/AnimatedButton';

const MobileHome = () => {
    return (
        <div className="lg:hidden flex flex-col items-center min-h-screen w-full px-6 py-10 text-white bg-black md:space-y-10">
            {/* Circle Image */}
            <div className="flex-shrink-0">
                <img
                    src="tanvir24.png"
                    alt="About me"
                    className="w-[300px] h-[300px] rounded-full border-4 border-primary/15 object-cover"
                />
            </div>

            {/* Content */}
            <div className="w-full flex flex-col items-center justify-center px-6 md:px-16 py-8 md:py-0 text-center">
                {/* Motion container with staggered animation */}
                <motion.div
                    className="flex flex-col gap-5 max-w-4xl"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                >
                    {/* Title with waving hand icon */}
                    <motion.h1
                        className="text-4xl md:text-5xl text-secondary font-light flex items-center gap-3 mb-2 flex-wrap justify-center text-center"
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                    >
                        Hello!
                        <motion.span
                            animate={{ rotate: [0, 20, -15, 10, -5, 0] }}
                            transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
                            className="text-yellow-400"
                        >
                            <FaHandPaper size={28} />
                        </motion.span>
                        <span>I'M Razaul Karim</span>
                    </motion.h1>

                    {/* Role */}
                    <motion.h2
                        className="flex flex-col gap-2 uppercase text-2xl md:text-5xl font-semibold text-primary mb-4 text-center"
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                    >
                        <span className="text-white">MERN Stack</span> Web Developer
                    </motion.h2>

                    {/* Description */}
                    <motion.p
                        className="max-w-xl text-accent mb-6 text-center"
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 0.6 }}
                    >
                        Crafting scalable, real-world web solutions with JavaScript from front to back,
                        using modern technologies like MongoDB, Express.js, React, and Node.js to build
                        fast, reliable, and user-focused applications.
                    </motion.p>

                    {/* Social Links */}
                    <motion.div
                        className="flex justify-center"
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7, duration: 0.6 }}
                    >
                    </motion.div>

                    {/* Buttons */}
                    <motion.div
                        className="flex flex-col sm:flex-row items-center gap-3"
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8, duration: 0.6 }}
                    >
                        <AnimatedButton text="View Resume" color="#00BC91" />
                        <AnimatedButton text="Download Resume" />
                    </motion.div>
                </motion.div>
            </div>
            <SocialLinks />
        </div>
    );
};

export default MobileHome;
