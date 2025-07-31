"use client";

import React from "react";

type ProjectCardProps = {
  title: string;
  description: string;
  link: string;
  technologies: string[];
};

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  link,
  technologies,
}) => {
  return (
    <button
      onClick={() => window.open(link, "_blank")}
      className="h-full w-full p-4 bg-[#1E1F21] text-white rounded-lg shadow-lg hover:bg-[#3A3B3E] focus:outline-none focus:ring-2 focus:ring-blue-300 transition-all text-left flex flex-col justify-between"
    >
      <div className="flex-grow">
        <h2 className="text-2xl font-bold pb-5 pt-3 min-h-[56px]">{title}</h2>
        <p className="mt-2 pb-6">{description}</p>
        <p className="text-[#9d9d9d] pb-5">{technologies.join(" • ")}</p>
      </div>

      <div>
        <p className="text-right text-[#9d9d9d]">Check it out</p>
      </div>
    </button>
  );
};

export default ProjectCard;
