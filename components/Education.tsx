"use client";

import React from "react";
import CoursesList from "./CoursesList";

const Education = () => {
  const courses = [
    "CS1450 Data Structures & Algorithms",
    "CS3300 Intro to Software Engineering",
    "CS3400 UX/UI Design",
    "CS2020 Stats for Data Analytics",
  ];
  const certifications = [
    "Google Data Analytics Professional Certificate (In Progress)",
  ];
  return (
    <div
      className="flex flex-col pb-[75px] md:pb-[100px] pt-[100px]"
      id="education"
    >
      <div className="pl-[75px] sm:pl-[125px] lg:pl-[250px] flex flex-col pb-[70px] pt-[50px] md:pr-[40px] pr-[20px]">
        <h1 className="text-xl md:text-4xl text-[#00AFEA] font-courier-new font-semibold">
          3
        </h1>
        <h1 className="pt-[20px] text-5xl md:text-8xl text-white font-bold pb-6">
          Education<span className="text-[#00AFEA] font-mono">.</span>
        </h1>
        <p className="pt-[20px] text-sm md:text-[22px] text-gray-400 pb-[20px]">
          I am currently a student at University of Colorado at Colorado Springs
        </p>

        <h3 className="pt-[20px] text:base md:text-3xl text-white font-bold pb-4">
          Courses
        </h3>

        <CoursesList items={courses} />

        <h3 className="pt-[20px] text-base md:text-3xl text-white font-bold pb-4">
          Certifications
        </h3>

        <CoursesList items={certifications} />
      </div>
    </div>
  );
};

export default Education;
