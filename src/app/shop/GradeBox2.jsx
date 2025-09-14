import React from "react";
import Grade from "./Grade";
import products from "../Products"; // همون دیتای استاتیک که ساختیم

export default function GradeBox1() {
  return (
    <section className="text-center my-10 font-vazir">
      <span className="p-1 px-3  bg-gray-200 rounded-2xl font-bold text-xs">
        تخفیفی ها
      </span>
      <span className="block mt-2 text-xl font-bold">بیشترین تخفیف ها</span>
      <div className="bg-[url('/images/snow-bg.png')] bg-cover py-8 px-4 rounded-2xl shadow-2xl my-5 z-10">
        <div className="flex gap-4 overflow-x-scroll hide-scrollbar">
          {products.slice(6, 10).map((product) => (
            <div key={product.id} className="flex-shrink-0 w-62 relative z-20">
              <Grade product={product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
