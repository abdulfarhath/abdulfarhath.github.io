import { FaJs, FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaGithub, FaGit } from 'react-icons/fa';
import { SiTypescript, SiMongodb, SiFirebase, SiFlutter, SiPython, SiC } from 'react-icons/si';
import { FaJava } from 'react-icons/fa';
import { IconCloud } from '../components/SkillsGlobe';

export default function SkillsRoute() {
    return (
        <>
            <div className="w-full container flex flex-row justify-center">
                <div className='w-[70%] flex flex-row justify-center gap-50'>
                    <div id="skills" className=" bg-[#111111] flex flex-col p-10 gap-9">
                        <h1 className="text-5xl font-bold mb-4 text-yellow-200">My Skills</h1>

                        <div className="web-dev flex flex-row items-start gap-9">
                            <h2 className="text-green-200 text-xl">Web Dev :</h2>
                            <div className="skill-icons flex space-x-4">
                                <div className="group relative">
                                    <FaJs className="w-8 h-8 text-yellow-500 hover:scale-125 transition-transform duration-200" />
                                    <span className="absolute bottom-10 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs rounded-md px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200">JavaScript</span>
                                </div>
                                <div className="group relative">
                                    <SiTypescript className="w-8 h-8 text-blue-500 hover:scale-125 transition-transform duration-200" />
                                    <span className="absolute bottom-10 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs rounded-md px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200">TypeScript</span>
                                </div>
                                <div className="group relative">
                                    <FaHtml5 className="w-8 h-8 text-orange-500 hover:scale-125 transition-transform duration-200" />
                                    <span className="absolute bottom-10 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs rounded-md px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200">HTML5</span>
                                </div>
                                <div className="group relative">
                                    <FaCss3Alt className="w-8 h-8 text-blue-500 hover:scale-125 transition-transform duration-200" />
                                    <span className="absolute bottom-10 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs rounded-md px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200">CSS3</span>
                                </div>
                                <div className="group relative">
                                    <FaReact className="w-8 h-8 text-cyan-500 hover:scale-125 transition-transform duration-200" />
                                    <span className="absolute bottom-10 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs rounded-md px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200">React</span>
                                </div>
                                <div className="group relative">
                                    <FaNodeJs className="w-8 h-8 text-green-500 hover:scale-125 transition-transform duration-200" />
                                    <span className="absolute bottom-10 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs rounded-md px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200">Node.js</span>
                                </div>
                                <div className="group relative">
                                    <SiMongodb className="w-8 h-8 text-green-500 hover:scale-125 transition-transform duration-200" />
                                    <span className="absolute bottom-10 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs rounded-md px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200">MongoDB</span>
                                </div>
                                <div className="group relative">
                                    <SiFirebase className="w-8 h-8 text-yellow-500 hover:scale-125 transition-transform duration-200" />
                                    <span className="absolute bottom-10 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs rounded-md px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200">Firebase</span>
                                </div>
                            </div>
                        </div>

                        <div className="flutter flex flex-row items-center gap-9">
                            <h1 className="text-green-200 text-xl">App Dev :</h1>
                            <div className="skill-icons flex space-x-4">
                                <div className="group relative">
                                    <SiFlutter className="w-8 h-8 text-blue-500 hover:scale-125 transition-transform duration-200" />
                                    <span className="absolute bottom-10 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs rounded-md px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200">Flutter</span>
                                </div>
                            </div>
                        </div>

                        <div className="others flex flex-row items-center gap-12">
                            <h1 className="text-green-200 text-xl">Others :</h1>
                            <div className="skill-icons flex space-x-4">
                                <div className="group relative">
                                    <FaJava className="w-8 h-8 text-red-500 hover:scale-125 transition-transform duration-200" />
                                    <span className="absolute bottom-10 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs rounded-md px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200">Java</span>
                                </div>
                                <div className="group relative">
                                    <SiC className="w-8 h-8 text-blue-500 hover:scale-125 transition-transform duration-200" />
                                    <span className="absolute bottom-10 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs rounded-md px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200">C</span>
                                </div>
                                <div className="group relative">
                                    <SiPython className="w-8 h-8 text-yellow-500 hover:scale-125 transition-transform duration-200" />
                                    <span className="absolute bottom-10 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs rounded-md px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200">Python</span>
                                </div>
                            </div>
                        </div>

                        <div className="tools flex flex-row items-center gap-16">
                            <h1 className="text-green-200 text-xl">Tools :</h1>
                            <div className="skill-icons flex space-x-4">
                                <div className="group relative">
                                    <FaGithub className="w-8 h-8 text-white hover:scale-125 transition-transform duration-200" />
                                    <span className="absolute bottom-10 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs rounded-md px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200">GitHub</span>
                                </div>
                                <div className="group relative">
                                    <FaGit className="w-8 h-8 text-orange-500 hover:scale-125 transition-transform duration-200" />
                                    <span className="absolute bottom-10 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs rounded-md px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200">Git</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="right w-80 mt-10">
                    <IconCloud iconSlugs={['javascript', 'typescript', 'html5', 'css3', 'react', 'express', 'mongodb', 'firebase', 'java', 'github', 'git', 'flutter', 'python', 'c', 'sql', 'nodejs']}></IconCloud>
                </div>
            </div>
        </>
    );
}
