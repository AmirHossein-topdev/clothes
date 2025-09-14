import React, { useState } from "react";
import Grade from "./Grade";
import products from "../Products"; // همون دیتای استاتیک که ساختیم

export default function GradeBox1() {
  // استخراج دسته‌بندی‌ها
  const categories = Array.from(
    new Set(products.map((p) => p.category.trim()))
  );
  const [selectCategory, setselectCategory] = useState(categories[0]);
  const filterProducts = products.filter(
    (p) => p.category.trim() === selectCategory
  );
  return (
    <section className="text-center my-10 font-vazir">
      <span className="p-1 px-3 bg-gray-200 rounded-2xl font-bold text-xs">
        محصولات اخیر
      </span>
      <span className="block mt-2 text-xl font-bold">
        جـــــــــــــــــدیدترین محصولات فروشگاه
      </span>
      <div className="flex gap-3 flex-wrap justify-center mt-3 sticky top-2 z-30">
        {categories.map((cat) => (
          <span
            key={cat}
            onClick={() => setselectCategory(cat)}
            className={`border bg-white border-gray-200 rounded-xl p-2 px-3 shadow-xl ${
              selectCategory === cat ? "bg-sky-200" : ""
            }`}
          >
            {cat}
          </span>
        ))}
      </div>

      <div className="bg-gray-900 mx-auto py-6 px-4 rounded-2xl shadow-2xl my-5 z-10">
        <div className="flex flex-col items-center hide-scrollbar">
          {filterProducts.map((product) => (
            <div
              key={product.id}
              className="relative z-20 w-full max-w-[218px]"
            >
              <Grade product={product} />
            </div>
          ))}
        </div>
      </div>
      {/* <div className="bg-cyan-700 py-6 px-4 rounded-2xl shadow-2xl my-5 z-10">
        <div className="flex gap-4 overflow-x-scroll hide-scrollbar">
          {filterProducts.map((product) => (
            <div
              key={product.id}
              className="flex-shrink-0 w-[218px] relative z-20"
            >
              <Grade product={product} />
            </div>
          ))}
        </div> */}
    </section>
  );
}
