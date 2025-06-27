import { FaGithub, FaDiscord, FaLinkedin, FaEnvelope, FaFileAlt } from 'react-icons/fa';
import { IoPeople } from 'react-icons/io5';
import farhathImage from '../assets/farhath.jpeg';
import buzz from '../assets/buzzz.png';
import '../styles/styles.css'

export default function HomeRoute() {
  return (
    <>
      <div
        id="home"
        className="mt-36 md:mt-28 lg:mt-36 flex flex-col items-center justify-center px-4 md:px-8"
      >
        {/* Main content area */}
        <div className="flex flex-col lg:flex-row gap-10 md:gap-16 items-center justify-center w-full">
          {/* Left content area - visible on large screens only */}
          <div className="left text-center lg:text-left hidden lg:block">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-2 text-cyan-500">ABDUL FARHATH</h1>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-cyan-500">MOHAMMAD</h1>
            
            <div className="taglines flex flex-col gap-2 lg:gap-3">
              <h2 className="text-xl md:text-2xl text-gray-300">MERN STACK WEB DEVELOPER</h2>
              <h2 className="text-xl md:text-2xl text-gray-300">JAVA + DSA</h2>
            </div>
            
            {/* Social links for large screens */}
            <div className="socials flex flex-wrap justify-center lg:justify-start gap-4 mt-5">
              <a href="https://github.com/abdulfarhath" target="_blank" rel="noopener noreferrer" 
                className="bg-gray-800 p-3 rounded-md hover:bg-gray-700 transition-colors duration-300">
                <FaGithub className="text-xl text-white" />
              </a>
              <a href="https://linkedin.com/in/abdulfarhath" target="_blank" rel="noopener noreferrer"
                className="bg-gray-800 p-3 rounded-md hover:bg-gray-700 transition-colors duration-300">
                <FaLinkedin className="text-xl text-white" />
              </a>
              <a href="mailto:abdulfarhathmohd@gmail.com"
                className="bg-gray-800 p-3 rounded-md hover:bg-gray-700 transition-colors duration-300">
                <FaEnvelope className="text-xl text-white" />
              </a>
              <a href="#footer" className="bg-gray-800 p-3 rounded-md hover:bg-gray-700 transition-colors duration-300">
                <IoPeople className="text-xl text-white" />
              </a>
              <a 
                href="https://drive.google.com/file/d/1MQxqNAO64Wz0_PMRWN2uytlku5Z4j5cy/view?usp=sharing" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-cyan-600 hover:bg-cyan-700 text-white px-4 py-2 rounded-md transition-colors duration-300"
              >
                <FaFileAlt /> Resume
              </a>
            </div>
          </div>
          
          {/* Left content area - visible on small/medium screens only */}
          <div className="left text-center lg:hidden">
            <h1 className="text-4xl md:text-5xl font-bold mb-2 text-cyan-500">ABDUL FARHATH</h1>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-cyan-500">MOHAMMAD</h1>
            
            <div className="taglines flex flex-col gap-2">
              <h2 className="text-xl md:text-2xl text-gray-300">MERN STACK WEB DEVELOPER</h2>
              <h2 className="text-xl md:text-2xl text-gray-300">JAVA + DSA</h2>
            </div>
          </div>

          {/* Image area */}
          <div className="right flex justify-center">
            <div className="relative">
              <img
                src={farhathImage}
                alt="Farhath's Image"
                className="rounded-xl border-5 border-cyan-500/20 shadow-lg shadow-cyan-500/20 w-48 md:w-56 lg:w-64 z-10 relative"
              />
            </div>
          </div>
        </div>

        {/* Social links for small/medium screens - will appear below image */}
        <div className="socials flex flex-wrap justify-center gap-6 mt-8 lg:hidden">
          <a href="https://github.com/abdulfarhath" target="_blank" rel="noopener noreferrer" 
            className="bg-gray-800 p-3 rounded-md hover:bg-gray-700 transition-colors duration-300">
            <FaGithub className="text-xl text-white" />
          </a>
          <a href="https://linkedin.com/in/abdulfarhath" target="_blank" rel="noopener noreferrer"
            className="bg-gray-800 p-3 rounded-md hover:bg-gray-700 transition-colors duration-300">
            <FaLinkedin className="text-xl text-white" />
          </a>
          <a href="mailto:abdulfarhathmohd@gmail.com"
            className="bg-gray-800 p-3 rounded-md hover:bg-gray-700 transition-colors duration-300">
            <FaEnvelope className="text-xl text-white" />
          </a>
          <a href="#footer" className="bg-gray-800 p-3 rounded-md hover:bg-gray-700 transition-colors duration-300">
            <IoPeople className="text-xl text-white" />
          </a>
          <a 
            href="/resume.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-cyan-600 hover:bg-cyan-700 text-white px-4 py-2 rounded-md transition-colors duration-300"
          >
            <FaFileAlt /> Resume
          </a>
        </div>
      </div>

      {/* about */}
      <div className="about flex flex-col md:flex-row items-center justify-center gap-8 p-4 md:p-8 mt-16 bg-gray-900 bg-opacity-40 rounded-lg border border-gray-800 max-w-4xl mx-auto">
        {/* profile and links */}
        <div className="flex flex-col md:flex-row gap-6 items-center">
          <div className="p-1 bg-gradient-to-br from-cyan-500/30 to-purple-500/30 rounded-xl">
            <img 
              src={buzz} 
              alt="animated character" 
              className="w-36 md:w-40 rounded-lg" 
            />
          </div>
          
          <div className='flex flex-col items-center md:items-start'>
            <h2 className='text-white font-bold text-xl mb-3'>@abdul_farhath</h2>
            <div className="profiles flex gap-4">
              <a href="https://www.hackerrank.com/abdulfarhathmohd" target="_blank" rel="noopener noreferrer"
                className="bg-gray-800 p-2 rounded-md hover:bg-gray-700 transition-colors duration-300">
                <img src="https://cdn.worldvectorlogo.com/logos/hackerrank.svg" alt="HackerRank" className="w-6" />
              </a>
              <a href="https://leetcode.com/abdulfarhath" target="_blank" rel="noopener noreferrer"
                className="bg-gray-800 p-2 rounded-md hover:bg-gray-700 transition-colors duration-300">
                <img src="https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png" alt="LeetCode" className="w-6" />
              </a>
            </div>
          </div>
        </div>

        {/* about me text */}
        <div className="about-txt md:w-2/3 mt-6 md:mt-0 text-center md:text-left">
          <h1 className="text-xl md:text-2xl text-cyan-400 mb-3 pb-2 border-b border-gray-700">About Me</h1>
          <p className="text-base md:text-lg text-gray-300">
            I am a MERN stack web developer, Flutter app developer, Blockchain enthusiast, and Java
            + DSA learner. I love to build things that make a difference. I am a passionate learner
            and a team player. I love to work on projects that challenge me and help me grow.
          </p>
        </div>
      </div>
    </>
  );
}
