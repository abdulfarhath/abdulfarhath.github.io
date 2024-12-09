import { FaGithub, FaDiscord, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { IoPeople } from 'react-icons/io5';
import farhathImage from '../assets/farhath.jpeg';
import buzz from '../assets/buzzz.png';

export default function HomeRoute() {
  return (
    <>
      <div
        id="home"
        className="p-20 bg-[#111111] flex flex-row gap-32 items-center justify-center "
      >
        <div className="left">
          <h1 className="text-8xl font-bold mb-9 text-yellow-200">Farhath</h1>
          <div className="taglines flex flex-col gap-5">
            <h2 className="text-3xl text-green-300">MERN stack Web Developer</h2>
            <h2 className="text-3xl text-green-300">Flutter App Developer</h2>
            <h2 className="text-3xl text-green-300">Blockchain Enthusiast</h2>
            <h2 className="text-3xl text-green-300">Java + DSA Learner</h2>
          </div>
          <div className="socials flex p-4 pl-0 gap-5 mt-5">
            <a href="https://github.com/abdulfarhath" target="_blank" rel="noopener noreferrer">
              <FaGithub className="text-3xl text-white hover:text-yellow-200" />
            </a>
            <a href="https://linkedin.com/in/your-linkedin-id" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-3xl text-white hover:text-yellow-200" />
            </a>
            <a href="mailto:abdulfarhathmohd@gmail.com">
              <FaEnvelope className="text-3xl text-white hover:text-yellow-200" />
            </a>
            <a href="#footer">
              <IoPeople className="text-3xl text-white hover:text-yellow-200" />
            </a>
            <div className="button">
              <a href="" className='mt-5 px-2 py-2 ml-6 animate-pulse bg-yellow-200 text-black font-bold rounded-lg hover:bg-yellow-300' >
                Check Resume
              </a>
            </div>
          </div>
        </div>
        <div className="right">
          <img
            src={farhathImage}
            alt="Farhath's Image"
            width={350}
            height={450}
            className="rounded-3xl"
          />
        </div>
      </div>
      <div className="about flex flex-row ">
        <div className="profile flex flex-row  ">
          <img src={buzz} alt="animated image" width={200} className=' rounded-3xl ' />
          <div className="profiles">
            <a href="https://www.hackerrank.com/your-hackerrank-id" target="_blank" rel="noopener noreferrer">
              <img src="https://cdn.worldvectorlogo.com/logos/hackerrank.svg" alt="HackerRank" width={40} height={40} className="hover:opacity-75" />
            </a>
            <a href="https://leetcode.com/your-leetcode-id" target="_blank" rel="noopener noreferrer">
              <img src="https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png" alt="LeetCode" width={40} height={40} className="hover:opacity-75" />
            </a>
          </div>
        </div>
        <div className="about-txt">
          <h1 className="text-6xl text-yellow-200">About Me</h1>
          <p className="text-xl text-green-300">
            I am a MERN stack web developer, Flutter app developer, Blockchain enthusiast, and Java
            + DSA learner. I love to build things that make a difference. I am a passionate learner
            and a team player. I love to work on projects that challenge me and help me grow.
          </p>
        </div>
      </div>
    </>
  );
}
