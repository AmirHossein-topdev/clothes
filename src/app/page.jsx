"use client";
import React from "react";
import Stories from "./components/Stories";
import GradeBox1 from "./shop/GradeBox1";
import GradeBox2 from "./shop/GradeBox2";
import GradeBox3 from "./shop/GradeBox3";
import Categories from "./shop/Categories";
import Hero from "./components/Hero";
import OffBox from "./components/OffBox";
import Blog from "./components/Blog";
import WhyUs from "./components/WhyUs";
export default function Home() {
  return (
    <section className="w-[90vw] mx-auto">
      <Stories />
      <Hero />
      <Categories />
      <GradeBox1 />
      <GradeBox2 />
      <GradeBox3 />
      <OffBox />
      <WhyUs />
      <Blog />
    </section>
  );
}
