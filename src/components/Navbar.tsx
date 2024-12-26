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
        <div className="navcontainer w-full bg-[#111111] p-8 flex justify-center items-center">
            <div
                className={`bg-[#1d1d1d] text-white py-4 px-8 flex rounded-full justify-center space-x-8 transition-transform ${showNavbar ? 'translate-y-0' : '-translate-y-full'
                    }`}
            >
                <Link
                    to="home"
                    smooth={true}
                    duration={500}
                    className="cursor-pointer h-7 w-20 rounded-full text-center hover:bg-yellow-400 hover:text-black   transition text-yellow-100"
                    activeClass="active"
                >
                    /
                </Link>
                <Link
                    to="experience"
                    smooth={true}
                    duration={500}
                    className="cursor-pointer h-7 w-20 rounded-full text-center hover:bg-yellow-400 hover:text-black   transition text-yellow-100"
                    activeClass="active"
                >
                    Experience
                </Link>
                <Link
                    to="projects"
                    smooth={true}
                    duration={500}
                    className="cursor-pointer h-7 w-20 rounded-full text-center hover:bg-yellow-400 hover:text-black   transition text-yellow-100"
                    activeClass="active"
                >
                    Projects
                </Link>
                <Link
                    to="skills"
                    smooth={true}
                    duration={500}
                    className="cursor-pointer h-7 w-20 rounded-full text-center hover:bg-yellow-400 hover:text-black   transition text-yellow-100"
                    activeClass="active"
                >
                    Skills
                </Link>
                <Link
                    to="contact"
                    smooth={true}
                    duration={500}
                    className="cursor-pointer h-7 w-20 rounded-full text-center hover:bg-yellow-400 hover:text-black   transition text-yellow-100"
                    activeClass="active"
                >
                    Contact
                </Link>
            </div>
        </div>
    );
}
