"use client";
import React from "react";
import products from "../Products";

// استخراج دسته‌بندی‌ها
const categories = Array.from(new Set(products.map((p) => p.category.trim())));

// آیکن و اسم انگلیسی هر دسته
const categoryData = {
  هودی: { icon: "/images/hoodie-logo.webp", en: "Hoodie" },
  کاپشن: { icon: "/images/jacket-logo.webp", en: "Jacket" },
  "شال گردن": { icon: "/images/scarf-logo.webp", en: "Scarf" },
  "بوت و نیم‌بوت": { icon: "/images/boot-logo.webp", en: "Boot & Half Boot" },
  کت: { icon: "/images/coat-logo.webp", en: "Blazer" },
};

export default function Categories() {
  return (
    <div className="my-8 px-4 text-center">
      <div className="flex gap-6 overflow-x-auto hide-scrollbar justify-start flex-nowrap mt-7">
        {categories.map((cat) => {
          const data = categoryData[cat.trim()] || {
            icon: "/images/default.png",
            en: cat,
          };

          if (!data) return null; // اگر آیکن یا اسم انگلیسی تعریف نشده بود

          return (
            <div
              key={cat}
              className="flex items-center gap-2 bg-gray-100 px-4 py-3 rounded-xl flex-shrink-0 cursor-pointer hover:bg-gray-300 transition-colors"
            >
              {/* آیکن دسته */}
              <img
                src={data.icon}
                alt={cat}
                className="w-12 h-12 object-contain"
              />

              {/* متن‌ها */}
              <div className="flex flex-col items-center">
                <span className="font-semibold text-sm">{cat}</span>
                <span className="text-xs text-gray-500">{data.en}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
