import React from "react";
import { useLocation } from "react-router-dom";
import back from "../assets/loginBack.gif";

export default function ApplicationForm() {
  const location = useLocation();
  const { username, emails, phones, cities, countries } = location.state;
  return (
    <div
      id="top"
      className=" h-[100vh] text-black w-full flex flex-col max-w-screen-2xl mb-20 pt-24 px-[5%] font-poppins mx-auto"
    >
      <div className="w-full flex flex-col text-black gap-3">
        <h1 className="text-2xl font-medium font-poppins">
          Name of JOb Vacancy
        </h1>
        <h1>ASIA,CHINa/name of company/job type</h1>
      </div>
      <div className="flex flex-col mt-12 ">
        <h1 className="uppercase text-md font-poppins font-medium">
          Submit your application
        </h1>
        <div className="flex flex-col gap-6 mt-8">
          <div className="flex flex-col gap-2 items-center w-full">
            <label className="font-poppins font-medium w-full">
              Resume/CV <span className="text-red-600">*</span>
            </label>
            <input
              class="w-full block text-lg rounded-lg cursor-pointer text-gray-400 focus:outline-none bg-gray-700 placeholder-gray-400"
              id="large_size"
              type="file"
            />
          </div>

          <div className="flex gap-4 justify-between">
            <div className="flex flex-col gap-2 items-center w-full">
              <label className="font-poppins font-medium w-full">
                Full Name <span className="text-red-600">*</span>
              </label>
              <input
                required
                className="w-full py-2 px-3 border rounded"
                type="text"
                placeholder="Enter your name"
                // value={password}
                // onChange={(e) => {
                //   setData({ ...data, password: e.target.value });
                // }}
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
                // value={password}
                // onChange={(e) => {
                //   setData({ ...data, password: e.target.value });
                // }}
              />
            </div>
          </div>

          <div className="flex gap-4 justify-between">
            <div className="flex flex-col gap-2 items-center w-full">
              <label className="font-poppins font-medium w-full">
                Phone <span className="text-red-600">*</span>
              </label>
              <input
                required
                className="w-full py-2 px-3 border rounded"
                type="number"
                placeholder="Enter your number"
                // value={password}
                // onChange={(e) => {
                //   setData({ ...data, password: e.target.value });
                // }}
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
                // value={password}
                // onChange={(e) => {
                //   setData({ ...data, password: e.target.value });
                // }}
              />
            </div>
          </div>
          <h1 className="mt-2 font-medium text-lg font-poppins">LINKS</h1>

          <div className="flex gap-4 justify-between">
            <div className="flex flex-col gap-2 items-center w-full">
              <label className="font-poppins font-medium w-full">
                Facebook URL
              </label>
              <input
                className="w-full py-2 px-3 border rounded"
                type="text"
                placeholder="Enter your facebook URL"
                // value={password}
                // onChange={(e) => {
                //   setData({ ...data, password: e.target.value });
                // }}
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
                // value={password}
                // onChange={(e) => {
                //   setData({ ...data, password: e.target.value });
                // }}
              />
            </div>
          </div>

          <div className="flex gap-4 justify-between">
            <div className="flex flex-col gap-2 items-center w-full">
              <label className="font-poppins font-medium w-full">
                Github URL
              </label>
              <input
                className="w-full py-2 px-3 border rounded"
                type="text"
                placeholder="Enter your github URL"
                // value={password}
                // onChange={(e) => {
                //   setData({ ...data, password: e.target.value });
                // }}
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
                // value={password}
                // onChange={(e) => {
                //   setData({ ...data, password: e.target.value });
                // }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


{/* <textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your thoughts here..."></textarea> */}
