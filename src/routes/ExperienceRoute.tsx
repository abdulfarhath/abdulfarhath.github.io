export default function ExperienceRoute() {
    return (
        <div className="container flex flex-col justify-center items-center">
            <div id="experience" className="w-[70%] bg-[#111111] flex flex-col p-10">
                <h1 className="text-yellow-200 text-5xl font-bold mb-4">EXPERIENCE</h1>
                
                <h2 className="text-green-200 text-3xl font-bold mb-4 mt-10">Wission Axis</h2>
                <h3 className="text-blue-200 text-xl font-semibold mb-2">Role: Frontend Developer</h3>
                <p className="text-gray-200 text-lg mb-2"><strong>Tech Stack Used:</strong> React, Next.js, Figma</p>
                <ul className="text-gray-200 mt-2 space-y-4 text-lg max-w-2xl list-disc ">
                    <li><strong>Frontend Development:</strong> Developed and implemented interfaces for several web pages using React.js and Tailwind CSS.</li>
                    <li><strong>Design Collaboration:</strong> Collaborated with the design team to ensure seamless integration of UI components using Figma.</li>
                    <li><strong>Backend Integration:</strong> Worked closely with backend developers to connect front-end with APIs.</li>
                    <li><strong>Version Control:</strong> Used Git for version control and team collaboration.</li>
                </ul>
            </div>
        </div>
    );
}
