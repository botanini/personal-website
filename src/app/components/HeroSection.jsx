"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-12">
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <h1 className="text-[#070042] mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
            <span>Hi! I&apos;m </span>
            <TypeAnimation
              sequence={[
                "Lily Yang.",
                2500,
                "a student.",
                1700,
                "an artist.",
                1700,
                "an aspiring web designer.",
                2000,
                "excited to meet you!",
                3000
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#070042] text-base sm:text-lg mb-6 lg:text-xl">
            Currently Studying Computer Science & Information Informatics and
            Technology at Rutgers University
          </p>
          <div>
            <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-[#070042] border-[2px] border-[#070042] hover:bg-slate-800">
              Hire Me
            </button>
            <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-[#79AEFF] border-[2px] hover:bg-slate-800 mt-3">
              <a href="/resume_217.pdf" download className="text-white">
                Download CV
              </a>
            </button>
          </div>
        </div>
        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
          <div className="rounded-full w-[350px] h-[350px] lg:w-[500px] lg:h-[500px] relative">
            <Image
              src="/images/hero-icon.svg"
              alt="hero image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={500}
              height={500}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
