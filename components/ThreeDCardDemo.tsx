"use client";

import Image from "next/image";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";

export function ThreeDCardDemo() {
  const handleRedirect = (url: string) => {
    window.location.href = url;
  };

  return (
    <>
      <div
        className="inter-var gap-4 flex flex-col lg:flex-row lg:justify-center"
        id="projects"
      >
        <CardContainer className="w-full lg:w-full md:w-full">
          <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:bg-opacity-[10%] dark:border-white/[0.02] border-black/[0.1] h-auto rounded-xl p-6 border">
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-neutral-600 dark:text-white"
            >
              CO2 Laser cut projects
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
            >
              This machine is the future
            </CardItem>
            <CardItem
              translateZ="100"
              rotateX={20}
              rotateZ={-10}
              className="w-full mt-4"
            >
              <Image
                src="/bg16.png"
                height="1000"
                width="1000"
                className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt="thumbnail"
              />
            </CardItem>
            <div className="flex justify-center items-center mt-20">
              <CardItem
                translateZ={20}
                translateX={-40}
                as="button"
                onClick={() => handleRedirect("/CO2Laser")}
                height="200"
                width="200"
                className="px-4 py-2 rounded-xl text-xs font-semibold dark:text-white text-[15px]"
              >
                View Now →
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>

        <CardContainer className="w-full lg:w-full">
          <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:bg-opacity-[10%] dark:border-white/[0.02] border-black/[0.4] h-auto rounded-xl p-6 border">
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-neutral-600 dark:text-white"
            >
              3D Printer Machine
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
            >
              All you need is here, in our Laboratory
            </CardItem>
            <CardItem
              translateZ="100"
              rotateX={20}
              rotateZ={-10}
              className="w-full mt-4"
            >
              <Image
                src="/bg17.png"
                height="1000"
                width="1000"
                className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt="thumbnail"
              />
            </CardItem>
            <div className="flex justify-center items-center mt-20">
              <CardItem
                translateZ={20}
                translateX={-40}
                as="button"
                onClick={() => handleRedirect("/3DPrinter")}
                className="px-4 py-2 rounded-xl text-xs font-semibold dark:text-white text-[15px]"
              >
                View Now →
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>
      </div>
    </>
  );
}
