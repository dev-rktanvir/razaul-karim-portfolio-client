import { Link } from 'react-router';
import { motion } from 'framer-motion';
import SocialLinks from '../../Components/SocialLinks/SocialLinks';

const ErrorPage = () => {
    return (
        <div className="min-h-screen bg-black text-white">
            {/* Responsive column layout */}
            <div className="flex flex-col-reverse md:grid md:grid-cols-2 min-h-screen">
                {/* Left - Image (On mobile: appears at bottom) */}
                <div className="flex flex-col items-center justify-center p-6">
                    <img
                        src="/tanvir.png"
                        alt="Razaul Karim"
                        className="w-full max-w-md md:max-w-lg object-contain"
                    />
                    <SocialLinks />
                </div>

                {/* Right - Content (On mobile: appears at top) */}
                <div className="flex items-start md:items-center justify-center p-6">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="text-center md:text-center"
                    >
                        <motion.h1
                            animate={{
                                color: ["#F20101", "#00BC91", "#DFDFDFC4"],
                            }}
                            transition={{
                                repeat: Infinity,
                                duration: 3,
                            }}
                            className="text-7xl lg:text-[200px] font-extrabold mb-4"
                        >
                            404
                        </motion.h1>
                        <p className="text-xl md:text-2xl text-accent mb-6 text-left">
                            Hi! My dear visitor,<br />
                            The page you're looking for doesn't exist.
                        </p>
                        <Link
                            to="/"
                            className="inline-block bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition"
                        >
                            Go Home
                        </Link>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;
