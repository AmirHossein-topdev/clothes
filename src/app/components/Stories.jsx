"use client";
import Stories from "react-insta-stories";

export default function InstaStories() {
  const stories = [
    {
      url: "/images/story1.jpg",
      duration: 5000, // 5 ثانیه
    },
    {
      url: "/images/story2.jpg",
      duration: 3000,
    },
    {
      content: ({ action, isPaused }) => (
        <div className="flex items-center justify-center h-full bg-black text-white text-2xl">
          استوری سفارشی
        </div>
      ),
    },
  ];

  return (
    <div className="w-[300px] h-[500px] mx-auto mt-10 rounded-2xl overflow-hidden shadow-lg">
      <Stories
        stories={stories}
        defaultInterval={4000}
        width={"100%"}
        height={"100%"}
      />
    </div>
  );
}
