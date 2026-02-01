import React from 'react';
import { FaJs, FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaGithub, FaGit, FaLinux } from 'react-icons/fa';
import { SiTypescript, SiMongodb, SiFirebase, SiFlutter, SiPython, SiC, SiPostman } from 'react-icons/si';
import { FaJava } from 'react-icons/fa';

export default function SkillsRoute() {
    const skillCategories = [
        {
            title: "Web Development",
            skills: [
                { icon: <FaJs className="text-yellow-500" />, name: "JavaScript" },
                { icon: <SiTypescript className="text-blue-500" />, name: "TypeScript" },
                { icon: <FaHtml5 className="text-orange-500" />, name: "HTML5" },
                { icon: <FaCss3Alt className="text-blue-500" />, name: "CSS3" },
                { icon: <FaReact className="text-cyan-500" />, name: "React" },
                { icon: <FaNodeJs className="text-green-500" />, name: "Node.js" },
                { icon: <SiMongodb className="text-green-500" />, name: "MongoDB" },
                { icon: <SiFirebase className="text-yellow-500" />, name: "Firebase" }
            ]
        },
        {
            title: "Tools & Platforms",
            skills: [
                { icon: <FaGithub className="text-gray-300" />, name: "GitHub" },
                { icon: <FaGit className="text-orange-500" />, name: "Git" },
                { icon: <FaLinux className="text-gray-300" />, name: "Linux" },
                { icon: <SiPostman className="text-orange-500" />, name: "Postman" }
            ]
        },
        {
            title: "Programming Languages",
            skills: [
                { icon: <FaJava className="text-red-500" />, name: "Java" },
                { icon: <SiC className="text-blue-500" />, name: "C" },
                { icon: <SiPython className="text-yellow-500" />, name: "Python" }
            ]
        },
        {
            title: "App Development",
            skills: [
                { icon: <SiFlutter className="text-blue-500" />, name: "Flutter" }
            ]
        },
    ];

    return (
        <section id="skills" className="section-spacing">
            <div className="section-container">
                <h1 className="section-title">SKILLS</h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {skillCategories.map((category, index) => (
                        <div key={index} className="card">
                            <h2 className="text-cyan-400 text-lg md:text-xl font-semibold mb-4 pb-2 border-b border-gray-700/50">{category.title}</h2>
                            <div className="flex flex-wrap gap-3">
                                {category.skills.map((skill, i) => (
                                    <div key={i} className="flex items-center gap-2 bg-gray-800/70 px-3 py-2 rounded-lg hover:bg-gray-700/70 transition-colors">
                                        {React.cloneElement(skill.icon, { className: `w-5 h-5 ${skill.icon.props.className}` })}
                                        <span className="text-sm text-gray-200">{skill.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}