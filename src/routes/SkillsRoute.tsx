import { FaJs, FaHtml5, FaCss3Alt, FaReact, FaNodeJs } from 'react-icons/fa';
import { SiTypescript, SiMongodb, SiFirebase, SiFlutter, SiPython, SiC } from 'react-icons/si';
import { FaJava } from 'react-icons/fa';
import { IconCloud } from '../components/SkillsGlobe';


export default function SkillsRoute() {
    return (
        <>
            <div id="skills" className="bg-[#111111] flex flex-col p-10 gap-9">
                <h1 className="text-5xl font-bold mb-4 text-yellow-200 ">My Skills</h1>


                <div className="web-dev flex flex-row items-center gap-9  ">
                    <h2 className=" text-green-200 text-xl " >Web Dev :</h2>

                    <div className="skill-icons flex space-x-4">
                        <FaJs className="w-8 h-8 text-yellow-500" />
                        <SiTypescript className="w-8 h-8 text-blue-500" />
                        <FaHtml5 className="w-8 h-8 text-orange-500" />
                        <FaCss3Alt className="w-8 h-8 text-blue-500" />
                        <FaReact className="w-8 h-8 text-cyan-500" />
                        <FaNodeJs className="w-8 h-8 text-green-500" />
                        <SiMongodb className="w-8 h-8 text-green-500" />
                        <SiFirebase className="w-8 h-8 text-yellow-500" />
                    </div>

                    <div className="flutter flex flex-row items-center gap-9  ">
                        <h1 className=" text-green-200 text-xl ">App Dev : </h1>
                        <div className="skill-icons flex space-x-4">
                            <SiFlutter className="w-8 h-8 text-blue-500" />
                        </div>
                    </div>
                    <div className="others flex flex-row items-center gap-12  ">
                        <h1 className=" text-green-200 text-xl ">Others : </h1>
                        <div className="skill-icons flex space-x-4">
                            <FaJava className="w-8 h-8 text-red-500" />
                            <SiC className="w-8 h-8 text-blue-500" />
                            <SiPython className="w-8 h-8 text-yellow-500" />
                        </div>
                    </div>
                    <div className="tools  flex flex-row items-center  ">
                        <h1 className=" text-green-200 text-xl "> Tools : </h1>
                    </div>
                    <IconCloud iconSlugs={['javascript', 'typescript', 'html5', 'css3', 'react', 'express', 'mongodb', 'firebase', 'java', 'github', 'git', 'flutter', 'python', 'c', 'sql', 'nodejs',]}></IconCloud>
                </div>
            </div>
        </>
    );
}
