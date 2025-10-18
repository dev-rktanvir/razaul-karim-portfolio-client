import React from 'react';
import { FaGithub, FaLinkedin, FaFacebook } from 'react-icons/fa';

const socialLinks = [
    {
        name: 'GitHub',
        icon: <FaGithub />,
        url: 'https://github.com/dev-rktanvir',
    },
    {
        name: 'LinkedIn',
        icon: <FaLinkedin />,
        url: 'https://linkedin.com/in/your-profile',
    },
    {
        name: 'Facebook',
        icon: <FaFacebook />,
        url: 'https://www.facebook.com/dev.rktanvir',
    },
];

const SocialLinks = () => {
    return (
        <div className="flex items-end gap-4 mt-6">
            {socialLinks.map((link) => (
                <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center transition-all duration-300"
                    aria-label={link.name}
                >
                    <div className="w-12 h-12 rounded-full flex items-center justify-center text-white bg-accent/30 transition-all duration-300 group-hover:w-auto group-hover:px-4 group-hover:bg-primary group-hover:text-white">
                        <span className="hidden group-hover:inline-block mr-2 text-sm font-medium text-white">
                            {link.name}
                        </span>
                        <span className="text-lg">{link.icon}</span>
                    </div>
                </a>
            ))}
        </div>
    );
};

export default SocialLinks;
