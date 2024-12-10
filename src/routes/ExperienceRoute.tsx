export default function ExperienceRoute() {
    return (
        <div id="experience" className="h-screen bg-[#111111] flex flex-col items-center justify-center p-10">
            <h1 className="text-5xl font-bold mb-4">My Experience</h1>
            <p className="text-lg max-w-3xl text-center">
                I have worked with various organizations, contributing to impactful projects and gaining hands-on experience in:
            </p>
            <ul className="mt-6 space-y-4 text-lg max-w-2xl list-disc">
                <li><strong>Frontend Development:</strong> Creating dynamic and interactive UIs with React.js and Tailwind CSS.</li>
                <li><strong>Backend Development:</strong> Developing robust APIs using Node.js and Express.js.</li>
                <li><strong>Team Collaboration:</strong> Working with cross-functional teams to deliver quality software solutions.</li>
            </ul>
        </div>
    );
}
