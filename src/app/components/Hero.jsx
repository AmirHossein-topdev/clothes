"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

export default function Hero() {
  const images = ["/images/banner1.jpg", "/images/banner2.jpg"];

  return (
    <section className=" mx-auto -mt-5 md:mt-3 flex flex-col md:flex-row md:items-stretch gap-4">
      {/* Swiper */}
      <div className="w-full md:w-3/4 flex items-center justify-center ">
        <div className="relative w-full rounded-2xl overflow-hidden">
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
          >
            {images.map((src, index) => (
              <SwiperSlide key={index}>
                <img
                  src={src}
                  alt={`banner-${index}`}
                  className="w-full h-36"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* Text box */}
      <div className=" md:w-1/4 rounded-2xl p-4 relative overflow-hidden flex-shrink-0">
        {/* بک‌گراند تصویر */}
        <div className="absolute inset-0 bg-[url('/images/snow-bg.png')] bg-cover bg-center -z-20"></div>

        {/* overlay */}
        <div className="absolute inset-0 bg-black/30 -z-10"></div>

        {/* محتوای اصلی */}
        <div className="relative z-10 text-white flex flex-col justify-center h-full text-center">
          <span className="font-bold scale-y-170 leading-8 text-[14px] md:text-xl font-[Vazir]">
            زیبایی و گرمای زمستان با مجموعه لباس‌های ما
          </span>
          <p className="my-3 text-[11px] font-extralight">
            برای تغییر این متن بر روی دکمه ویرایش کلیک کنید. لورم ایپسوم متن
            گرافیک است.
          </p>
          <button
            type="button"
            className="bg-sky-300 p-2 rounded-2xl font-[Vazir] font-bold text-xs mx-auto"
          >
            همین حالا خرید کن
          </button>
        </div>
      </div>
    </section>
  );
}
