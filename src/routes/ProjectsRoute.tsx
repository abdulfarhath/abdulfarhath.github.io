export default function ProjectsRoute() {
    return (
        <div id="projects" className="h-screen bg-blue-100 flex flex-col items-center justify-center p-10">
            <h1 className="text-5xl font-bold mb-4">Projects</h1>
            <p className="text-lg max-w-3xl text-center">
                Here are some of the exciting projects I have worked on:
            </p>
            <div className="mt-6 space-y-6 text-lg max-w-3xl">
                <div>
                    <h2 className="text-xl font-semibold">Project 1: E-Commerce Platform</h2>
                    <p>
                        Built a full-stack e-commerce platform with product listing, cart functionality, and user authentication.
                    </p>
                </div>
                <div>
                    <h2 className="text-xl font-semibold">Project 2: Portfolio Website</h2>
                    <p>
                        Developed a responsive portfolio website showcasing my skills, projects, and achievements.
                    </p>
                </div>
                <div>
                    <h2 className="text-xl font-semibold">Project 3: Chat Application</h2>
                    <p>
                        Designed a real-time chat application using WebSocket for seamless communication.
                    </p>
                </div>
            </div>
        </div>
    );
}
