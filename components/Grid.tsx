import React from 'react'

const Grid = () => {
  return (
    <div className="flex h-screen bg-[#0A0B0D]">
      <div className="flex-1 flex flex-col pb-[200px] pt-[50px] md:pr-[40px] pr-[20px]">
        <h1 className="pl-[75px] sm:pl-[125px] lg:pl-[250px] text-xl md:text-4xl text-[#00AFEA] font-courier-new font-semibold">1</h1>
        <h1 className="pl-[75px] sm:pl-[125px] lg:pl-[250px] pt-[20px] text-5xl md:text-8xl text-white font-bold pb-4">About<span className='text-[#00AFEA] font-mono'>.</span></h1>
      </div>
    </div>
  )
}

export default Grid
