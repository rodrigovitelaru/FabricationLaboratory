"use client";

import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className="w-full pb-10 mb-[100px] md:mb-5 lg:mt-60">
      <div className="flex-col lg:flex-row lg:items-start text-white flex items-center  bg-black bg-opacity-[3.6%] p-10 m-10 rounded-[30px] drop-shadow-2xl">
        <div className="lg:w-1/2 lg:flex lg:justify-start">
          {/* Imaginea ta va fi aici */}
          <Image
            src="/bg14.png"
            alt="Descriptive Alt Text"
            width={900}
            height={800}
            className="w-full lg:w-auto"
          />
        </div>
        <div className="lg:w-1/2 text-left">
          <h1 className="heading lg:max-w-[45vw] text-left text-[35px]">
            Revolutionizing the Future{" "}
            <span className="text-purple text-left text-[35px]">
              with CO2 Lasers,
            </span>{" "}
            Fiber Lasers, and 3D Printers
          </h1>
          <p className="text-white text-opacity-[75%] md:mt-10 my-5 text-[20px] text-left">
            At our company, we are passionate about innovation and technology.
            From CO2 lasers and fiber lasers to cutting-edge 3D printers, we are
            dedicated to providing advanced solutions that turn ideas into
            reality. With a team of experts in the field and a customer-focused
            approach, we are your trusted partner on the journey to
            technological success.
          </p>
        </div>
        <div className="bg-black-100 bg-opacity-[12%] m-2 p-4 bottom-0 w-50 rounded-lg right-7 absolute">
          <h1 className="text-center text-white-200 font-semibold">
            All do you need
          </h1>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
