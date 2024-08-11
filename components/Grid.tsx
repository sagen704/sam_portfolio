import React from "react";

const Grid = () => {
  return (
    <div className="flex bg-[#0A0B0D] flex-col">
      <div className="flex-1 flex flex-col pb-[50px] pt-[50px] md:pr-[40px] pr-[20px]">
        <h1 className="pl-[75px] sm:pl-[125px] lg:pl-[250px] text-xl md:text-4xl text-[#00AFEA] font-courier-new font-semibold">
          1
        </h1>
        <h1 className="pl-[75px] sm:pl-[125px] lg:pl-[250px] pt-[20px] text-5xl md:text-8xl text-white font-bold pb-4">
          About<span className="text-[#00AFEA] font-mono">.</span>
        </h1>
      </div>

      <div className="flex items-center justify-center w-full pb-[100px]">
        <div className="grid grid-cols-5 grid-rows-3 gap-4 w-[80%]">
          <div className="col-span-5 md:col-span-2 row-span-1 md:row-span-1 bg-[#010202] rounded-3xl flex flex-col min-h-32 max-w-5xl">
            <div className="pt-6 pl-[20px] text-2xl font-bold text-white">
              title
            </div>
            <div className="pl-[20px] text-white mt-2 pb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              nec iaculis mauris. Vivamus ac magna non dolor tempor tempor.
              Curabitur dignissim, nisl ac interdum commodo, erat erat venenatis
              libero, ac ultrices elit nisi eget felis. Sed sollicitudin elit at
              orci auctor, non vehicula ex aliquet.
            </div>
          </div>
          <div className="col-span-5 md:col-span-1 row-span-1 md:row-span-1 bg-indigo-100 rounded-3xl flex min-h-32 max-w-5xl"></div>
          <div className="col-span-5 md:col-span-2 row-span-1 md:row-span-1 bg-indigo-100 rounded-3xl flex min-h-32 max-w-5xl"></div>
          <div className="col-span-5 md:col-span-1 row-span-1 md:row-span-1 bg-indigo-100 rounded-3xl flex min-h-32 max-w-5xl"></div>
          <div className="col-span-5 md:col-span-2 row-span-1 md:row-span-1 bg-indigo-100 rounded-3xl flex min-h-32 max-w-5xl"></div>
          <div className="col-span-5 md:col-span-2 row-span-1 md:row-span-2 bg-indigo-100 rounded-3xl flex min-h-32 max-w-5xl"></div>
          <div className="col-span-5 md:col-span-2 row-span-1 md:row-span-1 bg-indigo-100 rounded-3xl flex min-h-32 max-w-5xl"></div>
          <div className="col-span-5 md:col-span-1 row-span-1 md:row-span-1 bg-indigo-100 rounded-3xl flex min-h-32 max-w-5xl"></div>
        </div>
      </div>
    </div>
  );
};

export default Grid;
