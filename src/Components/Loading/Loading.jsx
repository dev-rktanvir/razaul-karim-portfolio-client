import { motion } from 'framer-motion';
import { FaSpinner } from 'react-icons/fa';

const Loading = () => {
    return (
        <div className="flex items-center justify-center min-h-screen w-full bg-black text-white">
            <motion.div
                className="flex flex-col items-center gap-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
            >
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                    className="text-primary"
                >
                    <FaSpinner size={40} />
                </motion.div>
                <p className="text-accent text-lg font-medium">
                    Loading, please wait...
                </p>
            </motion.div>
        </div>
    );
};

export default Loading;
