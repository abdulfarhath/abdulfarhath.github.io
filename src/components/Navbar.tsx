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
        <div className="navcontainer w-full bg-[#111111] p-4 md:p-8 flex justify-center items-center">
            <div
                className={`bg-[#1d1d1d] text-white py-2 px-4 md:px-8 flex flex-col md:flex-row rounded-full justify-center space-y-4 md:space-y-0 md:space-x-8 transition-transform ${showNavbar ? 'translate-y-0' : '-translate-y-full'
                    }`}
            >
                <Link
                    to="home"
                    smooth={true}
                    duration={500}
                    className="cursor-pointer flex justify-center items-center h-12 w-12 rounded-full text-center hover:bg-yellow-400 hover:text-black transition text-yellow-100 text-sm md:text-base"
                    activeClass="active"
                >
                    /
                </Link>
                <Link
                    to="experience"
                    smooth={true}
                    duration={500}
                    className="cursor-pointer flex justify-center items-center h-12 w-24 rounded-full text-center hover:bg-yellow-400 hover:text-black transition text-yellow-100 text-sm md:text-base"
                    activeClass="active"
                >
                    Experience
                </Link>
                <Link
                    to="projects"
                    smooth={true}
                    duration={500}
                    className="cursor-pointer flex justify-center items-center h-12 w-20 rounded-full text-center hover:bg-yellow-400 hover:text-black transition text-yellow-100 text-sm md:text-base"
                    activeClass="active"
                >
                    Projects
                </Link>
                <Link
                    to="skills"
                    smooth={true}
                    duration={500}
                    className="cursor-pointer flex justify-center items-center h-12 w-16 rounded-full text-center hover:bg-yellow-400 hover:text-black transition text-yellow-100 text-sm md:text-base"
                    activeClass="active"
                >
                    Skills
                </Link>
            </div>
        </div>
    );
}
