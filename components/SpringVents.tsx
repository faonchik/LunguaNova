import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const images = [
  { url: "https://static.tildacdn.com/tild3666-3837-4763-b266-663632313561/Housing.jpg", alt: "Housing" },
  { url: "https://static.tildacdn.com/tild3536-3261-4661-b964-336238633334/SP1.jpg", alt: "SP1" },
  { url: "https://static.tildacdn.com/tild6432-3762-4537-a166-303561653130/SP2.jpg", alt: "SP2" },
  { url: "https://static.tildacdn.com/tild3061-3266-4366-a663-353535393339/SP3.jpg", alt: "SP3" },
  { url: "https://static.tildacdn.com/tild3564-6562-4263-a334-326530386165/SP4.jpg", alt: "SP4" },
  { url: "https://static.tildacdn.com/tild3330-3062-4462-a164-343562363366/SP6.jpg", alt: "SP6" },
  { url: "https://static.tildacdn.com/tild3364-6335-4735-a465-643230333861/SP7.jpg", alt: "SP7" },
];

const SpringVents = () => {
  return (
    <section id="spring-vents">
      <div className="t396__artboard" style={{ height: '510px' }}>
        <div className="relative grid grid-cols-12 gap-4">
          {/* Левая часть - слайдер */}
          <div className="col-span-5">
            <Swiper
              modules={[Navigation, Autoplay]}
              spaceBetween={0}
              slidesPerView={1}
              navigation={{
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
              }}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              loop={true}
              className="swiper-initialized swiper-horizontal swiper-backface-hidden w-[600px] h-[400px]"
            >
              <div className="swiper-wrapper">
                {images.map((image, index) => (
                  <SwiperSlide key={index} className="swiper-slide" style={{ width: '600px' }}>
                    <div 
                      className="w-full h-full bg-cover bg-center"
                      style={{ backgroundImage: `url(${image.url})` }}
                    />
                  </SwiperSlide>
                ))}
              </div>
              <div className="swiper-button-prev !text-black !bg-[#e8e8e8] !w-[30px] !h-[30px] !left-5"></div>
              <div className="swiper-button-next !text-black !bg-[#e8e8e8] !w-[30px] !h-[30px] !right-5"></div>
            </Swiper>
          </div>

          {/* Правая часть - круги с текстом */}
          <div className="col-span-7">
            <div className="relative">
              <div className="text-center mb-12">
                <h2 className="text-[37px] leading-[37px] mb-2">Spring vents</h2>
                <div className="w-[300px] h-[2px] bg-[#032a62] mx-auto"></div>
              </div>
              
              <div className="flex justify-center items-center gap-16">
                <div className="text-center">
                  <div className="w-[170px] h-[170px] border border-[#4e6991] rounded-full flex items-center justify-center px-4">
                    <div className="tn-atom" style={{ lineHeight: '25px' }}>
                      Высокоскоростная обработка
                    </div>
                  </div>
                </div>

                <div className="text-center relative">
                  <span className="absolute -left-8 top-[65px] text-2xl">+</span>
                  <div className="w-[170px] h-[170px] border border-[#4e6991] rounded-full flex items-center justify-center px-4">
                    <div className="tn-atom" style={{ lineHeight: '25px' }}>
                      Сверхточность
                    </div>
                  </div>
                </div>

                <div className="text-center relative">
                  <span className="absolute -left-8 top-[65px] text-2xl">+</span>
                  <div className="w-[170px] h-[170px] border border-[#4e6991] rounded-full flex items-center justify-center px-4">
                    <div className="tn-atom" style={{ lineHeight: '25px' }}>
                      Быстрая доставка
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpringVents; 