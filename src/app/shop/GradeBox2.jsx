"use client";
import React from "react";
import Grade from "./Grade";
import products from "../Products"; // دیتای استاتیک
import Countdown from "react-countdown";
import { MdOutlineTimer } from "react-icons/md";
import {
  LiquidGlassButton,
  LiquidGlassContainer,
  LiquidGlassLink,
} from "@tinymomentum/liquid-glass-react";
import "@tinymomentum/liquid-glass-react/dist/components/LiquidGlassBase.css";

const SaleCountdown = ({ hoursLeft = 5 }) => {
  return (
    <LiquidGlassContainer
      width={260}
      height={100}
      borderRadius={28}
      innerShadowColor="#000000"
      innerShadowBlur={15}
      innerShadowSpread={-5}
      glassTintColor="rgba(255, 255, 255, 0)"
      glassTintOpacity={0}
      frostBlurRadius={0}
      noiseFrequency={0.008}
      noiseStrength={77}
      className="flex items-center justify-center p-4"
    >
      <Countdown
        date={Date.now() + hoursLeft * 60 * 60 * 1000}
        renderer={({ total, hours, minutes, seconds }) => {
          const h = Math.floor(total / 1000 / 60 / 60); // ساعت کل
          return (
            <div className="flex gap-4 ms-6 items-center text-white font-bold text-xl">
              {/* ثانیه */}
              <div className="flex flex-col items-center">
                <span>{seconds.toString().padStart(2, "0")}</span>
                <span className="text-xs font-normal mt-1">ثانیه</span>
              </div>
              {/* دقیقه */}
              <div className="flex flex-col items-center">
                <span>{minutes.toString().padStart(2, "0")}</span>
                <span className="text-xs font-normal mt-1">دقیقه</span>
              </div>
              {/* ساعت */}
              <div className="flex flex-col items-center">
                <span>{h.toString().padStart(2, "0")}</span>
                <span className="text-xs font-normal mt-1">ساعت</span>
              </div>
              {/* آیکن تایمر */}
              <MdOutlineTimer size={40} className="text-white ml-4" />
            </div>
          );
        }}
      />
    </LiquidGlassContainer>
  );
};

export default function GradeBox1() {
  return (
    <section className="text-center my-10 font-vazir relative mx-auto">
      <span className="p-1 px-3 bg-gray-200 rounded-2xl font-bold text-xs">
        تخفیفی ها
      </span>
      <span className="block mt-2 text-xl font-bold">بیشترین تخفیف ها</span>

      <div className="relative bg-[url('/images/snow-bg.png')] bg-cover py-6 px-5 rounded-2xl shadow-2xl my-5 z-10">
        <div className="md:flex md:justify-between md:ps-10 md:items-center w-full">
          {/* متن سمت راست */}
          <div className="text-white font-bold text-lg md:text-2xl mb-4 md:mb-0">
            محصولات شگفتانه <br className="md:hidden" />
            (فرصتی شگفت انگیز برای خرید پوشاک)
          </div>

          {/* تایمر سمت چپ */}
          <div className="md:me-8 mt-2">
            <SaleCountdown hoursLeft={2} />
          </div>
        </div>

        {/* گرید محصولات */}
        <div className="flex gap-4 overflow-x-scroll hide-scrollbar mt-3 pb-4">
          {products.slice(6, 10).map((product) => (
            <div
              key={product.id}
              className="flex-shrink-0 w-[218px] relative z-20"
            >
              <Grade product={product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
