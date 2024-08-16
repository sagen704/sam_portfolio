import React from "react";
import ContactLinks from "./ContactLinks";

const Contact = () => {
  return (
    <div className="flex flex-col pb-[200px] pt-[50px] md:pt-[100px]">
      <div className="pl-[75px] sm:pl-[125px] lg:pl-[250px] flex flex-col pb-[50px] pt-[50px] md:pr-[40px] pr-[20px]">
        <h1 className="text-xl md:text-4xl text-[#00AFEA] font-courier-new font-semibold">
          3
        </h1>
        <h1 className="pt-[20px] text-5xl md:text-8xl text-white font-bold pb-4">
          Contact<span className="text-[#00AFEA] font-mono">.</span>
        </h1>
        <p className="pt-[20px] text-sm md:text-[22px] text-gray-400 pb-[10px] md:pb-[20px]">
          I enjoy connecting with others and exploring new opportunities, so
          feel free to reach out!
        </p>
      </div>
      <ContactLinks />
    </div>
  );
};

export default Contact;
