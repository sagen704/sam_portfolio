"use client";

import React from "react";
import { strings } from "../public/Web_paragraphs/paragraphs";

const Grid = () => {
  return (
    <div className="items-center pt-[400px] md:pt-[150px]" id="grid">
      <div className="pl-[75px] sm:pl-[125px] lg:pl-[250px] flex-1 flex-col md:pr-[40px] pr-[20px]">
        <h1 className=" text-xl md:text-4xl text-[#00AFEA] font-courier-new font-semibold pb-3">
          1
        </h1>
        <h1 className="text-5xl md:text-8xl text-white font-bold pb-10">
          About<span className="text-[#00AFEA] font-mono">.</span>
        </h1>

        <p className="pr-[20px] text-gray-400 pb-6 text-lg max-w-[900px]">
          {strings.aboutParagraph1}
        </p>
        <p className="hidden xl:block">
          <br />
        </p>
        <p className="pr-[20px] text-gray-400 pb-6 text-lg max-w-[900px] hidden xl:block">
          {strings.aboutParagraph2}
        </p>

        <div className="pt-6 pb-4 text-2xl md:text-4xl font-bold text-white">
          What&apos;s Next
        </div>
        <div className="pr-[20px] text-gray-400 pb-6 text-lg max-w-[900px]">
          <p>{strings.whatsNextParagraph}</p>
        </div>
        <div className="pt-6 pb-4 text-2xl md:text-4xl font-bold text-white">
          Skills
        </div>

        <div className="pr-[20px] pl-[20px] md:pl-[40px] text-gray-400 pb-4 text-lg flex flex-row">
          <div className="pr-[20px]  text-gray-400 pb-4 text-lg">
            <p className="pb-0 xl:pb-6">
              <span className="pb-2 text-white font-semibold">Languages</span>
              <br />
              &emsp; {strings.languageSkills}
            </p>
            <p className="pb-0 xl:pb-6">
              <span className="pb-2 text-white font-semibold">Software:</span>
              <br />
              &emsp; {strings.softwareSkills}
            </p>
            <p className="pb-0 xl:pb-6">
              <span className="pb-2 text-white font-semibold">Libraries:</span>
              <br />
              &emsp; {strings.librariesSkills}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Grid;
