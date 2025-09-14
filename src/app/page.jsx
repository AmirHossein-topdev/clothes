"use client";
import React from "react";
import Stories from "./components/Stories";
import GradeBox1 from "./shop/GradeBox1";
import GradeBox2 from "./shop/GradeBox2";
import GradeBox3 from "./shop/GradeBox3";
import Categories from "./shop/Categories";
import Hero from "./components/Hero";
export default function Home() {
  return (
    <section className="w-[90vw] mx-auto">
      <Stories />
      <Hero />
      <Categories />
      <GradeBox1 />
      <GradeBox2 />
      <GradeBox3 />
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
