import { useEffect, useRef, useState } from 'react';

const Features: React.FC = () => {
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

  const features = [
    {
      title: 'Выгодная цена',
      description: 'Собственное производство позволяет нам снизить издержки и предлагать конкурентоспособные цены без посредников.'
    },
    {
      title: 'Гарантированное качество',
      description: 'Многолетний опыт, строгий контроль на всех этапах производства и ручная проверка каждой детали более чем 100 специалистами обеспечивают высокое качество продукции.'
    },
    {
      title: 'Высокая скорость',
      description: 'Благодаря современным технологиям и эффективной логистике, мы обеспечиваем своевременную доставку и оперативное производство для наших партнеров по всему миру.'
    }
  ];

  return (
    <div 
      id="rec919469674" 
      className="r t-rec t-rec_pt_60 t-rec_pb_60" 
      style={{ paddingTop: '60px', paddingBottom: '60px' }}
      ref={sectionRef}
    >
      <div className="t1050">
        <ul role="list" className="t1050__container t-list__container_inrow3 t-container">
          {features.map((feature, index) => (
            <li 
              key={index}
              className={`t1050__col t-list__item t-col t-col_4 t-item t-animate ${index === 0 ? 't-animate__chain_first-in-row' : ''} ${isVisible ? 't-animate_started t-animate__chain_showed' : ''}`}
              data-animate-style="fadeinleft"
              data-animate-chain="yes"
              style={{ transitionDelay: `${index * 0.16}s` }}
            >
              <div 
                className={`t-heading t-heading_lg t-animate ${isVisible ? 't-animate_started' : ''}`}
                data-animate-style="animatednumber"
                style={{ fontSize: '20px' }}
              >
                <div style={{ fontSize: '20px' }} data-customstyle="yes">
                  <strong>{feature.title}</strong>
                </div>
              </div>
              <div 
                className="t-divider t1050__line" 
                style={{ borderTopColor: '#032a62' }}
              />
              <div className="t-descr t-descr_sm">
                <div style={{ fontSize: '16px' }} data-customstyle="yes">
                  {feature.description}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <style>
        {`
          #rec919469674 .t1050__col .t-heading { font-size: 22px; }
          #rec919469674 .t1050__col .t-descr { font-size: 16px; }
        `}
      </style>
    </div>
  );
};

export default Features; 