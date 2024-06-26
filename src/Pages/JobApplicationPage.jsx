import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function JobApplicationPage({}) {
  const [status, setStatus] = useState("pending");
  const location = useLocation();
  const { pos, level, pDate, eDate, image } = location.state;
  const { application } = location.state;
  // console.log(application);

  const [pendingApplication, setPending] = useState([]);
  const [AcceptedApplication, setAccepted] = useState([]);
  const [RejectedApplication, setRejected] = useState([]);

  const navigate = useNavigate();

  const gotoApplicatioDetails = (e, id, pos, app) => {
    e.preventDefault();
    navigate(`/${pos}/${id}`, {
      state: {
        app1: app,
      },
    });
  };

  useEffect(() => {
    const pendingApp = application.filter((app) => app.status === "pending");

    const approvedApp = application.filter((app) => app.status === "accepted");

    const rejectedApp = application.filter((app) => app.status === "rejected");
    setPending(pendingApp);
    setAccepted(approvedApp);
    setRejected(rejectedApp);
  }, [application]);

  return (
    <div className="mt-20 w-full max-w-screen-2xl px-2 sm:px-4 lg:mx-auto flex flex-col text-black gap-3">
      <div className="w-full flex gap-4">
        {image ? (
          <img
            className="w-16 h-16 sm:w-24 sm:h-24 rounded-full object-cover"
            src={image}
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
          <h1 className="w-full text-xl font-semibold">{pos}</h1>

          <h1 className="font-medium">
            Total Application :{" "}
            <span className="text-green-600">{application.length}</span>
          </h1>
          <h1 className="font-medium flex flex-wrap gap-1">
            Duration: <span className="text-green-600">{pDate}</span> {"-"}{" "}
            <span className="text-red-600">{eDate}</span>
          </h1>
        </div>
      </div>
      {application && application.length > 0 ? (
        <div className="w-full flex flex-col gap-2">
          <h1 className="font-poppins font-medium w-full text-lg mt-6 mb-2 px-1 sm:px-3">
            Available Applications:{" "}
          </h1>
          <div className="w-[98%] flex justify-between mx-auto flex-row flex-wrap mt-1">
            <div
              onClick={(e) => {
                setStatus("pending");
              }}
              className={`${
                status === "pending"
                  ? "bg-gray-600"
                  : "bg-[#a2a2a2] hover:-translate-y-2"
              } px-3 py-2 sm:text-lg text-sm  text-white font-poppins font-medium rounded-md w-[30%] flex items-center justify-center hover:cursor-pointer hover:bg-gray-600 active:scale-90 transition-all duration-300`}
            >
              Pendings
            </div>
            <div
              onClick={(e) => {
                setStatus("accepted");
              }}
              className={`${
                status === "accepted"
                  ? "bg-green-600"
                  : "bg-[#a2a2a2] hover:-translate-y-2"
              } px-3 py-2 sm:text-lg text-sm  text-white font-poppins font-medium rounded-md w-[30%] flex items-center justify-center hover:cursor-pointer hover:bg-green-600 active:scale-90 transition-all duration-300`}
            >
              Accepted
            </div>
            <div
              onClick={(e) => {
                setStatus("rejected");
              }}
              className={`${
                status === "rejected"
                  ? "bg-red-600"
                  : "bg-[#a2a2a2] hover:-translate-y-2"
              } px-3 py-2 sm:text-lg text-sm  text-white font-poppins font-medium rounded-md w-[30%] flex items-center justify-center hover:cursor-pointer hover:bg-red-600 active:scale-90 transition-all duration-300`}
            >
              Rejected
            </div>
          </div>
        </div>
      ) : (
        <h1 className="font-poppins font-medium text-lg mt-8 flex justify-center items-center"></h1>
      )}
      {/* will fix from yt commengt analyzer */}
      <div className="w-full flex flex-col gap-5 mt-3 px-3">
        {status == "pending" ? (
          <div className="w-full">
            {pendingApplication.length > 0 ? (
              <div className="w-full">
                {pendingApplication.map((app) => (
                  <div
                    key={app._id}
                    className={`w-full px-3 flex flex-col sm:flex-row shadow-lg p-6 sm:py-8 shadow-slate-400 rounded-xl bg-gray-100`}
                  >
                    <div className="w-full flex gap-4">
                      {app && app.Userimage ? (
                        <img
                          className="w-16 h-16 sm:w-24 sm:h-24 rounded-full object-cover"
                          src={app.Userimage}
                          alt=""
                        />
                      ) : (
                        <img
                          className="w-16 h-16 sm:w-24 sm:h-24  rounded-full object-cover"
                          src="https://i.pinimg.com/564x/d0/7b/a6/d07ba6dcf05fa86c0a61855bc722cb7a.jpg"
                          alt=""
                        />
                      )}
                      <div className="w-full flex flex-col gap-1 justify-center">
                        <h1 className="w-full text-xl font-semibold">
                          {app.name}
                        </h1>

                        <h1 className="text-lg font-medium w-full">
                          <span className="hidden md:inline-block">
                            Application for:
                          </span>
                          <span className="text-green-600"> {app.jobname}</span>
                        </h1>

                        <div className="w-full  gap-6 hidden sm:flex mt-1">
                          {app && app.fb && (
                            <a href={app.fb} target="_blank">
                              <img
                                className="w-7 h-7 rounded-full hover:cursor-pointer hover:-translate-y-1 transition-all duration-300"
                                src="https://cdn-icons-png.flaticon.com/128/3670/3670124.png"
                                alt="fb"
                              />
                            </a>
                          )}
                          {app && app.linkedin && (
                            <a href={app.linkedin} target="_blank">
                              <img
                                className="w-7 h-7 rounded-full hover:cursor-pointer hover:-translate-y-1 transition-all duration-300"
                                src="https://cdn-icons-png.flaticon.com/128/145/145807.png"
                                alt="linkedin"
                              />
                            </a>
                          )}
                          {app && app.github && (
                            <a href={app.github} target="_blank">
                              <img
                                className="w-7 h-7 rounded-full hover:cursor-pointer hover:-translate-y-1 transition-all duration-300"
                                src="https://cdn-icons-png.flaticon.com/128/2111/2111432.png"
                                alt="git"
                              />
                            </a>
                          )}

                          {app && app.portfolio && (
                            <a href={app.portfolio} target="_blank">
                              <img
                                className="w-7 h-7 rounded-full hover:cursor-pointer hover:-translate-y-1 transition-all duration-300"
                                src="https://cdn-icons-png.flaticon.com/128/5195/5195762.png"
                                alt="port"
                              />
                            </a>
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="w-full flex flex-col gap-2 justify-center mt-1">
                      <div className="w-[80%]  sm:hidden flex mt-3 mx-auto justify-around">
                        {app && app.fb && (
                          <a href={app.fb} target="_blank">
                            <img
                              className="w-7 h-7 rounded-full hover:cursor-pointer hover:-translate-y-1 transition-all duration-300"
                              src="https://cdn-icons-png.flaticon.com/128/3670/3670124.png"
                              alt="fb"
                            />
                          </a>
                        )}
                        {app && app.linkedin && (
                          <a href={app.linkedin} target="_blank">
                            <img
                              className="w-7 h-7 rounded-full hover:cursor-pointer hover:-translate-y-1 transition-all duration-300"
                              src="https://cdn-icons-png.flaticon.com/128/145/145807.png"
                              alt="linkedin"
                            />
                          </a>
                        )}
                        {app && app.github && (
                          <a href={app.github} target="_blank">
                            <img
                              className="w-7 h-7 rounded-full hover:cursor-pointer hover:-translate-y-1 transition-all duration-300"
                              src="https://cdn-icons-png.flaticon.com/128/2111/2111432.png"
                              alt="git"
                            />
                          </a>
                        )}

                        {app && app.portfolio && (
                          <a href={app.portfolio} target="_blank">
                            <img
                              className="w-7 h-7 rounded-full hover:cursor-pointer hover:-translate-y-1 transition-all duration-300"
                              src="https://cdn-icons-png.flaticon.com/128/5195/5195762.png"
                              alt="port"
                            />
                          </a>
                        )}
                      </div>

                      <div className="w-full flex flex-row items-center gap-10 mt-3 sm:mt-0 justify-around sm:justify-end">
                        <h1
                          onClick={(e) => {
                            gotoApplicatioDetails(e, app._id, app.jobname, app);
                          }}
                          className="text-green-600 font-medium flex items-center cursor-pointer hover:underline text-lg"
                        >
                          More details &gt;
                        </h1>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="w-full flex items-center justify-center">
                <h1>No Pending applications!</h1>
              </div>
            )}
          </div>
        ) : status == "accepted" ? (
          <div className="w-full">
            {AcceptedApplication.length > 0 ? (
              <div className="w-full">
                {AcceptedApplication.map((app) => (
                  <div
                    key={app._id}
                    className={`w-full px-3 flex flex-col sm:flex-row shadow-lg p-6 sm:py-8 shadow-slate-400 rounded-xl bg-green-100`}
                  >
                    <div className="w-full flex gap-4">
                      {app && app.Userimage ? (
                        <img
                          className="w-16 h-16 sm:w-24 sm:h-24 rounded-full object-cover"
                          src={app.Userimage}
                          alt=""
                        />
                      ) : (
                        <img
                          className="w-16 h-16 sm:w-24 sm:h-24  rounded-full object-cover"
                          src="https://i.pinimg.com/564x/d0/7b/a6/d07ba6dcf05fa86c0a61855bc722cb7a.jpg"
                          alt=""
                        />
                      )}
                      <div className="w-full flex flex-col gap-1 justify-center">
                        <h1 className="w-full text-xl font-semibold">
                          {app.name}
                        </h1>

                        <h1 className="text-lg font-medium w-full">
                          <span className="hidden md:inline-block">
                            Application for:
                          </span>
                          <span className="text-green-600"> {app.jobname}</span>
                        </h1>

                        <div className="w-full  gap-6 hidden sm:flex mt-1">
                          {app && app.fb && (
                            <a href={app.fb} target="_blank">
                              <img
                                className="w-7 h-7 rounded-full hover:cursor-pointer hover:-translate-y-1 transition-all duration-300"
                                src="https://cdn-icons-png.flaticon.com/128/3670/3670124.png"
                                alt="fb"
                              />
                            </a>
                          )}
                          {app && app.linkedin && (
                            <a href={app.linkedin} target="_blank">
                              <img
                                className="w-7 h-7 rounded-full hover:cursor-pointer hover:-translate-y-1 transition-all duration-300"
                                src="https://cdn-icons-png.flaticon.com/128/145/145807.png"
                                alt="linkedin"
                              />
                            </a>
                          )}
                          {app && app.github && (
                            <a href={app.github} target="_blank">
                              <img
                                className="w-7 h-7 rounded-full hover:cursor-pointer hover:-translate-y-1 transition-all duration-300"
                                src="https://cdn-icons-png.flaticon.com/128/2111/2111432.png"
                                alt="git"
                              />
                            </a>
                          )}

                          {app && app.portfolio && (
                            <a href={app.portfolio} target="_blank">
                              <img
                                className="w-7 h-7 rounded-full hover:cursor-pointer hover:-translate-y-1 transition-all duration-300"
                                src="https://cdn-icons-png.flaticon.com/128/5195/5195762.png"
                                alt="port"
                              />
                            </a>
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="w-full flex flex-col gap-2 justify-center mt-1">
                      <div className="w-[80%]  sm:hidden flex mt-3 mx-auto justify-around">
                        {app && app.fb && (
                          <a href={app.fb} target="_blank">
                            <img
                              className="w-7 h-7 rounded-full hover:cursor-pointer hover:-translate-y-1 transition-all duration-300"
                              src="https://cdn-icons-png.flaticon.com/128/3670/3670124.png"
                              alt="fb"
                            />
                          </a>
                        )}
                        {app && app.linkedin && (
                          <a href={app.linkedin} target="_blank">
                            <img
                              className="w-7 h-7 rounded-full hover:cursor-pointer hover:-translate-y-1 transition-all duration-300"
                              src="https://cdn-icons-png.flaticon.com/128/145/145807.png"
                              alt="linkedin"
                            />
                          </a>
                        )}
                        {app && app.github && (
                          <a href={app.github} target="_blank">
                            <img
                              className="w-7 h-7 rounded-full hover:cursor-pointer hover:-translate-y-1 transition-all duration-300"
                              src="https://cdn-icons-png.flaticon.com/128/2111/2111432.png"
                              alt="git"
                            />
                          </a>
                        )}

                        {app && app.portfolio && (
                          <a href={app.portfolio} target="_blank">
                            <img
                              className="w-7 h-7 rounded-full hover:cursor-pointer hover:-translate-y-1 transition-all duration-300"
                              src="https://cdn-icons-png.flaticon.com/128/5195/5195762.png"
                              alt="port"
                            />
                          </a>
                        )}
                      </div>

                      <div className="w-full flex flex-row items-center gap-10 mt-3 sm:mt-0 justify-around sm:justify-end">
                        <h1
                          onClick={(e) => {
                            gotoApplicatioDetails(e, app._id, app.jobname, app);
                          }}
                          className="text-green-600 font-medium flex items-center cursor-pointer hover:underline text-lg"
                        >
                          More details &gt;
                        </h1>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="w-full flex items-center justify-center">
                <h1>No accepted applications!</h1>
              </div>
            )}
          </div>
        ) : (
          <div className="w-full">
            {RejectedApplication.length > 0 ? (
              <div className="w-full">
                {RejectedApplication.map((app) => (
                  <div
                    key={app._id}
                    className={`w-full px-3 flex flex-col sm:flex-row shadow-lg p-6 sm:py-8 shadow-slate-400 rounded-xl bg-red-100`}
                  >
                    <div className="w-full flex gap-4">
                      {app && app.Userimage ? (
                        <img
                          className="w-16 h-16 sm:w-24 sm:h-24 rounded-full object-cover"
                          src={app.Userimage}
                          alt=""
                        />
                      ) : (
                        <img
                          className="w-16 h-16 sm:w-24 sm:h-24  rounded-full object-cover"
                          src="https://i.pinimg.com/564x/d0/7b/a6/d07ba6dcf05fa86c0a61855bc722cb7a.jpg"
                          alt=""
                        />
                      )}
                      <div className="w-full flex flex-col gap-1 justify-center">
                        <h1 className="w-full text-xl font-semibold">
                          {app.name}
                        </h1>

                        <h1 className="text-lg font-medium w-full">
                          <span className="hidden md:inline-block">
                            Application for:
                          </span>
                          <span className="text-green-600"> {app.jobname}</span>
                        </h1>

                        <div className="w-full  gap-6 hidden sm:flex mt-1">
                          {app && app.fb && (
                            <a href={app.fb} target="_blank">
                              <img
                                className="w-7 h-7 rounded-full hover:cursor-pointer hover:-translate-y-1 transition-all duration-300"
                                src="https://cdn-icons-png.flaticon.com/128/3670/3670124.png"
                                alt="fb"
                              />
                            </a>
                          )}
                          {app && app.linkedin && (
                            <a href={app.linkedin} target="_blank">
                              <img
                                className="w-7 h-7 rounded-full hover:cursor-pointer hover:-translate-y-1 transition-all duration-300"
                                src="https://cdn-icons-png.flaticon.com/128/145/145807.png"
                                alt="linkedin"
                              />
                            </a>
                          )}
                          {app && app.github && (
                            <a href={app.github} target="_blank">
                              <img
                                className="w-7 h-7 rounded-full hover:cursor-pointer hover:-translate-y-1 transition-all duration-300"
                                src="https://cdn-icons-png.flaticon.com/128/2111/2111432.png"
                                alt="git"
                              />
                            </a>
                          )}

                          {app && app.portfolio && (
                            <a href={app.portfolio} target="_blank">
                              <img
                                className="w-7 h-7 rounded-full hover:cursor-pointer hover:-translate-y-1 transition-all duration-300"
                                src="https://cdn-icons-png.flaticon.com/128/5195/5195762.png"
                                alt="port"
                              />
                            </a>
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="w-full flex flex-col gap-2 justify-center mt-1">
                      <div className="w-[80%]  sm:hidden flex mt-3 mx-auto justify-around">
                        {app && app.fb && (
                          <a href={app.fb} target="_blank">
                            <img
                              className="w-7 h-7 rounded-full hover:cursor-pointer hover:-translate-y-1 transition-all duration-300"
                              src="https://cdn-icons-png.flaticon.com/128/3670/3670124.png"
                              alt="fb"
                            />
                          </a>
                        )}
                        {app && app.linkedin && (
                          <a href={app.linkedin} target="_blank">
                            <img
                              className="w-7 h-7 rounded-full hover:cursor-pointer hover:-translate-y-1 transition-all duration-300"
                              src="https://cdn-icons-png.flaticon.com/128/145/145807.png"
                              alt="linkedin"
                            />
                          </a>
                        )}
                        {app && app.github && (
                          <a href={app.github} target="_blank">
                            <img
                              className="w-7 h-7 rounded-full hover:cursor-pointer hover:-translate-y-1 transition-all duration-300"
                              src="https://cdn-icons-png.flaticon.com/128/2111/2111432.png"
                              alt="git"
                            />
                          </a>
                        )}

                        {app && app.portfolio && (
                          <a href={app.portfolio} target="_blank">
                            <img
                              className="w-7 h-7 rounded-full hover:cursor-pointer hover:-translate-y-1 transition-all duration-300"
                              src="https://cdn-icons-png.flaticon.com/128/5195/5195762.png"
                              alt="port"
                            />
                          </a>
                        )}
                      </div>

                      <div className="w-full flex flex-row items-center gap-10 mt-3 sm:mt-0 justify-around sm:justify-end">
                        <h1
                          onClick={(e) => {
                            gotoApplicatioDetails(e, app._id, app.jobname, app);
                          }}
                          className="text-green-600 font-medium flex items-center cursor-pointer hover:underline text-lg"
                        >
                          More details &gt;
                        </h1>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="w-full flex items-center justify-center">
                <h1>No rejected applications!</h1>
              </div>
            )}
          </div>
        )}

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
