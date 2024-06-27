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
//   return (

//   );
}
