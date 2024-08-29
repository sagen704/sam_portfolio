"use client";
import React from "react";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";
import Hero_Descriptions from "./Hero_Descriptions";

const Hero = () => {
  const words = [
    {
      text: "Sam ",
      className: "text-6xl md:text-8xl text-white font-bold",
    },
    {
      text: "Hagen",
      className: "text-6xl md:text-8xl text-white font-bold",
    },
    {
      text: ".",
      className:
        "text-6xl md:text-8xl text-blue-500 dark:text-sky-500 font-mono",
    },
  ];

  return (
    <div className="flex h-screen items-center">
      <div className="flex-1 flex flex-col pt-[30px] md:pt-[130px] sm:pt-[100px] md:pr-[40px] pr-[20px] pl-[75px] sm:pl-[125px] lg:pl-[250px]">
        <h1 className=" text-xl md:text-4xl text-[#00AFEA] font-courier-new font-semibold">
          Hello, I&apos;m
        </h1>
        <div className="pb-[20px]">
          <TypewriterEffectSmooth words={words} />
        </div>

        <Hero_Descriptions
          title="About"
          description="I love to code, go to the gym, watch formuala 1, and many other fun activities!"
          link="grid"
        />
        <Hero_Descriptions
          title="Projects"
          description="Some of the feature projects I enjoyed doing and learned new things."
          link="projects"
        />
        <Hero_Descriptions
          title="Education"
          description="I am a CS student pursing the fields of Software Engineering and Machine Learning."
          link="education"
        />
        <Hero_Descriptions
          title="Contact"
          description="I enjoy meeting new people feel free to reach out!"
          link="contact"
        />
      </div>
    </div>
  );
};

export default Hero;
