"use client";

import { usePathname } from "next/navigation";
import Header from "./Header";
import Footer from "./Footer";
import { ReactNode } from "react";

export default function LayoutWrapper({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  
  // Массив путей, где нужно скрыть header
  const hideHeaderOnRoutes = [
    "/settings", 
    "/login",
    "/notifications",        // Основной путь уведомлений
    "/notifications/",       // Вариант с trailing slash
    "/notifications/*",       // Все подпути уведомлений
    "/notification",
    "/courses",
    "/teachers_english",
  ];

  // Проверяем, нужно ли скрыть header для текущего пути
  const shouldHideHeader = hideHeaderOnRoutes.some(route => 
    pathname === route || 
    pathname.startsWith(route.replace('*', ''))
  );

  return (
    <>
      {!shouldHideHeader && <Header />}
      {children}
      <Footer />
    </>
  );
}