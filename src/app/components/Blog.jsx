"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import Link from "next/link";
import Image from "next/image";
import { FaClipboardList } from "react-icons/fa";

const slideData = [
  {
    title: "هودی پشمی زمستانه مردانه",
    image: "/images/hoodie-winter.webp",
    link: "/products/hoodie-mens",
    date: "۲ مهر ۱۴۰۴",
    description:
      "هودی گرم و نرم با پارچه پشمی، مناسب روزهای سرد زمستان. دارای کلاه و جیب جلو برای راحتی بیشتر.",
  },
  {
    title: "کاپشن زنانه ضد آب",
    image: "/images/jacket-women.webp",
    link: "/products/women-jacket",
    date: "۱۵ مهر ۱۴۰۴",
    description:
      "کاپشن سبک و گرم با قابلیت ضد آب، مناسب هوای برفی و بارانی. دارای کلاه قابل جدا شدن و زیپ مقاوم.",
  },
  {
    title: "شال گردن بافتنی مردانه",
    image: "/images/scarf-men.jpg",
    link: "/products/scarf-men",
    date: "۱۰ آبان ۱۴۰۴",
    description:
      "شال گردن ضخیم و نرم با طرح کلاسیک، مناسب استفاده روزانه و استایل زمستانه شما.",
  },
  {
    title: "بوت زنانه نیم‌بوت چرمی",
    image: "/images/boot-women.jpg",
    link: "/products/boot-women",
    date: "۲۰ آبان ۱۴۰۴",
    description:
      "بوت چرمی با زیره مقاوم و گرم، مناسب روزهای سرد و برفی. راحت و شیک برای پیاده‌روی و استفاده روزمره.",
  },
];

export default function BlogSlider() {
  return (
    <>
      <h2 className="text-black font-extrabold font-[Vazir]  text-2xl my-5  text-center w-[90%] mx-auto">
        جدید ترین مقالات فروشگاه
        <span className="block mt-4 w-full h-1 bg-sky-600 rounded-full"></span>
      </h2>
      <Swiper
        grabCursor={true}
        centeredSlides={false}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        spaceBetween={20}
        modules={[Autoplay]}
        breakpoints={{
          0: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 4 },
        }}
        className="mySwiper w-[90%] mx-auto mb-20 !p-2 h-90"
      >
        {slideData.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col items-center justify-between h-80 p-3 mx-auto rounded-2xl shadow-lg border border-white/20 transition-all duration-300 hover:scale-[0.98]">
              {/* Image Wrapper */}
              <div className="w-full h-40  relative rounded-xl overflow-hidden">
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Title */}
              <span className="font-bold mt-2 text-black text-lg md:text-sm lg:text-base w-full text-start rounded-lg py-1">
                {slide.title}
              </span>

              {/* Description */}
              <span className="font-bold text-gray-500 text-xs w-full text-start rounded-lg py-1">
                {slide.description}
              </span>

              {/* Link Box */}
              <Link
                href={slide.link}
                className="flex items-center justify-between bg-transparent rounded-xl w-full mt-2"
              >
                <div className="w-2/3 text-right  font-semibold text-xs ">
                  <span className="text-sm font-thin">{slide.date}</span>
                </div>
                <div className="w-1/3 flex justify-end me-2">
                  <button className="bg-blue-400 rounded-xl p-2 text-[10px] flex  justify-center items-center gap-1">
                    <FaClipboardList className="my-auto" size={15} />
                    ادامه مطالب
                  </button>
                </div>
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
