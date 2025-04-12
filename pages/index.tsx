import type { NextPage } from 'next';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import AboutCompany from '../components/AboutCompany';
import KeyDirections from '../components/KeyDirections';
import Advantages from '../components/Advantages';
import Features from '../components/Features';
import ProductGallery from '../components/ProductGallery';
import ThreadedProducts from '../components/ThreadedProducts';
import SpringVents from '../components/SpringVents';
import ResearchDevelopment from '../components/ResearchDevelopment';
import ProductionProcess from '../components/ProductionProcess';
import QualityControl from '@/components/QualityControl';
import CoverImage from '@/components/CoverImage';
import Partners from '@/components/Partners';
import FAQ from '../components/FAQ';
import About from '../components/About';

const Home: NextPage = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    setIsMounted(true);

    if (typeof window !== 'undefined' && isMounted) {
      const bgElement = document.querySelector('.background-image');
      if (bgElement) {
        bgElement.classList.add('blur-animation');
      }
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isMounted]);

  return (
    <div className="relative w-full overflow-hidden">
      {/* Первый блок с блюром */}
      <div className="t-cover relative" style={{ height: '929px' }}>
        {/* Фоновое изображение с блюром */}
        <div 
          className="blur-animation absolute inset-0 bg-cover bg-center w-full h-full"
          style={{
            backgroundImage: 'url("https://static.tildacdn.com/tild3133-3935-4533-b831-306437663762/noroot.png")',
            transform: 'scale(1.1)',
          }}
        />
        
        {/* Затемнение */}
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: '-webkit-linear-gradient(top, rgba(51, 51, 51, 0.4), rgba(51, 51, 51, 0.4))'
          }}
        />

        {/* t-container */}
        <div className="container mx-auto">
          {/* t-col t-col_8 */}
          <div className="w-full lg:w-8/12">
            {/* t-cover__wrapper */}
            <div 
              className="flex items-center relative z-[1]"
              style={{ height: '929px' }}
            >
              <div className="t181 w-full">
                <div data-hook-content="covercontent">
                  <div className="t181__wrapper">
                    {/* Заголовок */}
                    <div className="t181__title">
                      <div 
                        className="text-center"
                        style={{ fontSize: '72px' }}
                      >
                        <span 
                          className="text-white font-normal"
                          style={{ 
                            color: 'rgb(255, 255, 255)', 
                            fontWeight: 400
                          }}
                        >
                          INNO LINK LLC
                        </span>
                      </div>
                    </div>

                    {/* Подзаголовок */}
                    <div className="t181__descr text-center mt-4">
                      <span 
                        className="text-[20px] text-white"
                        style={{ color: 'rgb(255, 255, 255)' }}
                      >
                        Технологии будущего, качество без компромиссов!
                      </span>
                    </div>

                    {/* Кнопки */}
                    <div className="t181__button-wrapper" style={{ marginTop: '60px' }}>
                      <div className="flex justify-center gap-5">
                        <a 
                          href="#rec928394316"
                          className="t-btn inline-flex items-center justify-center w-[200px] h-[60px] text-[#032a62] bg-white hover:bg-gray-100 transition-colors"
                        >
                          <span className="block w-full text-center">Продукты</span>
                        </a>
                        <a 
                          href="#rec933317711"
                          className="t-btn inline-flex items-center justify-center w-[200px] h-[60px] text-[#032a62] bg-white hover:bg-gray-100 transition-colors"
                        >
                          <span className="block w-full text-center">Контакты</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section id="about" className="py-16">
        <About />
      </section>

      <section id="key-directions">
        <KeyDirections />
      </section>

      <section id="advantages">
        <Advantages />
      </section>

      <section id="features">
        <Features />
      </section>

      <section id="products">
        <ProductGallery />
      </section>

      <section id="threaded-products">
        <ThreadedProducts />
      </section>

      <section id="spring-vents">
        <SpringVents />
      </section>

      <section id="research-development">
        <ResearchDevelopment />
      </section>

      <section id="production-process">
        <ProductionProcess />
      </section>


      <Partners />
      <FAQ />
    </div>
  );
};

export default Home; 