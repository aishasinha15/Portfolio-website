


import React from 'react';
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { animate, motion } from "framer-motion"

const Contact = () => {
  return (
    <section id="contact" className="border-b border-neutral-900 pb-24">
      <motion.h2 
       whileInView={{opacity:1,y:0}}
       initial={{opacity:0,y:-100}}
       transition={{duration:1.5}}
      className="my-20 text-center text-4xl heading shadow-md">Get in Touch</motion.h2>
      <motion.div 
        whileInView={{opacity:1,x:0}}
        initial={{opacity:0,x:-100}}
        transition={{duration:1.5}}
      className="flex justify-center gap-8">
        <button 
          className="flex items-center justify-center rounded-full border-4 border-neutral-800 p-4 transition-transform duration-300 hover:scale-110 hover:bg-blue-600 hover:text-white"
          onClick={() => window.open('https://www.linkedin.com/in/aisha-sinha-931740265/', '_blank')}
        >
          <FaLinkedin className="text-4xl" />
        </button>
        <button 
          className="flex items-center justify-center rounded-full border-4 border-neutral-800 p-4 transition-transform duration-300 hover:scale-110 hover:bg-gray-800 hover:text-white"
          onClick={() => window.open('https://github.com/aishasinha15', '_blank')}
        >
          <FaGithub className="text-4xl" />
        </button>
        <button 
          className="flex items-center justify-center rounded-full border-4 border-neutral-800 p-4 transition-transform duration-300 hover:scale-110 hover:bg-red-500 hover:text-white"
          onClick={() => window.open('mailto:aishasinha316@gmail.com')}
        >
          <IoMdMail className="text-4xl" />
        </button>
      </motion.div>
    </section>
  );
};

export default Contact;
