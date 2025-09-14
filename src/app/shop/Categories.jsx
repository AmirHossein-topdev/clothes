"use client";
import React from "react";
import products from "../Products";

// استخراج دسته‌بندی‌ها از دیتای محصولات
const categories = Array.from(new Set(products.map((p) => p.category)));

// نقشه آیکن‌ها و اسم انگلیسی هر دسته
const categoryData = {
  کاپشن: { icon: "/images/jacket-logo.webp", en: "Jacket" },
  هودی: { icon: "/images/hoodie-logo.webp", en: "Hoodie" },
  "شال گردن": { icon: "/images/scarf-logo.webp", en: "Scarf" },
  پلیور: { icon: "/images/sweater-logo.webp", en: "Sweater" },
  کت: { icon: "/images/blazer-logo.webp", en: "Blazer" },
};

export default function Categories() {
  return (
    <div className="my-12 px-4 text-center">
      <div className="flex gap-6 overflow-x-auto hide-scrollbar justify-center flex-nowrap mt-7">
        {categories.map((cat) => (
          <div
            key={cat}
            className="flex  items-center gap-1 bg-gray-100 px-4 py-3 rounded-xl flex-shrink-0 cursor-pointer hover:bg-gray-300 transition-colors"
          >
            <img
              src={categoryData[cat].icon}
              className="w-12 h-12 object-contain"
            />
            {/* متن‌ها */}
            <div className="flex flex-col items-center">
              <span className="font-semibold text-sm">{cat}</span>
              <span className="text-xs text-gray-500">
                {categoryData[cat].en}
              </span>
            </div>
            {/* عکس سمت راست */}
          </div>
        ))}
      </div>
    </div>
  );
}
