"use client";

import Image from "next/image";
import React from "react";

const Grid = () => {
  return (
    <footer
      className="w-full pb-10 mb-[100px] md:mb-5 lg:mt-60 bg-black-100"
      id="about"
    >
      <div className=" flex-col lg:flex-row lg:items-start text-white flex items-center bg-black bg-opacity-[3.6%] p-10 m-10 rounded-[30px] drop-shadow-2xl">
        <div className="lg:w-1/2">
          <h1 className="heading lg:max-w-[45vw]">
            Innovation in Action{" "}
            <span className="text-purple text-[35px]">Our</span> Cutting-Edge
            Technologies
          </h1>
          <p className="text-white-200 text-[20px] md:mt-10 my-5 text-left">
            At the heart of our success lies an unwavering commitment to
            state-of-the-art technology. CO2 lasers and fiber lasers offer
            precision and efficiency in numerous industrial applications, while
            3D printers bring creativity to life, allowing us to create complex
            parts quickly and accurately. By continuously investing in research
            and development, we ensure that we remain at the forefront of
            innovation, providing solutions that exceed expectations.
          </p>
        </div>
        <div className="lg:w-1/2 lg:flex lg:justify-end">
          {/* Imaginea ta va fi aici */}
          <Image
            src="/bg13.png"
            alt="Descriptive Alt Text"
            width={800}
            height={700}
            className="w-full lg:w-auto"
          />
        </div>
      </div>
    </footer>
  );
};

export default Grid;
