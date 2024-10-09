"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [startTransition, isPending] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          src="/images/aboutme1.svg"
          width={500}
          height={500}
          alt="About Me"
        />
        <div>
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base md:text-lg">
            Hi, I'm Lily! I'm a junior at Rutgers University, where I'm pursuing
            a degree in Computer Science and Information Technology. I'm
            passionate about exploring new technologies and combining my love
            for design with development. My interests span from UI/UX design to
            machine learning and everything in between. I enjoy solving complex
            problems and building creative, user-centric solutions. Whether I'm
            working on front-end development, designing intuitive interfaces, or
            experimenting with new tools, I'm always excited to learn and push
            my skills further.
          </p>
          <div className="flex flex-row mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={"skills"}
            >
              Skills
            </TabButton>
            <span className="mr-3 font-semibold hover:text-white text-[#070042] border-b border-blue-950">
              Skills
            </span>
            <span className="text-2xl font-bold">Education</span>
            <span className="text-2xl font-bold">Experience</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
