import React from "react";

const Grid = () => {
  return (
    <div className="items-center pt-[200px]">
      <div className="flex-1 flex-col md:pr-[40px] pr-[20px] pb-[70px]">
        <h1 className="pl-[75px] sm:pl-[125px] lg:pl-[250px] text-xl md:text-4xl text-[#00AFEA] font-courier-new font-semibold pb-3">
          1
        </h1>
        <h1 className="pl-[75px] sm:pl-[125px] lg:pl-[250px] text-5xl md:text-8xl text-white font-bold">
          About<span className="text-[#00AFEA] font-mono">.</span>
        </h1>
      </div>

      <div className="flex items-center justify-center w-full ">
        <div className="grid grid-cols-5 grid-rows-3 gap-4 w-[80%]">
          <div className="col-span-5 xl:col-span-2 row-span-1 xl:row-span-1 bg-[#1E1F21] rounded-3xl flex flex-col min-h-32 max-w-5xl">
            <div className="pt-6 pl-[20px] text-2xl font-bold text-white">
              About Me
            </div>
            <div className="pl-[20px] text-white mt-2 pb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              nec iaculis mauris. Vivamus ac magna non dolor tempor tempor.
              Curabitur dignissim, nisl ac interdum commodo, erat erat venenatis
              libero, ac ultrices elit nisi eget felis. Sed sollicitudin elit at
              orci auctor, non vehicula ex aliquet.
            </div>
          </div>
          <div className="col-span-5 xl:col-span-1 row-span-1 xl:row-span-1 bg-[#1E1F21] rounded-3xl flex flex-col min-h-32 max-w-5xl"></div>
          <div className="col-span-5 xl:col-span-2 row-span-1 xl:row-span-1 bg-[#1E1F21] rounded-3xl flex flex-col min-h-32 max-w-5xl"></div>
          <div className="col-span-5 xl:col-span-1 row-span-1 xl:row-span-1 bg-[#1E1F21] rounded-3xl flex flex-col min-h-32 max-w-5xl"></div>
          <div className="col-span-5 xl:col-span-2 row-span-1 xl:row-span-1 bg-[#1E1F21] rounded-3xl flex flex-col min-h-32 max-w-5xl"></div>
          <div className="col-span-5 xl:col-span-2 row-span-1 xl:row-span-2 bg-[#1E1F21] rounded-3xl flex flex-col min-h-32 max-w-5xl">
            <div className="pt-6 pl-[20px] text-2xl font-bold text-white">
              Skills
            </div>
            <div className="pl-[20px] text-white mt-2 pb-6">
              <p>Languages</p>
              <p>Technical</p>
              <p>Languages</p>
              <p>Languages</p>
            </div>
          </div>
          <div className="col-span-5 xl:col-span-2 row-span-1 xl:row-span-1 bg-[#1E1F21] rounded-3xl flex flex-col min-h-32 max-w-5xl"></div>
          <div className="col-span-5 xl:col-span-1 row-span-1 xl:row-span-1 bg-[#1E1F21] rounded-3xl flex flex-col min-h-32 max-w-5xl"></div>
        </div>
      </div>
    </div>
  );
};

export default Grid;
