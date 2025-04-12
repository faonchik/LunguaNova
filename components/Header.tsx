// components/Header.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
}

const NavLink = ({ href, children, onClick }: NavLinkProps) => {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById(href.replace('/', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    if (onClick) onClick();
  };

  return (
    <button
      onClick={handleClick}
      className="font-arial text-[20px] font-semibold text-[#032a62] no-underline relative whitespace-nowrap hover:text-blue-800"
    >
      {children}
    </button>
  );
};

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <header className="bg-white w-full h-[80px] z-[1000] shadow-[0_1px_10px_rgba(0,0,0,0.15)]">
      <div className="container mx-0 px-0 flex items-center h-full justify-between">
        {/* Логотип */}
        <div className="min-w-[90px] w-[90px] ml-4">
          <Link href="/">
            <Image
              src="/assets/LOGO_INNO_LINK_LLC-P.png"
              alt="INNO LINK LLC Logo"
              width={90}
              height={65}
              className="object-contain"
              priority
            />
          </Link>
        </div>

        {/* Навигация для десктопа */}
        <nav className="hidden md:flex justify-end w-full">
          <ul className="flex items-center m-0 p-0">
            <li className="px-[12px]">
              <NavLink href="about">О компании</NavLink>
            </li>
            <li className="px-[12px]">
              <NavLink href="key-directions">Ключевые направления</NavLink>
            </li>
            <li className="px-[12px]">
              <NavLink href="products">Продукты</NavLink>
            </li>
            <li className="px-[12px]">
              <Link 
                href="#partners"
                scroll={false}
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('partners')?.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                  });
                }}
                className="font-arial text-[20px] font-semibold text-[#032a62] no-underline relative whitespace-nowrap hover:text-blue-800"
              >
                Партнеры
              </Link>
            </li>
            <li className="pl-[12px]">
              <Link 
                href="#contacts"
                scroll={false}
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('contacts')?.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                  });
                }}
                className="font-arial text-[20px] font-semibold text-[#032a62] no-underline relative whitespace-nowrap hover:text-blue-800"
              >
                Контакты
              </Link>
            </li>
          </ul>
        </nav>

        {/* Кнопка мобильного меню */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-600 hover:text-gray-900 focus:outline-none mr-4"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </div>

      {/* Мобильное меню */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md">
          <nav className="container mx-auto px-4 py-4">
            <ul className="space-y-4">
              <li>
                <NavLink href="about" onClick={() => setIsOpen(false)}>
                  О компании
                </NavLink>
              </li>
              <li>
                <NavLink href="key-directions" onClick={() => setIsOpen(false)}>
                  Ключевые направления
                </NavLink>
              </li>
              <li>
                <NavLink href="products" onClick={() => setIsOpen(false)}>
                  Продукты
                </NavLink>
              </li>
              <li>
                <NavLink href="partners" onClick={() => setIsOpen(false)}>
                  Партнеры
                </NavLink>
              </li>
              <li>
                <NavLink href="contacts" onClick={() => setIsOpen(false)}>
                  Контакты
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;