"use client";
import React from "react";
import Hero_Descriptions from "./Hero_Descriptions";

const Hero = () => {
  return (
    <div className="flex h-screen items-center">
      <div className="flex-1 flex flex-col pt-[30px] md:pt-[130px] sm:pt-[100px] md:pr-[40px] pr-[20px] pl-[75px] sm:pl-[125px] lg:pl-[250px]">
        <h1 className=" text-xl md:text-4xl text-[#00AFEA] font-courier-new font-semibold">
          Hello, I&apos;m
        </h1>
        <div className="py-[30px] text-white text-[40px] md:text-8xl font-bold ">
          Sam Hagen <span className="text-[#00AFEA]">.</span>
        </div>

        <Hero_Descriptions
          title="About"
          description="I'm passionate about coding, staying active at the gym, following Formula 1, and enjoying a variety of other fun activities!"
          link="grid"
        />
        <Hero_Descriptions
          title="Projects"
          description="These featured projects offered valuable learning experiences and were a pleasure to work on."
          link="projects"
        />
        <Hero_Descriptions
          title="Education"
          description="I'm a Computer Science student focused on Software Engineering and Machine Learning."
          link="education"
        />
        <Hero_Descriptions
          title="Contact"
          description="I enjoy meeting new people, feel free to reach out!"
          link="contact"
        />
      </div>
    </div>
  );
};

export default Hero;
