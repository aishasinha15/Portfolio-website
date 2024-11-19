import React from 'react'
import { IoLogoHtml5 } from "react-icons/io5";
import { FaCss3 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaNode } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { SiRedux } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import { animate, motion } from "framer-motion"

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


const Technologies = () => {
  return (
    <section id='tech' className='border-b border-neutral-800 pb-24 mt-[-240px]'>
        <motion.h2 
         whileInView={{opacity:1,y:0}}
         initial={{opacity:0,y:-100}}
         transition={{duration:1.5}}
        className='heading'>Technologies</motion.h2>
            <motion.div 
            whileInView={{opacity:1,x:0}}
            initial={{opacity:0,x:-100}}
            transition={{duration:1.5}}
            className='flex flex-wrap items-center justify-center gap-4'>

                <motion.div 
                variants={iconVariants(2.5)}
                initial="initial"
                animate="animate"
                className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <IoLogoHtml5 className="text-7xl text-[#E44D27]" />
                </motion.div>

                <motion.div
                variants={iconVariants(4)}
                initial="initial"
                animate="animate" 
                className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <FaCss3 className='text-7xl text-[#264DE3]'/>
                </motion.div>

                <motion.div
                 variants={iconVariants(7.5)}
                 initial="initial"
                 animate="animate" 
                className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <IoLogoJavascript className='text-7xl text-[#F7E017]'/>
                </motion.div>

                <motion.div 
                 variants={iconVariants(5)}
                 initial="initial"
                 animate="animate"
                className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <RiTailwindCssFill className='text-7xl text-[#15BECB]'/>
                </motion.div>

                <motion.div 
                 variants={iconVariants(4.5)}
                 initial="initial"
                 animate="animate"
                className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <FaNode className='text-7xl text-[#8AC402]'/>
                </motion.div>

                <motion.div 
                 variants={iconVariants(8)}
                 initial="initial"
                 animate="animate"
                 className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <FaReact className='text-7xl text-[#57C4DC]'/>
                </motion.div>

                <motion.div 
                 variants={iconVariants(2.5)}
                 initial="initial"
                 animate="animate"
                className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <SiMongodb className='text-7xl text-[#5EAF4F]'/>
                </motion.div>

                <motion.div 
                 variants={iconVariants(6)}
                 initial="initial"
                 animate="animate"
                className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <SiRedux className='text-7xl text-[#764ABC]'/>
                </motion.div>

                <motion.div 
                 variants={iconVariants(3)}
                 initial="initial"
                 animate="animate"
                className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <FaGitAlt className='text-7xl text-[#F05033]'/>
                </motion.div>


            </motion.div>
    </section>
    
  )
}

export default Technologies

