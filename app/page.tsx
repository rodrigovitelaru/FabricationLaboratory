"use client";
import dynamic from "next/dynamic";

const Hero = dynamic(() => import("../components/Hero"), { ssr: false });
const Grid = dynamic(() => import("../components/Grid"), { ssr: false });
const RecentProjects = dynamic(() => import("@/components/RecentProjects"), {
  ssr: false,
});
const Clients = dynamic(() => import("@/components/Clients"), { ssr: false });
const Experience = dynamic(() => import("@/components/Experience"), {
  ssr: false,
});
const Footer = dynamic(() => import("@/components/Footer"), { ssr: false });

import { FloatingNav } from "../components/ui/FloatingNav";
import { FaEnvelope, FaHome, FaProjectDiagram, FaUser } from "react-icons/fa";

export default function Home() {
  const navItems = [
    { id: 1, name: "Home", link: "#home", icon: <FaHome /> },
    { id: 2, name: "About", link: "#about", icon: <FaUser /> },
    { id: 3, name: "Projects", link: "#projects", icon: <FaProjectDiagram /> },
    { id: 4, name: "Contact", link: "#contact", icon: <FaEnvelope /> },
  ];

  return (
    <main className="relative flex justify-center bg-black-100 md:bg-black-100 items-center flex-col mx-auto sm:px-10 px-5 overflow-clip">
      <div className="max-w-7xl w-full ">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <RecentProjects />
        <Clients />
        <Experience />
        <Footer />
      </div>
    </main>
  );
}
