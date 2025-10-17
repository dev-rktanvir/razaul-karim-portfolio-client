import { FaHome, FaUser, FaProjectDiagram, FaEnvelope } from 'react-icons/fa';
import { Link, useLocation } from 'react-router';

const Footer = () => {
    const location = useLocation();

    const navLinks = [
        { label: 'Home', icon: <FaHome />, href: '/' },
        { label: 'About', icon: <FaUser />, href: '/about' },
        { label: 'Projects', icon: <FaProjectDiagram />, href: '/projects' },
        { label: 'Contact', icon: <FaEnvelope />, href: '/contact' },
    ];

    return (
        <footer className="py-6 flex flex-col items-end gap-4">
            {navLinks.map((item, idx) => {
                const isActive = location.pathname === item.href;

                return (
                    <Link
                        key={idx}
                        to={item.href}
                        className="group flex items-center transition-all duration-300"
                    >
                        <div
                            className={`w-12 h-12 rounded-full flex items-center justify-center text-white transition-all duration-300 group-hover:w-auto group-hover:px-4 group-hover:bg-primary group-hover:text-white ${isActive ? 'bg-primary' : 'bg-accent/30'
                                }`}
                        >
                            <span className="hidden group-hover:inline-block mr-2 text-sm font-medium text-white">
                            {item.label}
                        </span>

                            <span className="text-lg">{item.icon}</span>
                        </div>
                    </Link>
                );
            })}
        </footer>
    );
};

export default Footer;
