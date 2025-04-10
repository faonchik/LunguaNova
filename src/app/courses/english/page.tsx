"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, ChangeEvent, useRef, MouseEvent } from "react";

// Компонент поисковой строки
function SearchBar({
  searchQuery,
  handleSearch,
}: {
  searchQuery: string;
  handleSearch: (event: ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <div className="relative w-[312px] h-[60px] rounded-[40px] border border-solid border-[#48B7F2] bg-white">
      <input
        type="text"
        value={searchQuery}
        onChange={handleSearch}
        placeholder="Поиск..."
        className="w-full h-full pl-4 pr-10 rounded-[40px] text-[#48B7F2] outline-none"
      />
      <Image
        src="/assets/material-symbols_search.svg"
        alt="Поиск"
        width={24}
        height={24}
        className="absolute top-1/2 right-3 transform -translate-y-1/2"
      />
    </div>
  );
}

// Компонент бургер-меню с боковым меню
function BurgerMenu({
  isOpen,
  onToggle,
}: {
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <>
      <button
        id="burger-button"
        onClick={onToggle}
        className="flex flex-col justify-center items-center ml-4 space-y-1.5"
      >
        <div
          className={`w-8 h-1 bg-[#64d224] rounded-md transition-all duration-300 ${
            isOpen ? "rotate-45 translate-y-2" : ""
          }`}
        ></div>
        <div
          className={`w-8 h-1 bg-[#48B7F2] rounded-md transition-all duration-300 ${
            isOpen ? "opacity-0" : "opacity-100"
          }`}
        ></div>
        <div
          className={`w-8 h-1 bg-[#64d224] rounded-md transition-all duration-300 ${
            isOpen ? "-rotate-45 -translate-y-2" : ""
          }`}
        ></div>
      </button>

      {/* Боковое меню */}
      <div
        id="menu"
        className={`fixed top-0 right-0 h-full w-[60%] bg-white z-20 flex flex-col gap-[9px] transform transition-all duration-500 ${
          isOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full"
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
            /* Код выхода */
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
    </>
  );
}

export default function Settings() {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const handleSearch = (event: ChangeEvent<HTMLInputElement>): void => {
    setSearchQuery(event.target.value);
    console.log("Поиск:", event.target.value);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleClickOutside = (e: MouseEvent) => {
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
    <div
      className="bg-white flex flex-row justify-center w-full"
      onClick={handleClickOutside}
    >
      <div className="bg-white overflow-hidden [background:linear-gradient(180deg,#f9fdfc_0%,#ffffff_100%)] w-[414px] h-[3000px] relative">
        <div className="px-4 w-full">
          {/* Header с поиском и бургер-меню */}
          <header className="pt-2.5 w-full flex justify-between items-center">
            <SearchBar searchQuery={searchQuery} handleSearch={handleSearch} />
            <BurgerMenu isOpen={isMenuOpen} onToggle={toggleMenu} />
          </header>

          {/* Добавленные элементы курсов английского языка */}
          <div className="absolute w-[68px] h-[68px] top-[101px] left-5 rounded-[93.26px] overflow-hidden">
            <img
              className="w-full h-full"
              alt="UK flag"
              src="/assets/English.svg"
            />
          </div>

          <h1 className="absolute top-32 left-[119px] font-['Inter',Helvetica] font-bold text-[#47b6f2] text-3xl">
            Курсы: английский
          </h1>

          {/* Карточка полного курса */}
          <div
            className="border text-card-foreground shadow absolute w-[374px] h-[247px] left-5 bg-white rounded-[10px] overflow-hidden"
            style={{ top: "227px" }}
          >
            <div className="p-0 h-full relative">
              <img
                className="absolute w-[89px] h-[103px] top-5 left-5"
                alt="Английский: полный курс"
                src="/assets/English_1.svg"
              />
              <div className="absolute w-6 h-6 top-5 left-[134px] rounded-[32.91px] overflow-hidden">
                <img
                  className="w-full h-full"
                  alt="UK flag"
                  src="/assets/English_Small.svg"
                />
              </div>
              <div className="absolute top-[22px] left-44 font-['Inter',Helvetica] font-medium text-[#dcdcdc] text-sm">
                Уровень А1-В2
              </div>
              <div className="absolute w-[166px] top-[53px] left-[134px] font-['Inter',Helvetica] font-bold text-[#47b6f2] text-base">
                Английский: полный курс
              </div>
              <div className="absolute top-[131px] left-5 font-['Inter',Helvetica] font-medium text-[#dcdcdc] text-sm">
                Общий прогресс
              </div>
              <div className="absolute w-[324px] h-5 top-[157px] left-[25px]">
                <div className="absolute w-full h-2.5 top-[5px] left-0 bg-[#ededed] rounded-[5px]"></div>
                <div
                  className="absolute h-5 top-0 left-0 bg-[#47b6f2] rounded-[5px]"
                  style={{ width: "70.5px" }}
                >
                  <div className="absolute top-0 left-1.5 font-['Inter',Helvetica] font-bold text-white text-sm">
                    15%
                  </div>
                </div>
              </div>
              <button
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 text-primary-foreground shadow px-4 py-2 absolute h-[30px] top-[197px] right-[25px] bg-[#47b6f2] rounded-[5px] hover:bg-[#3da1db]"
                style={{ width: "127px" }}
              >
                <span className="font-['Inter',Helvetica] font-bold text-white text-sm">
                  продолжить
                </span>
              </button>
            </div>
          </div>

          {/* Карточка курса для путешествий */}
          <div
            className="border text-card-foreground shadow absolute w-[374px] h-[247px] left-5 bg-white rounded-[10px] overflow-hidden"
            style={{ top: "504px" }}
          >
            <div className="p-0 h-full relative">
              <img
                className="absolute w-[89px] h-[103px] top-5 left-5"
                alt="Английский для путешествий"
                src="/assets/English_2.svg"
              />
              <div className="absolute w-6 h-6 top-5 left-[134px] rounded-[32.91px] overflow-hidden">
                <img
                  className="w-full h-full"
                  alt="UK flag"
                  src="/assets/English_Small.svg"
                />
              </div>
              <div className="absolute top-[22px] left-44 font-['Inter',Helvetica] font-medium text-[#dcdcdc] text-sm">
                Уровень А1-А2
              </div>
              <div className="absolute w-[166px] top-[53px] left-[134px] font-['Inter',Helvetica] font-bold text-[#47b6f2] text-base">
                Английский для путешествий
              </div>
              <div className="absolute top-[131px] left-5 font-['Inter',Helvetica] font-medium text-[#dcdcdc] text-sm">
                Общий прогресс
              </div>
              <div className="absolute w-[324px] h-5 top-[157px] left-[25px]">
                <div className="absolute w-full h-2.5 top-[5px] left-0 bg-[#ededed] rounded-[5px]"></div>
              </div>
              <button
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 text-primary-foreground shadow px-4 py-2 absolute h-[30px] top-[197px] right-[25px] bg-[#47b6f2] rounded-[5px] hover:bg-[#3da1db]"
                style={{ width: "127px" }}
              >
                <span className="font-['Inter',Helvetica] font-bold text-white text-sm">
                  начать
                </span>
              </button>
            </div>
          </div>

          {/* Карточка английской грамматики */}
          <div
            className="border text-card-foreground shadow absolute w-[374px] h-[247px] left-5 bg-white rounded-[10px] overflow-hidden"
            style={{ top: "781px" }}
          >
            <div className="p-0 h-full relative">
              <img
                className="absolute w-[89px] h-[103px] top-5 left-5"
                alt="Английская грамматика"
                src="/assets/English_3.svg"
              />
              <div className="absolute w-6 h-6 top-5 left-[134px] rounded-[32.91px] overflow-hidden">
                <img
                  className="w-full h-full"
                  alt="UK flag"
                  src="/assets/English_Small.svg"
                />
              </div>
              <div className="absolute top-[22px] left-44 font-['Inter',Helvetica] font-medium text-[#dcdcdc] text-sm">
                Уровень А1
              </div>
              <div className="absolute w-[166px] top-[53px] left-[134px] font-['Inter',Helvetica] font-bold text-[#47b6f2] text-base">
                Английская грамматика
              </div>
              <div className="absolute top-[131px] left-5 font-['Inter',Helvetica] font-medium text-[#dcdcdc] text-sm">
                Общий прогресс
              </div>
              <div className="absolute w-[324px] h-5 top-[157px] left-[25px]">
                <div className="absolute w-full h-2.5 top-[5px] left-0 bg-[#ededed] rounded-[5px]"></div>
              </div>
              <button
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 text-primary-foreground shadow px-4 py-2 absolute h-[30px] top-[197px] right-[25px] bg-[#47b6f2] rounded-[5px] hover:bg-[#3da1db]"
                style={{ width: "127px" }}
              >
                <span className="font-['Inter',Helvetica] font-bold text-white text-sm">
                  начать
                </span>
              </button>
            </div>
          </div>

          {/* Четвертая карточка - Английский для начинающих */}
          <div
            className="border text-card-foreground shadow absolute w-[374px] h-[247px] left-5 bg-white rounded-[10px] overflow-hidden"
            style={{ top: "1058px" }}
          >
            <div className="p-0 h-full relative">
              <img
                className="absolute w-[89px] h-[103px] top-5 left-5"
                alt="Английский для начинающих"
                src="/assets/English_4.svg"
              />
              <div className="absolute w-6 h-6 top-5 left-[134px] rounded-[32.91px] overflow-hidden">
                <img
                  className="w-full h-full"
                  alt="UK flag"
                  src="/assets/English_Small.svg"
                />
              </div>
              <div className="absolute top-[22px] left-44 font-['Inter',Helvetica] font-medium text-[#dcdcdc] text-sm">
                Уровень А1
              </div>
              <div className="absolute w-[166px] top-[53px] left-[134px] font-['Inter',Helvetica] font-bold text-[#47b6f2] text-base">
                Английский для начинающих
              </div>
              <div className="absolute top-[131px] left-5 font-['Inter',Helvetica] font-medium text-[#dcdcdc] text-sm">
                Общий прогресс
              </div>
              <div className="absolute w-[324px] h-5 top-[157px] left-[25px]">
                <div className="absolute w-full h-2.5 top-[5px] left-0 bg-[#ededed] rounded-[5px]"></div>
              </div>
              <button
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 text-primary-foreground shadow px-4 py-2 absolute h-[30px] top-[197px] right-[25px] bg-[#47b6f2] rounded-[5px] hover:bg-[#3da1db]"
                style={{ width: "127px" }}
              >
                <span className="font-['Inter',Helvetica] font-bold text-white text-sm">
                  начать
                </span>
              </button>
            </div>
          </div>

          {/* Новый раздел: Онлайн занятия с преподавателем */}
          <div className="absolute w-[68px] h-[68px] top-[1335px] left-[25px] rounded-[93.26px] overflow-hidden">
            <img
              className="w-full h-full"
              alt="UK flag"
              src="/assets/English_Small.svg"
            />
          </div>

          <h2 className="absolute w-[275px] top-[1318px] left-[119px] font-['Inter',Helvetica] font-bold text-[#47b6f2] text-3xl">
            Онлайн занятия с преподавателем: английский
          </h2>

          {/* Остальные карточки... */}
          {/* Карточка бизнес-английского */}
          <div
            className="border text-card-foreground shadow absolute w-[374px] h-[247px] left-5 bg-white rounded-[10px] overflow-hidden"
            style={{ top: "1425px" }}
          >
            <div className="p-0 h-full relative">
              <img
                className="absolute w-24 h-[184px] top-[13px] left-5"
                alt="Бизнес-английский"
                src="/assets/English_5.svg"
              />
              <div className="absolute w-6 h-6 top-5 left-[129px] rounded-[32.91px] overflow-hidden">
                <img
                  className="w-full h-full"
                  alt="UK flag"
                  src="/assets/English_Small.svg"
                />
              </div>
              <div className="absolute top-[22px] left-[194px] font-['Inter',Helvetica] font-medium text-[#dcdcdc] text-sm">
                Уровень А1-С2
              </div>
              <div className="absolute w-[166px] top-[53px] left-[129px] font-['Inter',Helvetica] font-bold text-[#47b6f2] text-base">
                Бизнес-английский
              </div>
              <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 text-primary-foreground shadow px-4 py-2 absolute w-[127px] h-[30px] top-[197px] left-[197px] bg-[#47b6f2] rounded-[5px] hover:bg-[#3da1db]">
                <span className="font-['Inter',Helvetica] font-bold text-white text-sm">
                  выбрать
                </span>
              </button>
            </div>
          </div>

          {/* Карточка для подготовки к экзаменам */}
          <div
            className="border text-card-foreground shadow absolute w-[374px] h-[247px] left-5 bg-white rounded-[10px] overflow-hidden"
            style={{ top: "1702px" }}
          >
            <div className="p-0 h-full relative">
              <img
                className="absolute w-24 h-[184px] top-[13px] left-5"
                alt="Для подготовки к экзаменам"
                src="/assets/English_6.svg"
              />
              <div className="absolute w-6 h-6 top-5 left-[129px] rounded-[32.91px] overflow-hidden">
                <img
                  className="w-full h-full"
                  alt="UK flag"
                  src="/assets/English_Small.svg"
                />
              </div>
              <div className="absolute top-[22px] left-[194px] font-['Inter',Helvetica] font-medium text-[#dcdcdc] text-sm">
                Уровень А1-В2
              </div>
              <div className="absolute w-[166px] top-[53px] left-[129px] font-['Inter',Helvetica] font-bold text-[#47b6f2] text-base">
                Для подготовки к экзаменам
              </div>
              <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 text-primary-foreground shadow px-4 py-2 absolute w-[127px] h-[30px] top-[197px] left-[197px] bg-[#47b6f2] rounded-[5px] hover:bg-[#3da1db]">
                <span className="font-['Inter',Helvetica] font-bold text-white text-sm">
                  выбрать
                </span>
              </button>
            </div>
          </div>

          {/* Карточка английского для переезда и жизни */}
          <div
            className="border text-card-foreground shadow absolute w-[374px] h-[247px] left-5 bg-white rounded-[10px] overflow-hidden"
            style={{ top: "1979px" }}
          >
            <div className="p-0 h-full relative">
              <img
                className="absolute w-24 h-[184px] top-[13px] left-5"
                alt="Английский для переезда и жизни"
                src="/assets/English_7.svg"
              />
              <div className="absolute w-6 h-6 top-5 left-[129px] rounded-[32.91px] overflow-hidden">
                <img
                  className="w-full h-full"
                  alt="UK flag"
                  src="/assets/English_Small.svg"
                />
              </div>
              <div className="absolute top-[22px] left-[194px] font-['Inter',Helvetica] font-medium text-[#dcdcdc] text-sm">
                Уровень А1-С2
              </div>
              <div className="absolute w-[166px] top-[53px] left-[129px] font-['Inter',Helvetica] font-bold text-[#47b6f2] text-base">
                Английский для переезда и жизни
              </div>
              <div className="absolute left-[161px] top-[168px] font-['Inter',Helvetica] font-bold text-neutral-50 text-base">
                10
              </div>
              <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 text-primary-foreground shadow px-4 py-2 absolute w-[127px] h-[30px] top-[197px] left-[197px] bg-[#47b6f2] rounded-[5px] hover:bg-[#3da1db]">
                <span className="font-['Inter',Helvetica] font-bold text-white text-sm">
                  выбрать
                </span>
              </button>
            </div>
          </div>

          {/* Карточка английского для путешествий (преподаватель) */}
          <div
            className="border text-card-foreground shadow absolute w-[374px] h-[247px] left-5 bg-white rounded-[10px] overflow-hidden"
            style={{ top: "2256px" }}
          >
            <div className="p-0 h-full relative">
              <img
                className="absolute w-24 h-[184px] top-[13px] left-5"
                alt="Английский для путешествий"
                src="/assets/English_8.svg"
              />
              <div className="absolute w-6 h-6 top-5 left-[129px] rounded-[32.91px] overflow-hidden">
                <img
                  className="w-full h-full"
                  alt="UK flag"
                  src="/assets/English_Small.svg"
                />
              </div>
              <div className="absolute top-[22px] left-[194px] font-['Inter',Helvetica] font-medium text-[#dcdcdc] text-sm">
                Уровень А1-В2
              </div>
              <div className="absolute w-[166px] top-[53px] left-[129px] font-['Inter',Helvetica] font-bold text-[#47b6f2] text-base">
                Английский для путешествий
              </div>
              <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 text-primary-foreground shadow px-4 py-2 absolute w-[127px] h-[30px] top-[197px] left-[197px] bg-[#47b6f2] rounded-[5px] hover:bg-[#3da1db]">
                <span className="font-['Inter',Helvetica] font-bold text-white text-sm">
                  выбрать
                </span>
              </button>
            </div>
          </div>

          {/* Карточка английского для детей */}
          <div
            className="border text-card-foreground shadow absolute w-[374px] h-[247px] left-5 bg-white rounded-[10px] overflow-hidden"
            style={{ top: "2533px" }}
          >
            <div className="p-0 h-full relative">
              <img
                className="absolute w-24 h-[184px] top-[13px] left-5"
                alt="Английский для детей"
                src="/assets/English_9.svg"
              />
              <div className="absolute w-6 h-6 top-5 left-[129px] rounded-[32.91px] overflow-hidden">
                <img
                  className="w-full h-full"
                  alt="UK flag"
                  src="/assets/English_Small.svg"
                />
              </div>
              <div className="absolute top-[22px] left-[194px] font-['Inter',Helvetica] font-medium text-[#dcdcdc] text-sm">
                Уровень А1-С2
              </div>
              <div className="absolute w-[166px] top-[53px] left-[129px] font-['Inter',Helvetica] font-bold text-[#47b6f2] text-base">
                Английский для детей
              </div>
              <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 text-primary-foreground shadow px-4 py-2 absolute w-[127px] h-[30px] top-[197px] left-[197px] bg-[#47b6f2] rounded-[5px] hover:bg-[#3da1db]">
                <span className="font-['Inter',Helvetica] font-bold text-white text-sm">
                  выбрать
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
