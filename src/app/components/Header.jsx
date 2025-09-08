"use client";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { BiMenuAltRight } from "react-icons/bi";
import { FiSearch } from "react-icons/fi";
import { LuCircleUser } from "react-icons/lu";

export default function Header() {
  const [text] = useTypewriter({
    words: ["تخفیف ۲۰ درصدی روی محصولات زمستونی"],
    loop: 0,
    typeSpeed: 70,
    deleteSpeed: 50,
    delaySpeed: 2000,
  });
  const stories = [
    {
      url: "/images/story1.jpg",
      duration: 5000, // 5 ثانیه
    },
    {
      url: "/images/story2.jpg",
      duration: 3000,
    },
    {
      content: ({ action, isPaused }) => (
        <div className="flex items-center justify-center h-full bg-black text-white text-2xl">
          استوری سفارشی
        </div>
      ),
    },
  ];

  return (
    <header className="bg-white">
      <section className="bg-red-400 rounded-b-2xl flex items-center justify-center text-white text-center text-sm p-1 px-3 mx-4 cursor-pointer">
        <span className="flex items-center">
          <span>{text}</span>
          <Cursor cursorStyle="|" />
        </span>
      </section>
      <section className="flex justify-between w-[85vw] mx-auto mt-2">
        <span className="bg-gray-200 p-1 px-3 rounded-2xl flex items-center text-sm gap-1">
          <BiMenuAltRight size={20} />
          منو
        </span>
        <h1 className="font-bold">نام برند</h1>
        <span className="flex justify-between items-center gap-1">
          <FiSearch />
          <LuCircleUser />
        </span>
      </section>
    </header>
  );
}
