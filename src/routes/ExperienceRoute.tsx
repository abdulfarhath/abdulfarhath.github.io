import React from 'react';

export default function ExperienceRoute() {
    const experiences = [
        {
            company: "Wission Axis",
            role: "Frontend Developer",
            techStack: "React, Next.js, Figma",
            description: "Developed and implemented interfaces for several web pages using React.js and Tailwind CSS.",
            details: "Collaborated with design team on UI components and worked with backend developers for API integration. Used Git for version control and team collaboration."
        }
        // You can add more experiences here following the same structure
    ];

    return (
        <div className="container flex flex-col justify-center items-center w-full">
            <div id="experience" className="w-full md:w-[80%] lg:w-[65%] flex flex-col mt-20 px-4 md:px-6 lg:px-0">
                <h1 className="text-cyan-500 text-3xl md:text-4xl lg:text-5xl font-bold mb-6 md:mb-10">EXPERIENCE</h1>
                
                {experiences.map((experience, index) => (
                    <div key={index} className="mb-8 p-4 bg-gray-900 bg-opacity-40 rounded-lg hover:bg-opacity-60 transition-all">
                        <h2 className="text-[#df5bc7] text-2xl md:text-3xl mb-2 md:mb-3">{experience.company}</h2>
                        <div className="flex flex-col md:flex-row md:gap-4 mb-2">
                            <p className="text-gray-200"><strong className='text-purple-200'>Role:</strong> {experience.role}</p>
                            <p className="text-gray-200"><strong className='text-purple-200'>Tech Stack:</strong> {experience.techStack}</p>
                        </div>
                        <p className="text-gray-300 mb-2">{experience.description}</p>
                        <p className="text-gray-300">{experience.details}</p>

                        {/* If you want to keep the bullet points from your original design */}
                        <ul className="text-gray-300 mt-4 space-y-2 list-disc pl-5">
                            <li><strong>Frontend Development:</strong> Developed and implemented interfaces for several web pages using React.js and Tailwind CSS.</li>
                            <li><strong>Design Collaboration:</strong> Collaborated with the design team to ensure seamless integration of UI components using Figma.</li>
                            <li><strong>Backend Integration:</strong> Worked closely with backend developers to connect front-end with APIs.</li>
                            <li><strong>Version Control:</strong> Used Git for version control and team collaboration.</li>
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
}