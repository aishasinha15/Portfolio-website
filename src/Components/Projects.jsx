

import React , {useRef} from 'react';
import { PROJECTS } from '../constants';
import { animate, delay, motion,useInView } from "framer-motion";


const Projects = () => {
  return (
    <section id="projects" className='border-b border-neutral-900 pb-4'>
      <motion.h2 
       whileInView={{opacity:1,y:0}}
       initial={{opacity:0,y:-100}}
       transition={{duration:1.5}}
       className='heading'>Projects</motion.h2>
      <div>
        {PROJECTS.map((project, index) => (
          <div key={index} className="mb-12 flex flex-wrap lg:justify-center"> {/* Increased margin-bottom for individual projects */}
            <motion.div 
            whileInView={{opacity:1,x:0}}
            initial={{opacity:0,x:-100}}
            transition={{duration:0.5}}
            className='w-full lg:w-1/4 flex justify-center'> {/* Center image */}
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <img 
                src={project.image} 
                width={200} // Set width to 200
                height={200} // Set height to 200
                alt={project.title} 
                className='mb-6 rounded border-2 border-cyan-50'
              />
              </a>
            </motion.div>
            
            <motion.div 
            whileInView={{opacity:1,x:0}}
            initial={{opacity:0,x:100}}
            transition={{duration:0.5}}
            className='w-full max-w-xl lg:w-3/4'>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <h6 className='mb-2 font-semibold text-cyan-200'>{project.title}</h6>
            </a>
              <p className='mb-4 text-neutral-400'>{project.description}</p>
              {project.technologies.map((tech, index) => (
                <span key={index} className='mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-cyan-700'>
                  {tech}
                </span>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;

