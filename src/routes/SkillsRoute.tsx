export default function SkillsRoute() {
    return (
        <div id="skills" className="h-screen bg-yellow-100 flex flex-col items-center justify-center p-10">
            <h1 className="text-5xl font-bold mb-4">My Skills</h1>
            <p className="text-lg max-w-3xl text-center">
                I am proficient in a variety of tools and technologies that empower me to create impactful solutions:
            </p>
            <div className="grid grid-cols-2 gap-6 mt-6 max-w-3xl text-lg">
                <div>
                    <strong>Frontend:</strong> React.js, Tailwind CSS, HTML, CSS, JavaScript
                </div>
                <div>
                    <strong>Backend:</strong> Node.js, Express.js, MongoDB
                </div>
                <div>
                    <strong>Programming Languages:</strong> Java, Python
                </div>
                <div>
                    <strong>Other Skills:</strong> Git, RESTful APIs, Responsive Design
                </div>
            </div>
        </div>
    );
}
