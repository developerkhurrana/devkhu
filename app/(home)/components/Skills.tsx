"use client";

import React from "react";
import Title from "./Title";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import {
  SiAdobeillustrator,
  SiAdobephotoshop,
  SiBootstrap,
  SiChatbot,
  SiCss3,
  SiFigma,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiNextdotjs,
  SiReact,
  SiSass,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

export default function Skills() {
  const skills = [
    { text: "HTML", Icon: SiHtml5 },
    { text: "CSS", Icon: SiCss3 },
    { text: "JavaScript", Icon: SiJavascript },
    { text: "TypeScript", Icon: SiTypescript },
    { text: "React", Icon: SiReact },
    { text: "Next.js", Icon: SiNextdotjs },
    { text: "Sass", Icon: SiSass },
    { text: "Tailwind", Icon: SiTailwindcss },
    { text: "Bootstrap", Icon: SiBootstrap },
    { text: "Git", Icon: SiGithub },
    { text: "Figma", Icon: SiFigma },
    { text: "Photoshop", Icon: SiAdobephotoshop },
    { text: "ChatGPT", Icon: SiChatbot },
    { text: "Illustrator", Icon: SiAdobeillustrator },
  ];
  return (
    <div className="max-w-5xl mx-auto px-8">
      <Title
        text="Skills"
        className="mt-20 flex flex-col items-center justify-center -rotate-6"
      />
      <HoverEffect items={skills} />
    </div>
  );
}
