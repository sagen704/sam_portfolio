import React from 'react';

const Hero = () => {
  return (
    <div className="flex h-screen bg-[#0A0B0D]">
      <div className="flex-1 flex flex-col pb-[200px] pt-[50px] md:pt-[200px] sm:pt-[100px] md:pr-[40px] pr-[20px]">
        <h1 className="pl-[75px] md:pl-[250px] text-xl md:text-4xl text-[#00AFEA] font-courier-new font-semibold">Hello, I'm</h1>
        <h1 className="pl-[75px] md:pl-[250px] pt-[20px] text-5xl md:text-8xl text-white font-bold pb-4">Samuel Hagen<span className='text-[#00AFEA] font-mono'>.</span></h1>
        <h1 className="pl-[75px] md:pl-[250px] pt-[20px] text-2xl md:text-[42px] text-[#00AFEA] font-semibold font-helvetica">About</h1>
        <p className="pl-[75px] md:pl-[250px] pt-[20px] text-sm md:text-[22px] text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget risus vel erat varius condimentum vitae eget velit.</p>
        <h1 className="pl-[75px] md:pl-[250px] pt-[20px] text-2xl md:text-[42px] text-[#00AFEA] font-semibold font-helvetica">Education</h1>
        <p className="pl-[75px] md:pl-[250px] pt-[20px] text-sm md:text-[22px] text-white">Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
        <h1 className="pl-[75px] md:pl-[250px] pt-[20px] text-2xl md:text-[42px] text-[#00AFEA] font-semibold font-helvetica">Projects</h1>
        <p className="pl-[75px] md:pl-[250px] pt-[20px] text-sm md:text-[22px] text-white">Nulla facilisi. Nullam vel dolor at purus vestibulum consectetur. Donec nec odio ut quam interdum.</p>
        <h1 className="pl-[75px] md:pl-[250px] pt-[20px] text-2xl md:text-[42px] text-[#00AFEA] font-semibold font-helvetica">Experience</h1>
        <p className="bg-[#0A0B0D] pl-[75px] md:pl-[250px] pt-[10px] pb-[300px] text-sm md:text-[16px] text-white">Vivamus ac urna ac nisi aliquam ultrices. Cras eu libero justo. Integer feugiat quam eu diam auctor, sit amet hendrerit turpis consequat.</p>
      </div>
    </div>
  );
};

export default Hero;
