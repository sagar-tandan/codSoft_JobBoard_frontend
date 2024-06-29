import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-hot-toast";

import email from "../assets/Asset!/email.gif";
import hero1 from "../assets/Asset!/hero1.webp";
import loader from "../assets/Asset!/loader.gif";

import JobCards from "../components/JobCards";
import React from "react";

export default function SearchPage({ data }) {
  const [userName, setUserName] = useState([]);
  const [search, setSearchData] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (data) {
      setUserName(data);
    }
  }, [data]);

  const name = userName.Username || null;
  const emails = userName.Useremail || null;
  const phones = userName.Userphone || null;
  const cities = userName.UserselectedCity || null;
  const countries = userName.UserselectedCountry || null;
  const Userimage = userName.Userimage || null;

  const searchJobs = async (e, query) => {
    e.preventDefault();
    // console.log(search);
    if (query.length === 0) {
      const searchInput = document.getElementById("searchid");
      searchInput.placeholder = "Enter query to search";
      setSearchResults('')
    } else {
      try {
        setLoading(true);

        const response = await axios.get("/getSearchedJobs", {
          params: { query }, // Pass query as params object
        });

        if (response.data.message) {
          toast.error(response.data.message);
        } else {
          // If response contains job data
          setSearchResults(response.data.findJobs);
          // console.log(searchResults);
        }
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <div className="flex flex-col w-full max-w-screen-2xl pb-20 font-poppins mx-auto overflow-hidden lg:mt-5">
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
              <input
                id="searchid"
                className="bg-[#f2f2f2] px-3 py-2 rounded-full w-full outline-[1px]"
                type="text"
                value={search}
                placeholder="Search jobs and all"
                autoFocus
                onChange={(e) => setSearchData(e.target.value)}
              />
            </div>
            <div
              onClick={(e) => searchJobs(e, search)}
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

      <div className="border border-[#a9a9a9] w-full mt-14 max-w-screen-2xl"></div>
      <div className="w-full flex flex-col px-[5%] mt-16 lg:mt-6">
        <div className="flex justify-between mb-8">
          <h1 className="lg:inline-block hidden text-black text-xl font-semibold">
            Available Jobs
          </h1>
          <h1 className="text-black text-lg inline-block lg:hidden font-semibold">
            Available Jobs
          </h1>
        </div>
        {loading ? (
          <div className="w-full flex gap-4 md:gap-6 lg:gap-8 overflow-hidden flex-wrap lg:mx-auto justify-center">
            <img className="w-10 h-10" src={loader} alt="loader" />
          </div>
        ) : (
          <div className="w-full">
            {searchResults.length > 0 ? (
              <div className="w-full flex gap-4 md:gap-6 lg:gap-8 overflow-hidden flex-wrap lg:mx-auto justify-center lg:justify-start">
                {searchResults.map((job) => (
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
            ) : (
              <div className="w-full flex items-center justify-center mt-6 font-poppins font-medium">
                <h1>No Related Jobs found!!</h1>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
