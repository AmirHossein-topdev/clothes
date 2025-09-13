"use client";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { LuCircleUser } from "react-icons/lu";
import { useState } from "react";
import { BiMenuAltRight } from "react-icons/bi";
import { FiSearch } from "react-icons/fi";
import { usePathname } from "next/navigation";
// 👇 ایمپورت Navbar
import Navbar from "./Navbar";

export default function Header() {
  const [text] = useTypewriter({
    words: ["تخفیف ۲۰ درصدی روی محصولات زمستونی"],
    loop: 0,
    typeSpeed: 70,
    deleteSpeed: 50,
    delaySpeed: 2000,
  });

  // state برای کنترل باز/بسته شدن منو
  const [menu, setMenu] = useState(false);

  // گرفتن مسیر فعلی
  const pathname = usePathname();

  return (
    <header className="bg-white relative z-[100]">
      {/* نوار قرمز بالای صفحه */}
      <section className="bg-red-400 rounded-b-2xl flex items-center justify-center text-white text-center text-sm md:text-[15px]  p-1 px-3 mx-4 md:w-[90vw] md:mx-auto cursor-pointer">
        <span className="flex items-center">
          <span>{text}</span>
          <Cursor cursorStyle="|" />
        </span>
      </section>

      {/* بخش اصلی هدر */}
      <section className="flex justify-between items-center w-[85vw] mx-auto mt-2">
        {/* دکمه منو برای موبایل */}
        <span
          className="bg-gray-200 p-1 px-3 rounded-2xl flex items-center text-sm gap-1 cursor-pointer md:hidden"
          onClick={() => setMenu(true)}
        >
          <BiMenuAltRight size={20} />
          منو
        </span>

        {/* نام برند برای موبایل و دسکتاپ */}
        <h1 className="font-bold text-lg md:order-1 md:ml-0">نام برند</h1>

        {/* لینک‌ها برای سایز بزرگتر از md */}
        <nav className="hidden md:flex gap-4 items-center justify-center flex-1 order-2">
          {[
            { to: "/", label: "صفحه اصلی" },
            { to: "/shop", label: "فروشگاه" },
            { to: "/blog", label: "مقالات" },
            { to: "/contact-us", label: "تماس باما" },
            { to: "/about-us", label: "درباره ما" },
            { to: "/game-order", label: "سفارش بازی" },
          ].map((item, idx) => {
            const isActive = pathname === item.to;
            return (
              <a
                key={idx}
                href={item.to}
                className={`relative text-gray-700 font-semibold hover:text-orange-600 transition-colors ${
                  isActive ? "text-orange-600" : ""
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-[-4px] left-0 w-full h-[2px] bg-orange-500 rounded"></span>
                )}
              </a>
            );
          })}
        </nav>

        {/* آیکن کاربر */}
        <span className="flex justify-between items-center gap-2 md:order-3">
          <LuCircleUser size={24} />
          <FiSearch size={24} />
        </span>
      </section>

      {/* Navbar (اسلاید منو موبایل) */}
      <Navbar menu={menu} setMenu={setMenu} />
    </header>
  );
}
