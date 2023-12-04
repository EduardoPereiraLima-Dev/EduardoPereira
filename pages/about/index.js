/* eslint-disable react/jsx-key */

import React,{useState} from 'react';    
// icons
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaWordpress,
  FaFigma,
  FaIcons,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiFramer,
  SiAdobexd,
  SiAdobephotoshop,
} from "react-icons/si";



//  data
const aboutData = [
  {
    title: 'Habilidades',
    info: [
      {
        title: 'desenvolvedor front-end',
        icons: [
          <FaHtml5 />,
          <FaCss3 />,
          <FaJs />,
          <FaReact />,
          <SiNextdotjs />,
          <SiFramer />,
          <FaWordpress />,
        ],
      },
      {
        title: 'UI/UX Design',
        icons: [<FaFigma />, <SiAdobexd />, <SiAdobephotoshop />],
      },
    ],
  },
  {
    title: ' prêmios',
    info: [
      {
        title: 'Aspirando a conquistas',
        stage: '2023 - xxxx',
      },
      {
        title: 'em Busca',
        stage: '2023 - xxxx',
      },
      
    ],
  },
  {
    title: 'Experiência ',
    info: [
     
      {
        title: 'Pode ser a sua empresa',
        stage: '2023 - xxxx',
      },
      {
        title: 'Determinado para iniciar',
        stage: '2023 - xxxx',
      },
    ],
  },
  {
    title: 'Credenciais',
    info: [
      {
        title: 'Estácio de Sá',
        stage: '2023',
      },
    
    
      {
        title: 'Academind ',
        stage: '2023',
      },
    
       
    ],
  },
];
//components
import Avatar from '../../components/Avatar';
import Circles from '../../components/Circles';

//frame motion
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';

//counter
import CountUp from 'react-countup';


const About = () => {
  const [index, setIndex] = useState(0);
  console.log(index);

  return (
    <div className='h-full bg-primary/30 py-36 text-center xl:text-left'>
      <Circles />
      {/* avatar img */}
      <motion.div  
      variants={fadeIn('right,0.2')}
      initial='hidden'
      animate='show'
      exit='hidden'
      className='hidden xl:flex absolute bottom-0 -left-[240px]'
      
      > 
        <Avatar />
      </motion.div>
      <div className='container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6'>
        {/*text */}
        <div className='flex-1 flex flex-col justify-center'>
        <h2 className='text-3xl md:text-4xl lg:text-3xl xl:text-3xl'>Historias <span className='text-accent'>cativantes</span> dão a luz ideas magníficas<span className='text-accent'>.</span></h2>
        <p  className=' max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0'>Como desenvolvedor iniciante, estou  embarcando em uma jornada emocionante.</p>
        {/*counters */}
        <div className='hidden md:flex md:max-w-xl xl:max-w-none mx:auto xl:mx-0 mb:-8'>
          <div className='flex flex-1 xl:gap-x-6'>
            {/*experience */}
            <div className='relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0'>
              <div className='text-2xl lx:4xl font-extrabold text-accent mb-2'>
              <CountUp start={100} end={1} duration={10} />+
              </div>
              <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]'>Experiência</div>     
            </div>
          </div>
              {/*Clintes */}
            <div className='relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0 '>
              <div className='text-2xl lx:4xl font-extrabold text-accent mb-2'>
              <CountUp start={100} end={1} duration={10} />+
              </div>
              <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]'> Clientes</div> 
            </div>
          
            {/*Premios */}
            <div className='relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0'>
              <div className='text-2xl lx:4xl font-extrabold text-accent mb-2'>
              <CountUp start={100} end={0} duration={10} />+
              </div>
              <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]'>Prêmios</div>
            </div>  
            {/*Projetos */}
            <div className='relative flex-1 after:w-[0px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0'>
              <div className='text-2xl lx:4xl font-extrabold text-accent mt-2'>
              <CountUp start={100} end={30} duration={10} />+
              </div>
              <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]'>Projetos</div>             
            </div>         
        </div>
        </div>
        {/*info */}
        <div className='flex-1 flex flex-col justify-center'>
          <div className=' flex-1 flex flex-col w-full xl:mx-w-[48%] h-[480px]'>
            <div className='flex gap-x-4 xl:gap-x-8 mx-auto lx:mx-0 mb-4'>
              {aboutData.map((item,itemIndex)=>{
                return(
                  <div key={itemIndex} className={`${index === itemIndex &&'text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300'}'cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0 after:right-0'`}
                  onClick={() => setIndex(itemIndex)}
                  >
                  {item.title}</div>
                );
              })}
            </div>
          </div>
          <div className='py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start ml-[50px]'>
            {aboutData[index].info.map((item, itemIndex)=>{
              return(
                 <div key={itemIndex} className='flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60'>
                {/*title */}
                <div className='font-light mb-2 mb:mb-0'>{item.title}</div>
                <div className='hidden md:flex'>-</div>
                <div>{item.stage}</div>
                <div className='flex gap-x-4'> 
                   {/*icons */}
                {item.icons?.map((icon, itemIndex)=> {
                  return ( 
                  <div className='text-2xl text-white'>{icon}</div> 
                  );
                })}</div>
              
              </div>
              );
            })}
          </div> 
        </div>
      </div>
    </div>
  );
};

export default About;


