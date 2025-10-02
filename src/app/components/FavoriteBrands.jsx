"use client";

import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

export default function FavoriteBrands() {
  const scrollRef = useRef(null);
  const intervalRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  const brands = [
    "/images/brands/asics.png",
    "/images/brands/nike.png",
    "/images/brands/pony.png",
    "/images/brands/puma.png",
    "/images/brands/reebok.png",
    "/images/brands/renoma.png",
    "/images/brands/zara.png",
  ];

  // لیست تکراری برای لوپ
  const repeatedBrands = [
    ...brands,
    ...brands,
    ...brands,
    ...brands,
    ...brands,
    ...brands,
    ...brands,
  ];

  // اسکرول اتومات
  const startAutoScroll = () => {
    if (intervalRef.current) return;
    intervalRef.current = setInterval(() => {
      if (scrollRef.current && !isHovered) {
        scrollRef.current.scrollLeft -= 1;

        // وقتی به انتها نزدیک میشه، بره اول
        const maxScrollLeft =
          scrollRef.current.scrollWidth - scrollRef.current.clientWidth;
        if (scrollRef.current.scrollLeft >= maxScrollLeft - 1) {
          scrollRef.current.scrollLeft = 0;
        }
      }
    }, 70);
  };

  const stopAutoScroll = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  };

  useEffect(() => {
    startAutoScroll();
    return stopAutoScroll;
  }, []);

  useEffect(() => {
    if (isHovered) stopAutoScroll();
    else startAutoScroll();
  }, [isHovered]);

  return (
    <section className="font-[Vazir] rtl w-[80vw] rounded-3xl  mx-auto text-black pb-10 relative">
      <h2 className=" text-xl md:text-2xl font-bold mb-5 text-center">
        محبوب‌ترین برندها
      </h2>
      {/* لیست برندها */}
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto hide-scrollbar px-2 py-2"
        dir="rtl"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {repeatedBrands.map((brand, idx) => (
          <div
            key={idx}
            className="min-w-[120px] flex items-center justify-center rounded-lg shadow-md p-4"
          >
            <Image
              src={brand}
              alt={`برند ${idx + 1}`}
              width={100}
              height={64}
              className="h-8 w-full object-contain "
            />
          </div>
        ))}
      </div>
    </section>
  );
}
