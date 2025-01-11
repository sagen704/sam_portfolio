"use client";

import React from "react";
import ProjectCard from "./ProjectCard";
import { strings } from "../public/Web_paragraphs/paragraphs";

const Projects = () => {
  return (
    <div
      className="flex flex-col pb-[100px] md:pb-[200px] pt-[75px] md:pt-[200px]"
      id="projects"
    >
      <div className="flex flex-col pt-[50px] md:pr-[40px] pr-[20px] pb-[70px]">
        <h1 className="pl-[75px] sm:pl-[125px] lg:pl-[250px] text-xl md:text-4xl text-[#00AFEA] font-courier-new font-semibold">
          2
        </h1>
        <h1 className="pl-[75px] sm:pl-[125px] lg:pl-[250px] pt-[20px] text-5xl md:text-8xl text-white font-bold pb-5">
          Projects<span className="text-[#00AFEA] font-mono">.</span>
        </h1>
        <p className="pl-[75px] sm:pl-[125px] lg:pl-[250px] pt-[20px] text-sm md:text-[22px] text-gray-400">
          {strings.projectsIntro}
        </p>
      </div>
      <div className="flex items-center justify-center w-full px-[75px] sm:px-[125px] lg:px-[250px]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
          <div className="row-span-1 col-span-3 xl:col-span-1">
            <ProjectCard
              title="Personal Website"
              description="My Portfolio made with Next.js and Tailwind CSS. This site is made to show off
                           everything about me!"
              link="https://github.com/sagen704/sam_portfolio.git"
              technologies={["Next.js", "Tailwind", "React"]}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
