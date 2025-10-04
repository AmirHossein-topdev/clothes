import React from "react";
import Blog from "../components/Blog";
import Comments from "./Comments";
export default function page() {
  const toPersianDigits = (num) => {
    return num.toString().replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[d]);
  };
  const progressData = [
    { label: "کیفیت محصولات", value: 92 },
    { label: "پشتیبانی و پاسخگویی", value: 88 },
    { label: "زمان تحویل سفارش‌ها", value: 85 },
    { label: "رضایت کلی مشتریان", value: 90 },
  ];

  return (
    <section className="my-10 mb-30 w-[85vw] mx-auto">
      {/* texts */}
      <section className="mb-2">
        <h2 className="bg-sky-200 w-fit p-1 px-3 rounded-2xl text-[13px]">
          درباره ما
        </h2>
        <h1 className="my-2 font-extrabold text-2xl font-stretch-100%">
          درباره فروشگاه آنلاین پوشاک زمستانه
        </h1>
        <p className="mb-3 font-[Vazir] font-extralight text-[12px] leading-loose">
          فروشگاه ما با تمرکز ویژه بر روی پوشاک پاییزی و زمستانی ایجاد شده تا
          شما تجربه‌ای متفاوت از خرید لباس گرم و شیک داشته باشید. ما باور داریم
          که لباس فقط یک پوشش نیست، بلکه ترکیبی از راحتی، زیبایی و اعتماد به نفس
          است. استفاده از بهترین متریال و پارچه‌های ضد سرما و بادگیر طراحی‌های
          مدرن و به‌روز مطابق با ترندهای جهانی قیمت‌گذاری منصفانه و مناسب برای
          همه فروشگاه ما با تمرکز ویژه بر روی پوشاک پاییزی و زمستانی ایجاد شده
          تا شما تجربه‌ای متفاوت از خرید لباس گرم و شیک داشته باشید. ما باور
          داریم که لباس فقط یک پوشش نیست، بلکه ترکیبی از راحتی، زیبایی و اعتماد
        </p>
      </section>
      {/* values */}
      <section className="md:flex items-center">
        <div className="md:w-1/2 bg-sky-700 md:h-80 text-white font-black text-center rounded-2xl p-5">
          آمار سایت فروشگاهی ما !!
          <div className="bg-white text-black text-xs block w-fit mx-auto mt-2 mb-5 p-3 rounded-2xl">
            میانگین آمار ما{" "}
            <span className="bg-cyan-500 rounded-lg p-1">۸۹٪</span> است
          </div>
          <div className="bg-gray-200 rounded-xl text-black text-xs p-4 space-y-3">
            {progressData.map((item, index) => (
              <div key={index} className="flex items-center gap-3">
                {/* متن سمت راست */}
                <span className="whitespace-nowrap w-40 text-right text-gray-700">
                  {item.label} :
                </span>

                {/* Progress Bar */}
                <div className="flex-1 relative">
                  <div className="bg-gray-300 rounded-full h-3 md:h-6 overflow-hidden flex flex-row-reverse">
                    <div
                      className="bg-cyan-600 h-3 md:h-6 flex items-center justify-center text-white font-bold text-[9px] md:text-xs transition-all duration-700"
                      style={{ width: `${item.value}%` }}
                    >
                      {toPersianDigits(item.value)}٪
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* banners */}

        <div className="relative ms-[10vw] my-20 md:w-1/2">
          {/* عکس اول */}
          <img
            src="/images/banner3.jpg"
            alt="banner3"
            className="rounded-2xl h-60 md:h-72 border-1"
          />

          {/* عکس دوم */}
          <img
            src="/images/banner4.jpg"
            alt="banner4"
            className="absolute -top-10 -right-10 h-28 md:h-32 rounded-xl border-2 "
          />
        </div>
      </section>
      <section className="text-center">
        <h2 className="bg-sky-200 w-fit p-1 px-3 rounded-2xl mx-auto text-[13px]">
          نظرات مشتریان
        </h2>
        <h1 className="my-3 font-black text-2xl font-stretch-100%">
          مشتریان ما چه میگویند ؟
        </h1>
        <Comments />
      </section>
      <Blog />
    </section>
  );
}
