import { FaGithub, FaDiscord, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { IoPeople } from 'react-icons/io5';
import farhathImage from '../assets/farhath.jpeg';
import buzz from '../assets/buzzz.png';
// import HyperText from "@/components/magicui/hyper-text";

export default function HomeRoute() {
  return (
    <>
      <div
        id="home"
        className="p-20 bg-[#111111] flex flex-row gap-52 items-center justify-center "
      >
        <div className="left">
          <h1 className="text-8xl font-bold mb-9 text-yellow-200">Abdul Farhath</h1>
          {/* <HyperText
            className="text-8xl font-bold text-yellow-200 dark:text-white"
            text="Farhath"
          /> */}
          <div className="taglines flex flex-col gap-5">
            <h2 className="text-3xl text-green-300">MERN stack Web Developer</h2>
            {/* <h2 className="text-3xl text-green-300">Flutter App Developer</h2> */}
            {/* <h2 className="text-3xl text-green-300">Blockchain Enthusiast</h2> */}
            <h2 className="text-3xl text-green-300">Java + DSA Learner</h2>
          </div>
          <div className="socials flex p-4 pl-0 gap-5 mt-5">
            <a href="https://github.com/abdulfarhath" target="_blank" rel="noopener noreferrer">
              <FaGithub className="text-3xl text-white hover:text-yellow-200" />
            </a>
            <a href="https://linkedin.com/in/abdulfarhath" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-3xl text-white hover:text-yellow-200" />
            </a>
            <a href="mailto:abdulfarhathmohd@gmail.com">
              <FaEnvelope className="text-3xl text-white hover:text-yellow-200" />
            </a>
            <a href="#footer" className='scroll-smooth'>
              <IoPeople className="text-3xl text-white hover:text-yellow-200" />
            </a>

            <div className="button">
              <a href="https://drive.google.com/file/d/16fPKguepTfgBesv_s5b2cwDv9FxgGoDf/view?usp=sharing" className='mt-5 px-2 py-2 ml-6 animate-pulse bg-yellow-200 text-black font-bold rounded-lg hover:bg-yellow-300' >
                Resume
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


      {/* about */}
      <div className="about flex flex-row items-center justify-center gap-10 p-8 ">

        {/* image  */}
        <div className="profile flex flex-row gap-5 ">
          <img src={buzz} alt="animated image" width={160} className=' rounded-3xl ' />
          {/* profile and links  */}
          <div className='flex flex-col items-start mt-5 ' >
            <h2 className='text-white font-bold' >@abdul_farhath</h2>
            <div className="profiles flex flex-row gap-5">
              <a href="https://www.hackerrank.com/abdulfarhathmohd" target="_blank" rel="noopener noreferrer">
                <img src="https://cdn.worldvectorlogo.com/logos/hackerrank.svg" alt="HackerRank" width={40} height={40} className="hover:opacity-75" />
              </a>
              <a href="https://leetcode.com/abdulfarhath" target="_blank" rel="noopener noreferrer">
                <img src="https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png" alt="LeetCode" width={40} height={40} className="hover:opacity-75" />
              </a>
            </div>
          </div>
        </div>

        {/* about me text ? */}
        <div className="about-txt w-[45%]">
          <h1 className="text-2xl text-yellow-200">About Me</h1>
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
