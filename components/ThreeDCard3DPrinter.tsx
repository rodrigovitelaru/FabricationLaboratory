"use client";

import Image from "next/image";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";

export function ThreeDCard3DPrinter() {
  const handleRedirect = (url: string) => {
    window.location.href = url;
  };

  return (
    <>
      <div
        className="inter-var gap-4 flex flex-col lg:flex-wrap lg:flex-row"
        id="projects"
      >
        <CardContainer className="w-full lg:w-full md:w-full">
          <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:bg-opacity-[10%] dark:border-white/[0.02] border-black/[0.1] h-auto rounded-xl p-6 border">
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-neutral-600 dark:text-white"
            >
              Wine gift box
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
            >
              Wine Box is all do you need!
            </CardItem>
            <CardItem
              translateZ="100"
              rotateX={20}
              rotateZ={-10}
              className="w-full mt-4"
            >
              <Image
                src="/d1.png"
                height="1000"
                width="1000"
                className="h-full w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt="thumbnail"
              />
            </CardItem>
            <div className="flex justify-center items-center mt-20">
              <CardItem
                translateZ={20}
                translateX={-40}
                as="button"
                onClick={() => handleRedirect("/contact")}
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
              Photo Frame
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
            >
              This is perfect for you photo&apos;s
            </CardItem>
            <CardItem
              translateZ="100"
              rotateX={20}
              rotateZ={-10}
              className="w-full mt-4"
            >
              <Image
                src="/d2.png"
                height="1000"
                width="1000"
                className="h-full w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt="thumbnail"
              />
            </CardItem>
            <div className="flex justify-center items-center mt-20">
              <CardItem
                translateZ={20}
                translateX={-40}
                as="button"
                onClick={() => handleRedirect("/contact")}
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
              Coaster&apos;s
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
            >
              This is perfect for you coffe
            </CardItem>
            <CardItem
              translateZ="100"
              rotateX={20}
              rotateZ={-10}
              className="w-full mt-4"
            >
              <Image
                src="/d3.png"
                height="1000"
                width="1000"
                className="h-full w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt="thumbnail"
              />
            </CardItem>
            <div className="flex justify-center items-center mt-20">
              <CardItem
                translateZ={20}
                translateX={-40}
                as="button"
                onClick={() => handleRedirect("/contact")}
                height="1000"
                width="1000"
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
              Coaster&apos;s
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
            >
              This is perfect for you coffe
            </CardItem>
            <CardItem
              translateZ="100"
              rotateX={20}
              rotateZ={-10}
              className="w-full mt-4"
            >
              <Image
                src="/d4.png"
                height="1000"
                width="1000"
                className="h-full w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt="thumbnail"
              />
            </CardItem>
            <div className="flex justify-center items-center mt-20">
              <CardItem
                translateZ={20}
                translateX={-40}
                as="button"
                onClick={() => handleRedirect("/contact")}
                height="1000"
                width="1000"
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
              Coaster&apos;s
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
            >
              This is perfect for you coffe
            </CardItem>
            <CardItem
              translateZ="100"
              rotateX={20}
              rotateZ={-10}
              className="w-full mt-4"
            >
              <Image
                src="/d5.png"
                height="1000"
                width="1000"
                className="h-full w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt="thumbnail"
              />
            </CardItem>
            <div className="flex justify-center items-center mt-20">
              <CardItem
                translateZ={20}
                translateX={-40}
                as="button"
                onClick={() => handleRedirect("/contact")}
                height="1000"
                width="1000"
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
              Coaster&apos;s
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
            >
              This is perfect for you coffe
            </CardItem>
            <CardItem
              translateZ="100"
              rotateX={20}
              rotateZ={-10}
              className="w-full mt-4"
            >
              <Image
                src="/d6.png"
                height="1000"
                width="1000"
                className="h-full w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt="thumbnail"
              />
            </CardItem>
            <div className="flex justify-center items-center mt-20">
              <CardItem
                translateZ={20}
                translateX={-40}
                as="button"
                onClick={() => handleRedirect("/contact")}
                height="1000"
                width="1000"
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
              Coaster&apos;s
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
            >
              This is perfect for you coffe
            </CardItem>
            <CardItem
              translateZ="100"
              rotateX={20}
              rotateZ={-10}
              className="w-full mt-4"
            >
              <Image
                src="/d7.png"
                height="1000"
                width="1000"
                className="h-full w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt="thumbnail"
              />
            </CardItem>
            <div className="flex justify-center items-center mt-20">
              <CardItem
                translateZ={20}
                translateX={-40}
                as="button"
                onClick={() => handleRedirect("/contact")}
                height="1000"
                width="1000"
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
              Coaster&apos;s
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
            >
              This is perfect for you coffe
            </CardItem>
            <CardItem
              translateZ="100"
              rotateX={20}
              rotateZ={-10}
              className="w-full mt-4"
            >
              <Image
                src="/d8.png"
                height="1000"
                width="1000"
                className="h-full w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt="thumbnail"
              />
            </CardItem>
            <div className="flex justify-center items-center mt-20">
              <CardItem
                translateZ={20}
                translateX={-40}
                as="button"
                onClick={() => handleRedirect("/contact")}
                height="1000"
                width="1000"
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
              Coaster&apos;s
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
            >
              This is perfect for you coffe
            </CardItem>
            <CardItem
              translateZ="100"
              rotateX={20}
              rotateZ={-10}
              className="w-full mt-4"
            >
              <Image
                src="/d9.png"
                height="1000"
                width="1000"
                className="h-full w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt="thumbnail"
              />
            </CardItem>
            <div className="flex justify-center items-center mt-20">
              <CardItem
                translateZ={20}
                translateX={-40}
                as="button"
                onClick={() => handleRedirect("/contact")}
                height="1000"
                width="1000"
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
              Coaster&apos;s
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
            >
              This is perfect for you coffe
            </CardItem>
            <CardItem
              translateZ="100"
              rotateX={20}
              rotateZ={-10}
              className="w-full mt-4"
            >
              <Image
                src="/d10.png"
                height="1000"
                width="1000"
                className="h-full w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt="thumbnail"
              />
            </CardItem>
            <div className="flex justify-center items-center mt-20">
              <CardItem
                translateZ={20}
                translateX={-40}
                as="button"
                onClick={() => handleRedirect("/contact")}
                height="1000"
                width="1000"
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
              Coaster&apos;s
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
            >
              This is perfect for you coffe
            </CardItem>
            <CardItem
              translateZ="100"
              rotateX={20}
              rotateZ={-10}
              className="w-full mt-4"
            >
              <Image
                src="/d11.png"
                height="1000"
                width="1000"
                className="h-full w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt="thumbnail"
              />
            </CardItem>
            <div className="flex justify-center items-center mt-20">
              <CardItem
                translateZ={20}
                translateX={-40}
                as="button"
                onClick={() => handleRedirect("/contact")}
                height="1000"
                width="1000"
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
              Coaster&apos;s
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
            >
              This is perfect for you coffe
            </CardItem>
            <CardItem
              translateZ="100"
              rotateX={20}
              rotateZ={-10}
              className="w-full mt-4"
            >
              <Image
                src="/d12.png"
                height="1000"
                width="1000"
                className="h-full w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt="thumbnail"
              />
            </CardItem>
            <div className="flex justify-center items-center mt-20">
              <CardItem
                translateZ={20}
                translateX={-40}
                as="button"
                onClick={() => handleRedirect("/contact")}
                height="1000"
                width="1000"
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
              Coaster&apos;s
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
            >
              This is perfect for you coffe
            </CardItem>
            <CardItem
              translateZ="100"
              rotateX={20}
              rotateZ={-10}
              className="w-full mt-4"
            >
              <Image
                src="/d13.png"
                height="1000"
                width="1000"
                className="h-full w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt="thumbnail"
              />
            </CardItem>
            <div className="flex justify-center items-center mt-20">
              <CardItem
                translateZ={20}
                translateX={-40}
                as="button"
                onClick={() => handleRedirect("/contact")}
                height="1000"
                width="1000"
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
              Coaster&apos;s
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
            >
              This is perfect for you coffe
            </CardItem>
            <CardItem
              translateZ="100"
              rotateX={20}
              rotateZ={-10}
              className="w-full mt-4"
            >
              <Image
                src="/d14.png"
                height="1000"
                width="1000"
                className="h-full w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt="thumbnail"
              />
            </CardItem>
            <div className="flex justify-center items-center mt-20">
              <CardItem
                translateZ={20}
                translateX={-40}
                as="button"
                onClick={() => handleRedirect("/contact")}
                height="1000"
                width="1000"
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
              Coaster&apos;s
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
            >
              This is perfect for you coffe
            </CardItem>
            <CardItem
              translateZ="100"
              rotateX={20}
              rotateZ={-10}
              className="w-full mt-4"
            >
              <Image
                src="/d15.png"
                height="1000"
                width="1000"
                className="h-full w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt="thumbnail"
              />
            </CardItem>
            <div className="flex justify-center items-center mt-20">
              <CardItem
                translateZ={20}
                translateX={-40}
                as="button"
                onClick={() => handleRedirect("/contact")}
                height="1000"
                width="1000"
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