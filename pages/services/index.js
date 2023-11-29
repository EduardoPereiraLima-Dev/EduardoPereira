//icon
import {
  RxCrop,
  RxPencil2,
  RxDesktop,
  RxReader,
  RxRocket,
  RxArrowBottomRight,  
} from "react-icons/rx";


//data service
export const serviceData = [];

//components
import ServiceSlider from '../../components/ServiceSlider';
import Bulb from '../../components/Bulb';
import Circles from '../../components/Circles';

//framer motion
import{motion} from 'framer-motion';
import {fadeIn} from '../../variants';


const Services = () => {
  return( 
  <div className='h-full bg-primary/30 py-36 flex items-center'>
    <Circles />
    <div className='container mx-auto'>
      <div className='flex flex-col xl:flex-row gap-x-7'>
        {/*text */}
        <div className='text-center flex xl:w-[20vw] flex-col lg:text-left mb-2 xl:mb-0'>
          <motion.h2 
          variants={fadeIn('up',0.2)}
          initial='hidden'
          animate='show'
          exit='hidden'
           className='h2 xl:mt:-4'>Serviços <span className='text-accent'>.</span></motion.h2>
          <motion.p
           variants={fadeIn('up',0.4)}
           initial='hidden'
           animate='show'
           exit='hidden' className='mb-4 max-w-[400px] mx-auto lg:mx-0'>Como desenvolvedor front-end, estou comprometido em criar experiências web cativantes e responsivas. Meu foco está em transformar designs criativos em código funcional e interativo, proporcionando aos clientes sites atraentes e amigáveis ao usuário.</motion.p>
        </div>
        <motion.div variants={fadeIn('down',0.6)}
          initial='hidden'
          animate='show'
          exit='hidden' className='w-full xl:max-w-[65%]'>
          {/* slider */}
        <ServiceSlider />
        </motion.div>       
      </div>
    </div>
    <Bulb />
  </div>
  );
};

export default Services;
    





















