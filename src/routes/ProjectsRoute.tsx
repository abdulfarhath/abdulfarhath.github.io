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
            name: "NutriBytes", 
            category: "Full-Stack", 
            techStack: "MERN stack", 
            description: "A comprehensive nutrition analysis platform that provides detailed nutritional information based on user-inputted food items.", 
            github: "#", 
            video: "#", 
            details: "Utilizes the MERN stack to offer a seamless user experience, allowing users to input food items and receive real-time nutritional data, including calories, macronutrients, and vitamins." 
        },
    ];

    return (
        <div id='projects' className="w-full flex flex-col justify-center items-center mt-20 px-4 md:px-6 lg:px-0">
            <div className='w-full md:w-[80%] lg:w-[65%]' >
                <h1 className="text-cyan-500 text-3xl md:text-4xl lg:text-5xl font-bold mb-6 md:mb-10">PROJECTS</h1>
                <ul>
                    {projects.map((project, index) => (
                        <li key={index} className="mb-8 p-4 bg-gray-900 bg-opacity-40 rounded-lg hover:bg-opacity-60 transition-all">
                            <h2 className="text-[#df5bc7] text-2xl md:text-3xl mb-2 md:mb-3">{project.name}</h2>
                            <div className="flex flex-col md:flex-row md:gap-4 mb-2">
                                <p className="text-gray-200"><strong className='text-purple-200'>Category:</strong> {project.category}</p>
                                <p className="text-gray-200"><strong className='text-purple-200'>Tech Stack:</strong> {project.techStack}</p>
                            </div>
                            <p className="text-gray-300 mb-2">{project.description}</p>
                            <p className="text-gray-300">{project.details}</p>
                            <div className="text-cyan-300 mt-3 flex flex-wrap gap-4">
                                <a href={project.github} className="hover:text-cyan-400 transition-colors">GitHub Link</a>
                                <a href={project.video} className="hover:text-cyan-400 transition-colors">Video Link</a>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}