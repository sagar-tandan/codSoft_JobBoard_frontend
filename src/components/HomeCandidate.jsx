import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-hot-toast";

import email from "../assets/Asset!/email.gif";
import hero1 from "../assets/Asset!/hero1.webp";
import video from "../assets/video.mp4";
import loader from "../assets/Asset!/loader.gif";

import Categories from "./Categories";
import JobCards from "./JobCards";
import React from "react";
import PopularCompanies from "./Company";
export default function HomeCandidate({
  name,
  emails,
  phones,
  cities,
  countries,
  Userimage,
}) {
  // const [JobListing, setJobListing] = useState([]);
  const [reversedJob, setReversedjob] = useState([]);
  // const [search, setSearchData] = useState([]);
  // const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const jobslist = async () => {
      setLoading(true);
      const jobs = await axios.get("/getAllJobs");
      let reversed = [];
      for (let i = jobs.data.findJobs.length - 1; i >= 0; i--) {
        reversed.push(jobs.data.findJobs[i]);
      }
      setReversedjob(reversed);
      setLoading(false);
    };
    jobslist();
  }, []);

  // const jobListings = JobListing.length;
  const topJObs = reversedJob.slice(0, 6);
  // console.log(reversedJob);

  return (
    <div className="flex flex-col w-full max-w-screen-2xl pb-20 font-poppins mx-auto overflow-hidden mt-20 lg:mt-5">
      <div className="flex h-[40vh] lg:h-[60vh] w-full items-end lg:items-center ">
        <div className=" w-[100%] lg:w-1/2 flex justify-center items-center lg:ml-[5%] flex-col px-[10%] lg:pt-20 xl:pt-32 lg:px-[0%]">
          <h1 className="lg:text-4xl text-2xl font-bold w-full text-center lg:text-left">
            Find & <span className="text-green-600">Hire</span> Experts{" "}
          </h1>
          <h1 className="lg:text-4xl text-2xl  font-bold  w-full text-center lg:text-left">
            For any <span className="text-green-600">Job</span>{" "}
          </h1>
          <div className="w-full flex justify-center lg:justify-start">
            <p className="lg:mx-0 flex items-center justify-center lg:justify-start w-[90%] lg:w-[70%] text-[#5f5f5f] mt-4 text-sm lg:text-md">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
            </p>
          </div>

          <div className="w-full mt-4 flex gap-2 justify-center lg:justify-start">
            <div className="w-[65%] ">
              <Link to="/search">
                <input
                  className="bg-[#f2f2f2] px-3 py-2 rounded-full w-full outline-[1px]"
                  type="text"
                  // value={search}
                  placeholder="Search jobs and all"
                  // onChange={(e) => setSearchData(e.target.value)}
                />
              </Link>
            </div>
            <div
              // onClick={(e) => searchJobs(e, search)}
              className="flex justify-center items-center w-[80px] md:w-[100px] lg:w-[120px] text-sm lg:text-lg border-[2px] border-[#c1c1c1] hover:border-green-500 hover:text-white hover:bg-green-500 rounded-full hover:cursor-pointer hover:brightness-90 active:scale-90 transition-all ease-in-out duration-300 "
            >
              Search
            </div>
          </div>
        </div>
        <div className="lg:w-1/2 lg:flex relative hidden">
          <img
            className="w-full h-full object-cover "
            src={hero1}
            // src="https://i.pinimg.com/originals/a3/84/3e/a3843e404a271edb47b1908dd2a6230b.gif"
            alt=""
          />
          {/* <video className="w-full h-full object-cover pointer-events-none"  autoPlay  muted src={video}></video> */}
          <div className="absolute left-[32%] top-[24%] xl:top-[24%] 2xl:top-[22%] h-10">
            <img className="box w-[24%] xl:w-[22%] h-auto" src={email} alt="" />
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col px-[5%] mt-16">
        <div className="flex justify-between mb-8">
          <h1 className="lg:inline-block hidden text-black text-xl font-semibold">
            Most Popular Companies
          </h1>
          <h1 className="text-black text-lg inline-block lg:hidden font-semibold">
            Popular Companies
          </h1>
          {/* <h1 className="lg:flex items-center hidden font-medium text-green-600 hover:cursor-pointer">
            Explore all fields &gt;
          </h1>
          <h1 className="font-medium text-sm flex items-center lg:hidden text-green-600 hover:cursor-pointer">
            Explore &gt;
          </h1> */}
        </div>
        <PopularCompanies />
      </div>
      {/* <div className="border border-[#a9a9a9] w-full mt-16 max-w-screen-2xl"></div> */}
      <div className="w-full flex flex-col px-[5%] mt-16 lg:mt-12">
        <div className="flex justify-between mb-8">
          <h1 className="lg:inline-block hidden text-black text-xl font-semibold">
            Recent Job Circulars
          </h1>
          <h1 className="text-black text-lg inline-block lg:hidden font-semibold">
            Recent Jobs
          </h1>
          <h1 className="font-medium lg:flex items-center hidden text-green-600 hover:cursor-pointer hover:underline">
            <Link to="/job">Explore more &gt;</Link>
          </h1>

          <h1 className="font-medium text-sm flex lg:hidden text-green-600 hover:cursor-pointer items-center hover:underline">
            <Link to="/job"> Explore &gt; </Link>
          </h1>
        </div>
        {loading ? (
          <div className="w-full flex gap-4 md:gap-6 lg:gap-8 overflow-hidden flex-wrap lg:mx-auto justify-center">
            <img className="w-10 h-10" src={loader} alt="loader" />
          </div>
        ) : (
          <div className="w-full flex gap-4 md:gap-6 lg:gap-4 overflow-hidden flex-wrap lg:mx-auto justify-center lg:justify-start">
            {topJObs.map((job) => (
              <div key={job._id} className="py-3">
                <JobCards
                  id={job._id}
                  name={job.CompanyName}
                  image={job.companyImage}
                  location={job.CompanyLocation}
                  position={job.Position}
                  time={job.Type}
                  skills={job.Skills}
                  salary={job.Salary}
                  desc={job.Desc}
                  responsibility={job.Responsibility}
                  requirements={job.Requirement}
                  benefit={job.Benefits}
                  category={job.Category}
                  Gender={job.Gender}
                  Experience={job.Experience}
                  Qualification={job.Qualification}
                  level={job.Level}
                  AppEnd={job.ExpiryDate}
                  date={job.PublishedDate}
                  username={name}
                  emails={emails}
                  phones={phones}
                  cities={cities}
                  countries={countries}
                  companyPhone={job.CompanyPhone}
                  Userimage={Userimage}
                />
              </div>
            ))}
          </div>
        )}
      </div>

      <div></div>
    </div>
  );
}
