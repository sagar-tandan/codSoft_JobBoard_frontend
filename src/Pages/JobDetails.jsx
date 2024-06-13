import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function JobDetails() {
  const location = useLocation();
  const {
    name,
    image,
    loc,
    pos,
    salary,
    desc,
    responsibility,
    requirements,
    benefit,
    category,
    Gender,
    Experience,
    Qualification,
    level,
    AppEnd,
    time,
    date,
    skills,
  } = location.state;
  //   console.log(responsibility);

  useEffect(() => {
    // Scroll to the element with the ID "top"
    const element = document.getElementById("top");
    if (element) {
      element.scrollIntoView();
    }
  }, []);

  return (
    <div
      id="top"
      className=" flex flex-col w-full max-w-screen-2xl pb-20 pt-24 px-[5%] font-poppins mx-auto"
    >
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
          <div className="flex flex-col justify-center items-center  gap-1 border-green-500 bg-green-500 rounded-lg text-white px-2 py-1 font-medium hover:cursor-pointer hover:bg-green-600 transition-all ease-in-out duration-300">
            Apply Now
          </div>
        </div>
      </div>

      {/* Now next div into 2 sections */}
      <div className="w-full flex gap-8">
        <div className="w-[65%]">
          {/* description */}
          <div className="w-full flex flex-col gap-2 mt-14">
            <h1 className="text-2xl font-semibold">Description</h1>
            <div
              className=" text-[#666666]"
              dangerouslySetInnerHTML={{ __html: desc }}
            />
          </div>

          <div className="w-full flex flex-col gap-4 mt-14">
            <h1 className="text-2xl font-semibold">Responsibilities</h1>
            <div className=" text-[#666666] flex flex-col gap-2 ">
              {responsibility.map((res) => (
                <div className="w-full flex gap-2">
                  <h1> ✔</h1>
                  <h1>{res.content}</h1>
                </div>
              ))}
            </div>
          </div>

          <div className="w-full flex flex-col gap-4 mt-14">
            <h1 className="text-2xl font-semibold">Requirements</h1>
            <div className=" text-[#666666] flex flex-col gap-2">
              {requirements.map((res) => (
                <div className="w-full flex gap-2">
                  <h1> ✔</h1>
                  <h1>{res.content}</h1>
                </div>
              ))}
            </div>
          </div>

          <div className="w-full flex flex-col gap-4 mt-14">
            <h1 className="text-2xl font-semibold">Benefits</h1>
            <div className=" text-[#666666] flex flex-col gap-2">
              {benefit.map((res) => (
                <div className="w-full flex gap-2">
                  <h1> ✔</h1>
                  <h1>{res.content}</h1>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="w-[35%]  mt-[72px]">
          <div className="flex flex-col bg-[#f2f2f2] p-4 py-10">
            <h1 className="text-xl font-semibold text-black">Summary</h1>
            <div className="bg-green-500 h-[2px] w-[50px] mt-1"></div>
            <div className="w-full flex mt-8 justify-between">
              <ul className="flex flex-col font-medium gap-6">
                <li>Job Type</li>
                <li>Category</li>
                <li>Skills</li>
                <li>Posted</li>
                <li>Salary</li>
                <li>Experience</li>
                <li>Gender</li>
                <li>Qualification</li>
                <li>Level</li>
                <li>Application End</li>
              </ul>

              <ul className="flex flex-col font-medium gap-6">
                <li>:</li>
                <li>:</li>
                <li>:</li>
                <li>:</li>
                <li>:</li>
                <li>:</li>
                <li>:</li>
                <li>:</li>
                <li>:</li>
                <li>:</li>
              </ul>

              <ul className="flex flex-col font-medium gap-6 text-[#666666]">
                <li className="text-green-500">{time}</li>
                <li>{category}</li>
                <li className="truncate">{skills}</li>
                <li>{date}</li>
                <li>
                  {"$"} {salary} / Monthly
                </li>
                <li>{Experience}</li>
                <li>{Gender}</li>
                <li>{Qualification}</li>
                <li>{level}</li>
                <li className="text-red-500">{AppEnd}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
