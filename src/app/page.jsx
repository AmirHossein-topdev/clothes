"use client";
import { useState } from "react";
import Stories from "react-insta-stories";
export default function Home() {
  const [activeUser, setActiveUser] = useState(null);

  // دیتا: هر یوزر لیست استوری خودش
  const users = [
    {
      id: 1,
      name: "Ali",
      avatar: "/avatars/ali.jpg",
      stories: [
        { url: "/stories/ali1.jpg", duration: 3000 },
        { url: "/stories/ali2.jpg", duration: 4000 },
      ],
    },
    {
      id: 2,
      name: "Sara",
      avatar: "/avatars/sara.jpg",
      stories: [
        { url: "/stories/sara1.jpg", duration: 5000 },
        { url: "/stories/sara2.jpg", duration: 3000 },
      ],
    },
    {
      id: 3,
      name: "Reza",
      avatar: "/avatars/reza.jpg",
      stories: [{ url: "/stories/reza1.jpg", duration: 4000 }],
    },
  ];

  return (
    <section className="">
      {/* Stories */}
      <section className="">
        <div>
          {/* نوار استوری‌ها */}
          <div className="flex space-x-3 overflow-x-auto p-3 bg-white border-b">
            {users.map((user) => (
              <button
                key={user.id}
                className="flex flex-col items-center focus:outline-none"
                onClick={() => setActiveUser(user)}
              >
                <div className="w-16 h-16 rounded-full border-2 border-pink-500 p-1">
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
          {activeUser && (
            <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50">
              <div className="w-[320px] h-[520px] rounded-xl overflow-hidden">
                <Stories
                  stories={activeUser.stories}
                  defaultInterval={4000}
                  width={"100%"}
                  height={"100%"}
                  onAllStoriesEnd={() => setActiveUser(null)}
                />
              </div>
              {/* دکمه بستن */}
              <button
                className="absolute top-5 right-5 text-white text-xl"
                onClick={() => setActiveUser(null)}
              >
                ✕
              </button>
            </div>
          )}
        </div>
      </section>
      <section className=" text-center flex justify-center items-center mt-[40vh] p-8">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim
        molestias, repudiandae corrupti repellendus quaerat perspiciatis magnam?
        Officia iste magni cumque fuga quisquam ea incidunt, cum totam commodi
        iure, optio minus.
      </section>
    </section>
  );
}
