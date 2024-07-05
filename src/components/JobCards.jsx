import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function JobCards({
  id,
  name,
  image,
  location,
  position,
  time,
  skills,
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
  date,
  username,
  emails,
  phones,
  cities,
  countries,
  companyPhone,
  Userimage,
}) {
  const [width, setWidth] = useState(window.innerWidth);

  const navigate = useNavigate();

  const navigateToNext = (e) => {
    e.preventDefault();

    navigate(`/job/jobdetails/${id}`, {
      state: {
        id: id,
        name: name,
        image: image,
        loc: location,
        pos: position,
        salary: salary,
        desc: desc,
        responsibility: responsibility,
        requirements: requirements,
        benefit: benefit,
        category: category,
        Gender: Gender,
        Experience: Experience,
        Qualification: Qualification,
        level: level,
        AppEnd: AppEnd,
        time: time,
        date: date,
        skills: skills,
        username: username,
        emails: emails,
        phones: phones,
        cities: cities,
        countries: countries,
        companyPhone: companyPhone,
        Userimage: Userimage,
      },
    });
  };

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

  return (
    <div
      className={`${width > 200 && width <= 300 && "w-[270px]"}  ${
        width > 300 && width <= 350 && "w-[300px]"
      } ${width > 350 && width < 450 && "w-[350px]"} ${
        width > 450 && width < 550 && "w-[450px]"
      } ${width > 550 && width < 680 && "w-[550px]"} ${
        width >= 680 && width <= 1024 && "w-[500px]"
      }  ${width >= 1024 && "w-[316px]"}
        } flex flex-col px-4 py-6 gap-6 shadow-lg bg-[#f2f2f2] hover:bg-gray-200 font-poppins rounded-lg hover:-translate-y-2 transition-all duration-300`}
    >
      <div className="w-full flex gap-3">
        <img
          className="w-10 h-10 rounded-full object-cover"
          src={image}
          alt=""
        />
        <div className="flex flex-col">
          <h1 className="text-black font-medium">{name}</h1>
          <h2 className="text-black text-sm">{location}</h2>
        </div>
      </div>

      <div className="flex flex-col">
        <h1 className="text-black font-semibold">{position}</h1>
        <h1 className="text-green-500 font-medium text-sm">{time}</h1>
      </div>

      <h1 className="text-sm truncate w-full">{skills}</h1>

      <div className="w-full flex justify-between py-1 flex-wrap">
        {salary != null ? (
          <div className="text-black font-semibold flex flex-col ">
            <h1>{salary}</h1>
            <h1 className="font-medium text-sm text-[#616161]"> /month</h1>
          </div>
        ) : (
          <h1 className="text-black font-semibold">Negotiable</h1>
        )}

        <div
          onClick={(e) => navigateToNext(e)}
          className="flex flex-col items-center justify-center gap-1 text-sm sm:text-lg border-green-500 bg-green-500 rounded-lg text-white px-2 py-[2px] font-medium hover:cursor-pointer hover:bg-green-600 transition-all ease-in-out duration-300"
        >
          Apply Now
        </div>
      </div>
    </div>
  );
}
