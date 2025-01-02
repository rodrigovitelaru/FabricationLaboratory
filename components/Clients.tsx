"use client";

import React from "react";
import { InfiniteMovingCards } from "./ui/InfinteMovingCards";
import { companies, testimonials } from "@/data";

const Clients = () => {
  return (
    <div className="py-20 text-white-100" id="testimonials">
      <h1 className="heading">
        Kind words from
        <span className="text-purple"> satisfied clients</span>
      </h1>
      <div className="flex flex-col items-center max-lg:mt-10">
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
        />

        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-16 max-lg: mt-10">
          {companies.map(({ id }) => (
            <div key={id} className="flex md:max-w-60 max-w-32 gap-2"></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Clients;
