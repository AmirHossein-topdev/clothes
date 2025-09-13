import { FaShoppingCart } from "react-icons/fa";

export default function ProductCard() {
  return (
    <div className="relative w-64 h-80">
      {/* SVG مشکی اصلی */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="5 0 12 16"
        className="w-full h-full"
      >
        <path
          d="M 5 12 M 5 1 Q 5 0 6 0 L 16 0 Q 17 0 17 1 L 17 15 Q 17 16 16 16 L 9 16 Q 8 16 8 15 L 8 14 Q 8 13 7 13 L 6 13 Q 5 13 5 12 L 5 1 M 8 15 L 8 14 M 16 16"
          fill="#246854"
        />
      </svg>

      {/* بخش محتوای محصول روی SVG */}
      <div className="absolute top-2 left-1 right-1 bottom-0 flex flex-col items-center text-white">
        {/* دسته‌بندی */}
        <span className="text-xs absolute right-3 top-0 bg-gray-800 px-2 py-1 rounded-full w-max">
          کاپشن
        </span>

        {/* عکس محصول */}
        <div className="mt-6">
          <img
            src="/images/jacket1.webp"
            alt="محصول"
            className="h-40 w-48 object-fit rounded-xl"
          />
        </div>

        {/* متن‌ها زیر عکس */}
        <div className="mt-2 w-full ps-5 text-right">
          <h3 className="text-lg font-semibold">نام محصول</h3>
          <p className="text-xs text-gray-300 mt-1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum,
            quam.
          </p>
          <span className="text-sm font-bold mt-4 block">₩123,000</span>
        </div>
      </div>

      {/* مربع آبی پایین سمت چپ با آیکون سبد خرید */}
      <div className="absolute bottom-1 left-4 w-12 h-12 bg-blue-500 rounded-2xl flex items-center justify-center text-white shadow-lg cursor-pointer">
        <FaShoppingCart size={20} />
      </div>
    </div>
  );
}
