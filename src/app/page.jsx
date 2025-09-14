"use client";
import React from "react";
import Stories from "./components/Stories";
import GradeBox1 from "./shop/GradeBox1";
import GradeBox2 from "./shop/GradeBox2";
import Categories from "./shop/Categories";
import Hero from "./components/Hero";
export default function Home() {
  return (
    <section className="w-[85vw] mx-auto">
      <Stories />
      <Hero />
      <Categories />
      <GradeBox1 />
      <GradeBox2 />
      {/* <Grade /> */}
      <p className="my-20 mx-auto w-[90vw]">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit atque
        odio architecto. Sed reiciendis dignissimos voluptate earum excepturi,
        dolore dolores accusantium soluta, repudiandae non obcaecati sit
        architecto dicta praesentium aperiam.
      </p>
    </section>
  );
}
