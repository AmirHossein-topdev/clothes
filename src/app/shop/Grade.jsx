import { HiShoppingCart } from "react-icons/hi";

export default function Grade({ product }) {
  return (
    <div className="relative w-64 h-80 hover:scale-95 duration-300 ease-in-out">
      {/* SVG پس‌زمینه */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="5 0 12 16"
        className="w-full h-full"
      >
        <path
          d="M 5 12 M 5 1 Q 5 0 6 0 L 16 0 Q 17 0 17 1 L 17 15 Q 17 16 16 16 L 9 16 Q 8 16 8 15 L 8 14 Q 8 13 7 13 L 6 13 Q 5 13 5 12 L 5 1 M 8 15 L 8 14 M 16 16"
          className="fill-white/40 z-20"
        />
      </svg>

      {/* محتوای محصول */}
      <div className="absolute top-2 left-1 right-1 bottom-0 flex flex-col items-center text-white">
        {/* دسته‌بندی */}
        <span className="text-xs absolute right-3 top-0 bg-sky-700 px-2 py-1 rounded-full w-max">
          {product.category}
        </span>

        {/* عکس محصول */}
        <div className="mt-6 rounded-2xl">
          <img
            src={product.image}
            alt={product.name}
            className="h-40 w-48 object-fit rounded-2xl"
          />
        </div>

        {/* توضیحات */}
        <div className="mt-2 w-full ps-5 text-right">
          <h3 className="text-lg font-semibold">{product.name}</h3>
          <p className="text-xs text-gray-300 mt-1 line-clamp-2">
            {product.description}
          </p>
        </div>
      </div>

      {/* قیمت و دکمه سبد خرید کنار هم */}
      <div className="absolute bottom-1 left-3 right-3 flex items-center justify-between px-3">
        <span className="text-sm font-bold text-white">
          {product.price.toLocaleString()} تومان
        </span>
        <div className="w-12 h-12 -me-3 bg-blue-500 rounded-2xl flex items-center justify-center text-white shadow-lg cursor-pointer">
          <HiShoppingCart size={20} />
        </div>
      </div>
    </div>
  );
}
