import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';

export default function Navbar() {
    const [showNavbar, setShowNavbar] = useState(true);
    const [lastScrollPosition, setLastScrollPosition] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPosition = window.scrollY;
            setShowNavbar(currentScrollPosition < lastScrollPosition || currentScrollPosition < 100);
            setLastScrollPosition(currentScrollPosition);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollPosition]);

    return (
        <div
            className={`fixed top-0 left-0 w-full bg-gray-800 text-white py-4 px-8 flex justify-center space-x-8 transition-transform ${
                showNavbar ? 'translate-y-0' : '-translate-y-full'
            }`}
        >
            <Link
                to="home"
                smooth={true}
                duration={500}
                className="cursor-pointer hover:text-gray-400 transition"
            >
                Home
            </Link>
            <Link
                to="experience"
                smooth={true}
                duration={500}
                className="cursor-pointer hover:text-gray-400 transition"
            >
                Experience
            </Link>
            <Link
                to="projects"
                smooth={true}
                duration={500}
                className="cursor-pointer hover:text-gray-400 transition"
            >
                Projects
            </Link>
            <Link
                to="skills"
                smooth={true}
                duration={500}
                className="cursor-pointer hover:text-gray-400 transition"
            >
                Skills
            </Link>
            <Link
                to="contact"
                smooth={true}
                duration={500}
                className="cursor-pointer hover:text-gray-400 transition"
            >
                Contact
            </Link>
        </div>
    );
}
