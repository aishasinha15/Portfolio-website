

import React from 'react';
import { motion } from "framer-motion"

const Hero = () => {
  return (
    <section id="hero" className="flex items-start justify-center min-h-[calc(100vh-64px)] border-b border-neutral-900 pt-36">
      <div className="flex flex-wrap justify-between items-center w-full max-w-7xl px-4">
        <div className="w-full lg:w-2/5 flex flex-col items-start justify-center">
          <motion.h1 
          initial={{x:-100, opacity:0}}
          animate={{x:0, opacity:1}}
          transition={{duration:0.5,delay:0.5}}
          className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-transparent pb-4 text-5xl font-hairline tracking-tight lg:text-7xl lg:font-thin lg:tracking-tight">
            Aisha Sinha
          </motion.h1>
        </div>
        <div className="w-full lg:w-1/2 mt-8 lg:mt-0">
          <div className="font-light tracking-wide leading-10">
            <motion.p 
              initial={{x:100, opacity:0}}
              animate={{x:0, opacity:1}}
              transition={{duration:0.5,delay:1}}
            className='text-lg tracking-wide'>
              I am a dedicated 4th-year BTech student with a passion for leveraging technology to solve real-world problems. I have a strong foundation in data structures and algorithms, having tackled numerous challenges on coding platforms like LeetCode, CodeChef, HackerRank, GeeksForGeeks, CodingNinjas, etc. I am currently exploring the MERN stack to develop web applications that enhance user experiences and drive impactful solutions. I am eager to contribute to innovative projects and collaborate with teams that share my commitment to excellence.
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;