import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation'; 

import { Pagination, Navigation } from 'swiper';
import React from 'react';

// Import components do Swiper from o React
import { Swiper, SwiperSlide } from 'swiper/react';

// icon
import { BsArrowRight } from 'react-icons/bs';

// next image
import Image from 'next/image';


// Data
const workSlides = {
  slides: [
    {
      images: [
        {
          title: 'title',
          path: '/thumb1.JPG',
           link: 'https://github.com/npm/cli/issues/676vercel',
        },
        {
          title: 'title',
          path: '/thumb2.JPG',
          link:'https://github.com/Eduardopereira11967484018?tab=repositories'
        },
        {
          title: 'title',
          path: '/thumb3.JPG',
          link:'https://github.com/Eduardopereira11967484018?tab=repositories'
        },
        {
          title: 'title',
          path: '/thumb4.JPG',
          link:'https://github.com/Eduardopereira11967484018?tab=repositories'
        },
        
      ],
    },
    {
      images: [
        {
          title: 'title',
          path: '/thumb5.JPG',
           link: 'https://github.com/npm/cli/issues/676vercel',
        },
        {
          title: 'title',
          path: '/thumb6.JPG',
          link:'https://github.com/Eduardopereira11967484018?tab=repositories'
        },
        {
          title: 'title',
          path: '/thumb7.JPG',
          link:'https://github.com/Eduardopereira11967484018?tab=repositories'
        },
        {
          title: 'title',
          path: '/thumb8.JPG',
          link:'https://github.com/Eduardopereira11967484018?tab=repositories'
        },
      ],
     },
    {
      images: [
        {
          title: 'title',
          path: '/thumb9.JPG',
          link:'https://github.com/Eduardopereira11967484018?tab=repositories'
        },
        {
          title: 'title',
          path: '/thumb10.JPG',
          link:'https://github.com/Eduardopereira11967484018?tab=repositories'
        },
        {
          title: 'title',
          path: '/thumb11.JPG',
          link:'https://github.com/Eduardopereira11967484018?tab=repositories'
        },
        {
          title: 'title',
          path: '/thumb12.JPG',
          link:'https://github.com/Eduardopereira11967484018?tab=repositories'
        },
      ],
    },
    {
      images: [
        {
          title: 'title',
          path: '/thumb13.JPG',
          link:'https://github.com/Eduardopereira11967484018?tab=repositories'
        },
        {
          title: 'title',
          path: '/thumb14.JPG',
          link:'https://github.com/Eduardopereira11967484018?tab=repositories'
        },
        {
          title: 'title',
          path: '/thumb15.JPG',
          link:'https://github.com/Eduardopereira11967484018?tab=repositories'
        },
        {
          title: 'title',
          path: '/thumb16.JPG',
          link:'https://github.com/Eduardopereira11967484018?tab=repositories'
        },
      ],
    },
    {
      images: [
        {
          title: 'title',
          path: '/thumb17.JPG',
          link:'https://github.com/Eduardopereira11967484018?tab=repositories'
        },
        {
          title: 'title',
          path: '/thumb18.JPG',
          link:'https://github.com/Eduardopereira11967484018?tab=repositories'
        },
        {
          title: 'title',
          path: '/thumb19.JPG',
          link:'https://github.com/Eduardopereira11967484018?tab=repositories'
        },
        {
          title: 'title',
          path: '/thumb20.JPG',
          link:'https://github.com/Eduardopereira11967484018?tab=repositories'
        },
      ],
    },
    {
      images: [
        {
          title: 'title',
          path: '/thumb21.JPG',
          link:'https://github.com/Eduardopereira11967484018?tab=repositories'
        },
        {
          title: 'title',
          path: '/thumb22.JPG',
          link:'https://github.com/Eduardopereira11967484018?tab=repositories'
        },
        {
          title: 'title',
          path: '/thumb23.JPG',
          link:'https://github.com/Eduardopereira11967484018?tab=repositories'
        },
           {
          title: 'title',
          path: '/thumb24.JPG',
          link:'https://github.com/Eduardopereira11967484018?tab=repositories'
        },
      ],
    },
    {
      images: [
        {
          title: 'title',
          path: '/thumb25.JPG',
          link:'https://github.com/Eduardopereira11967484018?tab=repositories'
        },
        {
          title: 'title',
          path: '/thumb26.JPG',
          link:'https://github.com/Eduardopereira11967484018?tab=repositories'
        },
        {
          title: 'title',
          path: '/thumb27.JPG',
          link:'https://github.com/Eduardopereira11967484018?tab=repositories'
        },
        {
          title: 'title',
          path: '/thumb28.jpg',
          link:'https://github.com/Eduardopereira11967484018?tab=repositories'
        },
        
      ],
    },   
  ],
};


const WorkSlider = () => {
  return (
    <Swiper
      spaceBetween={10}
      pagination={{ clickable: true }}
      modules={[Pagination, Navigation]}
      className='h-[280vh] sm:h-[480vh]'
      navigation={true}
      freeMode={true}  // Adicionando freeMode para permitir rolagem livre
    >
      {workSlides.slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <div className='grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer'>
            {slide.images.map((image, subIndex) => (
              <div className='relative rounded-lg overflow-hidden flex items-center justify-center group' key={subIndex}>
                <a href={image.link} target='_blank' rel='noopener noreferrer'>
                  <div className='flex items-center justify-center relative overflow-hidden group'>
                    <Image src={image.path} width={500} height={300} alt='' />
                    <div className='absolute inset-0 bg-gradient-to-l from-transparent via- bg-primary/30 to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700'></div>
                    <div className=' absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-300'>
                      <div className='flex items-center gap-x-2 text-[13px] transform-[0.2em]'>
                        <div className='delay-100'>Interface</div>
                        <div className='translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150'>web</div>
                      </div>
                      <div className='text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200'>
                        <BsArrowRight />
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default WorkSlider;

