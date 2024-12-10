export default function ProjectsRoute() {
    return (
        <div id="projects" className="h-screen bg-[#111111] flex flex-col  p-10">
            <h1 className="text-5xl text-yellow-200 font-bold mb-4">Projects</h1>
            <div className="container flex flex-wrap gap-4">
                <div className="frontend   flex flex-col items-center border-2 border-purple-400 w-[20%] h-32 bg-white text-green-300  ">Frontend</div>
                <div className="full-stack flex flex-col items-center border-2 border-purple-400 w-[20%] h-32 bg-white text-green-300   ">Full-Stack</div>
                <div className="flutter    flex flex-col items-center border-2 border-purple-400 w-[20%] h-32 bg-white text-green-300   ">Flutter</div>
                <div className="java       flex flex-col items-center border-2 border-purple-400 w-[20%] h-32 bg-white text-green-300   ">Java</div>
                <div className="c          flex flex-col items-center border-2 border-purple-400 w-[20%] h-32 bg-white text-green-300   ">C</div>
            </div>
        </div>
    );
}
