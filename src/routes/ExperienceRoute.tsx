export default function ExperienceRoute() {
    const experiences = [
        {
            company: "Wission Axis",
            role: "Frontend Developer",
            techStack: "React, Next.js, Figma",
            description: "Developed and implemented interfaces for several web pages using React.js and Tailwind CSS.",
            details: "Collaborated with design team on UI components and worked with backend developers for API integration. Used Git for version control and team collaboration.",
            highlights: [
                { title: "Frontend Development", text: "Developed and implemented interfaces for several web pages using React.js and Tailwind CSS." },
                { title: "Design Collaboration", text: "Collaborated with the design team to ensure seamless integration of UI components using Figma." },
                { title: "Backend Integration", text: "Worked closely with backend developers to connect front-end with APIs." },
                { title: "Version Control", text: "Used Git for version control and team collaboration." }
            ]
        }
    ];

    return (
        <section id="experience" className="section-spacing">
            <div className="section-container">
                <h1 className="section-title">EXPERIENCE</h1>

                {experiences.map((experience, index) => (
                    <div key={index} className="card">
                        <h2 className="text-[#df5bc7] text-xl md:text-2xl font-semibold mb-3">{experience.company}</h2>
                        <div className="flex flex-col md:flex-row md:gap-6 mb-3 text-sm md:text-base">
                            <p className="text-gray-200"><strong className='text-cyan-400'>Role:</strong> {experience.role}</p>
                            <p className="text-gray-200"><strong className='text-cyan-400'>Tech Stack:</strong> {experience.techStack}</p>
                        </div>
                        <p className="text-gray-300 mb-2 leading-relaxed">{experience.description}</p>
                        <p className="text-gray-400 text-sm mb-4">{experience.details}</p>

                        <ul className="text-gray-300 space-y-2 text-sm">
                            {experience.highlights.map((highlight, i) => (
                                <li key={i} className="flex items-start gap-2">
                                    <span className="text-cyan-500 mt-1">•</span>
                                    <span><strong className="text-gray-200">{highlight.title}:</strong> {highlight.text}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    );
}