//link
import Link from "next/link";
import AudioPlayer from '../components/AudioPlayer';
 
// icons 
import {
  RiGithubLine,
  RiLinkedinLine,
  RiTelegramLine,
  RiWhatsappLine, 
} from 'react-icons/ri';




const Socials = () => {
  return <div className='flex items-center gap-5 text-lg'>
    <Link href={'https://github.com/Eduardopereira11967484018'} className='hover:text-accent transition-all duration-300'>
      <RiGithubLine />
    </Link>
    <Link href={'https://www.linkedin.com/in/eduardo-pereira-lima-7580a5239'} className='hover:text-accent transition-all duration-300'>
      <RiLinkedinLine />
    </Link> <Link href={'https://t.me/@E967484018'} className='hover:text-accent transition-all duration-300'>
      <RiTelegramLine />
    </Link> <Link href={'https://api.whatsapp.com/send?phone=5511967484018'} className='hover:text-accent transition-all duration-300'>
      <RiWhatsappLine />
    </Link>
    
  </div>;
};

export default Socials;
