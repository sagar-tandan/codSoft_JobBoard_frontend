import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { Worker } from "@react-pdf-viewer/core";
import { Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import axios from "axios";

export default function ApplicationDetails() {
  const location = useLocation();
  const { app } = location.state;

  const scrollToResume = (e) => {
    document.getElementById("resume").scrollIntoView();
  };

  const changeStatus = (e, status) => {
    e.preventDefault();
  };

  return (
    <div className="mt-20 w-full max-w-screen-2xl px-2 sm:px-4 mx-0 lg:mx-auto flex flex-col text-black gap-3 font-poppins justify-center items-center">
      <div>
        <h1 className="hidden sm:flex w-full font-semibold text-lg sm:text-3xl  items-center justify-center gap-2">
          Application details of
          <span className="text-green-600 font-semibold text-3xl">
            {" "}
            {app.name}
          </span>
        </h1>
      </div>
      <div className="w-full gap-1 flex flex-col bg-[#f2f2f2]">
        <div className="w-full flex flex-row justify-between items-center bg-[#f2f2f2] px-3 py-6 rounded-lg">
          <div className="w-full flex gap-4">
            {app && app.Userimage ? (
              <img
                className="w-16 h-16 sm:w-24 sm:h-24 rounded-full object-cover"
                src={app.Userimage}
                alt=""
              />
            ) : (
              <img
                className="w-16 h-16 sm:w-24 sm:h-24 rounded-full object-cover"
                src="https://i.pinimg.com/564x/d0/7b/a6/d07ba6dcf05fa86c0a61855bc722cb7a.jpg"
                alt=""
              />
            )}
            <div className="w-full flex flex-col gap-1 justify-center">
              <h1 className="w-full text-xl font-semibold">{app.name}</h1>
              <h1 className="text-lg font-medium">
                <span className="hidden md:inline-block">
                  Application for:{" "}
                </span>
                <span className="text-green-600"> {app.jobname}</span>
              </h1>
              <div className="w-full flex gap-6">
                {app && app.fb && (
                  <a href={app.fb} target="_blank">
                    <img
                      className="w-5 h-5 sm:w-7 sm:h-7 rounded-full hover:cursor-pointer"
                      src="https://cdn-icons-png.flaticon.com/128/3670/3670124.png"
                      alt="fb"
                    />
                  </a>
                )}
                {app && app.linkedin && (
                  <a href={app.linkedin} target="_blank">
                    <img
                      className="w-5 h-5 sm:w-7 sm:h-7 rounded-full hover:cursor-pointer"
                      src="https://cdn-icons-png.flaticon.com/128/145/145807.png"
                      alt="linkedin"
                    />
                  </a>
                )}
                {app && app.github && (
                  <a href={app.github} target="_blank">
                    <img
                      className="w-5 h-5 sm:w-7 sm:h-7 rounded-full hover:cursor-pointer"
                      src="https://cdn-icons-png.flaticon.com/128/2111/2111432.png"
                      alt="git"
                    />
                  </a>
                )}

                {app && app.portfolio && (
                  <a href={app.portfolio} target="_blank">
                    <img
                      className="w-5 h-5 sm:w-7 sm:h-7 rounded-full hover:cursor-pointer"
                      src="https://cdn-icons-png.flaticon.com/128/5195/5195762.png"
                      alt="port"
                    />
                  </a>
                )}
              </div>
            </div>
          </div>

          <div className="w-full hidden flex-col gap-3 md:flex">
            <div className="w-full flex items-center justify-end ">
              <h1
                onClick={(e) => scrollToResume(e)}
                className="w-[324px] flex justify-center bg-green-600 p-3 rounded-md text-white font-poppins font-medium text-lg hover:bg-green-700 hover:cursor-pointer transition-all ease-in-out duration-300"
              >
                View Resume
              </h1>
            </div>
            <div className="w-full flex gap-6 justify-end">
              <h1
                onClick={(e) => {
                  changeStatus(e, "Accept");
                }}
                className="w-[150px] flex justify-center bg-green-600 p-3 rounded-md text-white font-poppins font-medium text-lg hover:bg-green-700 hover:cursor-pointer transition-all ease-in-out duration-300"
              >
                Accept
              </h1>
              <h1 className="w-[150px] flex justify-center bg-red-600 p-3 rounded-md text-white font-poppins font-medium text-lg hover:bg-red-700 hover:cursor-pointer transition-all ease-in-out duration-300">
                Reject
              </h1>
            </div>
          </div>
        </div>

        <div className="w-full md:hidden flex-col gap-3 flex justify-center items-center">
          <div className="w-full flex items-center justify-center ">
            <h1
              onClick={(e) => scrollToResume(e)}
              className="w-[90%] flex justify-center bg-green-600 px-3 py-2 rounded-md text-white font-poppins font-medium text-lg hover:bg-green-700 hover:cursor-pointer transition-all ease-in-out duration-300"
            >
              View Resume
            </h1>
          </div>
          <div className="w-[90%] flex gap-[3%] justify-center ">
            <h1
              onClick={(e) => {
                changeStatus(e, "Accept");
              }}
              className="w-[49%] flex justify-center bg-green-600 px-3 py-2  rounded-md text-white font-poppins font-medium text-lg hover:bg-green-700 hover:cursor-pointer transition-all ease-in-out duration-300"
            >
              Accept
            </h1>
            <h1 className="w-[49%] flex justify-center bg-red-600 px-3 py-2 rounded-md text-white font-poppins font-medium text-lg hover:bg-red-700 hover:cursor-pointer transition-all ease-in-out duration-300">
              Reject
            </h1>
          </div>
        </div>
      </div>

      {/* Contact Details */}
      <h1 className=" mt-5 w-full text-xl font-poppins font-semibold">
        Contact Details
      </h1>
      <div className="w-full flex flex-col sm:flex-row gap-5 sm:justify-between ">
        <div className="w-[100%] flex gap-1 font-poppins font-medium  text-sm sm:text-lg">
          <img
            className="w-6 h-6"
            src="https://cdn-icons-png.flaticon.com/128/546/546394.png"
            alt=""
          />
          <span className="hidden lg:flex">Email: </span>
          <a href={`mailto:${app.email}`}>
            <span className="text-green-600 hover:cursor-pointer hover:text-blue-600">
              {app.email}
            </span>
          </a>
        </div>

        <div className="w-[100%] flex gap-1 font-poppins font-medium  text-sm sm:text-lg">
          <img
            className="w-6 h-6"
            src="https://cdn-icons-png.flaticon.com/128/1034/1034131.png"
            alt=""
          />

          <span className="hidden lg:flex">Phone: </span>
          <a href={`tel:${app.phone}`}>
            <span className="text-green-600 hover:cursor-pointer hover:text-blue-600">
              {app.phone}
            </span>
          </a>
        </div>

        <div className="w-[100%] flex gap-1 font-poppins font-medium  text-sm sm:text-lg">
          <img
            className="w-6 h-6"
            src="https://cdn-icons-png.flaticon.com/128/819/819865.png"
            alt=""
          />

          <span className="hidden lg:flex">Location: </span>
          <a
            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
              app.location
            )}`}
            target="_blank"
          >
            <span className="text-green-600 hover:cursor-pointer hover:text-blue-600">
              {app.location}
            </span>
          </a>
        </div>
      </div>

      {app && app.experience && (
        <h1 className=" mt-5 w-full text-xl font-poppins font-semibold">
          Experience
        </h1>
      )}
      {app && app.experience && (
        <div
          className="w-full text-sm sm:text-lg"
          dangerouslySetInnerHTML={{ __html: app.experience }}
        ></div>
      )}

      {app && app.cover && (
        <h1 className=" mt-5 w-full text-xl font-poppins font-semibold ">
          Cover Letter
        </h1>
      )}

      {app && app.cover && (
        <div
          className="w-full text-sm sm:text-lg "
          dangerouslySetInnerHTML={{ __html: app.cover }}
        ></div>
      )}

      <div
        id="resume"
        className="w-full max-w-screen-2xl h-[100vh] mx-auto mb-20 mt-10"
      >
        <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
          <div
            style={{
              border: "1px solid rgba(0, 0, 0, 0.3)",
              height: "750px",
            }}
          >
            <Viewer fileUrl={app.resume} />
          </div>
        </Worker>
        {/* <embed
          className="w-full h-full"
          src={app.resume}
          type="application/pdf"
        /> */}
      </div>
    </div>
  );
}
