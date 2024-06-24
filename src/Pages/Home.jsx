import React, { useState, useEffect } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";
// axios.defaults.withCredentials = true;
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

import email from "../assets/Asset!/email.gif";
import hero1 from "../assets/Asset!/hero1.webp";
import video from "../assets/video.mp4";

import Categories from "../components/Categories";
import JobListing from "../components/JobListing";
import HomeCandidate from "../components/HomeCandidate";
import CompanyPage from "./CompanyPage";

export default function Home({ data }) {
  const [userName, setUserName] = useState([]);
  const [cookies, setCookie, removeCookie] = useCookies(["token"]);
  const navigate = useNavigate();

  useEffect(() => {
    if (data) {
      setUserName(data);
    }
  }, [data]);

  return (
    <>
      {userName && userName.type == "candidate" && (
        <HomeCandidate
          name={userName.Username || null}
          emails={userName.Useremail || null}
          phones={userName.Userphone || null}
          cities={userName.UserselectedCity || null}
          countries={userName.UserselectedCountry || null}
          Userimage = {userName.Userimage || null}
        />
      )}

      {userName.length === 0 && <HomeCandidate />}

      {userName && userName.type == "company" && (
        <div className="mt-16">{<CompanyPage id={userName._id} image= {userName.image} />}</div>
      )}
    </>
  );
}
