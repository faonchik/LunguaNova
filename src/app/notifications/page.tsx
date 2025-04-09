"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, ChangeEvent, useRef, MouseEvent } from "react";
import {
  FaUser,
  FaCog,
  FaQuestionCircle,
  FaUsers,
  FaBook,
  FaSignOutAlt,
  FaTrash,
  FaUpload,
} from "react-icons/fa";

// Компонент строки поиска
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

// Компонент бургер-меню
function BurgerMenu({
  isMenuOpen,
  toggleMenu,
}: {
  isMenuOpen: boolean;
  toggleMenu: () => void;
}) {
  return (
    <button
      id="burger-button"
      onClick={toggleMenu}
      className="flex flex-col justify-center items-center ml-4 space-y-1.5"
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
  );
}

// Основной компонент настроек
export default function Settings() {
  const [selectedTab, setSelectedTab] = useState<string>("account");
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    currentPassword: "",
    newPassword: "",
    city: "",
    about: "",
  });
  const [profileImage, setProfileImage] = useState<string | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleSearch = (event: ChangeEvent<HTMLInputElement>): void => {
    setSearchQuery(event.target.value);
    console.log("Поиск:", event.target.value);
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

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  const handleRemovePhoto = () => {
    setProfileImage(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  return (
    <div
      className="bg-white flex flex-row justify-center w-full"
      onClick={handleClickOutside}
    >
      <div className="bg-white overflow-hidden [background:linear-gradient(180deg,#f9fdfc_0%,#ffffff_100%)] w-[414px] h-[660px] relative">
        {/* Основной контент теперь находится внутри этого div с padding */}
        <div className="px-4 w-full">
          {/* Использование компонентов SearchBar и BurgerMenu */}
          <header className="pt-2.5 w-full flex justify-between items-center">
            <SearchBar searchQuery={searchQuery} handleSearch={handleSearch} />
            <BurgerMenu
              isMenuOpen={isMenuOpen}
              toggleMenu={() => setIsMenuOpen(!isMenuOpen)}
            />
          </header>

          {/* Промо-блок премиум версии с изображением */}
          <div className="mt-[60px] w-full flex flex-col items-center">
            <div className="w-full max-w-[396px] h-32 bg-[#47b6f2] rounded-[15px] relative p-4">
              {/* Изображение вместо белого квадрата */}
              <img
                src="/assets/Corona.svg" // Укажите правильный путь к вашему изображению
                alt="Премиум доступ"
                className="w-[70.83px] h-[63.75px] rounded object-cover"
              />

              <div className="absolute top-[18px] left-[104px] w-[214px] h-[23px] bg-[#34d788] rounded-[5px] flex items-center justify-center">
                <span className="text-white text-[10px] font-semibold font-['Inter']">
                  БЕСПЛАТНАЯ ПРОБНАЯ ВЕРСИЯ
                </span>
              </div>
              <div className="absolute top-[50px] left-[104px] text-white text-base font-semibold font-['Inter']">
                ПОПРОБУЙ ПРЕМИУМ БЕСПЛАТНО
              </div>
            </div>

            {/* Заголовок "Ваши уведомления" */}
            <h2 className="w-full max-w-[396px] mt-6 font-semibold text-[#47b6f2] text-2xl font-['Inter',Helvetica] tracking-[0] leading-normal">
              Ваши уведомления
            </h2>

            {/* Уведомления */}
            <div className="w-full max-w-[396px] flex flex-col gap-4 mt-4">
              {/* Первое уведомление */}
              <Link href="/notifications_2">
                {" "}
                {/* Добавленная ссылка */}
                <div className="border text-card-foreground shadow rounded-[10px] border-none bg-[#7cc3e9] hover:bg-[#6cb0d8] transition-colors cursor-pointer">
                  <div className="p-3 relative">
                    <div className="flex items-start">
                      <div className="w-20 h-20 bg-white rounded-[146.55px] overflow-hidden">
                        <img
                          className="w-20 h-20"
                          alt="Крапивкин Максим profile"
                          src="/assets/Photo_Maxim.svg"
                        />
                      </div>
                      <div className="ml-4 flex flex-col">
                        <span className="font-bold text-xl text-white font-['Inter',Helvetica] tracking-[0] leading-normal">
                          Крапивкин Максим
                        </span>
                        <span className="mt-6 text-base font-normal text-white font-['Inter',Helvetica] tracking-[0] leading-normal">
                          ему нужна помощь с упражнением
                        </span>
                      </div>
                    </div>
                    <div className="mt-2 text-base font-normal text-white font-['Inter',Helvetica] tracking-[0] leading-normal">
                      29 марта 2025 - 19:04
                    </div>
                  </div>
                </div>
              </Link>

              {/* Второе уведомление */}
              <Link href="/">
                {" "}
                {/* Добавленная ссылка */}
                <div className="border text-card-foreground shadow mb-5 rounded-[10px] border-none bg-[#d8d7d7] hover:bg-[#c8c7c7] transition-colors cursor-pointer">
                  <div className="p-3 relative">
                    <div className="flex items-start">
                      <div className="w-20 h-20 bg-white rounded-[146.55px] overflow-hidden">
                        <img
                          className="w-20 h-20 object-cover"
                          alt="НеЛыси попи profile"
                          src="/assets/Ne_lysi_popi.svg"
                        />
                      </div>
                      <div className="ml-4 flex flex-col">
                        <span className="font-bold text-xl text-white font-['Inter',Helvetica] tracking-[0] leading-normal">
                          НеЛыси попи
                        </span>
                        <span className="mt-6 text-base font-normal text-white font-['Inter',Helvetica] tracking-[0] leading-normal">
                          ему нужна помощь с упражнением
                        </span>
                      </div>
                    </div>
                    <div className="mt-2 text-base font-normal text-white font-['Inter',Helvetica] tracking-[0] leading-normal">
                      29 марта 2025 - 19:04
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Боковое меню */}
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
    </div>
  );
}
