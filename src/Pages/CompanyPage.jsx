import React,{useState,useEffect} from "react";
import axios from "axios";
import application from "../assets/Company/application.png";
import vacancy from "../assets/Company/vacancy.png";
import plus from "../assets/Company/plus.png";

export default function CompanyPage() {
  return (
    <div className="mt-20 w-full max-w-screen-2xl mx-auto flex flex-col text-black gap-3">
      <div className="w-full flex flex-row gap-4">
        <div className="flex flex-col border border-white shadow-black shadow-lg mx-3 my-2 w-full p-5 rounded-lg">
          <div className="w-full flex gap-5 items-center">
            <img
              className="w-12 h-12 p-1 rounded-full bg-green-500"
              src={vacancy}
              alt=""
            />
            <h1 className="font-poppins text-lg font-semibold">
              Total Posted Vacancies
            </h1>
          </div>
          <h1 className="font-poppins text-xl font-medium text-green-600 w-full px-[68px]">
            100 Vacancies
          </h1>
        </div>

        <div className="flex flex-col border border-white shadow-black shadow-lg mx-3 my-2 w-full p-5 rounded-lg">
          <div className="w-full flex gap-5 items-center">
            <img
              className="w-12 h-12 p-1 rounded-full bg-green-500"
              src={application}
              alt=""
            />
            <h1 className="font-poppins text-lg font-semibold">
              Total Applications
            </h1>
          </div>
          <h1 className="font-poppins text-xl font-medium text-green-600 w-full px-[68px]">
            100 Applications
          </h1>
        </div>

        <div className="flex flex-col bg-green-600 text-white shadow-green-400 shadow-lg mx-3 my-2 w-full p-5 rounded-lg hover:cursor-pointer hover:bg-green-700 active:scale-[98%] transition-all ease-in-out duration-300">
          <div className="w-full flex gap-5 items-center">
            <img className="w-10 h-10 p-1 rounded-full" src={plus} alt="" />
            <h1 className="font-poppins text-xl font-semibold">Post a job</h1>
          </div>
          <h1 className="font-poppins font-medium text-white w-full px-[64px]">
            Click here to post job vacancy
          </h1>
        </div>
      </div>
      {/* For recent Applications */}
      <div>

      </div>

      {/* For the company created Vacancies */}
      <div className="w-full flex flex-col">
        <h1 className="w-full text-xl font-medium mx-2 mt-10">Your Job Vacancies</h1>


      </div>
    </div>
  );
}
