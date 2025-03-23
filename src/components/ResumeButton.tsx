import { motion } from "framer-motion";

const ResumeButton = () => {
  return (
    <motion.a
      href="https://drive.google.com/file/d/16fPKguepTfgBesv_s5b2cwDv9FxgGoDf/view?usp=sharing"
      className="px-4 py-1 ml-6 bg-yellow-200 text-black font-bold rounded-full hover:bg-yellow-300 inline-block"
      animate={{
        rotate: [0, -12, 12, -12, 12, -12, 0], // Bigger tilt
        y: [0, -2, -2, -2, -2, -2, 0],
      }}
      transition={{
        duration: 0.1,            // Much faster, shakes finish in 0.6 sec
        repeat: Infinity,
        repeatDelay: 2.4,        // Total cycle = 0.6 + 2.4 = 3 sec
        ease: "linear"           // Fast and not smooth
      }}
    >
      Resume
    </motion.a>
  );
};

export default ResumeButton;
