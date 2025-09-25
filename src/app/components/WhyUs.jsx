import React from "react";
import { IoMdArrowDropleftCircle } from "react-icons/io";
import { FaShoppingBasket } from "react-icons/fa";

export default function WhyUs() {
  return (
    <section className="my-10">
      <h2 className="bg-gray-200 w-fit p-1 px-2 rounded-xl">چرا ما ؟</h2>
      <h1 className="my-2 font-extrabold text-2xl font-stretch-100%">
        چرا فروشگاه پوشاک زمستانی <span className="text-cyan-600">تست</span>
      </h1>
      <p className="my-3 font-[Vazir] font-extralight text-[12px] leading-loose">
        فروشگاه ما با تمرکز ویژه بر روی پوشاک پاییزی و زمستانی ایجاد شده تا شما
        تجربه‌ای متفاوت از خرید لباس گرم و شیک داشته باشید. ما باور داریم که
        لباس فقط یک پوشش نیست، بلکه ترکیبی از راحتی، زیبایی و اعتماد به نفس است.
        <br />
        استفاده از بهترین متریال و پارچه‌های ضد سرما و بادگیر طراحی‌های مدرن و
        به‌روز مطابق با ترندهای جهانی قیمت‌گذاری منصفانه و مناسب برای همه
        سلیقه‌ها تضمین کیفیت و امکان بازگشت کالا ارسال سریع و پشتیبانی دائمی
        برای رضایت مشتریان اینجا جاییه که استایل پاییزی و زمستانی شما کامل میشه؛
        چه به دنبال هودی گرم باشید، چه کاپشن مقاوم، چه بوت و نیم‌بوت‌های خاص. با
        ما، هم گرم بمونید و هم خاص و متفاوت دیده بشید.
      </p>
      <div className="flex gap-2">
        <a
          href=""
          className="bg-blue-950 text-white text-xs p-1 px-2 rounded-2xl flex w-fit items-center gap-1"
        >
          درباره ما بیشتر بدانید <IoMdArrowDropleftCircle size={13} />
        </a>
        <a
          href=""
          className="bg-cyan-700 text-white text-sm p-1 px-2 rounded-2xl flex w-fit items-center gap-2"
        >
          مشاهده محصولات <FaShoppingBasket size={17} />
        </a>
      </div>
    </section>
  );
}
