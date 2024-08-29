"use client";

import React from "react";

const Grid = () => {
  return (
    <div className="items-center pt-[200px]" id="grid">
      <div className="pl-[75px] sm:pl-[125px] lg:pl-[250px] flex-1 flex-col md:pr-[40px] pr-[20px]">
        <h1 className=" text-xl md:text-4xl text-[#00AFEA] font-courier-new font-semibold pb-3">
          1
        </h1>
        <h1 className="text-5xl md:text-8xl text-white font-bold pb-10">
          About<span className="text-[#00AFEA] font-mono">.</span>
        </h1>

        <p className="pr-[20px] text-gray-400 pb-6 text-lg max-w-[900px]">
          I am a Computer Science student at UCCS, specializing in Software
          Engineering and Machine Learning. I love coding for its endless
          problem-solving opportunities and the chance to develop creative
          solutions. Always exploring new technologies and I strive to deepen my
          knowledge. I thrive on the challenges and creativity that coding
          offers and stay engaged in projects that allow me to apply and expand
          my skills. I thrive in environments that challenge me and offer
          opportunities for growth and excellence.
        </p>
        <p className="hidden xl:block">
          <br />
        </p>
        <p className="pr-[20px] text-gray-400 pb-6 text-lg max-w-[900px] hidden xl:block">
          Outside of school, I am an avid self-learner who believes that the
          effort you invest in a project directly impacts the results you
          achieve. You can often find me at the gym, following Formula 1, or
          enjoying the local scenery.
        </p>

        <div className="pt-6 pb-4 text-2xl md:text-4xl font-bold text-white">
          What&apos;s Next
        </div>
        <div className="pr-[20px] text-gray-400 pb-6 text-lg max-w-[900px]">
          <p>
            As I advance in my journey through computer science, I aim to create
            innovative projects that push the boundaries my knowledge. I am
            eager to expand my knowledge in the workforce and focus on Machine
            Learning and developing software that offers exceptional user
            experiences. By continually learning and applying my skills, I
            strive to make a meaningful impact in the world.
          </p>
        </div>
        <div className="pt-6 pb-4 text-2xl md:text-4xl font-bold text-white">
          Skills
        </div>

        <div className="pr-[20px] pl-[20px] md:pl-[40px] text-gray-400 pb-6 text-lg flex flex-row">
          <div className="pr-[20px]  text-gray-400 pb-6 text-lg">
            <p className="pb-0 xl:pb-6">
              <span className="pb-2 text-white font-semibold">Languages</span>
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
    </div>
  );
};

export default Grid;
