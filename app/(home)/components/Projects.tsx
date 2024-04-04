import React from "react";
import {
  SiAxios,
  SiCss3,
  SiFirebase,
  SiFramer,
  SiHtml5,
  SiJavascript,
  SiMui,
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiVite,
} from "react-icons/si";
import Title from "./Title";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { DirectionAwareHover } from "@/components/ui/direction-aware-hover";

export default function Projects() {
  const projects = [
    {
      title: "Responsive Sidebar",
      tech: [SiHtml5, SiJavascript],
      link: "https://responsive-sidebar-one.vercel.app/",
      cover: "/sidebar.png",
      background: "bg-green-500",
    },
    {
      title: "Netflix",
      tech: [SiNextdotjs, SiAxios, SiReact],
      link: "https://netflix-clone-dk.vercel.app/auth",
      cover: "/netflix.png",
      background: "bg-red-500",
    },
    {
      title: "Ochi",
      tech: [SiReact, SiVite, SiFramer],
      link: "https://ochi-clone-nu.vercel.app/",
      cover: "/ochi.png",
      background: "bg-yellow-500",
    },
    {
      title: "Weather",
      tech: [SiHtml5, SiCss3, SiJavascript],
      link: "https://weather-app-rho-flame-25.vercel.app/",
      cover: "/weather.png",
      background: "bg-yellow-500",
    },
    {
      title: "amazon",
      tech: [SiReact, SiFirebase, SiMui],
      link: "https://amazon-deploy-lovat.vercel.app/",
      cover: "/amazon.png",
      background: "bg-blue-500",
    },
    {
      title: "shopreact",
      tech: [SiReact],
      link: "https://shopreact-coral.vercel.app/",
      cover: "/shop.png",
      background: "bg-gray-500",
    },
    {
      title: "Nike Webpage",
      tech: [SiReact, SiTailwindcss, SiJavascript],
      link: "https://nikeweb-murex.vercel.app/",
      cover: "/nike.png",
      background: "bg-orange-500",
    },
    {
      title: "Travel Webpage",
      tech: [SiReact, SiTailwindcss, SiJavascript],
      link: "https://travel-app-iota-eosin.vercel.app/",
      cover: "/travel.png",
      background: "bg-green-500",
    },
  ];
  return (
    <div className=" py-10 p-5 sm:p-0">
      <Title
        text="Projects"
        className="mt-20 flex flex-col items-center justify-center rotate-6"
      />
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 pt-20">
        {projects.map((project, index) => {
          return (
            <Link href={project.link} key={index}>
              <div className={cn("p-5 rounded-md", project.background)}>
                <DirectionAwareHover
                  imageUrl={project.cover}
                  className="w-ful space-y-5 cursor-pointer"
                >
                  <div className="space-y-5">
                    <h1 className="text-2xl font-bold">{project.title}</h1>
                    <div className="flex items-center gap-5">
                      {project.tech.map((Icon, index) => {
                        return <Icon className="w-8 h-8" key={index} />;
                      })}
                    </div>{" "}
                  </div>
                </DirectionAwareHover>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
