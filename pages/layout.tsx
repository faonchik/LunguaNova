// app/layout.tsx
import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/globals.css";

export const metadata: Metadata = {
  title: "INNO LINK LLC",
  description: "Технологии будущего, качество без компромиссов!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}