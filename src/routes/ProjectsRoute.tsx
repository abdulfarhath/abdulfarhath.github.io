import React from 'react';

export default function ProjectsRoute() {
    const projects = [
        { 
            name: "ArthGyan", 
            category: "Frontend", 
            techStack: "HTML, CSS, JavaScript, React.js", 
            description: "Developed a platform to enhance financial literacy in India by providing interactive educational tools, up-to-date financial trends, and engaging blogs to make complex financial concepts accessible.", 
            github: "#", 
            video: "#", 
            details: "Integrated a real-time chatbot and a community forum to support user queries and facilitate knowledge sharing among users." 
        },
        { 
            name: "Music Player using Java (Swing)", 
            category: "Java", 
            techStack: "Java, Swing, AWT, Java Sound API, jaudiotagger", 
            description: "Built a fully functional music player using Java Swing, AWT, Java Sound API, and jaudiotagger.", 
            github: "#", 
            video: "#", 
            details: "Features include play, pause, skip, and real-time display of song metadata such as title, artist, and album art. Designed an intuitive UI with JList for playlist management and JProgressBar for real-time progress tracking, ensuring smooth user interaction and experience." 
        },
        { 
            name: "E-commerce Platform", 
            category: "Full-Stack", 
            techStack: "MERN stack", 
            description: "A full-stack e-commerce platform using MERN stack.", 
            github: "#", 
            video: "#", 
            details: "This platform allows users to browse products, add them to the cart, and make purchases online." 
        },
        { 
            name: "Weather App", 
            category: "Flutter", 
            techStack: "Flutter, Dart", 
            description: "A weather forecasting app built with Flutter.", 
            github: "#", 
            video: "#", 
            details: "This app provides real-time weather updates and forecasts for various locations." 
        },
        { 
            name: "Library Management System", 
            category: "Java", 
            techStack: "Java, MySQL", 
            description: "A library management system developed in Java.", 
            github: "#", 
            video: "#", 
            details: "This system helps manage library resources, including books, members, and transactions." 
        },
        { 
            name: "Embedded Systems Project", 
            category: "C", 
            techStack: "C, Microcontroller", 
            description: "An embedded systems project using C programming.", 
            github: "#", 
            video: "#", 
            details: "This project involves programming a microcontroller to perform specific tasks." 
        },
    ];

    return (
        <div id='projects' className="w-full flex flex-col justify-center items-center mt-20">
            <div className='w-[65%]' >
                <h1 className="text-yellow-200 text-5xl font-bold mb-10">PROJECTS</h1>
                <ul>
                    {projects.map((project, index) => (
                        <li key={index} className="mb-8">
                            <h2 className="text-green-200 text-3xl mb-3">{project.name}</h2>
                            <p className="text-gray-300"><strong>Category:</strong> {project.category}</p>
                            <p className="text-gray-300 mb-3"><strong>Tech Stack:</strong> {project.techStack}</p>
                            <p className="text-gray-300">{project.description}</p>
                            <p className="text-gray-300">{project.details}</p>
                            <div className="text-cyan-300 mt-3">
                                <a href={project.github}>GitHub Link</a> | <a href={project.video}>Video Link</a>
                            </div>
                                
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
