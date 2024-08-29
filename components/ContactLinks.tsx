"use client";

import React from "react";

const ContactLinks = () => {
  return (
    <div className="flex flex-row pl-[75px] sm:pl-[125px] lg:pl-[250px]">
      <div className="text-gray-400 text-[18px] md:text-[28px] bold underline underline-offset-[4px]">
        <a href="mailto:s41153188@gmail.com">Email</a>
      </div>
      <div className="text-[#00AFEA] px-2 text-[18px] md:text-[32px]"> | </div>
      <div className="text-gray-400 text-[18px] md:text-[28px] bold underline underline-offset-[4px]">
        <a
          href="https://github.com/sagen704/sagen704.git"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      </div>
      <div className="text-[#00AFEA] px-2 text-[18px] md:text-[32px]"> | </div>
      <div className="text-gray-400 text-[18px] md:text-[28px] bold underline underline-offset-[4px]">
        <a
          href="https://www.linkedin.com/in/samuelhagen0/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
      </div>
    </div>
  );
};

export default ContactLinks;
