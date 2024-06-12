

import React from "react";

export default function JobCards({
  name,
  image,
  location,
  position,
  time,
  skills,
  salary,
}) {
  return (
    <div>
      <div className="w-[300px] flex flex-col px-4 py-6 gap-6 shadow-lg bg-[#f2f2f2]">
        <div className="w-full flex gap-3">
          <img className="w-10 h-10 rounded-full" src={image} alt="" />
          <div className="flex flex-col">
            <h1 className="text-black font-medium">{name}</h1>
            <h2 className="text-black text-sm">{location}</h2>
          </div>
        </div>

        <div className="flex flex-col">
          <h1 className="text-black font-semibold">{position}</h1>
          <h1 className="text-green-500 font-medium text-sm" >{time}</h1>
        </div>

        <h1 className="text-sm truncate w-full">{skills}</h1>

        <div className="w-full flex justify-between py-1">
          <h1 className="text-black font-semibold">
            ${salary}
            <span className="font-medium text-sm text-[#616161]"> /monthly</span>
          </h1>
          <div className="flex flex-col gap-1 border-green-500 bg-green-500 rounded-lg text-white px-2 py-1 font-medium hover:cursor-pointer hover:bg-green-600 transition-all ease-in-out duration-300">
            Apply Now
          </div>
        </div>
      </div>
    </div>
  );
}
