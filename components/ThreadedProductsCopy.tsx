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

const ThreadedProductsCopy = () => {
  return (
    <div className="t396__artboard rendered" style={{ height: '510px' }}>
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-12">
          {/* Галерея */}
          <div className="col-span-5">
            <div className="relative" style={{ marginLeft: '85px', marginTop: '55px' }}>
              <div className="overflow-hidden" style={{ width: '600px', height: '400px' }}>
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
                    <SwiperSlide key={index} className="overflow-hidden">
                      <div className="relative w-full h-full">
                        <Image
                          src={image}
                          alt={`Threaded product ${index + 1}`}
                          fill
                          style={{ 
                            objectFit: 'cover',
                            width: '100%',
                            height: '100%'
                          }}
                          unoptimized
                          priority={index === 0}
                        />
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>

          {/* Правая часть */}
          <div className="col-span-7">
            <div className="text-center" style={{ marginTop: '40px' }}>
              <h2 className="text-[37px] leading-[37px] mb-4">Изделия с резьбой</h2>
              <div className="w-[300px] h-[2px] bg-[#032a62] mx-auto mb-[60px]" />
            </div>

            <div className="flex justify-center items-start" style={{ gap: '16px' }}>
              {/* Первый круг */}
              <div className="relative" style={{ marginTop: '70px' }}>
                <div className="w-[170px] h-[170px] border-2 border-[#4e6991] rounded-full flex items-center justify-center">
                  <div className="text-center px-4">
                    <span className="text-[16px] leading-[25px]">
                      Высокотехнологичное производство
                    </span>
                  </div>
                </div>
              </div>

              {/* Плюс */}
              <div className="text-[31px] leading-[31px]" style={{ marginTop: '135px' }}>+</div>

              {/* Второй круг */}
              <div className="relative" style={{ marginTop: '70px' }}>
                <div className="w-[170px] h-[170px] border-2 border-[#4e6991] rounded-full flex items-center justify-center">
                  <div className="text-center px-4">
                    <span className="text-[16px] leading-[25px]">
                      Производство индивидуальных моделей
                    </span>
                  </div>
                </div>
              </div>

              {/* Плюс */}
              <div className="text-[31px] leading-[31px]" style={{ marginTop: '135px' }}>+</div>

              {/* Третий круг */}
              <div className="relative" style={{ marginTop: '70px' }}>
                <div className="w-[170px] h-[170px] border-2 border-[#4e6991] rounded-full flex items-center justify-center">
                  <div className="text-center px-4">
                    <span className="text-[16px] leading-[25px]">
                      Высокое качество
                    </span>
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

export default ThreadedProductsCopy; 