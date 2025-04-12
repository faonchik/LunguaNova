import { useEffect, useRef, useState } from 'react';

const steps = [
  {
    number: "1",
    title: "Проектирование",
    text: "анализ требований клиента, создание чертежей."
  },
  {
    number: "2",
    title: "Прототипирование",
    text: "изготовление и тестирование опытных образцов."
  },
  {
    number: "3",
    title: "Массовое производство",
    text: "выпуск продукции на высокоточном оборудовании."
  },
  {
    number: "4",
    title: "Контроль качества",
    text: "проверка каждой партии перед отправкой."
  }
];

const ProductionProcess = () => {
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
    <section id="production-process">
      <div className="t-rec py-[60px]">
        <div className="t1106">
          <div className="max-w-[1200px] mx-auto px-5">
            <div className="t-section__container mb-0">
              <div className="t-section__title text-center pb-[60px]">
                <div data-customstyle="yes" style={{ fontSize: '30px' }}>
                  Производственный процесс
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8" ref={componentRef}>
              {steps.map((step, index) => (
                <div 
                  key={index}
                  className={`t1106__col relative transform ${
                    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
                  } transition-all duration-700 ease-out text-center`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  <div className="t1106__numberwrapper relative mb-6">
                    <div className="t1106__number flex justify-center">
                      <div className="w-[38px] h-[38px] bg-[#333333] rounded-full relative z-10 flex items-center justify-center">
                        <div className="t1106__digit t-name t-name_xs text-white text-[17px] leading-[17px] font-normal">
                          {step.number}
                        </div>
                      </div>
                    </div>
                    {index < steps.length - 1 && (
                      <>
                        <div className="t1106__line hidden md:block absolute top-[19px] left-[50%] w-[260px] h-[2px] bg-[#e6e6e6]" />
                        <div className="t1106__line_mobile md:hidden absolute top-[38px] left-1/2 w-[2px] h-16 bg-[#e6e6e6] transform -translate-x-1/2" />
                      </>
                    )}
                  </div>
                  <div className="t1106__textwrapper text-center">
                    <div className="t1106__title text-[20px] font-bold mb-2">
                      {step.title}
                    </div>
                    <div className="t1106__text text-sm text-gray-600">
                      {step.text}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductionProcess; 