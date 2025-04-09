"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, ChangeEvent, useRef } from "react";
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

  const handleInputChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    field: string
  ) => {
    setFormData({ ...formData, [field]: event.target.value });
  };

  const handleSaveChanges = () => {
    console.log("Сохранение изменений:", formData);
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

  const handleImageUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (!file.type.match("image.*")) {
        alert("Пожалуйста, выберите файл изображения");
        return;
      }

      if (file.size > 5 * 1024 * 1024) {
        alert("Файл слишком большой. Максимальный размер - 5MB");
        return;
      }

      setIsUploading(true);

      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          setProfileImage(event.target.result as string);
          setIsUploading(false);
        }
      };
      reader.onerror = () => {
        setIsUploading(false);
        alert("Ошибка при загрузке изображения");
      };
      reader.readAsDataURL(file);
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
      <div className="bg-white overflow-hidden [background:linear-gradient(180deg,#f9fdfc_0%,#ffffff_100%)] w-[414px] h-[1000px] relative">
        <div className="absolute w-[626px] h-[2811px] top-0 left-[-105px]">
          {/* Градиентный слой */}
          <div className="absolute w-[415px] h-[2117px] top-0 left-[105px] [background:linear-gradient(180deg,#f9fdfc_0%,#ffffff_100%)]" />

          {/* Обновленная строка поиска и бургер-меню */}
          <header className="fixed top-0 left-0 right-0 bg-white z-10 pt-2.5 w-full flex justify-between items-center px-4">
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

            <button
              id="burger-button"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
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
          </header>

          {/* Затемнение фона */}
          <div
            className={`fixed top-0 left-0 w-full h-full bg-black z-10 transition-opacity duration-300 ${
              isMenuOpen ? "opacity-50" : "opacity-0 pointer-events-none"
            }`}
          ></div>

          {/* Заголовок */}
          <div className="absolute top-[165px] left-[124px] text-4xl font-semibold text-[#48B7F2]">
            НАСТРОЙКИ
          </div>

          {/* Исправленное таб-меню */}
          <div className="absolute top-[226px] left-[115px] w-[377px]">
            <div className="flex justify-between relative pb-2">
              {["account", "photo", "personal"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setSelectedTab(tab)}
                  className={`font-semibold text-base ${
                    selectedTab === tab ? "text-[#48B7F2]" : "text-neutral-300"
                  }`}
                >
                  {tab === "account"
                    ? "Аккаунт"
                    : tab === "photo"
                    ? "Фото"
                    : "Персональные настройки"}
                </button>
              ))}
            </div>

            {/* Подчеркивание */}
            <div className="relative h-1.5 w-full bg-gray-300 rounded-full">
              <div
                className={`absolute h-1.5 bg-[#48B7F2] rounded-full transition-all duration-300 ${
                  selectedTab === "account"
                    ? "left-0 w-[85px]"
                    : selectedTab === "photo"
                    ? "left-[100px] w-[50px]"
                    : "left-[180px] w-[195px]"
                }`}
              />
            </div>
          </div>

          {/* Содержимое вкладок */}
          {selectedTab === "account" && (
            <>
              <div className="top-[289px] left-[124px] font-semibold text-[#47b6f2] text-[32px] tracking-[0] absolute [font-family:'Inter',Helvetica] leading-[normal]">
                Аккаунт
              </div>

              <div className="top-[334px] left-[124px] font-medium text-[#47b6f2] text-2xl tracking-[0] absolute [font-family:'Inter',Helvetica] leading-[normal]">
                Информация об учетной записи
              </div>

              {/* Поля формы */}
              <div className="top-[380px] left-[124px] font-medium text-[#47b6f2] text-xl tracking-[0] whitespace-nowrap absolute [font-family:'Inter',Helvetica] leading-[normal]">
                Имя
              </div>
              <input
                value={formData.name}
                onChange={(e) => handleInputChange(e, "name")}
                className="flex bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm absolute w-[381px] h-10 top-[414px] left-[124px] rounded-[5px] border-2 border-solid border-[#47b6f2]"
                type="text"
                placeholder="Введите ваше имя"
              />

              <div className="absolute w-[57px] top-[470px] left-[124px] [font-family:'Inter',Helvetica] font-medium text-[#47b6f2] text-xl tracking-[0] leading-[normal]">
                Email
              </div>
              <input
                value={formData.email}
                onChange={(e) => handleInputChange(e, "email")}
                className="flex bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm absolute w-[381px] h-10 top-[504px] left-[124px] rounded-[5px] border-2 border-solid border-[#47b6f2]"
                type="email"
                placeholder="Введите ваш email"
              />

              <div className="w-[169px] top-[560px] left-[124px] font-medium text-[#47b6f2] text-xl tracking-[0] absolute [font-family:'Inter',Helvetica] leading-[normal]">
                Номер телефона
              </div>
              <div className="flex absolute top-[594px] left-[124px] gap-2 items-center">
                <input
                  value={formData.phoneNumber}
                  onChange={(e) => handleInputChange(e, "phoneNumber")}
                  className="flex bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm w-[87px] h-10 rounded-[5px] border-2 border-solid border-[#47b6f2]"
                  type="text"
                  placeholder="+7"
                />
                <input
                  value={formData.phoneNumber}
                  onChange={(e) => handleInputChange(e, "phoneNumber")}
                  className="flex bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm w-[286px] h-10 rounded-[5px] border-2 border-solid border-[#47b6f2]"
                  type="text"
                  placeholder="Введите номер"
                />
              </div>

              <div className="top-[650px] left-[124px] font-medium text-[#47b6f2] text-xl tracking-[0] whitespace-nowrap absolute [font-family:'Inter',Helvetica] leading-[normal]">
                Текущий пароль
              </div>
              <div className="absolute w-[381px] h-10 top-[684px] left-[124px] rounded-[5px] border-2 border-solid border-[#47b6f2] flex items-center">
                <input
                  value={formData.currentPassword}
                  onChange={(e) => handleInputChange(e, "currentPassword")}
                  type="password"
                  className="flex w-full rounded-md border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-neutral-300 placeholder:font-medium placeholder:text-[15px]"
                  placeholder="Пароль"
                />
              </div>

              <div className="top-[787px] left-[124px] font-medium text-[#47b6f2] text-xl tracking-[0] whitespace-nowrap absolute [font-family:'Inter',Helvetica] leading-[normal]">
                Новый пароль
              </div>
              <div className="absolute w-[381px] h-10 top-[821px] left-[124px] rounded-[5px] border-2 border-solid border-[#47b6f2] flex items-center">
                <input
                  value={formData.newPassword}
                  onChange={(e) => handleInputChange(e, "newPassword")}
                  type="password"
                  className="flex w-full rounded-md border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-neutral-300 placeholder:font-medium placeholder:text-[15px]"
                  placeholder="Пароль"
                />
              </div>

              <div className="absolute top-[906px] left-[124px]">
                <button
                  type="button"
                  onClick={handleSaveChanges}
                  className="rounded-[40px] bg-[#47b6f2] text-white w-[381px] h-[57px]"
                >
                  Сохранить изменения
                </button>
              </div>
            </>
          )}

          {selectedTab === "photo" && (
            <>
              <div className="top-[289px] left-[124px] font-semibold text-[#47b6f2] text-2xl absolute [font-family:'Inter',Helvetica] tracking-[0] leading-[normal]">
                Добавь фотографию профиля
              </div>

              <div className="w-[386px] top-[334px] left-[124px] font-medium text-[#47b6f2] text-xl absolute [font-family:'Inter',Helvetica] tracking-[0] leading-[normal]">
                У пользователей с фотографией в профиле шанс получить
                исправления ошибок в три раза выше
              </div>

              {/* Центрированный круг с фото (опущен на 30px) */}
              <div className="absolute w-[297px] h-[297px] top-[410px] left-[160px] bg-white rounded-full overflow-hidden border-2 border-[#47b6f2]">
                <Image
                  src={profileImage || ""}
                  alt=""
                  width={297}
                  height={297}
                  className="w-full h-full object-cover"
                />
              </div>

              <input
                type="file"
                ref={fileInputRef}
                onChange={handleImageUpload}
                accept="image/*"
                className="hidden"
              />

              {/* Центрированная кнопка (опущена на 30px) */}
              <div className="flex flex-col items-center absolute top-[730px] left-[205px] gap-3">
                <button
                  onClick={triggerFileInput}
                  disabled={isUploading}
                  className={`inline-flex items-center justify-center gap-2 whitespace-nowrap transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 shadow hover:bg-primary/90 px-4 py-2 w-[212px] h-10 bg-[#47b6f2] rounded-[5px] font-medium text-white text-[15px] [font-family:'Inter',Helvetica] ${
                    isUploading ? "opacity-50" : ""
                  }`}
                >
                  {isUploading ? (
                    "Загрузка..."
                  ) : (
                    <>
                      <FaUpload />
                      Добавить фотографию
                    </>
                  )}
                </button>

                {profileImage && (
                  <button
                    onClick={handleRemovePhoto}
                    className="flex items-center justify-center gap-2 text-[#FF3B30] font-medium"
                  >
                    <FaTrash />
                    Удалить фотографию
                  </button>
                )}
              </div>
            </>
          )}

          {selectedTab === "personal" && (
            <>
              <div className="top-[289px] left-[124px] font-semibold text-[#47b6f2] text-2xl absolute [font-family:'Inter',Helvetica] tracking-[0] leading-[normal]">
                Персональные настройки
              </div>

              <div className="absolute top-[334px] left-[124px] w-[381px] space-y-8">
                <div className="space-y-2">
                  <label className="font-medium text-[#47b6f2] text-xl [font-family:'Inter',Helvetica]">
                    Город
                  </label>
                  <div className="relative">
                    <input
                      className="flex w-full bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm h-10 rounded-[5px] border-2 border-solid border-[#47b6f2] pl-7"
                      value={formData.city}
                      onChange={(e) => handleInputChange(e, "city")}
                    />
                    <span className="absolute top-[10px] left-[30px] font-medium text-neutral-300 text-[15px] [font-family:'Inter',Helvetica]">
                      {formData.city ? "" : "Город"}
                    </span>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="font-medium text-[#47b6f2] text-xl [font-family:'Inter',Helvetica]">
                    Обо мне
                  </label>
                  <div className="relative">
                    <textarea
                      className="flex w-full bg-transparent px-3 py-2 text-base shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm min-h-[214px] rounded-[5px] border-2 border-solid border-[#47b6f2] pl-5 pt-3"
                      value={formData.about}
                      onChange={(e) => handleInputChange(e, "about")}
                    ></textarea>
                    <span className="absolute top-[10px] left-[33px] font-medium text-neutral-300 text-[15px] [font-family:'Inter',Helvetica]">
                      {formData.about ? "" : "Обо мне"}
                    </span>
                  </div>
                </div>

                <button
                  className="inline-flex items-center justify-center gap-2 whitespace-nowrap transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 shadow hover:bg-primary/90 px-4 py-2 bg-[#47b6f2] text-white h-10 w-[137px] rounded-[5px] font-medium text-[15px] [font-family:'Inter',Helvetica]"
                  type="button"
                  onClick={handleSaveChanges}
                >
                  Сохранить
                </button>
              </div>
            </>
          )}
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
    </div>
  );
}
