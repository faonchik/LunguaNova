"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleClickOutside = (e: React.MouseEvent) => {
    const menu = document.getElementById("menu");
    const burgerButton = document.getElementById("burger-button");
    if (
      menu &&
      !menu.contains(e.target as Node) &&
      !burgerButton?.contains(e.target as Node)
    ) {
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="flex relative" onClick={handleClickOutside}>
      <div className="flex items-center">
        <Image
          src="/assets/Planet.svg"
          width={32}
          height={19}
          className="w-[300px] h-[300px]"
          alt="Menu"
          quality={100}
          priority
        />
        <button
          id="burger-button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="flex flex-col justify-center items-center ml-10 space-y-1.5 z-20 relative -top-[95px]"
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

      <div
        className={`fixed top-0 left-0 w-full h-full bg-black z-10 transition-opacity duration-300 ${
          isMenuOpen ? "opacity-50" : "opacity-0 pointer-events-none"
        }`}
      ></div>

      <div
        id="menu"
        className={`fixed top-0 right-0 h-full w-[60%] bg-white z-20 flex flex-col gap-[9px] mt-[0px] mr-[0px] transform transition-all duration-500 ${
          isMenuOpen
            ? "opacity-100 translate-x-0"
            : "opacity-0 translate-x-full"
        }`}
      >
        <Link href="/">
          <div className="flex items-center gap-2 p-4 border-b cursor-pointer">
            <Image
              src="/assets/Home.svg"
              width={24}
              height={24}
              alt="Главная"
              className="text-[#48B7F2]"
            />
            <span className="text-[#48B7F2]">Главная</span>
          </div>
        </Link>

        <Link href="/profile">
          <div className="flex items-center gap-2 p-4 border-b cursor-pointer">
            <Image
              src="/assets/Group.svg"
              width={24}
              height={24}
              alt="Профиль"
              className="text-[#64d224]"
            />
            <span className="text-[#48B7F2]">Профиль</span>
          </div>
        </Link>

        <Link href="/notifications">
          <div className="relative flex items-center gap-2 p-4 border-b cursor-pointer">
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
          </div>
        </Link>

        <Link href="/settings">
          <div className="flex items-center gap-2 p-4 border-b cursor-pointer">
            <Image
              src="/assets/Settings.svg"
              width={24}
              height={24}
              alt="Настройки"
              className="text-[#48B7F2]"
            />
            <span className="text-[#48B7F2]">Настройки</span>
          </div>
        </Link>

        <Link href="/help">
          <div className="flex items-center gap-2 p-4 border-b cursor-pointer">
            <Image
              src="/assets/Help.svg"
              width={24}
              height={24}
              alt="Помощь"
              className="text-[#64d224]"
            />
            <span className="text-[#48B7F2]">Помощь</span>
          </div>
        </Link>

        <Link href="/friends">
          <div className="flex items-center gap-2 p-4 border-b cursor-pointer">
            <Image
              src="/assets/Friend.svg"
              width={24}
              height={24}
              alt="Друзья"
              className="text-[#48B7F2]"
            />
            <span className="text-[#48B7F2]">Друзья</span>
          </div>
        </Link>

        <Link href="/courses">
          <div className="flex items-center gap-2 p-4 border-b cursor-pointer">
            <Image
              src="/assets/Courses.svg"
              width={24}
              height={24}
              alt="Курсы"
              className="text-[#64d224]"
            />
            <span className="text-[#48B7F2]">Курсы</span>
          </div>
        </Link>

        <button
          onClick={() => {
            /* Ваш код для выхода */
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
    </header>
  );
}
