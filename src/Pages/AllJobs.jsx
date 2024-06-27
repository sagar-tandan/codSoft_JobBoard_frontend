import React, { useState, useEffect } from "react";
import JobCards from "../components/JobCards";

export default function AllJobs({ jobs, datas }) {
  const [userName, setUserName] = useState([]);

  useEffect(() => {
    if (datas) {
      setUserName(datas);
    }
  }, [datas]);

  //   console.log(userName);

  const name = userName.Username || null;
  const emails = userName.Useremail || null;
  const phones = userName.Userphone || null;
  const cities = userName.UserselectedCity || null;
  const countries = userName.UserselectedCountry || null;
  const Userimage = userName.Userimage || null;

  //   console.log(jobs);
  return (
    <div className="flex flex-col w-full max-w-screen-2xl pb-20 font-poppins 2xl:mx-auto overflow-hidden mt-20 lg:px-10 md:px-5 px-3">
      <div className="w-full flex gap-4 md:gap-6 lg:gap-8 overflow-hidden flex-wrap lg:mx-auto justify-center lg:justify-start">
        {jobs.map((job) => (
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
    </div>
  );
}
