
import React from 'react';
import { SiLeetcode } from "react-icons/si";
import { FaHackerrank } from "react-icons/fa";
import { SiCodechef } from "react-icons/si";
import { FaSquareGithub } from "react-icons/fa6";
import { SiCodeforces } from "react-icons/si";
import { animate, motion } from "framer-motion";


const iconVariants = (duration) => ({
  intial:{y:-10},
  animate:{
      y:[10,-10],
      transition:{
          duration: duration, 
          ease:"linear",
          repeat: Infinity,
          repeatType: "reverse",
      }
  }
})



const CodingProfiles = () => {
  return (
    <section id='coding' className='border-b border-neutral-800 pb-24'>
      <motion.h2 
       whileInView={{opacity:1,y:0}}
       initial={{opacity:0,y:-100}}
       transition={{duration:1.5}}
      className='heading'>Coding Profiles</motion.h2>
      <motion.div 
       whileInView={{opacity:1,x:0}}
       initial={{opacity:0,x:-100}}
       transition={{duration:1.5}}
      className='flex flex-wrap items-center justify-center gap-6'> {/* Increased gap for better spacing */}
        
        {/* LeetCode */}
        <motion.a 
         variants={iconVariants(3.5)}
         initial="initial"
         animate="animate"
        href="https://leetcode.com/u/aishasinha316/" target="_blank" rel="noopener noreferrer" className='flex flex-col items-center rounded-2xl border-4 border-neutral-800 p-4 transition-transform transform hover:scale-110'>
          <SiLeetcode className="text-7xl" />
          <span className='mt-2 text-sm'>LeetCode</span>
        </motion.a>

        {/* GitHub */}
        <motion.a 
         variants={iconVariants(5)}
         initial="initial"
         animate="animate"
        href="https://github.com/aishasinha15" target="_blank" rel="noopener noreferrer" className='flex flex-col items-center rounded-2xl border-4 border-neutral-800 p-4 transition-transform transform hover:scale-110'>
          <FaSquareGithub className='text-7xl' />
          <span className='mt-2 text-sm'>GitHub</span>
        </motion.a>

        {/* HackerRank */}
        <motion.a 
         variants={iconVariants(7)}
         initial="initial"
         animate="animate"
        href="https://www.hackerrank.com/profile/aishasinha316" target="_blank" rel="noopener noreferrer" className='flex flex-col items-center rounded-2xl border-4 border-neutral-800 p-4 transition-transform transform hover:scale-110'>
          <FaHackerrank className='text-7xl' />
          <span className='mt-2 text-sm'>HackerRank</span>
        </motion.a>

        {/* CodeChef */}
        <motion.a 
         variants={iconVariants(5.5)}
         initial="initial"
         animate="animate"
        href="https://www.codechef.com/users/aishasinha316" target="_blank" rel="noopener noreferrer" className='flex flex-col items-center rounded-2xl border-4 border-neutral-800 p-4 transition-transform transform hover:scale-110'>
          <SiCodechef className='text-7xl' />
          <span className='mt-2 text-sm'>CodeChef</span>
        </motion.a>

        {/* Codeforces */}
        <motion.a 
         variants={iconVariants(2.5)}
         initial="initial"
         animate="animate"
        href="https://codeforces.com/profile/aishasinha316" target="_blank" rel="noopener noreferrer" className='flex flex-col items-center rounded-2xl border-4 border-neutral-800 p-4 transition-transform transform hover:scale-110'>
          <SiCodeforces className='text-7xl' />
          <span className='mt-2 text-sm'>Codeforces</span>
        </motion.a>
        
      </motion.div>
    </section>
  );
}

export default CodingProfiles;
