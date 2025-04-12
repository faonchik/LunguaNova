import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/navigation';

const images = [
  "https://static.tildacdn.com/tild3666-3837-4763-b266-663632313561/Housing.jpg",
  "https://static.tildacdn.com/tild3536-3261-4661-b964-336238633334/SP1.jpg",
  "https://static.tildacdn.com/tild6432-3762-4537-a166-303561653130/SP2.jpg",
  "https://static.tildacdn.com/tild3061-3266-4366-a663-353535393339/SP3.jpg",
  "https://static.tildacdn.com/tild3564-6562-4263-a334-326530386165/SP4.jpg",
  "https://static.tildacdn.com/tild3330-3062-4462-a164-343562363366/SP6.jpg",
  "https://static.tildacdn.com/tild3364-6335-4735-a465-643230333861/SP7.jpg"
];

const HousingGallery = () => {
  return (
    <div className="relative w-full py-12">
      <div className="max-w-[1200px] mx-auto grid grid-cols-12 gap-8">
        {/* Галерея */}
        <div className="col-span-5">
          <div className="relative ml-[85px]">
            <Swiper
              modules={[Navigation, Autoplay]}
              navigation
              autoplay={{
                delay: 10000,
                disableOnInteraction: false
              }}
              loop={true}
              className="w-[600px] h-[400px]"
            >
              {images.map((image, index) => (
                <SwiperSlide key={index}>
                  <div className="relative w-full h-full">
                    <Image
                      src={image}
                      alt={`Housing ${index + 1}`}
                      fill
                      style={{ objectFit: 'cover' }}
                      unoptimized
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

        {/* Правая часть */}
        <div className="col-span-7">
          <div className="text-center mb-8">
            <h2 className="text-[37px] leading-[37px] mb-4">Housing</h2>
            <div className="w-[300px] h-[2px] bg-[#032a62] mx-auto" />
          </div>

          <div className="flex justify-center items-center gap-4">
            {/* Первый круг */}
            <div className="relative">
              <div className="w-[170px] h-[170px] border-2 border-[#4e6991] rounded-full flex items-center justify-center">
                <div className="text-center px-4">
                  <span className="text-[16px] leading-[25px]">
                    Высокоскоростная обработка
                  </span>
                </div>
              </div>
            </div>

            {/* Плюс */}
            <div className="text-[31px] leading-[31px] relative" style={{ top: '65px' }}>+</div>

            {/* Второй круг */}
            <div className="relative">
              <div className="w-[170px] h-[170px] border-2 border-[#4e6991] rounded-full flex items-center justify-center">
                <div className="text-center px-4">
                  <span className="text-[16px] leading-[25px]">
                    Сверхточность
                  </span>
                </div>
              </div>
            </div>

            {/* Плюс */}
            <div className="text-[31px] leading-[31px] relative" style={{ top: '65px' }}>+</div>

            {/* Третий круг */}
            <div className="relative">
              <div className="w-[170px] h-[170px] border-2 border-[#4e6991] rounded-full flex items-center justify-center">
                <div className="text-center px-4">
                  <span className="text-[16px] leading-[25px]">
                    Быстрая доставка
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HousingGallery; 