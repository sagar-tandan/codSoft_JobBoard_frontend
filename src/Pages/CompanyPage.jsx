import React, { useState, useEffect } from "react";
import axios from "axios";
import application from "../assets/Company/application.png";
import vacancy from "../assets/Company/vacancy.png";
import plus from "../assets/Company/plus.png";
import edit from "../assets/Company/edit.png";
import del from "../assets/Company/delete.png";
import view from "../assets/Company/view.png";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

export default function CompanyPage({ id }) {
  const [jobs, setJob] = useState([]);
  const [deleted, setDeleted] = useState(false);

  useEffect(() => {
    const getJobs = async () => {
      const response = await axios.get("/getCompanyJobs", {
        params: { id },
      });
      if (response.data.error == "No Company Found!!") {
        setJob("");
        console.log(response.data.error);
      }
      setJob(response.data.findAllJobs);
    };
    getJobs();
  }, [deleted]);

  // console.log(jobs);

  const deleteJob = async (cid, jid) => {
    
    const { data } = await axios.delete("/deleteJobs", {
      data: {
        cid,
        jid,
      },
    });
    setDeleted((prevValue) => !prevValue);
  };

  return (
    <div className="mt-20 w-full max-w-screen-2xl mx-auto flex flex-col text-black gap-3">
      <div className="w-full flex flex-row gap-4 flex-wrap">
        <div className="flex flex-col border border-white shadow-black shadow-lg mx-3 my-2 w-full sm:w-[45%] lg:w-[30%] p-5 rounded-lg">
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
            <h1 className="font-poppins text-xl font-medium text-green-600 w-full px-[68px]">
              {jobs.length} Vacancy
            </h1>
          ) : (
            <h1 className="font-poppins text-xl font-medium text-green-600 w-full px-[68px]">
              {jobs.length} Vacancies
            </h1>
          )}
        </div>

        <div className="flex flex-col border border-white shadow-black shadow-lg mx-3 my-2 w-full sm:w-[45%] lg:w-[30%] p-5 rounded-lg">
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
        <Link
          className="w-full sm:w-[50%] lg:w-[30%] mx-3 my-2 p-5 rounded-lg  bg-green-600 shadow-black shadow-lg hover:cursor-pointer hover:bg-green-700 active:scale-[98%] transition-all ease-in-out duration-300"
          to="/postjob"
        >
          <div className="flex flex-col text-white w-full ">
            <div className="w-full flex gap-5 items-center">
              <img className="w-10 h-10 p-1 rounded-full" src={plus} alt="" />
              <h1 className="font-poppins text-xl font-semibold">Post a job</h1>
            </div>

            <h1 className="font-poppins font-medium text-white w-full px-[64px]">
              Click here to post job vacancy
            </h1>
          </div>
        </Link>
      </div>
      {/* For recent Applications */}
      <div></div>

      {/* For the company created Vacancies */}
      <div className="w-full flex flex-col mb-20">
        <h1 className="w-full text-xl font-medium mx-2 mt-10">
          Your Job Vacancies
        </h1>
        <div className="w-full flex flex-col gap-5 mt-3 px-3">
          {jobs &&
            jobs.map((job) => (
              <div
                key={job._id}
                className="w-full mx-1 flex flex-col sm:flex-row shadow-lg p-6 shadow-slate-400 rounded-xl"
              >
                <div className="w-full flex flex-col">
                  <h1 className="font-medium text-xl">{job.Position}</h1>
                  <h1 className="font-medium">
                    Level : <span className="text-green-600">{job.Level}</span>
                  </h1>
                  <h1 className="font-medium">
                    Applicants : <span className="text-green-600">10</span>
                  </h1>
                </div>

                <div className="w-full flex flex-row items-center gap-10 mt-3 sm:mt-0 justify-around sm:justify-end">
                  <img
                    className="w-10 h-10 cursor-pointer "
                    src={view}
                    alt=""
                  />

                  <img className="w-8 h-7 cursor-pointer " src={edit} alt="" />

                  <img
                    onClick={() => {
                      deleteJob(id, job._id);
                    }}
                    className="w-8 h-8 hover:cursor-pointer"
                    src={del}
                    alt=""
                  />
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
