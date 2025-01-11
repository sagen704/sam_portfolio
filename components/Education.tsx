"use client";

import React from "react";
import CoursesList from "./CoursesList";
import { strings } from "../public/Web_paragraphs/paragraphs";
import { courses } from "../public/Web_paragraphs/paragraphs";
import { certificates } from "../public/Web_paragraphs/paragraphs";

const Education = () => {
  const certifications = [
    "Google Data Analytics Professional Certificate 2024",
  ];
  return (
    <div className="flex flex-col md:pb-[100px] pt-[100px]" id="education">
      <div className="pl-[75px] sm:pl-[125px] lg:pl-[250px] flex flex-col pb-[70px] pt-[50px] md:pr-[40px] pr-[20px]">
        <h1 className="text-xl md:text-4xl text-[#00AFEA] font-courier-new font-semibold">
          3
        </h1>
        <h1 className="pt-[20px] text-5xl md:text-8xl text-white font-bold pb-6">
          Education<span className="text-[#00AFEA] font-mono">.</span>
        </h1>
        <p className="pt-[20px] text-sm md:text-[22px] text-gray-400 pb-[20px]">
          {strings.educationIntro}
        </p>

        <h3 className="pt-[20px] text:base md:text-3xl text-white font-bold pb-4">
          Courses
        </h3>

        <CoursesList items={courses} />

        <h3 className="pt-[20px] text-base md:text-3xl text-white font-bold pb-4">
          Certifications
        </h3>

        <CoursesList items={certificates} />
      </div>
    </div>
  );
};

export default Education;
