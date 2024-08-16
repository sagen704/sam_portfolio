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
  return (
    <button className="pb-5">
      <h1 className="pt-[20px] text-2xl md:text-[42px] text-[#00AFEA] font-semibold font-helvetica text-left">
        {title}
      </h1>
      <p className="pt-[20px] text-[16px] md:text-[22px] text-gray-400 text-left">
        {description}
      </p>
    </button>
  );
};

export default Hero_Descriptions;
