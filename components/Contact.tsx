"use client";

import React from "react";
import ContactLinks from "./ContactLinks";
import { strings } from "../public/Web_paragraphs/paragraphs";

const Contact = () => {
  return (
    <div
      className="flex flex-col pb-[150px] pt-[50px] md:pt-[75px]"
      id="contact"
    >
      <div className="pl-[75px] sm:pl-[125px] lg:pl-[250px] flex flex-col pb-[50px] pt-[50px] md:pr-[40px] pr-[20px]">
        <h1 className="text-xl md:text-4xl text-[#00AFEA] font-courier-new font-semibold">
          3
        </h1>
        <h1 className="pt-[20px] text-5xl md:text-8xl text-white font-bold pb-4">
          Contact<span className="text-[#00AFEA] font-mono">.</span>
        </h1>
        <p className="pt-[20px] text-sm md:text-[22px] text-gray-400 pb-[10px] md:pb-[20px]">
          {strings.contactIntro}
        </p>
      </div>
      <ContactLinks />
    </div>
  );
};

export default Contact;
