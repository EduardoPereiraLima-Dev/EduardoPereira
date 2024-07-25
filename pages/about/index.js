import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';
import CountUp from 'react-countup';
// icons
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaWordpress,
  FaFigma,
  FaAngular,
  FaVuejs,
  FaPython,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaJava,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiFramer,
  SiAdobexd,
  SiAdobephotoshop,
  SiTypescript,
  SiAzuredevops,
  SiRuby
} from "react-icons/si";

//  data
const aboutData = [
  {
    title: 'Habilidades',
    info: [
      {
        title: 'Web Desenvolvedor',
        icons: [
          <FaHtml5 key={1} />,
          <FaCss3 key={2} />,
          <FaJs key={3} />,
          <SiTypescript key={4} />,
          <FaReact key={5} />,
          <SiNextdotjs key={6} />,
          <FaAngular key={7} />,
          <FaVuejs key={8} />,
          <SiFramer key={9} />,
          <FaWordpress key={10} />,
        ],
      },
      {
        title: 'UI/UX Design',
        icons: [<FaFigma key={1} />, <SiAdobexd key={2} />, <SiAdobephotoshop key={3} />],
      },
      {
        title: 'Versionamento',
        icons: [<FaGitAlt key={1} />, <FaGithub key={2} />, <SiAzuredevops key={3} />],
      },
      {
        title: 'Back end Desenvolvedor',
        icons: [<SiRuby key={1} />, <FaNodeJs key={2} />],
      },
    ],
  },
  {
    title: 'Certificados',
    info: [
      {
        title: 'Dio.me',
        stage: '2024 - 2024',
      },
      {
        title: 'EBAC',
        stage: '2024 - 2024',
      },
    ],
  },
  {
    title: 'Experiência',
    info: [
      {
        title: 'Yellowsec',
        stage: '2023 - 2024',
      },
      {
        title: 'em busca',
        stage: 'xxxx - 2023',
      },
      {
        title: 'em busca',
        stage: 'xxxx - 2023',
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
        title: 'EBAC',
        stage: '2024',
      },
      {
        title: 'Udemy',
        stage: '2024',
      },
      {
        title: 'Dio.me',
        stage: '2024',
      },
    ],
  },
];

import Avatar from '../../components/Avatar';
import Circles from '../../components/Circles';

const About = () => {
  const [index, setIndex] = useState(0);

  return (
    <div className="h-full bg-primary/30 py-32 text-center xl:text-left">
      <Circles />
      {/* avatar img */}
      <motion.div
        variants={fadeIn('right', 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="hidden xl:flex absolute bottom-0 -left-[230px]"
      >
        <Avatar />
      </motion.div>
      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row">
        <div className="flex-1 flex flex-col justify-center">
          <motion.h2
            variants={fadeIn('right', 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2"
          >
            Histórias <span className="text-accent">cativantes </span>geram design magnificos.
          </motion.h2>
          <motion.p
            variants={fadeIn('right', 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0"
          >
            Desenvolvedor front-end comprometido em criar interfaces envolventes, dominando HTML, CSS, e JavaScript, e explorando tecnologias como React e Vue.js. Busco constantemente aprimorar minhas habilidades e moldar o futuro da experiência do usuário na web.
          </motion.p>
          <motion.div
            variants={fadeIn('right', 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden md:flex md:max-w-xl xl:max-none mx-auto xl:mx-0 mb-8"
          >
            <div className="flex flex-1 xl:gap-x-6">
              {/* Experience */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={2} duration={5} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">Anos de experiência</div>
              </div>
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={100} end={1} duration={5} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">Clientes</div>
              </div>
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={29} duration={5} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">Projetos finalizados</div>
              </div>
              <div className="relative flex-1">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={100} end={15} duration={5} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">Certificados</div>
              </div>
            </div>
          </motion.div>
        </div>
        <motion.div
          variants={fadeIn('left', 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex flex-col w-full xl:max-w-[48%] h-[480px]"
        >
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
            {aboutData.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className={`
                    ${index === itemIndex && 'text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300'}
                    cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0
                    px-2 py-1 rounded-md hover:bg-accent hover:text-white transition duration-300
                  `}
                  onClick={() => setIndex(itemIndex)}
                >
                  {item.title}
                </div>
              );
            })}
          </div>
          <div className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start">
            {aboutData[index].info.map((item, itemIndex) => {
              return (
                <div key={itemIndex} className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60">
                  <div className="font-light mb-2 md:mb-0">{item.title}</div>
                  <div className="hidden md:flex">-</div>
                  <div>{item.stage}</div>
                  <div className="flex gap-x-4">
                    {/* icons */}
                    {item.icons?.map((icon, iconIndex) => {
                      return <div key={iconIndex} className="text-2xl text-white">{icon}</div>;
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
