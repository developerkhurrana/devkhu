"use client";

import Link from "next/link";
import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import Title from "./Title";

export default function HeroSection(props: Props) {
  const [text] = useTypewriter({
    words: [
      "Hi, I'm Kshitij Khurrana",
      "A UX Detective",
      "A UI Artist",
      "A Continuous Learner",
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className=" min-h-[60vh] flex-col max-w-7xl flex items-center justify-center">
      <h2 className="pb-2 text-sm uppercase text-white tracking-[15px]">
        UI/UX Designer
      </h2>
      <h1 className="text-5xl lg:text-6xl font-semibold text-center">
        <span className="mr-3">{text}</span>
        <Cursor cursorColor="green" />
      </h1>
      <Link
        href={"mailto:thekshitijkhurrana@gmail.com"}
        className="inline-block mt-10 group "
      >
        <Title text="Contact me" />
      </Link>
    </div>
  );
}