"use client";

import { cn } from "@/utils/cn";
import { IoCopyOutline } from "react-icons/io5";
import { BackgroundGradientAnimation } from "./GradientBG";
import Lottie from "react-lottie";
import { useState } from "react";
import animationData from "@/data/confetti.json";
import MagicButton from "./MagicButton";
import Image from "next/image";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] md:grid-cols-3 gap-4 mx-auto max-w-9xl",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  id,
  img,
  imgClassName,
  titleClassname,
  spareImg,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  id?: number;
  img?: string;
  imgClassName?: string;
  titleClassname?: string;
  spareImg?: string;
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("rodrigo.vitelaru23@gmail.com");
    setCopied(true);
  };

  return (
    <div
      className={cn(
        "row-span-1 rounded-3xl overflow-hidden relative group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4 border border-white/[0.1]",
        className
      )}
      style={{
        background: "rgb(4,7,29)",
        backgroundColor:
          "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
    >
      <div className={`${id === 6 && "flex justify-center"} h-full`}>
        <div className="w-full h-full absolute">
          {img && (
            <Image
              src={img}
              alt={img}
              width={400}
              height={400}
              className={cn(
                imgClassName,
                "w-full h-full object-cover object-center"
              )}
            />
          )}
        </div>
        <div
          className={`absolute right-0 -bottom-5 ${
            id === 5 && "w-full h-full opacity-50"
          }`}
        >
          {spareImg && (
            <Image
              src={spareImg}
              alt={spareImg}
              width={300}
              height={300}
              className={"object-cover object-center w-full h-full"}
            />
          )}
        </div>
        {id === 6 && (
          <BackgroundGradientAnimation>
            {/*<div className="absolute z-50 flex items-center justify-center text-white font-bold"/> */}
          </BackgroundGradientAnimation>
        )}
        <div
          className={cn(
            titleClassname,
            "group-hover/bento:translate-x-2 transition duration-200 md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10"
          )}
        >
          <div className="font-sans font-extralight text-[#bfc0c5] text-sm md:text-xs lg:text-base z-10">
            {description}
          </div>
          <div className="font-sans font-bold text-lg lg:text-2xl max-w-96 z-10 text-white">
            {title}
          </div>
          {id === 3 && (
            <div className="flex gap-4 lg:gap-5 w-fit absolute -right-3 lg:-right-2">
              <div className="flex flex-col gap-3 lg:gap-7">
                {["React.js", "Next.js", "TypeScript", "Java"].map((item) => (
                  <span
                    key={item}
                    className="py-2 lg:px-3 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132E] text-[#c1c2d3]"
                  >
                    {item}
                  </span>
                ))}
                <span className="py-3 px-3 rounded-lg text-center bg-[#10132e]" />
              </div>
              <span className="px-1 rounded-lg text-center bg-[#f1f1f10a]" />
              <div className="flex flex-col gap-3 lg:gap-6">
                {["Vue.js", "MySqL", "MongoDB", "Node.js"].map((item) => (
                  <span
                    key={item}
                    className="py-2 lg:px-3 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132E] text-[#c1c2d3]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          )}

          {id === 6 && (
            <div className="mt-5 relative">
              <div className={`absolute -bottom-5 right-0`}>
                <Lottie
                  options={{
                    loop: copied,
                    autoplay: copied,
                    animationData,
                    rendererSettings: {
                      preserveAspectRatio: "xMidYMid meet",
                    },
                  }}
                />
              </div>

              <MagicButton
                title={copied ? "Email copied" : "Copy my email"}
                icon={<IoCopyOutline />}
                position="left"
                otherClasses="!bg-[#161a31]"
                handleClick={handleCopy}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
