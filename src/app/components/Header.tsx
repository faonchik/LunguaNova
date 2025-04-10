"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [rotation, setRotation] = useState(0);
  const [teachersExpanded, setTeachersExpanded] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const burgerRef = useRef<HTMLButtonElement>(null);

  // Анимация вращения планеты (медленная)
  useEffect(() => {
    const animationFrame = requestAnimationFrame(() => {
      setRotation((prev) => (prev + 0.1) % 1280);
    });
    return () => cancelAnimationFrame(animationFrame);
  }, [rotation]);

  // Закрытие меню при клике вне его области
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        burgerRef.current &&
        !burgerRef.current.contains(event.target as Node)
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleTeachers = () => {
    setTeachersExpanded(!teachersExpanded);
  };

  return (
    <>
      {/* Планета в левом верхнем углу */}
      <div className=" top-0 left-0 z-0 mt-10">
        <div
          className="relative w-[400px] h-[400px] -mt-[200px] -ml-[200px]"
          style={{
            transform: `rotate(${rotation}deg)`,
            transition: "transform 0.1s linear",
          }}
        >
          <Image
            src="/assets/Planeta.svg"
            width={400}
            height={400}
            alt="Planet"
            quality={100}
            priority
            className="absolute top-0 left-0"
          />
        </div>
      </div>

      {/* Основное содержимое */}
      <div className="relative z-10">
        {/* Бургер-меню в правом верхнем углу (поднят выше) */}
        <div className="flex justify-end">
          <button
            ref={burgerRef}
            id="burger-button"
            onClick={toggleMenu}
            className="absolute top-[-200px] right-6 flex flex-col justify-center items-center space-y-1.5"
          >
            <div
              className={`w-8 h-1 bg-[#64d224] rounded-md transition-all duration-300 ${
                isMenuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            ></div>
            <div
              className={`w-8 h-1 bg-[#48B7F2] rounded-md transition-all duration-300 ${
                isMenuOpen ? "opacity-0" : "opacity-100"
              }`}
            ></div>
            <div
              className={`w-8 h-1 bg-[#64d224] rounded-md transition-all duration-300 ${
                isMenuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            ></div>
          </button>
        </div>

        {/* Затемнение фона при открытом меню */}
        <div
          className={`fixed top-0 left-0 w-full h-full bg-black z-10 transition-opacity duration-300 ${
            isMenuOpen ? "opacity-50" : "opacity-0 pointer-events-none"
          }`}
        ></div>

        {/* Само меню */}
        <div
          ref={menuRef}
          id="menu"
          className={`fixed top-0 right-0 h-full w-[60%] bg-white z-20 flex flex-col gap-[9px] mt-[0px] mr-[0px] transform transition-all duration-500 ${
            isMenuOpen
              ? "opacity-100 translate-x-0"
              : "opacity-0 translate-x-full"
          }`}
        >
          <Link href="/" legacyBehavior>
            <a className="flex items-center gap-2 p-4 border-b cursor-pointer">
              <Image
                src="/assets/Home.svg"
                width={24}
                height={24}
                alt="Главная"
                className="text-[#48B7F2]"
              />
              <span className="text-[#48B7F2]">Главная</span>
            </a>
          </Link>

          <Link href="/profile" legacyBehavior>
            <a className="flex items-center gap-2 p-4 border-b cursor-pointer">
              <Image
                src="/assets/Group.svg"
                width={24}
                height={24}
                alt="Профиль"
                className="text-[#64d224]"
              />
              <span className="text-[#48B7F2]">Профиль</span>
            </a>
          </Link>

          {/* Разворачивающийся раздел Преподаватели */}
          <div className="border-b">
            <div
              className="flex items-center justify-between gap-2 p-4 cursor-pointer"
              onClick={toggleTeachers}
            >
              <div className="flex items-center gap-2">
                <Image
                  src="/assets/mdi_teacher.svg"
                  width={24}
                  height={24}
                  alt="Преподаватели"
                  className="text-[#64d224]"
                />
                <span className="text-[#48B7F2]">Преподаватели</span>
              </div>
              <svg
                className={`w-5 h-5 text-[#48B7F2] transition-transform duration-200 ${
                  teachersExpanded ? "rotate-180" : ""
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>

            {/* Подменю языков */}
            <div
              className={`overflow-hidden transition-all duration-200 ${
                teachersExpanded ? "max-h-32" : "max-h-0"
              }`}
            >
              <Link href="/teachers_english" legacyBehavior>
                <a className="flex items-center gap-2 pl-12 pr-4 py-2 cursor-pointer hover:bg-gray-50">
                  <Image
                    src="/assets/English_Small.svg"
                    width={20}
                    height={20}
                    alt="Английский"
                  />
                  <span className="text-[#48B7F2]">Английский</span>
                </a>
              </Link>
              <Link href="/teachers/chinese" legacyBehavior>
                <a className="flex items-center gap-2 pl-12 pr-4 py-2 cursor-pointer hover:bg-gray-50">
                  <Image
                    src="/assets/Chine_Small.svg"
                    width={20}
                    height={20}
                    alt="Китайский"
                  />
                  <span className="text-[#48B7F2]">Китайский</span>
                </a>
              </Link>
            </div>
          </div>

          <Link href="/notifications" legacyBehavior>
            <a className="relative flex items-center gap-2 p-4 border-b cursor-pointer">
              <div className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20px"
                  height="20px"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#48B7F2"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                  <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
                </svg>
                <span className="text-[#48B7F2]">Уведомления</span>
              </div>
              <span className="absolute -top-1 right-16 bg-red-500 text-white text-sm font-bold rounded-full h-6 w-6 flex items-center justify-center transform translate-y-1/4">
                +1
              </span>
            </a>
          </Link>

          <Link href="/settings" legacyBehavior>
            <a className="flex items-center gap-2 p-4 border-b cursor-pointer">
              <Image
                src="/assets/Settings.svg"
                width={24}
                height={24}
                alt="Настройки"
                className="text-[#48B7F2]"
              />
              <span className="text-[#48B7F2]">Настройки</span>
            </a>
          </Link>

          <Link href="/help" legacyBehavior>
            <a className="flex items-center gap-2 p-4 border-b cursor-pointer">
              <Image
                src="/assets/Help.svg"
                width={24}
                height={24}
                alt="Помощь"
                className="text-[#64d224]"
              />
              <span className="text-[#48B7F2]">Помощь</span>
            </a>
          </Link>

          <Link href="/friends" legacyBehavior>
            <a className="flex items-center gap-2 p-4 border-b cursor-pointer">
              <Image
                src="/assets/Friend.svg"
                width={24}
                height={24}
                alt="Друзья"
                className="text-[#48B7F2]"
              />
              <span className="text-[#48B7F2]">Друзья</span>
            </a>
          </Link>

          <Link href="/courses" legacyBehavior>
            <a className="flex items-center gap-2 p-4 border-b cursor-pointer">
              <Image
                src="/assets/Courses.svg"
                width={24}
                height={24}
                alt="Курсы"
                className="text-[#64d224]"
              />
              <span className="text-[#48B7F2]">Курсы</span>
            </a>
          </Link>

          <button
            onClick={() => {
              /* Логика выхода */
            }}
            className="flex items-center gap-2 p-4 cursor-pointer"
          >
            <Image
              src="/assets/Exxit.svg"
              width={24}
              height={24}
              alt="Выход"
              className="text-[#64d224]"
            />
            <span className="text-[#48B7F2]">Выход</span>
          </button>
        </div>
      </div>
    </>
  );
}