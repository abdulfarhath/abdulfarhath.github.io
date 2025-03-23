'use client';

import { Link } from 'react-scroll';
import { useState, useEffect } from 'react';
import { Dock, DockIcon } from '../components/magicui/dock';
import { FaHome, FaProjectDiagram, FaTools, FaUserTie } from 'react-icons/fa';

export default function Navbar() {
    const [showNavbar, setShowNavbar] = useState(true);
    const [lastScrollPosition, setLastScrollPosition] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPosition = window.scrollY;
            setShowNavbar(
                currentScrollPosition < lastScrollPosition || currentScrollPosition < 100
            );
            setLastScrollPosition(currentScrollPosition);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollPosition]);

    const sections = [
        { id: 'home', label: '/', icon: <FaHome size={24} /> },
        { id: 'experience', label: 'Experience', icon: <FaUserTie size={24} /> },
        { id: 'projects', label: 'Projects', icon: <FaProjectDiagram size={24} /> },
        { id: 'skills', label: 'Skills', icon: <FaTools size={24} /> },
    ];

    return (
        <div
            className={`fixed top-0 left-0 w-full py-6 flex justify-center items-center transition-transform duration-500 z-50 ${
                showNavbar ? 'translate-y-0' : '-translate-y-full'
            }`}
        >
            <Dock
                iconSize={50}
                iconMagnification={80}
                iconDistance={160}
                direction="middle"
                className="gap-8 p-4"
            >
                {sections.map((section, index) => (
                    <DockIcon key={index}>
                        <Link
                            to={section.id}
                            smooth={true}
                            duration={500}
                            spy={true}
                            offset={-70}
                            className="flex flex-col justify-center items-center text-cyan-100 hover:text-cyan-500 transition-colors"
                            activeClass="text-cyan-500"
                        >
                            {/* {section.icon} */}
                            <span className="text-sm ">{section.label}</span>
                        </Link>
                    </DockIcon>
                ))}
            </Dock>
        </div>
    );
}
