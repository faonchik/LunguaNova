"use client";

import { Inter } from "next/font/google";
import { SkillButton } from "./components/SkillButton";
import { LanguageCard } from "./components/LanguageCard";
import { FAQ } from "./components/FAQ";
import { RegistrationForm } from "./components/RegistrationForm";
import { skillButtonsData, languagesData, questions } from "./data";
import Image from "next/image";
import { useRef, useState, useEffect } from "react";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
});

export default function HomePage() {
  const registrationFormRef = useRef<HTMLDivElement>(null);
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const checkScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    };

    window.addEventListener('scroll', checkScroll);
    return () => window.removeEventListener('scroll', checkScroll);
  }, []);

  const scrollToRegistrationForm = () => {
    if (registrationFormRef.current) {
      registrationFormRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
      
      setTimeout(() => {
        const firstInput = registrationFormRef.current?.querySelector("input");
        if (firstInput) {
          (firstInput as HTMLInputElement).focus();
        }
      }, 1000);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <div
      className={`text-[#48B7F2] space-y-6 flex flex-col items-center ${inter.className} px-4 relative`}
      style={{ minHeight: "1054px" }}
    >
      {showScrollButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 w-12 h-12 bg-[#47b6f2] rounded-full flex items-center justify-center shadow-lg z-50
                    hover:bg-[#3aa0e0] transition-colors duration-200"
          aria-label="Наверх"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="white" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <path d="M18 15l-6-6-6 6"/>
          </svg>
        </button>
      )}

      <header className="space-y-4 flex flex-col items-center">
        <h3 className="text-[16px] font-medium uppercase tracking-wider">
          ЯЗЫКОВАЯ ОНЛАЙН-ШКОЛА
        </h3>
        <h1 className="text-[48px] font-extrabold leading-tight">Linguanova</h1>
      </header>

      <section className="flex items-center justify-center w-[328px]">
        <p className="text-[14px] font-normal text-center leading-relaxed">
          Занимайтесь{" "}
          <span className="font-extrabold">в группах или индивидуально</span> в
          удобном темпе и подходящем формате от 399₽ за урок
        </p>
      </section>

      <section className="flex flex-col items-center w-full">
        <button
          type="button"
          onClick={scrollToRegistrationForm}
          className="w-[328px] h-[70px] bg-[#47b6f2] rounded-[10px] text-white font-extrabold mb-4
                    hover:bg-[#3aa0e0] active:bg-[#2a8db4] transition-colors duration-200
                    focus:outline-none focus:ring-2 focus:ring-[#47b6f2] focus:ring-opacity-50"
          aria-label="Записаться на пробный урок"
        >
          ЗАПИСАТЬСЯ НА ПРОБНЫЙ УРОК
        </button>
        <p className="text-[14px] text-center w-[328px] leading-snug">
          Запишитесь сейчас и получите{" "}
          <span className="font-extrabold">3 бесплатных занятия в подарок</span>
        </p>
      </section>

      <section className="mt-6 w-full flex flex-col items-center">
        <h2 className="font-bold text-[16px] w-[268px] h-[34px] flex items-center justify-center text-center">
          ИНДИВИДУАЛЬНАЯ ПРОГРАММА
        </h2>
        <div className="mt-6 grid grid-cols-2 gap-4 justify-items-center">
          {skillButtonsData.map((button) => (
            <SkillButton key={button.id} {...button} />
          ))}
        </div>
      </section>

      <section className="mt-10 w-full flex flex-col items-center">
        <div className="w-[328px] h-[164px] bg-[#47b6f2] rounded-[10px] overflow-hidden shadow-lg">
          <div className="p-5">
            <h3 className="text-white font-bold text-base mb-2">
              ТОЛЬКО ЛУЧШИЕ ПРЕПОДАВАТЕЛИ
            </h3>
            <div className="relative w-full h-[100px]">
              <Image
                src="/assets/Certificates1.svg"
                alt="Сертификаты преподавателей"
                width={160}
                height={100}
                className="absolute left-0 top-0 object-cover"
              />
              <Image
                src="/assets/Certificates2.svg"
                alt="Дополнительные сертификаты"
                width={135}
                height={110}
                className="absolute left-[126px] top-[3px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="mt-10 w-full flex flex-col items-center">
        <h2 className="font-extrabold text-[24px] text-center mb-6">
          МЫ ПРЕПОДАЕМ:
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {languagesData.map((language) => (
            <LanguageCard key={language.id} {...language} />
          ))}
        </div>
      </section>

      <div ref={registrationFormRef}>
        <RegistrationForm />
      </div>
      
      <FAQ questions={questions} />
    </div>
  );
}