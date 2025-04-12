import { useState } from 'react';

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    id: "accordion1",
    question: "Какие отрасли обслуживает INNO LINK LLC?",
    answer: "Мы работаем с автомобильной, судостроительной и полупроводниковой промышленностью, поставляя высокотехнологичные компоненты."
  },
  {
    id: "accordion2",
    question: "Можно ли заказать индивидуальные решения?",
    answer: "Да, мы разрабатываем и производим кастомизированные изделия под требования заказчика."
  },
  {
    id: "accordion3",
    question: "Как осуществляется контроль качества?",
    answer: "Контроль включает многоступенчатую проверку на всех этапах производства, а также тестирование готовой продукции."
  },
  {
    id: "accordion4",
    question: "Как связаться с INNO LINK LLC?",
    answer: "Вы можете написать нам в телеграмм или ватсап. Подробности ниже."
  }
];

const FAQ = () => {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <div className="py-[60px]">
      <div className="container mx-auto max-w-[1200px]">
        {/* Заголовок */}
        <div className="text-center mb-[90px]">
          <h2 className="text-[30px] font-normal">
            Часто задаваемые вопросы (FAQ)
          </h2>
        </div>

        {/* Аккордеон */}
        <div className="max-w-[800px] mx-auto">
          {faqItems.map((item) => (
            <div key={item.id} className="mb-1">
              <div className="border-t border-[#eee]">
                <button
                  type="button"
                  className="w-full py-4 px-6 flex justify-between items-center hover:text-[#032a62] transition-colors"
                  onClick={() => setOpenId(openId === item.id ? null : item.id)}
                  aria-expanded={openId === item.id}
                  aria-controls={item.id}
                >
                  <span className="text-[20px] font-bold text-left">
                    {item.question}
                  </span>
                  <svg
                    className={`w-[40px] h-[40px] transition-transform ${
                      openId === item.id ? 'rotate-45' : ''
                    }`}
                    viewBox="0 0 40 40"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="20" cy="20" r="20" className="fill-current" />
                    <g className="stroke-white" strokeWidth="2" fill="none">
                      <path d="M9 20H31" />
                      <path d="M20 9V31" />
                    </g>
                  </svg>
                </button>
              </div>
              
              {/* Контент */}
              <div
                id={item.id}
                className={`overflow-hidden transition-all duration-300 ${
                  openId === item.id ? 'max-h-[500px] py-4 px-6' : 'max-h-0'
                }`}
              >
                <div className="text-[20px]">
                  {item.answer}
                </div>
              </div>
            </div>
          ))}
          <div className="border-t border-[#eee]"></div>
        </div>
      </div>
    </div>
  );
};

export default FAQ; 