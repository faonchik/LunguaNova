"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

interface Teacher {
  name: string;
  experience: string;
  level: string;
  image: string;
}

export default function Footer() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [teachersExpanded, setTeachersExpanded] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTeacher, setSelectedTeacher] = useState<Teacher | null>(null);
  const [showTeacherForm, setShowTeacherForm] = useState(false);
  const [showFindTeacherForm, setShowFindTeacherForm] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const burgerRef = useRef<HTMLButtonElement>(null);
  const formRef = useRef<HTMLDivElement>(null);

  const teachers: Teacher[] = [
    {
      name: "Дэниал",
      experience: "8 лет",
      level: "C2",
      image: "/assets/Danka.svg",
    },
    {
      name: "Руперт",
      experience: "5 лет",
      level: "C2",
      image: "/assets/Rupert.svg",
    },
    {
      name: "Эмма",
      experience: "10 лет",
      level: "C2",
      image: "/assets/Emma.svg",
    },
  ];

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

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

  const handleSelectTeacher = (teacher: Teacher) => {
    setSelectedTeacher(teacher);
    setShowTeacherForm(true);
    setShowFindTeacherForm(false);

    requestAnimationFrame(() => {
      const element = formRef.current;
      if (element) {
        const yOffset = -45; // Небольшое смещение вверх
        const y =
          element.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    });
  };

  const handleFindTeacher = () => {
    setSelectedTeacher(null);
    setShowTeacherForm(false);
    setShowFindTeacherForm(true);

    requestAnimationFrame(() => {
      const element = formRef.current;
      if (element) {
        const yOffset = -80; // Смещение для формы подбора преподавателя
        const y =
          element.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    });
  };

  const handleCloseForms = () => {
    setShowTeacherForm(false);
    setShowFindTeacherForm(false);
  };

  return (
    <div className="relative min-h-[2500px]">
      {/* Header с поиском и бургер-меню */}
      <header className="fixed top-0 left-0 right-0 bg-white z-30 h-[75px] w-full flex justify-between items-center px-4 shadow-sm">
        {/* Строка поиска */}
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

        {/* Бургер-меню */}
        <button
          ref={burgerRef}
          id="burger-button"
          onClick={toggleMenu}
          className="flex flex-col justify-center items-center ml-4 space-y-1.5"
        >
          <div
            className={`w-8 h-1 bg-[#64d224] rounded-md transition-all duration-300 ${
              isMenuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <div
            className={`w-8 h-1 bg-[#48B7F2] rounded-md transition-all duration-300 ${
              isMenuOpen ? "opacity-0" : "opacity-100"
            }`}
          />
          <div
            className={`w-8 h-1 bg-[#64d224] rounded-md transition-all duration-300 ${
              isMenuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </header>

      {/* Затемнение фона при открытом меню */}
      <div
        className={`fixed top-0 left-0 w-full h-full bg-black z-40 transition-opacity duration-300 ${
          isMenuOpen ? "opacity-50" : "opacity-0 pointer-events-none"
        }`}
      />

      {/* Боковое меню */}
      <div
        ref={menuRef}
        className={`fixed top-0 right-0 h-full w-[60%] bg-white z-50 flex flex-col gap-[9px] transform transition-all duration-500 ${
          isMenuOpen
            ? "opacity-100 translate-x-0"
            : "opacity-0 translate-x-full"
        }`}
      >
        {/* ... существующее меню ... */}
      </div>

      {/* Основное содержимое страницы */}
      <div className="pt-[80px] px-4 flex flex-col items-center">
        {/* Блок курса китайского для переезда */}
        <div className="bg-[#47b6f2] rounded-[15px] p-6 mb-8 w-full max-w-[400px] text-center">
          <div className="pt-1.5 pb-0">
            <h1 className="font-bold text-white text-[40px] font-['Inter',Helvetica]">
              КИТАЙСКИЙ
            </h1>
          </div>

          <div className="mt-6 bg-[#f2f2f2] rounded-[10px] py-3 px-5 mx-auto w-full max-w-[350px]">
            <h2 className="font-bold text-[#47b6f2] text-[40px] font-['Inter',Helvetica]">
              ДЛЯ ПЕРЕЕЗДА
            </h2>
          </div>

          <div className="mt-4 px-4">
            <p className="font-medium text-white text-base font-['Inter',Helvetica] leading-normal">
              Для тех, кто планирует переезд в новую страну и хочет уверенно
              чувствовать себя в любой жизненной ситуации: от похода в магазин
              до подачи документов в госучреждения.
            </p>
          </div>

          <div className="w-[182px] h-[182px] mx-auto mt-6">
            <Image
              src="/assets/image 24.svg"
              alt="Chinese language student"
              width={182}
              height={182}
              className="w-full h-full object-cover"
              priority
            />
          </div>
        </div>

        {/* Кнопка "Записаться на пробный урок" */}
        <div className="flex justify-center my-8 w-full">
          <button className="flex items-center justify-center h-[70px] w-[250px] rounded-[5px] bg-[#47b6f2] border-2 border-solid border-white hover:bg-[#3da1db] transition-colors">
            <span className="font-bold text-white text-[18px] font-['Inter',Helvetica]">
              ЗАПИСАТЬСЯ НА ПРОБНЫЙ УРОК
            </span>
          </button>
        </div>

        {/* Карточки преподавателей */}
        <div className="w-full max-w-[374px] bg-white rounded-[15px] p-6 shadow-md mb-4">
          <h3 className="text-[#47b6f2] text-xl font-bold mb-4">
            Наши преподаватели
          </h3>

          {teachers.map((teacher, index) => (
            <div
              key={index}
              className="flex items-center justify-between space-x-4 mb-4"
            >
              <div className="flex items-center space-x-4 flex-1">
                <div className="w-16 h-16 rounded-full overflow-hidden">
                  <Image
                    src={teacher.image}
                    alt={teacher.name}
                    width={64}
                    height={64}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold">{teacher.name}</h4>
                  <p className="text-sm">
                    Опыт преподавания: {teacher.experience}
                  </p>
                  <p className="text-sm text-[#47b6f2]">
                    Уровень языка: {teacher.level}
                  </p>
                </div>
              </div>
              <button
                onClick={() => handleSelectTeacher(teacher)}
                className="bg-[#47b6f2] text-white px-4 py-2 rounded-[5px] hover:bg-[#3da1db] transition-colors"
              >
                Выбрать
              </button>
            </div>
          ))}

          <button
            onClick={handleFindTeacher}
            className="w-full mt-4 bg-[#47b6f2] text-white py-3 rounded-[5px] hover:bg-[#3da1db] transition-colors font-bold"
          >
            Подбор учителя
          </button>
        </div>

        {/* Форма для выбранного преподавателя */}
        {showTeacherForm && (
          <div
            ref={formRef}
            className="w-full max-w-[374px] bg-white rounded-[15px] p-6 shadow-md mb-4"
          >
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-[#47b6f2] text-[38px] font-bold">
                ОСТАВЬТЕ ЗАЯВКУ
              </h3>
              <button
                onClick={handleCloseForms}
                className="text-[#47b6f2] text-xl"
              >
                ×
              </button>
            </div>

            <div className="mb-4">
              <label className="text-[#d9d9d9] text-sm font-semibold mb-1 block">
                Как вас зовут?
              </label>
              <input className="w-full h-[50px] rounded-[5px] border-2 border-[#47b6f2] px-4" />
            </div>

            <div className="mb-4">
              <label className="text-[#d9d9d9] text-sm font-semibold mb-1 block">
                Email
              </label>
              <input className="w-full h-[50px] rounded-[5px] border-2 border-[#47b6f2] px-4" />
            </div>

            {selectedTeacher && (
              <div className="mb-4">
                <div className="text-[#47b6f2] text-xl font-semibold mb-2">
                  Преподаватель
                </div>
                <div className="flex items-center bg-[#f2f2f2] p-3 rounded-[5px]">
                  <Image
                    src={selectedTeacher.image}
                    alt={selectedTeacher.name}
                    width={40}
                    height={40}
                    className="rounded-full mr-3"
                  />
                  <div>
                    <div className="font-bold">{selectedTeacher.name}</div>
                    <div className="text-sm">
                      Опыт: {selectedTeacher.experience}
                    </div>
                  </div>
                </div>
              </div>
            )}

            <div className="mb-4">
              <label className="text-[#d9d9d9] text-sm font-semibold mb-1 block">
                Телефон
              </label>
              <input
                className="w-full h-[50px] rounded-[5px] border-2 border-[#47b6f2] px-4"
                placeholder="+7 (999) 999 99 99"
              />
            </div>

            <div className="mb-6">
              <div className="text-[#47b6f2] text-xl font-semibold mb-2">
                Как лучше с вами связаться?
              </div>
              <label className="flex items-center mb-2 cursor-pointer">
                <input
                  type="checkbox"
                  className="form-checkbox w-[18px] h-[18px] rounded border-2 border-[#47b6f2] mr-2 text-[#47b6f2] focus:ring-0"
                />
                <span className="text-[#47b6f2] text-base">
                  Написать в WhatsApp
                </span>
              </label>
              <label className="flex items-center mb-2 cursor-pointer">
                <input
                  type="checkbox"
                  className="form-checkbox w-[18px] h-[18px] rounded border-2 border-[#47b6f2] mr-2 text-[#47b6f2] focus:ring-0"
                />
                <span className="text-[#47b6f2] text-base">
                  Написать в Telegram
                </span>
              </label>
              <label className="flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  className="form-checkbox w-[18px] h-[18px] rounded border-2 border-[#47b6f2] mr-2 text-[#47b6f2] focus:ring-0"
                />
                <span className="text-[#47b6f2] text-base">
                  Позвонить по телефону
                </span>
              </label>
            </div>

            <button className="w-full h-[70px] bg-[#47b6f2] rounded-[10px] text-white text-xl font-bold mb-4 hover:bg-[#3da1db] transition-colors">
              ЗАПИСАТЬСЯ
            </button>

            <div className="text-center text-[#47b6f2] text-base mb-2">
              Нажимая на кнопку, вы даете{" "}
              <span className="font-bold underline">согласие</span> на обработку
              персональных данных и соглашаетесь с{" "}
              <span className="font-bold underline">
                политикой конфиденциальности
              </span>
            </div>

            <div className="text-center text-[#47b6f2] text-2xl font-medium">
              менеджер «LINGUANOVA» свяжется с вами
            </div>
          </div>
        )}

        {/* Форма для подбора преподавателя */}
        {showFindTeacherForm && (
          <div
            ref={formRef}
            className="w-full max-w-[374px] bg-white rounded-[15px] p-6 shadow-md mb-4"
          >
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-[#47b6f2] text-[38px] font-bold">
                ОСТАВЬТЕ ЗАЯВКУ
              </h3>
              <button
                onClick={handleCloseForms}
                className="text-[#47b6f2] text-xl"
              >
                ×
              </button>
            </div>

            <div className="mb-4">
              <label className="text-[#d9d9d9] text-sm font-semibold mb-1 block">
                Как вас зовут?
              </label>
              <input className="w-full h-[50px] rounded-[5px] border-2 border-[#47b6f2] px-4" />
            </div>

            <div className="mb-4">
              <label className="text-[#d9d9d9] text-sm font-semibold mb-1 block">
                Email
              </label>
              <input className="w-full h-[50px] rounded-[5px] border-2 border-[#47b6f2] px-4" />
            </div>

            <div className="mb-4">
              <div className="text-[#47b6f2] text-xl font-semibold mb-2">
                Пол преподавателя
              </div>
              <select className="w-full h-[50px] rounded-[5px] border-2 border-[#47b6f2] px-4">
                <option>Не важно</option>
                <option>Мужской</option>
                <option>Женский</option>
              </select>
            </div>

            <div className="mb-4">
              <label className="text-[#d9d9d9] text-sm font-semibold mb-1 block">
                Телефон
              </label>
              <input
                className="w-full h-[50px] rounded-[5px] border-2 border-[#47b6f2] px-4"
                placeholder="+7 (999) 999 99 99"
              />
            </div>

            <div className="mb-4">
              <div className="text-[#47b6f2] text-xl font-semibold mb-2">
                Желаемый стаж преподавателя
              </div>
              <div className="grid grid-cols-2 gap-2">
                <label className="flex items-center cursor-pointer">
                  <input
                    type="radio"
                    name="experience"
                    className="form-radio w-[18px] h-[18px] rounded-full border-2 border-[#47b6f2] mr-2 text-[#47b6f2] focus:ring-0"
                  />
                  <span className="text-[#47b6f2] text-base">1+ год</span>
                </label>
                <label className="flex items-center cursor-pointer">
                  <input
                    type="radio"
                    name="experience"
                    className="form-radio w-[18px] h-[18px] rounded-full border-2 border-[#47b6f2] mr-2 text-[#47b6f2] focus:ring-0"
                  />
                  <span className="text-[#47b6f2] text-base">5+ лет</span>
                </label>
                <label className="flex items-center cursor-pointer">
                  <input
                    type="radio"
                    name="experience"
                    className="form-radio w-[18px] h-[18px] rounded-full border-2 border-[#47b6f2] mr-2 text-[#47b6f2] focus:ring-0"
                  />
                  <span className="text-[#47b6f2] text-base">10+ лет</span>
                </label>
                <label className="flex items-center cursor-pointer">
                  <input
                    type="radio"
                    name="experience"
                    className="form-radio w-[18px] h-[18px] rounded-full border-2 border-[#47b6f2] mr-2 text-[#47b6f2] focus:ring-0"
                  />
                  <span className="text-[#47b6f2] text-base">15+ лет</span>
                </label>
              </div>
            </div>

            <div className="mb-6">
              <div className="text-[#47b6f2] text-xl font-semibold mb-2">
                Как лучше с вами связаться?
              </div>
              <label className="flex items-center mb-2 cursor-pointer">
                <input
                  type="checkbox"
                  className="form-checkbox w-[18px] h-[18px] rounded border-2 border-[#47b6f2] mr-2 text-[#47b6f2] focus:ring-0"
                />
                <span className="text-[#47b6f2] text-base">
                  Написать в WhatsApp
                </span>
              </label>
              <label className="flex items-center mb-2 cursor-pointer">
                <input
                  type="checkbox"
                  className="form-checkbox w-[18px] h-[18px] rounded border-2 border-[#47b6f2] mr-2 text-[#47b6f2] focus:ring-0"
                />
                <span className="text-[#47b6f2] text-base">
                  Написать в Telegram
                </span>
              </label>
              <label className="flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  className="form-checkbox w-[18px] h-[18px] rounded border-2 border-[#47b6f2] mr-2 text-[#47b6f2] focus:ring-0"
                />
                <span className="text-[#47b6f2] text-base">
                  Позвонить по телефону
                </span>
              </label>
            </div>

            <button className="w-full h-[70px] bg-[#47b6f2] rounded-[10px] text-white text-xl font-bold mb-4 hover:bg-[#3da1db] transition-colors">
              ЗАПИСАТЬСЯ
            </button>

            <div className="text-center text-[#47b6f2] text-base mb-2">
              Нажимая на кнопку, вы даете{" "}
              <span className="font-bold underline">согласие</span> на обработку
              персональных данных и соглашаетесь с{" "}
              <span className="font-bold underline">
                политикой конфиденциальности
              </span>
            </div>

            <div className="text-center text-[#47b6f2] text-2xl font-medium">
              менеджер «LINGUANOVA» свяжется с вами
            </div>
          </div>
        )}

        <div className="h-[2000px]"></div>
      </div>
    </div>
  );
}
