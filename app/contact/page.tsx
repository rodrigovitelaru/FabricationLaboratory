"use client";
import { FloatingNav } from "@/components/ui/FloatingNav";
import {
  FaEnvelope,
  FaHome,
  FaLocationArrow,
  FaPhone,
  FaSatelliteDish,
  FaUser,
} from "react-icons/fa";
import MagicButton from "@/components/ui/MagicButton";
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
        <footer className="w-full pb-10 mb-[100px] md:mb-5" id="contact">
          <div className="flex flex-col items-center text-white">
            <h1 className="heading lg:max-w-[45vw] lg:mt-[30vh] mt-[20vh]">
              Are you ready for <span className="text-purple"> your</span> ideas
              to come to life?
            </h1>
            <p className="text-white-200 md:mt-10 lg:mt-[25vh] my-5 text-center">
              Contact us for any crazy idea :) !
            </p>
            <div className="flex flex-col items-center md:flex-row md:justify-center md:items-start">
              <a
                href="mailto:rodrigo.vitelaru23@gmail.com"
                className="md:mr-40"
              >
                <MagicButton
                  title="Contact US"
                  icon={<FaLocationArrow />}
                  position="right"
                />
              </a>
              <div className="flex flex-col md:flex-row md:items-start">
                <div className="flex items-center bg-gray-800 p-4 m-5 rounded-[30px] bg-opacity-10">
                  <FaEnvelope className="mr-2 text-purple" />
                  <div>
                    <p className="text-white">Email</p>
                    <p className="text-white-200">
                      FabricationLabroatory@gmail.com
                    </p>
                  </div>
                </div>
                <div className="flex items-center bg-gray-800 p-4 m-5 rounded-[30px] bg-opacity-10">
                  <FaPhone className="mr-2 text-purple" />
                  <div>
                    <p className="text-white">Phone</p>
                    <p className="text-white-200">+123 456 7890</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex  md:flex-row flex-col justify-between items-center lg:mt-[9vh]">
            <p className="text-white md:text-base text-sm md:font-normal font-light">
              Copyright © 2024-2025 Fabrication Laboratory
            </p>
            <p className="text-white text-center">
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
