// next image
import Image  from "next/image";

//components

import ParticlesContainer from "../components/ParticlesContainer";
import ProjectsBtn from "../components/ProjectsBtn";
import Avatar from "../components/Avatar";

//framer motion
import { motion } from 'framer-motion'

//variants
import { fadeIn } from '../variants'

const Home = () => {
  return (
    <div className='bg-primary/60'>
      {/* Text */}
      <div className='w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10'>
        <div className='text-center flex flex-col justify-center xl:pt-40 xl:text-left h-full mx-auto container' style={{ paddingTop: '10rem' }}>
          {/* Title */}
          <motion.h1
            variants={fadeIn('down,0,2')}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='h1 sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl' // Increase text size for small screens
          >
            Transformando Ideias <br /> em {''} 
            <span className='text-accent'>Digital Realidade </span> {/* Correct 'spam' to 'span' */}
          </motion.h1>
          {/* Subtitle */}
          <motion.p 
            variants={fadeIn('down,0,4')}
            initial="hidden"
            animate="show" 
            exit="hidden"
            className='max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16'
          >
            Convertendo Inspirações em Interatividade: Explorando a Arte do Desenvolvimento Front-End para Transformar Conceitos Criativos em Experiências Digitais Memoráveis.
          </motion.p>
      </div> 
      <div className='flex flex-col justify-center  relative'>
            <ProjectsBtn/>
          </div>
          <motion.div 
            variants={fadeIn('down,0,8')}
            initial='hidden'
            animate='show' 
            exit='hidden'
            className='hidden xl:flex'
          >
            <ProjectsBtn/>
          </motion.div>
        </div>
      {/* Image */}
      <div className= 'w-full h-full absolute right-0 bottom-0'> {/* Adjust image height for small screens */}
        {/* Background Image */}
        <div className='bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0'></div>
        {/* Particles */}
        <ParticlesContainer/>
        {/* Avatar Image */}
        <div className='hidden xl:flex  absolute bottom-0 right-2'>
          <motion.div  
            variants={fadeIn('up,0,8')}
            initial="hidden"
            animate="show" 
            exit="hidden"
            translate={{duration:1,ease:'easeInOut'}}
            className='w-full h-full max-w-[737px] max-h-[678px] absolute -bottom-32 lg:bottom-0 lg:right-[8%]' // Adjust size and positioning for small screens
          >
          </motion.div>
          <Avatar />
        </div>
      </div>
    </div>
  );
};


export default Home;
