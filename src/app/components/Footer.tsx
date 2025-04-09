import Link from 'next/link';
import Image from 'next/image';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function Footer() {
  const socialNetworks = [
    { 
      name: 'Telegram',
      icon: '/assets/Telegram.svg',
      url: 'https://t.me/yourchannel'
    },
    { 
      name: 'ВКонтакте',
      icon: '/assets/Vk.svg',
      url: 'https://vk.com/yourpage'
    },
    { 
      name: 'Twitter',
      icon: '/assets/Twitter.svg',
      url: 'https://twitter.com/yourprofile'
    }
  ];

  return (
    <footer className={`bg-[#48B7F2] text-white pt-12 px-4 relative overflow-hidden ${inter.className}`}>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 pb-[280px] text-center">
        
        {/* Колонка 1: Контакты */}
        <div className="space-y-4 flex flex-col items-center">
          <h3 className="text-[24px] font-extrabold uppercase">СВЯЖИТЕСЬ С НАМИ</h3>
          <p className="text-[16px] font-semibold">Для текстовых сообщений</p>
          <a href="tel:+79999999999" className="block text-[20px] font-semibold hover:underline">
            +7 (999) 999 99 99
          </a>
        </div>

        {/* Колонка 2: Адрес */}
        <div className="space-y-4 flex flex-col items-center">
          <h3 className="text-[24px] font-extrabold uppercase">Как нас найти</h3>
          <p className="text-[20px] font-semibold">
            Вот так пойдешь, потом вот так<br />
            вот так вотак вот так<br />
            пойдешь(адрес)
          </p>
        </div>

        {/* Колонка 3: База знаний */}
        <div className="space-y-4 flex flex-col items-center">
          <h3 className="text-[24px] font-extrabold uppercase">БАЗА ЗНАНИЙ</h3>
          <div className="flex flex-col items-center">
            <div className="flex flex-wrap gap-4 text-[20px] font-semibold mb-2 justify-center">
              <Link href="#" className="hover:underline">Блог</Link>
              <Link href="#" className="hover:underline">Вебинары</Link>
              <Link href="#" className="hover:underline">Книги</Link>
            </div>
            <div className="flex flex-wrap gap-4 text-[20px] font-semibold justify-center">
              <Link href="#" className="hover:underline">Подкасты</Link>
              <Link href="#" className="hover:underline">Тесты на уровень</Link>
            </div>
          </div>
        </div>

        {/* Колонка 4: Информация + Соцсети */}
        <div className="space-y-6 flex flex-col items-center">
          <div className="space-y-4 flex flex-col items-center">
            <h3 className="text-[24px] font-extrabold uppercase">ИНФОРМАЦИЯ</h3>
            <div className="space-y-2 text-[20px] font-semibold">
              <Link href="#" className="block hover:underline">Вопросы и ответы</Link>
              <Link href="#" className="block hover:underline">Политика конфиденциальности</Link>
              <Link href="#" className="block hover:underline">Юридическая информация</Link>
            </div>
          </div>

          <div className="space-y-4 flex flex-col items-center">
            <h3 className="text-[24px] font-extrabold uppercase">СОЦИАЛЬНЫЕ СЕТИ</h3>
            <div className="flex gap-4 justify-center">
              {socialNetworks.map((social) => (
                <Link 
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-80 flex items-center justify-center"
                >
                  <div 
                    className=" rounded-full flex items-center justify-center" 
                    style={{ width: '40px', height: '40px' }}
                  >
                    <Image
                      src={social.icon}
                      alt={social.name}
                      width={40}
                      height={40}
                      className=""
                    />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Планета с отступом 30px */}
      <div className="absolute top-[calc(100%-250px)] left-0 right-0 w-full h-[300px] z-0">
        <div className="relative w-full h-full">
          <Image
            src="/assets/PlanetFooter.svg"
            alt="Планета"
            fill
            className="object-cover object-top"
          />
        </div>
      </div>
    </footer>
  );
}