import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const ProductGallery: React.FC = () => {
  const images = [
    'https://static.tildacdn.com/tild6537-3264-4865-a365-653763333663/SLP1.jpg',
    'https://static.tildacdn.com/tild6263-3139-4135-a631-646166376663/SLP2.jpg',
    'https://static.tildacdn.com/tild3733-6161-4461-a238-313535373136/SLP3.jpg',
    'https://static.tildacdn.com/tild3536-6664-4432-b238-313864363663/SLP4.jpg',
    'https://static.tildacdn.com/tild3236-3762-4533-a232-666161366335/SLP5.jpg',
    'https://static.tildacdn.com/tild3166-3864-4737-b639-386161666632/SLP6.jpg',
    'https://static.tildacdn.com/tild6537-6339-4364-b463-343764663463/SLP7.jpg',
    'https://static.tildacdn.com/tild6436-6564-4233-b763-383037353164/SLP8.jpg',
    'https://static.tildacdn.com/tild3739-6332-4461-b562-643664393162/SLP9.jpg',
    'https://static.tildacdn.com/tild6164-3039-4133-b762-326531616161/SLP10.jpg'
  ];

  return (
    <div className="t396__artboard" style={{ height: '510px' }}>
      <div className="relative grid grid-cols-12 gap-4">
        {/* Галерея */}
        <div className="col-span-5">
          <Swiper
            modules={[Navigation, Autoplay]}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }}
            autoplay={{
              delay: 10000,
              disableOnInteraction: false,
            }}
            loop={true}
            className="w-[600px] h-[400px]"
          >
            {images.map((image, index) => (
              <SwiperSlide key={index}>
                <div 
                  className="w-full h-full bg-cover bg-center"
                  style={{ backgroundImage: `url(${image})` }}
                />
              </SwiperSlide>
            ))}
            <div className="swiper-button-prev !text-black !bg-[#e8e8e8] !w-[30px] !h-[30px] !left-5" />
            <div className="swiper-button-next !text-black !bg-[#e8e8e8] !w-[30px] !h-[30px] !right-5" />
          </Swiper>
        </div>

        {/* Правая часть */}
        <div className="col-span-7">
          <div className="relative">
            {/* Заголовок с подчеркиванием */}
            <div className="text-center mb-12">
              <h2 className="text-[37px] leading-[37px] mb-2">Пластины скольжения</h2>
              <div className="w-[300px] h-[2px] bg-[#032a62] mx-auto" />
            </div>

            <div className="flex justify-center items-center gap-16">
              <div className="text-center">
                <div className="w-[170px] h-[170px] border border-[#4e6991] rounded-full flex items-center justify-center px-4">
                  <div className="tn-atom" style={{ lineHeight: '25px' }}>
                    Разработка<br />3д<br />чертежей
                  </div>
                </div>
              </div>
              <div className="text-center relative">
                <span className="absolute -left-8 top-[65px] text-2xl">+</span>
                <div className="w-[170px] h-[170px] border border-[#4e6991] rounded-full flex items-center justify-center px-4">
                  <div className="tn-atom" style={{ lineHeight: '25px' }}>
                    Современный<br />самосмазывающий<br />материал
                  </div>
                </div>
              </div>
              <div className="text-center relative">
                <span className="absolute -left-8 top-[65px] text-2xl">+</span>
                <div className="w-[170px] h-[170px] border border-[#4e6991] rounded-full flex items-center justify-center px-4">
                  <div className="tn-atom" style={{ lineHeight: '25px' }}>
                    Массовое<br />производство
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductGallery; 