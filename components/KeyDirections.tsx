import { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import HousingGallery from '../components/HousingGallery';

const KeyDirections: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.2
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  const directions = [
    {
      img: 'https://static.tildacdn.com/tild3937-3530-4861-b166-356130396362/automotive.png',
      title: ['Производство компонентов', 'для автомобильной отрасли']
    },
    {
      img: 'https://static.tildacdn.com/tild3637-3833-4664-b339-306631366166/car-wheel_1.png',
      title: ['Особый акцент на', 'производство компонентов для прес-форм']
    },
    {
      img: 'https://static.tildacdn.com/tild3239-3133-4337-b137-636665623361/technology.png',
      title: ['Современные технологии и', 'постоянные исследования']
    },
    {
      img: 'https://static.tildacdn.com/tild3139-3835-4162-b933-366263613135/network.png',
      title: ['Полное сопровождение клиентов', 'от производства до поставки']
    }
  ];

  return (
    <div className="relative w-full" ref={sectionRef}>
      {/* Верхний треугольник */}
      <div className="absolute -top-1 left-0 w-full overflow-hidden leading-[0] z-10 rotate-180">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 1280 200" 
          preserveAspectRatio="none"
          className="relative block w-full h-[120px]"
        >
          <path 
            d="M0 200h1280V0L0 195.5V200z"
            className="fill-white"
          />
        </svg>
      </div>

      <div className="t-cover relative" style={{ height: '836.1px' }}>
        {/* Фоновое изображение */}
        <div 
          className="absolute inset-0 w-full h-[813.1px] bg-cover bg-center"
          style={{
            backgroundImage: `url('https://static.tildacdn.com/tild3335-3033-4436-a134-313765383031/WhatsApp_Image_2025-.jpeg')`,
            backgroundAttachment: 'scroll'
          }}
        />

        {/* Затемнение */}
        <div 
          className="absolute inset-0 w-full h-[813.1px]"
          style={{
            backgroundColor: 'rgb(0, 0, 0)',
            opacity: 0.3
          }}
        />

        {/* Контент */}
        <div className="container mx-auto relative z-10">
          <div className="flex flex-col items-center justify-center h-[813.1px]">
            <div className={`max-w-4xl text-center mb-16 t-animate ${isVisible ? 't-animate_started' : ''}`}>
              <h2 className="text-[30px] text-white">
                Наши ключевые направления
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 w-full place-items-center">
              {directions.map((direction, index) => (
                <div 
                  key={index} 
                  className={`t-animate ${isVisible ? 't-animate_started' : ''}`}
                  style={{ transitionDelay: `${index * 0.2}s` }}
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="w-[120px] h-[120px] mb-4">
                      <Image
                        src={direction.img}
                        alt={direction.title.join(' ')}
                        width={120}
                        height={120}
                        className="w-full h-full object-contain"
                        unoptimized
                      />
                    </div>
                    <div className="text-[20px] text-white font-normal max-w-[250px]">
                      {direction.title.map((line, i) => (
                        <div key={i} className="leading-tight">
                          {line}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Нижний треугольник */}
      <div className="absolute -bottom-1 left-0 w-full overflow-hidden leading-[0] z-10">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 1280 200" 
          preserveAspectRatio="none"
          className="relative block w-full h-[120px]"
        >
          <path 
            d="M0 200h1280V0L0 195.5V200z"
            className="fill-white"
          />
        </svg>
      </div>
    </div>
  );
};

export default KeyDirections; 