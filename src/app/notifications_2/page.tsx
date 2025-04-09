"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";

export default function NotificationsPage() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [likes, setLikes] = useState<number>(0);
  const [dislikes, setDislikes] = useState<number>(0);
  const [isReplying, setIsReplying] = useState<boolean>(false);
  const [replyText, setReplyText] = useState<string>("");
  const [replies, setReplies] = useState<string[]>([]);
  const menuRef = useRef<HTMLDivElement>(null);
  const burgerButtonRef = useRef<HTMLButtonElement>(null);
  const replyInputRef = useRef<HTMLInputElement>(null);

  const toggleMenu = (): void => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLike = () => {
    setLikes(likes + 1);
    localStorage.setItem('likes', String(likes + 1));
  };

  const handleDislike = () => {
    setDislikes(dislikes + 1);
    localStorage.setItem('dislikes', String(dislikes + 1));
  };

  const handleReplyClick = () => {
    setIsReplying(true);
    setTimeout(() => {
      replyInputRef.current?.focus();
    }, 0);
  };

  const handleReplySubmit = () => {
    if (replyText.trim()) {
      setReplies([...replies, replyText]);
      setReplyText("");
      setIsReplying(false);
      localStorage.setItem('replies', JSON.stringify([...replies, replyText]));
    }
  };

  useEffect(() => {
    const savedLikes = localStorage.getItem('likes');
    const savedDislikes = localStorage.getItem('dislikes');
    const savedReplies = localStorage.getItem('replies');

    if (savedLikes) setLikes(parseInt(savedLikes));
    if (savedDislikes) setDislikes(parseInt(savedDislikes));
    if (savedReplies) setReplies(JSON.parse(savedReplies));

    const handleClickOutside = (event: MouseEvent): void => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        burgerButtonRef.current &&
        !burgerButtonRef.current.contains(event.target as Node)
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="bg-white min-h-screen">
      {/* Header с поиском и бургер-меню */}
      <header className="fixed top-0 left-0 right-0 bg-white z-10 pt-2.5 w-full flex justify-between items-center px-4">
        <div className="relative w-[312px] h-[60px] rounded-[40px] border border-solid border-[#48B7F2] bg-white">
          <input
            placeholder="Поиск..."
            className="w-full h-full pl-4 pr-10 rounded-[40px] text-[#48B7F2] outline-none"
            type="text"
          />
          <Image
            alt="Поиск"
            width={24}
            height={24}
            className="absolute top-1/2 right-3 transform -translate-y-1/2"
            src="/assets/material-symbols_search.svg"
          />
        </div>
        <button
          ref={burgerButtonRef}
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
      </header>

      {/* Основное содержимое страницы */}
      <main className="pt-[100px] px-4 flex flex-col items-center">
        <h1 className="text-2xl font-bold text-[#47b6f2] mb-4 w-full max-w-[395px]">
          Уведомления
        </h1>

        {/* Первое уведомление */}
        <div className="bg-card text-card-foreground shadow w-[395px] h-[230px] rounded-[15px] border-2 border-solid border-[#47b6f2] overflow-visible relative mb-6">
          <div className="p-0 relative h-full">
            <span className="flex shrink-0 overflow-hidden w-20 h-20 absolute top-[13px] left-[13px] rounded-[146.55px]">
              <img
                className="aspect-square w-20 h-20"
                alt="Крапивкин Максим"
                src="/assets/Photo_maxim.svg"
              />
            </span>
            <div className="absolute top-10 left-[98px] font-bold text-[#47b6f2] text-xl [font-family:'Inter',Helvetica] tracking-[0] leading-[normal] whitespace-nowrap">
              Крапивкин Максим
            </div>
            <div className="absolute top-[75px] left-[93px] [font-family:'Inter',Helvetica] font-bold text-[#47b6f2] text-base tracking-[0] leading-[normal] whitespace-nowrap">
              Знает
            </div>
            <span className="flex shrink-0 overflow-hidden w-5 h-5 absolute top-[75px] left-[146px] rounded-[40px]">
              <img
                className="aspect-square w-5 h-5"
                alt="Russia"
                src="/assets/Russia.svg"
              />
            </span>
            <div className="absolute top-[75px] left-[190px] font-bold text-[#47b6f2] text-base [font-family:'Inter',Helvetica] tracking-[0] leading-[normal] whitespace-nowrap">
              Изучает
            </div>
            <span className="flex shrink-0 overflow-hidden w-5 h-5 absolute top-[75px] left-[262px] rounded-[40px]">
              <img
                className="aspect-square w-5 h-5"
                alt="Germany"
                src="/assets/Germany2.svg"
              />
            </span>

            <div
              data-orientation="horizontal"
              role="none"
              className="shrink-0 bg-gray-300 h-[1px] absolute w-[395px] top-[100px] -left-0.5"
            ></div>

            <div
              data-orientation="horizontal"
              role="none"
              className="shrink-0 bg-gray-300 h-[1px] absolute w-[395px] top-[130px] -left-0.5"
            ></div>

            <div className="absolute top-[107px] left-2 [font-family:'Inter',Helvetica] font-normal text-neutral-300 text-[15px] tracking-[0] leading-[normal] whitespace-nowrap">
              29 марта 2025 - 19:04
            </div>

            <div className="absolute w-9 h-2.5 top-28 left-[347px] flex gap-[5px]">
              <div className="w-2.5 h-2.5 bg-[#d9d9d9] rounded-[5px]"></div>
              <div className="w-2.5 h-2.5 bg-[#d9d9d9] rounded-[5px]"></div>
              <div className="w-2.5 h-2.5 bg-[#d9d9d9] rounded-[5px]"></div>
            </div>

            <div className="absolute w-[370px] top-[149px] left-[13px] [font-family:'Inter',Helvetica] font-medium text-[#47b6f2] text-base tracking-[0] leading-[normal]">
              Deutschland, Deutschland über alles, über alles in der Welt, wenn
              es stets zu Schutz und Trutze brüderlich zusammenhält.
            </div>
          </div>
        </div>

        {/* Кнопка "Оставить комментарий" между уведомлениями */}
        <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 shadow px-4 py-2 w-[289px] h-10 bg-[#47b6f2] rounded-[5px] hover:bg-[#3da4e0] text-white font-medium text-base my-6">
          Оставить комментарий
        </button>

        {/* Второе уведомление */}
        <div className="bg-card text-card-foreground shadow w-[395px] h-[230px] rounded-[15px] border-2 border-solid border-[#47b6f2] overflow-visible relative mb-6">
          <div className="p-0 relative h-full">
            <span className="flex shrink-0 overflow-hidden w-20 h-20 absolute top-[13px] left-[13px] rounded-[146.55px]">
              <img
                className="aspect-square w-20 h-20"
                alt="НеЛыси Попи"
                src="/assets/lysi_popi.svg"
              />
            </span>
            <div className="absolute top-10 left-[98px] font-bold text-[#47b6f2] text-xl [font-family:'Inter',Helvetica] tracking-[0] leading-[normal] whitespace-nowrap">
              НеЛыси Попи
            </div>
            <div className="absolute top-[75px] left-[93px] [font-family:'Inter',Helvetica] font-bold text-[#47b6f2] text-base tracking-[0] leading-[normal] whitespace-nowrap">
              Знает
            </div>
            <span className="flex shrink-0 overflow-hidden w-5 h-5 absolute top-[75px] left-[146px] rounded-[40px]">
              <img
                className="aspect-square w-5 h-5"
                alt="Russia"
                src="/assets/Russia.svg"
              />
            </span>
            <div className="absolute top-[75px] left-[190px] font-bold text-[#47b6f2] text-base [font-family:'Inter',Helvetica] tracking-[0] leading-[normal] whitespace-nowrap">
              Изучает
            </div>
            <span className="flex shrink-0 overflow-hidden w-5 h-5 absolute top-[75px] left-[262px] rounded-[40px]">
              <img
                className="aspect-square w-5 h-5"
                alt="Germany"
                src="/assets/Germany2.svg"
              />
            </span>

            <div
              data-orientation="horizontal"
              role="none"
              className="shrink-0 bg-gray-300 h-[1px] absolute w-[395px] top-[100px] -left-0.5"
            ></div>

            <div
              data-orientation="horizontal"
              role="none"
              className="shrink-0 bg-gray-300 h-[1px] absolute w-[395px] top-[130px] -left-0.5"
            ></div>

            <div className="absolute top-[107px] left-2 [font-family:'Inter',Helvetica] font-normal text-neutral-300 text-[15px] tracking-[0] leading-[normal] whitespace-nowrap">
              29 марта 2025 - 19:04
            </div>

            <div className="absolute w-9 h-2.5 top-28 left-[347px] flex gap-[5px]">
              <div className="w-2.5 h-2.5 bg-[#d9d9d9] rounded-[5px]"></div>
              <div className="w-2.5 h-2.5 bg-[#d9d9d9] rounded-[5px]"></div>
              <div className="w-2.5 h-2.5 bg-[#d9d9d9] rounded-[5px]"></div>
            </div>

            <div className="absolute w-[370px] top-[149px] left-[13px] [font-family:'Inter',Helvetica] font-medium text-[#47b6f2] text-base tracking-[0] leading-[normal]">
              про маму было лишнее
            </div>
          </div>
        </div>

        {/* Кнопки лайков и ответа */}
        <div className="relative w-[395px] h-[30px] mb-6">
          <button 
            onClick={handleLike}
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:text-accent-foreground absolute w-[57px] h-[30px] left-[150px] bg-[#47b6f2] rounded-[5px] hover:bg-[#3da4e0] p-0"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-thumbs-up w-6 h-6 text-white">
              <path d="M7 10v12"></path>
              <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z"></path>
            </svg>
            {likes > 0 && (
              <span className="text-white text-xs ml-1">{likes}</span>
            )}
          </button>

          <button 
            onClick={handleDislike}
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:text-accent-foreground absolute w-[57px] h-[30px] left-[226px] bg-[#47b6f2] rounded-[5px] hover:bg-[#3da4e0] p-0"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-thumbs-down w-6 h-6 text-white">
              <path d="M17 14V2"></path>
              <path d="M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22a3.13 3.13 0 0 1-3-3.88Z"></path>
            </svg>
            {dislikes > 0 && (
              <span className="text-white text-xs ml-1">{dislikes}</span>
            )}
          </button>

          <button 
            onClick={handleReplyClick}
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 shadow absolute w-[90px] h-[30px] left-[314px] bg-[#47b6f2] rounded-[5px] hover:bg-[#3da4e0] text-white font-medium text-base p-0"
          >
            Ответить
          </button>
        </div>

        {/* Поле для ответа */}
        {isReplying && (
          <div className="w-[395px] mb-4 flex flex-col">
            <input
              ref={replyInputRef}
              type="text"
              value={replyText}
              onChange={(e) => setReplyText(e.target.value)}
              placeholder="Напишите ваш ответ..."
              className="w-full p-2 border border-[#47b6f2] rounded-[5px] mb-2 outline-none"
              onKeyPress={(e) => e.key === 'Enter' && handleReplySubmit()}
            />
            <div className="flex justify-end gap-2">
              <button 
                onClick={() => setIsReplying(false)}
                className="px-4 py-1 bg-gray-300 rounded-[5px] hover:bg-gray-400"
              >
                Отмена
              </button>
              <button 
                onClick={handleReplySubmit}
                className="px-4 py-1 bg-[#47b6f2] text-white rounded-[5px] hover:bg-[#3da4e0]"
              >
                Отправить
              </button>
            </div>
          </div>
        )}

        {/* Список ответов */}
        {replies.length > 0 && (
          <div className="w-[395px] mb-6">
            <h3 className="text-[#47b6f2] font-medium mb-2">Ответы:</h3>
            <div className="space-y-2">
              {replies.map((reply, index) => (
                <div key={index} className="p-2 bg-gray-100 rounded-[5px]">
                  {reply}
                </div>
              ))}
            </div>
          </div>
        )}
      </main>

      {/* Боковое меню */}
      <div
        ref={menuRef}
        id="menu"
        className={`fixed top-0 right-0 h-full w-[60%] bg-white z-20 flex flex-col gap-[9px] transform transition-all duration-500 ${
          isMenuOpen
            ? "opacity-100 translate-x-0"
            : "opacity-0 translate-x-full"
        }`}
      >
        <Link href="/" legacyBehavior>
          <a>
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
          </a>
        </Link>

        <Link href="/profile" legacyBehavior>
          <a>
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
          </a>
        </Link>

        <Link href="/notifications" legacyBehavior>
          <a>
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
          </a>
        </Link>

        <Link href="/settings" legacyBehavior>
          <a>
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
          </a>
        </Link>

        <Link href="/help" legacyBehavior>
          <a>
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
          </a>
        </Link>

        <Link href="/friends" legacyBehavior>
          <a>
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
          </a>
        </Link>

        <Link href="/courses" legacyBehavior>
          <a>
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
          </a>
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