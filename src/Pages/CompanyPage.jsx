import React, { useState, useEffect } from "react";
import axios from "axios";
import application from "../assets/Company/application.png";
import vacancy from "../assets/Company/vacancy.png";
import plus from "../assets/Company/plus.png";
// import edit from "../assets/Company/edit.png";
import del from "../assets/Company/delete.png";
import view from "../assets/Company/view.png";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export default function CompanyPage({ id, image }) {
  const [jobs, setJob] = useState([]);
  const [deleted, setDeleted] = useState(false);
  const [dialogBox, setDialogBox] = useState(false);
  const [jobid, setJobId] = useState();
  const [allApplications, setAllApplications] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const getJobs = async () => {
      const response = await axios.get("/getCompanyJobs", {
        params: { id },
      });
      if (response.data.error == "No Company Found!!") {
        setJob("");
        console.log(response.data.error);
      }
      let reversed = [];
      for (let i = response.data.findAllJobs.length - 1; i >= 0; i--) {
        reversed.push(response.data.findAllJobs[i]);
      }
      setJob(reversed);
    };
    getJobs();
  }, [deleted]);

  const deleteJob = async (cid, jid) => {
    const { data } = await axios.delete("/deleteJobs", {
      data: {
        cid,
        jid,
      },
    });
    setDeleted((prevValue) => !prevValue);
    setDialogBox(false);
    toast.success(data.message);
  };

  useEffect(() => {
    const getApplications = async () => {
      // Using reduce to collect all applications into a single array
      const allApplications = jobs.reduce((acc, job) => {
        return acc.concat(job.Applications);
      }, []);

      // console.log(allApplications);
      let reversed = [];
      for (let i = allApplications.length - 1; i >= 0; i--) {
        reversed.push(allApplications[i]);
      }
      setAllApplications(reversed);
    };
    getApplications();
  }, [jobs]);

  const recentApp = allApplications.slice(0, 6);

  const gotoJobApplication = (
    e,
    id,
    position,
    level,
    pDate,
    eDate,
    application,
    image
  ) => {
    e.preventDefault();
    navigate(`/${id}`, {
      state: {
        pos: position,
        level: level,
        pDate: pDate,
        eDate: eDate,
        application: application,
        image: image,
      },
    });
  };

  const gotoApplicatioDetails = (e, id, pos, app) => {
    e.preventDefault();
    navigate(`/${pos}/${id}`, {
      state: {
        app: app,
      },
    });
  };

  return (
    <div className="mt-20 w-full max-w-screen-2xl px-2 sm:px-4 lg:mx-auto flex flex-col text-black gap-3">
      <div className="w-full flex flex-row gap-4 flex-wrap">
        <div className="flex flex-col border border-gray-200 bg-gray-200 shadow-black shadow-lg mx-3 my-2 w-full sm:w-[45%] lg:w-[30%] p-5 rounded-lg">
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
          {jobs.length == 0 || jobs.length == 1 ? (
            <h1 className="font-poppins text-xl font-medium text-green-600 w-full pl-[68px]">
              {jobs.length} Vacancy
            </h1>
          ) : (
            <h1 className="font-poppins text-xl font-medium text-green-600 w-full pl-[68px]">
              {jobs.length} Vacancies
            </h1>
          )}
        </div>

        <div className="flex flex-col border border-gray-200 bg-gray-200 shadow-black shadow-lg mx-3 my-2 w-full sm:w-[45%] lg:w-[30%] p-5 rounded-lg">
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
          {allApplications.length == 0 || allApplications.length == 1 ? (
            <h1 className="font-poppins text-xl font-medium text-green-600 w-full pl-[68px]">
              {allApplications.length} Application
            </h1>
          ) : (
            <h1 className="font-poppins text-xl font-medium text-green-600 w-full pl-[68px]">
              {allApplications.length} Applications
            </h1>
          )}
        </div>
        <Link
          className="w-full sm:w-[50%] lg:w-[30%] mx-3 my-2 p-5 rounded-lg hover:-translate-y-3  bg-green-600 shadow-black shadow-lg hover:cursor-pointer hover:bg-green-700 active:scale-[98%] transition-all ease-in-out duration-300"
          to="/postjob"
        >
          <div className="flex flex-col text-white w-full ">
            <div className="w-full flex gap-5 items-center">
              <img className="w-10 h-10 p-1 rounded-full" src={plus} alt="" />
              <h1 className="font-poppins text-xl font-semibold">Post a job</h1>
            </div>

            <h1 className="font-poppins font-medium text-white w-full pl-[60px]">
              Click here to post job vacancy
            </h1>
          </div>
        </Link>
      </div>

      {/* For recent Applications */}
      <div className="w-full flex flex-col mb-10">
        {allApplications && allApplications.length > 0 && (
          <h1 className="w-full text-xl font-semibold mx-2 mt-6">
            Recent Applications
          </h1>
        )}

        <div className="w-full flex flex-col gap-5 mt-3 px-3">
          {allApplications &&
            allApplications.length > 0 &&
            recentApp.map((app) => (
              <div
                key={app._id}
                className="w-full px-3 flex flex-col sm:flex-row shadow-lg p-6 sm:py-7 shadow-slate-400 rounded-xl bg-gray-200"
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
                      className="w-24 h-24 rounded-full object-cover"
                      src="https://i.pinimg.com/564x/d0/7b/a6/d07ba6dcf05fa86c0a61855bc722cb7a.jpg"
                      alt=""
                    />
                  )}
                  <div className="w-full flex flex-col gap-1 justify-center">
                    <h1 className="w-full text-xl font-semibold">{app.name}</h1>
                    <h1 className="text-lg font-medium w-full">
                      <span className="hidden md:inline-block">
                        Application for:
                      </span>
                      <span className="text-green-600">{app.jobname}</span>
                    </h1>
                    <div className="w-full mt-2 gap-6 hidden sm:flex">
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

                <div className="w-full flex flex-col gap-2 justify-center">
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
                      className="text-green-600 text-lg font-medium flex items-center cursor-pointer hover:underline"
                    >
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
              </div>
            ))}

          {jobs.length > 0 &&
            allApplications &&
            allApplications.length == 0 && (
              <div className="w-full flex">
                <h1 className="w-full font-medium text-lg flex justify-center mt-10">
                  No Applications found till now!
                </h1>
              </div>
            )}
        </div>
      </div>

      {/* For the company created Vacancies */}
      <div className="w-full flex flex-col mb-20">
        {jobs && jobs.length > 0 && (
          <h1 className="w-full text-xl font-semibold mx-2 mt-6">
            Your Job Vacancies
          </h1>
        )}

        <div className="w-full flex flex-col gap-5 mt-3 px-3">
          {jobs && jobs.length > 0 ? (
            jobs.map((job) => (
              <div
                key={job._id}
                className="w-full px-3 flex flex-col sm:flex-row shadow-lg p-6 sm:py-6 shadow-slate-400 rounded-xl bg-gray-200"
              >
                <div className="w-full flex gap-4">
                  {image ? (
                    <img
                      className=" w-16 h-16 sm:w-24 sm:h-24 rounded-full object-cover"
                      src={image}
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
                    <h1 className="w-full sm:text-xl font-medium sm:font-semibold">
                      {job.Position}
                    </h1>
                    <h1 className="font-medium">
                      <span className="hidden sm:inline-block">Level : </span>
                      <span className="text-green-600">{job.Level}</span>
                    </h1>
                    <h1 className="font-medium">
                      Applicants :{" "}
                      <span className="text-green-600">
                        {job.Applications.length}
                      </span>
                    </h1>
                  </div>
                </div>

                <div className="w-full flex flex-row items-center gap-10 mt-3 sm:mt-0 justify-around sm:justify-end">
                  <img
                    onClick={(e) => {
                      gotoJobApplication(
                        e,
                        job._id,
                        job.Position,
                        job.Level,
                        job.PublishedDate,
                        job.ExpiryDate,
                        job.Applications,
                        image
                      );
                    }}
                    className="w-10 h-10 cursor-pointer "
                    src="https://cdn-icons-png.flaticon.com/128/709/709724.png"
                    alt=""
                  />

                  {/* <img
                    onClick={() => gotoPostaJob(e)}
                    className="w-8 h-7 cursor-pointer "
                    src={edit}
                    alt=""
                  /> */}

                  <img
                    onClick={() => {
                      setDialogBox(true);
                      setJobId(job._id);
                    }}
                    className="w-8 h-8 hover:cursor-pointer"
                    src={del}
                    alt=""
                  />
                </div>
              </div>
            ))
          ) : (
            <div className="w-full ">
              <h1 className="font-medium text-lg flex items-center justify-center">
                No Jobs posted yet!
              </h1>
            </div>
          )}
        </div>
      </div>

      {dialogBox && (
        <div className="w-full relative">
          <div className="fixed top-0 bottom-0 left-0 right-0 items-center z-40 w-full flex justify-center px-4 bg-[#c1c1c1] opacity-80"></div>

          <div className="absolute bottom-0 mb-20 left-0 right-0 flex w-[280px] sm:w-[400px] mx-auto bg-white rounded-lg p-10 shadow-xl shadow-black z-50 ">
            <div className="flex flex-col gap-3">
              <p className="text-gray-700 mb-4">
                Are you sure you want to delete this item?
              </p>

              <div className="flex justify-end">
                <button
                  onClick={() => {
                    deleteJob(id, jobid);
                  }}
                  className="bg-red-500 text-white px-4 py-2 rounded mr-2"
                >
                  Delete
                </button>
                <button
                  onClick={() => setDialogBox(false)}
                  className="bg-gray-300 text-gray-700 px-4 py-2 rounded"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
