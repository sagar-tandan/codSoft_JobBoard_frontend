import React from "react";
import { useLocation } from "react-router-dom";

export default function ApplicationDetails() {
  const location = useLocation();
  const { app } = location.state;
  //   console.log(app);
  return (
    <div className="mt-20 w-full max-w-screen-2xl mx-auto flex flex-col text-black gap-3 font-poppins">
      <div>
        <h1 className="w-full font-medium text-xl flex items-center justify-center gap-2">
          Application details of
          <span className="text-green-600 font-semibold text-xl">
            {" "}
            {app.name}
          </span>
        </h1>
      </div>
      <div className="w-full flex flex-row justify-between items-center bg-[#f2f2f2] px-3 py-6 rounded-lg">
        <div className="w-full flex gap-4">
          {app && app.Userimage ? (
            <img
              className="w-24 h-24 rounded-full object-cover"
              src={app.Userimage}
              alt=""
            />
          ) : (
            <img
              className="w-24 h-24 rounded-full object-cover"
              src="https://i.pinimg.com/564x/d0/7b/a6/d07ba6dcf05fa86c0a61855bc722cb7a.jpg"
              alt=""
            />
          )}
          <div className="w-full flex flex-col gap-1 justify-center">
            <h1 className="w-full text-xl font-semibold">{app.name}</h1>
            <h1 className="text-lg font-medium">
              Application for:{" "}
              <span className="text-green-600">{app.jobname}</span>
            </h1>
            <div className="w-full flex gap-6">
              {app && app.fb && (
                <a href={app.fb} target="_blank">
                  <img
                    className="w-7 h-7 rounded-full hover:cursor-pointer"
                    src="https://cdn-icons-png.flaticon.com/128/3670/3670124.png"
                    alt="fb"
                  />
                </a>
              )}
              {app && app.linkedin && (
                <a href={app.linkedin} target="_blank">
                  <img
                    className="w-7 h-7 rounded-full hover:cursor-pointer"
                    src="https://cdn-icons-png.flaticon.com/128/145/145807.png"
                    alt="linkedin"
                  />
                </a>
              )}
              {app && app.github && (
                <a href={app.github} target="_blank">
                  <img
                    className="w-7 h-7 rounded-full hover:cursor-pointer"
                    src="https://cdn-icons-png.flaticon.com/128/2111/2111432.png"
                    alt="git"
                  />
                </a>
              )}

              {app && app.portfolio && (
                <a href={app.portfolio} target="_blank">
                  <img
                    className="w-7 h-7 rounded-full hover:cursor-pointer"
                    src="https://cdn-icons-png.flaticon.com/128/5195/5195762.png"
                    alt="port"
                  />
                </a>
              )}
            </div>
          </div>
        </div>

        <div className="w-full flex gap-6 justify-end">
          <h1 className="w-[150px] flex justify-center bg-green-600 p-3 rounded-md text-white font-poppins font-medium text-lg hover:bg-green-700 hover:cursor-pointer transition-all ease-in-out duration-300">
            Accept
          </h1>
          <h1 className="w-[150px] flex justify-center bg-red-600 p-3 rounded-md text-white font-poppins font-medium text-lg hover:bg-red-700 hover:cursor-pointer transition-all ease-in-out duration-300">
            Reject
          </h1>
        </div>
      </div>
      {/* Contact Details */}
      <h1 className=" mt-5 w-full text-xl font-poppins font-semibold">
        Contact Details
      </h1>
      <div className="w-full flex justify-between flex-wrap">
        <div className="w-[30%] flex gap-1 font-poppins font-medium text-lg">
          <img
            className="w-6 h-6"
            src="https://cdn-icons-png.flaticon.com/128/546/546394.png"
            alt=""
          />
          <span>Email: </span>
          <a href={`mailto:${app.email}`}>
            <span className="text-green-600 hover:cursor-pointer hover:text-blue-600">
              {app.email}
            </span>
          </a>
        </div>

        <div className="w-[30%] flex gap-1 font-poppins font-medium text-lg">
          <img
            className="w-6 h-6"
            src="https://cdn-icons-png.flaticon.com/128/1034/1034131.png"
            alt=""
          />

          <span>Phone: </span>
          <a href={`tel:${app.phone}`}>
            <span className="text-green-600 hover:cursor-pointer hover:text-blue-600">
              {app.phone}
            </span>
          </a>
        </div>

        <div className="w-[30%] flex gap-1 font-poppins font-medium text-lg">
          <img
            className="w-6 h-6"
            src="https://cdn-icons-png.flaticon.com/128/819/819865.png"
            alt=""
          />

          <span>Location: </span>
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
    </div>
  );
}
