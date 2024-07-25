export const workSlider = {
  slides: [
    {
      images: [
        {
          title: "title",
          path: "/thumb1.jpeg",
          link: "https://e-play-games.vercel.app/",
        },
        {
          title: "title",
          path: "/thumb2.jpeg",
          link: "https://efood-ebac-gamma.vercel.app/",
        },
        {
          title: "title",
          path: "/thumb16.JPG",
          link: "https://3d-card-nike-ar-max.vercel.app/",
        },
        {
          title: "title",
          path: "/thumb4.JPG",
          link: "https://imobili-ria-localize.vercel.app/",
        },
      ],
    },
    {
      images: [
        {
          title: "title",
          path: "/thumb21.JPG",
          link: "https://vr-sem-foto-page-79itq9wem-eduardopereira11967484018.vercel.app/",
        },
        {
          title: "title",
          path: "/thumb26.JPG",
          link: "https://cryptomoeda-site.vercel.app/",
        },
        {
          title: "title",
          path: "/thumb2.JPG",
          link: "https://wearther-app-eduardo.vercel.app/",
        },
        {
          title: "title",
          path: "/thumb3.jpg",
          link: "https://example.com/project8",
        },
      ],
    },
  ],
};
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import { BsArrowRight } from "react-icons/bs";
import Image from "next/image";

const WorkSlider = () => {
  return (
    <Swiper
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="h-[280px] sm:h-[480px]"
    >
      {workSlider.slides.map((slide, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer">
              {slide.images.map((image, index) => {
                return (
                  <a key={index} href={image.link} target="_blank" rel="noopener noreferrer" className="relative rounded-lg overflow-hidden flex items-center justify-center group">
                    <div className="flex items-center justify-center relative overflow-hidden group">
                      <Image src={image.path} width={500} height={300} alt="" />
                      <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700"></div>
                      <div className="absolute bottom-0 translate-y-full group-hover:-translate-y-5 group-hover:xl:-translate-y-20 transition-all duration-300">
                        <div className="flex flex-col xl:flex-row items-center gap-x-2 text-xs xl:text-[13px] tracking-[0.2em]">
                          <div className="delay-100">PROJETOS</div>
                          <div className="translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150">
                            REALIZADOS
                          </div>
                          <div className="text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200">
                            <BsArrowRight />
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                );
              })}
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default WorkSlider;
