"use client";

import React from "react";

type Hero_Descriptions_Props = {
  title: string;
  description: string;
  link: string;
};

const Hero_Descriptions: React.FC<Hero_Descriptions_Props> = ({
  title,
  description,
  link,
}) => {
  const handleClick = () => {
    const targetElement = document.getElementById(link);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <button className="pb-5 hover:ml-1" onClick={handleClick}>
      <span className="absolute left-0 top-1/2 transform -translate-y-1/2 w-[4px] h-0 bg-[#00AFEA] transition-all duration-300 hover:h-full"></span>
      <h1 className="pt-[20px] text-2xl md:text-[42px] text-[#00AFEA] font-semibold font-helvetica text-left ">
        {title}
      </h1>
      <p className="pt-[20px] text-[16px] md:text-[22px] text-gray-400 text-left">
        {description}
      </p>
    </button>
  );
};

export default Hero_Descriptions;
