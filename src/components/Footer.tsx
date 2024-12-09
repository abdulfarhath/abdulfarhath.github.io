import React from 'react';
import { FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa';

const Footer: React.FC = () => {

    return (
        <footer className="flex flex-col items-center p-4 bg-gray-800 text-white">
            <div className="flex justify-center gap-4 mb-2">
                <a href="https://www.linkedin.com/in/abdulfarhath" target="_blank" rel="noopener noreferrer" className="text-white text-2xl">
                    <FaLinkedin />
                </a>
                <a href="https://twitter.com/abdul_farhath" target="_blank" rel="noopener noreferrer" className="text-white text-2xl">
                    <FaTwitter />
                </a>
                <a href="https://github.com/abdulfarhath" target="_blank" rel="noopener noreferrer" className="text-white text-2xl">
                    <FaGithub />
                </a>
            </div>
            <p className="text-sm">© 2023 Your Name. All rights reserved.</p>
        </footer>
    );

};

export default Footer;
