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
        <div className="w-full flex flex-col justify-center items-center mt-20 px-4 md:px-6 lg:px-0">
            <div id="skills" className="w-full md:w-[80%] lg:w-[65%]">
                <h1 className="text-cyan-500 text-3xl md:text-4xl lg:text-5xl font-bold mb-6 md:mb-10">SKILLS</h1>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {skillCategories.map((category, index) => (
                        <div key={index} className="p-5 bg-gray-900 bg-opacity-40 rounded-lg border border-gray-800 transition-all duration-300">
                            <h2 className="text-cyan-400 text-xl md:text-2xl mb-4 pb-2 border-b border-gray-700">{category.title}</h2>
                            <div className="flex flex-wrap gap-4">
                                {category.skills.map((skill, i) => (
                                    <div key={i} className="flex items-center gap-2 bg-gray-800 bg-opacity-50 px-3 py-2 rounded-md">
                                        {React.cloneElement(skill.icon, { className: `w-5 h-5 ${skill.icon.props.className}` })}
                                        <span className="text-sm text-gray-200">{skill.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}