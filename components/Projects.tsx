import React from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div className="flex flex-col pb-[200px] pt-[250px]">
      <div className="flex flex-col pt-[50px] md:pr-[40px] pr-[20px] pb-[70px]">
        <h1 className="pl-[75px] sm:pl-[125px] lg:pl-[250px] text-xl md:text-4xl text-[#00AFEA] font-courier-new font-semibold">
          2
        </h1>
        <h1 className="pl-[75px] sm:pl-[125px] lg:pl-[250px] pt-[20px] text-5xl md:text-8xl text-white font-bold pb-5">
          Projects<span className="text-[#00AFEA] font-mono">.</span>
        </h1>
        <p className="pl-[75px] sm:pl-[125px] lg:pl-[250px] pt-[20px] text-sm md:text-[22px] text-gray-400">
          I'm always working on new projects and technologies here are some ones
          I want to feature!
        </p>
      </div>
      <div className="flex items-center justify-center w-full px-[75px] sm:px-[125px] lg:px-[250px]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
          <div className="row-span-1 col-span-3 xl:col-span-1">
            <ProjectCard
              title="Portfolio"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada. 
              Integer nec odio praesent libero sed cursus ante dapibus diam. Sed nisi nulla, quis sem at nibh elementum imperdiet. 
              Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu 
              eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos."
              link="https://www.apple.com/"
            />
          </div>
          <div className="row-span-1 col-span-3 xl:col-span-1">
            <ProjectCard
              title="Portfolio"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada. 
              Integer nec odio praesent libero sed cursus ante dapibus diam. Sed nisi nulla, quis sem at nibh elementum imperdiet. 
              Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu 
              eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos."
              link="https://www.apple.com/"
            />
          </div>
          <div className="row-span-1 col-span-3 xl:col-span-1">
            <ProjectCard
              title="Portfolio"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada. 
              Integer nec odio praesent libero sed cursus ante dapibus diam. Sed nisi nulla, quis sem at nibh elementum imperdiet. 
              Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu 
              eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos."
              link="https://www.apple.com/"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
