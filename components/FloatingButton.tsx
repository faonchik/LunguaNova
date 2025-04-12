import { useState } from 'react';
import Image from 'next/image';

const FloatingButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-8 right-8 z-50">
      <div className="relative flex flex-col items-center">
        {/* Кнопки соц. сетей */}
        <div className={`absolute bottom-full mb-4 ${isOpen ? 'block' : 'hidden'}`}>
          <div className="flex flex-col gap-4 items-center">
            {/* Telegram */}
            <a
              href="https://t.me/INNO_LINK07"
              className="flex items-center group relative"
              target="_blank"
              rel="nofollow noopener noreferrer"
            >
              <span className="hidden group-hover:block whitespace-nowrap bg-gray-800 text-white text-xs py-1 px-2 rounded absolute right-full mr-2">
                Telegram
              </span>
              <div className="w-[50px] h-[50px] relative">
                <img
                  src="/assets/logos_telegram.svg"
                  alt="Telegram"
                  width={50}
                  height={50}
                  className="w-full h-full"
                />
              </div>
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/79144832989"
              className="flex items-center group relative"
              target="_blank"
              rel="nofollow noopener noreferrer"
            >
              <span className="hidden group-hover:block whitespace-nowrap bg-gray-800 text-white text-xs py-1 px-2 rounded absolute right-full mr-2">
                WhatsApp
              </span>
              <div className="w-[50px] h-[50px] relative">
                <img
                  src="/assets/logos_whatsapp-icon.svg"
                  alt="WhatsApp"
                  width={50}
                  height={50}
                  className="w-full h-full"
                />
              </div>
            </a>
          </div>
        </div>

        {/* Основная кнопка */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-[60px] h-[60px] bg-[#0088cc] rounded-full flex items-center justify-center shadow-lg hover:bg-[#0099dd] transition-colors focus:outline-none"
        >
          {!isOpen ? (
            <svg className="w-[35px] h-[32px]" viewBox="0 0 35 32" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M11.2667 12.6981H23.3667M11.2667 16.4717H23.3667M4.8104 23.5777C2.4311 21.1909 1 18.1215 1 14.7736C1 7.16679 8.38723 1 17.5 1C26.6128 1 34 7.16679 34 14.7736C34 22.3804 26.6128 28.5472 17.5 28.5472C15.6278 28.5472 13.8286 28.2868 12.1511 27.8072L12 27.7925L5.03333 31V23.8219L4.8104 23.5777Z"
                stroke="#FFFFFF"
                strokeWidth="2"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />
            </svg>
          ) : (
            <svg className="w-4 h-4" viewBox="0 0 23 23" xmlns="http://www.w3.org/2000/svg">
              <g fillRule="evenodd" fill="#FFFFFF">
                <path d="M10.314 -3.686H12.314V26.314H10.314z" transform="rotate(-45 11.314 11.314)"/>
                <path d="M10.314 -3.686H12.314V26.314H10.314z" transform="rotate(45 11.314 11.314)"/>
              </g>
            </svg>
          )}
        </button>
      </div>
    </div>
  );
};

export default FloatingButton; 