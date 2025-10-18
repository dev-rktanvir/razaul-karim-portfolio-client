import { motion } from 'framer-motion';
import { FaHandPaper } from 'react-icons/fa';
import AnimatedButton from '../../Components/AnimatedButton/AnimatedButton';
import SocialLinks from '../../Components/SocialLinks/SocialLinks';

const DesktopHome = () => {
    return (
        <div className="hidden lg:flex flex-col md:flex-row min-h-screen w-full text-white">
            {/* Left side */}
            <div className="w-full md:w-[30%] flex flex-col justify-center p-0 ml-12">
                <div className="rounded-2xl overflow-hidden bg-secondary/10 w-full h-[300px] md:h-auto">
                    <img
                        src="/tanvir24.png"
                        alt="Rezaul Karim"
                        className="w-full h-full object-cover"
                    />
                </div>
                <SocialLinks></SocialLinks>
            </div>

            {/* Right side */}
            <div className="w-full md:w-[70%] flex flex-col items-center justify-center px-6 md:px-16 py-8 md:py-0">
                {/* Motion container with staggered animation */}
                <motion.div
                    className="flex flex-col gap-5 max-w-4xl"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                >
                    {/* Title with waving hand icon */}
                    <motion.h1
                        className="text-4xl md:text-5xl text-secondary font-light flex items-center gap-3 mb-2 flex-wrap"
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
                        className="flex flex-col gap-2 uppercase text-2xl md:text-5xl font-semibold text-primary mb-4"
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                    >
                        <span className="text-white">MERN Stack</span> Web Developer
                    </motion.h2>

                    {/* Description */}
                    <motion.p
                        className="max-w-xl text-accent mb-6"
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 0.6 }}
                    >
                        Crafting scalable, real-world web solutions with JavaScript from front to back, using modern technologies like MongoDB, Express.js, React, and Node.js to build fast, reliable, and user-focused applications.
                    </motion.p>

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
        </div>
    );
};

export default DesktopHome;