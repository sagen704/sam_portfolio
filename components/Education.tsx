import React from "react";
import CoursesList from "./CoursesList";

const Education = () => {
  const courses = ["lkasjdflkj", "asdfasdf", "asdfasdf"];
  const certifications = ["Google Data Analytics Proffessional Certificate"];
  return (
    <div className="flex flex-col pb-[200px] pt-[100px]">
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
