"use client";
import dynamic from "next/dynamic";

const Experience = dynamic(() => import("@/components/Experience"), {
  ssr: false,
});

import { FloatingNav } from "@/components/ui/FloatingNav";
import { FaEnvelope, FaHome, FaSatelliteDish, FaUser } from "react-icons/fa";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { socialMedia } from "@/data";
import Image from "next/image";

export default function Home() {
  const navItems = [
    { id: 1, name: "Home", link: "/", icon: <FaHome /> },
    {
      id: 5,
      name: "Technology",
      link: "/experience",
      icon: <FaSatelliteDish />,
    },
    { id: 2, name: "About", link: "/about", icon: <FaUser /> },
    { id: 4, name: "Contact", link: "/contact", icon: <FaEnvelope /> },
  ];

  return (
    <main className="relative flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-clip bg-black-100">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <BackgroundBeams />
        <Experience />
        <footer className="w-full pb-10 mb-[100px] md:mb-5" id="contact">
          <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
            <p className="text-white md:text-base text-sm md:font-normal font-light text-center">
              Copyright © 2024-2025 Fabrication Laboratory
            </p>
            <p className="text-white items-center">
              Created by Vitelaru Rodrigo
            </p>
            <div className="flex items-center md:gap-3 gap-6">
              {socialMedia.map((profile) => (
                <a
                  key={profile.id}
                  href={profile.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
                >
                  <Image
                    src={profile.img}
                    alt={profile.img}
                    width={20}
                    height={20}
                  />
                </a>
              ))}
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}
