import Link from "next/link";
import React from "react";
import { SiBehance, SiGithub, SiLinkedin, SiX } from "react-icons/si";
import { cn } from "@/lib/utils";

export default function Navbar({ className }:{className?: string}) {
  const socials = [
    {
      link: "https://www.linkedin.com/in/kshitijkhurrana/",
      label: "LinkedIn",
      Icon: <SiLinkedin />,
    },
    {
      link: "https://github.com/developerkhurrana",
      label: "Github",
      Icon: <SiGithub />,
    },
    {
      link: "https://twitter.com/khurranacodes",
      label: "X",
      Icon: <SiX />,
    },
    {
      link: "https://www.behance.net/thekshitijkhurrana?log_shim_removal=1",
      label: "Behance",
      Icon: <SiBehance />,
    },
  ];
  return (
    <nav className={cn("py-10 flex justify-between items-center", className)}>
      <h1 className="font-bold text-2xl underline underline-offset-8 decoration-green-500 -rotate-2">
        developerKhurrana 💻
      </h1>
      <div className="flex items-center gap-5">
        {socials.map((social, i) => {
          const { link, label, Icon } = social;
          return (
            <Link key={i} href={link} aria-label={label}>
              <span className="text-2xl hover:text-3xl transition-all">
                {Icon}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
