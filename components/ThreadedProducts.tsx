import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const images = [
  { url: "https://static.tildacdn.com/tild6632-6437-4933-a531-313833653333/1_Annular_Gear.png", alt: "Annular Gear" },
  { url: "https://static.tildacdn.com/tild6433-6231-4839-b964-313264333235/2_Helical_Gear.jpg", alt: "Helical Gear" },
  { url: "https://static.tildacdn.com/tild6163-6439-4433-a166-386236323166/3_Herring_Bone_Gear.jpg", alt: "Herring Bone Gear" },
  { url: "https://static.tildacdn.com/tild6335-3638-4433-a363-386639363563/4_Hypoid_Gear.jpg", alt: "Hypoid Gear" },
  { url: "https://static.tildacdn.com/tild3839-6337-4535-b536-373731316634/5_internal_gear.jpg", alt: "Internal Gear" },
  { url: "https://static.tildacdn.com/tild6139-3065-4962-b433-383439383363/6_Pinion_Shaft.jpg", alt: "Pinion Shaft" },
  { url: "https://static.tildacdn.com/tild6466-3763-4131-b136-353562313539/7_Rack_And_Pinion.jpg", alt: "Rack And Pinion" },
  { url: "https://static.tildacdn.com/tild6431-3238-4838-a332-633233643130/8_Screw_Gear.jpg", alt: "Screw Gear" },
  { url: "https://static.tildacdn.com/tild3839-6436-4362-b161-303462393064/9_planetary-gear.jpeg", alt: "Planetary Gear" },
  { url: "https://static.tildacdn.com/tild3262-6363-4132-b134-376132323165/10_Plastic_Gear.jpg", alt: "Plastic Gear" },
  { url: "https://static.tildacdn.com/tild3635-3661-4463-a435-653437396633/11_Spiral_Bevel_Gear.jpg", alt: "Spiral Bevel Gear" },
  { url: "https://static.tildacdn.com/tild3636-6265-4262-b661-366438306362/12_Spline_Shaft.jpg", alt: "Spline Shaft" },
  { url: "https://static.tildacdn.com/tild3863-6532-4836-a136-666337653236/13_Spur_Gear.jpg", alt: "Spur Gear" },
  { url: "https://static.tildacdn.com/tild6463-3039-4231-a362-386335313337/14_timing_pulley.jpg", alt: "Timing Pulley" },
  { url: "https://static.tildacdn.com/tild3164-6134-4337-b734-326162346639/15_Worm_Gear.jpg", alt: "Worm Gear" },
];

const ThreadedProducts = () => {
  return (
    <section id="threaded-products">
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
                <h2 className="text-[37px] leading-[37px] mb-2">Изделия с резьбой</h2>
                <div className="w-[300px] h-[2px] bg-[#032a62] mx-auto"></div>
              </div>
              
              <div className="flex justify-center items-center gap-16">
                <div className="text-center">
                  <div className="w-[170px] h-[170px] border border-[#4e6991] rounded-full flex items-center justify-center px-4">
                    <div className="tn-atom" style={{ lineHeight: '25px' }}>
                      Высокотехнологичное производство
                    </div>
                  </div>
                </div>

                <div className="text-center relative">
                  <span className="absolute -left-8 top-[65px] text-2xl">+</span>
                  <div className="w-[170px] h-[170px] border border-[#4e6991] rounded-full flex items-center justify-center px-4">
                    <div className="tn-atom" style={{ lineHeight: '25px' }}>
                      Производство индивидуальных моделей
                    </div>
                  </div>
                </div>

                <div className="text-center relative">
                  <span className="absolute -left-8 top-[65px] text-2xl">+</span>
                  <div className="w-[170px] h-[170px] border border-[#4e6991] rounded-full flex items-center justify-center px-4">
                    <div className="tn-atom" style={{ lineHeight: '25px' }}>
                      Высокое качество
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

export default ThreadedProducts; 