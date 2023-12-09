import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation'; 

import { Navigation, Pagination } from 'swiper';
import React from 'react';

// Import components from Swiper for React
import { Swiper, SwiperSlide } from 'swiper/react';

// icon
import { FaQuoteLeft } from 'react-icons/fa';

// next image
import Image from 'next/image';

// testimonial data
const testimonialData = [
  {
    image: '/t-avt-1.png',
    name: 'Anna Maria',
    position: 'Profissão',
    message:
      'Lorem ipsum dolor sit amet consectetur.',
  },
  {
    image: '/t-avt-2.png',
    name: 'Janaina Torres',
    position: 'Profissão',
    message:
      'Lorem ipsum dolor sit amet consectetur.',
  },
  {
    image: '/t-avt-3.png',
    name: 'João Victor',
    position: 'Profissão',
    message:
      'Lorem ipsum dolor sit amet consectetur.',
  },
];

const TestimonialSlider = () => {
  return (
    <Swiper
    spaceBetween={10}
      navigation={true}
      pagination={{
        clickable: true,
      }}
      modules={[Navigation, Pagination]}
      className='h-[280px] sm:[480px]'
      freeMode={true}
    >
      {testimonialData.map((person, index) => {
        return (
          <SwiperSlide key={index}>
            <div className='flex flex-col items-center md:flex-row gap-x-8 h-full px-16'>
              {/*avatar, name, position  */}
              <div className='w-full max-w-[300px] flex flex-col xl:justify-center  items-center relative mx-auto xl:mx-0'>
                <div className='flex flex-col justify-center text-center'>
                  {/*avatar */}
                  <div className='md-2 mx-auto'>
                    <Image src={person.image} width={100} height={100} alt='' />
                  </div>
                  {/*name */}
                  <div className='text-lg'>{person.name}</div>
                  {/*position */}
                  <div className='text-[10px] uppercase font-extralight tracking-widest'>{person.position}</div>
                </div>
              </div>
              {/*quote & message */}
              <div className='flex-1 flex flex-col justify-center before:w-[1px] xl:before:bg-white/20 xl:before:absolute xl:before:leaf-0 xl:before:h-[100px] relative xl:pl-20 '>
                {/*quote & icon */}
                <div className='mb-4'>
                  <FaQuoteLeft className='text-3xl xl:text-6xl text-white/20 mx-auto md:mx-0' />
                </div>
                {/*message */}
                <div className='xl:text-lg text-center md:text-left'>
                  {person.message}
                </div>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default TestimonialSlider;
