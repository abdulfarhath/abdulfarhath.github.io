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
        <section id='projects' className="section-spacing">
            <div className="section-container">
                <h1 className="section-title">PROJECTS</h1>
                <ul className="space-y-6">
                    {projects.map((project, index) => (
                        <li key={index} className="card">
                            <h2 className="text-[#df5bc7] text-xl md:text-2xl font-semibold mb-3">{project.name}</h2>
                            <div className="flex flex-col md:flex-row md:gap-6 mb-3 text-sm md:text-base">
                                <p className="text-gray-200"><strong className='text-cyan-400'>Category:</strong> {project.category}</p>
                                <p className="text-gray-200"><strong className='text-cyan-400'>Tech Stack:</strong> {project.techStack}</p>
                            </div>
                            <p className="text-gray-300 mb-2 leading-relaxed">{project.description}</p>
                            <p className="text-gray-400 text-sm leading-relaxed">{project.details}</p>
                            <div className="text-cyan-400 mt-4 flex flex-wrap gap-4 text-sm font-medium">
                                <a href={project.github} className="hover:text-cyan-300 transition-colors">GitHub Link →</a>
                                <a href={project.video} className="hover:text-cyan-300 transition-colors">Video Link →</a>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}