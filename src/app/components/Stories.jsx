"use client";
import { useState } from "react";
import Stories from "react-insta-stories";

export default function Story() {
  const [activeIndex, setActiveIndex] = useState(null);

  const users = [
    {
      id: 1,
      name: "کاپشن",
      avatar: "/images/jacket-logo.webp",
      stories: [
        { url: "/images/jacket1.webp", duration: 3000, type: "image" },
        { url: "/images/jacket2.webp", duration: 4000, type: "image" },
        { url: "/images/jacket3.webp", duration: 2000, type: "image" },
      ],
    },
    {
      id: 2,
      name: "شال و کلاه",
      avatar: "/images/scarf-logo.webp",
      stories: [
        { url: "/images/scarf1.webp", duration: 5000, type: "image" },
        { url: "/images/scarf2.webp", duration: 3000, type: "image" },
        { url: "/images/scarf.webp", duration: 3000, type: "image" },
      ],
    },
    {
      id: 3,
      name: "چتر",
      avatar: "/images/umbrella1.webp",
      stories: [
        {
          url: "/images/umbrella2.webp",
          duration: 4000,
          type: "image",
        },
        {
          url: "/images/umbrella3.webp",
          duration: 4000,
          type: "image",
        },
      ],
    },
    {
      id: 4,
      name: "کاپشن",
      avatar: "/images/jacket-logo.webp",
      stories: [
        { url: "/images/jacket1.webp", duration: 3000, type: "image" },
        { url: "/images/jacket2.webp", duration: 4000, type: "image" },
        { url: "/images/jacket3.webp", duration: 2000, type: "image" },
      ],
    },
    {
      id: 5,
      name: "شال و کلاه",
      avatar: "/images/scarf-logo.webp",
      stories: [
        { url: "/images/scarf1.webp", duration: 5000, type: "image" },
        { url: "/images/scarf2.webp", duration: 3000, type: "image" },
        { url: "/images/scarf.webp", duration: 3000, type: "image" },
      ],
    },
    {
      id: 6,
      name: "چتر",
      avatar: "/images/umbrella1.webp",
      stories: [
        {
          url: "/images/umbrella2.webp",
          duration: 4000,
          type: "image",
        },
        {
          url: "/images/umbrella3.webp",
          duration: 4000,
          type: "image",
        },
      ],
    },
  ];

  const closeStories = () => setActiveIndex(null);

  const nextUser = () => {
    if (activeIndex !== null && activeIndex < users.length - 1) {
      setActiveIndex(activeIndex + 1);
    } else {
      closeStories();
    }
  };

  return (
    <section dir="rtl" className="font-[Vazir] -ms-5">
      {/* نوار استوری‌ها */}
      <div className="flex overflow-x-auto p-3 bg-white mb-5 gap-2 hide-scrollbar">
        {users.map((user, idx) => (
          <button
            key={user.id}
            className="flex flex-col items-center focus:outline-none"
            onClick={() => setActiveIndex(idx)}
          >
            <div className="w-14 md:w-16 h-14 md:h-16 rounded-full border-2 border-blue-500 p-1 cursor-pointer ">
              <img
                src={user.avatar}
                alt={user.name}
                className="w-full h-full rounded-full object-cover"
              />
            </div>
            <span className="text-xs mt-1">{user.name}</span>
          </button>
        ))}
      </div>

      {/* نمایش استوری انتخاب شده */}
      {activeIndex !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50">
          <div className="w-[320px] h-[520px] rounded-xl overflow-hidden">
            <Stories
              stories={users[activeIndex].stories}
              defaultInterval={4000}
              width="100%"
              height="100%"
              onAllStoriesEnd={nextUser}
              style={{ direction: "rtl" }} // راست به چپ برای progress bar
            />
          </div>
          {/* دکمه بستن */}
          <button
            className="absolute top-5 left-5 text-white text-xl"
            onClick={closeStories}
          >
            ✕
          </button>
        </div>
      )}
    </section>
  );
}
