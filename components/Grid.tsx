"use client";

import React from "react";

const Grid = () => {
  return (
    <div className="items-center pt-[200px]" id="grid">
      <div className="flex-1 flex-col md:pr-[40px] pr-[20px] pb-[70px]">
        <h1 className="pl-[75px] sm:pl-[125px] lg:pl-[250px] text-xl md:text-4xl text-[#00AFEA] font-courier-new font-semibold pb-3">
          1
        </h1>
        <h1 className="pl-[75px] sm:pl-[125px] lg:pl-[250px] text-5xl md:text-8xl text-white font-bold">
          About<span className="text-[#00AFEA] font-mono">.</span>
        </h1>
      </div>

      <div className="flex items-center justify-center w-full px-[75px] sm:px-[125px] lg:px-[250px]">
        <div className="grid grid-cols-6 grid-rows-3 gap-4">
          <div className="col-span-6 xl:col-span-3 row-span-1 xl:row-span-2 bg-[#1E1F21] rounded-3xl flex flex-col max-w-5xl">
            <div className="pt-6 pb-4 pl-[20px] md:pl-[40px] text-2xl md:text-4xl font-bold text-white">
              About Me
            </div>
            <div className="pr-[20px] pl-[20px] md:pl-[40px] text-gray-400 pb-6 text-lg">
              <p>
                I am a Computer Science student at UCCS, focusing on Software
                Engineering and Machine Learning. I love to code because of the
                limitless problems that you can solve and the creative solutions
                you can develop. Constantly exploring new technologies, I aim to
                deepen my knowledge and stay at the cutting edge of the field. I
                thrive on the challenges and creativity that coding brings and
                am always engaged in projects that let me apply and expand my
                skills.
              </p>
              <p className="hidden xl:block">
                {" "}
                <br />
              </p>
              <p className="hidden xl:block">
                Outside of school, I am an avid self-learner who believes that
                the effort you put into a project determines the results you
                achieve. I can also be found at the gym, following Formula 1, or
                enjoying the local scenery. I thrive in environments that
                challenge me and provide opportunities to grow and excel.
              </p>
            </div>
          </div>
          <div className="col-span-6 xl:col-span-3 row-span-1 xl:row-span-1 bg-[#1E1F21] rounded-3xl flex-col max-w-5xl hidden xl:block">
            <div className="pt-6 pl-[20px] md:pl-[40px] pb-3 text-2xl md:text-4xl font-bold text-white">
              Fun Facts!
            </div>
            <div className="pr-[20px] pl-[20px] md:pl-[40px] text-gray-400 pb-6 text-lg">
              <p className="pb-2">
                <span className="text-[#00AFEA]">-</span> I like to work on
                software development in my free time and learning new
                technologies
              </p>
              <p className="pb-2">
                <span className="text-[#00AFEA]">-</span> My favorite Formula 1
                driver is Oscar Piastri
              </p>
              <p className="pb-2">
                <span className="text-[#00AFEA]">-</span> I enjoy playing
                pickleball, tennis, and skiing
              </p>
            </div>
          </div>
          <div className="col-span-6 xl:col-span-3 row-span-1 xl:row-span-2 bg-[#1E1F21] rounded-3xl flex flex-col max-w-5xl">
            <div className="pt-6 pb-4 pl-[20px] md:pl-[40px] text-2xl md:text-4xl font-bold text-white">
              Skills
            </div>

            <div className="pr-[20px] pl-[20px] md:pl-[40px] text-gray-400 pb-6 text-lg flex flex-row">
              <div className="pr-[20px]  text-gray-400 pb-6 text-lg">
                <p className="pb-0 xl:pb-6">
                  <span className="pb-2 text-white font-semibold">
                    Languages
                  </span>
                  <br />
                  &emsp; HTML, CSS, Javascript, Python, Java, C
                </p>
                <p className="pb-0 xl:pb-6">
                  <span className="pb-2 text-white font-semibold">
                    Technologies:
                  </span>
                  <br />
                  &emsp; React, Next.js, Tailwind
                </p>
                <p className="pb-0 xl:pb-6">
                  <span className="pb-2 text-white font-semibold">Tools:</span>
                  <br />
                  &emsp; Git, Docker, AWS
                </p>
                <p className="pb-0 xl:pb-6">
                  <span className="pb-2 text-white font-semibold">
                    Methodologies:
                  </span>
                  <br />
                  &emsp; Agile Development
                </p>
              </div>
            </div>
          </div>
          <div className="col-span-6 xl:col-span-3 row-span-1 xl:row-span-1 bg-[#1E1F21] rounded-3xl flex flex-col flex-shrink max-w-5xl">
            <div className="pt-6 pb-4  pl-[20px] md:pl-[40px] text-2xl md:text-4xl font-bold text-white">
              What's Next
            </div>
            <div className="pr-[20px] pl-[20px] md:pl-[40px] text-gray-400 pb-6 text-lg">
              <p>
                As I move through my journey in computer science I want to
                create new and innovative projects that can push the boundaries
                of what is possible. I'm keen on getting to expand my knowledge
                in the workforce. I strive to learn more on the topics of
                Machine Learning and creating software that delivers exceptional
                user experiences. By continuously learning and applying my
                skills, I aim to contribute to make a meaningful impact in the
                world.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Grid;
