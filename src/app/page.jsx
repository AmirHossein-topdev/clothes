"use client";
import React from "react";
import Stories from "./components/Stories";
import Grade from "./shop/Grade";
export default function Home() {
  return (
    <section>
      <Stories />
      <Grade />
      <p className="">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit atque
        odio architecto. Sed reiciendis dignissimos voluptate earum excepturi,
        dolore dolores accusantium soluta, repudiandae non obcaecati sit
        architecto dicta praesentium aperiam.
      </p>
    </section>
  );
}
