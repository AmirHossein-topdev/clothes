import React from "react";
import { IoMdArrowDropleftCircle } from "react-icons/io";
export default function OffBox() {
  return (
    <section className="bg-cyan-800 rounded-xl py-8 px-6">
      <div className="relative bg-red-400 rounded-tl-2xl rounded-br-2xl p-2 flex">
        <div className="font-black">
          ۲۵٪
          تخفیـــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــف
        </div>
        <img
          src="/images/OffBoxIcon.png"
          alt="icon"
          className="absolute -left-3 h-36 -top-5 "
        />
      </div>
      <h3 className="text-center my-2 font-bold">
        تخفیف ویژه انواع پوشاک گرم و نرم
      </h3>
      <a
        href="/shop"
        className="flex items-center gap-1 p-1 bg-white w-fit rounded-xl mx-auto"
      >
        مشاهده محصولات
        <IoMdArrowDropleftCircle />
      </a>
    </section>
  );
}
