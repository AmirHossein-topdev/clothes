"use client";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FaStar, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const testimonials = [
  {
    stars: 5,
    message: "این محصول فوق‌العاده بود! کیفیت و طراحی عالی.",
    name: "رضا محمدی",
    role: "مشتری راضی",
  },
  {
    stars: 4,
    message: "پشتیبانی خوب و ارسال سریع. حتماً دوباره خرید می‌کنم.",
    name: "الهام کریمی",
    role: "مشتری",
  },
  {
    stars: 5,
    message: "کیفیت عالی و قیمت مناسب. کاملاً راضی هستم.",
    name: "سارا احمدی",
    role: "کاربر وفادار",
  },
  {
    stars: 5,
    message: "سرویس عالی و پاسخگویی سریع. ممنون از تیم شما.",
    name: "امیر حسینی",
    role: "مشتری دائمی",
  },
];

export default function Testimonials() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className="py-2 w-[90%] mx-auto relative">
      {/* دکمه های ناوبری */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex gap-4 z-10">
        <button
          ref={nextRef}
          className="p-1 rounded-md bg-cyan-600 shadow hover:bg-gray-100"
        >
          <FaChevronRight />
        </button>
        <button
          ref={prevRef}
          className="p-1 rounded-md bg-cyan-600 shadow hover:bg-gray-100"
        >
          <FaChevronLeft />
        </button>
      </div>

      <Swiper
        grabCursor={true}
        loop={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        spaceBetween={20}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
        }}
        modules={[Autoplay, Navigation]}
        breakpoints={{
          0: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 4 },
        }}
      >
        {testimonials.map((t, index) => (
          <SwiperSlide key={index}>
            <div className="bg-cyan-100 p-5 text-right rounded-2xl shadow-md h-full flex flex-col justify-between">
              {/* ستاره */}
              <div className="flex mb-2">
                {[...Array(t.stars)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-400 mr-1" />
                ))}
              </div>

              {/* پیام */}
              <p className="text-gray-700 text-sm mb-4">{t.message}</p>

              {/* نام و نقش */}
              <div>
                <p className="font-semibold text-gray-900">{t.name}</p>
                <p className="text-gray-500 text-xs">{t.role}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
