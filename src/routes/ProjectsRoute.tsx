import React from 'react';

export default function ProjectsRoute() {
    const projects = [
        { name: "Portfolio Website", category: "Frontend", description: "A personal portfolio website built with React and Tailwind CSS.", link: "#" },
        { name: "E-commerce Platform", category: "Full-Stack", description: "A full-stack e-commerce platform using MERN stack.", link: "#" },
        { name: "Weather App", category: "Flutter", description: "A weather forecasting app built with Flutter.", link: "#" },
        { name: "Library Management System", category: "Java", description: "A library management system developed in Java.", link: "#" },
        { name: "Embedded Systems Project", category: "C", description: "An embedded systems project using C programming.", link: "#" }
    ];

    return (
        <div id='projects' className="w-full flex flex-col justify-center items-center mt-20">
            <div className='w-[65%]' >
                <h1 className="text-yellow-200 text-5xl font-bold mb-4">Projects</h1>
                <ul>
                    {projects.map((project, index) => (
                        <li key={index} className="mb-4">
                            <h2 className="text-gray-200">{project.name}</h2>
                            <p className="text-gray-300"><strong>Category:</strong> {project.category}</p>
                            <p className="text-gray-300">{project.description}</p>
                            <a href={project.link} className="text-blue-300">Project Link</a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
