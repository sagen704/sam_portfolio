import React from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div className="flex h-[1000px] bg-[#0A0B0D] flex-col">
      <div className="flex flex-col pb-[50px] pt-[50px] md:pr-[40px] pr-[20px]">
        <h1 className="pl-[75px] sm:pl-[125px] lg:pl-[250px] text-xl md:text-4xl text-[#00AFEA] font-courier-new font-semibold">
          2
        </h1>
        <h1 className="pl-[75px] sm:pl-[125px] lg:pl-[250px] pt-[20px] text-5xl md:text-8xl text-white font-bold pb-4">
          Projects<span className="text-[#00AFEA] font-mono">.</span>
        </h1>
        <p className="pl-[75px] sm:pl-[125px] lg:pl-[250px] pt-[20px] text-sm md:text-[22px] text-white">
          I'm always working on new projects and technologies here are some ones
          I want to feature!
        </p>
      </div>

      <div className="flex items-center justify-center w-full pb-[100px]">
        <div className="grid grid-cols-3 grid-rows-3 gap-4 w-[80%]">
          <div className="row-span-1 col-span-3 md:col-span-1">
            <ProjectCard
              title="Portfolio"
              description="This is a description of my awesome project."
              link="https://www.apple.com/"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
