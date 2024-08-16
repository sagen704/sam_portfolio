"use client";

import React from "react";

type ProjectCardProps = {
  title: string;
  description: string;
  link: string;
};

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  link,
}) => {
  return (
    <button
      onClick={() => window.open(link, "_blank")}
      className="w-full p-4 bg-[#2C2D30] text-white rounded-lg shadow-lg hover:bg-[#3A3B3E] focus:outline-none focus:ring-2 focus:ring-blue-300 transition-all text-left"
    >
      <h2 className="text-2xl font-bold pb-5">{title}</h2>
      <p className="mt-2 pb-4">{description}</p>
      <p className="text-right text-[#9d9d9d]">Check it out</p>
    </button>
  );
};

export default ProjectCard;
