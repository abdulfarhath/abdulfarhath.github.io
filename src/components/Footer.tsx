import { FaLinkedin, FaTwitter, FaGithub, FaDiscord } from 'react-icons/fa';

const Footer: React.FC = () => {

    return (
        <footer id='footer' className="border-t border-gray-800/50 mt-16">
            <div className="section-container py-8">
                <div className="flex flex-col items-center gap-4">
                    <div className="flex justify-center gap-4">
                        <a href="https://www.linkedin.com/in/abdulfarhath" target="_blank" rel="noopener noreferrer"
                            className="text-gray-400 hover:text-cyan-400 text-xl transition-colors duration-300">
                            <FaLinkedin />
                        </a>
                        <a href="https://twitter.com/abdul_farhath" target="_blank" rel="noopener noreferrer"
                            className="text-gray-400 hover:text-cyan-400 text-xl transition-colors duration-300">
                            <FaTwitter />
                        </a>
                        <a href="https://github.com/abdulfarhath" target="_blank" rel="noopener noreferrer"
                            className="text-gray-400 hover:text-cyan-400 text-xl transition-colors duration-300">
                            <FaGithub />
                        </a>
                        <a href="https://discord.com/users/abdulfarhath" target="_blank" rel="noopener noreferrer"
                            className="text-gray-400 hover:text-cyan-400 text-xl transition-colors duration-300">
                            <FaDiscord />
                        </a>
                    </div>
                    <p className="text-sm text-gray-500">© 2025 Made by Farhath</p>
                </div>
            </div>
        </footer>
    );

};

export default Footer;
