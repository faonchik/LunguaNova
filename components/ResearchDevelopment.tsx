import { useEffect, useRef, useState } from 'react';

const ResearchDevelopment = () => {
  const [isVisible, setIsVisible] = useState(false);
  const componentRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.1
      }
    );

    if (componentRef.current) {
      observer.observe(componentRef.current);
    }

    return () => {
      if (componentRef.current) {
        observer.unobserve(componentRef.current);
      }
    };
  }, []);

  return (
    <div className="t477">
      <div className="t-container">
        <table className="w-full border-collapse">
          <tbody>
            <tr>
              {/* Левая колонка с изображением */}
              <td 
                className="t477__top t477__col align-top w-1/2" 
                itemScope 
                itemType="http://schema.org/ImageObject"
              >
                <meta itemProp="image" content="https://static.tildacdn.com/tild6139-3733-4238-b161-383832346363/WhatsApp_Image_2025-.jpeg" />
                <div 
                  className="t477__blockimg t-bgimg"
                  style={{
                    backgroundImage: 'url(https://static.tildacdn.com/tild6139-3733-4238-b161-383832346363/WhatsApp_Image_2025-.jpeg)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center center',
                    height: '571px',
                    width: '560px'
                  }}
                />
              </td>

              {/* Правая колонка с текстом */}
              <td 
                className="t477__col align-top w-1/2"
                itemScope 
                itemType="http://schema.org/ImageObject"
                ref={componentRef}
              >
                <div 
                  className="t477__textwrapper t-align_left"
                  style={{
                    backgroundColor: '#032a62',
                    height: '571px',
                    width: '560px'
                  }}
                >
                  <div className="t477__content t-valign_middle h-full flex items-center">
                    <div className="t477__box p-12">
                      <div 
                        className={`t477__title t-title t-title_xs ${
                          isVisible ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
                        } transition-all duration-700 ease-out`}
                      >
                        <div className="text-[30px] leading-[30px] text-white">
                          <strong>Исследования и разработки</strong>
                        </div>
                      </div>

                      <div 
                        className={`t-divider t477__line my-6 ${
                          isVisible ? 'opacity-60' : 'opacity-0'
                        } transition-all duration-700 ease-out delay-300`}
                        style={{
                          backgroundColor: '#ffffff',
                          height: '2px',
                          width: '64px'
                        }}
                      />

                      <div 
                        className={`t477__descr t-descr t-descr_md text-white ${
                          isVisible ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
                        } transition-all duration-700 ease-out delay-300`}
                      >
                        <div className="text-[20px]">
                          Наш <strong>исследовательский центр</strong> использует передовое 
                          программное обеспечение для проектирования продукции с учетом 
                          требований клиента. Все изделия проходят моделирование, тест-драйв 
                          и анализ с клиентом перед запуском в массовое производство. 
                          <strong> Мы создаем инновационные решения, соответствующие мировым 
                          стандартам.</strong>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ResearchDevelopment; 