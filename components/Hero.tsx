"use client";
import React from "react";
import Hero_Descriptions from "./Hero_Descriptions";
import { strings } from "./ui/paragraphs";

const Hero = () => {
  return (
    <div className="flex h-screen pt-[50px]">
      <div className="block lg:hidden h-[200px]"></div>

      <div className="flex-1 flex flex-col pt-[30px] md:pt-[130px] sm:pt-[100px] md:pr-[40px] pr-[20px] pl-[75px] sm:pl-[125px] lg:pl-[250px]">
        <h1 className="pt-10 text-xl md:text-4xl text-[#00AFEA] font-courier-new font-semibold">
          Hello, I&apos;m
        </h1>
        <div className="py-[30px] text-white text-[40px] md:text-8xl font-bold ">
          Sam Hagen <span className="text-[#00AFEA]">.</span>
        </div>

        <Hero_Descriptions
          title="About"
          description={strings.aboutHeader}
          link="grid"
        />
        <Hero_Descriptions
          title="Projects"
          description={strings.projectHeader}
          link="projects"
        />
        <Hero_Descriptions
          title="Education"
          description={strings.educationHeader}
          link="education"
        />
        <Hero_Descriptions
          title="Contact"
          description={strings.contactHeader}
          link="contact"
        />
      </div>
    </div>
  );
};

export default Hero;
