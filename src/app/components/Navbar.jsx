"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar({ menu, setMenu }) {
  const [score, setScore] = useState(0);
  const menuRef = useRef(null);
  const pathname = usePathname();

  useEffect(() => {
    const storedScore = localStorage.getItem("score");
    if (storedScore) {
      setScore(storedScore);
    }

    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setMenu]);

  const links = [
    { to: "/", label: "صفحه اصلی" },
    { to: "/shop", label: "فروشگاه" },
    { to: "/blog", label: "مقالات" },
    { to: "/contact-us", label: "تماس باما" },
    { to: "/about-us", label: "درباره ما" },
    { to: "/game-order", label: "سفارش بازی" },
  ];

  return (
    <>
      {/* پس‌زمینه نیمه شفاف وقتی منو موبایل باز است */}
      {menu && (
        <div
          className="fixed inset-0 z-[99] bg-black/50 backdrop-blur-[2px] md:hidden"
          onClick={() => setMenu(false)}
        />
      )}

      {/* منو اسلایدی موبایل */}
      <aside
        ref={menuRef}
        className={`fixed top-0 right-0 h-full w-[80%] max-w-xs bg-gradient-to-br from-orange-100 via-white to-orange-50 shadow-2xl rounded-l-3xl z-[99] p-6 transition-all duration-500 ease-in-out flex flex-col justify-between md:hidden ${
          menu ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col gap-4">
          <div className="text-center mb-4">
            <h2 className="text-2xl font-extrabold text-orange-500 tracking-tight">
              Home Appliance
            </h2>
            <p className="text-xs text-gray-500 mt-1">خانه‌ای هوشمندتر با ما</p>
          </div>

          <nav dir="rtl" className="flex flex-col gap-2">
            {links.map((item, idx) => {
              const isActive = pathname === item.to;
              return (
                <Link
                  key={idx}
                  href={item.to}
                  onClick={() => setMenu(false)}
                  className={`block px-4 py-2 rounded-lg text-sm font-[Vazir] font-semibold tracking-tight transition-all duration-200 ${
                    isActive
                      ? "bg-orange-200 text-orange-700 shadow-inner"
                      : "text-gray-700 hover:bg-orange-50"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>

        <div className="text-right mt-4 border-t pt-3">
          <p className="text-sm text-gray-600 font-[Vazir] font-medium">
            🪙 امتیاز شما: <span className="font-bold">{score}</span>
          </p>
        </div>
      </aside>
    </>
  );
}
