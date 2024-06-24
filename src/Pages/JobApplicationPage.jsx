import React from "react";
import { useLocation } from "react-router-dom";

export default function JobApplicationPage({}) {
  const location = useLocation();
  const { pos, level, pDate, eDate } = location.state;
  const { application } = location.state;
  console.log(application);

  return (
    <div className="mt-20 w-full max-w-screen-2xl mx-auto flex flex-col text-black gap-3">
      <h1 className="w-full text-xl font-semibold font-poppins">{pos}</h1>
      <div className="flex justify-between font-poppins">
        <h1>
          Published Date: <span className="text-green-600">{pDate}</span>
        </h1>
        <h1>
          Expiry Date: <span className="text-red-600">{eDate}</span>
        </h1>
      </div>
      {application && application.length > 0 ? (
        <div className="w-full flex flex-col gap-2">
          <h1 className="font-poppins font-medium w-full text-lg mt-8">
            Available Applications:{" "}
          </h1>
          <div className="w-[98%] flex justify-between mx-auto">
            <div className="bg-gray-500 px-3 py-2 text-lg text-white font-poppins font-medium rounded-md w-[30%] flex items-center justify-center hover:cursor-pointer hover:bg-gray-600 active:scale-90 transition-all duration-300">
              Pendings
            </div>
            <div className="bg-green-500 px-3 py-2 text-lg text-white font-poppins font-medium rounded-md w-[30%] flex items-center justify-center hover:cursor-pointer hover:bg-green-600 active:scale-90 transition-all duration-300">
              Accepted
            </div>
            <div className="bg-red-500 px-3 py-2 text-lg text-white font-poppins font-medium rounded-md w-[30%] flex items-center justify-center hover:cursor-pointer hover:bg-red-600 active:scale-90 transition-all duration-300">
              Rejected
            </div>
          </div>
        </div>
      ) : (
        <h1 className="font-poppins font-medium text-lg mt-8 flex justify-center items-center"></h1>
      )}

      <div className="w-full flex flex-col gap-5 mt-3 px-3">
        {application &&
          application.length > 0 &&
          application.map((app) => (
            <div
              key={app._id}
              className="w-full mx-1 flex flex-col sm:flex-row shadow-lg p-6 shadow-slate-400 rounded-xl"
            >
              <div className="w-full flex flex-col">
                <h1 className="font-medium text-xl">{app.name}</h1>
                <h1 className="font-medium">
                  Position :{" "}
                  <span className="text-green-600">{app.jobname}</span>
                </h1>
                <h1 className="font-medium">
                  Phone : <span className="text-green-600">{app.phone}</span>
                </h1>
              </div>

              <div className="w-full flex flex-row items-center gap-10 mt-3 sm:mt-0 justify-around sm:justify-end">
                <h1 className="text-green-600 font-medium flex items-center cursor-pointer hover:underline">
                  More details &gt;
                </h1>
                {/* <img
                    className="w-10 h-10 cursor-pointer "
                    src={view}
                    alt=""
                  /> */}

                {/* <img
                    onClick={() => gotoPostaJob(e)}
                    className="w-8 h-7 cursor-pointer "
                    src={edit}
                    alt=""
                  /> */}

                {/* <img
                    onClick={() => {
                      setDialogBox(true);
                      setJobId(job._id);
                    }}
                    className="w-8 h-8 hover:cursor-pointer"
                    src={del}
                    alt=""
                  /> */}
              </div>
            </div>
          ))}

        {application && application.length == 0 && (
          <div className="w-full flex">
            <h1 className="w-full font-medium text-lg flex justify-center mt-10">
              No Applications found till now!
            </h1>
          </div>
        )}
      </div>
    </div>
  );
}
