import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function JobDetails() {
  const location = useLocation();

  const {
    id,
    name,
    image,
    loc,
    pos,
    salary,
    desc,
    responsibility,
    requirements,
    benefit,
    category,
    Gender,
    Experience,
    Qualification,
    level,
    AppEnd,
    time,
    date,
    skills,
    username,
    emails,
    phones,
    cities,
    countries,
  } = location.state;
  //   console.log(responsibility);

  const navigate = useNavigate();
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    // Scroll to the element with the ID "top"
    const element = document.getElementById("top");
    if (element) {
      element.scrollIntoView();
    }
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup function
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleClick = (e) => {
    if (username == null) {
      navigate("/login");
      // console.log(username)
    } else {
      navigate(`/job/jobdetails/${id}/apply`, {
        state: {
          username: username,
          emails: emails,
          phones: phones,
          cities: cities,
          countries: countries,
          jobname: pos,
          companyname: name,
          companyloc: loc,
          jobtype: time,
        },
      });
    }
  };

  return (
    <div
      id="top"
      className="flex flex-col w-full max-w-screen-2xl pb-20 pt-24 px-[5%] font-poppins mx-auto overflow-hidden"
    >
      {width > 500 ? (
        <div className="w-full bg-[#f2f2f2] flex gap-3 p-4 lg:p-12 mx-auto">
          <div className="w-full flex gap-3 sm:gap-6 justify-start items-center">
            <div className={`${width > 500 ? "inline-block" : "hidden"}`}>
              <img
                className={`w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 rounded-full`}
                src={image}
                alt={name}
              />
            </div>
            <div className="flex justify-between w-full">
              <div className="flex flex-col">
                <h1 className="text-black font-semibold text-lg md:text-xl">
                  {pos}
                </h1>

                <h2 className="text-green-500 font-semibold text-sm md:text-lg">
                  {name}
                </h2>
                <div
                  className={`${
                    width > 500 ? "flex gap-3" : "flex flex-col gap-[2px]"
                  } text-sm text-[#666666] font-medium flex-wrap`}
                >
                  <div>{loc}</div>
                  <div>9860788076</div>
                </div>
              </div>

              <div className="flex flex-col gap-5 ">
                <h1 className="text-black font-medium md:font-semibold text-sm sm:text-lg md:text-xl">
                  ${salary}
                  <span className="font-medium text-sm text-[#616161]">
                    /monthly
                  </span>
                </h1>
                <div
                  onClick={(e) => {
                    handleClick(e);
                  }}
                  className="flex flex-col justify-center items-center text-sm border-green-500 bg-green-500 rounded-lg text-white px-2 py-2 font-medium hover:cursor-pointer hover:bg-green-600 transition-all ease-in-out duration-300"
                >
                  Apply Now
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="w-full bg-[#f2f2f2] flex gap-3 p-4 lg:p-12 mx-auto">
          <div className="w-full flex gap-3 sm:gap-6 justify-start items-center">
            <div className="flex justify-between w-full gap-3">
              <div className="flex flex-col w-full gap-1">
                <h1 className="text-black font-semibold text-lg ">{pos}</h1>
                <h2 className="text-green-500 font-semibold text-sm md:text-lg">
                  {name}
                </h2>
                <h1 className="text-black font-medium md:font-semibold text-sm sm:text-lg md:text-xl">
                  ${salary}
                  <span className="font-medium text-sm text-[#616161]">
                    /monthly
                  </span>
                </h1>
                <div
                  className={`${
                    width > 500 ? "flex gap-3" : "flex flex-col gap-[2px]"
                  } text-sm text-[#666666] font-medium flex-wrap`}
                >
                  <div>{loc}</div>
                  <div>9860788076</div>
                </div>

                <div className="w-full flex flex-col items-end">
                  <div className="w-full flex justify-end text-sm text-white font-medium ">
                    <h1
                      onClick={(e) => {
                        handleClick(e);
                      }}
                      className="border-green-500 bg-green-500 px-3 py-2 rounded-lg hover:cursor-pointer hover:bg-green-600 transition-all ease-in-out duration-300"
                    >
                      Apply Now
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Now next div into 2 sections */}
      <div className="w-full flex gap-8 flex-col lg:flex-row">
        <div className="lg:w-[65%] w-full">
          {/* description */}
          <div className="w-full flex flex-col gap-2 mt-14">
            <h1 className="text-lg font-semibold">Description</h1>
            <div
              className=" text-[#666666] text-sm"
              dangerouslySetInnerHTML={{ __html: desc }}
            />
          </div>

          <div className="w-full flex flex-col gap-4 mt-14">
            <h1 className="text-lg font-semibold">Responsibilities</h1>
            <div className=" text-[#666666] flex flex-col gap-2 ">
              {responsibility.map((res) => (
                <div className="w-full flex gap-2 text-sm ">
                  <h1> ✔</h1>
                  <h1>{res.content}</h1>
                </div>
              ))}
            </div>
          </div>

          <div className="w-full flex flex-col gap-4 mt-14">
            <h1 className="text-lg font-semibold">Requirements</h1>
            <div className=" text-[#666666] flex flex-col gap-2 text-sm">
              {requirements.map((res) => (
                <div className="w-full flex gap-2">
                  <h1> ✔</h1>
                  <h1>{res.content}</h1>
                </div>
              ))}
            </div>
          </div>

          <div className="w-full flex flex-col gap-4 mt-14">
            <h1 className="text-lg font-semibold">Benefits</h1>
            <div className=" text-[#666666] flex flex-col gap-2 text-sm">
              {benefit.map((res) => (
                <div className="w-full flex gap-2">
                  <h1> ✔</h1>
                  <h1>{res.content}</h1>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* summary */}
        <div className="lg:w-[35%] w-full mt-[72px] text-sm">
          <div className="flex flex-col bg-[#f2f2f2] p-4 py-10">
            <h1 className="text-xl font-semibold text-black">Summary</h1>
            <div className="bg-green-500 h-[2px] w-[50px] mt-1"></div>
            <div className="w-full flex mt-8 gap-2 sm:gap-3 xl:justify-between">
              <ul className="flex flex-col font-medium gap-6">
                <li>Job Type</li>
                <li>Category</li>
                <li>Skills</li>
                <li>Posted</li>
                <li>Salary</li>
                <li>Experience</li>
                <li>Gender</li>
                <li>Qualification</li>
                <li>Level</li>
                <li>Expiry</li>
              </ul>

              <ul className="flex flex-col font-medium gap-6">
                <li>:</li>
                <li>:</li>
                <li>:</li>
                <li>:</li>
                <li>:</li>
                <li>:</li>
                <li>:</li>
                <li>:</li>
                <li>:</li>
                <li>:</li>
              </ul>

              <ul className="w-full flex flex-col font-medium gap-6 text-[#666666]">
                <li className="text-green-500">{time}</li>
                <li>{category}</li>
                <li className="lg:hidden hidden md:inline-block ">{skills}</li>

                <li className="xl:hidden inline-block md:hidden lg:inline-block">
                  {skills?.substring(0, 14) + "..."}
                </li>
                <li className="hidden xl:inline-block ">
                  {skills?.substring(0, 35) + "..."}
                </li>

                <li>{date}</li>
                <li>
                  {"$"} {salary} / Monthly
                </li>
                <li>{Experience}</li>
                <li>{Gender}</li>
                <li>{Qualification}</li>
                <li>{level}</li>
                <li className="text-red-500">{AppEnd}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
