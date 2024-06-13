import React, { useState } from "react";
import { useLocation } from "react-router-dom";

export default function JobDetails() {
  const location = useLocation();
  const { name, image, loc, pos, salary, desc } = location.state;

  return (
    <div className="flex flex-col w-full max-w-screen-2xl pb-20 mt-16 px-[5%] font-poppins">
      <div className="w-full bg-[#f2f2f2] flex gap-3 p-12">
        <div className="w-full flex gap-6 justify-start items-center">
          <div>
            <img className="w-20 h-20 rounded-full" src={image} alt={name} />
          </div>
          <div className="flex flex-col">
            <h1 className="text-black font-semibold text-xl">{pos}</h1>
            <h2 className="text-green-500 font-semibold">{name}</h2>
            <div className="flex gap-4 text-sm text-[#666666] font-medium">
              <div>{loc}</div>
              <div>{loc}</div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-5">
          <h1 className="text-black font-semibold text-xl">
            ${salary}
            <span className="font-medium text-sm text-[#616161]">/monthly</span>
          </h1>
          <div className="flex flex-col gap-1 border-green-500 bg-green-500 rounded-lg text-white px-2 py-1 font-medium hover:cursor-pointer hover:bg-green-600 transition-all ease-in-out duration-300">
            Apply Now
          </div>
        </div>
      </div>

      {/* Now next div into 2 sections */}
      <div className="w-full flex gap-4">
        <div className="w-[70%]">
          {/* description */}
          <div className="w-full flex flex-col gap-8 mt-16">
            <h1 className="text-xl font-bold">Description</h1>
            <div
              className=" text-[#666666]"
              dangerouslySetInnerHTML={{ __html: desc }}
            />
          </div>
        </div>
        <div className="w-[30%]"></div>
      </div>
    </div>
  );
}
