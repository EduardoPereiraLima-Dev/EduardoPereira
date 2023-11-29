import React from "react";
import{ FreeMode, Pagination } from 'swiper';
//import swiper react components
import { Swiper, SwiperSlide } from 'swiper/react';

import { RxCrop, RxPencil2, RxDesktop, RxReader, RxRocket, RxArrowTopRight } from "react-icons/rx";

//import swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';



const serviceData = [
  {
    icon: <RxCrop />,
    title: 'Marca',
    description: 'Desenvolvendo, elementos é estilos que refletem na identidade da marca.',
  },
  {
    icon: <RxPencil2 />,
    title: 'Design',
    description: 'Criando interfaces que encantam e facilitam a vida dos usuários online.',
  },
  {
    icon: <RxDesktop />,
    title: 'Desenvolvimento',
    description: 'Transformar ideias em realidade, de criar soluções que melhoram o mundo.',
  },
  {
    icon: <RxReader />,
    title: 'Redator',
    description: ' Criar textos persuasivos que  informam, envolvem e convencem o público-alvo.',
  },
  {
    icon: <RxRocket />,
    title: 'SEO',
    description: 'Bússola que guia seu site pelo labirinto dos motores de busca, tornando-o visível e relevante',
  },
];


const ServiceSlider = () => {
  return (
    <Swiper
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        640: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
      }}
      freeMode={true}
      pagination={{
        clickable: true
      }}
      modules={[FreeMode,Pagination]}
      className='h-[240px] sm:h-[340px]'
    >
      {serviceData.map((item, index) => (
        <SwiperSlide key={index}>
          <div className='bg-[rgba(65,47,123,0.15)] h-max rounded-lg px-6 py-8 flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300'>
            {/* icon */}
            <div className='text-4xl text-accent md-4'>{item.icon}</div>
            {/* title & desc */}
            <div className='mb-8'>
              <div className='mb-2 text-lg'>{item.title}</div>
              <p className='max-w-[350px] leading-normal'>{item.description}</p>
            </div >
            {/* arrow */}
            <div className='text-3xl'>
              <RxArrowTopRight className='group-hover:rotate-45 group-hover:text-accent transition-all duration-300'/>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ServiceSlider;
