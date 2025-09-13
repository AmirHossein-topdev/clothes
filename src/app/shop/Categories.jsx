"use client";
import React from "react";
import products from "../Products";

// استخراج دسته‌بندی‌ها از دیتای محصولات
const categories = Array.from(new Set(products.map((p) => p.category)));

// نقشه آیکن‌ها به دسته‌بندی‌ها
const categoryIcons = {
  کاپشن: "/images/jacket-logo.webp",
  هودی: "/images/hoodie-logo.webp",
  "شال گردن": "/images/scarf-logo.webp",
  پلیور: "/images/sweater-logo.webp",
  کت: "/images/blazer-logo.webp",
};

export default function Categories() {
  return (
    <div className="my-6 px-4 text-center">
      <span className="bg-blue-500 p-1 px-3 font-bold text-lg rounded-2xl my-2 text-white">
        دسته بندی
      </span>
      <div className="flex gap-4 overflow-x-scroll hide-scrollbar mt-7">
        {categories.map((cat) => (
          <div
            key={cat}
            className="flex items-center gap-2 bg-gray-100 px-3 py-2 rounded-xl flex-shrink-0 cursor-pointer hover:bg-gray-300 transition-colors"
          >
            {/* عکس کنار اسم */}
            <img src={categoryIcons[cat]} className="w-8 h-8 object-contain" />
            <span className="font-semibold text-sm">{cat}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
