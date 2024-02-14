import Link from "next/link";
import Socials from '../components/Socials';

const Header = () => {
  return (
    <header className='absolute z-20 w-full flex items-center px-16 xl:px-0 xl:h-[90px] '>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row justify-between items-center gap-y-6 py-8'>
          {/* Eduardo Pereira */}
          <div className='font-sora text-4xl flex items-center mt-1'
            >
            Eduardo <span className='font-thin'>Pereira</span> <span className='text-accent'>.</span>
          </div>
          {/* Socials */}
          <Socials />
        </div>
      </div>
    </header>
  );
};

export default Header;
