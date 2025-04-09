"use client";
import Image from "next/image";
import Link from "next/link"; // Импортируем Link для навигации

export default function Profile() {
  return (
    <div className="flex flex-col items-center p-6">

      <div className="relative">
        {/* Аватар */}
        <span className="flex shrink-0 overflow-hidden rounded-full w-[125px] h-[125px] border-[5px] border-[#47b6f2] absolute left-[-200px] top-[-100px]">
          <Image
            className="aspect-square h-full w-full object-cover"
            src="/assets/Avatar.svg"
            alt=""
            width={125}
            height={125}
          />
        </span>

        {/* Флаг */}
        <span className="absolute bottom-0 right-[5px] top-[5px]">
          <Image
            className="aspect-square h-[35px] w-[35px] object-cover"
            src="/assets/RussiaFlag.svg"
            alt="Russia Flag"
            width={35}
            height={35}
          />
        </span>
      </div>
      
      {/* Инфо-блок */}
      <div className="w-[369px] h-[134px] bg-[#47b6f2] rounded-[10px] mb-4 mt-[-50px] px-4 py-3 flex flex-col justify-center">
        <span className="text-white text-lg font-semibold font-['Inter'] mb-2 ml-[100px]">
          Бимба
        </span>
        <span className="text-white text-sm font-medium font-['Inter'] leading-snug">
          линга гулигулигули вата линган гу линган гуу
        </span>
      </div>

      {/* Заголовки */}
      <div className="mt-6 mx-auto w-[369px] flex justify-between">
        <div className="font-semibold text-[#47b6f2] text-xl font-['Inter']">
          ВСЕГО ИЗУЧЕНО
        </div>
        <div className="font-semibold text-[#47b6f2] text-xl font-['Inter']">
          СЕРТИФИКАТЫ
        </div>
      </div>

      <div className="mt-4 mx-auto w-[369px] grid grid-cols-2 gap-6">
        {/* СООБЩЕНИЯ */}
        <Link href="/messages">
          <button className="gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 text-primary-foreground shadow hover:bg-primary/90 py-2 w-[175px] h-[50px] bg-[#47b6f2] rounded-[10px] flex items-center justify-start px-2">
            <Image
              src="/assets/uiw_message.svg"
              alt="СООБЩЕНИЯ"
              width={30}
              height={30}
              className="mr-2"
            />
            <span className="font-semibold text-white text-[16px] font-['Inter']">
              СООБЩЕНИЯ
            </span>
          </button>
        </Link>

        {/* ДОСТИЖЕНИЯ */}
        <Link href="/achievements">
          <button className="gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 text-primary-foreground shadow hover:bg-primary/90 py-2 w-[175px] h-[50px] bg-[#47b6f2] rounded-[10px] flex items-center justify-start px-2">
            <Image
              src="/assets/solar_cup-first-broken.svg"
              alt="Достижения"
              width={30}
              height={30}
              className="mr-2"
            />
            <span className="font-semibold text-white text-[16px] font-['Inter']">
              ДОСТИЖЕНИЯ
            </span>
          </button>
        </Link>

        {/* НРАВИТСЯ */}
        <Link href="/likes">
          <button className="gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 text-primary-foreground shadow hover:bg-primary/90 py-2 w-[175px] h-[50px] bg-[#47b6f2] rounded-[10px] flex items-center justify-start px-2">
            <Image
              src="/assets/mdi_like-outline.svg"
              alt="Нравится"
              width={30}
              height={30}
              className="mr-2"
            />
            <span className="font-semibold text-white text-[16px] font-['Inter']">
              НРАВИТСЯ
            </span>
          </button>
        </Link>

        {/* НАСТРОЙКИ */}
        <Link href="/settings">
          <button className="gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 text-primary-foreground shadow hover:bg-primary/90 py-2 w-[175px] h-[50px] bg-[#47b6f2] rounded-[10px] flex items-center justify-start px-2">
            <Image
              src="/assets/Setting.svg"
              alt="Настройки"
              width={30}
              height={30}
              className="mr-2"
            />
            <span className="font-medium text-white text-[16px] font-['Inter']">
              НАСТРОЙКИ
            </span>
          </button>
        </Link>
      </div>

      {/* Дни обучения */}
      <div className="mt-6 mx-auto w-[369px]">
        <h3 className="font-semibold text-[#47b6f2] text-2xl font-['Inter'] text-center mb-4">
          Дни обучения
        </h3>
        <div className="border text-card-foreground w-full bg-[#47b6f2] rounded-[10px] border-none shadow-none">
          <div className="flex justify-between items-center p-4">
            {["пн", "вт", "ср", "чт", "пт", "сб", "вс"].map((day, idx) => (
              <div key={idx} className="flex flex-col items-center">
                <div className="w-[45px] h-[45px] rounded-full border-[2.89px] border-solid border-white flex items-center justify-center bg-[#48B7F2]">
                  {day === "пн" && (
                    <div className="w-[35px] h-[35px] bg-white rounded-full"></div>
                  )}
                </div>
                <span className="font-semibold text-[#f2f2f2] text-[15px] font-['Inter'] mt-2">
                  {day}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
