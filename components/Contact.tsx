import React from 'react';

const Contact = () => {
  return (
    <div className="bg-[#002B5E] text-white py-16">
      <div className="max-w-[1200px] mx-auto px-4">
        <h2 className="text-center text-3xl mb-4">Контакты</h2>
        
        <div className="text-center mb-12">
          <p className="text-xl">У вас есть деловой запрос?</p>
          <p className="text-xl">Давайте обсудим!</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Левая колонка с контактами */}
          <div className="space-y-6">
            <div>
              <h3 className="font-bold mb-2">В России:</h3>
              <p>0710innolink@gmail.com</p>
              <p>+7 914 483 29 89</p>
              <p>www.inno-link.ru</p>
            </div>

            <div>
              <h3 className="font-bold mb-2">В Китае:</h3>
              <p>dk0122innolink@gmail.com</p>
              <p>+86 15618325803</p>
              <p>4008 Jintian Road, Futian District, Shenzhen, Guangdong</p>
            </div>

            <div className="flex gap-4">
              <a href="#" className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
                <span className="text-[#002B5E]">⭘</span>
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
                <span className="text-[#002B5E]">➜</span>
              </a>
            </div>
          </div>

          {/* Правая колонка с формой */}
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Имя"
              className="w-full p-3 rounded bg-white text-black"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 rounded bg-white text-black"
            />
            <input
              type="tel"
              placeholder="Телефон"
              className="w-full p-3 rounded bg-white text-black"
            />
            <input
              type="text"
              placeholder="Адрес сайта"
              className="w-full p-3 rounded bg-white text-black"
            />
            <textarea
              placeholder="Опишите суть запроса"
              className="w-full p-3 rounded bg-white text-black min-h-[100px]"
            />
            <button className="w-full p-3 bg-white text-[#002B5E] rounded font-medium hover:bg-gray-100 transition-colors">
              Отправить
            </button>
            <p className="text-sm text-gray-300">
              Нажимая "Отправить" вы даете согласие на обработку персональных данных
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact; 