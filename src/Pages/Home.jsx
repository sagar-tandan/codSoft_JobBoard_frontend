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

export default function Home() {
  const [userName, setUserName] = useState([]);
  const [cookies, setCookie, removeCookie] = useCookies(["token"]);
  const navigate = useNavigate();

  useEffect(() => {
    const verifyCookie = async () => {
      if (!cookies.token) {
        // navigate("/login");
        // console.log("cookie not found")
      }
      const { data } = await axios.post("/", {}, { withCredentials: true });
      const { status, user } = data;
      if (user) {
        setUserName(user);
      }
      return status ? "" : removeCookie("token");
    };
    verifyCookie();
  }, [cookies, navigate, removeCookie]);

  useEffect(() => {
    if (userName) {
      console.log(userName.Username);
    }
  }, [userName]);

  return (
    <>
      {userName && userName.type == "candidate" && (
        <HomeCandidate
          name={userName.Username || null}
          emails={userName.Useremail || null}
          phones={userName.Userphone || null}
          cities={userName.UserselectedCity || null}
          countries={userName.UserselectedCountry || null}
        />
      )}

      {userName.length ===0 && (
        <HomeCandidate />
      )}
      {/* {userName && (
        <div>
          <h4>
            {" "}
            Welcome <span>{userName}</span>
          </h4>
          <button onClick={Logout}>LOGOUT</button>
        </div>
      )} */}
    </>
  );
}
