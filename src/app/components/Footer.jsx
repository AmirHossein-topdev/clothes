import React from "react";
import {
  FaBullseye,
  FaCreditCard,
  FaCheckCircle,
  FaPhoneAlt,
} from "react-icons/fa";

export default function Footer() {
  const footerLinks = [
    {
      title: "خدمات مشتریان",
      links: [
        { name: "پرسش‌های متداول", href: "#" },
        { name: "شرایط بازگشت", href: "#" },
        { name: "راهنمای خرید", href: "#" },
        { name: "سنجش رضایتمندی", href: "#" },
      ],
    },
    {
      title: "درباره فروشگاه",
      links: [
        { name: "درباره ما", href: "#" },
        { name: "قوانین و مقررات", href: "#" },
        { name: "فرصت‌های شغلی", href: "#" },
        { name: "همکاری در فروش", href: "#" },
      ],
    },
    {
      title: "اطلاعات تماس",
      links: [
        {
          name: "آدرس: تهران، خیابان ولیعصر، کوچه طراحان سایت، پلاک 1",
          href: "#",
        },
        { name: "تلفن: 3456323", href: "tel:3456323" },
        { name: "ایمیل: info@yoursite.com", href: "mailto:info@yoursite.com" },
      ],
    },
  ];

  const featureCards = [
    {
      icon: <FaBullseye className="text-cyan-700" size={20} />,
      title: "کیفیت و قیمت مناسب",
      subtitle: "مورد پسند شما",
    },
    {
      icon: <FaCreditCard className="text-cyan-700" size={20} />,
      title: "امکان خرید اقساطی",
      subtitle: "بی قید و شرط",
    },
    {
      icon: <FaCheckCircle className="text-cyan-700" size={20} />,
      title: "تضمین اصالت کالا",
      subtitle: "کاملا تضمینی",
    },
    {
      icon: <FaPhoneAlt className="text-cyan-700" size={20} />,
      title: "پشتیبانی 24 ساعته",
      subtitle: "حتی روزهای تعطیل",
    },
  ];

  return (
    <footer className="relative bg-[url('/images/snow-bg.png')] bg-cover bg-center bg-white/60 bg-blend-overlay text-gray-900 p-8 ">
      {/* باکس سفید بالای فوتر */}
      <div className="absolute left-1/2 -top-16 md:-top-10 -translate-x-1/2 w-[90%] md:w-4/5 bg-white border rounded-2xl shadow-xl p-4 py-5 grid grid-cols-3 md:grid-cols-4 gap-y-6 gap-x-2">
        {featureCards.map((card, index) => (
          <div
            key={index}
            className={`flex items-start gap-2 ${
              index === 3 ? "col-span-3 md:col-span-1 justify-center" : ""
            }`}
          >
            <div>{card.icon}</div>
            <div>
              <h4 className="font-bold text-[11px] md:text-[14px] text-gray-800">
                {card.title}
              </h4>
              <p className="text-[9px] md:text-[12px] text-gray-500">
                {card.subtitle}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="max-w-6xl mx-auto mt-16 md:mt-5">
        {/* لوگو */}
        <img
          src="/images/snowman.png"
          alt="snowman"
          className="w-64 h-auto mb-6"
        />

        <p className="my-3 text-xs leading-relaxed max-w-2xl">
          در فروشگاه پوشاک زمستانی زیبا، ما بهترین و جذاب‌ترین پوشاک زمستانی را
          برای علاقه‌مندان به زمستان فراهم می‌کنیم. با تمرکز بر کیفیت، زیبایی و
          تنوع، هدف ما فروش محصولاتی است که حس خوب و گرما را به شما هدیه کند.
        </p>

        {/* ستون‌ها */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-6">
          {footerLinks.map((section) => (
            <div
              key={section.title}
              className={
                section.title === "اطلاعات تماس" ? "md:col-span-2" : ""
              }
            >
              <h3 className="font-bold text-lg mb-2">{section.title}</h3>
              <span className="block w-15 h-1 bg-cyan-700 mb-4 rounded"></span>
              <ul
                className={`space-y-2 text-sm ${
                  section.title === "اطلاعات تماس" ? "whitespace-nowrap" : ""
                }`}
              >
                {section.links.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="hover:text-blue-600 transition"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* کپی رایت پایین */}
        <div className="mt-10 border-t border-gray-600 pt-4 text-center text-xs">
          © 2025 فروشگاه پوشاک زمستانی زیبا | تمامی حقوق محفوظ است
        </div>
      </div>
    </footer>
  );
}
