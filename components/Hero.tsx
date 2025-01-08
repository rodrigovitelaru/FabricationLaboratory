"use client";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import { BackgroundBeamsWithCollision } from "./ui/bgbeamscollision";

const Hero = () => {
  return (
    <BackgroundBeamsWithCollision>
      <div className="pb-20 pt-36">
        <div>
          <Spotlight
            className="-top-50 -left-40 md:-left-32 md:-top-20 h-screen rotate-180"
            fill="white"
          />
          <Spotlight
            className="top-20 left-full h-[80vh] w-[50vw]"
            fill="purple"
          />
          <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="blue" />
        </div>

        <div className="h-screen w-full flex items-center justify-center absolute top-0 left-0">
          <div className="absolute pointer-events-none inset-0 flex items-center justify-center [mask-image:radial-gradient(ellipse_at_center,transparent_20%,blue)]" />
        </div>
        <div className="flex justify-center relative my-20 z-10">
          <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
            <h2 className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
              New Technology Pack
            </h2>

            <TextGenerateEffect
              className="text-center text-[40px] md:text-5xl lg:text-6xl"
              words="All you needs it's here, in Our Fabrication Laboratory "
            />

            <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl text-white-100">
              Enjoy our structure!
            </p>
          </div>
        </div>
      </div>
    </BackgroundBeamsWithCollision>
  );
};

export default Hero;
