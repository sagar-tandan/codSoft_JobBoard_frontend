import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import back from "../assets/loginBack.gif";
import loader from "../assets/Asset!/loader.gif";

export default function ApplicationForm() {
  const location = useLocation();
  const {
    username,
    emails,
    phones,
    cities,
    countries,
    jobname,
    companyname,
    companyloc,
    jobtype,
  } = location.state;
  
  const [data, setData] = useState({
    name: username,
    email: emails,
    phone: phones,
    location: cities + "," + " " + countries,
    resume: "",
    fb: "",
    linkedin: "",
    github: "",
    portfolio: "",
    experience: "",
    cover: "",
  });

  return (
    <div
      id="top"
      className=" h-[100vh] text-black w-full flex flex-col max-w-screen-2xl pt-24 px-[5%] font-poppins mx-auto"
    >
      <div className="w-full flex flex-col text-black gap-3">
        <h1 className="text-2xl font-medium font-poppins">{jobname}</h1>
        <h1 className="font-semibold text-[#575757]">
          {companyname}/ {companyloc}/ <span className="text-red-600 uppercase">{jobtype}</span>
        </h1>
      </div>
      <div className="flex flex-col mt-12 ">
        <h1 className="uppercase text-md font-poppins font-medium">
          Submit your application
        </h1>

        <form
          // onSubmit={loginUser}
          className="flex flex-col gap-6 mt-8 "
        >
          <div className="flex flex-col gap-2 items-center w-full">
            <label className="font-poppins font-medium w-full">
              Resume/CV <span className="text-red-600">*</span>
            </label>
            <input
              required
              class="w-full block text-lg rounded-lg cursor-pointer text-gray-400 focus:outline-none bg-gray-700 placeholder-gray-400"
              id="large_size"
              type="file"
              value={data.resume}
              onChange={(e) => {
                setData({ ...data, resume: e.target.value });
              }}
            />
          </div>

          <div className="flex sm:flex-row flex-col gap-4 justify-between">
            <div className="flex flex-col gap-2 items-center w-full">
              <label className="font-poppins font-medium w-full">
                Full Name <span className="text-red-600">*</span>
              </label>
              <input
                required
                className="w-full py-2 px-3 border rounded"
                type="text"
                placeholder="Enter your name"
                value={data.name}
                onChange={(e) => {
                  setData({ ...data, name: e.target.value });
                }}
              />
            </div>
            <div className="flex flex-col gap-2 items-center w-full">
              <label className="font-poppins font-medium w-full">
                Email <span className="text-red-600">*</span>
              </label>
              <input
                required
                className="w-full py-2 px-3 border rounded"
                type="email"
                placeholder="Enter your email"
                value={data.email}
                onChange={(e) => {
                  setData({ ...data, email: e.target.value });
                }}
              />
            </div>
          </div>

          <div className="flex sm:flex-row flex-col gap-4 justify-between">
            <div className="flex flex-col gap-2 items-center w-full">
              <label className="font-poppins font-medium w-full">
                Phone <span className="text-red-600">*</span>
              </label>
              <input
                required
                className="w-full py-2 px-3 border rounded"
                type="number"
                placeholder="Enter your number"
                value={data.phone}
                onChange={(e) => {
                  setData({ ...data, phone: e.target.value });
                }}
              />
            </div>
            <div className="flex flex-col gap-2 items-center w-full">
              <label className="font-poppins font-medium w-full">
                Location <span className="text-red-600">*</span>
              </label>
              <input
                required
                className="w-full py-2 px-3 border rounded"
                type="text"
                placeholder="Enter your location"
                value={data.location}
                onChange={(e) => {
                  setData({ ...data, location: e.target.value });
                }}
              />
            </div>
          </div>
          <h1 className="mt-2 font-medium text-lg font-poppins">LINKS</h1>

          <div className="flex sm:flex-row flex-col gap-4 justify-between">
            <div className="flex flex-col gap-2 items-center w-full">
              <label className="font-poppins font-medium w-full">
                Facebook URL
              </label>
              <input
                className="w-full py-2 px-3 border rounded"
                type="text"
                placeholder="Enter your facebook URL"
                value={data.fb}
                onChange={(e) => {
                  setData({ ...data, fb: e.target.value });
                }}
              />
            </div>
            <div className="flex flex-col gap-2 items-center w-full">
              <label className="font-poppins font-medium w-full">
                Linkedin URL
              </label>
              <input
                className="w-full py-2 px-3 border rounded"
                type="text"
                placeholder="Enter your linkedin URL"
                value={data.linkedin}
                onChange={(e) => {
                  setData({ ...data, linkedin: e.target.value });
                }}
              />
            </div>
          </div>

          <div className="flex sm:flex-row flex-col gap-4 justify-between">
            <div className="flex flex-col gap-2 items-center w-full">
              <label className="font-poppins font-medium w-full">
                Github URL
              </label>
              <input
                className="w-full py-2 px-3 border rounded"
                type="text"
                placeholder="Enter your github URL"
                value={data.github}
                onChange={(e) => {
                  setData({ ...data, github: e.target.value });
                }}
              />
            </div>
            <div className="flex flex-col gap-2 items-center w-full">
              <label className="font-poppins font-medium w-full">
                Portfolio URL
              </label>
              <input
                className="w-full py-2 px-3 border rounded"
                type="text"
                placeholder="Enter your portfolio URL"
                value={data.portfolio}
                onChange={(e) => {
                  setData({ ...data, portfolio: e.target.value });
                }}
              />
            </div>
          </div>

          <div className="flex flex-col gap-2 items-center w-full">
            <label className="font-poppins font-semibold w-full uppercase text-md">
              Share Experiences
            </label>
            <p className="w-full">
              Although it is not a requirement, we would love to know about some
              of the projects you have done. Or, give us short overview on why
              this role speaks to you.
            </p>
            <textarea
              id="message"
              rows="6"
              class="mt-2 block p-2.5 w-full text-sm text-gray-900  rounded-lg border  "
              value={data.experience}
              onChange={(e) => {
                setData({ ...data, experience: e.target.value });
              }}
            ></textarea>
          </div>

          <div className="flex flex-col gap-2 items-center w-full">
            <label className="font-poppins font-semibold w-full uppercase text-md">
              Cover Letter
            </label>

            <textarea
              id="message"
              rows="6"
              class="mt-2 block p-2.5 w-full text-sm text-gray-900  rounded-lg border  "
              value={data.cover}
              onChange={(e) => {
                setData({ ...data, cover: e.target.value });
              }}
            ></textarea>
          </div>

          <button
            className="mt-3 mb-20 shadow-green-300 shadow-lg bg-green-600 font-medium text-white rounded-full w-1/2 mx-auto hover:cursor-pointer flex items-center hover:bg-green-700 transition-all ease-in-out duration-300"
            type="submit"
          >
            <div className="w-full flex p-3 justify-center gap-4 ">
              {/* <img
                className={`
                
                  w-6 h-6 object-center`}
                src={loader}
                alt=""
              /> */}
              <h1 className="sm:inline-block hidden">Submit Application</h1>
              <h1 className="inline-block sm:hidden">Submit</h1>

            </div>
          </button>
        </form>
      </div>
    </div>
  );
}
