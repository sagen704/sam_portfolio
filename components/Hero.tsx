import React from 'react';

const Hero = () => {
  return (
    <div className="flex h-screen">
      <div className="flex-1 flex flex-col bg-[#0A0B0D] pb-[200px]pt-[200px] sm:pt-[100px]">
        <h1 className="pl-[250px] md:pl-[200px] sm:pl-[75px] text-3xl text-[#00AFEA] font-courier-new font-semibold">Hello, I'm</h1>
        <h1 className="pl-[250px] md:pl-[200px] sm:pl-[75px] pt-[20px] text-7xl text-white font-bold pb-4">Samuel Hagen<span className='text-[#00AFEA] font-mono'>.</span></h1>
        <h1 className="pl-[250px] md:pl-[200px] sm:pl-[75px] pt-[20px] text-[36px] text-[#00AFEA] font-semibold font-helvetica">About</h1>
        <p className="pl-[250px] md:pl-[200px] sm:pl-[75px] pt-[10px] text-[16px] text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget risus vel erat varius condimentum vitae eget velit.</p>
        <h1 className="pl-[250px] md:pl-[200px] sm:pl-[75px] pt-[20px] text-[36px] text-[#00AFEA] font-semibold font-helvetica">Education</h1>
        <p className="pl-[250px] md:pl-[200px] sm:pl-[75px] pt-[10px] text-[16px] text-white">Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
        <h1 className="pl-[250px] md:pl-[200px] sm:pl-[75px] pt-[20px] text-[36px] text-[#00AFEA] font-semibold font-helvetica">Projects</h1>
        <p className="pl-[250px] md:pl-[200px] sm:pl-[75px] pt-[10px] text-[16px] text-white">Nulla facilisi. Nullam vel dolor at purus vestibulum consectetur. Donec nec odio ut quam interdum.</p>
        <h1 className="pl-[250px] md:pl-[200px] sm:pl-[75px] pt-[20px] text-[36px] text-[#00AFEA] font-semibold font-helvetica">Experience</h1>
        <p className="pl-[250px] md:pl-[200px] sm:pl-[75px] pt-[10px] pb-[300px] text-[16px] text-white">Vivamus ac urna ac nisi aliquam ultrices. Cras eu libero justo. Integer feugiat quam eu diam auctor, sit amet hendrerit turpis consequat.</p>
      </div>
    </div>
  );
};

export default Hero;