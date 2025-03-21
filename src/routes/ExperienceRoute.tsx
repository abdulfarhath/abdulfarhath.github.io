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
                    <li><strong>Frontend Development:</strong> Creating dynamic and interactive UIs with React.js and Tailwind CSS.</li>
                    <li><strong>Backend Development:</strong> Developing robust APIs using Node.js and Express.js.</li>
                    <li><strong>Team Collaboration:</strong> Working with cross-functional teams to deliver quality software solutions.</li>
                </ul>
            </div>
        </div>
    );
}
