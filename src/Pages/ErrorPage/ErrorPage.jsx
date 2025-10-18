import { Link } from 'react-router';
import { motion } from 'framer-motion';

const ErrorPage = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-[#1a1a1a] px-6 text-white">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="text-center max-w-xl"
            >
                <h1 className="text-6xl md:text-7xl font-extrabold text-primary mb-4">
                    404
                </h1>
                <p className="text-xl md:text-2xl text-accent mb-6">
                    Oops! The page you're looking for doesn't exist.
                </p>
                <Link
                    to="/"
                    className="inline-block bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition"
                >
                    Go Home
                </Link>
            </motion.div>
        </div>
    );
};

export default ErrorPage;
