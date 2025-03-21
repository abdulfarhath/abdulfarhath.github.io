export default function ExperienceRoute() {
    return (
        <div className="container flex flex-col justify-center items-center">
            <div id="experience" className="w-[70%] bg-[#111111] flex flex-col  p-10">
                <h1 className="text-yellow-200 text-5xl font-bold mb-4">My Experience</h1>
                <h2 className="text-green-200 text-3xl font-bold mb-4 mt-10" >Wission Axis</h2>
                <p className="text-yellow-200 text-lg max-w-3xl text-center">
                    I have worked with various organizations, contributing to impactful projects and gaining hands-on experience in:
                </p>
                <ul className="text-yellow-200 mt-6 space-y-4 text-lg max-w-2xl list-disc">
                    <li><strong>Frontend Development:</strong> Developed and implemented interfaces for several web pages using React.js and Tailwind CSS.</li>
                    <li><strong>Design Collaboration:</strong> Collaborated with the design team to ensure seamless integration of UI components.</li>
                    <li><strong>Backend Integration:</strong> Worked closely with backend developers to connect front-end with APIs.</li>
                    <li><strong>Version Control:</strong> Used Git for version control and team collaboration.</li>
                </ul>
            </div>
        </div>
    );
}
