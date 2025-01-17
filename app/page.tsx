"use client";
import dynamic from "next/dynamic";

const Hero = dynamic(() => import("../components/Hero"), { ssr: false });
const Footer = dynamic(() => import("@/components/Footer"), { ssr: false });

import { FloatingNav } from "../components/ui/FloatingNav";
import { FaEnvelope, FaHome, FaSatelliteDish, FaUser } from "react-icons/fa";
import { ThreeDCardDemo } from "@/components/ThreeDCardDemo";
import { LayoutGridDemo } from "@/components/LayoutGridDemo";
import { BackgroundBeams } from "@/components/ui/background-beams";

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
        <Hero />
        <BackgroundBeams />
        <LayoutGridDemo />
        <ThreeDCardDemo />
        <Footer />
      </div>
    </main>
  );
}
