import React from 'react';

export default function ProjectsRoute() {
    const projects = [
        { name: "Portfolio Website", category: "Frontend", description: "A personal portfolio website built with React and Tailwind CSS.", link: "#", image: "portfolio.png" },
        { name: "E-commerce Platform", category: "Full-Stack", description: "A full-stack e-commerce platform using MERN stack.", link: "#", image: "ecommerce.png" },
        { name: "Weather App", category: "Flutter", description: "A weather forecasting app built with Flutter.", link: "#", image: "weather.png" },
        { name: "Library Management System", category: "Java", description: "A library management system developed in Java.", link: "#", image: "library.png" },
        { name: "Embedded Systems Project", category: "C", description: "An embedded systems project using C programming.", link: "#", image: "embedded.png" }
    ];

    return (
        <div id="projects" className="w-full flex flex-col justify-center items-center">
            <div className="bg-[#111111] w-full flex flex-col p-10">
                <h1 className="text-5xl text-yellow-200 font-bold mb-4">Projects</h1>
                <div className="relative container flex flex-col justify-center gap-4">
                    <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-yellow-200"></div>
                    {projects.map((project, index) => (
                        <div key={index} className={`flex flex-row items-center w-full mb-8 ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}>
                            <div className="w-1/2 flex flex-col items-end pr-4">
                                <div className="bg-yellow-200 w-4 h-4 rounded-full"></div>
                                <div className="mt-2 text-right">
                                    <h2 className="font-bold text-white">{project.name}</h2>
                                    <p className="text-gray-400">{project.description}</p>
                                    <img src={project.image} alt={project.name} className="mt-2 w-32 h-32 object-cover" />
                                    <a href={project.link} className="mt-2 inline-block bg-purple-400 text-white px-4 py-2 rounded">View Project</a>
                                </div>
                            </div>
                            <div className="w-1/2"></div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}